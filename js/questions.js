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
        return specialty || 'General Surgery';
    }

    function normalizeAnswer(answer) {
        var value = String(answer || '').trim().toUpperCase();
        var match = value.match(/[A-E]/);
        return match ? match[0] : value;
    }

    function normalizeQuestion(question) {
        if (!question || typeof question !== 'object') return null;

        var normalized = Object.assign({}, question);
        normalized.specialty = normalizeSpecialty(normalized.specialty);
        normalized.answer = normalizeAnswer(normalized.answer);

        if (!normalized.explanation || typeof normalized.explanation !== 'object') {
            normalized.explanation = {};
        }

        if (!normalized.explanation.correct && normalized.sharp_metadata && typeof normalized.sharp_metadata === 'object') {
            normalized.explanation.correct = normalized.sharp_metadata.highlight_excellence || normalized.sharp_metadata.H || normalized.sharp_metadata.S || '';
        }

        if (!normalized.guideline && normalized.sharp_metadata && typeof normalized.sharp_metadata === 'object' && normalized.sharp_metadata.R) {
            normalized.guideline = normalized.sharp_metadata.R;
        }

        if (!normalized.takeaway && normalized.sharp_metadata && typeof normalized.sharp_metadata === 'object' && normalized.sharp_metadata.P) {
            normalized.takeaway = normalized.sharp_metadata.P;
        }

        if (!normalized.takeaway && normalized.sharp && typeof normalized.sharp === 'object' && normalized.sharp.takeaway) {
            normalized.takeaway = normalized.sharp.takeaway;
        }

        if (!normalized.guideline && normalized.sharp && typeof normalized.sharp === 'object' && normalized.sharp.guideline) {
            normalized.guideline = normalized.sharp.guideline;
        }

        return normalized.question ? normalized : null;
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
        'plastic_surgery.js'
    ];

    let loadedCount = 0;

    modules.forEach(file => {
        const script = document.createElement('script');
        script.src = 'js/questions/' + file + '?v=2.1';
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