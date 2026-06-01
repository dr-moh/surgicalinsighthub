/**
 * SIH Question Loader
 * Dynamically loads specialty question modules into the global QUESTIONS array.
 */

(function() {
    window.QUESTIONS = [];
    window.QUESTIONS_LOADED = false;

    const modules = [
        "pediatric_surgery.js",
        "orthopedic.js",
        "enriched_batch_7_10.js",
        "enriched_rush_batch.js",
        "hpb.js",
        "colorectal.js",
        "breast__endocrine.js",
        "plastic_surgery.js",
        "surgery_essence_4850.js",
        "general_surgery_part1.js",
        "neurosurgery.js",
        "vascular.js",
        "competency_2500.js",
        "general_surgery.js",
        "general_surgery_part5.js",
        "comprehensive_revision.js",
        "removed_bad_mcqs.js",
        "enriched_batch_3.js",
        "general_surgery_part4.js",
        "orthopedics.js",
        "radiology.js",
        "enriched_batch_2.js",
        "colorectal_surgery.js",
        "oncology_mcq.js",
        "anesthesia.js",
        "enriched_plastic_batch.js",
        "enriched_batch_6.js",
        "general_surgery_part7.js",
        "breast_endocrine.js",
        "general_surgery_part3.js",
        "enriched_pretest_batch.js",
        "urology.js",
        "breast_surgery.js",
        "enriched_batch_5.js",
        "general_surgery_part2.js",
        "1001_mcqs.js",
        "canonical_questions.js",
        "enriched_batch_4.js",
        "recovered.js",
        "general_surgery_part6.js",
        "enriched_high_yield.js",
        "schwartz.js",
        "cardiothoracic.js",
        "vascular_surgery.js",
        "r2_exam.js",
        "pdf_questions.js",
        "hepatopancreatobiliary_hpb.js",
        "general_surgery_book.js",
        "tash_surgery.js",
        "sbas.js",
        "clinical_cases.js",
        "trauma.js",
        "review/763833961-pediatric-surgery-mcq.js",
        "review/872068331-Surgery-MCQs.js",
        "review/385388037-Medcosmossurgery-Blogspot-in-19.js",
        "review/829487955-General-Rotation.js",
        "review/Pediatric_Surgical_Emergencies_MCQ.js",
        "review/524575718-800-MCQs-ONLY-SUCCESS-MRCS-A-UPDATED.js",
        "review/467344482-General-Surgery-MCQ-Saudi.js",
        "review/486534246-Surgery-ihsan_(1).js",
        "review/537838834-General-GIT.js",
        "review/385387853-medcosmossurgery-blogspot-in-20-pdf.js",
        "review/852151813-ANSWERS-OF-FINAL-PART-PI-NOV-2015-Gen-Surg-Arab-Board.js",
        "review/37358425-Liver-Mcq-Surgery.js",
        "review/961171897-PEDIATRIC-SURGERY-MCQS-1.js",
        "review/699910936-MedCosmos-Surgery-MCQ-General-Surgery.js",
        "review/494863076-Penguins-Surgery-August-Septumber.js",
        "review/77346718-Medical-Facts-and-Mcq-s-Pediatric-Surgery-Mcq.js",
        "review/467344482-General-Surgery-MCQ-Saudi_(1).js",
        "review/general-medicine-and-surgery-medical-student-revision-guide-9781914961182_compress.js",
        "review/486534246-Surgery-ihsan.js",
        "review/385388882-1.js",
        "review/644827546-General-Surgery-MCQ.js",
        "review/385388882-1_copy.js",
        "review/515158176-Surgery-2020-with-correction-docx-docx-docx.js",
        "review/712219038-Surgery-by-Hamoud.js",
        "review/57046758-MCQ-MRCS.js",
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
