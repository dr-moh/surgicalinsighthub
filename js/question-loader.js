/**
 * SIH Question Loader
 * Dynamically loads specialty question modules into the global QUESTIONS array.
 */

(function() {
    window.QUESTIONS = [];
    window.QUESTIONS_LOADED = false;

    const modules = [
        "anesthesia.js",
        "breast_endocrine.js",
        "breast_surgery.js",
        "cardiothoracic.js",
        "colorectal.js",
        "comprehensive_revision.js",
        "general_surgery.js",
        "hpb.js",
        "neurosurgery.js",
        "oncology_mcq.js",
        "orthopedics.js",
        "pediatric_surgery.js",
        "plastic_surgery.js",
        "trauma.js",
        "urology.js",
        "vascular.js",
        "tash_surgery.js"
    ];

    let loadedCount = 0;

    function loadModule(name) {
        const script = document.createElement('script');
        script.src = `js/questions/${name}`;
        script.async = true;
        script.onload = () => {
            loadedCount++;
            console.log(`[Loader] Loaded ${name} (${loadedCount}/${modules.length})`);
            if (loadedCount === modules.length) {
                finalizeLoading();
            }
        };
        script.onerror = () => {
            loadedCount++;
            console.error(`[Loader] Failed to load ${name}`);
            if (loadedCount === modules.length) {
                finalizeLoading();
            }
        };
        document.head.appendChild(script);
    }

    function finalizeLoading() {
        // Remove duplicates based on ID and filter for SHARP 3.0
        const uniqueMap = new Map();
        window.QUESTIONS.forEach(q => {
            if (q && q.id) {
                // Check if it has been enriched with the new debrief structure
                const hasSharp = !!(
                    q.sharp_3_debrief || 
                    q.S_set_the_stage || 
                    q.sharp_debrief || 
                    (q.sharp && q.sharp.set_the_stage) ||
                    q.H_highlight_excellence
                );
                
                // Exclude any questions explicitly marked as rejected by the pipeline
                const notRejected = q.status !== 'REJECT';

                if (hasSharp && notRejected) {
                    uniqueMap.set(q.id, q);
                }
            }
        });
        window.QUESTIONS = Array.from(uniqueMap.values());
        
        window.QUESTIONS_LOADED = true;
        console.log(`[Loader] Success! ${window.QUESTIONS.length} SHARP-enriched unique questions ready.`);
        
        // Trigger UI update if function exists
        if (typeof window.initArena === 'function') {
            window.initArena();
        }
    }

    // Start loading
    console.log(`[Loader] Starting ingestion of ${modules.length} modules...`);
    modules.forEach(loadModule);

})();
