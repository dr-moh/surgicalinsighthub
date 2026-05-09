/**
 * MCQ Bank Loader
 * Dynamically loads specialty-specific question modules PLUS the new AI-generated JSON file.
 * Part of the SIH MCQ Arena Modularization Refactor.
 */

(function() {
    window.QUESTIONS = [];
    window.QUESTIONS_LOADED = false;

    // Helper functions
    function flattenQuestions(items, output) {
        output = output || [];
        items.forEach(function(item) {
            if (Array.isArray(item)) {
                flattenQuestions(item, output);
            } else if (item && typeof item === 'object') {
                output.push(item);
            }
        });
        return output;
    }

    // LEGACY ADAPTER FORMATTING FUNCTIONS
    // These functions ensure that the old 2865 questions still get their SHARP fallback
    // Since we overwrote js/questions.js, we accidentally deleted the fallback generator!
    function compactText(value, fallback, maxWords) {
        var cleaned = String(value || '').replace(/\s+/g, ' ').trim();
        if (!cleaned) return fallback || '';
        var words = cleaned.split(' ');
        if (maxWords && words.length > maxWords) {
            return words.slice(0, maxWords).join(' ');
        }
        return cleaned;
    }

    function compactSentence(value, fallback, maxWords) {
        var cleaned = String(value || '').replace(/\s+/g, ' ').trim();
        if (!cleaned) return fallback || '';
        var sentence = cleaned.split(/[.!?]/)[0].trim();
        if (!sentence) sentence = cleaned;
        var words = sentence.split(' ');
        if (maxWords && words.length > maxWords) {
            sentence = words.slice(0, maxWords).join(' ');
        }
        return sentence;
    }

    function guidelineLabel(question) {
        var guideline = String(question.guideline || '').trim();
        if (guideline && !/\.(pdf|docx?|pptx?)$/i.test(guideline) && !/^source:/i.test(guideline)) {
            return compactText(guideline, '', 14);
        }
        var specialty = String(question.specialty || '').trim();
        var familyMap = {
            'Anesthesia': 'ASA practice guidelines',
            'Breast & Endocrine': 'NCCN endocrine and breast guidelines',
            'Cardiothoracic': 'STS / AATS cardiothoracic guidelines',
            'Colorectal': 'ASCRS colorectal guidelines',
            'General Surgery': 'ACS / surgical board principles',
            'HPB': 'HPB surgical guidelines',
            'Neurosurgery': 'AANS / CNS neurosurgical guidelines',
            'Orthopedic': 'AAOS orthopedic guidelines',
            'Pediatric Surgery': 'APSA pediatric surgery principles',
            'Plastic Surgery': 'BSSH / reconstructive principles',
            'Trauma': 'ATLS / EAST trauma guidelines',
            'Urology': 'AUA / EAU urology guidelines',
            'Vascular': 'SVS / NICE vascular guidelines'
        };
        return compactText(familyMap[specialty] || question.topic || 'Review the topic-specific guideline.', '', 14);
    }

    function buildSharpFallback(question) {
        var answerLetter = question.answer || 'A';
        var answerText = question.options ? question.options[answerLetter] : '';
        var explanation = question.explanation && typeof question.explanation === 'object' ? question.explanation.correct : '';
        
        return {
            S: 'Review the stem and choose the best option.',
            H: compactSentence(explanation || answerText, 'The correct option matches the stem.', 24),
            A: 'Eliminate distractors that conflict with the stem or core principle.',
            R: guidelineLabel(question),
            P: compactSentence(question.takeaway || explanation || answerText || 'Memorize the one-line takeaway.', 'Memorize the one-line takeaway.', 20)
        };
    }

    function buildSupplementaryCallouts(question, sharpData) {
        var source = question.supplementary_callouts && typeof question.supplementary_callouts === 'object'
            ? question.supplementary_callouts
            : {};
        var answerLetter = question.answer || 'A';
        var answerText = question.options ? question.options[answerLetter] : '';

        return {
            answer: compactText('Answer ' + answerLetter + ': ' + (answerText || 'Insufficient Data in Source'), 'Insufficient Data in Source', 24),
            guideline: compactText(source.guideline || question.guideline || sharpData.R || guidelineLabel(question), guidelineLabel(question), 40),
            takeaway: compactText(source.takeaway || question.takeaway || sharpData.P || 'Memorize the board-style takeaway from this question.', 'Memorize the board-style takeaway from this question.', 32),
            visualization: compactText(source.visualization || question.visualization || 'Visualize the single pathognomonic radiological or operative finding that confirms the diagnosis.', 'Visualize the single pathognomonic radiological or operative finding that confirms the diagnosis.', 40)
        };
    }

    // New AI Format Adapter (Translates your SHARP JSON to your Arena format)
    function adaptAIQuestion(aiQuestion) {
        // If it's already in the old format, just return it (Legacy)
        if (aiQuestion.specialty && aiQuestion.options && aiQuestion.options.A) {
            
            // Re-apply the legacy SHARP fallback logic for old questions
            if (!aiQuestion.sharp_metadata) {
                var fallback = buildSharpFallback(aiQuestion);
                aiQuestion.sharp_metadata = {
                    S: fallback.S,
                    H: aiQuestion.explanation?.correct || fallback.H,
                    A: fallback.A,
                    R: aiQuestion.guideline || fallback.R,
                    P: aiQuestion.takeaway || fallback.P
                };
            }
            if (!aiQuestion.supplementary_callouts) {
                aiQuestion.supplementary_callouts = buildSupplementaryCallouts(aiQuestion, aiQuestion.sharp_metadata);
            }
            if (typeof aiQuestion.discrepancy_flag !== 'string') {
                aiQuestion.discrepancy_flag = '';
            }
            return aiQuestion; 
        }

        // Figure out correct answer letter for NEW AI JSON
        let answerLetter = "A";
        let optionsObj = {};
        const letters = ['A', 'B', 'C', 'D', 'E'];
        
        if (Array.isArray(aiQuestion.options)) {
            aiQuestion.options.forEach((optText, index) => {
                if (index < letters.length) {
                    let cleanText = optText.replace(/^[A-E]\)\s*/i, '').trim();
                    optionsObj[letters[index]] = cleanText;
                    
                    let cleanCorrect = aiQuestion.correct_answer.replace(/^[A-E]\)\s*/i, '').trim();
                    if (cleanText === cleanCorrect || aiQuestion.correct_answer.includes(cleanText)) {
                        answerLetter = letters[index];
                    }
                }
            });
        }

        // Return standardized NEW question
        var sharpMetadata = {
            S: aiQuestion.sharp_debrief?.S_set_the_stage || aiQuestion.sharp_debrief?.scenario || "",
            H: aiQuestion.sharp_debrief?.H_highlight_excellence || aiQuestion.sharp_debrief?.answer || "",
            A: aiQuestion.sharp_debrief?.A_address_the_gaps || aiQuestion.sharp_debrief?.rationale || "",
            R: aiQuestion.sharp_debrief?.R_review_learning_points || aiQuestion.sharp_debrief?.pearls || "",
            P: aiQuestion.sharp_debrief?.P_plan_for_improvement || aiQuestion.sharp_debrief?.hint || ""
        };

        var adaptedQuestion = {
            id: "AI_" + Math.floor(Math.random() * 10000),
            question: aiQuestion.question,
            specialty: (aiQuestion.tags && aiQuestion.tags[0]) ? aiQuestion.tags[0].charAt(0).toUpperCase() + aiQuestion.tags[0].slice(1) : "General Surgery",
            topic: (aiQuestion.tags && aiQuestion.tags[1]) ? aiQuestion.tags[1] : "Surgical Principles",
            options: optionsObj,
            answer: answerLetter,
            sharp_metadata: sharpMetadata,
            supplementary_callouts: {
                guideline: aiQuestion.supplementary_callouts?.guideline || aiQuestion.guideline || sharpMetadata.R || "",
                takeaway: aiQuestion.supplementary_callouts?.takeaway || aiQuestion.takeaway || sharpMetadata.P || "",
                visualization: aiQuestion.supplementary_callouts?.visualization || aiQuestion.visualization || ""
            },
            discrepancy_flag: typeof aiQuestion.discrepancy_flag === 'string' ? aiQuestion.discrepancy_flag : ''
        };
        adaptedQuestion.supplementary_callouts = buildSupplementaryCallouts(adaptedQuestion, sharpMetadata);
        return adaptedQuestion;
    }

    // Load canonical questions first (primary source)
    var canonicalScript = document.createElement('script');
    canonicalScript.src = 'js/questions/canonical_questions.js?v=3.0';
    canonicalScript.async = false;
    canonicalScript.onload = function() {
        console.log('Loaded canonical questions:', window.QUESTIONS.length);
        processAllQuestions();
    };
    canonicalScript.onerror = function() {
        console.warn('MCQ Bank: Failed to load canonical_questions.js, falling back to legacy modules');
        loadLegacyModules();
    };
    document.head.appendChild(canonicalScript);

    function loadLegacyModules() {
        const legacyModules = [
            'general_surgery.js', 'hpb.js', 'colorectal.js', 'anesthesia.js',
            'vascular.js', 'trauma.js', 'urology.js', 'cardiothoracic.js',
            'pediatric_surgery.js', 'orthopedic.js', 'orthopedics.js',
            'neurosurgery.js', 'breast_endocrine.js', 'breast_surgery.js',
            'plastic_surgery.js', 'pdf_questions.js'
        ];

        let loadedCount = 0;
        legacyModules.forEach(file => {
            const script = document.createElement('script');
            script.src = 'js/questions/' + file + '?v=2.3';
            script.async = false;
            script.onload = function() {
                loadedCount++;
                if (loadedCount === legacyModules.length) {
                    processAllQuestions();
                }
            };
            script.onerror = function() {
                console.warn('MCQ Bank: Failed to load legacy module ' + file);
                loadedCount++;
                if (loadedCount === legacyModules.length) {
                    processAllQuestions();
                }
            };
            document.head.appendChild(script);
        });
    }

    function processAllQuestions() {
        window.QUESTIONS = flattenQuestions(window.QUESTIONS)
            .map(adaptAIQuestion)
            .filter(Boolean);
            
        // Dedupe by stem
        var seen = {};
        var uniqueQuestions = [];
        window.QUESTIONS.forEach(function(q) {
            var stem = (q.question || '').replace(/\s+/g, ' ').trim().toLowerCase();
            if (stem && !seen[stem]) {
                seen[stem] = true;
                uniqueQuestions.push(q);
            }
        });
        
        window.QUESTIONS = uniqueQuestions;
        window.QUESTIONS_LOADED = true;
        console.log('MCQ Bank Ready! Total unique questions: ' + window.QUESTIONS.length);
    }
})();
