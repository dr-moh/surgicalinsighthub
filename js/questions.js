/**
 * MCQ Bank Loader
 * Dynamically loads specialty-specific question modules.
 * Part of the SIH MCQ Arena Modularization Refactor.
 */

(function() {
    window.QUESTIONS = [];
    window.QUESTIONS_LOADED = false;
    
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
        'neurosurgery.js',
        'breast_endocrine.js',
        'plastic_surgery.js'
    ];

    let loadedCount = 0;

    modules.forEach(file => {
        const script = document.createElement('script');
        script.src = 'js/questions/' + file;
        script.async = false; // Order of loading into the array is preserved if async is false
        script.onload = () => {
            loadedCount++;
            if (loadedCount === modules.length) {
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