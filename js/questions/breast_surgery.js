if (!window.QUESTIONS) window.QUESTIONS = [];
window.QUESTIONS.push(...[
[
  {
    "specialty": "Breast & Endocrine",
    "topic": "Breast Imaging",
    "question": "A 45-year-old woman has a screening mammogram reported as BI-RADS 4. What is the most appropriate next step in management?",
    "options": {
      "A": "Repeat mammogram in 6 months",
      "B": "Routine screening in 1 year",
      "C": "Core needle biopsy",
      "D": "Reassurance"
    },
    "answer": "C",
    "explanation": {
      "correct": "BI-RADS 4 indicates a 'Suspicious abnormality' with a 2-95% chance of malignancy. A tissue diagnosis (usually core needle biopsy) is mandatory.",
      "A": "Used for BI-RADS 3 (Probably benign).",
      "B": "Used for BI-RADS 1 or 2.",
      "C": "Standard for BI-RADS 4 and 5.",
      "D": "Inappropriate for suspicious findings."
    },
    "guideline": "ACR BI-RADS Atlas",
    "takeaway": "BI-RADS 4/5 = Tissue Biopsy required.",
    "sharp_metadata": {
      "S": "Asymptomatic woman with suspicious microcalcifications on mammogram.",
      "H": "Excellence in imaging-pathology correlation: If biopsy is 'benign' but imaging is highly suspicious, surgical excision is still needed.",
      "A": "Address the fact that BI-RADS 0 means the study is 'incomplete' and needs more imaging.",
      "R": "Standard breast screening protocol.",
      "P": "Arrange for ultrasound or stereotactic-guided core biopsy."
    },
    "id": 1602,
    "_src_file": "breast_endocrine.js"
  },
  {
    "specialty": "Breast & Endocrine",
    "topic": "Thyroid Cancer",
    "question": "What is the most common type of thyroid malignancy, and which histological feature is pathognomonic for it?",
    "options": {
      "A": "Follicular Carcinoma; Capsular invasion",
      "B": "Papillary Carcinoma; Orphan Annie Eye nuclei",
      "C": "Medullary Carcinoma; Amyloid stroma",
      "D": "Anaplastic Carcinoma; Spindle cells"
    },
    "answer": "B",
    "explanation": {
      "correct": "Papillary Thyroid Carcinoma (PTC) is the most common (80-85%). Pathognomonic features include 'Orphan Annie Eye' nuclei (clearing of chromatin), Psammoma bodies, and nuclear grooves.",
      "A": "Second most common; requires invasion for diagnosis.",
      "B": "Most common + pathognomonic nuclei.",
      "C": "Arises from C-cells; associated with MEN2.",
      "D": "Highly aggressive; seen in elderly."
    },
    "guideline": "ATA Guidelines for Management of Thyroid Nodules",
    "takeaway": "Papillary Thyroid Cancer = Orphan Annie Eye nuclei; Most common type.",
    "sharp_metadata": {
      "S": "30F with a 2cm firm thyroid nodule and enlarged cervical lymph nodes.",
      "H": "PTC has an excellent prognosis (>95% 10-year survival) but frequently spreads to local lymph nodes.",
      "A": "Identify 'BRAF V600E' as the most common mutation in PTC.",
      "R": "Core endocrine pathology.",
      "P": "Total thyroidectomy or lobectomy followed by potential Radioactive Iodine (RAI)."
    },
    "id": 1603,
    "_src_file": "breast_endocrine.js"
  },
  {
    "specialty": "Breast & Endocrine",
    "topic": "Hyperparathyroidism",
    "question": "What is the most common cause of Primary Hyperparathyroidism?",
    "options": {
      "A": "Parathyroid Carcinoma",
      "B": "Single Parathyroid Adenoma",
      "C": "Four-gland hyperplasia",
      "D": "Vitamin D deficiency"
    },
    "answer": "B",
    "explanation": {
      "correct": "A single parathyroid adenoma is responsible for ~85-90% of cases of primary hyperparathyroidism. Four-gland hyperplasia accounts for ~10-15% (often seen in MEN syndromes).",
      "A": "Very rare (<1%).",
      "B": "Most common cause.",
      "C": "Associated with MEN1/2A.",
      "D": "Causes Secondary hyperparathyroidism."
    },
    "guideline": "Management of Primary Hyperparathyroidism",
    "takeaway": "Primary Hyperparathyroidism = Usually a single adenoma; Stones, Bones, Groans, Moans.",
    "sharp_metadata": {
      "S": "Patient with elevated Calcium (11.2) and elevated PTH (90).",
      "H": "Localization with Sestamibi scan and Ultrasound allows for minimally invasive parathyroidectomy.",
      "A": "Address 'hungry bone syndrome' as a post-operative risk (severe hypocalcemia).",
      "R": "Common endocrine surgical condition.",
      "P": "Check 24-hour urine calcium to rule out Familial Hypocalciuric Hypercalcemia (FHH) before surgery."
    },
    "id": 1604,
    "_src_file": "breast_endocrine.js"
  },
  {
    "specialty": "Breast & Endocrine",
    "topic": "Pheochromocytoma",
    "question": "In the preoperative management of a patient with Pheochromocytoma, which medication should be started FIRST?",
    "options": {
      "A": "Beta-blocker (e.g., Propranolol)",
      "B": "Alpha-blocker (e.g., Phenoxybenzamine)",
      "C": "ACE inhibitor",
      "D": "Calcium channel blocker"
    },
    "answer": "B",
    "explanation": {
      "correct": "Alpha-blockade must ALWAYS be started first. If a beta-blocker is started first, the patient may suffer from 'unopposed alpha stimulation,' leading to a life-threatening hypertensive crisis.",
      "A": "Only after adequate alpha-blockade (usually 2-3 days later).",
      "B": "Mandatory first step to prevent hypertensive crisis.",
      "C": "Not part of the classic protocol.",
      "D": "Adjunctive only."
    },
    "guideline": "Endocrine Society Clinical Practice Guidelines",
    "takeaway": "Pheochromocytoma = Alpha-blockade before Beta-blockade.",
    "sharp_metadata": {
      "S": "Patient with episodic headache, sweating, and palpitation (Triad).",
      "H": "Excellence in perioperative care: Volume expansion (hydration) is also critical as these patients are chronically vasoconstricted.",
      "A": "Identify the '10% rule': 10% bilateral, 10% malignant, 10% extra-adrenal, 10% familial.",
      "R": "Classic endocrine surgical safety pearl.",
      "P": "Order 24-hour urinary metanephrines or plasma free metanephrines for diagnosis."
    },
    "id": 1605,
    "_src_file": "breast_endocrine.js"
  },
  {
    "specialty": "Breast & Endocrine",
    "topic": "Inflammatory Breast Cancer",
    "question": "A patient presents with rapid swelling, redness, and 'peau d'orange' appearance of the breast skin. What is the definitive diagnostic finding for Inflammatory Breast Cancer?",
    "options": {
      "A": "Fever and high WBC count",
      "B": "Dermal lymphatic invasion on skin biopsy",
      "C": "Response to a course of antibiotics",
      "D": "A large mass on mammography"
    },
    "answer": "B",
    "explanation": {
      "correct": "Inflammatory Breast Cancer is a clinical diagnosis, but the pathological hallmark is the presence of tumor emboli within the dermal lymphatics. This causes the classic 'peau d'orange' (orange peel) skin texture.",
      "A": "Suggests mastitis, but IBC can mimic it.",
      "B": "Confirmatory pathological finding.",
      "C": "IBC will NOT respond to antibiotics.",
      "D": "IBC often does NOT have a discrete mass."
    },
    "guideline": "NCCN Guidelines for Inflammatory Breast Cancer",
    "takeaway": "Peau d'orange = Dermal lymphatic invasion; Inflammatory Breast Cancer.",
    "sharp_metadata": {
      "S": "Patient treated for 'mastitis' for 2 weeks with no improvement.",
      "H": "Recognition of the 'non-response to antibiotics' should trigger immediate skin biopsy.",
      "A": "Address the aggressive nature: Stage T4d by definition.",
      "R": "Critical 'don't miss' diagnosis.",
      "P": "Management: Neoadjuvant chemotherapy -> Mastectomy -> Radiation."
    },
    "id": 1606,
    "_src_file": "breast_endocrine.js"
  },
  {
    "specialty": "Breast & Endocrine",
    "topic": "MEN Syndromes",
    "question": "A patient is found to have Medullary Thyroid Cancer (MTC), Pheochromocytoma, and Primary Hyperparathyroidism. Which syndrome do they have?",
    "options": {
      "A": "MEN 1",
      "B": "MEN 2A",
      "C": "MEN 2B",
      "D": "Li-Fraumeni Syndrome"
    },
    "answer": "B",
    "explanation": {
      "correct": "MEN 2A (Sipple Syndrome) consists of MTC, Pheochromocytoma, and Parathyroid hyperplasia. MEN 1 involves Pituitary, Parathyroid, and Pancreas (3 Ps). MEN 2B involves MTC, Pheo, and Mucosal neuromas/Marfanoid habitus.",
      "A": "Pituitary, Pancreas, Parathyroid.",
      "B": "Medullary Thyroid, Pheo, Parathyroid.",
      "C": "Medullary Thyroid, Pheo, Neuromas.",
      "D": "p53 mutation; various cancers."
    },
    "guideline": "Genetics of Multiple Endocrine Neoplasia",
    "takeaway": "MEN 2A = MTC + Pheo + Parathyroid.",
    "sharp_metadata": {
      "S": "Family history of early-onset thyroid cancer and hypertension.",
      "H": "Identifying the 'RET proto-oncogene' mutation as the driver for MEN2.",
      "A": "Address the 'Pheo first' rule: If a patient has MEN2, always screen for and treat Pheo BEFORE thyroid surgery.",
      "R": "High-yield genetic syndrome.",
      "P": "Perform RET genetic testing for all family members."
    },
    "id": 1607,
    "_src_file": "breast_endocrine.js"
  },
  {
    "specialty": "Breast & Endocrine",
    "topic": "Paget's Disease of the Breast",
    "question": "Paget's disease of the nipple is almost always associated with which underlying condition?",
    "options": {
      "A": "Breast abscess",
      "B": "In situ or invasive ductal carcinoma",
      "C": "Eczema of the nipple",
      "D": "Fat necrosis"
    },
    "answer": "B",
    "explanation": {
      "correct": "Paget's disease of the nipple presents as a scaly, eczematous-looking lesion. It is caused by malignant cells (Paget cells) migrating from an underlying DCIS or invasive cancer through the lactiferous ducts to the nipple surface.",
      "A": "Infectious.",
      "B": "Underlying malignancy present in >95% of cases.",
      "C": "Clinical mimic but not associated with cancer.",
      "D": "Traumatic."
    },
    "guideline": "Management of Paget Disease of the Nipple",
    "takeaway": "Nipple eczema-like lesion = Paget's; look for underlying cancer.",
    "sharp_metadata": {
      "S": "Patient with chronic 'itchy' nipple and some crusting.",
      "H": "A 'punch biopsy' of the nipple skin is needed for diagnosis.",
      "A": "Identify 'Paget cells' as large cells with clear cytoplasm (PAS positive).",
      "R": "Common breast cancer presentation.",
      "P": "Order mammogram and ultrasound; if negative, consider breast MRI."
    },
    "id": 1608,
    "_src_file": "breast_endocrine.js"
  },
  {
    "specialty": "Breast & Endocrine",
    "topic": "Adrenal Cortex",
    "question": "Which zone of the adrenal cortex is responsible for the production of Aldosterone?",
    "options": {
      "A": "Zona Glomerulosa",
      "B": "Zona Fasciculata",
      "C": "Zona Reticularis",
      "D": "Adrenal Medulla"
    },
    "answer": "A",
    "explanation": {
      "correct": "The Adrenal Cortex zones (GFR) produce: Glomerulosa -> Mineralocorticoids (Aldosterone); Fasciculata -> Glucocorticoids (Cortisol); Reticularis -> Androgens.",
      "A": "G = Salt (Aldosterone).",
      "B": "F = Sugar (Cortisol).",
      "C": "R = Sex (Androgens).",
      "D": "Medulla = Catecholamines."
    },
    "guideline": "Adrenal Anatomy and Physiology",
    "takeaway": "Adrenal Cortex (GFR) = Salt, Sugar, Sex.",
    "sharp_metadata": {
      "S": "Patient with hypertension and hypokalemia (Conn's syndrome).",
      "H": "Excellence in physiology: Aldosterone causes sodium retention and potassium excretion.",
      "A": "Address the role of the Renin-Angiotensin system in regulating the Zona Glomerulosa.",
      "R": "Basic endocrine science.",
      "P": "Check plasma aldosterone to renin ratio (ARR) for screening."
    },
    "id": 1609,
    "_src_file": "breast_endocrine.js"
  },
  {
    "specialty": "Breast & Endocrine",
    "topic": "Sentinel Lymph Node Biopsy",
    "question": "What is the primary indication for performing a Sentinel Lymph Node Biopsy (SLNB) in breast cancer?",
    "options": {
      "A": "To treat known axillary metastases",
      "B": "To stage the axilla in clinically node-negative patients",
      "C": "To avoid the need for radiation therapy",
      "D": "Only for patients with tumors >5cm"
    },
    "answer": "B",
    "explanation": {
      "correct": "SLNB is used to accurately stage the axilla in patients who have no clinical or radiological evidence of nodal involvement (cN0), avoiding the morbidity of a full axillary lymph node dissection (ALND) if the sentinel nodes are negative.",
      "A": "ALND is required for gross disease.",
      "B": "Standard for clinical N0 staging.",
      "C": "Does not replace radiation.",
      "D": "Tumor size doesn't exclude SLNB if node-negative."
    },
    "guideline": "ASCO Guideline: SLNB in Early-Stage Breast Cancer",
    "takeaway": "SLNB = Staging the axilla while minimizing morbidity.",
    "sharp_metadata": {
      "S": "Patient with T1c (1.5cm) IDC, clinically negative axilla.",
      "H": "ACOSOG Z0011 trial: Many patients with 1-2 positive sentinel nodes can avoid ALND if they receive whole-breast radiation.",
      "A": "Identify 'Blue Dye' (Isosulfan) and 'Radiotracer' (Technetium) as common localization methods.",
      "R": "Standard surgical oncology protocol.",
      "P": "If sentinel node is negative, no further axillary surgery is needed."
    },
    "id": 1610,
    "_src_file": "breast_endocrine.js"
  },
  {
    "specialty": "Breast & Endocrine",
    "topic": "Anaplastic Thyroid Cancer",
    "question": "Which of the following is TRUE regarding Anaplastic Thyroid Cancer?",
    "options": {
      "A": "It is easily cured with Radioactive Iodine",
      "B": "It often presents with rapid neck growth and airway compromise",
      "C": "It is the most common thyroid cancer in children",
      "D": "It arises from the parathyroid glands"
    },
    "answer": "B",
    "explanation": {
      "correct": "Anaplastic Thyroid Cancer is one of the most lethal human malignancies. It typically presents in elderly patients as a rapidly enlarging neck mass causing dysphagia, hoarseness, and dyspnea.",
      "A": "It does NOT take up iodine; RAI is useless.",
      "B": "Hallmark aggressive clinical presentation.",
      "C": "Papillary is most common in children.",
      "D": "It is a thyroid tumor."
    },
    "guideline": "ATA Guidelines on Anaplastic Thyroid Cancer",
    "takeaway": "Anaplastic Thyroid Cancer = Rapid growth; High mortality; Palliative focus.",
    "sharp_metadata": {
      "S": "80-year-old with a neck mass that doubled in size in 2 weeks.",
      "H": "Excellence in ethics: Recognizing when a 'surgical cure' is not possible and focusing on airway protection.",
      "A": "Address the poor 1-year survival rate (<20%).",
      "R": "Aggressive oncological emergency.",
      "P": "Immediate CT and FNA; consider tracheostomy if airway is threatened."
    },
    "id": 1611,
    "_src_file": "breast_endocrine.js"
  },
  {
    "specialty": "Breast & Endocrine",
    "topic": "Phyllodes Tumor",
    "question": "How does the surgical management of a Phyllodes tumor differ from a standard Fibroadenoma?",
    "options": {
      "A": "Phyllodes requires a 1cm wide margin of normal tissue",
      "B": "Phyllodes is always managed with mastectomy",
      "C": "Fibroadenomas require axillary dissection",
      "D": "There is no difference"
    },
    "answer": "A",
    "explanation": {
      "correct": "Phyllodes tumors have a high risk of local recurrence if not fully excised. Therefore, a wide local excision with at least 1cm margins is required. Fibroadenomas can be simply enucleated.",
      "A": "Wide margin is mandatory for Phyllodes.",
      "B": "Only if the tumor-to-breast ratio is too large.",
      "C": "Neither usually spreads to lymph nodes via lymphatics.",
      "D": "Significant difference in recurrence risk."
    },
    "guideline": "Management of Rare Breast Tumors",
    "takeaway": "Phyllodes Tumor = Wide Local Excision (1cm margins).",
    "sharp_metadata": {
      "S": "Patient with a rapidly growing, firm, mobile breast mass.",
      "H": "Identifying the 'leaf-like' (Phyllon) stromal architecture on histology.",
      "A": "Address the fact that Phyllodes can be benign, borderline, or malignant (all need wide margins).",
      "R": "Classic breast pathology differential.",
      "P": "Avoid standard enucleation; perform formal wide local excision."
    },
    "id": 1612,
    "_src_file": "breast_endocrine.js"
  },
  {
    "specialty": "Breast & Endocrine",
    "topic": "Hyperaldosteronism",
    "question": "A patient with hypertension and hypokalemia has a high Plasma Aldosterone Concentration (PAC) and low Plasma Renin Activity (PRA). What is the next most appropriate imaging step?",
    "options": {
      "A": "MRI of the Pituitary",
      "B": "CT of the Adrenal glands",
      "C": "Sestamibi Scan",
      "D": "Renal Artery Doppler"
    },
    "answer": "B",
    "explanation": {
      "correct": "High PAC and low PRA confirm Primary Hyperaldosteronism (Conn's Syndrome). The next step is a CT scan of the adrenals to look for an adenoma vs bilateral hyperplasia.",
      "A": "Used for Cushing's disease.",
      "B": "Initial imaging for adrenal pathology.",
      "C": "Used for Parathyroid.",
      "D": "Used for renovascular HTN (High Renin)."
    },
    "guideline": "Diagnosis of Primary Aldosteronism",
    "takeaway": "Conn's Syndrome = High Aldosterone, Low Renin; Adrenal CT.",
    "sharp_metadata": {
      "S": "Patient with BP 160/100 and K+ of 2.8.",
      "H": "Excellence in diagnosis: If CT shows no discrete mass, Adrenal Vein Sampling (AVS) is the gold standard to lateralize the source.",
      "A": "Identify Spironolactone as a medical treatment for bilateral hyperplasia.",
      "R": "Standard endocrine hypertension workup.",
      "P": "Adrenalectomy is curative for a unilateral adenoma."
    },
    "id": 1613,
    "_src_file": "breast_endocrine.js"
  },
  {
    "specialty": "Breast & Endocrine",
    "topic": "Breast Cancer Risk",
    "question": "Which of the following histological findings on a breast biopsy carries the HIGHEST future risk for developing invasive breast cancer?",
    "options": {
      "A": "Fibroadenoma",
      "B": "Atypical Ductal Hyperplasia (ADH)",
      "C": "Sclerosing Adenosis",
      "D": "Ductal Carcinoma In Situ (DCIS)"
    },
    "answer": "D",
    "explanation": {
      "correct": "DCIS is a non-invasive cancer. If left untreated, a significant percentage will progress to invasive cancer in the same location. ADH also carries risk (approx 4-5x), but DCIS is a direct precursor.",
      "A": "No increased risk.",
      "B": "Increased risk (4-5x).",
      "C": "Slight increase (1.5-2x).",
      "D": "Highest risk/Pre-cancerous."
    },
    "guideline": "Breast Cancer Risk Assessment",
    "takeaway": "DCIS is a direct precursor to invasive breast cancer.",
    "sharp_metadata": {
      "S": "Patient with microcalcifications on mammogram; biopsy shows DCIS.",
      "H": "Excellence in counseling: DCIS is 'Stage 0' and has a nearly 100% cure rate with surgery.",
      "A": "Address the role of Tamoxifen in reducing recurrence after DCIS excision.",
      "R": "Oncological pathology.",
      "P": "Lumpectomy with radiation OR Mastectomy."
    },
    "id": 1614,
    "_src_file": "breast_endocrine.js"
  },
  {
    "specialty": "Breast & Endocrine",
    "topic": "Graves' Disease",
    "question": "Which of the following is a classic indication for SURGERY (Thyroidectomy) rather than Radioactive Iodine in a patient with Graves' disease?",
    "options": {
      "A": "Elderly patient with multiple comorbidities",
      "B": "Severe ophthalmopathy (Grave's orbitopathy)",
      "C": "Preference for avoiding surgery",
      "D": "Small goiter"
    },
    "answer": "B",
    "explanation": {
      "correct": "Radioactive Iodine can worsen Graves' ophthalmopathy. Therefore, surgery or medical management is preferred in patients with significant eye involvement.",
      "A": "RAI is safer in these patients.",
      "B": "Standard indication for surgery over RAI.",
      "C": "Patient preference usually favors RAI.",
      "D": "RAI is ideal for small goiters."
    },
    "guideline": "ATA Guidelines on Hyperthyroidism",
    "takeaway": "Graves' + Severe Eye Disease = Surgery preferred over RAI.",
    "sharp_metadata": {
      "S": "Young woman with bulging eyes (proptosis) and hyperthyroidism.",
      "H": "Prioritizing the avoidance of permanent eye damage from RAI flare.",
      "A": "Identify other surgical indications: Large goiter (>80g), pregnancy (in 2nd trimester), or suspicion of cancer.",
      "R": "Endocrine surgical selection.",
      "P": "Achieve euthyroidism with methimazole and Lugol's iodine (to decrease vascularity) before surgery."
    },
    "id": 1615,
    "_src_file": "breast_endocrine.js"
  },
  {
    "specialty": "Breast & Endocrine",
    "topic": "Hürthle Cell Carcinoma",
    "question": "Hürthle Cell Carcinoma is considered a more aggressive variant of which other thyroid cancer?",
    "options": {
      "A": "Papillary",
      "B": "Follicular",
      "C": "Medullary",
      "D": "Anaplastic"
    },
    "answer": "B",
    "explanation": {
      "correct": "Hürthle cell (oncocytic) carcinoma is a variant of Follicular thyroid cancer. It is generally more aggressive, less likely to take up iodine, and more likely to spread to lymph nodes.",
      "A": "Different lineage.",
      "B": "Classic variant of Follicular cancer.",
      "C": "C-cell origin.",
      "D": "Undifferentiated."
    },
    "guideline": "Management of Follicular and Hürthle Cell Carcinoma",
    "takeaway": "Hürthle Cell = Aggressive variant of Follicular cancer.",
    "sharp_metadata": {
      "S": "Pathology report showing angioinvasive Hürthle cell carcinoma.",
      "H": "Recognizing that 'Hürthle cell adenoma' cannot be distinguished from 'carcinoma' by FNA alone; needs a formal lobe excision.",
      "A": "Identify the abundance of mitochondria as the cause of the granular 'oxyphilic' cytoplasm.",
      "R": "Thyroid pathology board topic.",
      "P": "Treat with total thyroidectomy; monitor with thyroglobulin levels."
    },
    "id": 1616,
    "_src_file": "breast_endocrine.js"
  },
  {
    "specialty": "Breast & Endocrine",
    "topic": "Breast Cancer: Triple Negative",
    "question": "A breast cancer that lacks Estrogen Receptor (ER), Progesterone Receptor (PR), and HER2 expression is termed 'Triple Negative.' What is the primary clinical significance of this subtype?",
    "options": {
      "A": "It has an excellent prognosis",
      "B": "It cannot be treated with targeted hormonal or anti-HER2 therapies",
      "C": "It is usually found in elderly women",
      "D": "It never requires chemotherapy"
    },
    "answer": "B",
    "explanation": {
      "correct": "Triple Negative Breast Cancer (TNBC) lacks the targets for common therapies like Tamoxifen (ER) or Trastuzumab (HER2). It is generally more aggressive and occurs more frequently in younger patients and BRCA1 carriers.",
      "A": "Has a poorer prognosis than luminal subtypes.",
      "B": "Lacks 'targets' for specific therapies.",
      "C": "Common in young and African American women.",
      "D": "Chemotherapy is the mainstay of systemic treatment."
    },
    "guideline": "Systemic Therapy for Triple Negative Breast Cancer",
    "takeaway": "Triple Negative = No ER/PR/HER2; Aggressive; Needs chemotherapy.",
    "sharp_metadata": {
      "S": "35F with a rapidly growing 3cm high-grade IDC.",
      "H": "Excellence in genetic counseling: TNBC in a young patient is a strong indication for BRCA testing.",
      "A": "Address the high risk of early recurrence (within the first 3 years).",
      "R": "Standard breast oncology concept.",
      "P": "Consider neoadjuvant chemotherapy to assess response before surgery."
    },
    "id": 1617,
    "_src_file": "breast_endocrine.js"
  },
  {
    "specialty": "Breast & Endocrine",
    "topic": "Cushing's Syndrome",
    "question": "A patient with Cushing's syndrome has a LOW ACTH level. Where is the likely source of the excess cortisol?",
    "options": {
      "A": "Pituitary gland (Cushing's disease)",
      "B": "Ectopic lung tumor",
      "C": "Adrenal gland (adenoma or carcinoma)",
      "D": "Hypothalamus"
    },
    "answer": "C",
    "explanation": {
      "correct": "A low ACTH indicates 'ACTH-independent' Cushing's. This is almost always due to an autonomous cortisol-secreting tumor in the adrenal gland, which suppresses ACTH production by the pituitary via negative feedback.",
      "A": "Causes high ACTH.",
      "B": "Causes high ACTH.",
      "C": "Source of ACTH-independent Cushing's.",
      "D": "Rare."
    },
    "guideline": "Evaluation of Cushing's Syndrome",
    "takeaway": "Low ACTH + Cushing's = Adrenal source.",
    "sharp_metadata": {
      "S": "Patient with weight gain, moon facies, and purple striae; labs show low ACTH.",
      "H": "Excellence in diagnostic workup: Use the High-Dose Dexamethasone suppression test to differentiate pituitary from ectopic sources.",
      "A": "Identify 'Cushing's Disease' as specifically referring to a pituitary adenoma.",
      "R": "Endocrine feedback loop logic.",
      "P": "Order a CT of the Adrenal glands."
    },
    "id": 1618,
    "_src_file": "breast_endocrine.js"
  },
  {
    "specialty": "Breast & Endocrine",
    "topic": "Post-Thyroidectomy Complications",
    "question": "A patient becomes hoarse immediately after a total thyroidectomy. Which nerve was likely injured?",
    "options": {
      "A": "Superior Laryngeal Nerve (External branch)",
      "B": "Recurrent Laryngeal Nerve",
      "C": "Vagus Nerve",
      "D": "Ansa Cervicalis"
    },
    "answer": "B",
    "explanation": {
      "correct": "The Recurrent Laryngeal Nerve (RLN) innervates all the intrinsic muscles of the larynx except the cricothyroid. Injury causes vocal cord paralysis and hoarseness.",
      "A": "Innervates the cricothyroid; injury causes loss of high-pitched voice/singing quality.",
      "B": "Classic cause of post-op hoarseness.",
      "C": "The parent nerve of the RLN.",
      "D": "Innervates strap muscles; no effect on voice."
    },
    "guideline": "Complications of Thyroid Surgery",
    "takeaway": "Hoarseness post-thyroidectomy = Recurrent Laryngeal Nerve injury.",
    "sharp_metadata": {
      "S": "Patient in PACU with weak, 'breathy' voice after difficult resection.",
      "H": "Excellence in surgical technique: Visualizing the nerve (or using intraoperative monitoring) reduces injury risk to <1%.",
      "A": "Identify bilateral RLN injury as a surgical emergency (airway obstruction).",
      "R": "Critical surgical safety pearl.",
      "P": "Arrange for laryngoscopy to confirm the position of the vocal cords."
    },
    "id": 1619,
    "_src_file": "breast_endocrine.js"
  },
  {
    "specialty": "Breast & Endocrine",
    "topic": "Breast Cancer: HER2 Positive",
    "question": "What is the primary mechanism of action of Trastuzumab (Herceptin) in the treatment of HER2-positive breast cancer?",
    "options": {
      "A": "Blocks estrogen receptors",
      "B": "Monoclonal antibody that targets the HER2 receptor",
      "C": "Inhibits aromatase enzyme",
      "D": "Inhibits DNA topoisomerase"
    },
    "answer": "B",
    "explanation": {
      "correct": "Trastuzumab is a humanized monoclonal antibody that binds to the HER2/neu (ErbB2) receptor, inhibiting tumor cell proliferation and survival.",
      "A": "Mechanism of Tamoxifen.",
      "B": "Targeted biologic therapy for HER2+ disease.",
      "C": "Mechanism of Letrozole/Anastrozole.",
      "D": "Mechanism of some chemo agents."
    },
    "guideline": "Systemic Therapy for HER2-Positive Breast Cancer",
    "takeaway": "Trastuzumab = Anti-HER2 monoclonal antibody.",
    "sharp_metadata": {
      "S": "Patient with HER2-amplified (FISH positive) breast cancer.",
      "H": "Excellence in toxicity monitoring: Trastuzumab is cardiotoxic; baseline and serial Echocardiograms (MUGA) are mandatory.",
      "A": "Identify the 'amplification' of the HER2 gene as the driver for this subtype.",
      "R": "Standard of care in medical oncology.",
      "P": "Check LVEF every 3 months during therapy."
    },
    "id": 1620,
    "_src_file": "breast_endocrine.js"
  },
  {
    "specialty": "Breast & Endocrine",
    "topic": "Milk Line / Polythelia",
    "question": "What is the term for the presence of an extra nipple (accessory nipple), and where do they most commonly occur?",
    "options": {
      "A": "Polymastia; In the axilla",
      "B": "Polythelia; Along the 'Milk Line' from the axilla to the groin",
      "C": "Gynecomastia; Behind the areola",
      "D": "Mastitis; In the lower outer quadrant"
    },
    "answer": "B",
    "explanation": {
      "correct": "Polythelia is the medical term for an accessory nipple. They occur along the embryonic 'milk line' which extends from the axilla to the inguinal region.",
      "A": "Presence of extra breast tissue (glandular).",
      "B": "Correct term and location.",
      "C": "Development of breast tissue in males.",
      "D": "Infection."
    },
    "guideline": "Developmental Abnormalities of the Breast",
    "takeaway": "Polythelia = Accessory nipple; occurs along the milk line.",
    "sharp_metadata": {
      "S": "Patient concerned about a 'mole' under their breast that looks like a tiny nipple.",
      "H": "Reassurance is the primary goal; these are benign but can very rarely develop breast-related pathology.",
      "A": "Address the fact that these can sometimes enlarge during pregnancy.",
      "R": "Common minor physical exam finding.",
      "P": "No treatment needed unless for cosmetic reasons."
    },
    "id": 1621,
    "_src_file": "breast_endocrine.js"
  },
  {
    "id": 54,
    "specialty": "Breast Surgery",
    "topic": "Breast Disease",
    "question": "Which mammographic finding is most likely to be benign?",
    "options": {
      "A": "Stellate mass",
      "B": "Fine pleomorphic calcifications",
      "C": "Coarse 'popcorn' calcifications",
      "D": "New architectural distortion",
      "E": "Skin thickening"
    },
    "answer": "C",
    "explanation": {
      "correct": "The correct answer, 'Coarse 'popcorn' calcifications,' is excellent because these are pathognomonic for a degenerating fibroadenoma, a definitively benign entity. Recognizing this specific pattern demonstrates a high level of proficiency in mammographic interpretation.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "C",
      "set_the_stage": "This question probes your understanding of mammographic findings and their likelihood of malignancy. Differentiating benign from malignant lesions on mammography is a cornerstone of breast imaging interpretation and directly impacts patient management, from biopsy decisions to follow-up strategies.",
      "highlight_excellence": "The correct answer, 'Coarse 'popcorn' calcifications,' is excellent because these are pathognomonic for a degenerating fibroadenoma, a definitively benign entity. Recognizing this specific pattern demonstrates a high level of proficiency in mammographic interpretation.",
      "address_gaps": "While 'Coarse 'popcorn' calcifications' are benign, the other options represent findings that warrant further investigation and are more suspicious for malignancy:\n*   **Stellate mass:** Highly suspicious for malignancy, often representing invasive carcinoma.\n*   **Fine pleomorphic calcifications:** Suspicious for malignancy, particularly DCIS (ductal carcinoma in situ) or invasive cancer.\n*   **New architectural distortion:** Suspicious for malignancy, as it can indicate underlying malignancy that is not yet forming a distinct mass.\n*   **Skin thickening:** Can be benign (e.g., post-surgical changes, inflammation) but also a sign of malignancy, especially if diffuse and associated with other suspicious findings.",
      "review_guidelines": "When evaluating mammographic findings, always consider the BI-RADS (Breast Imaging Reporting and Data System) lexicon. This standardized system categorizes findings and assigns a probability of malignancy, guiding subsequent management. Key features to assess include:\n*   **Masses:** Shape, margin, density.\n*   **Calcifications:** Morphology (shape), distribution.\n*   **Architectural Distortion:** Presence of spiculations, asymmetry.\n*   **Associated Findings:** Skin thickening, nipple retraction, axillary adenopathy.",
      "plan": "To solidify your understanding, review the BI-RADS atlas for mammographic findings. Focus on the morphology and distribution of calcifications, as well as the characteristics of masses and architectural distortion. Practice correlating these imaging findings with biopsy results to reinforce your diagnostic acumen."
    },
    "guideline": "When evaluating mammographic findings, always consider the BI-RADS (Breast Imaging Reporting and Data System) lexicon. This standardized system categorizes findings and assigns a probability of malignancy, guiding subsequent management. Key features to assess include:\n*   **Masses:** Shape, margin, density.\n*   **Calcifications:** Morphology (shape), distribution.\n*   **Architectural Distortion:** Presence of spiculations, asymmetry.\n*   **Associated Findings:** Skin thickening, nipple retraction, axillary adenopathy.",
    "takeaway": "PLAN: To solidify your understanding, review the BI-RADS atlas for mammographic findings. Focus on the morphology and distribution of calcifications, as well as the characteristics of masses and architectural distortion. Practice correlating these imaging findings with biopsy results to reinforce your diagnostic acumen.",
    "_src_file": "breast_surgery.js"
  },
  {
    "id": 62,
    "specialty": "Breast Surgery",
    "topic": "Breast Disease",
    "question": "A breast cancer patient with positive supraclavicular nodes is classified as:",
    "options": {
      "A": "Stage IIA",
      "B": "Stage IIIB",
      "C": "Stage IIIC",
      "D": "Stage IV",
      "E": "Stage IIB"
    },
    "answer": "C",
    "explanation": {
      "correct": "The correct answer, Stage IIIC, is high-yield because it signifies the most advanced locoregional disease without distant metastasis. The presence of positive supraclavicular lymph nodes (N3b or N3c category in TNM) automatically upstages breast cancer to at least Stage IIIC, regardless of primary tumor size or the number of axillary/internal mammary nodes involved. This is a critical point to remember.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "C",
      "set_the_stage": "This question probes your understanding of the TNM staging system for breast cancer, specifically how the presence of supraclavicular lymph node involvement impacts staging. Accurate staging is paramount for guiding treatment decisions and predicting prognosis.",
      "highlight_excellence": "The correct answer, Stage IIIC, is high-yield because it signifies the most advanced locoregional disease without distant metastasis. The presence of positive supraclavicular lymph nodes (N3b or N3c category in TNM) automatically upstages breast cancer to at least Stage IIIC, regardless of primary tumor size or the number of axillary/internal mammary nodes involved. This is a critical point to remember.",
      "address_gaps": "Candidates often confuse the staging of locoregional nodal involvement. While axillary lymph nodes are commonly involved and contribute to staging (e.g., N1, N2), supraclavicular and internal mammary nodes represent more extensive nodal disease. Stage IIIB typically involves direct extension to the chest wall or skin, while Stage IV denotes distant metastasis. Stage IIA and IIB relate to smaller primary tumors with limited axillary nodal involvement.",
      "review_guidelines": "You must thoroughly review the current AJCC (American Joint Committee on Cancer) TNM staging manual for breast cancer. Pay close attention to the definitions of N categories, particularly N3a, N3b, and N3c, and how they translate into overall stage groups (Stage IIIA, IIIB, IIIC). Understand the criteria for Stage IV disease (distant metastasis).",
      "plan": "1. Memorize the TNM staging criteria for breast cancer, focusing on the N (nodal) categories and their corresponding stage groups. 2. Practice staging various clinical scenarios, including those with different primary tumor sizes, axillary nodal involvement, and supraclavicular/internal mammary nodal involvement. 3. Understand the prognostic implications of each stage group."
    },
    "guideline": "You must thoroughly review the current AJCC (American Joint Committee on Cancer) TNM staging manual for breast cancer. Pay close attention to the definitions of N categories, particularly N3a, N3b, and N3c, and how they translate into overall stage groups (Stage IIIA, IIIB, IIIC). Understand the criteria for Stage IV disease (distant metastasis).",
    "takeaway": "PLAN: 1. Memorize the TNM staging criteria for breast cancer, focusing on the N (nodal) categories and their corresponding stage groups. 2. Practice staging various clinical scenarios, including those with different primary tumor sizes, axillary nodal involvement, and supraclavicular/internal mammary nodal involvement. 3. Understand the prognostic implications of each stage group.",
    "_src_file": "breast_surgery.js"
  },
  {
    "id": 58,
    "specialty": "Breast Surgery",
    "topic": "Breast Disease",
    "question": "The most important prognostic factor in breast cancer is:",
    "options": {
      "A": "Tumor size",
      "B": "Histological grade",
      "C": "Axillary lymph node status",
      "D": "ER/PR status",
      "E": "Patient age"
    },
    "answer": "C",
    "explanation": {
      "correct": "The correct answer, Axillary lymph node status (C), is indeed the most critical prognostic factor in breast cancer. The presence and extent of lymph node involvement directly correlate with the likelihood of distant metastasis and, consequently, survival. This is a cornerstone of staging and treatment planning.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "C",
      "set_the_stage": "This question probes a fundamental concept in breast cancer management: identifying the single most impactful factor influencing patient outcomes. Understanding prognostic markers is crucial for tailoring treatment and counseling patients.",
      "highlight_excellence": "The correct answer, Axillary lymph node status (C), is indeed the most critical prognostic factor in breast cancer. The presence and extent of lymph node involvement directly correlate with the likelihood of distant metastasis and, consequently, survival. This is a cornerstone of staging and treatment planning.",
      "address_gaps": "While Tumor size (A), Histological grade (B), and ER/PR status (D) are all significant prognostic indicators, they are generally considered secondary to lymph node status. Tumor size and grade provide information about the tumor's intrinsic biology and growth potential, while ER/PR status guides endocrine therapy. Patient age (E) can influence treatment tolerance and survival, but it's not the primary prognostic determinant.",
      "review_guidelines": "When evaluating prognostic factors in breast cancer, always prioritize the presence or absence of lymph node metastasis. This is the most robust predictor of recurrence and survival. Remember that these factors are often used in combination (e.g., in nomograms) to refine prognostication, but lymph node status remains paramount.",
      "plan": "For future questions on breast cancer prognosis, focus on the hierarchy of prognostic markers. Be prepared to differentiate between factors that predict recurrence risk (like lymph node status and grade) and those that predict response to specific therapies (like ER/PR status). Always recall that lymph node status is the most significant independent predictor of survival."
    },
    "guideline": "When evaluating prognostic factors in breast cancer, always prioritize the presence or absence of lymph node metastasis. This is the most robust predictor of recurrence and survival. Remember that these factors are often used in combination (e.g., in nomograms) to refine prognostication, but lymph node status remains paramount.",
    "takeaway": "PLAN: For future questions on breast cancer prognosis, focus on the hierarchy of prognostic markers. Be prepared to differentiate between factors that predict recurrence risk (like lymph node status and grade) and those that predict response to specific therapies (like ER/PR status). Always recall that lymph node status is the most significant independent predictor of survival.",
    "_src_file": "breast_surgery.js"
  },
  {
    "id": 52,
    "specialty": "Breast Surgery",
    "topic": "Breast Disease",
    "question": "The most common cause of bloody nipple discharge is:",
    "options": {
      "A": "Intraductal papilloma",
      "B": "Paget's disease",
      "C": "Ductal carcinoma in situ",
      "D": "Fat necrosis",
      "E": "Fibrocystic disease"
    },
    "answer": "A",
    "explanation": {
      "correct": "The correct answer, Intraductal papilloma, is indeed the most common benign cause of spontaneous, unilateral bloody nipple discharge. These small, benign growths within the milk ducts are typically located in the subareolar region and can easily bleed when irritated.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "A",
      "set_the_stage": "Bloody nipple discharge, while concerning, has a spectrum of etiologies, ranging from benign to malignant. This question probes your understanding of the most frequent cause of this symptom.",
      "highlight_excellence": "The correct answer, Intraductal papilloma, is indeed the most common benign cause of spontaneous, unilateral bloody nipple discharge. These small, benign growths within the milk ducts are typically located in the subareolar region and can easily bleed when irritated.",
      "address_gaps": "While Paget's disease and Ductal Carcinoma in situ (DCIS) are critical considerations for bloody nipple discharge due to their malignant potential, they are less common causes than intraductal papillomas. Paget's disease often presents with eczematous changes of the nipple and areola, and DCIS, while a precursor to invasive cancer, is not the *most common* cause of discharge itself. Fat necrosis and fibrocystic disease can sometimes cause nipple discharge, but typically not bloody discharge as the primary presentation, and are less frequent culprits than papillomas.",
      "review_guidelines": "When evaluating bloody nipple discharge, always maintain a high index of suspicion for malignancy. However, remember that benign causes are more prevalent. A thorough history (spontaneous vs. expressed, unilateral vs. bilateral, associated masses), physical examination (location of discharge, palpable masses), and appropriate imaging (mammography, ultrasound) and biopsy are crucial for accurate diagnosis.",
      "plan": "Reinforce the differential diagnosis for bloody nipple discharge, emphasizing the relative frequencies of benign (papilloma) versus malignant (Paget's, DCIS) causes. Practice identifying key clinical features that might point towards one etiology over another."
    },
    "guideline": "When evaluating bloody nipple discharge, always maintain a high index of suspicion for malignancy. However, remember that benign causes are more prevalent. A thorough history (spontaneous vs. expressed, unilateral vs. bilateral, associated masses), physical examination (location of discharge, palpable masses), and appropriate imaging (mammography, ultrasound) and biopsy are crucial for accurate diagnosis.",
    "takeaway": "PLAN: Reinforce the differential diagnosis for bloody nipple discharge, emphasizing the relative frequencies of benign (papilloma) versus malignant (Paget's, DCIS) causes. Practice identifying key clinical features that might point towards one etiology over another.",
    "_src_file": "breast_surgery.js"
  },
  {
    "id": 61,
    "specialty": "Breast Surgery",
    "topic": "Breast Disease",
    "question": "Paget’s disease of the nipple is characterized by:",
    "options": {
      "A": "A benign skin rash",
      "B": "Association with underlying carcinoma",
      "C": "Rapid healing with topical steroids",
      "D": "Absence of nipple biopsy findings",
      "E": "Association with Paget's disease of the bone"
    },
    "answer": "B",
    "explanation": {
      "correct": "The correct answer, 'Association with underlying carcinoma,' is the single most high-yield piece of information regarding Paget's disease of the nipple. This condition is almost invariably a manifestation of an underlying breast malignancy, most commonly an invasive ductal carcinoma or ductal carcinoma in situ (DCIS). Therefore, any suspicion of Paget's disease necessitates a thorough investigation for breast cancer.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "B",
      "set_the_stage": "This question probes a critical concept in breast pathology and surgical oncology: Paget's disease of the nipple. Understanding its nature is paramount for accurate diagnosis and appropriate management, as it carries significant implications for patient prognosis.",
      "highlight_excellence": "The correct answer, 'Association with underlying carcinoma,' is the single most high-yield piece of information regarding Paget's disease of the nipple. This condition is almost invariably a manifestation of an underlying breast malignancy, most commonly an invasive ductal carcinoma or ductal carcinoma in situ (DCIS). Therefore, any suspicion of Paget's disease necessitates a thorough investigation for breast cancer.",
      "address_gaps": "Let's dissect why the other options are incorrect:\n*   **A. A benign skin rash:** This is fundamentally wrong. While it may present as a rash-like lesion, Paget's disease of the nipple is not benign; it's a malignant process.\n*   **C. Rapid healing with topical steroids:** While topical steroids might temporarily alleviate symptoms like itching or inflammation, they do not treat the underlying malignancy and will not lead to a cure. The disease will persist and progress.\n*   **D. Absence of nipple biopsy findings:** This is incorrect. A biopsy of the nipple and areola is the definitive diagnostic tool for Paget's disease. Histological examination reveals characteristic large, atypical cells (Paget cells) within the epidermis.\n*   **E. Association with Paget's disease of the bone:** While both are named after Sir James Paget, Paget's disease of the nipple (breast) and Paget's disease of the bone are distinct entities. They do not share a direct causal or associative relationship, although a patient could theoretically have both conditions independently.",
      "review_guidelines": "When encountering a lesion on the nipple or areola that is eczematous, itchy, or crusted, especially if unilateral and persistent, Paget's disease of the nipple must be at the top of the differential diagnosis. A high index of suspicion is crucial. Management involves a comprehensive breast workup, including mammography, ultrasound, and often MRI, followed by biopsy of any suspicious lesions and the nipple/areola itself. Surgical management is dictated by the presence and extent of the underlying carcinoma.",
      "plan": "For future encounters, remember the mantra: Paget's disease of the nipple = underlying breast cancer until proven otherwise. Always correlate clinical presentation with imaging and pathology. Emphasize the importance of biopsy for definitive diagnosis and the necessity of a full breast cancer workup."
    },
    "guideline": "When encountering a lesion on the nipple or areola that is eczematous, itchy, or crusted, especially if unilateral and persistent, Paget's disease of the nipple must be at the top of the differential diagnosis. A high index of suspicion is crucial. Management involves a comprehensive breast workup, including mammography, ultrasound, and often MRI, followed by biopsy of any suspicious lesions and the nipple/areola itself. Surgical management is dictated by the presence and extent of the underlying carcinoma.",
    "takeaway": "PLAN: For future encounters, remember the mantra: Paget's disease of the nipple = underlying breast cancer until proven otherwise. Always correlate clinical presentation with imaging and pathology. Emphasize the importance of biopsy for definitive diagnosis and the necessity of a full breast cancer workup.",
    "_src_file": "breast_surgery.js"
  },
  {
    "id": 55,
    "specialty": "Breast Surgery",
    "topic": "Breast Disease",
    "question": "Which of the following is NOT a proven risk factor for breast cancer?",
    "options": {
      "A": "Smoking",
      "B": "Family history in a first-degree relative",
      "C": "Atypical ductal hyperplasia (ADH)",
      "D": "Increasing age",
      "E": "Early menarche"
    },
    "answer": "A",
    "explanation": {
      "correct": "The question correctly identifies several well-established risk factors for breast cancer: family history in a first-degree relative, atypical ductal hyperplasia (ADH), increasing age, and early menarche. These are all consistently cited in major epidemiological studies and clinical guidelines as significantly increasing a woman's risk.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "A",
      "set_the_stage": "This question probes your understanding of established risk factors for breast cancer, a critical area in oncology and women's health. Differentiating between proven and non-proven risk factors is essential for patient counseling and risk stratification.",
      "highlight_excellence": "The question correctly identifies several well-established risk factors for breast cancer: family history in a first-degree relative, atypical ductal hyperplasia (ADH), increasing age, and early menarche. These are all consistently cited in major epidemiological studies and clinical guidelines as significantly increasing a woman's risk.",
      "address_gaps": "The key to this question lies in recognizing that while smoking is a known risk factor for many cancers, its association with breast cancer is less definitive and often considered a weaker or less consistently proven risk factor compared to the others listed. While some studies suggest a link, particularly with early-onset breast cancer or in specific populations, it is not as universally accepted or as strong as the other options. This nuance is crucial for accurate risk assessment.",
      "review_guidelines": "When evaluating risk factors for breast cancer, always prioritize those with robust, consistent epidemiological evidence. Key categories include: 1. **Demographic/Lifestyle:** Increasing age, nulliparity, late first pregnancy, early menarche, late menopause, obesity (postmenopausal), alcohol consumption, and potentially smoking (though debated in strength). 2. **Reproductive History:** Early menarche, late menopause, nulliparity, late first birth. 3. **Personal/Family History:** Personal history of breast cancer, family history of breast cancer (especially in first-degree relatives or bilateral/premenopausal), known genetic mutations (BRCA1/2). 4. **Histological Findings:** Atypical hyperplasia (ADH, ALH), lobular carcinoma in situ (LCIS).",
      "plan": "For future questions on risk factors, remember to critically evaluate the strength of evidence for each factor. Focus on the most consistently identified and strongest associations. If unsure about a particular factor, consider its relative impact compared to other well-established risks. For breast cancer, prioritize genetic predisposition, reproductive history, and specific histological findings over factors with more debated or weaker associations."
    },
    "guideline": "When evaluating risk factors for breast cancer, always prioritize those with robust, consistent epidemiological evidence. Key categories include: 1. **Demographic/Lifestyle:** Increasing age, nulliparity, late first pregnancy, early menarche, late menopause, obesity (postmenopausal), alcohol consumption, and potentially smoking (though debated in strength). 2. **Reproductive History:** Early menarche, late menopause, nulliparity, late first birth. 3. **Personal/Family History:** Personal history of breast cancer, family history of breast cancer (especially in first-degree relatives or bilateral/premenopausal), known genetic mutations (BRCA1/2). 4. **Histological Findings:** Atypical hyperplasia (ADH, ALH), lobular carcinoma in situ (LCIS).",
    "takeaway": "PLAN: For future questions on risk factors, remember to critically evaluate the strength of evidence for each factor. Focus on the most consistently identified and strongest associations. If unsure about a particular factor, consider its relative impact compared to other well-established risks. For breast cancer, prioritize genetic predisposition, reproductive history, and specific histological findings over factors with more debated or weaker associations.",
    "_src_file": "breast_surgery.js"
  },
  {
    "id": 75,
    "specialty": "Breast Surgery",
    "topic": "Breast Disease",
    "question": "An 'occult' primary breast cancer typically presents as:",
    "options": {
      "A": "A large palpable mass",
      "B": "Nipple discharge only",
      "C": "Axillary lymphadenopathy with no visible breast mass",
      "D": "Bone pain",
      "E": "Skin rash"
    },
    "answer": "C",
    "explanation": {
      "correct": "The question succinctly tests a high‑yield concept: the classic presentation of occult breast cancer is isolated axillary lymphadenopathy without a detectable breast mass. The answer key correctly identifies option C, reinforcing the learner’s understanding of this atypical but important presentation.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "C",
      "set_the_stage": "Occult primary breast cancer refers to metastatic disease (most commonly axillary lymph node involvement) where no primary tumor is identified on clinical exam or imaging of the breast. Recognizing this presentation is crucial because it prompts a targeted diagnostic work‑up and appropriate oncologic management.",
      "highlight_excellence": "The question succinctly tests a high‑yield concept: the classic presentation of occult breast cancer is isolated axillary lymphadenopathy without a detectable breast mass. The answer key correctly identifies option C, reinforcing the learner’s understanding of this atypical but important presentation.",
      "address_gaps": "Learners may mistakenly associate occult breast cancer with nipple discharge or skin changes, which are more typical of overt disease. It is also important to differentiate axillary metastasis from other sources (e.g., melanoma, lung cancer) and to remember that a small, imaging‑occult primary can still be present, necessitating thorough breast imaging and pathology correlation.",
      "review_guidelines": "According to NCCN and ASCO guidelines, any patient with unexplained axillary lymphadenopathy should undergo: 1) diagnostic breast imaging (mammography + targeted ultrasound, and if negative, MRI), 2) core needle biopsy of the node with immunohistochemistry (ER, PR, HER2, GATA‑3, mammaglobin) to confirm breast origin, and 3) staging work‑up (CT/PET) to assess for distant disease. Management typically follows standard breast cancer protocols (surgery, radiation, systemic therapy) based on receptor status and stage.",
      "plan": "1. Perform bilateral diagnostic mammography and targeted breast ultrasound; if negative, obtain breast MRI. 2. Ultrasound‑guided core needle biopsy of the axillary node with IHC panel to confirm breast origin. 3. If breast primary remains occult, stage with CT chest/abdomen/pelvis or PET‑CT. 4. Multidisciplinary discussion for treatment: options include axillary lymph node dissection or sentinel node surgery, whole‑breast irradiation, and systemic therapy tailored to receptor status. 5. Follow‑up imaging to monitor response and detect any emerging primary lesion."
    },
    "guideline": "According to NCCN and ASCO guidelines, any patient with unexplained axillary lymphadenopathy should undergo: 1) diagnostic breast imaging (mammography + targeted ultrasound, and if negative, MRI), 2) core needle biopsy of the node with immunohistochemistry (ER, PR, HER2, GATA‑3, mammaglobin) to confirm breast origin, and 3) staging work‑up (CT/PET) to assess for distant disease. Management typically follows standard breast cancer protocols (surgery, radiation, systemic therapy) based on receptor status and stage.",
    "takeaway": "PLAN: 1. Perform bilateral diagnostic mammography and targeted breast ultrasound; if negative, obtain breast MRI. 2. Ultrasound‑guided core needle biopsy of the axillary node with IHC panel to confirm breast origin. 3. If breast primary remains occult, stage with CT chest/abdomen/pelvis or PET‑CT. 4. Multidisciplinary discussion for treatment: options include axillary lymph node dissection or sentinel node surgery, whole‑breast irradiation, and systemic therapy tailored to receptor status. 5. Follow‑up imaging to monitor response and detect any emerging primary lesion.",
    "_src_file": "breast_surgery.js"
  },
  {
    "id": 57,
    "specialty": "Breast Surgery",
    "topic": "Breast Disease",
    "question": "In postmenopausal women with ER+ breast cancer, the most effective hormonal therapy is:",
    "options": {
      "A": "Tamoxifen",
      "B": "Raloxifene",
      "C": "Aromatase inhibitors",
      "D": "Progesterone",
      "E": "Estrogen"
    },
    "answer": "C",
    "explanation": {
      "correct": "The correct answer, aromatase inhibitors (AIs), represents the current gold standard. AIs directly suppress estrogen production, which is the primary driver of growth in ER+ breast cancer. This approach is superior to selective estrogen receptor modulators (SERMs) like tamoxifen in this population.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "C",
      "set_the_stage": "This question assesses understanding of hormonal therapies in postmenopausal women with ER+ breast cancer – a cornerstone of treatment. The choice of therapy significantly impacts long-term outcomes.",
      "highlight_excellence": "The correct answer, aromatase inhibitors (AIs), represents the current gold standard. AIs directly suppress estrogen production, which is the primary driver of growth in ER+ breast cancer. This approach is superior to selective estrogen receptor modulators (SERMs) like tamoxifen in this population.",
      "address_gaps": "Several options are incorrect. Tamoxifen (A) is effective but less potent than AIs in postmenopausal women. Raloxifene (B) is a SERM primarily used for osteoporosis prevention and isn’t the first-line choice for breast cancer. Progesterone (D) has no role in treating ER+ breast cancer. Estrogen (E) would directly stimulate cancer growth and is contraindicated.",
      "review_guidelines": "1. **Postmenopausal Status:** Estrogen production is suppressed, making AIs the most effective. 2. **ER+ Status:** Estrogen receptor positivity dictates the need for estrogen-lowering therapy. 3. **AI Mechanism:** AIs block aromatase, the enzyme responsible for converting androgens to estrogens. 4. **Long-Term Data:** Clinical trials consistently demonstrate superior outcomes with AIs compared to tamoxifen in this patient population. Consider factors like patient comorbidities and tolerability when selecting an AI.",
      "plan": "Further investigation should include a discussion of AI side effects (e.g., hot flashes, bone mineral density changes) and strategies for management.  Reinforce the importance of adherence to long-term AI therapy.  Consider the role of neoadjuvant AI therapy in select cases."
    },
    "guideline": "1. **Postmenopausal Status:** Estrogen production is suppressed, making AIs the most effective. 2. **ER+ Status:** Estrogen receptor positivity dictates the need for estrogen-lowering therapy. 3. **AI Mechanism:** AIs block aromatase, the enzyme responsible for converting androgens to estrogens. 4. **Long-Term Data:** Clinical trials consistently demonstrate superior outcomes with AIs compared to tamoxifen in this patient population. Consider factors like patient comorbidities and tolerability when selecting an AI.",
    "takeaway": "PLAN: Further investigation should include a discussion of AI side effects (e.g., hot flashes, bone mineral density changes) and strategies for management.  Reinforce the importance of adherence to long-term AI therapy.  Consider the role of neoadjuvant AI therapy in select cases.",
    "_src_file": "breast_surgery.js"
  },
  {
    "id": 47,
    "specialty": "Breast Surgery",
    "topic": "Breast Disease",
    "question": "The most common benign breast tumor in young women is:",
    "options": {
      "A": "Breast cyst",
      "B": "Intraductal papilloma",
      "C": "Fibroadenoma",
      "D": "Phylloides tumor",
      "E": "Lipoma"
    },
    "answer": "C",
    "explanation": {
      "correct": "The correct answer, fibroadenoma, is indeed the most common benign breast tumor in women under 30. Its characteristic features – well-defined borders, firm consistency, and estrogen-stimulated growth – align with the typical presentation in this age group. Recognizing this is crucial for accurate diagnosis and management.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "C",
      "set_the_stage": "This question assesses a fundamental understanding of breast pathology, specifically concerning the prevalence of benign tumors in younger women. It’s a common question encountered in surgical training and board certification exams.",
      "highlight_excellence": "The correct answer, fibroadenoma, is indeed the most common benign breast tumor in women under 30. Its characteristic features – well-defined borders, firm consistency, and estrogen-stimulated growth – align with the typical presentation in this age group. Recognizing this is crucial for accurate diagnosis and management.",
      "address_gaps": "Several options are frequently confused. Let’s break down why the others are less likely:\n*   **A (Breast cyst):** While common, cysts are less frequent in young women compared to fibroadenomas. They are more prevalent in older women.\n*   **B (Intraductal papilloma):** These are more common in women over 50 and typically present with nipple discharge.\n*   **D (Phylloides tumor):** This is a rare, aggressive benign tumor, significantly less common than fibroadenomas and not typically seen in young women.\n*   **E (Lipoma):** Lipomas are extremely rare in the breast.",
      "review_guidelines": "To effectively manage a young woman presenting with a breast mass, consider the following:\n1.  **Detailed History:** Age, menstrual history, family history of breast cancer, and any symptoms (e.g., nipple discharge).\n2.  **Clinical Examination:** Palpation for size, shape, consistency, mobility, and any associated findings.\n3.  **Imaging:** Mammography and ultrasound are standard. MRI may be considered for further evaluation, particularly if the diagnosis is uncertain.\n4.  **Biopsy:** Core needle biopsy is often diagnostic. Excisional biopsy may be necessary for challenging cases.",
      "plan": "Further practice questions should focus on differentiating benign breast tumors based on their clinical and pathological characteristics. Reviewing imaging findings (mammography, ultrasound, MRI) alongside histological reports is essential for developing diagnostic acumen. Consider case-based learning to solidify understanding of management strategies."
    },
    "guideline": "To effectively manage a young woman presenting with a breast mass, consider the following:\n1.  **Detailed History:** Age, menstrual history, family history of breast cancer, and any symptoms (e.g., nipple discharge).\n2.  **Clinical Examination:** Palpation for size, shape, consistency, mobility, and any associated findings.\n3.  **Imaging:** Mammography and ultrasound are standard. MRI may be considered for further evaluation, particularly if the diagnosis is uncertain.\n4.  **Biopsy:** Core needle biopsy is often diagnostic. Excisional biopsy may be necessary for challenging cases.",
    "takeaway": "PLAN: Further practice questions should focus on differentiating benign breast tumors based on their clinical and pathological characteristics. Reviewing imaging findings (mammography, ultrasound, MRI) alongside histological reports is essential for developing diagnostic acumen. Consider case-based learning to solidify understanding of management strategies.",
    "_src_file": "breast_surgery.js"
  },
  {
    "id": 66,
    "specialty": "Breast Surgery",
    "topic": "Breast Disease",
    "question": "The most frequent site of distant metastasis for breast cancer is:",
    "options": {
      "A": "Brain",
      "B": "Bone",
      "C": "Lung",
      "D": "Liver",
      "E": "Adrenal glands"
    },
    "answer": "B",
    "explanation": {
      "correct": "The correct answer, ‘Bone,’ reflects the established and most common site of breast cancer metastasis. Bone is a frequent destination due to the presence of breast cancer cells within the bone marrow and the bone’s ability to provide a microenvironment conducive to growth and spread.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "B",
      "set_the_stage": "This question assesses a fundamental understanding of breast cancer metastatic patterns – a critical component of surgical oncology and oncology management in general. Distant metastases are a major determinant of prognosis and treatment strategy.",
      "highlight_excellence": "The correct answer, ‘Bone,’ reflects the established and most common site of breast cancer metastasis. Bone is a frequent destination due to the presence of breast cancer cells within the bone marrow and the bone’s ability to provide a microenvironment conducive to growth and spread.",
      "address_gaps": "Several options are frequently misselected. ‘Brain’ is a less common site, though it does occur, particularly with HER2-positive cancers. ‘Lung’ is a less frequent site than bone, and ‘Liver’ and ‘Adrenal glands’ represent rarer metastatic sites for breast cancer. The question’s simplicity masks the importance of this knowledge.",
      "review_guidelines": "1. **Bone Biology:** Understand the bone microenvironment and its role in cancer progression. 2. **Metastatic Patterns:** Be familiar with the typical metastatic patterns for different cancer types, including breast cancer. 3. **Molecular Subtypes:** Recognize that HER2-positive breast cancers have a higher propensity for brain metastasis compared to other subtypes. 4. **Imaging:** Understand how imaging modalities (e.g., bone scans, CT scans) are used to detect and monitor metastases.",
      "plan": "Further review should focus on the epidemiology of breast cancer metastasis, specifically the factors influencing bone involvement (e.g., hormone receptor status, tumor grade).  Clinical management should include regular bone density scans and monitoring for skeletal complications in patients with breast cancer.  Consider incorporating a brief discussion of targeted therapies and their potential impact on metastatic sites."
    },
    "guideline": "1. **Bone Biology:** Understand the bone microenvironment and its role in cancer progression. 2. **Metastatic Patterns:** Be familiar with the typical metastatic patterns for different cancer types, including breast cancer. 3. **Molecular Subtypes:** Recognize that HER2-positive breast cancers have a higher propensity for brain metastasis compared to other subtypes. 4. **Imaging:** Understand how imaging modalities (e.g., bone scans, CT scans) are used to detect and monitor metastases.",
    "takeaway": "PLAN: Further review should focus on the epidemiology of breast cancer metastasis, specifically the factors influencing bone involvement (e.g., hormone receptor status, tumor grade).  Clinical management should include regular bone density scans and monitoring for skeletal complications in patients with breast cancer.  Consider incorporating a brief discussion of targeted therapies and their potential impact on metastatic sites.",
    "_src_file": "breast_surgery.js"
  },
  {
    "id": 46,
    "specialty": "Breast Surgery",
    "topic": "Breast Disease",
    "question": "A 35-year-old woman has a breast mass that disappears after aspiration of clear fluid. The diagnosis is:",
    "options": {
      "A": "Fibroadenoma",
      "B": "Fibrocystic disease",
      "C": "Breast cancer",
      "D": "Lipoma",
      "E": "Galactocele"
    },
    "answer": "B",
    "explanation": {
      "correct": "The correct answer, Fibrocystic disease, accurately reflects the clinical picture. The cyclical changes in breast tissue, including fluid accumulation and benign epithelial proliferation, can present with palpable masses that fluctuate in size and disappear after aspiration. The clear fluid is a hallmark of this condition.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "B",
      "set_the_stage": "This question assesses understanding of benign breast conditions and their characteristic presentation. The key here is the described clinical scenario – a disappearing breast mass following aspiration of clear fluid.",
      "highlight_excellence": "The correct answer, Fibrocystic disease, accurately reflects the clinical picture. The cyclical changes in breast tissue, including fluid accumulation and benign epithelial proliferation, can present with palpable masses that fluctuate in size and disappear after aspiration. The clear fluid is a hallmark of this condition.",
      "address_gaps": "Options A (Fibroadenoma) and C (Breast cancer) are incorrect. Fibroadenomas typically maintain their size and are not associated with clear fluid aspiration. Breast cancer can present similarly but rarely resolves with aspiration and typically has irregular borders and often associated findings like nipple retraction or skin changes. Option D (Lipoma) is incorrect as lipomas are solid, not cystic, and wouldn't respond to aspiration. Option E (Galactocele) is less likely given the absence of lactation history.",
      "review_guidelines": "1. **Palpable Breast Masses:** Understand the differential diagnosis, including benign and malignant possibilities. 2. **Aspiration Findings:** Clear fluid aspiration is highly suggestive of cystic changes, particularly in fibrocystic disease. 3. **Fibroadenoma Characteristics:** These are typically firm, well-defined, and non-fluctuating. 4. **Breast Cancer Presentation:** Recognize the broader range of presentations, including those that may initially mimic benign conditions. 5. **Galactocele Considerations:** Consider lactation history when evaluating cystic breast masses.",
      "plan": "Further investigation would involve a clinical breast exam, mammography, and potentially ultrasound to characterize the mass and rule out malignancy. Management would depend on the definitive diagnosis, but typically involves reassurance and observation for fibrocystic disease. If malignancy is suspected, a biopsy is essential."
    },
    "guideline": "1. **Palpable Breast Masses:** Understand the differential diagnosis, including benign and malignant possibilities. 2. **Aspiration Findings:** Clear fluid aspiration is highly suggestive of cystic changes, particularly in fibrocystic disease. 3. **Fibroadenoma Characteristics:** These are typically firm, well-defined, and non-fluctuating. 4. **Breast Cancer Presentation:** Recognize the broader range of presentations, including those that may initially mimic benign conditions. 5. **Galactocele Considerations:** Consider lactation history when evaluating cystic breast masses.",
    "takeaway": "PLAN: Further investigation would involve a clinical breast exam, mammography, and potentially ultrasound to characterize the mass and rule out malignancy. Management would depend on the definitive diagnosis, but typically involves reassurance and observation for fibrocystic disease. If malignancy is suspected, a biopsy is essential.",
    "_src_file": "breast_surgery.js"
  },
  {
    "id": 69,
    "specialty": "Breast Surgery",
    "topic": "Breast Disease",
    "question": "Routine follow-up after breast cancer treatment should always include:",
    "options": {
      "A": "Monthly tumor markers",
      "B": "Quarterly CT scans",
      "C": "Yearly bone scans",
      "D": "Regular clinical exams and yearly mammography",
      "E": "Semi-annual MRI"
    },
    "answer": "D",
    "explanation": {
      "correct": "The correct answer (D) reflects the current standard of care. The combination of regular clinical exams and yearly mammography provides the most comprehensive and actionable surveillance strategy. Mammography remains the cornerstone for detecting local recurrence or new primary cancers. Clinical exams allow for palpation and assessment of local changes.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "D",
      "set_the_stage": "This question assesses understanding of long-term surveillance in breast cancer survivors. Post-treatment monitoring is crucial to detect recurrence, local complications, and assess the effectiveness of therapy. It’s a common clinical scenario requiring a nuanced approach.",
      "highlight_excellence": "The correct answer (D) reflects the current standard of care. The combination of regular clinical exams and yearly mammography provides the most comprehensive and actionable surveillance strategy. Mammography remains the cornerstone for detecting local recurrence or new primary cancers. Clinical exams allow for palpation and assessment of local changes.",
      "address_gaps": "Options A, B, and C are either too frequent or lack sufficient sensitivity. Monthly tumor markers (A) are useful for detecting early recurrence but are not a standalone surveillance tool. Quarterly CT scans (B) are often used but have limitations in detecting small, early recurrences, particularly in the chest wall. Yearly bone scans (C) are primarily for assessing bone metastasis, which is a later stage finding and not the primary focus of routine follow-up. Semi-annual MRI (E) is increasingly utilized, particularly for high-risk patients, but is not universally recommended as a first-line surveillance strategy.",
      "review_guidelines": "Key guidelines for breast cancer surveillance include: 1. **Clinical Breast Exam (CBE):** Monthly CBEs are recommended for all patients, particularly those with a history of DCIS or invasive carcinoma. 2. **Mammography:** Annually, or more frequently if indicated. 3. **Tumor Markers:** CA 15-3 may be considered for monitoring recurrence, but is not a primary surveillance tool. 4. **Imaging:** CT scans and bone scans are reserved for suspicion of metastasis. 5. **MRI:** Increasingly used for high-risk patients and those with specific tumor characteristics (e.g., dense breasts, triple-negative breast cancer).  The frequency of imaging depends on risk factors (e.g., grade, stage, lymph node involvement, hormone receptor status).",
      "plan": "I would recommend a review of the patient’s specific risk factors, including tumor characteristics (grade, stage, hormone receptor status, HER2 status), lymph node involvement, and prior treatment. Based on this assessment, a tailored surveillance plan should be established, likely incorporating CBE and yearly mammography, with consideration for additional imaging (CT, bone scan, or MRI) if clinically indicated. Further discussion with the patient regarding their understanding of the surveillance plan and their role in self-examination is essential."
    },
    "guideline": "Key guidelines for breast cancer surveillance include: 1. **Clinical Breast Exam (CBE):** Monthly CBEs are recommended for all patients, particularly those with a history of DCIS or invasive carcinoma. 2. **Mammography:** Annually, or more frequently if indicated. 3. **Tumor Markers:** CA 15-3 may be considered for monitoring recurrence, but is not a primary surveillance tool. 4. **Imaging:** CT scans and bone scans are reserved for suspicion of metastasis. 5. **MRI:** Increasingly used for high-risk patients and those with specific tumor characteristics (e.g., dense breasts, triple-negative breast cancer).  The frequency of imaging depends on risk factors (e.g., grade, stage, lymph node involvement, hormone receptor status).",
    "takeaway": "PLAN: I would recommend a review of the patient’s specific risk factors, including tumor characteristics (grade, stage, hormone receptor status, HER2 status), lymph node involvement, and prior treatment. Based on this assessment, a tailored surveillance plan should be established, likely incorporating CBE and yearly mammography, with consideration for additional imaging (CT, bone scan, or MRI) if clinically indicated. Further discussion with the patient regarding their understanding of the surveillance plan and their role in self-examination is essential.",
    "_src_file": "breast_surgery.js"
  },
  {
    "id": 68,
    "specialty": "Breast Surgery",
    "topic": "Breast Disease",
    "question": "Breast cancer during pregnancy is:",
    "options": {
      "A": "Always a reason for termination",
      "B": "Never treated with chemotherapy",
      "C": "The most common cancer diagnosed during pregnancy",
      "D": "Always ER positive",
      "E": "Treated with radiation in the first trimester"
    },
    "answer": "C",
    "explanation": {
      "correct": "Breast cancer is the most frequent malignancy occurring during gestation (1 in 3,000 pregnancies).",
      "A": "Incorrect; termination does not improve prognosis.",
      "B": "Incorrect; chemo is safe after the first trimester.",
      "C": "Correct; it is the most common pregnancy-associated cancer.",
      "D": "Incorrect; pregnancy-associated breast cancers are often high-grade and ER/PR negative.",
      "E": "Incorrect; radiation is contraindicated throughout pregnancy due to fetal risk."
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "C",
      "set_the_stage": "Breast cancer diagnosed during pregnancy or within one year postpartum is termed Pregnancy-Associated Breast Cancer (PABC).",
      "highlight_excellence": "PABC often presents at an advanced stage because physiological changes in the pregnant breast mask masses. Despite this, management can often proceed without terminating the pregnancy.",
      "address_gaps": "Radiation (E) is avoided until after delivery. Chemotherapy (B) is contraindicated in the 1st trimester (organogenesis) but safe in the 2nd and 3rd. PABC is typically ER negative (D).",
      "review_learning_points": "Surgery (mastectomy or BCS) is safe in all trimesters. Sentinel lymph node biopsy using technetium sulfur colloid (not blue dye) is acceptable.",
      "plan_for_improvement": "Rule of thumb: Surgery anytime, Chemo after 1st trimester, Radiation and Tamoxifen ONLY after delivery.",
      "visualization": "A pregnant patient with a firm, non-tender breast mass that doesn't resolve with typical measures for mastitis."
    },
    "guideline": "International Consensus Guidelines (2020) state that maternal prognosis is similar to non-pregnant age-matched controls when stage is controlled.",
    "takeaway": "Pregnancy is not a contraindication to curative breast cancer treatment.",
    "visualization": "Ultrasound showing a suspicious solid, hypoechoic mass in a lactating or pregnant breast.",
    "_src_file": "breast_surgery.js"
  },
  {
    "id": 73,
    "specialty": "Breast Surgery",
    "topic": "Breast Disease",
    "question": "A large breast tumor with skin erosion and a favorable outlook is likely:",
    "options": {
      "A": "Medullary carcinoma",
      "B": "Cystosarcoma phyllodes (benign)",
      "C": "Scirrhous carcinoma",
      "D": "Inflammatory carcinoma",
      "E": "Paget's disease"
    },
    "answer": "B",
    "explanation": {
      "correct": "Phyllodes tumors can grow massive, causing pressure necrosis and skin erosion, but often remain benign with a good prognosis if excised.",
      "A": "Incorrect; Medullary has a better prognosis than standard ductal, but massive size with erosion is less typical.",
      "B": "Correct; rapid, massive growth causing skin stretching/erosion is a hallmark of Phyllodes.",
      "C": "Incorrect; Scirrhous is hard, fibrotic, and tethering.",
      "D": "Incorrect; Inflammatory has a dismal prognosis (peau d'orange, erythema).",
      "E": "Incorrect; Paget's affects the nipple specifically."
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "B",
      "set_the_stage": "Cystosarcoma phyllodes (now just 'Phyllodes tumor') is a fibroepithelial lesion that can exhibit rapid, massive growth.",
      "highlight_excellence": "Because of its rapid expansion, a Phyllodes tumor stretches the overlying skin, leading to shiny, thinned skin that can ulcerate or erode due to pressure ischemia. Despite this alarming presentation, the majority are benign and cured by wide local excision.",
      "address_gaps": "Inflammatory breast cancer (D) causes skin changes via dermal lymphatic invasion and carries a poor prognosis. Scirrhous carcinoma (C) causes skin dimpling (Cooper's ligament tethering), not massive expansion.",
      "review_learning_points": "Management requires wide local excision with at least 1 cm margins. Because it spreads hematogenously (if malignant), axillary node dissection is generally not required.",
      "plan_for_improvement": "Massive breast tumor + thin, shiny, ulcerated skin + benign nodes = Phyllodes."
    },
    "guideline": "NCCN guidelines recommend wide local excision with >1 cm margins for Phyllodes tumors; axillary staging is omitted unless nodes are clinically suspicious.",
    "takeaway": "Not all ulcerating breast masses are advanced carcinomas; pressure necrosis from a benign Phyllodes is a classic mimicker.",
    "visualization": "A massive, lobulated breast distortion with prominent engorged superficial veins and a focal area of ischemic skin breakdown at the apex.",
    "_src_file": "breast_surgery.js"
  },
  {
    "id": 49,
    "specialty": "Breast Surgery",
    "topic": "Breast Disease",
    "question": "A painful breast mass appearing several weeks after trauma with skin retraction is likely:",
    "options": {
      "A": "Inflammatory carcinoma",
      "B": "Hematoma",
      "C": "Abscess",
      "D": "Fat necrosis",
      "E": "Sclerosing adenosis"
    },
    "answer": "D",
    "explanation": {
      "correct": "Fat necrosis clinically mimics breast cancer (firm mass, skin retraction) but is elicited by trauma.",
      "A": "Incorrect; presents with rapid erythema and peau d'orange, not specifically linked to trauma.",
      "B": "Incorrect; resolves or forms a distinct fluid collection, but usually doesn't cause tethering skin retraction.",
      "C": "Incorrect; presents with acute fever, erythema, and fluctuance.",
      "D": "Correct; liquefactive necrosis of fat creates a fibrous response pulling the skin.",
      "E": "Incorrect; a benign proliferative condition found on biopsy, not clinically presenting post-trauma."
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "D",
      "set_the_stage": "Fat necrosis is a benign inflammatory process that creates a fibrotic scar, heavily mimicking carcinoma on both exam and mammography.",
      "highlight_excellence": "Following blunt trauma (seatbelt injury, surgery), adipocytes rupture and release lipids. This triggers a macrophage-led foreign body giant cell reaction, leading to fibrosis and dystrophic calcification. The fibrotic scarring pulls on Cooper's ligaments, causing skin retraction.",
      "address_gaps": "While hematomas (B) occur acutely after trauma, they don't typically cause the hard, tethered mass characteristic of the delayed fibrotic phase. Inflammatory cancer (A) lacks the trauma history and presents with dermal edema.",
      "review_learning_points": "A core needle biopsy is often required to definitively rule out malignancy because the clinical and radiographic features are so indistinguishable.",
      "plan_for_improvement": "Trauma history + hard mass + skin dimpling = Fat Necrosis."
    },
    "guideline": "BIRADS classification often scores fat necrosis as suspicious (BIRADS 4 or 5) necessitating a tissue biopsy to confirm benignity.",
    "takeaway": "Never dismiss a firm, tethered breast mass as 'just from trauma' without pathologic confirmation.",
    "visualization": "Mammogram shows a speculated mass with coarse, eggshell or 'rim' calcifications.",
    "_src_file": "breast_surgery.js"
  },
  {
    "id": 71,
    "specialty": "Breast Surgery",
    "topic": "Breast Disease",
    "question": "What is the incidence of breast cancer in males?",
    "options": {
      "A": "<1% of all breast cancers",
      "B": "5%",
      "C": "10%",
      "D": "20%",
      "E": "50%"
    },
    "answer": "A",
    "explanation": {
      "correct": "Male breast cancer is rare, accounting for approximately 1% of all breast cancer cases.",
      "A": "Correct; it is statistically around 0.5% to 1%.",
      "B": "Incorrect.",
      "C": "Incorrect.",
      "D": "Incorrect.",
      "E": "Incorrect."
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "A",
      "set_the_stage": "While rare, male breast cancer carries similar biological principles to female breast cancer but often presents later.",
      "highlight_excellence": "Male breast cancer accounts for <1% of all breast cancers. Because men have little breast tissue, the tumor quickly involves the skin or pectoralis muscle, leading to a higher rate of advanced local stage at presentation. The vast majority are invasive ductal carcinomas (IDC) and are overwhelmingly estrogen receptor (ER) positive.",
      "address_gaps": "Options B through E grossly overestimate the prevalence.",
      "review_learning_points": "Risk factors include BRCA2 mutations (stronger association in men than BRCA1), Klinefelter syndrome (XXY), cirrhosis (hyperestrogenism), and radiation exposure.",
      "plan_for_improvement": "Male breast cancer = Rare (<1%), BRCA2, ER-positive, usually Invasive Ductal."
    },
    "guideline": "NCCN guidelines for Male Breast Cancer recommend genetic testing (BRCA1/2, PALB2) for ALL men diagnosed with breast cancer, regardless of family history.",
    "takeaway": "A hard, unilateral, subareolar mass in an older man is cancer until proven otherwise.",
    "visualization": "A firm, painless, eccentric subareolar nodule in an older male, sometimes accompanied by nipple retraction or bloody discharge.",
    "_src_file": "breast_surgery.js"
  },
  {
    "id": 70,
    "specialty": "Breast Surgery",
    "topic": "Reconstructive Surgery",
    "question": "Submuscular placement of breast implants is preferred because:",
    "options": {
      "A": "It is less painful.",
      "B": "It prevents all capsule formation.",
      "C": "It allows better mammographic visualization of breast tissue.",
      "D": "It is cheaper.",
      "E": "It eliminates the risk of rupture."
    },
    "answer": "C",
    "explanation": {
      "correct": "Submuscular implants interfere less with mammography than subglandular implants.",
      "A": "Incorrect; submuscular placement is generally *more* painful post-operatively due to muscle stretching.",
      "B": "Incorrect; it reduces the risk of capsular contracture, but does not prevent it entirely.",
      "C": "Correct; placing the implant behind the pectoralis major allows the breast parenchyma to be pulled forward for imaging.",
      "D": "Incorrect; cost is unaffected.",
      "E": "Incorrect; rupture risk remains."
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "C",
      "set_the_stage": "The surgical plane for breast implants (subglandular vs. submuscular) dictates cosmetic outcome, complication rates, and screening efficacy.",
      "highlight_excellence": "Placing a breast implant in the submuscular (subpectoral) pocket is preferred for several reasons. Crucially, it allows for better mammographic screening because the technologist can displace the implant posteriorly and image the native breast tissue anteriorly (Eklund displacement views). Additionally, the constant massaging action of the pectoralis muscle is thought to lower the incidence of severe capsular contracture.",
      "address_gaps": "Submuscular placement involves dissecting under the pectoralis major, making recovery significantly more painful (A). Every implant forms a capsule; the goal is preventing symptomatic *contracture* (B).",
      "review_learning_points": "Submuscular implants provide more soft-tissue coverage, reducing the risk of visible 'rippling' in thin patients.",
      "plan_for_improvement": "Submuscular = Better mammograms, lower capsular contracture, less rippling, but more painful recovery."
    },
    "guideline": "ASPS (American Society of Plastic Surgeons) notes submuscular placement is the standard of care for most reconstructive and aesthetic augmentations to preserve oncologic screening capabilities.",
    "takeaway": "Always place implants under the muscle if breast cancer screening is a priority.",
    "visualization": "On a lateral mammogram, a clear dark line of the pectoralis muscle separates the bright white implant from the native glandular breast tissue.",
    "_src_file": "breast_surgery.js"
  },
  {
    "id": 1107,
    "specialty": "Breast Surgery",
    "topic": "Surgical Oncology",
    "question": "Which tumor marker is useful for the management of patients with breast cancer?",
    "options": {
      "A": "",
      "B": "Inhibin.",
      "C": "CA 19-9.",
      "D": "CA 15-3.",
      "E": "CEA."
    },
    "answer": "D",
    "explanation": {
      "correct": "CA 15-3 is the primary serum tumor marker utilized in the management and surveillance of advanced breast cancer.",
      "A": "Incorrect; empty option.",
      "B": "Incorrect; Inhibin is a marker for granulosa cell tumors of the ovary.",
      "C": "Incorrect; CA 19-9 is utilized for pancreatic and biliary cancers.",
      "D": "Correct; CA 15-3 (along with CA 27.29) is used to monitor treatment response in metastatic breast cancer.",
      "E": "Incorrect; CEA is primarily a marker for colorectal cancer, though it can occasionally be elevated in advanced breast cancer."
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "D",
      "set_the_stage": "Tumor markers in breast cancer lack the sensitivity and specificity for early screening but play a defined role in the setting of advanced or metastatic disease.",
      "highlight_excellence": "CA 15-3 (Cancer Antigen 15-3) and CA 27.29 are the most widely used serum tumor markers for breast cancer. Because they are rarely elevated in early-stage disease, they are not used for initial diagnosis. However, in patients with known metastatic disease, trending CA 15-3 levels is highly useful for assessing the efficacy of systemic therapy and detecting disease progression before it becomes clinically or radiographically apparent.",
      "address_gaps": "Inhibin (B) is a highly specific marker for rare sex cord-stromal tumors of the ovary. CA 19-9 (C) is the gold standard for pancreatic adenocarcinoma. While CEA (E) can be tracked in breast cancer alongside CA 15-3, it is far more specific to the gastrointestinal tract (colorectal cancer).",
      "review_learning_points": "ASCO guidelines explicitly do not recommend using CA 15-3, CA 27.29, or CEA for screening, diagnosis, or routine surveillance of asymptomatic patients after curative-intent treatment. Their role is strictly limited to the metastatic setting.",
      "plan_for_improvement": "Match the marker to the organ: CA 15-3 = Breast. CA 125 = Ovary. CA 19-9 = Pancreas. CEA = Colon."
    },
    "guideline": "ASCO strictly advises against routine tumor marker testing for early-stage breast cancer follow-up to avoid unnecessary anxiety and unwarranted radiation from subsequent imaging.",
    "takeaway": "Never order a CA 15-3 to screen a patient for a breast lump; rely entirely on the triple assessment (clinical exam, imaging, core biopsy).",
    "visualization": "A clinical chart showing a line graph where a patient's CA 15-3 levels steadily trend downward over several months, perfectly correlating with the shrinking of hepatic metastases on their serial CT scans.",
    "_src_file": "breast_surgery.js"
  },
  {
    "id": 1111,
    "specialty": "Breast & Endocrine",
    "topic": "Comprhensive Surgery Revision conv.docx",
    "question": "When progressive enlargement of a multinodular goiter causes symptomatic tracheal compression, the preferred management in otherwise good-risk patients is:",
    "options": {
      "C": "Surgical resection of the abnormal thyroid.",
      "D": "Radioactive iodine treatment."
    },
    "answer": "C",
    "explanation": {
      "correct": "The question correctly identifies 'progressive enlargement' and 'symptomatic tracheal compression' as key indicators for intervention. It also specifies 'otherwise good-risk patients,' which is important as surgical risk stratification influences management decisions. The preferred answer, 'Surgical resection of the abnormal thyroid,' is the definitive treatment for symptomatic compressive goiters, offering both symptomatic relief and definitive histological diagnosis.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "C",
      "set_the_stage": "This question addresses a common clinical scenario: symptomatic tracheal compression due to a multinodular goiter. Understanding the optimal management for such a condition is crucial for surgical trainees and practicing clinicians.",
      "highlight_excellence": "The question correctly identifies 'progressive enlargement' and 'symptomatic tracheal compression' as key indicators for intervention. It also specifies 'otherwise good-risk patients,' which is important as surgical risk stratification influences management decisions. The preferred answer, 'Surgical resection of the abnormal thyroid,' is the definitive treatment for symptomatic compressive goiters, offering both symptomatic relief and definitive histological diagnosis.",
      "address_gaps": "While radioactive iodine (RAI) can be used to shrink goiters and potentially alleviate compression in some cases, it is generally not the *preferred* management for *symptomatic tracheal compression* in good-risk patients. RAI's efficacy in rapidly relieving significant compression is variable, and it carries risks such as radiation thyroiditis and potential hypothyroidism. Surgical resection provides immediate and predictable relief of compression and allows for definitive pathological examination, which is critical for ruling out malignancy, especially in a multinodular goiter where malignancy can be present in up to 15% of surgical specimens.",
      "review_guidelines": "When evaluating a patient with a multinodular goiter causing compressive symptoms, the initial steps involve a thorough history and physical examination, including assessment of airway compromise. Imaging such as ultrasound and CT scan of the neck are essential to delineate the extent of the goiter, its relationship to adjacent structures (especially the trachea and esophagus), and to identify any suspicious nodules. Thyroid function tests are also necessary. For symptomatic tracheal compression in a good-risk patient, surgical intervention (thyroidectomy) is the gold standard. In patients with poor surgical risk, less invasive options like RAI might be considered, but with the understanding of its limitations in providing rapid and definitive relief of compression.",
      "plan": "For future learning, focus on the indications for surgical intervention in thyroid disease. Differentiate between management of asymptomatic goiters, hyperfunctioning nodules, and compressive goiters. Understand the role of RAI in thyroid management, particularly its limitations in acute compressive symptoms. Review the surgical approach to thyroidectomy and potential complications."
    },
    "guideline": "When evaluating a patient with a multinodular goiter causing compressive symptoms, the initial steps involve a thorough history and physical examination, including assessment of airway compromise. Imaging such as ultrasound and CT scan of the neck are essential to delineate the extent of the goiter, its relationship to adjacent structures (especially the trachea and esophagus), and to identify any suspicious nodules. Thyroid function tests are also necessary. For symptomatic tracheal compression in a good-risk patient, surgical intervention (thyroidectomy) is the gold standard. In patients with poor surgical risk, less invasive options like RAI might be considered, but with the understanding of its limitations in providing rapid and definitive relief of compression.",
    "takeaway": "PLAN: For future learning, focus on the indications for surgical intervention in thyroid disease. Differentiate between management of asymptomatic goiters, hyperfunctioning nodules, and compressive goiters. Understand the role of RAI in thyroid management, particularly its limitations in acute compressive symptoms. Review the surgical approach to thyroidectomy and potential complications.",
    "_src_file": "general_surgery.js"
  },
  {
    "id": 1106,
    "specialty": "Breast & Endocrine",
    "topic": "Oncology MCQ.docx",
    "question": "The presence of which marker is a significant poor prognosis variable for patients with breast cancer:",
    "options": {
      "A": "",
      "B": "C-erb B-2.",
      "C": "AFP.",
      "D": "Human chorionic gonadotropin (hCG).",
      "E": "RB-1."
    },
    "answer": "B",
    "explanation": {
      "correct": "The correct answer – C-erb B-2 – reflects a core principle of breast cancer management. High HER2 expression correlates with increased proliferation, angiogenesis, and ultimately, aggressive tumor behavior and poorer survival outcomes. Recognizing this association is crucial for treatment decisions, particularly the use of HER2-targeted therapies like trastuzumab.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "B",
      "set_the_stage": "This question assesses understanding of immunohistochemical markers predictive of poor prognosis in breast cancer. C-erb B-2 (also known as HER2) overexpression is a well-established and significant negative prognostic factor.",
      "highlight_excellence": "The correct answer – C-erb B-2 – reflects a core principle of breast cancer management. High HER2 expression correlates with increased proliferation, angiogenesis, and ultimately, aggressive tumor behavior and poorer survival outcomes. Recognizing this association is crucial for treatment decisions, particularly the use of HER2-targeted therapies like trastuzumab.",
      "address_gaps": "Several other options are incorrect. AFP (alpha-fetoprotein) is associated with hepatocellular carcinoma. hCG (human chorionic gonadotropin) is a pregnancy hormone and not a breast cancer marker. RB-1 (also known as RET) is a receptor tyrosine kinase involved in thyroid development and function, not a breast cancer prognostic marker. The question’s phrasing could be slightly improved for clarity – explicitly stating ‘poor prognosis’ strengthens the focus.",
      "review_guidelines": "1. **HER2 Status:**  Regularly assess breast cancer tissue for HER2 expression using immunohistochemistry (IHC) and/or fluorescence in situ hybridization (FISH).  The American Cancer Society and NCCN guidelines recommend this as a standard practice.\n2. **Cut-off Values:** Understand the established cut-off values for HER2 expression (e.g., 3+ for IHC, 16+ for FISH).  These thresholds are critical for treatment decisions.\n3. **Treatment Implications:**  Recognize that HER2-positive breast cancers are treated differently than HER2-negative cancers, typically involving adjuvant chemotherapy and HER2-targeted therapies.\n4. **Biomarker Testing:**  Emphasize the importance of comprehensive biomarker testing in breast cancer management.",
      "plan": "Further review should focus on: HER2/neu biology, the methodology of IHC and FISH for HER2 detection, the clinical implications of HER2 status in breast cancer treatment algorithms (NCCN guidelines), and the role of HER2-targeted therapies (trastuzumab, pertuzumab). Consider a case-based discussion of HER2-positive breast cancer management."
    },
    "guideline": "1. **HER2 Status:**  Regularly assess breast cancer tissue for HER2 expression using immunohistochemistry (IHC) and/or fluorescence in situ hybridization (FISH).  The American Cancer Society and NCCN guidelines recommend this as a standard practice.\n2. **Cut-off Values:** Understand the established cut-off values for HER2 expression (e.g., 3+ for IHC, 16+ for FISH).  These thresholds are critical for treatment decisions.\n3. **Treatment Implications:**  Recognize that HER2-positive breast cancers are treated differently than HER2-negative cancers, typically involving adjuvant chemotherapy and HER2-targeted therapies.\n4. **Biomarker Testing:**  Emphasize the importance of comprehensive biomarker testing in breast cancer management.",
    "takeaway": "PLAN: Further review should focus on: HER2/neu biology, the methodology of IHC and FISH for HER2 detection, the clinical implications of HER2 status in breast cancer treatment algorithms (NCCN guidelines), and the role of HER2-targeted therapies (trastuzumab, pertuzumab). Consider a case-based discussion of HER2-positive breast cancer management.",
    "_src_file": "general_surgery.js"
  },
  {
    "id": 1116,
    "specialty": "Breast & Endocrine",
    "topic": "Comprhensive Surgery Revision conv.docx",
    "question": "Hyperparathyroidism can affect which of the following organs and body systems?",
    "options": {
      "B": "Kidneys.",
      "D": "Neuromuscular system.",
      "E": "Cardiovascular system."
    },
    "answer": "D",
    "explanation": {
      "correct": "The correct answer (D – Neuromuscular system) is the most clinically relevant. Hyperparathyroidism frequently manifests with neuromuscular symptoms like tetany, muscle weakness, and irritability due to elevated calcium levels disrupting neuronal excitability. Recognizing this is crucial for diagnosis and management.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "D",
      "set_the_stage": "This question assesses understanding of the systemic effects of hyperparathyroidism, a common endocrine disorder. It tests the ability to connect a primary pathology (overproduction of PTH) with its downstream consequences across multiple organ systems.",
      "highlight_excellence": "The correct answer (D – Neuromuscular system) is the most clinically relevant. Hyperparathyroidism frequently manifests with neuromuscular symptoms like tetany, muscle weakness, and irritability due to elevated calcium levels disrupting neuronal excitability. Recognizing this is crucial for diagnosis and management.",
      "address_gaps": "The incorrect answers (B and E) are related but less directly and frequently associated with hyperparathyroidism. While hyperparathyroidism *can* affect the kidneys (due to calcium deposition and renal damage) and the cardiovascular system (due to calcium-mediated vascular changes), the neuromuscular system is the *most* prominent and frequently presenting symptom. The question’s phrasing could be improved to emphasize the most common presentation.",
      "review_guidelines": "1. **Pathophysiology:** Reinforce the role of parathyroid hormone (PTH) and its effects on calcium and phosphate regulation. 2. **Clinical Presentation:** Review the classic symptoms of hyperparathyroidism: bone pain, fatigue, constipation, neuropsychiatric symptoms (irritability, confusion), and, critically, neuromuscular manifestations (tetany, muscle weakness). 3. **Systemic Effects:** Understand how hyperparathyroidism impacts the kidneys (nephrocalcinosis), cardiovascular system (calcification of vessels), and other tissues. 4. **Differential Diagnosis:** Differentiate hyperparathyroidism from other causes of hypercalcemia and neuromuscular symptoms.",
      "plan": "Implement a targeted review of hyperparathyroidism pathophysiology, clinical presentation, and systemic effects. Include case studies focusing on neuromuscular manifestations. Consider a brief review of calcium homeostasis and PTH regulation. Further, emphasize the importance of considering hyperparathyroidism in the differential diagnosis of patients presenting with unexplained muscle weakness or neurological symptoms."
    },
    "guideline": "1. **Pathophysiology:** Reinforce the role of parathyroid hormone (PTH) and its effects on calcium and phosphate regulation. 2. **Clinical Presentation:** Review the classic symptoms of hyperparathyroidism: bone pain, fatigue, constipation, neuropsychiatric symptoms (irritability, confusion), and, critically, neuromuscular manifestations (tetany, muscle weakness). 3. **Systemic Effects:** Understand how hyperparathyroidism impacts the kidneys (nephrocalcinosis), cardiovascular system (calcification of vessels), and other tissues. 4. **Differential Diagnosis:** Differentiate hyperparathyroidism from other causes of hypercalcemia and neuromuscular symptoms.",
    "takeaway": "PLAN: Implement a targeted review of hyperparathyroidism pathophysiology, clinical presentation, and systemic effects. Include case studies focusing on neuromuscular manifestations. Consider a brief review of calcium homeostasis and PTH regulation. Further, emphasize the importance of considering hyperparathyroidism in the differential diagnosis of patients presenting with unexplained muscle weakness or neurological symptoms.",
    "_src_file": "general_surgery.js"
  },
  {
    "id": 1108,
    "specialty": "Breast & Endocrine",
    "topic": "Comprhensive Surgery Revision conv.docx",
    "question": "Which of the following conditions is associated with increased risk of breast cancer?",
    "options": {
      "B": "Severe hyperplasia.",
      "C": "Atypical hyperplasia.",
      "D": "Papillomatosis."
    },
    "answer": "C",
    "explanation": {
      "correct": "The correct answer (C – Atypical Hyperplasia) reflects current understanding. Atypical hyperplasia, particularly when associated with lobular lesions, is a well-established and significant risk factor for future breast cancer development. The other options are less directly linked to increased cancer risk.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "C",
      "set_the_stage": "This question assesses understanding of breast pathology and risk stratification for breast cancer. Identifying atypical hyperplasia as a significant risk factor is crucial for proactive management and surveillance.",
      "highlight_excellence": "The correct answer (C – Atypical Hyperplasia) reflects current understanding. Atypical hyperplasia, particularly when associated with lobular lesions, is a well-established and significant risk factor for future breast cancer development. The other options are less directly linked to increased cancer risk.",
      "address_gaps": "Several aspects could be strengthened. The question could benefit from specifying the type of atypical hyperplasia (e.g., lobular, ductal). Furthermore, a deeper understanding of the relative risks associated with each condition would be beneficial. It’s important to remember that ‘severe hyperplasia’ is a less specific term and doesn’t carry the same level of predictive value as ‘atypical hyperplasia’ in this context.",
      "review_guidelines": "1. **Risk Stratification:** Reinforce the concept of risk stratification in breast pathology. 2. **Atypical Hyperplasia Definitions:** Review the specific definitions of atypical hyperplasia (lobular, ductal) and their associated risk levels. 3. **Biomarkers:** Discuss the role of biomarkers (e.g., Ki-67, BRCA1/2 mutations) in assessing risk alongside hyperplasia. 4. **Surveillance Protocols:** Review current surveillance protocols for women with atypical hyperplasia – typically involving annual MRI and clinical breast exams.",
      "plan": "Further education should focus on the nuances of breast lesion classification and the evolving understanding of risk factors for breast cancer. Implementing a structured review of relevant guidelines (e.g., those from the American College of Radiology and the American Cancer Society) is recommended. Consider a case-based discussion of patients presenting with atypical hyperplasia to solidify understanding."
    },
    "guideline": "1. **Risk Stratification:** Reinforce the concept of risk stratification in breast pathology. 2. **Atypical Hyperplasia Definitions:** Review the specific definitions of atypical hyperplasia (lobular, ductal) and their associated risk levels. 3. **Biomarkers:** Discuss the role of biomarkers (e.g., Ki-67, BRCA1/2 mutations) in assessing risk alongside hyperplasia. 4. **Surveillance Protocols:** Review current surveillance protocols for women with atypical hyperplasia – typically involving annual MRI and clinical breast exams.",
    "takeaway": "PLAN: Further education should focus on the nuances of breast lesion classification and the evolving understanding of risk factors for breast cancer. Implementing a structured review of relevant guidelines (e.g., those from the American College of Radiology and the American Cancer Society) is recommended. Consider a case-based discussion of patients presenting with atypical hyperplasia to solidify understanding.",
    "_src_file": "general_surgery.js"
  },
  {
    "id": 1105,
    "specialty": "Breast & Endocrine",
    "topic": "rush.docx",
    "question": "In patients with acute DVT, treatment with novel anticoagu lants compared with vitamin K antagonists such as Coumadin showed:",
    "options": {
      "C": "Higher incidence of significant bleeding complications",
      "D": "Lower incidence of significant bleeding complications",
      "E": "Lower incidence of all-cause mortality"
    },
    "answer": "D",
    "explanation": {
      "correct": "The correct answer (D) reflects the observed clinical reality. Clinical trials have consistently demonstrated a *lower* incidence of significant bleeding complications with NOACAs compared to VKAs in acute DVT. This is primarily due to NOACAs’ more predictable pharmacokinetics and reduced off-target effects.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "D",
      "set_the_stage": "This question assesses understanding of the clinical impact of novel oral anticoagulants (NOACAs) versus vitamin K antagonists (VKAs) in the acute setting of deep vein thrombosis (DVT). It’s a crucial distinction for clinicians managing this common condition.",
      "highlight_excellence": "The correct answer (D) reflects the observed clinical reality. Clinical trials have consistently demonstrated a *lower* incidence of significant bleeding complications with NOACAs compared to VKAs in acute DVT. This is primarily due to NOACAs’ more predictable pharmacokinetics and reduced off-target effects.",
      "address_gaps": "The incorrect options highlight common misconceptions. Option C is inaccurate; NOACAs generally have a better safety profile regarding bleeding. Option E is also incorrect; while NOACAs can reduce mortality in the long-term, the *acute* comparison doesn’t typically show a significant difference in all-cause mortality. There’s a tendency to overemphasize long-term mortality data when considering acute treatment choices.",
      "review_guidelines": "1. **Pharmacokinetics:** Understand the differences in pharmacokinetics between NOACAs (e.g., rivaroxaban, apixaban) and VKAs (e.g., warfarin). NOACAs have more predictable absorption, distribution, metabolism, and excretion, leading to more consistent anticoagulation. 2. **Bleeding Risk:** Recognize that bleeding risk is a primary concern in acute DVT. NOACAs generally have a lower risk of major bleeding. 3. **Monitoring:** While warfarin requires frequent INR monitoring, NOACAs do not require routine laboratory monitoring. 4. **Bridging:** The use of bridging anticoagulation with NOACAs is an evolving area, but current evidence suggests it’s not routinely necessary and may even be detrimental in some cases. 5. **Clinical Trials:** Be familiar with key clinical trial data comparing NOACAs and VKAs in acute DVT (e.g., RECORD, ADVANCE trials).",
      "plan": "Further education should focus on the underlying mechanisms of action of NOACAs, their pharmacokinetic profiles, and the comparative bleeding risk data. Clinicians need to be comfortable interpreting trial results and translating them into appropriate patient management decisions. A deeper dive into bridging anticoagulation strategies with NOACAs is also warranted."
    },
    "guideline": "1. **Pharmacokinetics:** Understand the differences in pharmacokinetics between NOACAs (e.g., rivaroxaban, apixaban) and VKAs (e.g., warfarin). NOACAs have more predictable absorption, distribution, metabolism, and excretion, leading to more consistent anticoagulation. 2. **Bleeding Risk:** Recognize that bleeding risk is a primary concern in acute DVT. NOACAs generally have a lower risk of major bleeding. 3. **Monitoring:** While warfarin requires frequent INR monitoring, NOACAs do not require routine laboratory monitoring. 4. **Bridging:** The use of bridging anticoagulation with NOACAs is an evolving area, but current evidence suggests it’s not routinely necessary and may even be detrimental in some cases. 5. **Clinical Trials:** Be familiar with key clinical trial data comparing NOACAs and VKAs in acute DVT (e.g., RECORD, ADVANCE trials).",
    "takeaway": "PLAN: Further education should focus on the underlying mechanisms of action of NOACAs, their pharmacokinetic profiles, and the comparative bleeding risk data. Clinicians need to be comfortable interpreting trial results and translating them into appropriate patient management decisions. A deeper dive into bridging anticoagulation strategies with NOACAs is also warranted.",
    "_src_file": "general_surgery.js"
  }
]
]);
