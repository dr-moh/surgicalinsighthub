if (!window.QUESTIONS) window.QUESTIONS = [];
window.QUESTIONS.push(...[
  {
    "id": 50001,
    "specialty": "Anesthesia",
    "topic": "Fluid Resuscitation",
    "question": "All of the following qualities are advantages of crystalloid solutions, except:",
    "options": {
      "A": "Nontoxic and reaction-free",
      "B": "Relatively inexpensive and widely available",
      "C": "Capable of restoring interstitial fluid volume",
      "D": "Ability to remain in the intravascular space for a relatively long period"
    },
    "answer": "D",
    "explanation": {
      "correct": "Crystalloids (like Normal Saline or Lactated Ringer's) are effective for volume replacement but have poor intravascular persistence. Only about 20-25% of the infused volume remains in the intravascular space after 20-30 minutes, as the rest redistributes into the interstitial space. This is why a 3:1 ratio is often cited for replacing blood loss with crystalloid.",
      "A": "Crystalloids are generally nontoxic and rarely cause anaphylactic reactions compared to colloids like dextrans.",
      "B": "Crystalloids are significantly cheaper than colloids (albumin, starch).",
      "C": "Because they redistribute, they are excellent for treating interstitial fluid deficits.",
      "D": "This is a characteristic of colloids (e.g., Albumin), not crystalloids."
    },
    "guideline": "ASA Practice Guidelines for Perioperative Fluid Management",
    "takeaway": "Crystalloids have poor intravascular persistence; only ~25% remains in the vessels after redistribution.",
    "sharp_metadata": {
      "S": "Choice of resuscitation fluid in the perioperative period.",
      "H": "Crystalloids are the workhorse of fluid therapy due to cost and safety, but lack persistence.",
      "A": "Address the misconception that crystalloids stay where you put them; they leak!",
      "R": "ASA guidelines emphasize goal-directed therapy over simple volume ratios.",
      "P": "Expect to give 3-4x the volume of blood loss when using crystalloids alone."
    }
  },
  {
    "id": 50002,
    "specialty": "Anesthesia",
    "topic": "Pulmonary Torsion",
    "question": "An 80-year-old female undergoes a left lower lobectomy. On postoperative day 2, she develops hemoptysis and stable vitals. Chest X-ray shows a homogenous density in the left hemithorax. Bronchoscopy reveals the left upper lobar orifice is closed/occluded. What is the most likely diagnosis?",
    "options": {
      "A": "Acute herniation of the heart",
      "B": "Normal postoperative fluid accumulation",
      "C": "Torsion of the remaining left upper lobe",
      "D": "Re-expansion pulmonary edema"
    },
    "answer": "C",
    "explanation": {
      "correct": "Lobar torsion is a rare but life-threatening complication following lobectomy (most common in the right middle lobe, but possible on the left). The remaining lobe rotates on its pedicle, causing venous obstruction and eventually arterial infarction. Bronchoscopic evidence of a twisted or occluded orifice in a previously patent airway is pathognomonic.",
      "A": "Cardiac herniation usually occurs immediately post-op and presents with dramatic hemodynamic collapse.",
      "B": "Fluid accumulation doesn't cause lobar orifice occlusion.",
      "C": "Classic presentation: hemoptysis, radiographic opacity, and occluded bronchus post-lobectomy.",
      "D": "Re-expansion edema presents with hypoxia and diffuse infiltrates, not focal orifice occlusion."
    },
    "guideline": "STS Guidelines for Post-Lobectomy Complications",
    "takeaway": "Sudden lobar opacity and bronchoscopic orifice occlusion post-lobectomy indicates lobar torsion.",
    "sharp_metadata": {
      "S": "80F, Day 2 post-left lower lobectomy with new hemoptysis.",
      "H": "Lobar torsion must be suspected when a remaining lobe 'disappears' or opacifies suddenly.",
      "A": "Differentiate from cardiac herniation (hemodynamic) and fluid (no orifice block).",
      "R": "Prompt surgical re-exploration is required to save the lobe or perform completion pneumonectomy.",
      "P": "If bronchoscopy shows a 'fish-mouth' or twisted occlusion, go back to the OR immediately."
    }
  },
  {
    "id": 50003,
    "specialty": "Anesthesia",
    "topic": "Spinal Anesthesia Physiology",
    "question": "A healthy 38-year-old female is undergoing a ventral hernia repair under spinal anesthesia. A T2 sensory level is obtained with hyperbaric bupivacaine. Which of the following statements regarding this situation is FALSE?",
    "options": {
      "A": "Effective cough is preserved",
      "B": "The cardioaccelerator nerves are blocked",
      "C": "Biceps strength (C5-C6) remains full",
      "D": "Local anesthetics bind to the intracellular portion of sodium channels"
    },
    "answer": "A",
    "explanation": {
      "correct": "A T2 sensory level implies that the motor block has likely reached the mid-thoracic levels. Intercostal muscles (T1-T11) are responsible for the forceful exhalation needed for an effective cough. At T2, most intercostals are paralyzed, severely impairing cough strength, even if the diaphragm (C3-C5) is functioning normally.",
      "A": "FALSE. Cough is significantly impaired due to intercostal muscle paralysis at a T2 level.",
      "B": "TRUE. Cardioaccelerator fibers (T1-T4) are blocked, which may cause bradycardia.",
      "C": "TRUE. A T2 block is below the brachial plexus (C5-T1), so arm strength should be preserved.",
      "D": "TRUE. Local anesthetics must cross the lipid membrane and bind to the internal pore of the Na+ channel."
    },
    "guideline": "Physiology of Neuraxial Anesthesia",
    "takeaway": "High spinal anesthesia (T2) impairs coughing by paralyzing intercostal muscles.",
    "sharp_metadata": {
      "S": "Healthy patient with a T2 spinal level (High Spinal).",
      "H": "Recognizing the impact of high levels on cardiac (T1-T4) and respiratory (T1-T11) function.",
      "A": "The diaphragm keeps the patient breathing, but the intercostals make them cough.",
      "R": "Monitor for bradycardia (sympathectomy) and respiratory anxiety in high spinals.",
      "P": "Always test both sensory and motor levels; a T2 sensory often means a higher autonomic block."
    }
  },
  {
    "id": 50004,
    "specialty": "General Surgery",
    "topic": "Biliary Anatomy",
    "question": "During a laparoscopic cholecystectomy, the 'Critical View of Safety' is being obtained. Which of the following is NOT a component of this view?",
    "options": {
      "A": "The lower part of the gallbladder is dissected off the cystic plate",
      "B": "The hepatocystic triangle is cleared of all fat and fibrous tissue",
      "C": "The common bile duct is clearly identified and skeletonized",
      "D": "Two and only two structures are seen entering the gallbladder"
    },
    "answer": "C",
    "explanation": {
      "correct": "The Critical View of Safety (CVS) specifically avoids skeletonizing the common bile duct (CBD). Identifying the CBD is NOT part of the CVS; in fact, trying to find it often leads to injury. The goal is to see only the cystic duct and cystic artery entering the gallbladder, with the liver bed visible behind them.",
      "A": "Component 1: Clearance of the lower third of the cystic plate.",
      "B": "Component 2: Clearing the hepatocystic triangle.",
      "C": "NOT a component. We avoid the CBD to prevent misidentification injuries.",
      "D": "Component 3: Only the cystic duct and artery should be seen."
    },
    "guideline": "SAGES Guidelines for Safe Cholecystectomy",
    "takeaway": "The Critical View of Safety requires clearing the hepatocystic triangle, NOT identifying the CBD.",
    "sharp_metadata": {
      "S": "Laparoscopic cholecystectomy: intraoperative safety.",
      "H": "The CVS is the gold standard for preventing bile duct injury.",
      "A": "Common mistake: Thinking you need to 'see the CBD' for safety. That's how injuries happen!",
      "R": "SAGES 'Safe Chole' initiative.",
      "P": "If you can't get the CVS, bail out (subtotal chole or convert)."
    }
  },
  {
    "id": 50005,
    "specialty": "Trauma",
    "topic": "GCS Scoring",
    "question": "A trauma patient opens their eyes to pain, utters inappropriate words, and withdraws from painful stimuli. What is their Glasgow Coma Scale (GCS) score?",
    "options": {
      "A": "8",
      "B": "9",
      "C": "10",
      "D": "11"
    },
    "answer": "B",
    "explanation": {
      "correct": "GCS = E2 + V3 + M4 = 9. Eye (E): Opens to pain = 2. Verbal (V): Inappropriate words = 3. Motor (M): Withdraws from pain = 4.",
      "A": "Total of 8 would be one point lower (e.g., E2+V2+M4).",
      "B": "Correct: E2 + V3 + M4 = 9.",
      "C": "Total of 10 would be one point higher (e.g., E2+V3+M5).",
      "D": "Total of 11 would be two points higher."
    },
    "guideline": "ATLS 10th Edition",
    "takeaway": "GCS 9 = Eyes (Pain: 2), Verbal (Inappropriate: 3), Motor (Withdraw: 4).",
    "sharp_metadata": {
      "S": "Primary survey of a head injury patient.",
      "H": "Rapid and accurate GCS calculation is vital for triage.",
      "A": "Don't confuse 'inappropriate words' (3) with 'incomprehensible sounds' (2).",
      "R": "ATLS standards for neurological assessment.",
      "P": "GCS \u2264 8 usually indicates the need for definitive airway management (intubation)."
    }
  }
  {
    "id": 50006,
    "specialty": "HPB",
    "topic": "Hepatocellular Carcinoma",
    "question": "A 62-year-old male with Child-Pugh A cirrhosis and a single 4cm HCC in Segment VIII is being evaluated. Portal pressure is normal and bilirubin is 0.8 mg/dL. What is the preferred treatment according to the BCLC (Barcelona Clinic Liver Cancer) criteria?",
    "options": {
      "A": "Liver Transplantation",
      "B": "Surgical Resection",
      "C": "Transarterial Chemoembolization (TACE)",
      "D": "Radiofrequency Ablation (RFA)"
    },
    "answer": "B",
    "explanation": {
      "correct": "Surgical resection is the first-line treatment for HCC in patients with well-preserved liver function (Child-Pugh A), absence of portal hypertension, and a single tumor. While transplantation is an option for tumors within Milan criteria (single <5cm), resection is preferred when the patient's own liver can safely tolerate the procedure and there is no significant portal hypertension.",
      "A": "Transplantation is preferred if there is portal hypertension or Child-Pugh B/C liver function.",
      "B": "Resection is first-line for Child-Pugh A with normal portal pressure.",
      "C": "TACE is for intermediate-stage HCC (BCLC B), not early stage.",
      "D": "RFA is an alternative for small tumors (<3cm) if surgery is risky."
    },
    "guideline": "BCLC Staging System / AASLD Guidelines",
    "takeaway": "Child-Pugh A + No Portal Hypertension + Single HCC = Surgical Resection.",
    "sharp_metadata": {
      "S": "Early-stage HCC in a cirrhotic patient.",
      "H": "Excellence in HCC management balances oncologic resection with liver reserve.",
      "A": "Portal hypertension (Platelets <100k or Varices) is the key contraindication to resection.",
      "R": "BCLC staging is the global standard for HCC management.",
      "P": "Measure the Hepatic Venous Pressure Gradient (HVPG) if portal hypertension is suspected."
    }
  },
  {
    "id": 50007,
    "specialty": "Vascular",
    "topic": "Abdominal Aortic Aneurysm",
    "question": "A 68-year-old male smoker is found to have a 5.2 cm asymptomatic abdominal aortic aneurysm (AAA) on screening ultrasound. What is the most appropriate next step in his management?",
    "options": {
      "A": "Immediate EVAR (Endovascular Aneurysm Repair)",
      "B": "Repeat ultrasound in 6 months",
      "C": "CT Angiography and surgical consultation",
      "D": "Statins and repeat ultrasound in 12 months"
    },
    "answer": "B",
    "explanation": {
      "correct": "For men, the threshold for elective AAA repair is typically 5.5 cm. For aneurysms between 5.0 and 5.4 cm, ultrasound surveillance every 6 months is recommended. For women, the threshold is often lower (5.0 cm).",
      "A": "The aneurysm has not reached the 5.5 cm threshold for repair in a male.",
      "B": "Standard surveillance interval for 5.0-5.4 cm AAA is 6 months.",
      "C": "CTA is needed when planning surgery (approaching 5.5 cm), but 6-month f/u is standard first.",
      "D": "Statins are indicated for all AAA patients, but 12 months is too long a delay for this size."
    },
    "guideline": "SVS Practice Guidelines for AAA",
    "takeaway": "AAA Surveillance: 5.0-5.4 cm requires ultrasound every 6 months.",
    "sharp_metadata": {
      "S": "Asymptomatic 5.2cm AAA in a male smoker.",
      "H": "Avoid premature intervention while maintaining vigilant surveillance.",
      "A": "Understand the gender difference: 5.5cm for men, 5.0cm for women.",
      "R": "Society for Vascular Surgery (SVS) guidelines.",
      "P": "Aggressive blood pressure and smoking cessation are mandatory."
    }
  },
  {
    "id": 50008,
    "specialty": "Colorectal",
    "topic": "Diverticulitis",
    "question": "A 45-year-old patient presents with left lower quadrant pain, fever, and leukocytosis. CT scan shows sigmoid diverticulitis with a 5 cm pelvic abscess. What is the most appropriate initial management?",
    "options": {
      "A": "Emergent Hartmann's Procedure",
      "B": "Intravenous antibiotics and bowel rest only",
      "C": "CT-guided percutaneous drainage and IV antibiotics",
      "D": "Primary anastomosis with diverting loop ileostomy"
    },
    "answer": "C",
    "explanation": {
      "correct": "This is Hinchey Stage II diverticulitis (abscess >3-4 cm). The preferred management for large, accessible abscesses is percutaneous drainage combined with IV antibiotics. This often allows the inflammation to cool down, potentially avoiding a stoma in a future elective procedure.",
      "A": "Hartmann's is for Hinchey III/IV (perforation) or failed conservative management.",
      "B": "Antibiotics alone are usually insufficient for abscesses >4 cm.",
      "C": "Drainage + Antibiotics is the gold standard for Hinchey II.",
      "D": "Acute surgery is avoided if the abscess can be drained percutaneously."
    },
    "guideline": "ASCRS Clinical Practice Guidelines for Diverticulitis",
    "takeaway": "Diverticular abscess >3-4 cm (Hinchey II) requires percutaneous drainage.",
    "sharp_metadata": {
      "S": "Complicated diverticulitis with large abscess (Hinchey II).",
      "H": "Percutaneous drainage bridges the patient to a safer, elective operation.",
      "A": "Recognize the '4cm rule' for considering drainage over antibiotics alone.",
      "R": "ASCRS guidelines recommend non-operative management for stable Hinchey I/II.",
      "P": "Monitor for clinical improvement within 48-72 hours; if not, consider surgery."
    }
  },
  {
    "id": 50009,
    "specialty": "Breast & Endocrine",
    "topic": "Hyperparathyroidism",
    "question": "A 55-year-old woman has an incidentally discovered calcium level of 11.2 mg/dL and a PTH of 95 pg/mL. She is asymptomatic. Which of the following is an absolute indication for parathyroidectomy in this patient?",
    "options": {
      "A": "Age > 50 years",
      "AA": "Calcium level > 1 mg/dL above the upper limit of normal",
      "B": "Creatinine clearance of 80 mL/min",
      "C": "Bone mineral density T-score of -1.5"
    },
    "answer": "AA",
    "explanation": {
      "correct": "Asymptomatic primary hyperparathyroidism has specific surgical indications: 1) Serum calcium >1.0 mg/dL above normal, 2) Age <50, 3) BMD T-score \u2264 -2.5, 4) CrCl <60 mL/min, or 5) 24hr urine calcium >400mg (though this last one is controversial).",
      "A": "Age < 50 is an indication, not > 50.",
      "AA": "Correct. Calcium > 1mg/dL above normal is a standard indication.",
      "B": "CrCl must be < 60 mL/min to be an indication.",
      "C": "T-score must be \u2264 -2.5 (osteoporosis) to be an indication."
    },
    "guideline": "Fifth International Workshop Guidelines on Asymptomatic PHPT",
    "takeaway": "Surgical Indications for Asymptomatic PHPT: Ca >1mg/dL above normal, Age <50, or Osteoporosis.",
    "sharp_metadata": {
      "S": "Asymptomatic Primary Hyperparathyroidism.",
      "H": "Identifying 'silent' end-organ damage that justifies surgical intervention.",
      "A": "Don't confuse the age threshold (it's younger patients who need surgery more).",
      "R": "2022 International Workshop Guidelines.",
      "P": "Perform a DEXA scan and renal imaging/function tests to complete the workup."
    }
  },
  {
    "id": 50010,
    "specialty": "Neurosurgery",
    "topic": "Epidural Hematoma",
    "question": "A 19-year-old male is hit in the temple with a baseball. He briefly loses consciousness, then wakes up and feels 'fine' (Lucid Interval). Two hours later, he becomes rapidly obtunded. What vessel is most likely injured?",
    "options": {
      "A": "Bridging veins",
      "B": "Middle meningeal artery",
      "C": "Internal carotid artery",
      "D": "Sigmoid sinus"
    },
    "answer": "B",
    "explanation": {
      "correct": "The 'lucid interval' followed by rapid deterioration is the classic presentation of an Epidural Hematoma (EDH). This is typically caused by a fracture of the temporal bone lacerating the middle meningeal artery.",
      "A": "Bridging veins cause Subdural Hematomas (SDH), which usually present more gradually.",
      "B": "Middle meningeal artery laceration is the most common cause of EDH.",
      "C": "ICA injury would cause massive stroke or carotid-cavernous fistula.",
      "D": "Venous sinus injury is rare and less likely to cause this rapid lucid-interval pattern."
    },
    "guideline": "Brain Trauma Foundation Guidelines",
    "takeaway": "Lucid interval + Rapid deterioration + Temple trauma = Middle Meningeal Artery / EDH.",
    "sharp_metadata": {
      "S": "19M with temporal trauma and a lucid interval.",
      "H": "Early CT scan can be life-saving before the patient herniates.",
      "A": "The lucid interval is 'the talk and die' syndrome.",
      "R": "Standard neurosurgical emergency teaching.",
      "P": "Immediate neurosurgical evacuation is required for symptomatic or large EDHs."
    }
  }
])
