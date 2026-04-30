if (!window.QUESTIONS) window.QUESTIONS = [];
window.QUESTIONS.push(...[
{
    "specialty": "Cardiothoracic Surgery",
    "topic": "Lung Cancer",
    "question": "A patient with a 2cm Non-Small Cell Lung Cancer (NSCLC) in the periphery of the right upper lobe has no evidence of nodal involvement or metastasis (T1bN0M0). What is the preferred surgical treatment?",
    "options": {
      "A": "Pneumonectomy",
      "B": "Lobectomy with mediastinal lymph node dissection",
      "C": "Wedge resection",
      "D": "Radiation therapy alone"
    },
    "answer": "B",
    "explanation": {
      "correct": "For Stage I NSCLC, lobectomy remains the gold standard. It provides a lower local recurrence rate compared to sublobar (wedge) resections. Mediastinal nodal staging is essential for accurate prognosis.",
      "A": "Too aggressive for a small peripheral tumor.",
      "B": "Standard of care for early-stage NSCLC.",
      "C": "Only for patients with poor pulmonary reserve.",
      "D": "Only if the patient is not a surgical candidate."
    },
    "guideline": "NCCN Guidelines: Non-Small Cell Lung Cancer",
    "takeaway": "Early NSCLC = Lobectomy + Nodal Dissection.",
    "sharp_metadata": {
      "S": "60-year-old smoker with incidental lung nodule found on screening CT.",
      "H": "Excellence in workup: PET/CT and Pulmonary Function Tests (PFTs) are required for all surgical candidates.",
      "A": "Identify the 'FEV1' and 'DLCO' as the key metrics to predict post-operative reserve.",
      "R": "Core thoracic surgical oncology.",
      "P": "Proceed to VATS (Video-Assisted Thoracoscopic Surgery) Lobectomy."
    },
    "id": 1672
  },
{
    "specialty": "Cardiothoracic Surgery",
    "topic": "Pleural Effusion",
    "question": "According to Light's Criteria, which of the following findings classifies a pleural effusion as an EXUDATE?",
    "options": {
      "A": "Pleural Fluid Protein / Serum Protein ratio < 0.5",
      "B": "Pleural Fluid LDH / Serum LDH ratio > 0.6",
      "C": "Pleural Fluid LDH < 2/3 the upper limit of normal serum LDH",
      "D": "Serum-Ascites Albumin Gradient (SAAG) > 1.1"
    },
    "answer": "B",
    "explanation": {
      "correct": "Light's Criteria (any one of three): 1. Fluid/Serum Protein > 0.5, 2. Fluid/Serum LDH > 0.6, 3. Fluid LDH > 2/3 upper limit of normal serum LDH. Exudates are seen in malignancy, infection, and PE.",
      "A": "Suggests a transudate.",
      "B": "Classic exudative criterion.",
      "C": "Suggests a transudate.",
      "D": "Used for ascites, not pleural fluid."
    },
    "guideline": "Management of Pleural Effusion (BTS Guidelines)",
    "takeaway": "Light's Criteria: Fluid/Serum LDH > 0.6 = Exudate.",
    "sharp_metadata": {
      "S": "Patient with left-sided dullness to percussion and decreased breath sounds.",
      "H": "Excellence in diagnosis: Determining transudate (usually systemic e.g. CHF) vs exudate (local e.g. cancer) narrows the differential.",
      "A": "Identify 'Chylothorax' as an effusion with milky appearance and high triglycerides.",
      "R": "Essential thoracic clinical science.",
      "P": "Perform diagnostic thoracentesis."
    },
    "id": 1673
  },
{
    "specialty": "Cardiothoracic Surgery",
    "topic": "Empyema",
    "question": "What is the surgical management of choice for a patient with a 'Stage III' (Organizing) empyema with a thick, restrictive pleural peel?",
    "options": {
      "A": "Antibiotics alone",
      "B": "Simple needle aspiration",
      "C": "Decortication (via VATS or Thoracotomy)",
      "D": "Chest tube with saline irrigation"
    },
    "answer": "C",
    "explanation": {
      "correct": "Stage III empyema involves a mature peel that traps the lung, preventing re-expansion. Decortication (surgical removal of the peel) is required to restore lung function and clear the infection.",
      "A": "Insufficient for organized collections.",
      "B": "Ineffective for viscous/organized pus.",
      "C": "Definitive management for chronic/organized empyema.",
      "D": "Often fails due to loculations."
    },
    "guideline": "AATS Guidelines: Management of Empyema",
    "takeaway": "Organized Empyema = Decortication.",
    "sharp_metadata": {
      "S": "Patient with persistent fever and trapped lung 3 weeks after pneumonia.",
      "H": "Excellence in timing: Early VATS decortication is associated with better outcomes than delayed open thoracotomy.",
      "A": "Identify the three stages of empyema: 1. Exudative, 2. Fibrinopurulent, 3. Organizing.",
      "R": "Complex thoracic infection management.",
      "P": "Proceed to surgical decortication."
    },
    "id": 1674
  },
{
    "specialty": "Cardiothoracic Surgery",
    "topic": "Aortic Valve Stenosis",
    "question": "Which classic 'triad' of symptoms indicates a poor prognosis and the need for urgent valve replacement in a patient with severe Aortic Stenosis?",
    "options": {
      "A": "Fever, Chills, Night sweats",
      "B": "Syncope, Angina, Dyspnea (SAD)",
      "C": "Hemoptysis, Chest pain, Dyspnea",
      "D": "Headache, Palpitations, Diaphoresis"
    },
    "answer": "B",
    "explanation": {
      "correct": "The 'SAD' triad: Syncope, Angina, and Dyspnea (Heart Failure). Once symptoms appear, survival drops significantly (5 years for Angina, 3 years for Syncope, 2 years for Dyspnea).",
      "A": "Infectious symptoms.",
      "B": "Classic symptomatic AS triad.",
      "C": "Suggests PE or Lung cancer.",
      "D": "Pheochromocytoma triad."
    },
    "guideline": "AHA/ACC Guideline for Valvular Heart Disease",
    "takeaway": "Severe AS Symptoms = Syncope, Angina, Dyspnea (SAD); Indication for AVR.",
    "sharp_metadata": {
      "S": "80-year-old with systolic crescendo-decrescendo murmur and recent fainting spell.",
      "H": "Excellence in physical exam: 'Pulsus parvus et tardus' (weak and late carotid pulse) is a classic finding.",
      "A": "Address the role of TAVI (Transcatheter Aortic Valve Implantation) in high-risk/elderly patients.",
      "R": "Core cardiac surgical condition.",
      "P": "Order echocardiogram to confirm AVA < 1.0 cm2 and gradient > 40 mmHg."
    },
    "id": 1675
  },
{
    "specialty": "Cardiothoracic Surgery",
    "topic": "Aortic Dissection",
    "question": "A Stanford Type A aortic dissection is defined by the involvement of which part of the aorta?",
    "options": {
      "A": "Descending aorta only",
      "B": "Ascending aorta (regardless of distal extent)",
      "C": "Abdominal aorta only",
      "D": "Aortic arch only"
    },
    "answer": "B",
    "explanation": {
      "correct": "Stanford Type A involves the ascending aorta. Type B involves only the descending aorta distal to the left subclavian. Type A is a surgical emergency due to risk of rupture, tamponade, or coronary occlusion.",
      "A": "Stanford Type B.",
      "B": "Standard Stanford classification.",
      "C": "Not part of the Stanford system.",
      "D": "Included in Type A if it involves the ascending part."
    },
    "guideline": "Management of Aortic Dissections",
    "takeaway": "Stanford Type A = Ascending Aorta; Surgical Emergency.",
    "sharp_metadata": {
      "S": "Patient with 'tearing' chest pain and a new diastolic murmur (aortic insufficiency).",
      "H": "Excellence in diagnosis: CTA is the primary tool, but Transesophageal Echo (TEE) can be used in unstable patients.",
      "A": "Identify the risk of 'Malperfusion' to the brain or heart in Type A.",
      "R": "Lethal cardiothoracic emergency.",
      "P": "Immediate transfer to the OR for replacement of the ascending aorta."
    },
    "id": 1676
  },
{
    "specialty": "Cardiothoracic Surgery",
    "topic": "CABG vs PCI",
    "question": "In which clinical scenario is Coronary Artery Bypass Grafting (CABG) generally preferred over Percutaneous Coronary Intervention (PCI)?",
    "options": {
      "A": "Single-vessel disease in a low-risk patient",
      "B": "Left Main coronary artery disease or Triple-vessel disease in a diabetic patient",
      "C": "Acute MI requiring immediate intervention",
      "D": "Young patient with a focal LAD lesion"
    },
    "answer": "B",
    "explanation": {
      "correct": "CABG (especially with the Left Internal Mammary Artery - LIMA) has superior long-term patency and survival in patients with complex disease, specifically Left Main disease or triple-vessel disease in diabetics.",
      "A": "PCI is preferred.",
      "B": "Classic indications for surgical bypass over stenting.",
      "C": "PCI is the gold standard for STEMI.",
      "D": "PCI is usually preferred."
    },
    "guideline": "ACC/AHA/SCAI Guidelines for Coronary Revascularization",
    "takeaway": "CABG = Superior for Left Main or Triple-vessel disease in Diabetics.",
    "sharp_metadata": {
      "S": "Diabetic patient with chronic stable angina found to have 90% Left Main stenosis.",
      "H": "Excellence in conduit choice: The LIMA to the LAD provides the best 10-year patency (>90%).",
      "A": "Address the role of the 'Heart Team' (Cardiologist + Surgeon) in decision making.",
      "R": "High-yield cardiac surgery indication.",
      "P": "Schedule elective CABG; utilize LIMA and Saphenous vein grafts."
    },
    "id": 1677
  },
{
    "specialty": "Cardiothoracic Surgery",
    "topic": "Mediastinal Tumors",
    "question": "Which of the following is NOT one of the '4 Ts' of the ANTERIOR mediastinum?",
    "options": {
      "A": "Thymoma",
      "B": "Thyroid (Retrosternal)",
      "C": "Teratoma (Germ cell tumors)",
      "D": "Tracheoesophageal cyst"
    },
    "answer": "D",
    "explanation": {
      "correct": "The '4 Ts' of the anterior mediastinum are: Thymoma, Thyroid, Teratoma (and other germ cell tumors), and 'Terrible' Lymphoma. Tracheoesophageal cysts are typically found in the *middle* mediastinum.",
      "A": "Anterior.",
      "B": "Anterior.",
      "C": "Anterior.",
      "D": "Middle mediastinum."
    },
    "guideline": "Differential Diagnosis of Mediastinal Masses",
    "takeaway": "Anterior Mediastinum = 4 Ts (Thymoma, Thyroid, Teratoma, Terrible Lymphoma).",
    "sharp_metadata": {
      "S": "Patient with myasthenia gravis and a mass on chest X-ray.",
      "H": "Excellence in association: 15% of patients with Myasthenia Gravis have a Thymoma.",
      "A": "Identify the 'Posterior Mediastinum' as the most common site for neurogenic tumors.",
      "R": "Standard thoracic anatomy/pathology.",
      "P": "CT chest with contrast and potential biopsy (if lymphoma suspected) or resection (if thymoma suspected)."
    },
    "id": 1678
  },
{
    "specialty": "Cardiothoracic Surgery",
    "topic": "Mitral Regurgitation",
    "question": "What is the most common cause of primary Mitral Regurgitation requiring surgery in developed countries?",
    "options": {
      "A": "Rheumatic Heart Disease",
      "B": "Myxomatous degeneration (Mitral Valve Prolapse)",
      "C": "Endocarditis",
      "D": "Ischemic papillary muscle rupture"
    },
    "answer": "B",
    "explanation": {
      "correct": "Myxomatous degeneration leading to Mitral Valve Prolapse (Barlow's disease or Fibroelastic deficiency) is the most common cause of primary MR in the West.",
      "A": "Common in developing countries.",
      "B": "Most common cause in the West.",
      "C": "Causes acute, severe MR.",
      "D": "Causes acute MR after MI."
    },
    "guideline": "AHA/ACC: Management of Valvular Heart Disease",
    "takeaway": "Primary MR #1 Cause = Myxomatous degeneration.",
    "sharp_metadata": {
      "S": "Patient with a holosystolic murmur at the apex radiating to the axilla.",
      "H": "Excellence in technique: Mitral valve *repair* is generally superior to *replacement* (better survival/LV function).",
      "A": "Identify the 'P2' scallop of the posterior leaflet as the most common site of prolapse.",
      "R": "Standard cardiac surgery pathology.",
      "P": "Echocardiogram to assess Ejection Fraction and symptoms to determine surgical timing."
    },
    "id": 1679
  },
{
    "specialty": "Cardiothoracic Surgery",
    "topic": "Thoracic Trauma",
    "question": "A 'Flail Chest' is defined by which of the following criteria?",
    "options": {
      "A": "Any fracture of the sternum",
      "B": "Three or more adjacent ribs fractured in two or more places",
      "C": "A single rib fracture causing a pneumothorax",
      "D": "Fracture of the first and second ribs"
    },
    "answer": "B",
    "explanation": {
      "correct": "Flail chest requires a segment of the chest wall to be 'disconnected' from the rest of the rib cage. This results in 'paradoxical breathing' (segment moves in during inspiration and out during expiration).",
      "A": "Not flail chest.",
      "B": "Standard anatomical definition.",
      "C": "Simple rib fracture.",
      "D": "Indicates high-energy trauma but not flail chest."
    },
    "guideline": "ATLS: Management of Flail Chest",
    "takeaway": "Flail Chest = 3+ ribs, 2+ places; Paradoxical breathing.",
    "sharp_metadata": {
      "S": "Trauma patient with asymmetric chest wall motion.",
      "H": "Excellence in management: The primary problem is the underlying *Pulmonary Contusion*, not just the rib fractures themselves.",
      "A": "Address the role of aggressive pain control (e.g., epidural or regional blocks) to prevent pneumonia.",
      "R": "High-yield thoracic trauma.",
      "P": "Adequate analgesia, pulmonary toilet, and mechanical ventilation only if needed."
    },
    "id": 1680
  },
{
    "specialty": "Cardiothoracic Surgery",
    "topic": "Pancoast Tumor",
    "question": "A Pancoast tumor (Superior Sulcus tumor) classically presents with Horner's syndrome. What are the three components of Horner's syndrome?",
    "options": {
      "A": "Ptosis, Miosis, Anhydrosis",
      "B": "Ptosis, Mydriasis, Anhydrosis",
      "C": "Ptosis, Miosis, Hyperhydrosis",
      "D": "Proptosis, Miosis, Anhydrosis"
    },
    "answer": "A",
    "explanation": {
      "correct": "Horner's syndrome results from sympathetic chain involvement. The triad is Ptosis (drooping eyelid), Miosis (constricted pupil), and Anhydrosis (lack of sweating on the affected side).",
      "A": "Classic triad.",
      "B": "Mydriasis is a dilated pupil.",
      "C": "Anhydrosis is decreased sweating.",
      "D": "Proptosis is for Graves' disease."
    },
    "guideline": "Diagnosis and Management of Superior Sulcus Tumors",
    "takeaway": "Horner's Syndrome = Ptosis + Miosis + Anhydrosis.",
    "sharp_metadata": {
      "S": "Smoker with shoulder pain and a small pupil on the same side.",
      "H": "Excellence in diagnosis: Shoulder pain is the most common presenting symptom of a Pancoast tumor, often mistaken for orthopedic issues.",
      "A": "Identify the 'Stellate Ganglion' as the site of sympathetic compression.",
      "R": "Thoracic oncology classic.",
      "P": "Biopsy, neoadjuvant chemoradiation, and surgical resection (Paulson's procedure)."
    },
    "id": 1681
  }
]);