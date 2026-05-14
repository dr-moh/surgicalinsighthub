if (!window.QUESTIONS) window.QUESTIONS = [];
window.QUESTIONS.push(...[
  {
    "id": 70001,
    "specialty": "Surgical Oncology",
    "topic": "Melanoma Staging",
    "question": "Which histological factor is the MOST important determinant of the 'T' stage and prognosis in a patient with localized cutaneous melanoma?",
    "options": {
      "A": "Breslow Thickness (in millimeters)",
      "B": "Clark Level (anatomical depth)",
      "C": "Presence of ulceration",
      "D": "Mitotic rate"
    },
    "answer": "A",
    "explanation": {
      "correct": "Breslow Thickness, measured in millimeters from the granular layer to the deepest point of the tumor, is the primary factor in melanoma 'T' staging and is the strongest predictor of survival. Clark Level is no longer used in the AJCC 8th edition for staging.",
      "A": "Correct. Breslow thickness is the gold standard for staging.",
      "B": "Older system based on anatomical layers; now largely obsolete for staging.",
      "C": "Important secondary factor that can 'up-stage' a T1a to T1b, but thickness is the primary factor.",
      "D": "Important for prognosis but not the primary determinant of T stage."
    },
    "guideline": "AJCC Cancer Staging Manual 8th Edition",
    "takeaway": "Breslow Thickness is the primary determinant of melanoma staging.",
    "sharp_metadata": {
      "S": "Evaluation of a newly diagnosed pigmented lesion.",
      "H": "Excellence in melanoma management starts with a proper excisional biopsy (not shave!) to measure depth.",
      "A": "Address the obsolescence of Clark Levels in modern staging.",
      "R": "Sentinel lymph node biopsy (SLNB) is usually indicated for T1b (>0.8mm or <0.8mm with ulceration) and higher.",
      "P": "Always obtain a full-thickness biopsy to ensure accurate Breslow measurement."
    }
  },
  {
    "id": 70002,
    "specialty": "Critical Care",
    "topic": "SIRS and Sepsis",
    "question": "Which of the following is NOT a component of the qSOFA (quick Sequential Organ Failure Assessment) score used for rapid identification of patients at risk for poor outcomes from sepsis?",
    "options": {
      "A": "Respiratory rate \u2265 22/min",
      "B": "Altered mentation (GCS < 15)",
      "C": "Systolic blood pressure \u2264 100 mmHg",
      "D": "Heart rate > 100 bpm"
    },
    "answer": "D",
    "explanation": {
      "correct": "The qSOFA score uses three criteria: 1) Altered mental status (GCS <15), 2) High respiratory rate (\u226522/min), and 3) Low systolic blood pressure (\u2264100 mmHg). Heart rate is a component of the older SIRS criteria, but not qSOFA.",
      "A": "qSOFA component.",
      "B": "qSOFA component.",
      "C": "qSOFA component.",
      "D": "Correct. Tachycardia is not in the qSOFA score."
    },
    "guideline": "Sepsis-3 Definitions",
    "takeaway": "qSOFA: Mental status, RR \u2265 22, SBP \u2264 100.",
    "sharp_metadata": {
      "S": "Bedside evaluation of a patient with suspected infection.",
      "H": "A qSOFA score \u2265 2 identifies patients at higher risk of death or prolonged ICU stay.",
      "A": "Understand the shift from SIRS (inflammation) to qSOFA (organ dysfunction).",
      "R": "The Third International Consensus Definitions for Sepsis.",
      "P": "If qSOFA is \u2265 2, investigate for organ failure and initiate the Sepsis Bundle."
    }
  },
  {
    "id": 70003,
    "specialty": "Breast & Endocrine",
    "topic": "Breast Cancer Subtypes",
    "question": "A breast biopsy shows a high-grade invasive ductal carcinoma that is ER negative, PR negative, and HER2 negative (Triple Negative). Which of the following statements is true regarding this subtype?",
    "options": {
      "A": "It is associated with the best long-term prognosis",
      "B": "It is more common in BRCA1 mutation carriers",
      "C": "It is highly responsive to Tamoxifen",
      "D": "It has a lower rate of visceral metastases compared to Luminal A"
    },
    "answer": "B",
    "explanation": {
      "correct": "Triple Negative Breast Cancer (TNBC) is significantly more common in younger women and those with BRCA1 mutations. It is characterized by an aggressive clinical course, lack of targeted hormonal or HER2 therapies, and a higher rate of visceral (lung, brain) metastases.",
      "A": "It generally has a worse prognosis than hormone-positive subtypes.",
      "B": "Correct. Strong association with BRCA1.",
      "C": "Tamoxifen requires ER positivity to be effective.",
      "D": "It has a higher rate of visceral metastases."
    },
    "guideline": "NCCN Guidelines for Breast Cancer",
    "takeaway": "TNBC: Aggressive, common in BRCA1, lacks targeted hormonal therapy.",
    "sharp_metadata": {
      "S": "Newly diagnosed high-grade breast cancer in a 35-year-old.",
      "H": "Chemotherapy is the mainstay of systemic treatment for TNBC due to lack of receptors.",
      "A": "Address the 'Triple Negative' name as the absence of three targets (ER, PR, HER2).",
      "R": "Modern oncology focuses on 'Molecular Subtyping' (Luminal A, Luminal B, HER2-enriched, Basal-like).",
      "P": "Always refer patients with TNBC diagnosed at a young age for genetic counseling."
    }
  },
  {
    "id": 70004,
    "specialty": "General Surgery",
    "topic": "Small Bowel Obstruction",
    "question": "A 60-year-old male with a history of multiple laparotomies presents with small bowel obstruction. CT shows a high-grade obstruction but no signs of ischemia. After 24 hours of Gastrografin challenge, the contrast has not reached the colon. What is the next step?",
    "options": {
      "A": "Continue conservative management for another 48 hours",
      "B": "Surgical exploration (Laparotomy)",
      "C": "Repeat the Gastrografin dose",
      "D": "Discharge with outpatient follow-up"
    },
    "answer": "B",
    "explanation": {
      "correct": "The Gastrografin challenge is a diagnostic and therapeutic tool for adhesive SBO. If contrast fails to reach the colon on a 24-hour X-ray, the likelihood of resolving with conservative management is low (~10-20%), and surgical exploration is indicated.",
      "A": "Delayed surgery increases the risk of bowel strangulation and resection.",
      "B": "Correct. Failed Gastrografin challenge is an indication for surgery.",
      "C": "Repeating the dose is not standard protocol if the first failed to progress.",
      "D": "The patient has a high-grade obstruction; discharge is dangerous."
    },
    "guideline": "Bologna Guidelines for SBO Management",
    "takeaway": "Failed Gastrografin challenge (no contrast in colon at 24h) = Surgery.",
    "sharp_metadata": {
      "S": "Adhesive Small Bowel Obstruction (SBO).",
      "H": "Excellence in SBO management uses Gastrografin to predict the need for surgery.",
      "A": "Identify 'Signs of Strangulation' (tachycardia, fever, leukocytosis, localized tenderness) as immediate indications for surgery, bypassing the challenge.",
      "R": "Gastrografin has an osmotic effect that may also help resolve partial obstructions.",
      "P": "24 hours is the standard 'cut-off' for the contrast challenge."
    }
  },
  {
    "id": 70005,
    "specialty": "Surgical Oncology",
    "topic": "Colon Cancer Margins",
    "question": "For a curative-intent resection of a colon cancer, what is the minimum recommended distal and proximal margin of healthy bowel?",
    "options": {
      "A": "1 cm",
      "B": "2 cm",
      "C": "5 cm",
      "D": "10 cm"
    },
    "answer": "C",
    "explanation": {
      "correct": "For colon cancer, a 5 cm margin of healthy bowel on either side of the tumor is standard to ensure adequate lymphadenectomy and clear longitudinal margins. For rectal cancer, the distal margin can be as small as 1-2 cm.",
      "A": "Too small for colon (adequate for some skin/rectal cases).",
      "B": "Accepted distal margin for rectal cancer, but not colon.",
      "C": "Correct. 5 cm is the oncologic standard for colon resection.",
      "D": "Desirable but not mandatory; 5 cm is sufficient."
    },
    "guideline": "NCCN Guidelines for Colon Cancer",
    "takeaway": "Colon Cancer Margins: 5 cm proximal and distal.",
    "sharp_metadata": {
      "S": "Surgical planning for a sigmoid colectomy.",
      "H": "The extent of resection is determined by the blood supply (vessel ligation at the origin) to ensure an adequate lymph node harvest.",
      "A": "Differentiate colon margins (5cm) from rectal margins (1-2cm).",
      "R": "Oncologic safety requires at least 12 lymph nodes for accurate staging.",
      "P": "A 'high tie' of the mesenteric vessels ensures the best lymph node yield."
    }
  },
  {
    "id": 70006,
    "specialty": "Trauma",
    "topic": "Splenic Injury Management",
    "question": "A 25-year-old stable patient has a Grade III splenic laceration on CT scan with a small 'blush' (contrast extravasation). What is the preferred management?",
    "options": {
      "A": "Immediate Splenectomy",
      "B": "Angioembolization",
      "C": "Observation with bed rest",
      "D": "Total Splenectomy and Autotransplantation"
    },
    "answer": "B",
    "explanation": {
      "correct": "In a hemodynamically stable patient with a splenic injury and a 'blush' on CT, angioembolization is the preferred management. This allows for splenic preservation while stopping active arterial bleeding.",
      "A": "Splenectomy is reserved for hemodynamically unstable patients or those who fail non-operative management.",
      "B": "Correct. Stable + Blush = Angio.",
      "C": "Observation alone has a higher failure rate if an active blush is present.",
      "D": "Autotransplantation is rare and not a primary management for acute injury."
    },
    "guideline": "WSES / AAST Guidelines for Splenic Trauma",
    "takeaway": "Stable Splenic Trauma + CT Blush = Angioembolization.",
    "sharp_metadata": {
      "S": "Blunt abdominal trauma in a stable patient.",
      "H": "The goal is splenic preservation to avoid OPSI (Overwhelming Post-Splenectomy Infection).",
      "A": "Instability is the absolute contraindication to non-operative management.",
      "R": "AAST Splenic Injury Scale (I-V).",
      "P": "If splenectomy is performed, vaccinate against encapsulated organisms (Strep pneumo, H. flu, Meningococcus) after 14 days."
    }
  },
  {
    "id": 70007,
    "specialty": "Critical Care",
    "topic": "Electrolytes",
    "question": "Which EKG change is most characteristic of severe hyperkalemia (>7.0 mEq/L)?",
    "options": {
      "A": "U-waves",
      "B": "Shortened QT interval",
      "C": "Peaked T-waves",
      "D": "ST-segment depression"
    },
    "answer": "C",
    "explanation": {
      "correct": "The progression of EKG changes in hyperkalemia is: 1) Peaked T-waves (narrow/tented), 2) P-wave flattening/loss, 3) QRS widening (sine wave), and 4) Ventricular fibrillation/Asystole.",
      "A": "Characteristic of hypokalemia.",
      "B": "Characteristic of hypercalcemia.",
      "C": "Correct. Earliest and most common sign of hyperkalemia.",
      "D": "Nonspecific; often seen in ischemia or dig-effect."
    },
    "guideline": "ACLS Management of Electrolyte Emergencies",
    "takeaway": "Hyperkalemia EKG: Peaked T-waves \u2192 Loss of P \u2192 Wide QRS \u2192 Sine Wave.",
    "sharp_metadata": {
      "S": "Evaluation of a renal failure patient with muscle weakness.",
      "H": "Rapid EKG check is faster than waiting for lab results in a hyperkalemic crisis.",
      "A": "Calcium gluconate/chloride 'stabilizes the membrane' but doesn't lower K+.",
      "R": "Immediate treatment: Calcium, then Insulin/Dextrose, then Bicarbonate/Albuterol.",
      "P": "If EKG changes are present, treat with IV Calcium immediately."
    }
  },
  {
    "id": 70008,
    "specialty": "General Surgery",
    "topic": "Surgical Site Infection",
    "question": "According to the CDC, a 'Deep Incisional' SSI involves which anatomical layer?",
    "options": {
      "A": "Skin and subcutaneous tissue only",
      "B": "Fascia and muscle layers",
      "C": "Organ space or body cavity",
      "D": "Epidermis only"
    },
    "answer": "B",
    "explanation": {
      "correct": "CDC classification of SSI: 1) Superficial (Skin/Subcutaneous), 2) Deep (Fascia/Muscle), 3) Organ/Space (e.g., intra-abdominal abscess).",
      "A": "Superficial Incisional SSI.",
      "B": "Correct. Deep Incisional SSI.",
      "C": "Organ/Space SSI.",
      "D": "Not a standard category."
    },
    "guideline": "CDC/NHSN Surveillance Definitions",
    "takeaway": "SSI Categories: Superficial (Skin), Deep (Fascia/Muscle), Organ/Space.",
    "sharp_metadata": {
      "S": "Surveillance and reporting of post-operative complications.",
      "H": "Proper classification ensures accurate hospital quality reporting.",
      "A": "A 'Deep' SSI does NOT enter the peritoneal cavity; that would be 'Organ/Space'.",
      "R": "Standardized criteria for surgical quality improvement (NSQIP).",
      "P": "Most SSIs present between POD 5 and 30."
    }
  },
  {
    "id": 70009,
    "specialty": "Vascular",
    "topic": "Aortic Dissection",
    "question": "Which of the following is an absolute indication for emergency surgery in a patient with a Stanford Type B aortic dissection?",
    "options": {
      "A": "Simple back pain well-controlled with narcotics",
      "B": "Uncontrolled hypertension",
      "C": "Malperfusion syndrome (e.g., renal failure, limb ischemia)",
      "D": "Aneurysmal dilation of 3.5 cm"
    },
    "answer": "C",
    "explanation": {
      "correct": "Stanford Type B dissections (descending aorta) are typically managed medically (BP/HR control). Surgery (usually TEVAR) is indicated for complications: 1) Malperfusion, 2) Rupture/Impending rupture, 3) Rapid expansion, or 4) Uncontrolled pain/BP.",
      "A": "Controlled pain is not an indication for surgery.",
      "B": "Medical management is the first-line treatment for hypertension.",
      "C": "Correct. Malperfusion indicates an immediate threat to life or limb.",
      "D": "3.5 cm is not yet an indication for surgery in Type B."
    },
    "guideline": "SVS/STS Guidelines for Aortic Dissection",
    "takeaway": "Type B Dissection: Medical management unless 'Complicated' (Malperfusion/Rupture).",
    "sharp_metadata": {
      "S": "Management of acute aortic syndromes.",
      "H": "Type A (Ascending) = Always Surgery; Type B (Descending) = Usually Medicine.",
      "A": "Address the 'anti-impulse' therapy goal: Heart rate <60 and SBP <120.",
      "R": "Esmolol is often the first-line agent for rapid impulse control.",
      "P": "Maintain a high index of suspicion for 'silent' malperfusion (check creatinine and lactate)."
    }
  },
  {
    "id": 70010,
    "specialty": "Colorectal",
    "topic": "Anal Fissure",
    "question": "A patient has a chronic anal fissure that has failed medical management with fiber and sitz baths. What is the gold-standard surgical treatment?",
    "options": {
      "A": "Lateral Internal Sphincterotomy (LIS)",
      "B": "Fissurectomy",
      "C": "Anal Dilatation (Lord's procedure)",
      "D": "Advancement Flap"
    },
    "answer": "A",
    "explanation": {
      "correct": "Lateral Internal Sphincterotomy (LIS) is the gold standard, with success rates >90%. It involves dividing a small portion of the internal sphincter to reduce resting anal pressure and allow the fissure to heal.",
      "A": "Correct. Gold standard for refractory fissures.",
      "B": "Less effective and rarely done alone.",
      "C": "High risk of fecal incontinence; largely abandoned.",
      "D": "Reserved for special cases (e.g., Crohn's or low sphincter reserve)."
    },
    "guideline": "ASCRS Practice Parameters for Anal Fissure",
    "takeaway": "Chronic Anal Fissure: Gold Standard = Lateral Internal Sphincterotomy (LIS).",
    "sharp_metadata": {
      "S": "Management of 'the most painful condition in surgery'.",
      "H": "Excellence in surgery: Precise LIS avoids the major complication of fecal incontinence.",
      "A": "Identify the 'Sentinel Pile' (skin tag) and hypertrophied anal papilla as signs of chronicity.",
      "R": "Topical nitroglycerin or diltiazem is the first-line medical therapy ('Chemical Sphincterotomy').",
      "P": "Most fissures are located in the posterior midline (90%)."
    }
  }
])
