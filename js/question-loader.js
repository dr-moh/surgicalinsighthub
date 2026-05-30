/**
 * SIH Question Loader
 * Dynamically loads specialty question modules into the global QUESTIONS array.
 */

(function() {
    window.QUESTIONS = [];
    window.QUESTIONS_LOADED = false;

    const modules = [
        // ── Core specialties (original) ──
        "anesthesia.js",
        "breast_endocrine.js",
        "breast_surgery.js",
        "cardiothoracic.js",
        "colorectal.js",
        "comprehensive_revision.js",
        "general_surgery_part1.js",
        "general_surgery_part2.js",
        "general_surgery_part3.js",
        "general_surgery_part4.js",
        "general_surgery_part5.js",
        "general_surgery_part6.js",
        "general_surgery_part7.js",
        "hpb.js",
        "neurosurgery.js",
        "oncology_mcq.js",
        "orthopedic.js",
        "pediatric_surgery.js",
        "plastic_surgery.js",
        "recovered.js",
        "trauma.js",
        "urology.js",
        "vascular.js",
        "tash_surgery.js",
        // ── Newly unlocked SHARP 3.0 banks ──
        "breast__endocrine.js",        // +302 breast & endocrine Qs
        "colorectal_surgery.js",       // +24  colorectal Qs (incl. UC/hemorrhoidectomy)
        "orthopedics.js",              // +358 orthopedic Qs
        "vascular_surgery.js",         // +10  vascular Qs
        "hepatopancreatobiliary_hpb.js", // +2  HPB Qs
        "general_surgery.js"           // +5417 general surgery Qs (largest bank)
    ];

    let loadedCount = 0;

    function loadModule(name) {
        const script = document.createElement('script');
        script.src = `js/questions/${name}?v=4.0.0`;
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
                    q.markdown_debrief && 
                    q.markdown_debrief !== "Failed to generate Markdown."
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
