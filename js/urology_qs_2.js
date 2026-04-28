import json
import re

# This script will hold the high-yield generated content for the balanced bank
# Specialty: Urology (100 total)
# 1-5 already written to urology_qs.js

UROLOGY_6_TO_20 = [
  {
    "id": 10006,
    "specialty": "Urology",
    "topic": "Prostate Cancer",
    "question": "An 80-year-old man with a PSA of 9 ng/ml and Gleason score 3+4=7. Best management?",
    "options": {
      "A": "Watchful waiting",
      "B": "Radical prostatectomy",
      "C": "Radiotherapy",
      "D": "Hormonal therapy"
    },
    "answer": "A",
    "explanation": {
      "correct": "For an 80-year-old with a life expectancy <10 years and intermediate-risk disease, watchful waiting is the most appropriate management.",
      "A": "Correct. Considers age and life expectancy.",
      "B": "Overtreatment in an 80-year-old.",
      "C": "Typically reserved for younger patients or those with longer life expectancy.",
      "D": "Reserved for metastatic or symptomatic disease.",
      "E": ""
    },
    "guideline": "EAU Guidelines 2026",
    "takeaway": "Treatment of prostate cancer must be tailored to life expectancy, not just Gleason score."
  },
  {
    "id": 10007,
    "specialty": "Urology",
    "topic": "Hormonal Therapy",
    "question": "Which is true about hormonal treatment for Prostate Cancer?",
    "options": {
      "A": "Survival is improved if started for localized disease",
      "B": "PSA can be used to detect biochemical relapse",
      "C": "Anti-androgens are superior to LHRH agonists",
      "D": "Orchidectomy is no longer used"
    },
    "answer": "B",
    "explanation": {
      "correct": "PSA is the most sensitive marker for detecting biochemical recurrence after primary treatment or during hormonal therapy.",
      "A": "Incorrect. Localized disease is treated with surgery/radiation.",
      "B": "Correct. PSA monitoring is standard.",
      "C": "Incorrect. LHRH agonists/antagonists are standard; anti-androgens are often used as adjuncts.",
      "D": "Incorrect. Surgical castration is still a valid, cost-effective option.",
      "E": ""
    },
    "guideline": "AUA Guidelines",
    "takeaway": "PSA is the gold standard for monitoring prostate cancer progression."
  },
  {
    "id": 10008,
    "specialty": "Urology",
    "topic": "Anatomy",
    "question": "Gerota's fascia contains which of the following structures?",
    "options": {
      "A": "The kidneys",
      "B": "The adrenals",
      "C": "Perirenal fat",
      "D": "All of the above"
    },
    "answer": "D",
    "explanation": {
      "correct": "Gerota's fascia (perirenal fascia) encloses the kidneys, adrenal glands, and perirenal fat.",
      "A": "True.",
      "B": "True.",
      "C": "True.",
      "D": "Correct. All these structures are within the fascia.",
      "E": ""
    },
    "guideline": "Gray's Anatomy",
    "takeaway": "Understanding Gerota's fascia is critical for radical nephrectomy planes."
  },
  {
    "id": 10009,
    "specialty": "Urology",
    "topic": "Fournier's Gangrene",
    "question": "In Fournier's gangrene debridement, which layers must be removed?",
    "options": {
      "A": "Scrotal skin only",
      "B": "Scrotal skin and Dartos layer",
      "C": "Scrotal skin, Dartos, and all necrotic fascia",
      "D": "The testis itself"
    },
    "answer": "C",
    "explanation": {
      "correct": "Aggressive debridement of all necrotic skin and fascia (Colles', Dartos, Scarpa's) is required. The testis is usually spared due to separate blood supply (testicular artery).",
      "A": "Inadequate.",
      "B": "Inadequate.",
      "C": "Correct. Debride until bleeding, healthy tissue is reached.",
      "D": "Incorrect. Testis is usually healthy.",
      "E": ""
    },
    "guideline": "Surgical Infections Guidelines",
    "takeaway": "Fournier's is a surgical emergency; aggressive debridement saves lives."
  },
  {
    "id": 10010,
    "specialty": "Urology",
    "topic": "Testicular Torsion",
    "question": "Management of a 6-year-old with suspected testicular torsion?",
    "options": {
      "A": "Urgent ultrasound, then observe",
      "B": "Immediate exploration of affected side only",
      "C": "Immediate exploration and bilateral orchidopexy",
      "D": "Manual detorsion and discharge"
    },
    "answer": "C",
    "explanation": {
      "correct": "Testicular torsion requires emergent surgery. Because the 'bell-clapper' deformity is often bilateral, both sides must be fixed (orchidopexy) to prevent future torsion.",
      "A": "Delaying surgery for imaging can lead to orchidectomy.",
      "B": "Incomplete. Must fix both sides.",
      "C": "Correct. Standard of care.",
      "D": "Manual detorsion is temporary; surgery is still required.",
      "E": ""
    },
    "guideline": "EAU Pediatric Urology Guidelines",
    "takeaway": "Torsion is a clinical diagnosis; bilateral fixation is mandatory."
  },
  {
    "id": 10011,
    "specialty": "Urology",
    "topic": "RCC",
    "question": "Which is true about Renal Cell Adenocarcinoma (RCC)?",
    "options": {
      "A": "It is transitional in origin",
      "B": "Common presentation is the classic triad (pain, mass, hematuria)",
      "C": "It is extremely radiosensitive",
      "D": "It is always asymptomatic"
    },
    "answer": "B",
    "explanation": {
      "correct": "While the 'classic triad' (flank pain, palpable mass, gross hematuria) is only seen in 10% of cases today (due to incidentalomas), it remains the hallmark clinical presentation.",
      "A": "Incorrect. It arises from proximal tubule epithelium.",
      "B": "Correct. Historically classic.",
      "C": "Incorrect. RCC is notoriously radioresistant.",
      "D": "Incorrect. Many are found incidentally, but symptomatic cases exist.",
      "E": ""
    },
    "guideline": "Schwartz's Principles of Surgery",
    "takeaway": "Most RCCs are now found incidentally on imaging."
  },
  {
    "id": 10012,
    "specialty": "Urology",
    "topic": "Urolithiasis",
    "question": "Most important predictor for spontaneous passage of a ureteric stone?",
    "options": {
      "A": "Stone size",
      "B": "Stone location",
      "C": "Degree of hydronephrosis",
      "D": "Patient's fluid intake"
    },
    "answer": "A",
    "explanation": {
      "correct": "Stone size is the most critical factor. Stones <5mm have a >80% chance of spontaneous passage; stones >7mm rarely pass.",
      "A": "Correct. The primary determinant.",
      "B": "Secondary determinant (distal is better).",
      "C": "Indicates severity but doesn't predict passage.",
      "D": "Helps, but doesn't override size constraints.",
      "E": ""
    },
    "guideline": "AUA/EAU Joint Guideline on Ureteral Stones",
    "takeaway": "Stones <5mm can often be managed with Medical Expulsive Therapy (MET)."
  }
];
