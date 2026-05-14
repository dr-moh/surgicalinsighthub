if (!window.QUESTIONS) window.QUESTIONS = [];
window.QUESTIONS.push(...[
  {
    "id": 100001,
    "specialty": "Cardiothoracic",
    "topic": "Coronary Artery Bypass (CABG)",
    "question": "Which conduit has the best long-term patency rates (up to 90% at 10 years) for coronary artery bypass grafting?",
    "options": {
      "A": "Great Saphenous Vein",
      "B": "Left Internal Mammary Artery (LIMA)",
      "C": "Radial Artery",
      "D": "Right Gastroepiploic Artery"
    },
    "answer": "B",
    "explanation": {
      "correct": "The Left Internal Mammary Artery (LIMA) grafted to the Left Anterior Descending (LAD) artery is the gold standard for CABG, with 10-year patency rates exceeding 90%. Saphenous vein grafts (SVG) have a much higher rate of occlusion (up to 50% at 10 years).",
      "A": "Commonly used but has lower long-term patency (~50% at 10 years).",
      "B": "Correct. LIMA-to-LAD is the most durable conduit.",
      "C": "Better than vein grafts but generally less durable than LIMA.",
      "D": "Used in special cases, but not the gold standard."
    },
    "guideline": "AHA/ACC Guidelines for Coronary Artery Revascularization",
    "takeaway": "LIMA-to-LAD is the most critical and durable conduit in CABG surgery.",
    "sharp_metadata": {
      "S": "Planning revascularization for triple-vessel coronary disease.",
      "H": "Excellence in cardiothoracic surgery: Prioritizing the LIMA for the LAD significantly improves long-term survival.",
      "A": "Address the fact that vein grafts are prone to 'intimal hyperplasia' and atherosclerosis.",
      "R": "Standard cardiac surgical evidence.",
      "P": "Always preserve the LIMA during thoracic trauma or surgery if CABG might be needed in the future."
    }
  },
  {
    "id": 100002,
    "specialty": "Cardiothoracic",
    "topic": "Cardiac Tamponade",
    "question": "The 'Beck's Triad' of cardiac tamponade includes hypotension, muffled heart sounds, and which of the following?",
    "options": {
      "A": "Distended neck veins (JVD)",
      "B": "Tachycardia",
      "C": "Pulsus alternans",
      "D": "Tracheal deviation"
    },
    "answer": "A",
    "explanation": {
      "correct": "Beck's Triad for cardiac tamponade consists of: 1) Hypotension, 2) Muffled heart sounds, and 3) Distended neck veins (JVD). These reflect the impaired filling and reduced cardiac output caused by fluid in the pericardial space.",
      "A": "Correct. JVD reflects high central venous pressure.",
      "B": "Often present but not part of the classic 'Beck's Triad'.",
      "C": "Characteristic of severe left ventricular failure; Pulsus paradoxus (not alternans) is seen in tamponade.",
      "D": "Characteristic of tension pneumothorax."
    },
    "guideline": "Management of Pericardial Disease",
    "takeaway": "Beck's Triad: Hypotension + JVD + Muffled Heart Sounds = Tamponade.",
    "sharp_metadata": {
      "S": "Evaluation of a patient post-cardiac surgery with dropping BP and rising CVP.",
      "H": "Rapid bedside ultrasound (FAST scan) is the diagnostic tool of choice for tamponade.",
      "A": "Differentiate between Pulsus Paradoxus (drop in SBP >10mmHg on inspiration) and Beck's Triad.",
      "R": "Classic surgical emergency.",
      "P": "Treatment is immediate pericardiocentesis or a 'pericardial window'."
    }
  },
  {
    "id": 100003,
    "specialty": "Endocrine",
    "topic": "MEN Syndromes",
    "question": "A patient is found to have Medullary Thyroid Cancer, Pheochromocytoma, and Primary Hyperparathyroidism. This combination is most characteristic of which MEN syndrome?",
    "options": {
      "A": "MEN 1 (Wermer Syndrome)",
      "B": "MEN 2A (Sipple Syndrome)",
      "C": "MEN 2B",
      "D": "MEN 4"
    },
    "answer": "B",
    "explanation": {
      "correct": "MEN 2A (Sipple Syndrome) consists of: 1) Medullary Thyroid Cancer (MTC), 2) Pheochromocytoma, and 3) Parathyroid hyperplasia (Hyperparathyroidism). MEN 2B also includes MTC and Pheo, but adds mucosal neuromas and marfanoid habitus (no parathyroid involvement).",
      "A": "MEN 1: Pituitary, Parathyroid, Pancreas (3 Ps).",
      "B": "Correct. MEN 2A: Medullary Thyroid, Pheo, Parathyroid.",
      "C": "MEN 2B: Medullary Thyroid, Pheo, Neuromas/Marfanoid.",
      "D": "Rare; similar to MEN 1 but involves CDKN1B mutation."
    },
    "guideline": "Surgical Management of MEN Syndromes",
    "takeaway": "MEN 2A = Medullary Thyroid Cancer + Pheochromocytoma + Parathyroid Hyperplasia.",
    "sharp_metadata": {
      "S": "Genetic screening of family members of a patient with MTC.",
      "H": "Excellence in endocrine surgery: Always screen for and treat Pheochromocytoma BEFORE the thyroid cancer to prevent a crisis.",
      "A": "Identify the 'RET Proto-oncogene' as the driver for MEN 2.",
      "R": "Standard endocrine board fact.",
      "P": "If you see MTC, check for a RET mutation and screen for Pheochromocytoma."
    }
  },
  {
    "id": 100004,
    "specialty": "Transplant",
    "topic": "Organ Preservation",
    "question": "What is the typical 'cold ischemic time' limit for a heart transplant, beyond which the risk of primary graft dysfunction increases significantly?",
    "options": {
      "A": "4-6 hours",
      "B": "12-18 hours",
      "C": "24-36 hours",
      "D": "48-72 hours"
    },
    "answer": "A",
    "explanation": {
      "correct": "The heart is the most sensitive organ to ischemia. Its safe cold ischemic time is typically only 4-6 hours. Other organs have longer limits: Lung (4-8h), Liver (12h), Kidney (24-48h).",
      "A": "Correct. Heart preservation is time-critical.",
      "B": "Acceptable for liver but too long for heart.",
      "C": "Acceptable for kidney.",
      "D": "Well beyond the limits for any organ."
    },
    "guideline": "ISHLT Guidelines for Donor Management",
    "takeaway": "Heart Ischemic Time Limit = 4-6 hours.",
    "sharp_metadata": {
      "S": "Coordination of organ procurement for a cardiac recipient.",
      "H": "Logistics are critical: the procurement team and recipient team must be synchronized to minimize time.",
      "A": "Understand the use of 'Static Cold Storage' (University of Wisconsin solution).",
      "R": "Transplant surgery principles.",
      "P": "Cold ischemic time starts when the donor aorta is cross-clamped and ends when the organ is reperfused in the recipient."
    }
  },
  {
    "id": 100005,
    "specialty": "Endocrine",
    "topic": "Cushing's Syndrome",
    "question": "Which test is the gold standard for distinguishing between a Pituitary source (Cushing's Disease) and an Adrenal source of hypercortisolism?",
    "options": {
      "A": "24-hour urinary free cortisol",
      "B": "Low-dose dexamethasone suppression test",
      "C": "ACTH Level",
      "D": "Midnight salivary cortisol"
    },
    "answer": "C",
    "explanation": {
      "correct": "Once hypercortisolism is confirmed, the ACTH level distinguishes the source. Low ACTH (<5 pg/mL) indicates an ACTH-independent source (usually an Adrenal tumor). High ACTH (>20 pg/mL) indicates an ACTH-dependent source (either Pituitary or Ectopic).",
      "A": "Confirms hypercortisolism but doesn't find the source.",
      "B": "Initial screening test to confirm hypercortisolism.",
      "C": "Correct. ACTH level is the 'branch point' in the algorithm.",
      "D": "Screening test for hypercortisolism."
    },
    "guideline": "Endocrine Society Guidelines for Cushing’s Syndrome",
    "takeaway": "ACTH-Independent (Low ACTH) = Adrenal source; ACTH-Dependent (High ACTH) = Pituitary/Ectopic.",
    "sharp_metadata": {
      "S": "Workup of a patient with central obesity, moon facies, and purple striae.",
      "H": "Excellence in surgery: Localizing the lesion correctly prevents unnecessary adrenalectomies or brain surgeries.",
      "A": "Identify 'Ectopic ACTH' (e.g., Small Cell Lung Cancer) as a possible cause of high ACTH.",
      "R": "High-dose dexamethasone suppression can further distinguish Pituitary from Ectopic sources.",
      "P": "Always confirm hypercortisolism with two different tests before checking ACTH."
    }
  },
  {
    "id": 100006,
    "specialty": "Transplant",
    "topic": "Hyperacute Rejection",
    "question": "Hyperacute rejection of a kidney transplant occurs within minutes to hours and is caused by which mechanism?",
    "options": {
      "A": "T-cell mediated cytotoxicity",
      "B": "Pre-formed donor-specific antibodies (anti-HLA or ABO)",
      "C": "Chronic ischemia-reperfusion injury",
      "D": "Calineurin inhibitor toxicity"
    },
    "answer": "B",
    "explanation": {
      "correct": "Hyperacute rejection is caused by pre-formed antibodies in the recipient that react against donor HLA or ABO antigens. This leads to immediate complement activation, thrombosis, and graft necrosis on the operating table.",
      "A": "Mechanism for Acute Cellular Rejection (days to weeks).",
      "B": "Correct. Pre-formed antibodies cause hyperacute rejection.",
      "C": "Nonspecific injury, not an immunological rejection.",
      "D": "Drug side effect (e.g., Cyclosporine/Tacrolimus)."
    },
    "guideline": "Principles of Transplant Immunology",
    "takeaway": "Hyperacute Rejection = Pre-formed Antibodies; happens within minutes.",
    "sharp_metadata": {
      "S": "Intraoperative observation: the kidney turns blue/black immediately after reperfusion.",
      "H": "Prevention: Mandatory cross-matching and ABO compatibility checking before transplantation.",
      "A": "Understand that hyperacute rejection cannot be treated; the organ must be removed.",
      "R": "Standard immunology board fact.",
      "P": "Modern 'Virtual Cross-matching' helps avoid this catastrophe."
    }
  },
  {
    "id": 100007,
    "specialty": "Cardiothoracic",
    "topic": "Lung Cancer Staging",
    "question": "Which of the following is considered an absolute contraindication to curative-intent surgical resection of a Non-Small Cell Lung Cancer (NSCLC)?",
    "options": {
      "A": "Tumor size of 5 cm (T2b)",
      "B": "Ipsilateral hilar lymph node involvement (N1)",
      "C": "Malignant pleural effusion",
      "D": "Involvement of the visceral pleura"
    },
    "answer": "C",
    "explanation": {
      "correct": "A malignant pleural effusion (positive for cancer cells) designates the cancer as Stage IV (M1a), which is generally considered unresectable for cure. N1 and T2b tumors are still potentially resectable.",
      "A": "Resectable (Stage IIA).",
      "B": "Resectable (Stage IIB).",
      "C": "Correct. Malignant effusion = Metastatic disease (Stage IV).",
      "D": "Increases T stage but not a contraindication to surgery."
    },
    "guideline": "IASLC Lung Cancer Staging 8th Edition",
    "takeaway": "Malignant Pleural Effusion = Stage IV = Unresectable for cure.",
    "sharp_metadata": {
      "S": "Surgical workup for a suspicious lung mass.",
      "H": "Excellence in oncology: Thorough staging (CT, PET, Brain MRI) is mandatory before planning a thoracotomy.",
      "A": "Differentiate between N1 (Hilar) and N2 (Mediastinal) nodes; N2 often requires induction chemo before surgery.",
      "R": "IASLC staging criteria.",
      "P": "Thoracentesis of any pleural effusion is a vital staging step."
    }
  },
  {
    "id": 100008,
    "specialty": "Cardiothoracic",
    "topic": "Aortic Valve",
    "question": "What is the classic 'triad' of symptoms in a patient with severe aortic stenosis?",
    "options": {
      "A": "Chest pain (Angina), Syncope, and Heart Failure (Dyspnea)",
      "B": "Fever, chills, and new heart murmur",
      "C": "Hemoptysis, orthopnea, and malar flush",
      "D": "Hypotension, distended neck veins, and distant heart sounds"
    },
    "answer": "A",
    "explanation": {
      "correct": "The classic triad of aortic stenosis is Angina, Syncope, and Dyspnea (due to heart failure). Survival drops significantly once these symptoms appear (5, 3, and 2 years respectively if untreated).",
      "A": "Correct. Angina, Syncope, Dyspnea.",
      "B": "Triad of Infective Endocarditis.",
      "C": "Classic presentation of Mitral Stenosis.",
      "D": "Beck's Triad (Tamponade)."
    },
    "guideline": "AHA/ACC Guidelines for Valvular Heart Disease",
    "takeaway": "Aortic Stenosis Triad: Angina (5yr), Syncope (3yr), Dyspnea (2yr survival).",
    "sharp_metadata": {
      "S": "Management of a 75-year-old male with a systolic murmur and recent syncope.",
      "H": "Symptomatic severe aortic stenosis is a class I indication for valve replacement.",
      "A": "Identify the 'crescendo-decrescendo' systolic murmur radiating to the carotids.",
      "R": "Prognostic significance of symptoms in valvular disease.",
      "P": "TAVI (Transcatheter Aortic Valve Implantation) is a robust alternative for high-risk surgical patients."
    }
  },
  {
    "id": 100009,
    "specialty": "General Surgery",
    "topic": "Surgical Risk",
    "question": "Which of the following is the strongest predictor of perioperative cardiac risk in a non-cardiac surgical patient?",
    "options": {
      "A": "Age > 70 years",
      "B": "Controlled hypertension",
      "C": "Recent Myocardial Infarction (< 6 months)",
      "D": "Smoking history"
    },
    "answer": "C",
    "explanation": {
      "correct": "A recent Myocardial Infarction (especially within the last 30 days to 6 months) is one of the strongest clinical predictors of perioperative cardiac complications (re-infarction or death).",
      "A": "Age is a factor but not as strong as recent ischemia.",
      "B": "Controlled hypertension is a minor risk factor.",
      "C": "Correct. Previous MI is a major risk factor.",
      "D": "Risk factor for pulmonary complications, less so for acute cardiac events."
    },
    "guideline": "Revised Cardiac Risk Index (RCRI) / Lee Criteria",
    "takeaway": "History of ischemic heart disease (recent MI) is a major driver of surgical risk.",
    "sharp_metadata": {
      "S": "Pre-operative evaluation of a patient for elective cholecystectomy.",
      "H": "Excellence in perioperative care: Using validated scores (like RCRI or NSQIP) to quantify risk.",
      "A": "Understand that elective surgery should be delayed for at least 60 days after an MI if possible.",
      "R": "AHA/ACC perioperative guidelines.",
      "P": "Always optimize cardiac medications (Beta-blockers, Statins) before surgery."
    }
  },
  {
    "id": 100010,
    "specialty": "Endocrine",
    "topic": "Adrenal Mass",
    "question": "A 55-year-old male is found to have an 'incidentaloma' (4 cm adrenal mass) on CT scan during a workup for abdominal pain. What is the next mandatory step in management?",
    "options": {
      "A": "Immediate surgical resection (Adrenalectomy)",
      "B": "FNA (Fine Needle Aspiration) biopsy of the mass",
      "C": "Biochemical screening to rule out functional status",
      "D": "Observation with repeat CT in 2 years"
    },
    "answer": "C",
    "explanation": {
      "correct": "Every adrenal incidentaloma >1 cm must be evaluated for: 1) Functional status (screening for Pheochromocytoma, Cushing's, and if hypertensive, Conn's), and 2) Malignant potential (size and CT characteristics). Surgical resection is only done for functional tumors or those >4 cm.",
      "A": "Too early; must check function first.",
      "B": "FNA is rarely indicated and is DANGEROUS if the tumor is a Pheochromocytoma.",
      "C": "Correct. Rule out 'function' (hormone secretion) first.",
      "D": "Wait-and-see is only for non-functional tumors <4 cm."
    },
    "guideline": "AACE/AAES Guidelines for Adrenal Incidentaloma",
    "takeaway": "Adrenal Incidentaloma: Screen for Function (Hormones) and Size (>4 cm).",
    "sharp_metadata": {
      "S": "Management of incidentally discovered adrenal masses.",
      "H": "Excellence in surgery: Never biopsy an adrenal mass until you have ruled out Pheochromocytoma.",
      "A": "Address the risk of hypertensive crisis if a Pheo is biopsied.",
      "R": "Metanephrines, 24h cortisol, and Plasma Renin/Aldosterone are the standard screening tests.",
      "P": "If the tumor is non-functional and <4 cm, serial imaging is appropriate."
    }
  }
])
