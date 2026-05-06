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
        return {
            id: "AI_" + Math.floor(Math.random() * 10000),
            question: aiQuestion.question,
            specialty: (aiQuestion.tags && aiQuestion.tags[0]) ? aiQuestion.tags[0].charAt(0).toUpperCase() + aiQuestion.tags[0].slice(1) : "General Surgery",
            topic: (aiQuestion.tags && aiQuestion.tags[1]) ? aiQuestion.tags[1] : "Surgical Principles",
            options: optionsObj,
            answer: answerLetter,
            sharp_metadata: {
                S: aiQuestion.sharp_debrief?.S_set_the_stage || aiQuestion.sharp_debrief?.scenario || "",
                H: aiQuestion.sharp_debrief?.H_highlight_excellence || aiQuestion.sharp_debrief?.answer || "",
                A: aiQuestion.sharp_debrief?.A_address_the_gaps || aiQuestion.sharp_debrief?.rationale || "",
                R: aiQuestion.sharp_debrief?.R_review_learning_points || aiQuestion.sharp_debrief?.pearls || "",
                P: aiQuestion.sharp_debrief?.P_plan_for_improvement || aiQuestion.sharp_debrief?.hint || ""
            }
        };
    }

    const modules = [
        'general_surgery.js', 'hpb.js', 'colorectal.js', 'anesthesia.js',
        'vascular.js', 'trauma.js', 'urology.js', 'cardiothoracic.js',
        'pediatric_surgery.js', 'orthopedic.js', 'orthopedics.js',
        'neurosurgery.js', 'breast_endocrine.js', 'breast_surgery.js',
        'plastic_surgery.js', 'pdf_questions.js'
    ];

    let loadedCount = 0;

    // Load legacy JS modules
    modules.forEach(file => {
        const script = document.createElement('script');
        script.src = 'js/questions/' + file + '?v=2.3';
        script.async = false;
        script.onload = () => {
            loadedCount++;
            checkAllLoaded();
        };
        script.onerror = () => {
            console.warn('MCQ Bank: Failed to load legacy module ' + file);
            loadedCount++;
            checkAllLoaded();
        };
        document.head.appendChild(script);
    });

    // Also load the new AI JSON file!
    fetch('questions.json')
        .then(response => {
            if (!response.ok) throw new Error("JSON not found");
            return response.json();
        })
        .then(data => {
            console.log("Successfully loaded AI questions!");
            const adaptedData = data.map(adaptAIQuestion);
            window.QUESTIONS.push(...adaptedData);
        })
        .catch(err => {
            console.log("No AI questions.json found or error reading it.", err);
        })
        .finally(() => {
            // Fake a module load to trigger the final check
            loadedCount++;
            checkAllLoaded(true); 
        });

    function checkAllLoaded(fromFetch = false) {
        // We wait for all modules + 1 for the fetch request
        if (loadedCount >= modules.length + (fromFetch ? 0 : 1)) {
            window.QUESTIONS = flattenQuestions(window.QUESTIONS)
                .map(adaptAIQuestion) // Run ALL questions (legacy + new) through the adapter
                .filter(Boolean);
                
            window.QUESTIONS_LOADED = true;
            console.log('MCQ Bank Ready! Total questions: ' + window.QUESTIONS.length);
        }
    }
})();