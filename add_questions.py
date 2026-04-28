import re

new_questions = """
  ,{
    "specialty": "General Surgery",
    "topic": "Inguinal Hernia",
    "question": "A 55-year-old male presents with a reducible right groin swelling that appears above and medial to the pubic tubercle. Which of the following correctly describes this hernia and the anatomical landmark used to differentiate it from a femoral hernia?",
    "options": {
      "A": "Femoral hernia; passes below and lateral to the pubic tubercle",
      "B": "Indirect inguinal hernia; passes above and medial to the pubic tubercle",
      "C": "Direct inguinal hernia; passes above and medial to the pubic tubercle",
      "D": "Spigelian hernia; passes through the linea semilunaris",
      "E": "Obturator hernia; passes through the obturator foramen"
    },
    "answer": "C",
    "explanation": {
      "correct": "The pubic tubercle is the key anatomical landmark: inguinal hernias (both direct and indirect) emerge ABOVE and MEDIAL to the pubic tubercle, while femoral hernias emerge BELOW and LATERAL to it. A direct inguinal hernia passes through Hesselbach's triangle (weakness in the posterior inguinal wall), medial to the inferior epigastric vessels. An indirect hernia passes through the deep inguinal ring, lateral to the inferior epigastric vessels, and follows the path of the processus vaginalis.",
      "A": "The femoral hernia is the one that passes below and lateral to the pubic tubercle — not this presentation.",
      "B": "Indirect hernias also pass above and medial to the pubic tubercle, but they emerge lateral to the inferior epigastric vessels through the deep ring.",
      "C": "",
      "D": "Spigelian hernias occur at the lateral edge of the rectus abdominis at the arcuate line — unrelated to the groin.",
      "E": "Obturator hernias pass through the obturator foramen and can cause the Howship-Romberg sign (inner thigh pain on hip rotation)."
    },
    "guideline": "HerniaSurge Group International Guidelines for Groin Hernia Management",
    "takeaway": "Key Concept: Inguinal hernias = above/medial to pubic tubercle. Femoral hernias = below/lateral. Direct = Hesselbach's triangle. Indirect = deep inguinal ring.",
    "id": 831
  },
  {
    "specialty": "General Surgery",
    "topic": "Peptic Ulcer Disease",
    "question": "A 48-year-old male on long-term NSAIDs is found to have a 1.5 cm duodenal ulcer with a visible vessel on endoscopy (Forrest Class Ia). He is hemodynamically stable. What is the most appropriate immediate management?",
    "options": {
      "A": "High-dose oral PPI and discharge",
      "B": "Emergency surgery (Graham patch)",
      "C": "Endoscopic hemostasis (clips/adrenaline injection) + IV PPI infusion",
      "D": "Angiographic embolization of the gastroduodenal artery",
      "E": "Observation and serial endoscopy in 48 hours"
    },
    "answer": "C",
    "explanation": {
      "correct": "Forrest Class Ia (active arterial spurting) is the highest-risk stigma of haemorrhage. For hemodynamically stable patients with high-risk stigmata, the first-line is endoscopic hemostasis using a combination therapy (injection of adrenaline + mechanical clip or thermal coagulation). This must be followed by a high-dose IV PPI infusion (e.g., omeprazole 80mg bolus then 8mg/hr for 72 hours) to maintain intragastric pH >6 and prevent re-bleeding.",
      "A": "Oral PPI alone is inadequate for Forrest Ia lesions with active bleeding.",
      "B": "Surgery is reserved for endoscopic failure, re-bleeding, or perforation.",
      "C": "",
      "D": "Angiographic embolization is a second-line option when endoscopy fails.",
      "E": "Observation is inappropriate for active arterial bleeding."
    },
    "guideline": "BSG (British Society of Gastroenterology) Guideline for Management of Acute Upper GI Bleeding",
    "takeaway": "Key Concept: Forrest Ia (active bleed) = Endoscopic hemostasis + High-dose IV PPI infusion. Surgery is for endoscopic failure.",
    "id": 832
  },
  {
    "specialty": "Anesthesia",
    "topic": "Malignant Hyperthermia",
    "question": "During general anesthesia with sevoflurane, a 25-year-old male develops rapidly rising temperature (40.5°C), severe muscle rigidity, masseter spasm, tachycardia, and rising CO2 on capnography. What is the most important immediate drug to administer?",
    "options": {
      "A": "Dantrolene sodium IV",
      "B": "Propofol infusion",
      "C": "Succinylcholine IV",
      "D": "Active external cooling only",
      "E": "Haloperidol IM"
    },
    "answer": "A",
    "explanation": {
      "correct": "This is Malignant Hyperthermia (MH), a life-threatening pharmacogenetic disorder triggered by volatile anesthetic agents (halothane, sevoflurane, desflurane) and succinylcholine. It causes uncontrolled skeletal muscle calcium release from the sarcoplasmic reticulum, leading to hypermetabolism, rigidity, hyperthermia, and acidosis. The specific antidote is Dantrolene sodium (2.5 mg/kg IV, repeated as needed), which blocks calcium release. The triggering agent must be discontinued immediately.",
      "A": "",
      "B": "Propofol is a safe anesthetic in MH-susceptible patients but does not treat the crisis.",
      "C": "Succinylcholine is a TRIGGER for MH, not a treatment.",
      "D": "Cooling is supportive but Dantrolene is the definitive treatment.",
      "E": "Haloperidol is unrelated to MH."
    },
    "guideline": "MHAUS (Malignant Hyperthermia Association of the United States) - Emergency Treatment Protocol",
    "takeaway": "Key Concept: Malignant Hyperthermia = Volatile agent/Succinylcholine trigger + Muscle rigidity + Hyperthermia. Antidote: DANTROLENE.",
    "id": 833
  },
  {
    "specialty": "Orthopedic",
    "topic": "Compartment Syndrome",
    "question": "A 20-year-old male sustains a tibial shaft fracture. 6 hours later, he develops severe pain out of proportion to the injury, pain on passive stretch of the toes, and a tense anterior compartment. His compartment pressure is measured at 38 mmHg. His diastolic BP is 75 mmHg. What should be done?",
    "options": {
      "A": "Elevate the limb and reassess in 2 hours",
      "B": "Urgent four-compartment fasciotomy",
      "C": "Reduce the fracture and apply a full cast",
      "D": "Administer IV mannitol to reduce swelling",
      "E": "Observe and repeat pressure measurement in 30 minutes"
    },
    "answer": "B",
    "explanation": {
      "correct": "Acute Compartment Syndrome (ACS) is diagnosed by clinical findings AND compartment pressure measurement. The threshold for fasciotomy is: absolute compartment pressure > 30 mmHg, OR delta pressure (Diastolic BP - Compartment Pressure) < 30 mmHg. Here, Delta P = 75 - 38 = 37 mmHg (borderline), but the clinical findings (pain on passive stretch, tenseness) are diagnostic. The treatment is immediate surgical four-compartment fasciotomy of the lower leg. Time is muscle — delay leads to irreversible ischemia, rhabdomyolysis, and Volkmann's contracture.",
      "A": "Elevation may worsen ACS by reducing perfusion pressure.",
      "B": "",
      "C": "A circumferential cast is contraindicated and will worsen pressure.",
      "D": "Mannitol is not a primary treatment for ACS.",
      "E": "With clinical signs, waiting is dangerous."
    },
    "guideline": "BOA/BAPRAS (British Orthopaedic Association) Standards for Trauma - Open Fractures",
    "takeaway": "Key Concept: ACS = Pain + Passive stretch pain + Tenseness. Delta P < 30mmHg or pressure > 30mmHg = FASCIOTOMY.",
    "id": 834
  },
  {
    "specialty": "Cardiothoracic",
    "topic": "Esophageal Cancer",
    "question": "A 65-year-old male with Barrett's esophagus presents with progressive dysphagia, first to solids then to liquids, and a 10 kg weight loss. CT shows a 5 cm mid-esophageal mass. Endoscopic biopsy confirms squamous cell carcinoma. PET-CT shows no distant metastases. What is the standard curative-intent treatment?",
    "options": {
      "A": "Surgery alone (Ivor Lewis oesophagectomy)",
      "B": "Palliative esophageal stenting",
      "C": "Definitive chemoradiotherapy (CRT) alone",
      "D": "Neoadjuvant chemoradiotherapy followed by oesophagectomy",
      "E": "Endoscopic mucosal resection (EMR)"
    },
    "answer": "D",
    "explanation": {
      "correct": "For resectable, locally advanced esophageal cancer (Stage II-III), the standard of care based on the CROSS trial is neoadjuvant (preoperative) chemoradiotherapy (carboplatin/paclitaxel + 41.4 Gy radiation) followed by surgical resection. This approach significantly improves overall survival compared to surgery alone (pathological complete response ~30% with SCC). EMR is only for T1a mucosal cancers.",
      "A": "Surgery alone has lower survival for locally advanced disease compared to combined therapy.",
      "B": "Stenting is palliative, not curative.",
      "C": "Definitive CRT alone is an option for cervical esophageal cancers or patients unfit for surgery, with higher local recurrence rates.",
      "D": "",
      "E": "EMR is for early mucosal (T1a) lesions only."
    },
    "guideline": "CROSS Trial / NCCN Guidelines - Esophageal Cancer",
    "takeaway": "Key Concept: Resectable Esophageal Cancer (non-early) = Neoadjuvant CCRT + Surgery (CROSS protocol).",
    "id": 835
  },
  {
    "specialty": "HPB",
    "topic": "Pancreatic Cancer",
    "question": "A 70-year-old male presents with painless jaundice, weight loss, and a new diagnosis of diabetes mellitus. CT shows a 2.5 cm mass in the head of the pancreas causing bile duct dilation. The superior mesenteric artery and portal vein are uninvolved. What is the most appropriate curative-intent surgical procedure?",
    "options": {
      "A": "Distal pancreatectomy and splenectomy",
      "B": "Total pancreatectomy",
      "C": "Whipple's procedure (Pancreaticoduodenectomy)",
      "D": "ERCP and biliary stenting only",
      "E": "Laparoscopic cholecystectomy"
    },
    "answer": "C",
    "explanation": {
      "correct": "A resectable pancreatic head mass is treated with a Pancreaticoduodenectomy (Whipple's procedure). This involves en-bloc resection of: the pancreatic head, duodenum, common bile duct, gallbladder, and often the distal stomach (in classic Whipple) or pylorus preservation (pylorus-preserving Whipple). Reconstruction involves pancreaticojejunostomy, hepaticojejunostomy, and gastrojejunostomy. Resectability requires no involvement of superior mesenteric/portal vessels.",
      "A": "Distal pancreatectomy is for body/tail lesions.",
      "B": "Total pancreatectomy is rarely performed for resectable tumors due to the morbidity of complete endocrine/exocrine insufficiency.",
      "C": "",
      "D": "Biliary stenting is palliative or used as a bridge to surgery for severe jaundice.",
      "E": "Completely incorrect procedure for this pathology."
    },
    "guideline": "NCCN Guidelines - Pancreatic Adenocarcinoma",
    "takeaway": "Key Concept: Pancreatic HEAD cancer = Whipple's procedure. Key reconstruction: Pancreatic-Jejuno, Hepatico-Jejuno, Gastro-Jejuno anastomoses.",
    "id": 836
  },
  {
    "specialty": "Trauma",
    "topic": "Traumatic Brain Injury",
    "question": "A 30-year-old male is brought in after a high-speed MVA. He was unconscious at the scene but opened his eyes briefly in the ambulance. On arrival, GCS is 8 (E2V2M4). CT head shows a biconvex (lenticular) hyperdense lesion over the right temporal region. What is the diagnosis and the most appropriate immediate management?",
    "options": {
      "A": "Subdural hematoma; IV Mannitol and observation",
      "B": "Epidural hematoma; Emergency craniotomy and clot evacuation",
      "C": "Subarachnoid hemorrhage; IV Nimodipine",
      "D": "Contusion; Intracranial pressure monitoring",
      "E": "Diffuse Axonal Injury; Supportive care only"
    },
    "answer": "B",
    "explanation": {
      "correct": "A biconvex (lenticular/lens-shaped) hyperdense lesion on CT is pathognomonic for an Epidural Hematoma (EDH). It is most commonly caused by rupture of the middle meningeal artery following temporal bone fracture. The classic presentation is a 'lucid interval' (brief loss of consciousness, then apparent recovery, followed by rapid deterioration). A GCS of 8 with a significant EDH requires emergency surgical evacuation to prevent transtentorial herniation and death.",
      "A": "Subdural hematoma appears as a crescent-shaped hyperdensity that crosses suture lines.",
      "B": "",
      "C": "SAH appears as blood in the sulci/basal cisterns.",
      "D": "Observation is inappropriate with a significant EDH and low GCS.",
      "E": "DAI is a diffuse injury without a focal clot."
    },
    "guideline": "BTF (Brain Trauma Foundation) Guidelines for the Management of Severe TBI",
    "takeaway": "Key Concept: Biconvex lesion + Lucid interval = Epidural Hematoma. Middle meningeal artery. Treatment: Emergency craniotomy.",
    "id": 837
  },
  {
    "specialty": "Colorectal",
    "topic": "Haemorrhoids",
    "question": "A 45-year-old male presents with painless, bright red rectal bleeding and prolapse of a haemorrhoid that reduces spontaneously. Based on the Goligher classification, what grade is this and what is the recommended treatment?",
    "options": {
      "A": "Grade I; Dietary modification and topical therapy",
      "B": "Grade II; Rubber Band Ligation (RBL)",
      "C": "Grade III; Manual reduction required, consider haemorrhoidectomy",
      "D": "Grade IV; Emergency haemorrhoidectomy",
      "E": "Grade II; Open haemorrhoidectomy"
    },
    "answer": "B",
    "explanation": {
      "correct": "Goligher Grading: Grade I = no prolapse (bleeding only). Grade II = prolapse on straining, spontaneous reduction. Grade III = prolapse requiring manual reduction. Grade IV = irreducible prolapse. This patient has Grade II haemorrhoids (prolapse that reduces spontaneously). The recommended treatment is Rubber Band Ligation (RBL), which is effective, simple, and can be done in the outpatient setting. Dietary fiber and hydration are always advised as adjuncts.",
      "A": "Grade I is managed conservatively.",
      "B": "",
      "C": "Grade III requires manual reduction and surgery is often considered.",
      "D": "Grade IV (irreducible) may need urgent surgery, especially if strangulated.",
      "E": "Open haemorrhoidectomy is typically reserved for Grade III-IV."
    },
    "guideline": "ASCRS Clinical Practice Guideline for the Management of Hemorrhoids",
    "takeaway": "Key Concept: Grade I=No prolapse, Grade II=Spontaneous reduction, Grade III=Manual reduction, Grade IV=Irreducible. Grade II → Rubber Band Ligation.",
    "id": 838
  },
  {
    "specialty": "Vascular",
    "topic": "Peripheral Arterial Disease",
    "question": "A 65-year-old diabetic smoker presents with calf pain after walking 200 meters that is relieved by rest. His ankle-brachial index (ABI) is 0.6 on the right. What is this symptom called and what is the most appropriate first-line management?",
    "options": {
      "A": "Rest pain; Urgent revascularization",
      "B": "Intermittent claudication; Exercise therapy, smoking cessation, and antiplatelet therapy",
      "C": "Critical limb ischemia; Amputation",
      "D": "Venous claudication; Compression stockings",
      "E": "Leriche syndrome; Aortobifemoral bypass"
    },
    "answer": "B",
    "explanation": {
      "correct": "Calf pain on walking relieved by rest = Intermittent Claudication. An ABI of 0.6 confirms significant PAD (normal >0.9; claudication 0.4-0.9; critical ischemia <0.4). First-line management is conservative: supervised exercise therapy (most effective non-surgical treatment), smoking cessation, antiplatelet therapy (aspirin or clopidogrel), statin, and BP/glucose control. Revascularization is for failure of conservative therapy or critical limb ischemia.",
      "A": "Rest pain indicates Critical Limb Ischemia (CLI) — pain even at rest, usually ABI <0.4.",
      "B": "",
      "C": "Amputation is the last resort for non-salvageable limbs.",
      "D": "Venous claudication is due to venous hypertension; ABI would be normal.",
      "E": "Leriche syndrome = aortoiliac occlusion causing bilateral buttock claudication and impotence."
    },
    "guideline": "ESC (European Society of Cardiology) Guidelines on Peripheral Arterial Diseases",
    "takeaway": "Key Concept: Intermittent Claudication = ABI 0.4-0.9. First line: Exercise + Smoking cessation + Antiplatelet + Statin.",
    "id": 839
  },
  {
    "specialty": "General Surgery",
    "topic": "Necrotizing Fasciitis",
    "question": "A 60-year-old diabetic presents with severe perineal pain, fever, and skin that appears dusky with subcutaneous crepitus. The LRINEC score is 8. What is the diagnosis and the most critical initial step?",
    "options": {
      "A": "Cellulitis; IV Antibiotics alone",
      "B": "Fournier's Gangrene (Necrotizing Fasciitis); Urgent surgical debridement",
      "C": "Perianal abscess; Incision and drainage in the ED",
      "D": "Gas gangrene; Hyperbaric oxygen therapy",
      "E": "Inflammatory bowel disease; Colonoscopy"
    },
    "answer": "B",
    "explanation": {
      "correct": "This is Fournier's Gangrene, a type of necrotizing fasciitis affecting the perineum. The combination of crepitus (gas in tissues), dusky skin, severe pain, and fever in a diabetic with a high LRINEC score (≥6 is high risk) is diagnostic. This is a SURGICAL EMERGENCY. The cornerstone of treatment is immediate and aggressive surgical debridement of all necrotic tissue, combined with broad-spectrum IV antibiotics covering Gram-positives, Gram-negatives, and anaerobes. Mortality is 20-40%.",
      "A": "Antibiotics alone are never sufficient for necrotizing fasciitis.",
      "B": "",
      "C": "The extent of this infection goes far beyond a simple abscess.",
      "D": "Hyperbaric oxygen is an adjunct, not the primary treatment.",
      "E": "Completely incorrect diagnosis given the clinical picture."
    },
    "guideline": "IDSA (Infectious Diseases Society of America) Practice Guidelines for Skin and Soft Tissue Infections",
    "takeaway": "Key Concept: Necrotizing Fasciitis = Crepitus + Severe pain + Dusky skin. LRINEC ≥6 = high risk. TREATMENT: Emergency surgical debridement.",
    "id": 840
  }
"""

with open('/Users/dr.moh/Documents/SIH/sih_project/js/questions.js', 'r') as f:
    content = f.read()

# Remove the closing ]; and append new questions
old_end = '\n];'
new_end = new_questions + '\n];'
content = content.rstrip()
if content.endswith('];'):
    content = content[:-2] + new_end
else:
    print("ERROR: could not find closing ]; in file")
    exit(1)

with open('/Users/dr.moh/Documents/SIH/sih_project/js/questions.js', 'w') as f:
    f.write(content)

print("Done! Questions 831-840 added.")
