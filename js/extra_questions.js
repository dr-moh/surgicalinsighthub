var EXTRA_QUESTIONS = [
  // UROLOGY (17-100)
  {
    "specialty": "Urology",
    "topic": "Renal Trauma",
    "question": "A 25-year-old male with blunt abdominal trauma has gross hematuria. CT shows a renal laceration >1cm into the cortex without urinary extravasation. Grade?",
    "options": {"A": "Grade I", "B": "Grade II", "C": "Grade III", "D": "Grade IV"},
    "answer": "C",
    "explanation": {"correct": "AAST Grade III renal injury involves a parenchymal laceration >1cm in depth without involvement of the collecting system or vessels.", "A": "Contusion/subcapsular hematoma.", "B": "Laceration <1cm.", "D": "Involves collecting system or main vessels."},
    "guideline": "AAST Renal Injury Scale",
    "takeaway": "Grade III and below are usually managed non-operatively in stable patients."
  },
  {
    "specialty": "Urology",
    "topic": "Bladder Trauma",
    "question": "Management of an extraperitoneal bladder rupture diagnosed on CT cystogram?",
    "options": {"A": "Immediate laparotomy", "B": "Catheter drainage alone", "C": "Suprapubic cystostomy only", "D": "Watchful waiting"},
    "answer": "B",
    "explanation": {"correct": "Most extraperitoneal bladder ruptures heal with simple catheter drainage for 10-14 days. Intraperitoneal ruptures require surgical repair.", "A": "Only for intraperitoneal.", "B": "Standard for extraperitoneal.", "C": "Unnecessary unless urethral injury present.", "D": "Risk of sepsis."},
    "guideline": "AUA Urotrauma Guidelines",
    "takeaway": "Extraperitoneal = Catheter; Intraperitoneal = Surgery."
  },
  // COLORECTAL (10-100)
  {
    "specialty": "Colorectal",
    "topic": "Diverticulitis",
    "question": "A patient with Hinchey Stage II diverticulitis (pelvic abscess). Best initial management?",
    "options": {"A": "IV antibiotics and bowel rest", "B": "CT-guided percutaneous drainage", "C": "Hartmann's procedure", "D": "Sigmoidectomy with primary anastomosis"},
    "answer": "B",
    "explanation": {"correct": "Hinchey Stage II involves a walled-off pelvic or retroperitoneal abscess. Percutaneous drainage + antibiotics is the preferred initial approach.", "A": "For Stage I (phlegmon).", "B": "Correct for accessible abscesses >3cm.", "C": "For Stage III/IV (peritonitis).", "D": "Done electively after recovery."},
    "guideline": "ASCRS Clinical Practice Guidelines",
    "takeaway": "Percutaneous drainage avoids emergency stoma in many diverticulitis patients."
  },
  {
    "specialty": "Colorectal",
    "topic": "Anal Fissure",
    "question": "First-line medical treatment for a chronic anal fissure?",
    "options": {"A": "Lateral internal sphincterotomy", "B": "Topical nitroglycerin or diltiazem", "C": "Anal dilation", "0": "Sitz baths only"},
    "answer": "B",
    "explanation": {"correct": "Medical therapy with topical nitrates or calcium channel blockers (diltiazem) is first-line, aiming to relax the internal sphincter and improve blood flow.", "A": "Gold standard surgical treatment, but reserved for failed medical therapy.", "B": "Correct initial step.", "C": "Obsolete due to incontinence risk.", "D": "Adjunct, not definitive."},
    "guideline": "ASCRS Guidelines for Anal Fissure",
    "takeaway": "Botox or CCBs are effective non-surgical options for fissures."
  },
  // NEUROSURGERY (25-100)
  {
    "specialty": "Neurosurgery",
    "topic": "Epidural Hematoma",
    "question": "Classic CT appearance of an acute epidural hematoma?",
    "options": {"A": "Crescent-shaped hyperdensity", "B": "Biconvex (lens-shaped) hyperdensity", "C": "Diffuse axonal blurring", "D": "Star-shaped hemorrhage in basilar cisterns"},
    "answer": "B",
    "explanation": {"correct": "EDHs are typically lens-shaped (biconvex) because they are limited by the cranial sutures where the dura is tightly adherent.", "A": "Subdural hematoma.", "B": "Classic EDH.", "C": "DAI.", "D": "SAH."},
    "guideline": "Brain Trauma Foundation Guidelines",
    "takeaway": "EDH is often associated with middle meningeal artery rupture and a 'lucid interval'."
  },
  {
    "specialty": "Neurosurgery",
    "topic": "ICP Management",
    "question": "First-line osmotic agent for reducing intracranial pressure in a patient with a herniation syndrome?",
    "options": {"A": "Furosemide", "B": "Mannitol", "C": "Dexamethasone", "D": "Hyperventilation to pCO2 <25"},
    "answer": "B",
    "explanation": {"correct": "Mannitol (0.5-1 g/kg) is the gold standard osmotic diuretic for rapid ICP reduction. Hypertonic saline is an alternative.", "A": "Adjunct only.", "B": "Primary emergency treatment.", "C": "Used for vasogenic edema (tumors), not acute trauma/herniation.", "D": "Should only be used temporarily to pCO2 30-35."},
    "guideline": "Brain Trauma Foundation",
    "takeaway": "Mannitol requires an intact blood-brain barrier to be effective."
  },
  // VASCULAR (30-100)
  {
    "specialty": "Vascular",
    "topic": "Acute Limb Ischemia",
    "question": "The '6 Ps' of acute limb ischemia include all EXCEPT:",
    "options": {"A": "Pain", "B": "Pallor", "C": "Pressure", "D": "Pulselessness"},
    "answer": "C",
    "explanation": {"correct": "The 6 Ps are: Pain, Pallor, Pulselessness, Paresthesia, Paralysis, and Poikilothermia (coolness).", "A": "Early sign.", "B": "Classic sign.", "C": "Correct. Not part of the 6 Ps (though seen in compartment syndrome).", "D": "Pathognomonic."},
    "guideline": "SVS Guidelines for Acute Limb Ischemia",
    "takeaway": "Acute limb ischemia is a surgical emergency requiring immediate revascularization."
  },
  {
    "specialty": "Vascular",
    "topic": "Carotid Endarterectomy",
    "question": "Indication for Carotid Endarterectomy (CEA) in a symptomatic patient?",
    "options": {"A": "Stenosis >50%", "B": "Stenosis >70% only", "C": "Any degree of stenosis", "D": "Asymptomatic stenosis >60%"},
    "answer": "A",
    "explanation": {"correct": "For symptomatic patients (TIA/Stroke), CEA is strongly recommended for 70-99% stenosis and recommended for 50-69% stenosis.", "A": "Correct threshold for symptomatic patients.", "B": "Too high; 50% is enough.", "C": "Incorrect.", "D": "Correct for asymptomatic, but question asked for symptomatic."},
    "guideline": "ESVS Carotid Guidelines 2026",
    "takeaway": "CEA benefit is greatest in symptomatic males with high-grade stenosis."
  },
  // PLASTIC SURGERY (Placeholder for more)
  {
    "specialty": "Plastic Surgery",
    "topic": "Burns",
    "question": "Parkland formula for fluid resuscitation in a 70kg patient with 30% TBSA burns?",
    "options": {"A": "4.2 L in 24 hrs", "B": "8.4 L in 24 hrs", "C": "12.6 L in 24 hrs", "D": "2.1 L in 24 hrs"},
    "answer": "B",
    "explanation": {"correct": "Parkland = 4ml x weight(kg) x %TBSA. 4 x 70 x 30 = 8400 ml (8.4 L). Half is given in first 8 hours.", "A": "Based on 2ml (Modified Brooke).", "B": "Correct calculation.", "C": "Calculation error.", "D": "Underestimate."},
    "guideline": "ABA Burn Care Guidelines",
    "takeaway": "Fluid resuscitation is titrated based on urine output (0.5ml/kg/hr)."
  }
];
