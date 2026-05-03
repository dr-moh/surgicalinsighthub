/**
 * MCQ Bank Loader
 * Dynamically loads specialty-specific question modules.
 * Part of the SIH MCQ Arena Modularization Refactor.
 */

(function() {
    window.QUESTIONS = [];
    window.QUESTIONS_LOADED = false;

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

    function normalizeSpecialty(specialty) {
        var value = String(specialty || '').toLowerCase();
        if (value.indexOf('breast') !== -1 || value.indexOf('endocrine') !== -1) return 'Breast & Endocrine';
        if (value.indexOf('ortho') !== -1) return 'Orthopedic';
        if (value.indexOf('cardio') !== -1 || value.indexOf('thoracic') !== -1) return 'Cardiothoracic';
        if (value.indexOf('pediatric') !== -1) return 'Pediatric Surgery';
        if (value.indexOf('plastic') !== -1) return 'Plastic Surgery';
        if (value.indexOf('vascular') !== -1) return 'Vascular';
        if (value.indexOf('urology') !== -1) return 'Urology';
        if (value.indexOf('trauma') !== -1) return 'Trauma';
        if (value.indexOf('colorectal') !== -1) return 'Colorectal';
        if (value.indexOf('hpb') !== -1) return 'HPB';
        if (value.indexOf('anesthesia') !== -1) return 'Anesthesia';
        if (value.indexOf('neuro') !== -1) return 'Neurosurgery';
        if (value.indexOf('surgical oncology') !== -1 || value.indexOf('general surgery') !== -1) return 'General Surgery';
        return specialty || 'General Surgery';
    }

    function normalizeAnswer(answer) {
        var value = String(answer || '').trim().toUpperCase();
        var match = value.match(/[A-E]/);
        return match ? match[0] : value;
    }

    function normalizeOptions(options) {
        var normalized = {};
        ['A', 'B', 'C', 'D', 'E'].forEach(function(letter) {
            var value = '';
            if (options && typeof options === 'object') {
                value = options[letter];
            }
            normalized[letter] = String(value || '').replace(/\s+/g, ' ').trim();
        });
        return normalized;
    }

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
        var options = normalizeOptions(question.options || {});
        var answerLetter = normalizeAnswer(question.answer);
        var answerText = options[answerLetter] || '';
        var stemTopic = compactText(question.topic || question.specialty || 'Review the stem and choose the best option.', '', 12);
        var explanation = question.explanation && typeof question.explanation === 'object' ? question.explanation.correct : '';
        return {
            S: stemTopic || 'Review the stem and choose the best option.',
            H: compactSentence(explanation || answerText, 'The correct option matches the stem.', 24),
            A: 'Eliminate distractors that conflict with the stem or core principle.',
            R: guidelineLabel(question),
            P: compactSentence(question.takeaway || explanation || answerText || 'Memorize the one-line takeaway.', 'Memorize the one-line takeaway.', 20)
        };
    }

    function normalizeSharp(question) {
        var sharp = {};
        if (question.sharp_metadata && typeof question.sharp_metadata === 'object') {
            sharp = question.sharp_metadata;
        } else if (question.sharp && typeof question.sharp === 'object') {
            sharp = question.sharp;
        }

        var fallback = buildSharpFallback(question);
        var normalized = {
            S: compactSentence(sharp.S || sharp.set_the_stage || fallback.S || '', fallback.S, 16),
            H: compactSentence(sharp.H || sharp.highlight_excellence || (question.explanation && question.explanation.correct) || fallback.H || '', fallback.H, 24),
            A: compactSentence(sharp.A || sharp.address_gaps || fallback.A || '', fallback.A, 18),
            R: guidelineLabel({ guideline: sharp.R || sharp.guideline || question.guideline || fallback.R || '', topic: question.topic, specialty: question.specialty }),
            P: compactSentence(sharp.P || sharp.takeaway || question.takeaway || fallback.P || '', fallback.P, 20)
        };

        if (!normalized.H && question.explanation && typeof question.explanation === 'object' && question.explanation.correct) {
            normalized.H = compactSentence(question.explanation.correct, 'The correct option matches the stem.', 24);
        }

        if (!normalized.R) {
            normalized.R = guidelineLabel(question);
        }

        return normalized;
    }

    function isRenderableQuestion(question) {
        var options = normalizeOptions(question.options || {});
        var answer = normalizeAnswer(question.answer);
        var validOptions = ['A', 'B', 'C', 'D', 'E'].filter(function(letter) {
            return options[letter];
        });
        return validOptions.length >= 4 && !!options[answer];
    }

    function normalizeQuestion(question) {
        if (!question || typeof question !== 'object') return null;

        var normalized = Object.assign({}, question);
        normalized.specialty = normalizeSpecialty(normalized.specialty);
        normalized.answer = normalizeAnswer(normalized.answer);
        normalized.options = normalizeOptions(normalized.options || {});

        if (!normalized.explanation || typeof normalized.explanation !== 'object') {
            normalized.explanation = {};
        }

        if (!normalized.explanation.correct) {
            normalized.explanation.correct = buildSharpFallback(normalized).H;
        }

        normalized.sharp_metadata = normalizeSharp(normalized);
        normalized.sharp = {
            set_the_stage: normalized.sharp_metadata.S,
            highlight_excellence: normalized.sharp_metadata.H,
            address_gaps: normalized.sharp_metadata.A,
            review_learning_points: normalized.sharp_metadata.R,
            plan: normalized.sharp_metadata.P,
            guideline: normalized.sharp_metadata.R,
            takeaway: normalized.sharp_metadata.P
        };

        normalized.guideline = normalized.sharp_metadata.R;
        normalized.takeaway = normalized.sharp_metadata.P;

        return normalized.question && isRenderableQuestion(normalized) ? normalized : null;
    }

    function dedupeQuestions(items) {
        var seen = new Set();
        var deduped = [];

        items.forEach(function(question) {
            var options = question.options || {};
            var key = [
                String(question.question || '').replace(/\s+/g, ' ').trim().toLowerCase(),
                String(options.A || '').replace(/\s+/g, ' ').trim().toLowerCase(),
                String(options.B || '').replace(/\s+/g, ' ').trim().toLowerCase(),
                String(options.C || '').replace(/\s+/g, ' ').trim().toLowerCase(),
                String(options.D || '').replace(/\s+/g, ' ').trim().toLowerCase(),
                String(options.E || '').replace(/\s+/g, ' ').trim().toLowerCase(),
                String(normalizeAnswer(question.answer))
            ].join('||');

            if (seen.has(key)) return;
            seen.add(key);
            deduped.push(question);
        });

        return deduped;
    }
    
    const modules = [
        'general_surgery.js',
        'hpb.js',
        'colorectal.js',
        'anesthesia.js',
        'vascular.js',
        'trauma.js',
        'urology.js',
        'cardiothoracic.js',
        'pediatric_surgery.js',
        'orthopedic.js',
        'orthopedics.js',
        'neurosurgery.js',
        'breast_endocrine.js',
        'breast_surgery.js',
        'plastic_surgery.js',
        'pdf_questions.js'
    ];

    let loadedCount = 0;

    modules.forEach(file => {
        const script = document.createElement('script');
        script.src = 'js/questions/' + file + '?v=2.3';
        script.async = false; // Order of loading into the array is preserved if async is false
        script.onload = () => {
            loadedCount++;
            if (loadedCount === modules.length) {
                const flattened = flattenQuestions(window.QUESTIONS)
                    .map(normalizeQuestion)
                    .filter(Boolean);
                window.QUESTIONS = dedupeQuestions(flattened);
                window.QUESTIONS_LOADED = true;
                console.log('MCQ Bank: All ' + modules.length + ' modules loaded. Total questions: ' + window.QUESTIONS.length);
            }
        };
        script.onerror = () => {
            console.error('MCQ Bank: Failed to load module ' + file);
        };
        document.head.appendChild(script);
    });
})();