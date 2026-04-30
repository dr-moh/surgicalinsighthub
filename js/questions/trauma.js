if (!window.QUESTIONS) window.QUESTIONS = [];
window.QUESTIONS.push(...[
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
    "id": 1652
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
    "id": 1653
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
    "id": 1654
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
    "id": 1655
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
    "id": 1656
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
    "id": 1657
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
    "id": 1658
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
    "id": 1659
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
    "id": 1660
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
    "id": 1661
  }
]);