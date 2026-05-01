if (!window.QUESTIONS) window.QUESTIONS = [];
window.QUESTIONS.push(...[
[
  {
    "id": 511,
    "specialty": "Trauma Surgery",
    "topic": "Metabolic Response to Injury",
    "question": "A 35-year-old woman presents to you after running her first marathon with complaints of muscle aches. Which of the following is not an action of cortisol in this metabolically stressed patient?",
    "options": {
      "A": "It stimulates release of insulin by the pancreas.",
      "C": "It stimulates release of lactate from skeletal muscle.",
      "D": "It induces release of glycerol from adipose tissue.",
      "E": "It leads to immunosuppression."
    },
    "answer": "A",
    "explanation": {
      "correct": "Cortisol is a counter-regulatory hormone that opposes insulin; it causes insulin resistance and decreases insulin secretion.",
      "A": "Correct (It is NOT an action); cortisol inhibits, rather than stimulates, insulin's anabolic effects.",
      "C": "Incorrect; cortisol promotes muscle catabolism to supply lactate/amino acids for gluconeogenesis.",
      "D": "Incorrect; cortisol induces lipolysis to mobilize energy.",
      "E": "Incorrect; cortisol has potent immunosuppressive and anti-inflammatory properties."
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "A",
      "set_the_stage": "Cortisol is the primary glucocorticoid released from the adrenal cortex during the neuroendocrine response to physiological stress, trauma, or extreme exertion.",
      "highlight_excellence": "Cortisol is a classic counter-regulatory hormone. Its primary function during stress is to mobilize energy stores and ensure adequate glucose supply to the brain and heart. It does this by promoting gluconeogenesis, lipolysis, and protein catabolism. Crucially, it acts as an *antagonist* to insulin, causing peripheral insulin resistance and inhibiting insulin secretion. Therefore, stating that it stimulates the release of insulin (A) is completely false.",
      "address_gaps": "Cortisol promotes the release of lactate and amino acids from muscle (C) to serve as substrates for hepatic gluconeogenesis. It induces lipolysis to release glycerol and free fatty acids (D). At high, sustained levels, it also exhibits potent anti-inflammatory and immunosuppressive effects (E).",
      "review_learning_points": "The metabolic response to injury is characterized by the 'ebb' and 'flow' phases. In the flow phase, catecholamines, glucagon, and cortisol act synergistically to create a hypermetabolic, catabolic state characterized by hyperglycemia and negative nitrogen balance.",
      "plan_for_improvement": "Think of Cortisol as the 'Stress Sugar' hormone—it breaks down muscle and fat to make sugar, and it blocks insulin from storing that sugar away."
    },
    "guideline": "Critical care guidelines emphasize tight glycemic control in stressed surgical patients precisely because counter-regulatory hormones like cortisol drive dangerous stress-induced hyperglycemia.",
    "takeaway": "Stress hyperglycemia in surgical and trauma patients is an expected physiological response driven directly by cortisol and catecholamines.",
    "visualization": "A conceptual seesaw where Cortisol, Glucagon, and Epinephrine are heavy on one side, driving blood glucose levels sky-high, easily lifting a weakened Insulin molecule on the other side.",
    "_src_file": "general_surgery.js"
  },
  {
    "specialty": "Trauma Surgery",
    "topic": "Primary Survey",
    "question": "In the ATLS Primary Survey, what is the most important FIRST step in managing a patient with a suspected cervical spine injury and a compromised airway?",
    "options": {
      "A": "Immediate blind nasotracheal intubation",
      "B": "Cricothyroidotomy",
      "C": "Airway maintenance with restricted cervical spine motion (Manual Inline Stabilization)",
      "D": "Chest X-ray to rule out pneumothorax"
    },
    "answer": "C",
    "explanation": {
      "correct": "The 'A' in ABCDE stands for Airway with C-spine protection. The airway must be secured while keeping the neck in a neutral position using manual inline stabilization, not just a collar.",
      "A": "Contraindicated in facial fractures or apnea.",
      "B": "Only if endotracheal intubation fails or is impossible.",
      "C": "Standard ATLS protocol.",
      "D": "Part of the 'B' (Breathing) phase."
    },
    "guideline": "ATLS 10th Edition: Airway and Ventilatory Management",
    "takeaway": "Airway Management must include Restricted Cervical Spine Motion.",
    "sharp_metadata": {
      "S": "Trauma patient in a MVA; unconscious and gurgling.",
      "H": "Excellence in technique: Using a jaw thrust (not a head tilt-chin lift) to open the airway without moving the spine.",
      "A": "Address the fact that a hard C-collar must be partially removed for airway intervention to allow manual stabilization.",
      "R": "Fundamental trauma management.",
      "P": "Orotracheal intubation with manual inline stabilization."
    },
    "id": 1652,
    "_src_file": "trauma.js"
  },
  {
    "specialty": "Trauma Surgery",
    "topic": "Tension Pneumothorax",
    "question": "A trauma patient presents with respiratory distress, absent breath sounds on the right, and hypotension. What is the most appropriate IMMEDIATE management?",
    "options": {
      "A": "Order a STAT portable chest X-ray",
      "B": "Perform a CT scan of the chest",
      "C": "Needle decompression or Finger Thoracostomy",
      "D": "Endotracheal intubation"
    },
    "answer": "C",
    "explanation": {
      "correct": "Tension pneumothorax is a CLINICAL diagnosis. You should NEVER wait for an X-ray if the clinical signs (Distress + Absent sounds + Shock) are present. Immediate decompression is life-saving.",
      "A": "Classic 'wrong' answer; do not wait for imaging.",
      "B": "Patient will likely code in CT.",
      "C": "Immediate life-saving intervention.",
      "D": "Does not treat the underlying pressure and may worsen the tension."
    },
    "guideline": "ATLS Management of Tension Pneumothorax",
    "takeaway": "Tension Pneumothorax = Clinical Diagnosis; Immediate Decompression.",
    "sharp_metadata": {
      "S": "Patient with tracheal deviation (LATE sign) and distended neck veins.",
      "H": "Excellence in site selection: 5th intercostal space, mid-axillary line is now preferred over the 2nd ICS in many guidelines.",
      "A": "Identify the cause of shock: Decreased venous return to the heart due to high intrathoracic pressure.",
      "R": "Critical 'Don't Miss' surgical emergency.",
      "P": "Immediate finger thoracostomy followed by a formal chest tube (32-36 Fr)."
    },
    "id": 1653,
    "_src_file": "trauma.js"
  },
  {
    "specialty": "Trauma Surgery",
    "topic": "Cardiac Tamponade",
    "question": "Which of the following constitutes 'Beck's Triad' for cardiac tamponade?",
    "options": {
      "A": "Hypertension, Bradycardia, Irregular respirations",
      "B": "Hypotension, Muffled heart sounds, Distended neck veins",
      "C": "Fever, Tachycardia, Leukocytosis",
      "D": "RUQ pain, Jaundice, Fever"
    },
    "answer": "B",
    "explanation": {
      "correct": "Beck's Triad is the classic clinical sign of cardiac tamponade. Note that neck veins may not be distended if the patient is hypovolemic.",
      "A": "Cushing's Triad (Increased ICP).",
      "B": "Beck's Triad.",
      "C": "SIRS criteria.",
      "D": "Charcot's Triad."
    },
    "guideline": "Management of Pericardial Tamponade in Trauma",
    "takeaway": "Beck's Triad = Hypotension + Muffled sounds + Distended veins.",
    "sharp_metadata": {
      "S": "Patient with a stab wound to the 'cardiac box' (sternal notch to xiphoid).",
      "H": "Excellence in diagnosis: The FAST exam is the most rapid way to identify pericardial fluid.",
      "A": "Identify 'Pulsus Paradoxus' (SBP drop >10mmHg during inspiration) as a key physiology finding.",
      "R": "Classic trauma physiology.",
      "P": "Immediate bedside FAST; if positive and unstable, proceed to the OR for sternotomy or thoracotomy."
    },
    "id": 1654,
    "_src_file": "trauma.js"
  },
  {
    "specialty": "Trauma Surgery",
    "topic": "Hemorrhagic Shock",
    "question": "A trauma patient has a heart rate of 125, blood pressure of 90/60, and is confused. According to ATLS, which class of hemorrhagic shock is this?",
    "options": {
      "A": "Class I",
      "B": "Class II",
      "C": "Class III",
      "D": "Class IV"
    },
    "answer": "C",
    "explanation": {
      "correct": "Class III shock is defined by a significant drop in blood pressure, tachycardia (>120), and altered mental status. It corresponds to roughly 30-40% blood loss (1500-2000 mL).",
      "A": "Normal vitals; <15% loss.",
      "B": "Tachycardia but normal BP; 15-30% loss.",
      "C": "Hypotension present; 30-40% loss.",
      "D": "Extreme hypotension; >40% loss; patient is near death."
    },
    "guideline": "ATLS Classification of Hemorrhagic Shock",
    "takeaway": "Class III Shock = Hypotension + Tachycardia + Confusion.",
    "sharp_metadata": {
      "S": "Patient with pelvic fracture and active bleeding.",
      "H": "Excellence in resuscitation: Use 'Permissive Hypotension' (keeping SBP ~90) until bleeding is controlled to prevent 'popping the clot'.",
      "A": "Address the role of Balanced Resuscitation (1:1:1 ratio of Plasma:Platelets:RBCs).",
      "R": "Standard trauma physiology framework.",
      "P": "Activate Massive Transfusion Protocol (MTP) and move to hemorrhage control (Surgery/Angio)."
    },
    "id": 1655,
    "_src_file": "trauma.js"
  },
  {
    "specialty": "Trauma Surgery",
    "topic": "Glasgow Coma Scale (GCS)",
    "question": "A patient opens their eyes to pain, makes incomprehensible sounds, and withdraws from pain. What is their GCS score?",
    "options": {
      "A": "GCS 7",
      "B": "GCS 8",
      "C": "GCS 9",
      "D": "GCS 10"
    },
    "answer": "B",
    "explanation": {
      "correct": "Eyes (E): Opens to pain = 2; Verbal (V): Incomprehensible sounds = 2; Motor (M): Withdraws from pain = 4. Total = 8.",
      "A": "Lower.",
      "B": "Correct calculation (E2 V2 M4).",
      "C": "Higher.",
      "D": "Higher."
    },
    "guideline": "Standardized Glasgow Coma Scale Assessment",
    "takeaway": "GCS 8 or less = Coma / 'Less than 8, Intubate'.",
    "sharp_metadata": {
      "S": "Post-fall elderly patient with deteriorating mental status.",
      "H": "Excellence in communication: Always report the individual components (E, V, M) rather than just the sum.",
      "A": "Identify the Motor score (M) as the most predictive component for outcome.",
      "R": "Universal language for trauma neurological assessment.",
      "P": "Protect the airway if GCS < 9."
    },
    "id": 1656,
    "_src_file": "trauma.js"
  },
  {
    "specialty": "Trauma Surgery",
    "topic": "Epidural vs Subdural Hematoma",
    "question": "A CT scan shows a biconvex (lens-shaped) hyperdense collection that does NOT cross suture lines. Which vessel is most likely injured?",
    "options": {
      "A": "Bridging veins",
      "B": "Middle Meningeal Artery",
      "C": "Internal Carotid Artery",
      "D": "Superior Sagittal Sinus"
    },
    "answer": "B",
    "explanation": {
      "correct": "Biconvex/Lens-shape = Epidural Hematoma. This is typically caused by an arterial bleed, most commonly the Middle Meningeal Artery (branch of the maxillary artery), often following a fracture at the pterion.",
      "A": "Causes crescent-shaped Subdural Hematoma.",
      "B": "Classic cause of EDH.",
      "C": "Deep vessel.",
      "D": "Causes venous sinus thrombosis or massive venous bleed."
    },
    "guideline": "Management of Traumatic Brain Injury",
    "takeaway": "Epidural = Biconvex/Lens; Middle Meningeal Artery.",
    "sharp_metadata": {
      "S": "Young patient hit by a baseball; has a 'lucid interval' before rapid decline.",
      "H": "Excellence in diagnosis: The 'Lucid Interval' is classic for EDH.",
      "A": "Identify the fact that EDH *can* cross the midline (unlike SDH) because it is above the dura.",
      "R": "High-yield neuro-trauma.",
      "P": "Emergent neurosurgical evacuation via craniotomy."
    },
    "id": 1657,
    "_src_file": "trauma.js"
  },
  {
    "specialty": "Trauma Surgery",
    "topic": "Blunt Aortic Injury",
    "question": "What is the most common anatomical site for a traumatic aortic rupture following a high-speed deceleration injury?",
    "options": {
      "A": "Aortic root",
      "B": "Ascending aorta",
      "C": "Aortic isthmus (just distal to the left subclavian)",
      "D": "Abdominal aorta"
    },
    "answer": "C",
    "explanation": {
      "correct": "The aortic isthmus is the most common site (90%). This is where the mobile arch meets the fixed descending aorta at the ligamentum arteriosum, creating a shear point during rapid deceleration.",
      "A": "Causes immediate death on the scene (80% of cases).",
      "B": "Less common in blunt trauma.",
      "C": "Classic site for survivors who make it to the hospital.",
      "D": "Rare in deceleration."
    },
    "guideline": "Management of Blunt Thoracic Aortic Injury (BTAI)",
    "takeaway": "Aortic Isthmus = Most common site for blunt aortic injury.",
    "sharp_metadata": {
      "S": "High-speed MVA survivor with 'widened mediastinum' on chest X-ray.",
      "H": "Excellence in imaging: CT Angiography (CTA) is the gold standard for diagnosis.",
      "A": "Identify 'Impulse Control' (lowering BP and HR) as the key medical management before repair.",
      "R": "Lethal trauma pathology.",
      "P": "Treat with TEVAR (Thoracic Endovascular Aortic Repair) if anatomically suitable."
    },
    "id": 1658,
    "_src_file": "trauma.js"
  },
  {
    "specialty": "Trauma Surgery",
    "topic": "Damage Control Surgery",
    "question": "Which of the following defines the 'Lethal Triad' of trauma that Damage Control Surgery aims to stop?",
    "options": {
      "A": "Hypotension, Bradycardia, Hypothermia",
      "B": "Acidosis, Coagulopathy, Hypothermia",
      "C": "Pain, Fever, Leukocytosis",
      "D": "Hypoxia, Hypercapnia, Acidosis"
    },
    "answer": "B",
    "explanation": {
      "correct": "The 'Lethal Triad' consists of Acidosis, Coagulopathy, and Hypothermia. These three factors reinforce each other and lead to irreversible physiological collapse.",
      "A": "Incomplete.",
      "B": "The physiological cornerstone of trauma death.",
      "C": "SIRS/Infection signs.",
      "D": "Respiratory failure."
    },
    "guideline": "Damage Control Resuscitation Principles",
    "takeaway": "Lethal Triad = Acidosis + Coagulopathy + Hypothermia.",
    "sharp_metadata": {
      "S": "Exsanguinating patient in the OR; belly is full of blood and oozing everywhere.",
      "H": "Excellence in judgment: Recognizing when to 'get out' of the OR (packing the liver/abdomen) and move to the ICU to correct the triad.",
      "A": "Identify the 'Diamond of Death' which adds hypocalcemia to the triad (due to citrate in blood transfusions).",
      "R": "Core concept of modern trauma surgery.",
      "P": "Stop bleeding, control contamination, pack the abdomen, and head to ICU for resuscitation."
    },
    "id": 1659,
    "_src_file": "trauma.js"
  },
  {
    "specialty": "Trauma Surgery",
    "topic": "Abdominal Trauma: FAST Exam",
    "question": "Which of the following is NOT one of the four standard views in a Focused Assessment with Sonography for Trauma (FAST) exam?",
    "options": {
      "A": "Morison's Pouch (Perihepatic)",
      "B": "Splenorenal Recess (Perisplenic)",
      "C": "Pelvis (Pouch of Douglas/Retrovesical)",
      "D": "Gastric Fundus"
    },
    "answer": "D",
    "explanation": {
      "correct": "The FAST views are: 1. Perihepatic (Morison's pouch), 2. Perisplenic, 3. Pelvic, and 4. Pericardial (subxiphoid). The gastric fundus is not a standard view.",
      "A": "Standard view.",
      "B": "Standard view.",
      "C": "Standard view.",
      "D": "Not part of FAST."
    },
    "guideline": "Use of Ultrasound in Trauma",
    "takeaway": "FAST = Heart, Liver, Spleen, Pelvis.",
    "sharp_metadata": {
      "S": "Hypotensive blunt trauma patient; vitals 80/40.",
      "H": "Excellence in triage: A positive FAST in an unstable patient is an immediate indication for laparotomy.",
      "A": "Identify 'E-FAST' as the extended version that includes views of the lungs for pneumothorax.",
      "R": "Essential trauma diagnostic tool.",
      "P": "Perform FAST within seconds of arrival in the trauma bay."
    },
    "id": 1660,
    "_src_file": "trauma.js"
  },
  {
    "specialty": "Trauma Surgery",
    "topic": "Urethral Injury",
    "question": "A male patient with a pelvic fracture has 'high-riding prostate' on rectal exam and blood at the urethral meatus. What is the most appropriate next step to evaluate the urethra?",
    "options": {
      "A": "Insert a 16Fr Foley catheter immediately",
      "B": "Retrograde Urethrogram (RUG)",
      "C": "CT Cystogram",
      "D": "Suprapubic catheterization"
    },
    "answer": "B",
    "explanation": {
      "correct": "The triad of Pelvic fracture + Blood at meatus + High-riding prostate suggests a urethral injury. Blind catheterization can convert a partial tear to a complete tear. A RUG must be performed first to confirm urethral integrity.",
      "A": "Contraindicated until RUG is clear.",
      "B": "Gold standard for urethral injury diagnosis.",
      "C": "Evaluates the bladder, not the urethra.",
      "D": "Treatment, not diagnostic test."
    },
    "guideline": "Management of Urogenital Trauma",
    "takeaway": "Blood at meatus = RUG before Foley.",
    "sharp_metadata": {
      "S": "Patient with pelvic 'butterfly' bruising and inability to void.",
      "H": "Excellence in physical exam: Blood at the meatus is the most sensitive sign of urethral injury.",
      "A": "Identify the 'membranous urethra' as the most common site of injury in pelvic fractures.",
      "R": "Surgical board favorite for 'next step' questions.",
      "P": "Perform RUG; if extravasation is seen, consult urology for suprapubic tube."
    },
    "id": 1661,
    "_src_file": "trauma.js"
  },
  {
    "id": 517,
    "specialty": "Trauma",
    "topic": "Comprhensive Surgery Revision conv.docx",
    "question": "A 24-year-old woman presents to the emergency room with a dislocated knee. In transferring the patient from stretcher to examining table, the knee is spontaneously reduced. Physical examination reveals no palpable or ―Dopplerable‖ pulses in the foot on the affected side and booming pulses in the foot on the nonaffected side. Proper treatment would include which of the following?",
    "options": {
      "B": "Magnetic resonance imaging (MRI) of the affected leg.",
      "D": "Emergent transfer to the operating room for exploration of the popliteal artery.",
      "E": "Immobilization of the knee with gentle warming of the extremity and elevation."
    },
    "answer": "D",
    "explanation": {
      "correct": "The critical finding here is the absence of palpable or Dopplerable pulses in the foot despite a spontaneously reduced knee dislocation. This strongly suggests injury to the popliteal artery, which is highly susceptible to intimal injury, thrombosis, or even transection during knee dislocation. Prompt recognition and intervention are paramount to prevent irreversible ischemic damage and potential limb loss.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "D",
      "set_the_stage": "This question presents a classic surgical emergency: a dislocated knee with associated vascular compromise. The key takeaway is the immediate threat to limb viability posed by absent distal pulses after a knee dislocation, even if spontaneously reduced.",
      "highlight_excellence": "The critical finding here is the absence of palpable or Dopplerable pulses in the foot despite a spontaneously reduced knee dislocation. This strongly suggests injury to the popliteal artery, which is highly susceptible to intimal injury, thrombosis, or even transection during knee dislocation. Prompt recognition and intervention are paramount to prevent irreversible ischemic damage and potential limb loss.",
      "address_gaps": "Option B (MRI) is incorrect because it is time-consuming and not the initial management for an acute vascular emergency. While MRI can be useful for evaluating ligamentous injuries later, it delays definitive vascular assessment and intervention. Option E (Immobilization, warming, elevation) is dangerously inadequate. Gentle warming can worsen ischemia by increasing metabolic demand in an already compromised limb, and while immobilization is necessary, it does not address the underlying vascular injury. The absence of pulses mandates immediate surgical exploration.",
      "review_guidelines": "In any patient with a knee dislocation, especially one with associated neurovascular deficits (diminished or absent pulses, paresthesias, motor deficits), vascular integrity must be assessed urgently. A high index of suspicion for popliteal artery injury is warranted. If pulses are absent or significantly diminished, emergent vascular exploration and repair are indicated, even if the dislocation has spontaneously reduced. Compartment syndrome should also be a concern in these patients.",
      "plan": "For any patient presenting with knee dislocation and absent distal pulses, the immediate plan is emergent transfer to the operating room for vascular exploration. This allows for direct visualization of the popliteal artery, assessment for injury, and prompt repair if necessary. Definitive management of ligamentous injuries can be addressed once limb viability is secured."
    },
    "guideline": "In any patient with a knee dislocation, especially one with associated neurovascular deficits (diminished or absent pulses, paresthesias, motor deficits), vascular integrity must be assessed urgently. A high index of suspicion for popliteal artery injury is warranted. If pulses are absent or significantly diminished, emergent vascular exploration and repair are indicated, even if the dislocation has spontaneously reduced. Compartment syndrome should also be a concern in these patients.",
    "takeaway": "PLAN: For any patient presenting with knee dislocation and absent distal pulses, the immediate plan is emergent transfer to the operating room for vascular exploration. This allows for direct visualization of the popliteal artery, assessment for injury, and prompt repair if necessary. Definitive management of ligamentous injuries can be addressed once limb viability is secured.",
    "_src_file": "trauma.js"
  },
  {
    "id": 510,
    "specialty": "Trauma",
    "topic": "rush.docx",
    "question": "With regard to normal hemostasis, which of the following statements is true?",
    "options": {
      "B": "Platelet adhesion is mediated by fibrin monomers.",
      "D": "Heparin inhibits ADP-stimulated platelet aggregation.",
      "E": "A prolonged bleeding time may be due to thrombocyto penia, a qualitative platelet defect, or reduced amounts of vWF."
    },
    "answer": "E",
    "explanation": {
      "correct": "Option E is the high-yield, clinically relevant statement. A prolonged bleeding time is a direct indicator of impaired primary hemostasis. Thrombocytopenia (low platelet count), qualitative platelet defects (e.g., Glanzmann's thrombasthenia, Bernard-Soulier syndrome), and von Willebrand disease (vWD) are the classic triad of causes for a prolonged bleeding time. Recognizing this association is crucial for pre-operative assessment and management of bleeding disorders.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "E",
      "set_the_stage": "This question probes fundamental knowledge of hemostasis, a critical process for surgical success and patient safety. Understanding the interplay of platelets, coagulation factors, and vascular integrity is paramount for any surgeon.",
      "highlight_excellence": "Option E is the high-yield, clinically relevant statement. A prolonged bleeding time is a direct indicator of impaired primary hemostasis. Thrombocytopenia (low platelet count), qualitative platelet defects (e.g., Glanzmann's thrombasthenia, Bernard-Soulier syndrome), and von Willebrand disease (vWD) are the classic triad of causes for a prolonged bleeding time. Recognizing this association is crucial for pre-operative assessment and management of bleeding disorders.",
      "address_gaps": "Options B and D are incorrect and represent common misconceptions. Option B is wrong because platelet adhesion to the subendothelium is primarily mediated by von Willebrand factor (vWF) binding to the glycoprotein Ib (GPIb) receptor on platelets. Fibrin monomers are involved in the secondary hemostasis (coagulation cascade) and clot stabilization, not initial platelet adhesion. Option D is incorrect because heparin is an anticoagulant that primarily works by potentiating antithrombin III, which inhibits thrombin and Factor Xa. While heparin can have some indirect effects on platelets, it does not directly inhibit ADP-stimulated platelet aggregation. ADP is a potent platelet agonist, and drugs like aspirin and clopidogrel target this pathway.",
      "review_guidelines": "When evaluating hemostasis questions, focus on the primary and secondary pathways. Primary hemostasis involves platelets and the vascular wall, leading to the formation of a platelet plug. Secondary hemostasis involves the coagulation cascade, leading to fibrin formation and clot stabilization. Clinical manifestations like bleeding time, PT, and PTT are direct correlates of these pathways.",
      "plan": "For future study, reinforce the mechanisms of platelet adhesion and aggregation, the roles of key factors like vWF and fibrinogen, and the specific targets of common anticoagulants and antiplatelet agents. Practice associating clinical findings (e.g., prolonged bleeding time, PT, PTT) with specific hemostatic defects."
    },
    "guideline": "When evaluating hemostasis questions, focus on the primary and secondary pathways. Primary hemostasis involves platelets and the vascular wall, leading to the formation of a platelet plug. Secondary hemostasis involves the coagulation cascade, leading to fibrin formation and clot stabilization. Clinical manifestations like bleeding time, PT, and PTT are direct correlates of these pathways.",
    "takeaway": "PLAN: For future study, reinforce the mechanisms of platelet adhesion and aggregation, the roles of key factors like vWF and fibrinogen, and the specific targets of common anticoagulants and antiplatelet agents. Practice associating clinical findings (e.g., prolonged bleeding time, PT, PTT) with specific hemostatic defects.",
    "_src_file": "trauma.js"
  },
  {
    "id": 503,
    "specialty": "Trauma",
    "topic": "rush.docx",
    "question": "Which of the following statements regarding the role of collagen in wound healing is true?",
    "options": {
      "D": "Tensile strength of the wound increases gradually for up to 2 years after injury; however, it generally reaches a level of only about 80% of that of uninjured tissue.",
      "E": "Tensile strength is the force necessary to reopen a wound."
    },
    "answer": "D",
    "explanation": {
      "correct": "Option D correctly describes the gradual increase in tensile strength of scar tissue following injury. This is a key characteristic of collagen deposition during wound repair. The timeframe (up to 2 years) and the approximate 80% strength comparison to uninjured tissue are clinically relevant and reflect the reality of scar formation. It’s important to note that scar tissue, while functional, is inherently weaker than native tissue.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "D",
      "set_the_stage": "This question assesses understanding of a fundamental aspect of wound healing – the role of collagen. Collagen is the primary structural protein responsible for wound strength and integrity. Let’s analyze the options to determine the most accurate statement.",
      "highlight_excellence": "Option D correctly describes the gradual increase in tensile strength of scar tissue following injury. This is a key characteristic of collagen deposition during wound repair. The timeframe (up to 2 years) and the approximate 80% strength comparison to uninjured tissue are clinically relevant and reflect the reality of scar formation. It’s important to note that scar tissue, while functional, is inherently weaker than native tissue.",
      "address_gaps": "Option E is incorrect and demonstrates a misunderstanding of tensile strength. Tensile strength refers to the force required to *stretch* or tear a material, not the force needed to reopen a wound. While reopening a wound does involve force, defining tensile strength in this context is inaccurate.  The other options are either overly simplistic or misleading.",
      "review_guidelines": "1. **Collagen Synthesis:** Reinforce the understanding that collagen is the primary structural component of scar tissue. 2. **Time Course of Healing:** Emphasize the protracted nature of collagen deposition and the resulting reduction in tensile strength compared to uninjured tissue. 3. **Tensile Strength Definition:** Clearly define tensile strength as the force required to stretch or tear a material, differentiating it from the force required to reopen a wound. 4. **Scar Tissue Properties:** Discuss the inherent differences in mechanical properties between scar tissue and native tissue – weaker, less elastic, and often less organized.",
      "plan": "I recommend a focused review of the cellular and molecular mechanisms of wound healing, with particular attention to the role of fibroblasts and collagen synthesis. Case studies illustrating the progression of scar tissue formation and the impact of tensile strength on functional outcomes would be beneficial. Further, a discussion on factors that influence scar quality (e.g., tension, infection, diabetes) is warranted."
    },
    "guideline": "1. **Collagen Synthesis:** Reinforce the understanding that collagen is the primary structural component of scar tissue. 2. **Time Course of Healing:** Emphasize the protracted nature of collagen deposition and the resulting reduction in tensile strength compared to uninjured tissue. 3. **Tensile Strength Definition:** Clearly define tensile strength as the force required to stretch or tear a material, differentiating it from the force required to reopen a wound. 4. **Scar Tissue Properties:** Discuss the inherent differences in mechanical properties between scar tissue and native tissue – weaker, less elastic, and often less organized.",
    "takeaway": "PLAN: I recommend a focused review of the cellular and molecular mechanisms of wound healing, with particular attention to the role of fibroblasts and collagen synthesis. Case studies illustrating the progression of scar tissue formation and the impact of tensile strength on functional outcomes would be beneficial. Further, a discussion on factors that influence scar quality (e.g., tension, infection, diabetes) is warranted.",
    "_src_file": "trauma.js"
  },
  {
    "id": 501,
    "specialty": "Trauma",
    "topic": "rush.docx",
    "question": "Which of the following is true regarding the role of TNF-α release in the inflammatory response?",
    "options": {
      "A": "It can be effectively blocked by anti–TNF-α antibodies to halt systemic inflammatory response syndrome (SIRS).",
      "E": "It is always deleterious."
    },
    "answer": "A",
    "explanation": {
      "correct": "The correct answer (A) accurately reflects the established mechanism of action for anti-TNF-α antibodies. TNF-α is a central driver of SIRS, and neutralizing it with these biologics is a cornerstone of treatment. The other options are clinically inaccurate.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "A",
      "set_the_stage": "This question assesses understanding of a key inflammatory mediator – TNF-α – and its clinical significance. It’s a common question tested in immunology and inflammatory disease courses.",
      "highlight_excellence": "The correct answer (A) accurately reflects the established mechanism of action for anti-TNF-α antibodies. TNF-α is a central driver of SIRS, and neutralizing it with these biologics is a cornerstone of treatment. The other options are clinically inaccurate.",
      "address_gaps": "The question’s phrasing could be slightly improved to emphasize the *systemic* inflammatory response. While TNF-α *can* be deleterious, the core concept being tested is its role in SIRS and the therapeutic targeting of this pathway.  The provided answer key (D) is incorrect.",
      "review_guidelines": "1. **TNF-α’s Role:** Reinforce the understanding that TNF-α is a potent pro-inflammatory cytokine involved in the pathogenesis of SIRS, sepsis, rheumatoid arthritis, and inflammatory bowel disease. 2. **Anti-TNF-α Therapy:** Review the mechanism of action of anti-TNF-α antibodies – they directly neutralize TNF-α, thereby interrupting the inflammatory cascade. 3. **SIRS Pathophysiology:**  Reiterate the key components of SIRS: widespread inflammation, endothelial dysfunction, and leukocyte activation – all driven, in part, by TNF-α. 4. **Clinical Implications:** Discuss the clinical use of anti-TNF-α agents in various inflammatory conditions and their efficacy in reducing inflammation and improving outcomes.",
      "plan": "I would recommend a focused review of cytokine biology, specifically concentrating on TNF-α.  Case studies illustrating the role of TNF-α in sepsis and inflammatory arthritis would be beneficial.  A deeper dive into the mechanisms of anti-TNF-α antibody action is also warranted."
    },
    "guideline": "1. **TNF-α’s Role:** Reinforce the understanding that TNF-α is a potent pro-inflammatory cytokine involved in the pathogenesis of SIRS, sepsis, rheumatoid arthritis, and inflammatory bowel disease. 2. **Anti-TNF-α Therapy:** Review the mechanism of action of anti-TNF-α antibodies – they directly neutralize TNF-α, thereby interrupting the inflammatory cascade. 3. **SIRS Pathophysiology:**  Reiterate the key components of SIRS: widespread inflammation, endothelial dysfunction, and leukocyte activation – all driven, in part, by TNF-α. 4. **Clinical Implications:** Discuss the clinical use of anti-TNF-α agents in various inflammatory conditions and their efficacy in reducing inflammation and improving outcomes.",
    "takeaway": "PLAN: I would recommend a focused review of cytokine biology, specifically concentrating on TNF-α.  Case studies illustrating the role of TNF-α in sepsis and inflammatory arthritis would be beneficial.  A deeper dive into the mechanisms of anti-TNF-α antibody action is also warranted.",
    "_src_file": "trauma.js"
  },
  {
    "id": 513,
    "specialty": "Trauma",
    "topic": "rush.docx",
    "question": "A 68-year-old female has been admitted to the emergency room with recurrent Clostridium difficile colitis. Her first episode of",
    "options": {
      "C": "Oral vancomycin 125 mg every 6 h for 10 to 14 days",
      "A": "Oral metronidazole 500 mg every 8 h for 10 to 14 days",
      "E": "IV vancomycin 125 mg every 6 h for 10 to 14 days"
    },
    "answer": "E",
    "explanation": {
      "correct": "The correct answer (E) – IV vancomycin – reflects current best practice. Oral vancomycin is often ineffective in recurrent CDI due to poor absorption and limited colonic concentrations. Metronidazole is a less effective agent against *C. difficile* and should be avoided as first-line treatment. The ‘D’ answer is incorrect and represents an outdated approach.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "E",
      "set_the_stage": "This patient presents with recurrent *Clostridium difficile* colitis, a common and challenging condition. The key here is understanding the optimal antibiotic approach for *C. difficile* infection, particularly in recurrent cases.",
      "highlight_excellence": "The correct answer (E) – IV vancomycin – reflects current best practice. Oral vancomycin is often ineffective in recurrent CDI due to poor absorption and limited colonic concentrations. Metronidazole is a less effective agent against *C. difficile* and should be avoided as first-line treatment. The ‘D’ answer is incorrect and represents an outdated approach.",
      "address_gaps": "The question lacks crucial context regarding the patient’s prior treatment and the severity of the recurrence. A more detailed history would have helped determine if prior antibiotic use contributed to the recurrence. Furthermore, the question doesn’t address the need for fecal microbiota transplantation (FMT) which is increasingly considered for recurrent CDI.",
      "review_guidelines": "1. **Antibiotic Choice:** Vancomycin (IV or oral) is the mainstay of treatment for *C. difficile* infection. Metronidazole is generally ineffective. 2. **Recurrent CDI:** Recurrent infections require longer courses of vancomycin or, ideally, FMT. 3. **Route of Administration:** IV vancomycin provides higher colonic concentrations, crucial for eradication in recurrent cases. 4. **Monitoring:** Closely monitor for side effects of vancomycin (e.g., nephrotoxicity).",
      "plan": "1. Initiate IV vancomycin 125 mg every 12 hours for 14 days. 2. Consider fecal microbiota transplantation (FMT) if the infection persists or recurs despite vancomycin. 3. Assess for potential contributing factors (e.g., recent antibiotic use, immunosuppression). 4. Monitor renal function and electrolyte balance closely during vancomycin therapy."
    },
    "guideline": "1. **Antibiotic Choice:** Vancomycin (IV or oral) is the mainstay of treatment for *C. difficile* infection. Metronidazole is generally ineffective. 2. **Recurrent CDI:** Recurrent infections require longer courses of vancomycin or, ideally, FMT. 3. **Route of Administration:** IV vancomycin provides higher colonic concentrations, crucial for eradication in recurrent cases. 4. **Monitoring:** Closely monitor for side effects of vancomycin (e.g., nephrotoxicity).",
    "takeaway": "PLAN: 1. Initiate IV vancomycin 125 mg every 12 hours for 14 days. 2. Consider fecal microbiota transplantation (FMT) if the infection persists or recurs despite vancomycin. 3. Assess for potential contributing factors (e.g., recent antibiotic use, immunosuppression). 4. Monitor renal function and electrolyte balance closely during vancomycin therapy.",
    "_src_file": "trauma.js"
  },
  {
    "id": 516,
    "specialty": "Trauma",
    "topic": "Comprhensive Surgery Revision conv.docx",
    "question": "Which of the following is/are true of blunt renal trauma?",
    "options": {
      "B": "Blunt renal trauma with urinary extravasation always requires surgical exploration.",
      "D": "Blunt renal trauma requires exploration only when the patient exhibits hemodynamic instability.",
      "E": "Any kidney fractured by blunt renal trauma must be explored."
    },
    "answer": "D",
    "explanation": {
      "correct": "The correct answer (D) reflects current best practice. Recognizing hemodynamic instability as the primary driver for exploration is paramount. The other options are either overly aggressive or inaccurate.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "D",
      "set_the_stage": "This question assesses understanding of blunt renal trauma management, a critical area in emergency surgery. The key here is differentiating between indications for exploration based on severity and potential for significant hemorrhage.",
      "highlight_excellence": "The correct answer (D) reflects current best practice. Recognizing hemodynamic instability as the primary driver for exploration is paramount. The other options are either overly aggressive or inaccurate.",
      "address_gaps": "The major gap is the overemphasis on *always* requiring surgical exploration. While exploration is often necessary, it’s not automatic with every case of blunt renal trauma. The patient’s clinical status – specifically, hemodynamic stability – dictates the initial management strategy. Option B is incorrect because urinary extravasation alone doesn’t always necessitate surgery; it’s the *combination* of extravasation and instability that triggers exploration. Option E is also incorrect as fracture alone doesn’t always require exploration, it’s the potential for associated injury that matters.",
      "review_guidelines": "1. **Hemodynamic Stability:** This is the *sine qua non* of blunt renal trauma management. Serial vital signs, urine output, and lactate levels are crucial. 2. **Imaging:** CT scans are the gold standard for assessing renal trauma, identifying fractures, hematomas, and vascular injuries. 3. **Grading Systems:** Utilize the Abbreviated Injury Scale (AIS) for renal trauma to standardize assessment and guide management. 4. **Surgical Indications:** Exploration is indicated for: a) Hemodynamic instability despite initial resuscitation. b) Significant hematoma (> 50% of renal volume). c) Evidence of active bleeding. d) Suspicion of vascular injury. e) Persistent pain or tenderness.",
      "plan": "Further education should focus on the hemodynamic assessment and interpretation of CT scans. Case-based discussions of various blunt renal trauma scenarios are highly recommended. Consider incorporating simulation exercises to practice resuscitation and exploration techniques. Reinforce the concept that exploration is a *therapeutic* decision, not a default one."
    },
    "guideline": "1. **Hemodynamic Stability:** This is the *sine qua non* of blunt renal trauma management. Serial vital signs, urine output, and lactate levels are crucial. 2. **Imaging:** CT scans are the gold standard for assessing renal trauma, identifying fractures, hematomas, and vascular injuries. 3. **Grading Systems:** Utilize the Abbreviated Injury Scale (AIS) for renal trauma to standardize assessment and guide management. 4. **Surgical Indications:** Exploration is indicated for: a) Hemodynamic instability despite initial resuscitation. b) Significant hematoma (> 50% of renal volume). c) Evidence of active bleeding. d) Suspicion of vascular injury. e) Persistent pain or tenderness.",
    "takeaway": "PLAN: Further education should focus on the hemodynamic assessment and interpretation of CT scans. Case-based discussions of various blunt renal trauma scenarios are highly recommended. Consider incorporating simulation exercises to practice resuscitation and exploration techniques. Reinforce the concept that exploration is a *therapeutic* decision, not a default one.",
    "_src_file": "trauma.js"
  },
  {
    "id": 508,
    "specialty": "Trauma",
    "topic": "rush.docx",
    "question": "Which of the following is most clearly diagnostic for lower extremity DVT in an ICU patient?",
    "options": {
      "B": "Venous duplex study with incompressibility and sluggish flow through the great saphenous vein below the knee",
      "E": "Unilateral leg swelling"
    },
    "answer": "B",
    "explanation": {
      "correct": "The correct answer (B) – venous duplex study with incompressibility and sluggish flow through the great saphenous vein below the knee – represents the *definitive* diagnostic criterion. The presence of incompressibility and sluggish flow, particularly below the knee, is highly suggestive of a thrombus within the venous system. This is the key differentiator from simply unilateral leg swelling.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "B",
      "set_the_stage": "This question assesses understanding of the gold standard diagnostic tool for lower extremity DVT, particularly in the challenging setting of an ICU patient. The ICU environment often presents unique diagnostic hurdles due to patient instability, sedation, and limited access for invasive procedures.",
      "highlight_excellence": "The correct answer (B) – venous duplex study with incompressibility and sluggish flow through the great saphenous vein below the knee – represents the *definitive* diagnostic criterion. The presence of incompressibility and sluggish flow, particularly below the knee, is highly suggestive of a thrombus within the venous system. This is the key differentiator from simply unilateral leg swelling.",
      "address_gaps": "Option E, ‘Unilateral leg swelling,’ is a *nonspecific* finding. While swelling can be a symptom of DVT, it doesn’t confirm the diagnosis. It could be due to edema, compartment syndrome, or other causes. The duplex study provides objective evidence of venous obstruction.",
      "review_guidelines": "1. **Duplex Ultrasound:** This is the *initial* diagnostic test of choice for suspected DVT. Key findings include: a) Incompressibility of the vein during compression b) Slow or absent venous blood flow, especially below the knee. c) Visualization of a thrombus. 2. **Clinical Context:** Always consider the patient’s clinical presentation (e.g., risk factors for DVT) alongside the ultrasound findings. 3. **Deep Vein Thrombosis (DVT) vs. Superficial Vein Thrombosis (SVT):** Duplex studies can differentiate between deep and superficial venous thrombosis. 4. **Contraindications:** Be aware of contraindications to ultrasound (e.g., metallic implants).",
      "plan": "1. **Immediate Duplex Ultrasound:** In an ICU patient suspected of DVT, a venous duplex study should be performed *immediately* to confirm or rule out the diagnosis. 2. **Further Investigation:** If the duplex study is positive, further investigation (e.g., CT venogram, MRI venogram) may be warranted to assess the extent of the thrombosis and rule out alternative diagnoses. 3. **Anticoagulation:** Initiate anticoagulation therapy based on the clinical suspicion and diagnostic findings.  Close monitoring of the patient's response to anticoagulation is crucial."
    },
    "guideline": "1. **Duplex Ultrasound:** This is the *initial* diagnostic test of choice for suspected DVT. Key findings include: a) Incompressibility of the vein during compression b) Slow or absent venous blood flow, especially below the knee. c) Visualization of a thrombus. 2. **Clinical Context:** Always consider the patient’s clinical presentation (e.g., risk factors for DVT) alongside the ultrasound findings. 3. **Deep Vein Thrombosis (DVT) vs. Superficial Vein Thrombosis (SVT):** Duplex studies can differentiate between deep and superficial venous thrombosis. 4. **Contraindications:** Be aware of contraindications to ultrasound (e.g., metallic implants).",
    "takeaway": "PLAN: 1. **Immediate Duplex Ultrasound:** In an ICU patient suspected of DVT, a venous duplex study should be performed *immediately* to confirm or rule out the diagnosis. 2. **Further Investigation:** If the duplex study is positive, further investigation (e.g., CT venogram, MRI venogram) may be warranted to assess the extent of the thrombosis and rule out alternative diagnoses. 3. **Anticoagulation:** Initiate anticoagulation therapy based on the clinical suspicion and diagnostic findings.  Close monitoring of the patient's response to anticoagulation is crucial.",
    "_src_file": "trauma.js"
  },
  {
    "id": 515,
    "specialty": "Trauma",
    "topic": "Comprhensive Surgery Revision conv.docx",
    "question": "Which of the following is most reliable for confirming the occurrence of a significant esophageal caustic injury?",
    "options": {
      "B": "Physical examination of the patient.",
      "D": "Endoscopy."
    },
    "answer": "D",
    "explanation": {
      "correct": "The correct answer, endoscopy, is the gold standard. Esophageal injuries from caustic substances often present with subtle mucosal changes that are only detectable with direct visualization and biopsy via endoscopy. Physical examination alone is unreliable for assessing the extent and severity of the damage. While endoscopy is crucial, it’s the *most* reliable for confirmation.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "D",
      "set_the_stage": "This question assesses understanding of the diagnostic approach to esophageal caustic injury, a critical surgical concern following ingestion of corrosive substances. The options present common diagnostic methods, and the key is discerning the *most* reliable.",
      "highlight_excellence": "The correct answer, endoscopy, is the gold standard. Esophageal injuries from caustic substances often present with subtle mucosal changes that are only detectable with direct visualization and biopsy via endoscopy. Physical examination alone is unreliable for assessing the extent and severity of the damage. While endoscopy is crucial, it’s the *most* reliable for confirmation.",
      "address_gaps": "The incorrect answer, ‘Physical examination of the patient,’ highlights a common misconception. While vital for initial assessment (assessing airway, swallowing, pain), it’s inherently limited in visualizing the esophageal mucosa, particularly in the presence of edema and sloughing. Option ‘D’ (Endoscopy) is the most sensitive and specific test for confirming and grading caustic injury. It allows for direct visualization, biopsy for histologic confirmation of necrosis, and assessment of the depth and extent of the injury.",
      "review_guidelines": "1. **Esophageal Caustic Injury:** Understand the pathophysiology – rapid mucosal destruction, edema, and potential for perforation. 2. **Diagnostic Approach:** Prioritize endoscopy for confirmation and grading. 3. **Grading:** Utilize established grading systems (e.g., McFarland) based on endoscopic findings. 4. **Management:** Surgical intervention (e.g., esophageal dilation, reconstruction) is often required depending on the severity and location of the injury. 5. **Biopsy:** Essential for confirming necrosis and ruling out other causes of esophageal injury.",
      "plan": "Further education should focus on the endoscopic findings associated with caustic injury (e.g., granular appearance, ulceration, strictures) and the importance of prompt endoscopy for timely intervention. Consider incorporating a brief endoscopic simulation or case study to reinforce the concept."
    },
    "guideline": "1. **Esophageal Caustic Injury:** Understand the pathophysiology – rapid mucosal destruction, edema, and potential for perforation. 2. **Diagnostic Approach:** Prioritize endoscopy for confirmation and grading. 3. **Grading:** Utilize established grading systems (e.g., McFarland) based on endoscopic findings. 4. **Management:** Surgical intervention (e.g., esophageal dilation, reconstruction) is often required depending on the severity and location of the injury. 5. **Biopsy:** Essential for confirming necrosis and ruling out other causes of esophageal injury.",
    "takeaway": "PLAN: Further education should focus on the endoscopic findings associated with caustic injury (e.g., granular appearance, ulceration, strictures) and the importance of prompt endoscopy for timely intervention. Consider incorporating a brief endoscopic simulation or case study to reinforce the concept.",
    "_src_file": "trauma.js"
  },
  {
    "id": 519,
    "specialty": "Trauma",
    "topic": "Comprhensive Surgery Revision conv.docx",
    "question": "Which of the following statements about maxillofacial trauma is/are false?",
    "options": {
      "A": "Asphyxia due to upper airway obstruction is the major cause of death from facial injuries.",
      "C": "The Le Fort II fracture includes a horizontal fracture of the maxilla along with nasal bone fracture.",
      "D": "Loss of upward gaze may indicate either an orbital floor or orbital roof fracture."
    },
    "answer": "C",
    "explanation": {
      "correct": "The correct answer (C) accurately describes the Le Fort II fracture – a critical classification in facial trauma. Recognizing the horizontal maxillary fracture and associated nasal bone involvement is paramount for surgical planning and management. The other options presented are clinically accurate.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "C",
      "set_the_stage": "This question assesses understanding of key fracture classifications and anatomical considerations in maxillofacial trauma. It’s a common area of confusion for trainees.",
      "highlight_excellence": "The correct answer (C) accurately describes the Le Fort II fracture – a critical classification in facial trauma. Recognizing the horizontal maxillary fracture and associated nasal bone involvement is paramount for surgical planning and management. The other options presented are clinically accurate.",
      "address_gaps": "The incorrect answer (B) – ‘Asphyxia due to upper airway obstruction is the major cause of death from facial injuries’ – is a significant oversimplification and a common misconception. While airway compromise is a serious concern, it’s rarely the *primary* cause of death. Mortality in maxillofacial trauma is far more frequently due to hemorrhage, vascular injury, or neurological complications. The Le Fort II description is also correct; it involves a horizontal maxillary fracture and disruption of the nasal support.",
      "review_guidelines": "1. **Le Fort Fractures:** Thoroughly review the classification of Le Fort fractures (I, II, and III) – their definitions, radiographic findings, and surgical implications. Understand the specific anatomical disruptions associated with each. 2. **Orbital Fractures:**  Recognize the potential for upward gaze limitation as a sign of orbital roof fractures, and also the possibility of orbital floor fractures causing different presentations. 3. **Hemorrhage Management:** Reinforce the importance of rapid hemorrhage control as the leading cause of mortality in facial trauma. 4. **Radiographic Interpretation:** Develop a keen eye for identifying fracture patterns on radiographs – particularly the nasal spine, orbital rims, and maxillary fractures.",
      "plan": "I recommend a focused review of Le Fort fracture classification, orbital fracture management, and the pathophysiology of hemorrhage in maxillofacial trauma. Consider a case-based approach, analyzing radiographs and surgical reports to solidify understanding. Further, practice identifying fracture patterns on simulated radiographs."
    },
    "guideline": "1. **Le Fort Fractures:** Thoroughly review the classification of Le Fort fractures (I, II, and III) – their definitions, radiographic findings, and surgical implications. Understand the specific anatomical disruptions associated with each. 2. **Orbital Fractures:**  Recognize the potential for upward gaze limitation as a sign of orbital roof fractures, and also the possibility of orbital floor fractures causing different presentations. 3. **Hemorrhage Management:** Reinforce the importance of rapid hemorrhage control as the leading cause of mortality in facial trauma. 4. **Radiographic Interpretation:** Develop a keen eye for identifying fracture patterns on radiographs – particularly the nasal spine, orbital rims, and maxillary fractures.",
    "takeaway": "PLAN: I recommend a focused review of Le Fort fracture classification, orbital fracture management, and the pathophysiology of hemorrhage in maxillofacial trauma. Consider a case-based approach, analyzing radiographs and surgical reports to solidify understanding. Further, practice identifying fracture patterns on simulated radiographs.",
    "_src_file": "trauma.js"
  },
  {
    "id": 525,
    "specialty": "Trauma",
    "topic": "Comprhensive Surgery Revision conv.docx",
    "question": "Characteristics of the hypermetabolic response to burn injury include:",
    "options": {
      "A": "Elevation of core temperature, skin temperature, and core-to-skin heat transfer.",
      "C": "A marked increase of blood flow to the burn wound.",
      "E": "Oxidation of stored lipid as the major source of metabolic energy."
    },
    "answer": "A",
    "explanation": {
      "correct": "The selection of ‘Elevation of core temperature, skin temperature, and core-to-skin heat transfer’ as the correct answer is entirely accurate. This represents the fundamental hallmark of the hypermetabolic response – a dramatic increase in heat production and dissipation, attempting to maintain normothermia. The other options, while related to burn injury physiology, are not the *defining* characteristics of the hypermetabolic response itself.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "A",
      "set_the_stage": "This question assesses understanding of the hypermetabolic response – a critical physiological reaction to burn injury. This response is characterized by a significant increase in metabolic demand, driving a cascade of compensatory mechanisms.",
      "highlight_excellence": "The selection of ‘Elevation of core temperature, skin temperature, and core-to-skin heat transfer’ as the correct answer is entirely accurate. This represents the fundamental hallmark of the hypermetabolic response – a dramatic increase in heat production and dissipation, attempting to maintain normothermia. The other options, while related to burn injury physiology, are not the *defining* characteristics of the hypermetabolic response itself.",
      "address_gaps": "The question could benefit from more explicit framing. While ‘A’ is correct, it doesn’t fully articulate *why* these changes occur. A stronger question might include a prompt asking for the underlying mechanism driving these changes. Furthermore, options C and E are related but not the core definition. Students need a deeper understanding of the thermoregulatory drive and the shift in energy metabolism.",
      "review_guidelines": "1. **Understand Thermoregulation:** Reinforce the body’s primary mechanism for maintaining core temperature – primarily through cutaneous vasodilation and increased heat production. 2. **Hypermetabolic Response Definition:** Clearly define the hypermetabolic response as a state of dramatically increased metabolic rate and heat production in response to burn injury. 3. **Key Components:**  Focus on the interconnectedness of: (a) Increased metabolic rate (leading to heat production), (b) Cutaneous vasodilation (increasing heat dissipation), and (c) Core-to-skin heat transfer. 4. **Lipid Oxidation:** Acknowledge lipid oxidation as a *result* of the hypermetabolic state, not a defining characteristic of the response itself.  It’s a consequence of the increased energy demand.",
      "plan": "I recommend a review of burn pathophysiology, specifically focusing on the hypothalamic response to noxious stimuli, the role of prostaglandins in vasodilation, and the shift from carbohydrate to lipid metabolism during critical illness. Case studies illustrating the clinical presentation of hypermetabolic response (e.g., flushed skin, elevated heart rate, rapid core temperature rise) would be beneficial. Further practice questions should test the ability to differentiate between the various compensatory mechanisms activated during burn injury."
    },
    "guideline": "1. **Understand Thermoregulation:** Reinforce the body’s primary mechanism for maintaining core temperature – primarily through cutaneous vasodilation and increased heat production. 2. **Hypermetabolic Response Definition:** Clearly define the hypermetabolic response as a state of dramatically increased metabolic rate and heat production in response to burn injury. 3. **Key Components:**  Focus on the interconnectedness of: (a) Increased metabolic rate (leading to heat production), (b) Cutaneous vasodilation (increasing heat dissipation), and (c) Core-to-skin heat transfer. 4. **Lipid Oxidation:** Acknowledge lipid oxidation as a *result* of the hypermetabolic state, not a defining characteristic of the response itself.  It’s a consequence of the increased energy demand.",
    "takeaway": "PLAN: I recommend a review of burn pathophysiology, specifically focusing on the hypothalamic response to noxious stimuli, the role of prostaglandins in vasodilation, and the shift from carbohydrate to lipid metabolism during critical illness. Case studies illustrating the clinical presentation of hypermetabolic response (e.g., flushed skin, elevated heart rate, rapid core temperature rise) would be beneficial. Further practice questions should test the ability to differentiate between the various compensatory mechanisms activated during burn injury.",
    "_src_file": "trauma.js"
  },
  {
    "id": 522,
    "specialty": "Trauma",
    "topic": "Comprhensive Surgery Revision conv.docx",
    "question": "The clinical and histologic signs of invasive burn wound infection include which of the following?",
    "options": {
      "D": "The presence of micro-organisms in the unburned subcutaneous tissue in a burn wound biopsy specimen.",
      "E": "Perineural and perivascular microbial migration through the eschar with proliferation of micro-organisms in the subeschar space."
    },
    "answer": "E",
    "explanation": {
      "correct": "The correct answer (E) accurately reflects the key histologic and clinical findings. The presence of microbial migration *through the eschar* and proliferation in the subeschar space is the hallmark of IBWI. This distinguishes it from simple superficial infections. The inclusion of perineural and perivascular involvement is crucial, as these are common pathways for bacterial dissemination in burn wounds.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "E",
      "set_the_stage": "This question assesses understanding of the pathophysiology and diagnostic criteria for invasive burn wound infections (IBWIs). IBWIs are a significant cause of morbidity and mortality following burns, often stemming from the compromised immune response and altered wound healing environment.",
      "highlight_excellence": "The correct answer (E) accurately reflects the key histologic and clinical findings. The presence of microbial migration *through the eschar* and proliferation in the subeschar space is the hallmark of IBWI. This distinguishes it from simple superficial infections. The inclusion of perineural and perivascular involvement is crucial, as these are common pathways for bacterial dissemination in burn wounds.",
      "address_gaps": "The incorrect answer (D) is a common misconception. While microbial presence in the unburned subcutaneous tissue can occur in *any* wound, it’s not specific to IBWI. The defining feature is the *pathological* migration and proliferation *within* the burn tissue itself – the eschar and surrounding areas. Option A is a red herring.",
      "review_guidelines": "1. **Eschar Assessment:** Thoroughly evaluate the burn wound for signs of eschar breakdown, inflammation, and cellular infiltrate. 2. **Histological Examination:** Biopsy specimens should be examined for microbial migration, neutrophil predominance, and evidence of tissue destruction. 3. **Microbial Identification:** Culture and identify the causative organism(s). 4. **Deep Tissue Involvement:** Recognize that IBWI often extends beyond the superficial layers of the burn wound. 5. **Immunocompromised Patients:** Patients with underlying immune deficiencies are at higher risk for IBWI.",
      "plan": "I would recommend a focused review of burn wound pathophysiology, specifically addressing the mechanisms of bacterial dissemination and the altered inflammatory response in burn wounds.  Case studies illustrating the histologic features of IBWI are invaluable. Further, emphasize the importance of early recognition and aggressive treatment, including source control, broad-spectrum antibiotics, and wound care."
    },
    "guideline": "1. **Eschar Assessment:** Thoroughly evaluate the burn wound for signs of eschar breakdown, inflammation, and cellular infiltrate. 2. **Histological Examination:** Biopsy specimens should be examined for microbial migration, neutrophil predominance, and evidence of tissue destruction. 3. **Microbial Identification:** Culture and identify the causative organism(s). 4. **Deep Tissue Involvement:** Recognize that IBWI often extends beyond the superficial layers of the burn wound. 5. **Immunocompromised Patients:** Patients with underlying immune deficiencies are at higher risk for IBWI.",
    "takeaway": "PLAN: I would recommend a focused review of burn wound pathophysiology, specifically addressing the mechanisms of bacterial dissemination and the altered inflammatory response in burn wounds.  Case studies illustrating the histologic features of IBWI are invaluable. Further, emphasize the importance of early recognition and aggressive treatment, including source control, broad-spectrum antibiotics, and wound care.",
    "_src_file": "trauma.js"
  },
  {
    "id": 506,
    "specialty": "Trauma",
    "topic": "rush.docx",
    "question": "Regarding polymorphonucleocytes (PMN) and macrophages, which statement is true?",
    "options": {
      "D": "M1 macrophages predominate in the proliferative phase.",
      "E": "Macrophages are phenotypically stable."
    },
    "answer": "Letter E: \"Macrophages are phenotypically stable.\"",
    "explanation": {
      "correct": "The correct answer (E) reflects a fundamental principle of macrophage biology. Macrophages, particularly in the context of acute inflammation and wound healing, exhibit a remarkable ability to shift between distinct activation states (M1 and M2) depending on the local microenvironment. However, *once* polarized, they maintain a dominant phenotype for a period, exhibiting a degree of phenotypic stability. This stability is crucial for the coordinated response and resolution of inflammation.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "Letter E: \"Macrophages are phenotypically stable.\"",
      "set_the_stage": "This question assesses understanding of macrophage polarization and its role in inflammation, a critical concept in surgical immunology and wound healing. The MCQ presents a common misconception regarding macrophage plasticity.",
      "highlight_excellence": "The correct answer (E) reflects a fundamental principle of macrophage biology. Macrophages, particularly in the context of acute inflammation and wound healing, exhibit a remarkable ability to shift between distinct activation states (M1 and M2) depending on the local microenvironment. However, *once* polarized, they maintain a dominant phenotype for a period, exhibiting a degree of phenotypic stability. This stability is crucial for the coordinated response and resolution of inflammation.",
      "address_gaps": "The incorrect answer (D) – ‘M1 macrophages predominate in the proliferative phase’ – is a simplification and often an overstatement. While M1 macrophages are initially dominant, the inflammatory response is dynamic. The proliferative phase sees a shift towards M2 macrophages, driven by factors like IL-4 and IL-10, which promote tissue repair and resolution. Furthermore, the concept of a purely ‘proliferative phase’ is an oversimplification of the complex, overlapping phases of wound healing.",
      "review_guidelines": "1. **Macrophage Polarization:** Reinforce understanding of M1 (pro-inflammatory, IFN-gamma) and M2 (anti-inflammatory, IL-4/IL-10) macrophage phenotypes. 2. **Dynamic Nature of Inflammation:** Emphasize that inflammatory responses are not static; they evolve through distinct phases with shifts in macrophage populations. 3. **Microenvironmental Influence:** Highlight the role of cytokines and growth factors in driving macrophage polarization. 4. **Wound Healing Phases:** Review the stages of wound healing (hemostasis, inflammation, proliferation, remodeling) and the corresponding macrophage roles.",
      "plan": "Implement a focused review of macrophage biology, including polarization mechanisms, cytokine signaling, and the temporal changes in macrophage populations during inflammation and wound healing. Consider using diagrams and flowcharts to illustrate the dynamic interplay between M1 and M2 macrophages. Incorporate case studies demonstrating how manipulating macrophage polarization can impact surgical outcomes (e.g., chronic wounds, infection control)."
    },
    "guideline": "1. **Macrophage Polarization:** Reinforce understanding of M1 (pro-inflammatory, IFN-gamma) and M2 (anti-inflammatory, IL-4/IL-10) macrophage phenotypes. 2. **Dynamic Nature of Inflammation:** Emphasize that inflammatory responses are not static; they evolve through distinct phases with shifts in macrophage populations. 3. **Microenvironmental Influence:** Highlight the role of cytokines and growth factors in driving macrophage polarization. 4. **Wound Healing Phases:** Review the stages of wound healing (hemostasis, inflammation, proliferation, remodeling) and the corresponding macrophage roles.",
    "takeaway": "PLAN: Implement a focused review of macrophage biology, including polarization mechanisms, cytokine signaling, and the temporal changes in macrophage populations during inflammation and wound healing. Consider using diagrams and flowcharts to illustrate the dynamic interplay between M1 and M2 macrophages. Incorporate case studies demonstrating how manipulating macrophage polarization can impact surgical outcomes (e.g., chronic wounds, infection control).",
    "_src_file": "trauma.js"
  }
]
]);
