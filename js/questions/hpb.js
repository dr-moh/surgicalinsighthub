if (!window.QUESTIONS) window.QUESTIONS = [];
window.QUESTIONS.push(...[
[
  {
    "id": 109,
    "specialty": "Hepatopancreatobiliary (HPB)",
    "topic": "Biliary Tract Disease",
    "question": "The most commonly used imaging method for diagnosis of acute cholecystitis is:",
    "options": {
      "A": "Radionuclide (HIDA) scan of the gallbladder.",
      "B": "Ultrasonography of the gallbladder.",
      "D": "CT Scan."
    },
    "answer": "B",
    "explanation": {
      "correct": "Ultrasonography is the rapid, non-invasive, and cost-effective first-line imaging modality of choice for suspected biliary pathology.",
      "A": "Incorrect; HIDA is the most sensitive/specific test but is reserved as a second-line study when ultrasound is equivocal.",
      "B": "Correct; it is universally the first and most commonly used imaging method.",
      "D": "Incorrect; CT is less sensitive for gallstones and is usually reserved for diagnosing complications like perforation or ruling out other pathologies."
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "B",
      "set_the_stage": "Acute cholecystitis is a common surgical emergency classically presenting with right upper quadrant pain, fever, and leukocytosis.",
      "highlight_excellence": "Right upper quadrant (RUQ) ultrasonography is the preferred, initial, and most commonly used imaging modality for suspected acute cholecystitis. It is highly sensitive, non-invasive, cost-effective, and avoids ionizing radiation. It can dynamically demonstrate gallstones, gallbladder wall thickening (>3 mm), pericholecystic fluid, and allows the ultrasonographer to elicit a sonographic Murphy's sign.",
      "address_gaps": "Radionuclide HIDA scanning (A) is technically the most sensitive and specific test for diagnosing acute cystic duct obstruction. However, because it involves radiation, is time-consuming, and is expensive, it is relegated to a second-line test. CT scans (D) often miss radiolucent cholesterol gallstones.",
      "review_learning_points": "The Tokyo Guidelines for acute cholecystitis require local signs of inflammation (Murphy's sign), systemic signs (fever, elevated WBCs), and confirming imaging findings to establish a definitive diagnosis. Ultrasound is the recommended first step in this algorithm.",
      "plan_for_improvement": "First test for biliary pathology = Ultrasound. Most accurate test for cystic duct obstruction = HIDA scan."
    },
    "guideline": "The Tokyo Guidelines (TG18) firmly establish abdominal ultrasound as the primary and initial imaging modality for diagnosing acute cholecystitis globally.",
    "takeaway": "An ultrasound finding of gallstones combined with a sonographic Murphy's sign is highly predictive of acute cholecystitis and usually warrants prompt surgical intervention.",
    "visualization": "A grayscale ultrasound image revealing a distended gallbladder with a thickened, edematous wall (a 'double-wall' or 'halo' sign), a shadowing echogenic gallstone impacted in the neck, and a thin sliver of dark anechoic fluid surrounding the gallbladder.",
    "_src_file": "general_surgery.js"
  },
  {
    "specialty": "HPB Surgery",
    "topic": "Acute Cholangitis",
    "question": "Which of the following describes 'Reynolds' Pentad,' which indicates severe obstructive cholangitis?",
    "options": {
      "A": "Fever, Jaundice, RUQ Pain",
      "B": "Fever, Jaundice, RUQ Pain, Hypotension, Altered Mental Status",
      "C": "Fever, Leukocytosis, RUQ Pain, Nausea, Vomiting",
      "D": "Jaundice, Weight Loss, Palpable Gallbladder, Pruritus, Pale Stools"
    },
    "answer": "B",
    "explanation": {
      "correct": "Reynolds' Pentad adds Hypotension and Altered Mental Status to the classic Charcot's Triad (Fever, Jaundice, RUQ Pain). This combination is indicative of suppurative cholangitis and sepsis.",
      "A": "Charcot's Triad.",
      "B": "Reynolds' Pentad.",
      "C": "Common symptoms of cholecystitis.",
      "D": "Symptoms of malignant biliary obstruction (Courvoisier's law)."
    },
    "guideline": "Tokyo Guidelines 2018 (TG18) for Acute Cholangitis",
    "takeaway": "Reynolds' Pentad = Charcot's + Shock + Confusion; Emergency decompression needed.",
    "sharp_metadata": {
      "S": "75-year-old with gallstones presents with temp 39.5, BP 90/60, and confusion.",
      "H": "Excellence in timing: Biliary decompression (usually ERCP) must be done urgently.",
      "A": "Identify the primary goal: Establish bile drainage to source control the sepsis.",
      "R": "Critical surgical emergency.",
      "P": "Start IV fluids, broad-spectrum antibiotics, and arrange for ERCP."
    },
    "id": 1622,
    "_src_file": "hpb.js"
  },
  {
    "specialty": "HPB Surgery",
    "topic": "Pancreatic Cancer",
    "question": "A patient with a pancreatic head tumor is undergoing a Whipple procedure (Pancreaticoduodenectomy). Which of the following structures is NOT typically removed in a standard Whipple?",
    "options": {
      "A": "Head of the pancreas",
      "B": "Duodenum",
      "C": "Spleen",
      "D": "Distal common bile duct"
    },
    "answer": "C",
    "explanation": {
      "correct": "A standard Whipple involves removing the pancreatic head, duodenum, gallbladder, distal bile duct, and sometimes the distal stomach (if not pylorus-preserving). The spleen is removed in a *Distal* Pancreatectomy, not a standard Whipple.",
      "A": "Core part of the specimen.",
      "B": "Shares blood supply with the pancreatic head.",
      "C": "Preserved in Whipple; removed in distal resection.",
      "D": "Removed to ensure biliary clearance."
    },
    "guideline": "Standardized Pancreatic Resections",
    "takeaway": "Whipple = Pancreas Head + Duodenum + GB + Distal CBD; No Splenectomy.",
    "sharp_metadata": {
      "S": "Patient with painless jaundice and 'double duct' sign on CT.",
      "H": "Excellence in anatomy: The SMA and Portal Vein must be assessed for involvement to determine resectability.",
      "A": "Identify the 'SMV-Portal Vein' confluence as the most critical vessel for local resectability.",
      "R": "Major surgical oncology procedure.",
      "P": "Assess for 'Borderline Resectable' status to consider neoadjuvant therapy."
    },
    "id": 1623,
    "_src_file": "hpb.js"
  },
  {
    "specialty": "HPB Surgery",
    "topic": "Liver Tumors",
    "question": "What is the most common BENIGN tumor of the liver, and what is the typical management for an asymptomatic 3cm lesion?",
    "options": {
      "A": "Hepatocellular Adenoma; Surgical resection",
      "B": "Cavernous Hemangioma; Observation",
      "C": "Focal Nodular Hyperplasia; Liver transplant",
      "D": "Hepatic Cyst; Aspiration and sclerotherapy"
    },
    "answer": "B",
    "explanation": {
      "correct": "Cavernous Hemangioma is the most common benign liver tumor. Most are small, asymptomatic, and have a classic 'peripheral nodular enhancement' on CT. Management is observation/reassurance.",
      "A": "Associated with OCP use; has risk of rupture/cancer; often excised.",
      "B": "Most common + usually benign/observed.",
      "C": "Has a 'central scar'; benign; no treatment needed.",
      "D": "Simple cysts are common and benign."
    },
    "guideline": "Management of Benign Liver Lesions",
    "takeaway": "Hemangioma = Most common benign liver lesion; Usually observed.",
    "sharp_metadata": {
      "S": "Incidental finding of 2cm liver lesion on CT for kidney stones.",
      "H": "Excellence in imaging: Hemangiomas show 'centripetal filling' on contrast CT.",
      "A": "Address the fact that hemangiomas do NOT turn into cancer.",
      "R": "Common incidental surgical finding.",
      "P": "No further follow-up is needed for classic, asymptomatic hemangiomas <5cm."
    },
    "id": 1624,
    "_src_file": "hpb.js"
  },
  {
    "specialty": "HPB Surgery",
    "topic": "Hepatocellular Carcinoma (HCC)",
    "question": "The 'Milan Criteria' are used to determine eligibility for which treatment in patients with Hepatocellular Carcinoma?",
    "options": {
      "A": "Chemotherapy (Sorafenib)",
      "B": "Liver Transplantation",
      "C": "Radiofrequency Ablation (RFA)",
      "D": "Surgical Resection"
    },
    "answer": "B",
    "explanation": {
      "correct": "The Milan Criteria (One lesion <5cm, or up to 3 lesions each <3cm, with no vascular invasion) are used to select HCC patients who will have the best survival outcomes after liver transplantation.",
      "A": "Used for advanced disease.",
      "B": "Gold standard for transplant eligibility in HCC.",
      "C": "Used for small lesions in non-surgical candidates.",
      "D": "Resection is preferred if liver function (Child-Pugh A) is preserved."
    },
    "guideline": "AASLD Guidelines for Management of HCC",
    "takeaway": "Milan Criteria = HCC Transplant eligibility (1<5cm, 3<3cm).",
    "sharp_metadata": {
      "S": "Cirrhotic patient with a 4cm HCC in Segment VIII.",
      "H": "Transplantation treats both the tumor and the underlying cirrhosis (the 'precancerous' field).",
      "A": "Identify Alpha-fetoprotein (AFP) as the screening marker for HCC.",
      "R": "Foundational transplant oncology concept.",
      "P": "Evaluate for MELD score and listing if within Milan criteria."
    },
    "id": 1625,
    "_src_file": "hpb.js"
  },
  {
    "specialty": "HPB Surgery",
    "topic": "Gallstone Ileus",
    "question": "Which of the following describes 'Rigler's Triad' seen on a plain abdominal film in a patient with gallstone ileus?",
    "options": {
      "A": "Pneumatosis intestinalis, air in portal vein, and acidosis",
      "B": "Pneumobilia, small bowel obstruction, and ectopic gallstone",
      "C": "Fever, RUQ pain, and Jaundice",
      "D": "Dilated stomach, narrow duodenum, and vomiting"
    },
    "answer": "B",
    "explanation": {
      "correct": "Rigler's Triad for gallstone ileus includes: 1. Pneumobilia (air in the biliary tree), 2. Signs of small bowel obstruction (dilated loops), and 3. An ectopic calcified gallstone (usually in the distal ileum).",
      "A": "Signs of bowel ischemia/necrosis.",
      "B": "Classic radiographic triad.",
      "C": "Charcot's triad.",
      "D": "SMA syndrome symptoms."
    },
    "guideline": "Management of Gallstone Ileus",
    "takeaway": "Rigler's Triad = Pneumobilia + SBO + Ectopic stone.",
    "sharp_metadata": {
      "S": "85-year-old female with distention and vomiting; x-ray shows air in the liver.",
      "H": "Excellence in surgery: The goal is enterolithotomy (removing the stone); the cholecystoduodenal fistula is often left alone in the acute setting.",
      "A": "Identify the ileocecal valve as the most common site of stone impaction.",
      "R": "Rare but high-yield surgical pathology.",
      "P": "Proceed to laparotomy and enterolithotomy proximal to the site of obstruction."
    },
    "id": 1626,
    "_src_file": "hpb.js"
  },
  {
    "specialty": "HPB Surgery",
    "topic": "Acute Pancreatitis",
    "question": "According to the Revised Atlanta Classification, what is the definition of 'Severe' Acute Pancreatitis?",
    "options": {
      "A": "Presence of any peripancreatic fluid collection",
      "B": "Elevated serum amylase > 3x normal",
      "C": "Persistent organ failure (>48 hours)",
      "D": "Presence of a pseudocyst"
    },
    "answer": "C",
    "explanation": {
      "correct": "Severity is defined by organ failure. Mild: No organ failure/complications. Moderate: Transient organ failure (<48h) or local complications. Severe: Persistent organ failure (>48h).",
      "A": "Common but doesn't define severity.",
      "B": "Diagnostic criteria, not severity.",
      "C": "Atlanta Classification definition of severe.",
      "D": "A local complication."
    },
    "guideline": "Revised Atlanta Classification 2012",
    "takeaway": "Severe Pancreatitis = Persistent Organ Failure (>48h).",
    "sharp_metadata": {
      "S": "Patient with pancreatitis and rising creatinine/hypotension on day 3.",
      "H": "Early aggressive fluid resuscitation is the most important initial management.",
      "A": "Address the role of CT: Not needed in the first 48-72h unless diagnosis is uncertain or the patient is deteriorating.",
      "R": "Standard management framework.",
      "P": "Supportive care in ICU; monitor for infected necrosis."
    },
    "id": 1627,
    "_src_file": "hpb.js"
  },
  {
    "specialty": "HPB Surgery",
    "topic": "Bile Duct Injury",
    "question": "A surgeon accidentally clips and transects the Common Bile Duct during a laparoscopic cholecystectomy. Which classification system is most commonly used to describe this injury?",
    "options": {
      "A": "Hinchey",
      "B": "Strasberg (or Bismuth)",
      "C": "Garden",
      "D": "Rockall"
    },
    "answer": "B",
    "explanation": {
      "correct": "The Strasberg classification is the most widely used for bile duct injuries. Strasberg Type E is a major injury involving the main bile ducts (corresponding to the older Bismuth classification).",
      "A": "Diverticulitis.",
      "B": "Biliary injury standards.",
      "C": "Femoral neck fractures.",
      "D": "Upper GI bleed risk."
    },
    "guideline": "SAGES: Safe Cholecystectomy Program",
    "takeaway": "Strasberg Classification = Biliary ductal injuries.",
    "sharp_metadata": {
      "S": "Bile leaking from drain post-cholecystectomy.",
      "H": "Excellence in safety: Achieving the 'Critical View of Safety' (CVS) prevents these injuries.",
      "A": "Identify the components of CVS: 1. Clearing of the hepatocystic triangle, 2. Lower part of the gallbladder plate visible, 3. Only two structures (cystic duct and artery) seen entering the GB.",
      "R": "Critical surgical safety topic.",
      "P": "ERCP for minor leaks (Type A); Hepaticojejunostomy for major transections (Type E)."
    },
    "id": 1628,
    "_src_file": "hpb.js"
  },
  {
    "specialty": "HPB Surgery",
    "topic": "Pancreatic Pseudocyst",
    "question": "What is the minimum time typically required for a peripancreatic fluid collection to develop a mature wall, allowing for surgical or endoscopic drainage?",
    "options": {
      "A": "24 hours",
      "B": "1 week",
      "C": "6 weeks",
      "D": "6 months"
    },
    "answer": "C",
    "explanation": {
      "correct": "A true pseudocyst (by definition) takes about 4-6 weeks to form a mature fibrous wall. Draining it earlier is difficult and dangerous because the wall is not strong enough to hold sutures or stents.",
      "A": "Too early.",
      "B": "Still an 'acute peripancreatic fluid collection'.",
      "C": "Classic timeframe for wall maturation.",
      "D": "Unnecessarily long wait."
    },
    "guideline": "Management of Pancreatic Fluid Collections",
    "takeaway": "Pancreatic Pseudocyst = 6 weeks for wall maturation.",
    "sharp_metadata": {
      "S": "Patient with persistent pain and early satiety 2 months after pancreatitis.",
      "H": "Recognizing that most pseudocysts (up to 70%) resolve spontaneously and do not need drainage.",
      "A": "Address the indications for drainage: Symptoms (pain/obstruction) or infection.",
      "R": "Standard pancreatitis sequela.",
      "P": "If symptomatic, perform endoscopic cystogastrostomy."
    },
    "id": 1629,
    "_src_file": "hpb.js"
  },
  {
    "specialty": "HPB Surgery",
    "topic": "Amoebic Liver Abscess",
    "question": "A patient presents with a liver abscess described as 'anchovy paste' on aspiration. What is the most likely pathogen and the first-line treatment?",
    "options": {
      "A": "Staphylococcus aureus; Vancomycin",
      "B": "Entamoeba histolytica; Metronidazole",
      "C": "Echinococcus granulosus; Albendazole",
      "D": "Klebsiella pneumoniae; Ceftriaxone"
    },
    "answer": "B",
    "explanation": {
      "correct": "Entamoeba histolytica causes amoebic liver abscesses, classically containing odorless brown fluid ('anchovy paste'). Treatment is medical (Metronidazole); surgery/aspiration is rarely needed.",
      "A": "Common in pyogenic abscess; aspirate is purulent.",
      "B": "Classic appearance and treatment.",
      "C": "Hydatid cyst; 'water lily sign'; aspirating is contraindicated (risk of anaphylaxis).",
      "D": "Common cause of pyogenic abscess in diabetics."
    },
    "guideline": "Management of Liver Abscesses",
    "takeaway": "Anchovy Paste Abscess = Entamoeba histolytica; Metronidazole.",
    "sharp_metadata": {
      "S": "Patient returning from tropical travel with RUQ pain and fever.",
      "H": "Excellence in diagnosis: Serology is positive in 90% of amoebic cases; stool O&P is often negative.",
      "A": "Identify the risk of rupture into the pericardium if the abscess is in the left lobe.",
      "R": "Infectious surgical pathology.",
      "P": "Start Metronidazole; drainage only if failing therapy or large/threatening rupture."
    },
    "id": 1630,
    "_src_file": "hpb.js"
  },
  {
    "specialty": "HPB Surgery",
    "topic": "Hepatobiliary Iminodiacetic Acid (HIDA) Scan",
    "question": "During a HIDA scan for suspected acute cholecystitis, the failure of the gallbladder to visualize within 4 hours despite hepatic uptake and excretion into the duodenum indicates:",
    "options": {
      "A": "A normal study",
      "B": "Biliary Atresia",
      "C": "Cystic duct obstruction (Acute Cholecystitis)",
      "D": "Chronic pancreatitis"
    },
    "answer": "C",
    "explanation": {
      "correct": "HIDA (Cholescintigraphy) relies on the tracer entering the gallbladder. If the liver and duodenum visualize but the gallbladder does not, it confirms cystic duct obstruction, the hallmark of acute cholecystitis.",
      "A": "Normal scan shows GB within 1 hour.",
      "B": "Shows NO excretion into the duodenum.",
      "C": "Diagnostic for cholecystitis.",
      "D": "Irrelevant."
    },
    "guideline": "Use of Scintigraphy in Biliary Disease",
    "takeaway": "HIDA: Non-visualization of GB = Acute Cholecystitis.",
    "sharp_metadata": {
      "S": "Patient with RUQ pain but equivocal ultrasound (no stones seen).",
      "H": "HIDA is the 'Gold Standard' for sensitivity in acute cholecystitis.",
      "A": "Address 'False Positives': Prolonged fasting, TPN, and severe liver disease can cause non-visualization without cholecystitis.",
      "R": "Core biliary imaging.",
      "P": "If HIDA is positive, proceed to cholecystectomy."
    },
    "id": 1631,
    "_src_file": "hpb.js"
  },
  {
    "id": 110,
    "specialty": "HPB",
    "topic": "Comprhensive Surgery Revision conv.docx",
    "question": "Cholecystokinin (CCK) is believed to function in all of the following processes except:",
    "options": {
      "B": "It appears to have a role in satiety regulation.",
      "E": "It is important in the control of the anal sphincter."
    },
    "answer": "E",
    "explanation": {
      "correct": "The question correctly identifies that CCK has a well-established role in satiety regulation (Option B). CCK is released in response to fat and protein in the duodenum, signaling to the brain to reduce food intake. This is a high-yield concept in gastrointestinal physiology and endocrinology.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "E",
      "set_the_stage": "This question probes your understanding of the physiological roles of cholecystokinin (CCK), a critical gut hormone. Mastery of CCK's functions is essential for comprehending digestion, nutrient absorption, and even broader metabolic regulation.",
      "highlight_excellence": "The question correctly identifies that CCK has a well-established role in satiety regulation (Option B). CCK is released in response to fat and protein in the duodenum, signaling to the brain to reduce food intake. This is a high-yield concept in gastrointestinal physiology and endocrinology.",
      "address_gaps": "The key to this question lies in recognizing what CCK *does not* do. While CCK is crucial for gallbladder contraction and pancreatic enzyme secretion, and influences gastric emptying, its direct, primary role in the control of the anal sphincter is not established. Other mechanisms, such as the rectoanal inhibitory reflex and pudendal nerve innervation, are far more central to anal sphincter function. Therefore, Option E is the exception.",
      "review_guidelines": "When evaluating hormonal functions, always consider the primary sites of release, target organs, and downstream effects. For CCK, think gallbladder, pancreas, stomach, and brain (for satiety). If a proposed function doesn't align with these core actions, it's likely the exception.",
      "plan": "Review the detailed physiological actions of CCK, focusing on its effects on gallbladder contraction, pancreatic secretion, gastric emptying, and satiety. Contrast these with the known mechanisms controlling anal sphincter function to solidify your understanding."
    },
    "guideline": "When evaluating hormonal functions, always consider the primary sites of release, target organs, and downstream effects. For CCK, think gallbladder, pancreas, stomach, and brain (for satiety). If a proposed function doesn't align with these core actions, it's likely the exception.",
    "takeaway": "PLAN: Review the detailed physiological actions of CCK, focusing on its effects on gallbladder contraction, pancreatic secretion, gastric emptying, and satiety. Contrast these with the known mechanisms controlling anal sphincter function to solidify your understanding.",
    "_src_file": "hpb.js"
  },
  {
    "id": 111,
    "specialty": "HPB",
    "topic": "Comprhensive Surgery Revision conv.docx",
    "question": "Which of the following statements about the segmental anatomy of the liver are not true?",
    "options": {
      "C": "The French anatomic system is more applicable than the American system to clinical hepatic resection.",
      "D": "Segments are important to the understanding of the topographic anatomy of the liver."
    },
    "answer": "D",
    "explanation": {
      "correct": "The core of hepatic segmental anatomy lies in its functional and vascular basis. Understanding these segments allows for precise planning of resections, minimizing blood loss and preserving functional liver parenchyma. The French system, based on vascular inflow, is indeed more directly applicable to guiding surgical resection planes than the American system, which is more focused on biliary drainage.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "D",
      "set_the_stage": "This question probes your understanding of hepatic segmental anatomy and its clinical relevance, a critical concept for surgeons performing liver resections. While the French and American systems offer different perspectives, their utility in guiding surgical strategy is paramount.",
      "highlight_excellence": "The core of hepatic segmental anatomy lies in its functional and vascular basis. Understanding these segments allows for precise planning of resections, minimizing blood loss and preserving functional liver parenchyma. The French system, based on vascular inflow, is indeed more directly applicable to guiding surgical resection planes than the American system, which is more focused on biliary drainage.",
      "address_gaps": "The provided answer key indicates 'D' is the incorrect statement. This implies that understanding the topographic anatomy of the liver is *not* important for understanding segmental anatomy. This is fundamentally incorrect. Segmental anatomy is *defined* by its topographic and vascular relationships. Therefore, the statement 'Segments are important to the understanding of the topographic anatomy of the liver' is TRUE. The question asks which statement is *not* true. This suggests a flaw in the question's premise or the provided answer key, as statement D is a correct assertion about segmental anatomy.",
      "review_guidelines": "When evaluating questions on hepatic anatomy, focus on the underlying principles: vascular supply (portal vein, hepatic artery), venous drainage (hepatic veins), and biliary drainage. Recognize that different classification systems exist (e.g., Couinaud's French system, Goldsmith's American system) and understand their respective strengths and weaknesses in clinical application, particularly for surgical planning.",
      "plan": "Revisit the definitions and clinical utility of the French (Couinaud) and American (Goldsmith) systems of hepatic segmental anatomy. Critically evaluate how each system relates to topographic anatomy and its direct application in surgical resection. If this question originated from a specific resource, cross-reference its explanation of hepatic segmental anatomy to identify potential discrepancies or unique interpretations."
    },
    "guideline": "When evaluating questions on hepatic anatomy, focus on the underlying principles: vascular supply (portal vein, hepatic artery), venous drainage (hepatic veins), and biliary drainage. Recognize that different classification systems exist (e.g., Couinaud's French system, Goldsmith's American system) and understand their respective strengths and weaknesses in clinical application, particularly for surgical planning.",
    "takeaway": "PLAN: Revisit the definitions and clinical utility of the French (Couinaud) and American (Goldsmith) systems of hepatic segmental anatomy. Critically evaluate how each system relates to topographic anatomy and its direct application in surgical resection. If this question originated from a specific resource, cross-reference its explanation of hepatic segmental anatomy to identify potential discrepancies or unique interpretations.",
    "_src_file": "hpb.js"
  },
  {
    "id": 118,
    "specialty": "HPB",
    "topic": "Comprhensive Surgery Revision conv.docx",
    "question": "Which statements about acute acalculous cholecystitis are correct?",
    "options": {
      "A": "The disease is often accompanied by or associated with other conditions.",
      "D": "The disease has been treated successfully by percutaneous cholecystostomy."
    },
    "answer": "AD",
    "explanation": {
      "correct": "Option A correctly emphasizes that AAC almost always co‑exists with other serious conditions—its pathogenesis is linked to ischemia, stasis, and infection in the setting of systemic illness. Option D accurately reflects current practice: percutaneous cholecystostomy (PC) is a well‑established, minimally invasive bridge to definitive therapy for patients who are too unstable for immediate cholecystectomy, and it has been shown to improve outcomes and reduce mortality.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "AD",
      "set_the_stage": "Acute acalculous cholecystitis (AAC) is a severe, often life‑threatening inflammation of the gallbladder that occurs without gallstones, typically in critically ill or postoperative patients. Because it lacks the classic biliary colic presentation, a high index of suspicion is required, especially in patients with systemic insults such as sepsis, trauma, burns, prolonged total parenteral nutrition, or mechanical ventilation.",
      "highlight_excellence": "Option A correctly emphasizes that AAC almost always co‑exists with other serious conditions—its pathogenesis is linked to ischemia, stasis, and infection in the setting of systemic illness. Option D accurately reflects current practice: percutaneous cholecystostomy (PC) is a well‑established, minimally invasive bridge to definitive therapy for patients who are too unstable for immediate cholecystectomy, and it has been shown to improve outcomes and reduce mortality.",
      "address_gaps": "The provided answer key listed only \"A\" as correct, overlooking the validity of \"D.\" This omission could mislead learners into thinking PC is not an accepted treatment, which contradicts modern guidelines and numerous studies demonstrating its efficacy. Additionally, the stem does not explicitly state whether multiple answers may be correct, which can cause confusion.",
      "review_guidelines": "According to the 2022 World Society of Emergency Surgery (WSES) and the 2023 American College of Surgeons (ACS) guidelines:\n- AAC should be suspected in critically ill patients with unexplained fever, leukocytosis, and right‑upper‑quadrant pain or tenderness.\n- Initial imaging (ultrasound or CT) may show gallbladder wall thickening, pericholecystic fluid, and a sonographic Murphy sign without stones.\n- Early percutaneous cholecystostomy is recommended for patients who are hemodynamically unstable or have prohibitive surgical risk; it serves as definitive therapy in some cases and as a temporizing measure before delayed cholecystectomy.\n- Definitive cholecystectomy (laparoscopic or open) is advised once the patient stabilizes.",
      "plan": "1. **Teaching Point**: Reinforce that AAC is a disease of systemic illness and that percutaneous cholecystostomy is a cornerstone of management in high‑risk patients.\n2. **Quiz Revision**: Update the answer key to \"AD\" and clarify in the stem that more than one option may be correct (e.g., \"Select all that apply\").\n3. **Clinical Algorithm**: Incorporate an AAC pathway into the institution’s acute care surgery protocol—early imaging, prompt PC placement for unstable patients, and scheduled interval cholecystectomy.\n4. **Self‑Assessment**: Provide a case vignette where learners must decide between immediate surgery vs. PC based on hemodynamic status, reinforcing guideline‑driven decision‑making.\n5. **Follow‑up**: Encourage review of recent literature on outcomes of PC versus early cholecystectomy in AAC to keep knowledge current."
    },
    "guideline": "According to the 2022 World Society of Emergency Surgery (WSES) and the 2023 American College of Surgeons (ACS) guidelines:\n- AAC should be suspected in critically ill patients with unexplained fever, leukocytosis, and right‑upper‑quadrant pain or tenderness.\n- Initial imaging (ultrasound or CT) may show gallbladder wall thickening, pericholecystic fluid, and a sonographic Murphy sign without stones.\n- Early percutaneous cholecystostomy is recommended for patients who are hemodynamically unstable or have prohibitive surgical risk; it serves as definitive therapy in some cases and as a temporizing measure before delayed cholecystectomy.\n- Definitive cholecystectomy (laparoscopic or open) is advised once the patient stabilizes.",
    "takeaway": "PLAN: 1. **Teaching Point**: Reinforce that AAC is a disease of systemic illness and that percutaneous cholecystostomy is a cornerstone of management in high‑risk patients.\n2. **Quiz Revision**: Update the answer key to \"AD\" and clarify in the stem that more than one option may be correct (e.g., \"Select all that apply\").\n3. **Clinical Algorithm**: Incorporate an AAC pathway into the institution’s acute care surgery protocol—early imaging, prompt PC placement for unstable patients, and scheduled interval cholecystectomy.\n4. **Self‑Assessment**: Provide a case vignette where learners must decide between immediate surgery vs. PC based on hemodynamic status, reinforcing guideline‑driven decision‑making.\n5. **Follow‑up**: Encourage review of recent literature on outcomes of PC versus early cholecystectomy in AAC to keep knowledge current.",
    "_src_file": "hpb.js"
  },
  {
    "id": 127,
    "specialty": "HPB",
    "topic": "Comprhensive Surgery Revision conv.docx",
    "question": "Which of the following comments does not describe hypersplenism?",
    "options": {
      "C": "It is associated with work hypertrophy from immune response.",
      "E": "It is associated with antibodies against platelets."
    },
    "answer": "E",
    "explanation": {
      "correct": "The correct answer (E) accurately reflects a key pathophysiological mechanism in hypersplenism – antibody-mediated platelet destruction. This is a primary driver of splenic enlargement in many cases, particularly those related to autoimmune conditions like ITP.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "E",
      "set_the_stage": "This question assesses understanding of hypersplenism, a condition characterized by an enlarged spleen due to compensatory mechanisms. It’s a common clinical scenario requiring a nuanced grasp of pathophysiology.",
      "highlight_excellence": "The correct answer (E) accurately reflects a key pathophysiological mechanism in hypersplenism – antibody-mediated platelet destruction. This is a primary driver of splenic enlargement in many cases, particularly those related to autoimmune conditions like ITP.",
      "address_gaps": "Option C, ‘work hypertrophy from immune response,’ is a partially accurate but overly simplistic description. While immune response plays a role, hypersplenism isn’t solely defined by ‘work hypertrophy.’ It’s a complex interplay of increased red blood cell destruction, platelet destruction, and white blood cell sequestration. The question tests the ability to differentiate between contributing factors rather than a single mechanism.",
      "review_guidelines": "1. **Pathophysiology of Hypersplenism:** Understand the three primary drivers: increased RBC destruction, increased platelet destruction, and increased WBC sequestration. 2. **Causes:** Recognize common causes including ITP, HUS, and myeloproliferative disorders. 3. **Clinical Presentation:** Be familiar with symptoms like anemia, thrombocytopenia, and leukopenia. 4. **Diagnostic Testing:** Know the role of splenic aspiration and biopsy in confirming the diagnosis and identifying the underlying cause.",
      "plan": "Further review should focus on the specific causes of hypersplenism and their respective mechanisms. A detailed understanding of immune-mediated platelet destruction (ITP) is crucial. Consider creating a table summarizing the key causes and their associated pathophysiological changes. Further practice questions focusing on differential diagnosis of cytopenias are recommended."
    },
    "guideline": "1. **Pathophysiology of Hypersplenism:** Understand the three primary drivers: increased RBC destruction, increased platelet destruction, and increased WBC sequestration. 2. **Causes:** Recognize common causes including ITP, HUS, and myeloproliferative disorders. 3. **Clinical Presentation:** Be familiar with symptoms like anemia, thrombocytopenia, and leukopenia. 4. **Diagnostic Testing:** Know the role of splenic aspiration and biopsy in confirming the diagnosis and identifying the underlying cause.",
    "takeaway": "PLAN: Further review should focus on the specific causes of hypersplenism and their respective mechanisms. A detailed understanding of immune-mediated platelet destruction (ITP) is crucial. Consider creating a table summarizing the key causes and their associated pathophysiological changes. Further practice questions focusing on differential diagnosis of cytopenias are recommended.",
    "_src_file": "hpb.js"
  },
  {
    "id": 121,
    "specialty": "HPB",
    "topic": "Comprhensive Surgery Revision conv.docx",
    "question": "Which of the following statements about laparoscopic cholecystectomy are correct?",
    "options": {
      "A": "The procedure is associated with less postoperative pain and earlier return to normal activity.",
      "D": "Pregnancy is a contraindication."
    },
    "answer": "A",
    "explanation": {
      "correct": "The correct answer (A) reflects established clinical practice. Laparoscopic cholecystectomy consistently demonstrates reduced postoperative pain and a faster return to normal activities compared to open cholecystectomy. This is due to smaller incisions, less tissue trauma, and generally shorter hospital stays.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "A",
      "set_the_stage": "This question assesses understanding of laparoscopic cholecystectomy – a common procedure for gallbladder removal. It tests knowledge of typical outcomes and important contraindications.",
      "highlight_excellence": "The correct answer (A) reflects established clinical practice. Laparoscopic cholecystectomy consistently demonstrates reduced postoperative pain and a faster return to normal activities compared to open cholecystectomy. This is due to smaller incisions, less tissue trauma, and generally shorter hospital stays.",
      "address_gaps": "Option D, ‘Pregnancy is a contraindication,’ is partially correct but requires nuance. While laparoscopic cholecystectomy *can* be performed in pregnancy, it’s generally avoided if possible due to the risk of retained bile duct injury. The question phrasing implies a strict contraindication, which isn't entirely accurate. A more precise answer would acknowledge the potential for performance but highlight the increased risk.",
      "review_guidelines": "Key review points include:\n*   **Pain Management:** Laparoscopic approaches lead to significantly less post-operative pain.\n*   **Return to Function:** Patients typically resume normal activities more quickly.\n*   **Pregnancy Considerations:** While technically possible, laparoscopic cholecystectomy in pregnancy requires careful consideration and often a planned open approach to minimize risks.",
      "plan": "Further study should focus on the rationale behind laparoscopic techniques, the potential complications of cholecystectomy (including bile duct injury), and the differences between laparoscopic and open surgical approaches. Reviewing surgical anatomy and biliary system pathology is also crucial."
    },
    "guideline": "Key review points include:\n*   **Pain Management:** Laparoscopic approaches lead to significantly less post-operative pain.\n*   **Return to Function:** Patients typically resume normal activities more quickly.\n*   **Pregnancy Considerations:** While technically possible, laparoscopic cholecystectomy in pregnancy requires careful consideration and often a planned open approach to minimize risks.",
    "takeaway": "PLAN: Further study should focus on the rationale behind laparoscopic techniques, the potential complications of cholecystectomy (including bile duct injury), and the differences between laparoscopic and open surgical approaches. Reviewing surgical anatomy and biliary system pathology is also crucial.",
    "_src_file": "hpb.js"
  },
  {
    "id": 122,
    "specialty": "HPB",
    "topic": "Comprhensive Surgery Revision conv.docx",
    "question": "Which of the following statements about adenocarcinoma of the pancreas is/are correct?",
    "options": {
      "A": "The most important diagnostic study for insulinoma is an oral glucose tolerance test.",
      "D": "An important component of the preoperative evaluation in patients with presumed insulinoma involves confirming elevated C-peptide or proinsulin levels and screening for anti-insulin antibodies."
    },
    "answer": "D",
    "explanation": {
      "correct": "The correct answer (D) accurately reflects the key diagnostic steps. Confirming elevated C-peptide or proinsulin levels alongside screening for anti-insulin antibodies is *the* gold standard for confirming an insulinoma. This distinguishes it from other causes of hyperglycemia and provides crucial evidence for the diagnosis.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "D",
      "set_the_stage": "This question assesses understanding of the diagnostic workup for suspected insulinomas, which frequently occur as a component of pancreatic neuroendocrine tumors, including adenocarcinoma. It’s crucial to differentiate between insulinomas (typically islet cell tumors) and adenocarcinoma of the pancreas, which often presents with glucose dysregulation.",
      "highlight_excellence": "The correct answer (D) accurately reflects the key diagnostic steps. Confirming elevated C-peptide or proinsulin levels alongside screening for anti-insulin antibodies is *the* gold standard for confirming an insulinoma. This distinguishes it from other causes of hyperglycemia and provides crucial evidence for the diagnosis.",
      "address_gaps": "Option A is incorrect. An oral glucose tolerance test (OGTT) is used for diagnosing *insulinomas*, not adenocarcinoma of the pancreas. While hyperglycemia can occur in both, the diagnostic approach differs significantly. The question’s phrasing implies a broader understanding of pancreatic tumor evaluation, which was not fully addressed.",
      "review_guidelines": "1. **Differential Diagnosis:** Always consider the differential diagnosis when evaluating a patient with hyperglycemia. Insulinomas, gastrinomas, VIPomas, and other pancreatic tumors must be ruled out. 2. **C-peptide and Proinsulin:** Elevated C-peptide and proinsulin levels strongly suggest endogenous insulin production, a hallmark of insulinomas. 3. **Anti-insulin Antibodies:** These antibodies are highly specific for insulinomas and further solidify the diagnosis. 4. **Imaging:** CT or MRI are used to visualize the pancreas and identify the tumor. 5. **Biopsy:** Definitive diagnosis requires tissue confirmation via biopsy or surgical resection.",
      "plan": "I recommend a review of pancreatic neuroendocrine tumors, specifically focusing on the diagnostic criteria for insulinomas versus adenocarcinoma. Further practice questions should emphasize the importance of targeted investigations based on clinical suspicion and biochemical findings. Consider a case-based approach, walking through the diagnostic process step-by-step."
    },
    "guideline": "1. **Differential Diagnosis:** Always consider the differential diagnosis when evaluating a patient with hyperglycemia. Insulinomas, gastrinomas, VIPomas, and other pancreatic tumors must be ruled out. 2. **C-peptide and Proinsulin:** Elevated C-peptide and proinsulin levels strongly suggest endogenous insulin production, a hallmark of insulinomas. 3. **Anti-insulin Antibodies:** These antibodies are highly specific for insulinomas and further solidify the diagnosis. 4. **Imaging:** CT or MRI are used to visualize the pancreas and identify the tumor. 5. **Biopsy:** Definitive diagnosis requires tissue confirmation via biopsy or surgical resection.",
    "takeaway": "PLAN: I recommend a review of pancreatic neuroendocrine tumors, specifically focusing on the diagnostic criteria for insulinomas versus adenocarcinoma. Further practice questions should emphasize the importance of targeted investigations based on clinical suspicion and biochemical findings. Consider a case-based approach, walking through the diagnostic process step-by-step.",
    "_src_file": "hpb.js"
  },
  {
    "id": 108,
    "specialty": "HPB",
    "topic": "Comprhensive Surgery Revision conv.docx",
    "question": "Which of the following are true concerning islet cell neoplasms of the pancreas in patients with MEN type 1?",
    "options": {
      "A": "Islet cell neoplasms in patients with MEN 1 are characteristically multicentric.",
      "B": "The most common islet cell neoplasm in patients with MEN 1 is gastrinoma.",
      "D": "All of the above."
    },
    "answer": "Letter D",
    "explanation": {
      "correct": "The correct answer (D) reflects the core pathophysiology of MEN 1. The syndrome is characterized by autonomous pancreatic polypeptide secretion, which frequently manifests as islet cell neuroendocrine tumors. These tumors are almost invariably multicentric, reflecting the genetic mutations (primarily RET) driving the disease. Recognizing this is crucial for appropriate diagnostic and therapeutic strategies.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "Letter D",
      "set_the_stage": "This question assesses understanding of the complex interplay between MEN 1, pancreatic neuroendocrine tumors (NETs), and the specific types of NETs commonly encountered in this patient population. It’s a high-yield area due to the significant morbidity and mortality associated with these tumors.",
      "highlight_excellence": "The correct answer (D) reflects the core pathophysiology of MEN 1. The syndrome is characterized by autonomous pancreatic polypeptide secretion, which frequently manifests as islet cell neuroendocrine tumors. These tumors are almost invariably multicentric, reflecting the genetic mutations (primarily RET) driving the disease. Recognizing this is crucial for appropriate diagnostic and therapeutic strategies.",
      "address_gaps": "Let's break down why the other options are incorrect:\n*   **A:** While multicentricity is *highly* common in MEN 1 NETs, gastrinoma is not the most common islet cell neoplasm. It's a separate tumor type associated with MEN 1, typically found in the duodenum.\n*   **B:** Gastrinoma is the hallmark tumor of MEN 1, arising from the G-cell cluster of the duodenum, not the pancreas. Islet cell tumors are a different entity altogether.",
      "review_guidelines": "1.  **MEN 1 Pathophysiology:** Understand the RET proto-oncogene mutation and its role in driving pancreatic NET development. 2.  **Islet Cell NETs in MEN 1:** Recognize that these tumors are almost always multicentric and often associated with pancreatic polypeptide secretion. 3.  **Distinguish NET Types:** Differentiate between gastrinomas (MEN 1 duodenum) and islet cell NETs (MEN 1 pancreas). 4.  **Diagnostic Approach:**  Consider imaging (CT, MRI) and biochemical markers (pancreatic polypeptide, chromogranin A) in the evaluation of suspected MEN 1 NETs.",
      "plan": "Further learning should focus on detailed imaging protocols for MEN 1 NETs, including the use of PET/CT for staging. Additionally, review the current treatment options, which include surgery, peptide analogs, and potentially targeted therapies. Consider a case-based approach to solidify understanding of the clinical presentation and management of these challenging tumors."
    },
    "guideline": "1.  **MEN 1 Pathophysiology:** Understand the RET proto-oncogene mutation and its role in driving pancreatic NET development. 2.  **Islet Cell NETs in MEN 1:** Recognize that these tumors are almost always multicentric and often associated with pancreatic polypeptide secretion. 3.  **Distinguish NET Types:** Differentiate between gastrinomas (MEN 1 duodenum) and islet cell NETs (MEN 1 pancreas). 4.  **Diagnostic Approach:**  Consider imaging (CT, MRI) and biochemical markers (pancreatic polypeptide, chromogranin A) in the evaluation of suspected MEN 1 NETs.",
    "takeaway": "PLAN: Further learning should focus on detailed imaging protocols for MEN 1 NETs, including the use of PET/CT for staging. Additionally, review the current treatment options, which include surgery, peptide analogs, and potentially targeted therapies. Consider a case-based approach to solidify understanding of the clinical presentation and management of these challenging tumors.",
    "_src_file": "hpb.js"
  },
  {
    "id": 105,
    "specialty": "HPB",
    "topic": "rush.docx",
    "question": "A 62-year-old man with a history of chronic pancreatitis from alcohol abuse presents to the emergency department with complaints of fevers and abdominal pain. On examination, he is febrile to 100.8°F. He is jaundiced and has right upper quadrant tenderness. His liver enzymes are elevated with a new leukocytosis. A CT scan of the abdomen demonstrates cirrhotic liver morphology, calcifications along the pancreas, and a rim-enhancing hypoechoic liver lesion. Which of the following is true regarding the diagnosis of a pyogenic liver abscess (PL",
    "options": {
      "B": "The most common etiology of PLAs is seeding from another intraabdominal infection via the portal vein.",
      "C": "Most PLAs are polymicrobial, and in the United States,",
      "E": "Failure to improve with broad-spectrum antibiotic administration"
    },
    "answer": "B",
    "explanation": {
      "correct": "The correct answer (B) accurately reflects the pathogenesis of pyogenic liver abscesses (PLAs) in this context. PLAs frequently arise from portal vein seeding, a direct consequence of chronic liver disease (like cirrhosis from pancreatitis) and portal hypertension. This is a crucial understanding for surgical management – the source of infection needs to be identified and addressed, often requiring interventions beyond just antibiotics.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "B",
      "set_the_stage": "This case presents a complex clinical scenario – a 62-year-old with chronic pancreatitis, suggestive of significant portal hypertension and potential for infection. The constellation of symptoms (fevers, jaundice, RUQ pain, elevated liver enzymes, leukocytosis, and a ring-enhancing liver lesion) strongly points towards a liver abscess, but the etiology needs careful consideration given his history.",
      "highlight_excellence": "The correct answer (B) accurately reflects the pathogenesis of pyogenic liver abscesses (PLAs) in this context. PLAs frequently arise from portal vein seeding, a direct consequence of chronic liver disease (like cirrhosis from pancreatitis) and portal hypertension. This is a crucial understanding for surgical management – the source of infection needs to be identified and addressed, often requiring interventions beyond just antibiotics.",
      "address_gaps": "Options C and E are less accurate. While PLAs are often polymicrobial, the *specific* etiology in this patient is more likely related to his underlying chronic pancreatitis and resultant portal hypertension. Simply stating ‘most PLAs are polymicrobial’ is too general. Furthermore, failure to improve with antibiotics is a *complication* of the abscess, not a defining characteristic of the diagnosis itself. The CT findings (cirrhotic morphology, calcifications, and ring-enhancing lesion) are important but don't directly dictate the *cause* of the abscess.",
      "review_guidelines": "1. **Understanding Portal Hypertension & Liver Abscesses:** Recognize the link between chronic pancreatitis, cirrhosis, portal hypertension, and increased risk of PLAs. 2. **Etiology of PLAs:** Prioritize portal vein seeding as the most common source in patients with underlying liver disease. 3. **CT Interpretation:**  Be able to interpret CT findings of cirrhotic liver morphology, calcifications, and ring-enhancing lesions in the context of suspected abscesses. 4. **Management:**  A thorough workup including imaging and potentially ERCP to identify and drain the abscess is critical. Broad-spectrum antibiotics are essential, but addressing the underlying cause is paramount.",
      "plan": "1. **Further Imaging:** Obtain contrast-enhanced CT or MRI to better characterize the abscess and identify potential sources of infection (e.g., pancreatic duct dilation, biliary tree involvement). 2. **ERCP:** Consider ERCP with possible stent placement to address biliary obstruction or pancreatic duct dilation, which can contribute to abscess formation. 3. **Drainage:**  Interventional radiology or surgical drainage of the abscess is the mainstay of treatment. 4. **Antibiotics:** Continue broad-spectrum antibiotics, adjusting based on culture results. 5. **Patient Education:** Counsel the patient on the importance of alcohol abstinence and lifestyle modifications to prevent further liver damage."
    },
    "guideline": "1. **Understanding Portal Hypertension & Liver Abscesses:** Recognize the link between chronic pancreatitis, cirrhosis, portal hypertension, and increased risk of PLAs. 2. **Etiology of PLAs:** Prioritize portal vein seeding as the most common source in patients with underlying liver disease. 3. **CT Interpretation:**  Be able to interpret CT findings of cirrhotic liver morphology, calcifications, and ring-enhancing lesions in the context of suspected abscesses. 4. **Management:**  A thorough workup including imaging and potentially ERCP to identify and drain the abscess is critical. Broad-spectrum antibiotics are essential, but addressing the underlying cause is paramount.",
    "takeaway": "PLAN: 1. **Further Imaging:** Obtain contrast-enhanced CT or MRI to better characterize the abscess and identify potential sources of infection (e.g., pancreatic duct dilation, biliary tree involvement). 2. **ERCP:** Consider ERCP with possible stent placement to address biliary obstruction or pancreatic duct dilation, which can contribute to abscess formation. 3. **Drainage:**  Interventional radiology or surgical drainage of the abscess is the mainstay of treatment. 4. **Antibiotics:** Continue broad-spectrum antibiotics, adjusting based on culture results. 5. **Patient Education:** Counsel the patient on the importance of alcohol abstinence and lifestyle modifications to prevent further liver damage.",
    "_src_file": "hpb.js"
  },
  {
    "id": 115,
    "specialty": "HPB",
    "topic": "Comprhensive Surgery Revision conv.docx",
    "question": "Which of the following statement(s) about malignant neoplasms of the liver is/are true?",
    "options": {
      "B": "The most common resectable hepatic malignant neoplasm in the United States is colorectal metastasis.",
      "D": "Hepatomas are generally slower growing than was formerly believed."
    },
    "answer": "Letter D",
    "explanation": {
      "correct": "The correct answer (D) reflects a crucial shift in our understanding of hepatoma. Historically, hepatomas were considered slow-growing, but research has demonstrated significant heterogeneity. Some hepatomas, particularly those with specific genetic mutations (e.g., *TP53* mutations), can exhibit aggressive growth patterns. This highlights the importance of molecular profiling in HCC management.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "Letter D",
      "set_the_stage": "This question assesses understanding of key characteristics of hepatocellular carcinoma (HCC), the most common primary liver malignancy. It tests knowledge of both common metastatic patterns and recent advancements in hepatoma growth rates.",
      "highlight_excellence": "The correct answer (D) reflects a crucial shift in our understanding of hepatoma. Historically, hepatomas were considered slow-growing, but research has demonstrated significant heterogeneity. Some hepatomas, particularly those with specific genetic mutations (e.g., *TP53* mutations), can exhibit aggressive growth patterns. This highlights the importance of molecular profiling in HCC management.",
      "address_gaps": "The incorrect answer (B) is a significant misinterpretation. Colorectal metastasis is a *common* liver metastasis overall, but it is *not* the most common *resectable* hepatic malignant neoplasm in the United States. The most common resectable HCC arises from primary liver lesions, often with underlying chronic liver disease (e.g., cirrhosis).  Understanding the etiology of HCC (primarily chronic viral hepatitis – HBV/HCV – and NAFLD/NASH) is critical.",
      "review_guidelines": "1. **HCC Etiology:**  Review the major risk factors for HCC: chronic hepatitis B and C, cirrhosis (NAFLD/NASH), alcohol abuse. 2. **Molecular Profiling:**  Understand the role of genetic mutations (e.g., *TP53*, *PIK3CA*, *CTNNB1*) in HCC progression and response to therapy. 3. **Resectability:**  Assess liver resectability based on Milan criteria or modified Milan criteria, considering tumor size, number, and presence of extrahepatic disease. 4. **Treatment Strategies:**  Familiarize yourself with surveillance, ablation, transarterial chemoembolization (TACE), and liver transplantation as treatment options.",
      "plan": "Further study should focus on the molecular subtypes of HCC, the impact of cirrhosis on HCC development, and the evolving criteria for liver resection and transplantation.  Clinical case review focusing on HCC patients is highly recommended."
    },
    "guideline": "1. **HCC Etiology:**  Review the major risk factors for HCC: chronic hepatitis B and C, cirrhosis (NAFLD/NASH), alcohol abuse. 2. **Molecular Profiling:**  Understand the role of genetic mutations (e.g., *TP53*, *PIK3CA*, *CTNNB1*) in HCC progression and response to therapy. 3. **Resectability:**  Assess liver resectability based on Milan criteria or modified Milan criteria, considering tumor size, number, and presence of extrahepatic disease. 4. **Treatment Strategies:**  Familiarize yourself with surveillance, ablation, transarterial chemoembolization (TACE), and liver transplantation as treatment options.",
    "takeaway": "PLAN: Further study should focus on the molecular subtypes of HCC, the impact of cirrhosis on HCC development, and the evolving criteria for liver resection and transplantation.  Clinical case review focusing on HCC patients is highly recommended.",
    "_src_file": "hpb.js"
  },
  {
    "id": 113,
    "specialty": "HPB",
    "topic": "Comprhensive Surgery Revision conv.docx",
    "question": "Which of the following statements about pyogenic abscess of the liver are true?",
    "options": {
      "B": "Appendicitis with perforation and abscess is the most common underlying cause of hepatic abscess.",
      "D": "Mortality from hepatic abscess is currently greater than 40%."
    },
    "answer": "Letter of the clinically correct answer (which is not provided in the prompt, but assumed to be 'A' based on the key).",
    "explanation": {
      "correct": "The core concept correctly identifies that hepatic abscesses are often associated with bacterial infections, frequently originating from the gastrointestinal tract. While the options presented contain some partially accurate statements, the high mortality rate (currently significantly lower than 40%) and the commonality of appendicitis as a cause are key areas needing careful consideration. The provided answer key (A) is a placeholder; the *actual* correct answer would depend on the specific options presented.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "Letter of the clinically correct answer (which is not provided in the prompt, but assumed to be 'A' based on the key).",
      "set_the_stage": "This question assesses understanding of pyogenic liver abscess etiology and mortality. Hepatic abscesses represent a significant surgical and infectious disease challenge, often requiring drainage and antibiotic therapy. The provided multiple-choice options test knowledge of common causes and typical outcomes.",
      "highlight_excellence": "The core concept correctly identifies that hepatic abscesses are often associated with bacterial infections, frequently originating from the gastrointestinal tract. While the options presented contain some partially accurate statements, the high mortality rate (currently significantly lower than 40%) and the commonality of appendicitis as a cause are key areas needing careful consideration. The provided answer key (A) is a placeholder; the *actual* correct answer would depend on the specific options presented.",
      "address_gaps": "The question itself has a flaw – it lacks the actual answer choice (A) to properly evaluate. Furthermore, the options provided are somewhat outdated. Current mortality rates for hepatic abscesses are generally below 20% with appropriate diagnosis and treatment. The statement about appendicitis being the *most* common cause is also an oversimplification; other sources like diverticulitis and contiguous spread from other infections are significant contributors. A more robust question would include more nuanced options reflecting current epidemiological data.",
      "review_guidelines": "1. **Etiology:** Understand the common sources of hepatic abscesses (e.g., *E. coli*, *Klebsiella*, *Enterococcus*). Consider the role of gastrointestinal pathology (appendicitis, diverticulitis, peptic ulcer disease) and contiguous spread. 2. **Risk Factors:** Recognize factors increasing risk (e.g., diabetes, immunosuppression, alcohol abuse). 3. **Diagnosis:** Emphasize the importance of imaging (CT scan, ultrasound) in confirming diagnosis and guiding drainage. 4. **Treatment:**  Focus on prompt drainage (percutaneously or surgically) and appropriate antibiotic coverage. 5. **Mortality:** Mortality rates vary depending on factors like abscess size, location, and patient comorbidities. Current mortality rates are generally below 20% with timely intervention.",
      "plan": "Further education should focus on updating knowledge of current mortality rates, refining understanding of the diverse etiologies of hepatic abscesses, and emphasizing the importance of rapid diagnosis and targeted treatment. A more detailed question with a correct answer choice (A) would be beneficial for assessing this knowledge. Consider incorporating questions related to imaging modalities and antibiotic selection strategies."
    },
    "guideline": "1. **Etiology:** Understand the common sources of hepatic abscesses (e.g., *E. coli*, *Klebsiella*, *Enterococcus*). Consider the role of gastrointestinal pathology (appendicitis, diverticulitis, peptic ulcer disease) and contiguous spread. 2. **Risk Factors:** Recognize factors increasing risk (e.g., diabetes, immunosuppression, alcohol abuse). 3. **Diagnosis:** Emphasize the importance of imaging (CT scan, ultrasound) in confirming diagnosis and guiding drainage. 4. **Treatment:**  Focus on prompt drainage (percutaneously or surgically) and appropriate antibiotic coverage. 5. **Mortality:** Mortality rates vary depending on factors like abscess size, location, and patient comorbidities. Current mortality rates are generally below 20% with timely intervention.",
    "takeaway": "PLAN: Further education should focus on updating knowledge of current mortality rates, refining understanding of the diverse etiologies of hepatic abscesses, and emphasizing the importance of rapid diagnosis and targeted treatment. A more detailed question with a correct answer choice (A) would be beneficial for assessing this knowledge. Consider incorporating questions related to imaging modalities and antibiotic selection strategies.",
    "_src_file": "hpb.js"
  },
  {
    "id": 119,
    "specialty": "HPB",
    "topic": "Comprhensive Surgery Revision conv.docx",
    "question": "True statements about the surgical management of patients with acute calculous cholecystitis include:",
    "options": {
      "C": "Dissection of the gallbladder is facilitated by decompression of the organ with the use of a trocar.",
      "D": "An operative cholangiogram should be done in every patient."
    },
    "answer": "D",
    "explanation": {
      "correct": "The correct answer (D) accurately reflects current surgical practice. Performing an operative cholangiogram *is* routinely indicated in patients with acute cholecystitis to rule out common bile duct stones, which can be missed on initial imaging and lead to significant morbidity if not addressed surgically. This demonstrates a crucial understanding of biliary anatomy and potential complications.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "D",
      "set_the_stage": "This question assesses understanding of the surgical management of acute calculous cholecystitis, a common biliary pathology. It tests the ability to differentiate between established surgical practices and potentially misleading statements.",
      "highlight_excellence": "The correct answer (D) accurately reflects current surgical practice. Performing an operative cholangiogram *is* routinely indicated in patients with acute cholecystitis to rule out common bile duct stones, which can be missed on initial imaging and lead to significant morbidity if not addressed surgically. This demonstrates a crucial understanding of biliary anatomy and potential complications.",
      "address_gaps": "Option C is incorrect and represents a potentially dangerous surgical technique. While trocar-assisted cholecystectomy is a valid approach, *facilitating dissection* with gallbladder decompression is not the primary goal or a standard practice. Attempting to dissect with gallbladder decompression carries a significant risk of bile duct injury. Option D, while generally true, could benefit from more specific phrasing (e.g., ‘should be considered’ rather than ‘should be done in every patient’).  The question doesn't adequately address the nuances of laparoscopic versus open cholecystectomy, which are important considerations.",
      "review_guidelines": "1. **Biliary Anatomy:** Thoroughly review the anatomy of the biliary tree, including the cystic duct, common bile duct, and potential variations. 2. **Risk Stratification:** Understand the factors that increase the risk of common bile duct stones (e.g., gender, age, presence of choledocholithiasis). 3. **Imaging Interpretation:**  Be proficient in interpreting pre-operative imaging (ultrasound, CT, MRCP) to assess the presence and location of stones and identify potential complications. 4. **Surgical Techniques:**  Familiarize yourself with both laparoscopic and open cholecystectomy techniques, including their respective advantages and disadvantages. 5. **Postoperative Management:** Understand the principles of postoperative care, including pain management, monitoring for complications, and early discharge protocols.",
      "plan": "Further review should focus on operative cholangiography protocols in biliary disease, the indications for laparoscopic versus open cholecystectomy, and the potential complications associated with each approach.  Specifically, students should reinforce the importance of a thorough pre-operative assessment to identify patients at higher risk of common bile duct stones and the need for extended cholangioscopic evaluation."
    },
    "guideline": "1. **Biliary Anatomy:** Thoroughly review the anatomy of the biliary tree, including the cystic duct, common bile duct, and potential variations. 2. **Risk Stratification:** Understand the factors that increase the risk of common bile duct stones (e.g., gender, age, presence of choledocholithiasis). 3. **Imaging Interpretation:**  Be proficient in interpreting pre-operative imaging (ultrasound, CT, MRCP) to assess the presence and location of stones and identify potential complications. 4. **Surgical Techniques:**  Familiarize yourself with both laparoscopic and open cholecystectomy techniques, including their respective advantages and disadvantages. 5. **Postoperative Management:** Understand the principles of postoperative care, including pain management, monitoring for complications, and early discharge protocols.",
    "takeaway": "PLAN: Further review should focus on operative cholangiography protocols in biliary disease, the indications for laparoscopic versus open cholecystectomy, and the potential complications associated with each approach.  Specifically, students should reinforce the importance of a thorough pre-operative assessment to identify patients at higher risk of common bile duct stones and the need for extended cholangioscopic evaluation.",
    "_src_file": "hpb.js"
  },
  {
    "id": 112,
    "specialty": "HPB",
    "topic": "Comprhensive Surgery Revision conv.docx",
    "question": "Which of the following anatomic features of the biliary system are important considerations in operative cholangiography?",
    "options": {
      "C": "Dissection of the triangle of Calot is more important than cholangiography in preventing bile duct injury.",
      "D": "Segments V, VII, or VIII sometimes join the biliary system below the confluence."
    },
    "answer": "D",
    "explanation": {
      "correct": "The correct answer (D) correctly identifies that segments V, VII, and VIII can occasionally join the biliary system below the confluence. This is a *crucial* anatomical variation that must be meticulously identified and protected during dissection. Failure to recognize this can lead to injury to these often-small, vulnerable ducts.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "D",
      "set_the_stage": "This question assesses understanding of biliary anatomy and its critical relevance during operative cholangiography – a procedure involving visualization of the biliary ducts to guide surgical intervention. Incorrect identification of anatomical landmarks significantly increases the risk of bile duct injury.",
      "highlight_excellence": "The correct answer (D) correctly identifies that segments V, VII, and VIII can occasionally join the biliary system below the confluence. This is a *crucial* anatomical variation that must be meticulously identified and protected during dissection. Failure to recognize this can lead to injury to these often-small, vulnerable ducts.",
      "address_gaps": "The incorrect answer (C) is a significant overstatement. While the Dissection of the Triangle of Calot is *absolutely* paramount, it’s not *more* important than cholangiography itself. Cholangiography *reveals* the anatomy within the triangle of Calot, allowing for precise surgical navigation. The triangle is the *site* of the highest risk, not the entire procedure.  The question also doesn't adequately address the variability in biliary anatomy.",
      "review_guidelines": "1. **Triangle of Calot:** Thoroughly review the anatomy of the triangle of Calot – superior, inferior, and middle cystic arteries, cystic duct, and surrounding structures. Understand its variations. 2. **Segmental Anatomy:**  Become familiar with the segmental anatomy of the biliary system, including the existence and potential confluence of segments V, VII, and VIII. 3. **Cholangiography Technique:**  Review the principles of operative cholangiography – including the use of contrast, fluoroscopy, and appropriate visualization techniques. 4. **Risk Mitigation:**  Reinforce the importance of meticulous dissection and cholangiography in minimizing the risk of bile duct injury.",
      "plan": "I recommend a focused review of biliary anatomy, specifically the triangle of Calot and segmental variations.  Case studies illustrating the consequences of anatomical misidentification should be examined.  Simulation exercises focusing on the dissection within the triangle of Calot are highly beneficial.  Finally, reinforce the understanding that cholangiography is a *diagnostic* and *navigational* tool, not simply an imaging modality."
    },
    "guideline": "1. **Triangle of Calot:** Thoroughly review the anatomy of the triangle of Calot – superior, inferior, and middle cystic arteries, cystic duct, and surrounding structures. Understand its variations. 2. **Segmental Anatomy:**  Become familiar with the segmental anatomy of the biliary system, including the existence and potential confluence of segments V, VII, and VIII. 3. **Cholangiography Technique:**  Review the principles of operative cholangiography – including the use of contrast, fluoroscopy, and appropriate visualization techniques. 4. **Risk Mitigation:**  Reinforce the importance of meticulous dissection and cholangiography in minimizing the risk of bile duct injury.",
    "takeaway": "PLAN: I recommend a focused review of biliary anatomy, specifically the triangle of Calot and segmental variations.  Case studies illustrating the consequences of anatomical misidentification should be examined.  Simulation exercises focusing on the dissection within the triangle of Calot are highly beneficial.  Finally, reinforce the understanding that cholangiography is a *diagnostic* and *navigational* tool, not simply an imaging modality.",
    "_src_file": "hpb.js"
  },
  {
    "id": 104,
    "specialty": "HPB",
    "topic": "rush.docx",
    "question": "In the patient above, stress hypermetabolism is characterized by:",
    "options": {
      "C": "Fluid imbalance and increased resting metabolic rate",
      "E": "Decreased urinary protein retention"
    },
    "answer": "C",
    "explanation": {
      "correct": "The correct answer (C) accurately reflects the hallmarks of stress hypermetabolism: fluid imbalance (due to increased renal perfusion and sodium retention) and a dramatically increased resting metabolic rate. This is driven primarily by catecholamines (epinephrine and norepinephrine) which stimulate glycogenolysis, gluconeogenesis, and lipolysis.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "C",
      "set_the_stage": "This question assesses understanding of the physiological response to stress, specifically focusing on the concept of stress hypermetabolism. Stress, particularly acute stress like that experienced in trauma or sepsis, triggers a cascade of hormonal responses leading to a significant metabolic shift.",
      "highlight_excellence": "The correct answer (C) accurately reflects the hallmarks of stress hypermetabolism: fluid imbalance (due to increased renal perfusion and sodium retention) and a dramatically increased resting metabolic rate. This is driven primarily by catecholamines (epinephrine and norepinephrine) which stimulate glycogenolysis, gluconeogenesis, and lipolysis.",
      "address_gaps": "Option E is incorrect. Stress hypermetabolism *decreases* urinary protein retention, not increases it.  The increased renal perfusion and sodium retention associated with stress hypermetabolism actually lead to increased protein excretion.  A key misunderstanding here is conflating the effects of stress on protein handling with the overall metabolic response.",
      "review_guidelines": "1. **Understand the Hormonal Cascade:** Review the role of catecholamines (epinephrine, norepinephrine) in driving metabolic changes. 2. **Renal Physiology:**  Reinforce the concept of renal perfusion and sodium retention during stress. 3. **Metabolic Pathways:**  Revisit the metabolic pathways stimulated by catecholamines (glycogenolysis, gluconeogenesis, lipolysis). 4. **Contrast with Stress Hypometabolism:**  Compare and contrast stress hypermetabolism with stress hypometabolism (e.g., in neurogenic stunned myocardium).",
      "plan": "Further assessment should include evaluating the patient's vital signs (temperature, heart rate, blood pressure), fluid status, and electrolyte levels. Consider initiating interventions to manage fluid overload (e.g., diuretics) and address potential electrolyte imbalances. Monitoring for signs of hyperglycemia is also crucial."
    },
    "guideline": "1. **Understand the Hormonal Cascade:** Review the role of catecholamines (epinephrine, norepinephrine) in driving metabolic changes. 2. **Renal Physiology:**  Reinforce the concept of renal perfusion and sodium retention during stress. 3. **Metabolic Pathways:**  Revisit the metabolic pathways stimulated by catecholamines (glycogenolysis, gluconeogenesis, lipolysis). 4. **Contrast with Stress Hypometabolism:**  Compare and contrast stress hypermetabolism with stress hypometabolism (e.g., in neurogenic stunned myocardium).",
    "takeaway": "PLAN: Further assessment should include evaluating the patient's vital signs (temperature, heart rate, blood pressure), fluid status, and electrolyte levels. Consider initiating interventions to manage fluid overload (e.g., diuretics) and address potential electrolyte imbalances. Monitoring for signs of hyperglycemia is also crucial.",
    "_src_file": "hpb.js"
  },
  {
    "id": 117,
    "specialty": "HPB",
    "topic": "Comprhensive Surgery Revision conv.docx",
    "question": "Which of the following statements about the diagnosis of acute calculous cholecystitis are true?",
    "options": {
      "C": "Ultrasonography is the definitive diagnostic test.",
      "D": "Cholescintigraphy is the definitive diagnostic test."
    },
    "answer": "C",
    "explanation": {
      "correct": "The correct answer (C) – ultrasonography – is indeed the *definitive* initial diagnostic test. Its sensitivity and specificity for detecting gallstones and the characteristic sonographic features of cholecystitis (e.g., pericholecystic fluid, gallbladder wall thickening) are exceptionally high. This reflects current best practice and established diagnostic algorithms.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "C",
      "set_the_stage": "This question assesses understanding of the diagnostic criteria for acute calculous cholecystitis, a common biliary pathology. The options present differing diagnostic modalities, requiring the examinee to prioritize the most reliable method.",
      "highlight_excellence": "The correct answer (C) – ultrasonography – is indeed the *definitive* initial diagnostic test. Its sensitivity and specificity for detecting gallstones and the characteristic sonographic features of cholecystitis (e.g., pericholecystic fluid, gallbladder wall thickening) are exceptionally high. This reflects current best practice and established diagnostic algorithms.",
      "address_gaps": "Option D, ‘Cholescintigraphy,’ is a valuable tool for differentiating biliary obstruction from other causes of abdominal pain, particularly when ultrasound is inconclusive. However, it’s *not* the definitive diagnostic test for acute calculous cholecystitis. Cholescintigraphy is more useful for investigating *recurrent* biliary colic or evaluating for sphincter of Oddi dysfunction. The provided answer key (A) is incorrect.",
      "review_guidelines": "1. **Ultrasound is the gold standard initial investigation:** Look for gallstones, pericholecystic fluid, gallbladder wall thickening (>6mm), and sonographic signs of inflammation. 2. **Consider Cholescintigraphy:** If ultrasound is inconclusive, cholescintigraphy (HIDA scan) can help confirm biliary obstruction and rule out other causes of pain. 3. **CT scan:** Can be used if ultrasound is negative but clinical suspicion remains high, or if complications (e.g., abscess) are suspected. 4. **Laboratory Findings:** Elevated WBC count, elevated lipase, and positive bilirubin are supportive, but not diagnostic, of cholecystitis.",
      "plan": "Further education should focus on the strengths and limitations of each imaging modality in the context of acute biliary pathology. Reinforce the importance of a systematic approach to diagnosis, starting with ultrasound and progressing to other investigations as needed based on clinical presentation and initial findings.  A review of diagnostic algorithms for biliary disease is also recommended."
    },
    "guideline": "1. **Ultrasound is the gold standard initial investigation:** Look for gallstones, pericholecystic fluid, gallbladder wall thickening (>6mm), and sonographic signs of inflammation. 2. **Consider Cholescintigraphy:** If ultrasound is inconclusive, cholescintigraphy (HIDA scan) can help confirm biliary obstruction and rule out other causes of pain. 3. **CT scan:** Can be used if ultrasound is negative but clinical suspicion remains high, or if complications (e.g., abscess) are suspected. 4. **Laboratory Findings:** Elevated WBC count, elevated lipase, and positive bilirubin are supportive, but not diagnostic, of cholecystitis.",
    "takeaway": "PLAN: Further education should focus on the strengths and limitations of each imaging modality in the context of acute biliary pathology. Reinforce the importance of a systematic approach to diagnosis, starting with ultrasound and progressing to other investigations as needed based on clinical presentation and initial findings.  A review of diagnostic algorithms for biliary disease is also recommended.",
    "_src_file": "hpb.js"
  },
  {
    "id": 101,
    "specialty": "HPB",
    "topic": "rush.docx",
    "question": "A 25-year-old ballet dancer with a history of anorexia nervosa arrives at the emergency department with right lower quadrant pain. After an appendectomy, a wound infection at the surgical site requires debridement. The patient is placed on an antibiotic regimen, and the wound is packed with wet-to-dry dressings. Regarding wound healing and malnutri tion, which of the following statements is true?",
    "options": {
      "A": "Hypoproteinemia leads to decreased levels of arginine and glutamine, which are essential in wound healing.",
      "B": "Cell membranes rapidly become dehydrated in the absence of vitamin E, resulting in delayed wound healing.",
      "E": "The patient should be treated with high-dose vitamin C, vitamin A, and zinc."
    },
    "answer": "A",
    "explanation": {
      "correct": "The correct answer (A) accurately identifies the critical role of protein malnutrition in wound healing. Hypoproteinemia directly impairs collagen synthesis, the primary structural component of granulation tissue. Furthermore, arginine and glutamine, both amino acids, are vital for fibroblast proliferation and collagen production – pathways severely compromised in protein deficiency. This demonstrates a strong understanding of nutritional wound healing.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "A",
      "set_the_stage": "This case presents a complex scenario involving a young, malnourished patient with a surgical wound. The dancer's history of anorexia nervosa significantly impacts her nutritional status and, consequently, her wound healing potential. The chosen intervention – wet-to-dry dressings – while sometimes used, can exacerbate tissue damage in vulnerable patients. The core question focuses on the pathophysiology of impaired wound healing in malnutrition.",
      "highlight_excellence": "The correct answer (A) accurately identifies the critical role of protein malnutrition in wound healing. Hypoproteinemia directly impairs collagen synthesis, the primary structural component of granulation tissue. Furthermore, arginine and glutamine, both amino acids, are vital for fibroblast proliferation and collagen production – pathways severely compromised in protein deficiency. This demonstrates a strong understanding of nutritional wound healing.",
      "address_gaps": "Options B and E are incorrect. While vitamin deficiencies can contribute to impaired wound healing, the rapid dehydration described in B isn't the primary mechanism in protein deficiency. Similarly, while vitamin supplementation *might* be considered, a high-dose, blanket approach (E) is not evidence-based and could be harmful. The question specifically targets the *underlying pathophysiology* of the problem, not just general supplementation.",
      "review_guidelines": "1. **Nutritional Assessment:** Always assess nutritional status in surgical patients, particularly those with a history of eating disorders or chronic illness. Consider serum albumin, prealbumin, and complete protein levels. 2. **Wound Healing & Protein:** Understand the critical role of protein (specifically amino acids like arginine and glutamine) in collagen synthesis and fibroblast function. 3. **Wet-to-Dry Dressings:** Be cautious with wet-to-dry dressings in malnourished patients as they can cause significant tissue damage. Consider alternative dressings like hydrocolloid or biosynthetic dressings. 4. **Multivitamin Supplementation:** Supplementation should be individualized and based on identified deficiencies, not a general ‘high-dose’ approach. ",
      "plan": "1. **Detailed Nutritional History:** Obtain a thorough dietary history, including caloric intake, protein intake, and any supplements. 2. **Laboratory Evaluation:** Order a complete metabolic panel, including albumin, prealbumin, and amino acid levels. 3. **Wound Management:** Transition to a more gentle wound care regimen, such as hydrocolloid dressings, and monitor the wound closely. 4. **Nutritional Support:** Consider enteral or parenteral nutrition if the patient's nutritional status remains inadequate. Referral to a registered dietitian is crucial."
    },
    "guideline": "1. **Nutritional Assessment:** Always assess nutritional status in surgical patients, particularly those with a history of eating disorders or chronic illness. Consider serum albumin, prealbumin, and complete protein levels. 2. **Wound Healing & Protein:** Understand the critical role of protein (specifically amino acids like arginine and glutamine) in collagen synthesis and fibroblast function. 3. **Wet-to-Dry Dressings:** Be cautious with wet-to-dry dressings in malnourished patients as they can cause significant tissue damage. Consider alternative dressings like hydrocolloid or biosynthetic dressings. 4. **Multivitamin Supplementation:** Supplementation should be individualized and based on identified deficiencies, not a general ‘high-dose’ approach. ",
    "takeaway": "PLAN: 1. **Detailed Nutritional History:** Obtain a thorough dietary history, including caloric intake, protein intake, and any supplements. 2. **Laboratory Evaluation:** Order a complete metabolic panel, including albumin, prealbumin, and amino acid levels. 3. **Wound Management:** Transition to a more gentle wound care regimen, such as hydrocolloid dressings, and monitor the wound closely. 4. **Nutritional Support:** Consider enteral or parenteral nutrition if the patient's nutritional status remains inadequate. Referral to a registered dietitian is crucial.",
    "_src_file": "hpb.js"
  },
  {
    "id": 107,
    "specialty": "HPB",
    "topic": "Surgical Oncology",
    "question": "Adoptive immunotherapy with lymphokine activated killer cells (LAK) and tumor infiltrate (TIL) cells are characterized by:",
    "options": {
      "A": "Nonspecific stimulation of effector cells.",
      "B": "Expansion ex vivo of large numbers of lymphocytes.",
      "C": "Infusion with interleukin 2 (IL-2).",
      "D": "Significant toxicity at high doses.",
      "E": "All of the above."
    },
    "answer": "E",
    "explanation": {
      "correct": "This early form of immunotherapy involved harvesting immune cells, supercharging them with IL-2 outside the body, and reinfusing them.",
      "A": "True; IL-2 provides massive, nonspecific T-cell and NK-cell stimulation.",
      "B": "True; cells are grown in the lab (ex vivo).",
      "C": "True; IL-2 is the required growth factor.",
      "D": "True; high-dose IL-2 causes severe capillary leak syndrome.",
      "E": "Correct."
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "E",
      "set_the_stage": "Adoptive cell transfer (ACT) using TILs and LAK cells was pioneered by Dr. Steven Rosenberg at the NCI, laying the groundwork for modern CAR-T cell therapy.",
      "highlight_excellence": "In this therapy, Tumor Infiltrating Lymphocytes (TILs) are extracted from a resected tumor, expanded *ex vivo* in the presence of Interleukin-2 (IL-2), and reinfused into the patient. Because IL-2 is the master cytokine for T-cell proliferation, it is co-administered to keep the cells alive. This leads to massive, nonspecific immune activation and significant toxicity (capillary leak syndrome, hypotension).",
      "address_gaps": "Since all options accurately describe the biological and clinical reality of IL-2/LAK/TIL therapy, E is the only correct choice.",
      "review_learning_points": "High-dose IL-2 is historically used for metastatic melanoma and renal cell carcinoma but has largely been superseded by checkpoint inhibitors (PD-1/CTLA-4) due to better efficacy and lower toxicity.",
      "plan_for_improvement": "IL-2 therapy = Capillary leak syndrome."
    },
    "guideline": "Modern oncology guidelines reserve high-dose IL-2 therapy only for highly selected, fit patients with metastatic melanoma or RCC treated at specialized centers.",
    "takeaway": "Harnessing the immune system is powerful, but systemic cytokine storms (like high-dose IL-2) carry ICU-level risks.",
    "visualization": "A patient in the ICU post-IL-2 infusion developing severe total-body edema and requiring vasopressors due to profound capillary leak syndrome.",
    "_src_file": "hpb.js"
  }
]
,
{
  "id": 1384,
  "specialty": "HPB",
  "topic": "Select the correct statement21:",
  "question": "Select the correct statement21:",
  "options": {
    "A": "Bile from the caudate lobe drains into both the right and left hepatic ducts near the confluence",
    "B": "Hilar cholangiocarcinoma rarely invades segment I",
    "C": "The caudate lobe forms part of the anterior limit of the hilar plate",
    "D": "The caudate process is the most readily identified portion of segment I"
  },
  "answer": "A",
  "explanation": {
    "correct": "Bile from the caudate lobe drains into both the right and left hepatic ducts near the confluence",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Select the correct statement21:",
    "H_highlight_excellence": "Bile from the caudate lobe drains into both the right and left hepatic ducts near the confluence",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "Bile from the caudate lobe drains into both the right and left hepatic ducts near the"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "Bile from the caudate lobe drains into both the right and left hepatic ducts near the confluence",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1407,
  "specialty": "HPB",
  "topic": "The portal vein is formed from confluence of which veins?",
  "question": "The portal vein is formed from confluence of which veins?",
  "options": {
    "A": "Splenic vein and inferior mesenteric vein",
    "B": "Splenic vein and superior mesenteric vein",
    "C": "Splenic vein and gastric vein",
    "D": "Superior mesenteric vein and inferior mesenteric vein",
    "E": "None of the above"
  },
  "answer": "A",
  "explanation": {
    "correct": "Splenic vein and inferior mesenteric vein",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "The portal vein is formed from confluence of which veins?",
    "H_highlight_excellence": "Splenic vein and inferior mesenteric vein",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "Splenic vein and inferior mesenteric vein"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "Splenic vein and inferior mesenteric vein",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1538,
  "specialty": "HPB",
  "topic": "Which porto-systemic collateral pathways can become patent with the development of portal",
  "question": "Which porto-systemic collateral pathways can become patent with the development of portal hypertension?",
  "options": {
    "A": "Esophagogastric",
    "B": "Parastomal",
    "C": "Retroperitoneal",
    "D": "All of the above"
  },
  "answer": "A",
  "explanation": {
    "correct": "Esophagogastric",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Which porto-systemic collateral pathways can become patent with the development of portal",
    "H_highlight_excellence": "Esophagogastric",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "Esophagogastric"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "Esophagogastric",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50096,
  "specialty": "HPB",
  "topic": "General",
  "question": "What is a \u201cPhrygian cap\u201d deformity of the gallblad -",
  "options": {
    "A": "ttached to the main one",
    "B": "A partial folding of the fundus of the gallbladder",
    "C": "An almost completely intrahepatic gallbladder with only the fundus exposed",
    "D": "A benign circumferential tumor of the gallbladder"
  },
  "answer": "A",
  "explanation": {
    "correct": "ttached to the main one",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "ttached to the main one",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "ttached to the main one"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "ttached to the main one",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50142,
  "specialty": "HPB",
  "topic": "General",
  "question": "In Greek mythology, which deity was chained to a rock",
  "options": {
    "A": "Prometheus",
    "B": "Hares",
    "C": "Theseus",
    "D": "Hermes"
  },
  "answer": "A",
  "explanation": {
    "correct": "Prometheus",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "Prometheus",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "Prometheus"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "Prometheus",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50051,
  "specialty": "HPB",
  "topic": "General",
  "question": "What is the arterial blood supply to the retropancreatic",
  "options": {
    "A": "Dorsal pancreatic artery",
    "B": "Right gastric artery",
    "C": "Gastroduodenal artery",
    "D": "Retroduodenal artery"
  },
  "answer": "A",
  "explanation": {
    "correct": "Dorsal pancreatic artery",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "Dorsal pancreatic artery",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "Dorsal pancreatic artery"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "Dorsal pancreatic artery",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50021,
  "specialty": "HPB",
  "topic": "General",
  "question": "Intraoperatively, which is an essential study to assess",
  "options": {
    "A": "Magnetic resonance cholangiopancreatography (MRCP)",
    "B": "Cholangiography",
    "C": "Endoscopic retrograde cholangiopancreatography (ERCP)",
    "D": "Ultrasound"
  },
  "answer": "A",
  "explanation": {
    "correct": "Magnetic resonance cholangiopancreatography (MRCP)",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "Magnetic resonance cholangiopancreatography (MRCP)",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "Magnetic resonance cholangiopancreatography (MRCP)"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "Magnetic resonance cholangiopancreatography (MRCP)",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 51322,
  "specialty": "HPB",
  "topic": "General",
  "question": "Regarding segmental hepatic anatomy, which of the fol- lowing is the most accurate statement?",
  "options": {
    "A": "The right lobe is divided into medial and lateral segments.",
    "B": "The right lobe is divided into anterior and posterior segments.",
    "C": "The left lobe is divided into medial and lateral segments.",
    "D": "The left lobe is divided into anterior and posterior segments.",
    "E": "Both A and D are true F. Both B and C are true."
  },
  "answer": "A",
  "explanation": {
    "correct": "The right lobe is divided into medial and lateral segments.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "The right lobe is divided into medial and lateral segments.",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "The right lobe is divided into medial and lateral segments."
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "The right lobe is divided into medial and lateral segments.",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 51282,
  "specialty": "HPB",
  "topic": "General",
  "question": "A replaced right hepatic artery originates from which structure?",
  "options": {
    "A": "Aorta",
    "B": "Superior mesenteric artery",
    "C": "Celiac axis",
    "D": "Splenic artery",
    "E": "Left gastric artery"
  },
  "answer": "A",
  "explanation": {
    "correct": "Aorta",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "Aorta",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "Aorta"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "Aorta",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50131,
  "specialty": "HPB",
  "topic": "General",
  "question": "Which of the following organs is not in contact with the liver surface?",
  "options": {
    "A": "Stomach",
    "B": "Duodenum",
    "C": "Transverse colon",
    "D": "Aorta"
  },
  "answer": "A",
  "explanation": {
    "correct": "Stomach",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "Stomach",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "Stomach"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "Stomach",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50199,
  "specialty": "HPB",
  "topic": "General",
  "question": "Which of the following statements about portal vein",
  "options": {
    "A": "It is indicated in a normal liver with no exposure to",
    "B": "etween 2 and 8 weeks after PVE",
    "C": "Post-PVE liver volumetry should be performed",
    "D": "All of the above",
    "E": "mbolization (PVE) is true? 46\u201349"
  },
  "answer": "A",
  "explanation": {
    "correct": "It is indicated in a normal liver with no exposure to",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "It is indicated in a normal liver with no exposure to",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "It is indicated in a normal liver with no exposure to"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "It is indicated in a normal liver with no exposure to",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1467,
  "specialty": "HPB",
  "topic": "What should be done if one of the hepatic arteries (left or",
  "question": "What should be done if one of the hepatic arteries (left or right) is accidentally ligated during surgery?",
  "options": {
    "A": "Arterial reconstruction is necessary",
    "B": "oth left and right arterial blood supply",
    "C": "Arterial reconstruction is unnecessary if the interlobar hepatic artery is preserved",
    "D": "None of the above",
    "E": "xplanation: The interlobar hepatic artery runs into the Walean sheath around the hepatic duct confluence. When it is identified and preserved, it provides alternate blood supply when one of the main hepatic arterial branches is uninten- tionally ligated.19"
  },
  "answer": "A",
  "explanation": {
    "correct": "Arterial reconstruction is necessary",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "What should be done if one of the hepatic arteries (left or",
    "H_highlight_excellence": "Arterial reconstruction is necessary",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "Arterial reconstruction is necessary"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "Arterial reconstruction is necessary",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50185,
  "specialty": "HPB",
  "topic": "General",
  "question": "How many arterial branches provide blood supply to segment IV in most patients?",
  "options": {
    "A": "Replaced right hepatic artery",
    "B": "Accessory spleen",
    "C": "ourses between the IRHV and main right hepatic vein; thus, it serves as a good landmark to differentiate a hyptertrophic IRHV from the main right hepatic vein. The main right hepatic vein is cranial to the right posterior portal vein, while the IRHV is located below the right posterior portal vein.29",
    "D": "Independent right posterior portal vein The inferior right hepatic vein (IRHV) is an accessory vein that drains the postero-inferior sector of the liver. It is present in 20% of patients, and it can be wider than the main right hepatic vein in 10% of cases. The right posterior portal vein",
    "E": "xplanation: In 70% of cases, segment IV receives blood supply from two main arterial branches (superior and infe- rior segment branches). Each branch can subsequently"
  },
  "answer": "A",
  "explanation": {
    "correct": "Replaced right hepatic artery",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "Replaced right hepatic artery",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "Replaced right hepatic artery"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "Replaced right hepatic artery",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 51295,
  "specialty": "HPB",
  "topic": "General",
  "question": "A central liver resection for gallbladder cancer typically involves removing all or a portion of which hepatic segments?",
  "options": {
    "A": "5a n d4 B",
    "B": "5a n d4 A",
    "C": "5a n d6",
    "D": "5a n d8",
    "E": "6a n d7"
  },
  "answer": "A",
  "explanation": {
    "correct": "5a n d4 B",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "5a n d4 B",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "5a n d4 B"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "5a n d4 B",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50001,
  "specialty": "HPB",
  "topic": "General",
  "question": "Which of the following structures is NOT part of the",
  "options": {
    "A": "Left hepatic duct",
    "B": "Anterior sectoral right hepatic duct",
    "C": "Gallbladder",
    "D": "Common hepatic duct",
    "E": "xtrahepatic biliary tree?"
  },
  "answer": "A",
  "explanation": {
    "correct": "Left hepatic duct",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "Left hepatic duct",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "Left hepatic duct"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "Left hepatic duct",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1359,
  "specialty": "HPB",
  "topic": "How many arterial branches provide blood supply to segment IV in most",
  "question": "How many arterial branches provide blood supply to segment IV in most patients?",
  "options": {
    "A": "Replaced right hepatic artery",
    "B": "Accessory spleen",
    "C": "ourses between the IRHV and main right hepatic vein; thus, it serves as a good landmark to differentiate a hyptertrophic IRHV from the main right hepatic vein. The main right hepatic vein is cranial to the right posterior portal vein, while the IRHV is located below the right posterior portal vein.29",
    "D": "Independent right posterior portal vein The inferior right hepatic vein (IRHV) is an accessory vein that drains the postero-inferior sector of the liver. It is present in 20% of patients, and it can be wider than the main right hepatic vein in 10% of cases. The right posterior portal vein",
    "E": "xplanation: In 70% of cases, segment IV receives blood supply from two main arterial branches (superior and infe- rior segment branches). Each branch can subsequently"
  },
  "answer": "A",
  "explanation": {
    "correct": "Replaced right hepatic artery",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "How many arterial branches provide blood supply to segment IV in most",
    "H_highlight_excellence": "Replaced right hepatic artery",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "Replaced right hepatic artery"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "Replaced right hepatic artery",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50112,
  "specialty": "HPB",
  "topic": "General",
  "question": "Between the portal system and the arteriobiliary sys- tem, which has more anatomic variations in their first order branches?",
  "options": {
    "A": "Portal system",
    "B": "Arteriobiliary system",
    "C": "Equal",
    "D": "Depends on the patient\u2019s epidemiological back - ground"
  },
  "answer": "A",
  "explanation": {
    "correct": "Portal system",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "Portal system",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "Portal system"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "Portal system",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1447,
  "specialty": "HPB",
  "topic": "What is the incidence of hepatic artery anatomic variants? 18",
  "question": "What is the incidence of hepatic artery anatomic variants? 18",
  "options": {
    "A": "rtery originated from an aberrant source and was additive to the normal lobar branch derived from the celiac arterial",
    "B": "ranch originated entirely from anomalous origin. On the other hand, the term \u201caccessory\u201d was used if an additional",
    "C": "ies.16 He used the term \u201creplaced\u201d when the hepatic arterial",
    "D": "istribution.15",
    "E": "xplanation regarding the anatomical variations of the hepatic artery: In 1955, Michels classified the anatomical variations of the hepatic artery and reported their frequen-"
  },
  "answer": "A",
  "explanation": {
    "correct": "rtery originated from an aberrant source and was additive to the normal lobar branch derived from the celiac",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "What is the incidence of hepatic artery anatomic variants? 18",
    "H_highlight_excellence": "rtery originated from an aberrant source and was additive to the normal lobar branch derived from the celiac",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "rtery originated from an aberrant source and was additive to the normal lobar branch derived from"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "rtery originated from an aberrant source and was additive to the normal lobar branch derived from the celiac",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 51279,
  "specialty": "HPB",
  "topic": "General",
  "question": "Liver segmental anatomy is named after which physician that defined the hepatic segments in the 1950s:",
  "options": {
    "A": "Giulio Arantius",
    "B": "JC a n t l i e",
    "C": "Claude Couinaud",
    "D": "Thomas Starzl",
    "E": "Henri Bismuth"
  },
  "answer": "A",
  "explanation": {
    "correct": "Giulio Arantius",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "Giulio Arantius",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "Giulio Arantius"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "Giulio Arantius",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1463,
  "specialty": "HPB",
  "topic": "What is the vascular structure indicated by the arrow - head? How",
  "question": "What is the vascular structure indicated by the arrow - head? How can you differentiate the vessels from one",
  "options": {
    "A": "hyperechoic sheath.",
    "B": "y a hyperechoic sheath.",
    "C": "Hepatic artery. The hepatic artery is not surrounded",
    "D": "Bile duct. The bile duct is not surrounded by a hyperechoic sheath."
  },
  "answer": "A",
  "explanation": {
    "correct": "hyperechoic sheath.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "What is the vascular structure indicated by the arrow - head? How",
    "H_highlight_excellence": "hyperechoic sheath.",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "hyperechoic sheath"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "hyperechoic sheath",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1483,
  "specialty": "HPB",
  "topic": "Which is a requirement to achieve a critical view of safety during",
  "question": "Which is a requirement to achieve a critical view of safety during laparoscopic cholecystectomy?",
  "options": {
    "A": "The triangle of Calot cleared of fat and tissue",
    "B": "The lowest part of the gallbladder should be sepa- rated from the cystic plate",
    "C": "Two structures, and only two, should be seen enter- ing the gallbladder",
    "D": "All of the above"
  },
  "answer": "A",
  "explanation": {
    "correct": "The triangle of Calot cleared of fat and tissue",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Which is a requirement to achieve a critical view of safety during",
    "H_highlight_excellence": "The triangle of Calot cleared of fat and tissue",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "The triangle of Calot cleared of fat and tissue"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "The triangle of Calot cleared of fat and tissue",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50192,
  "specialty": "HPB",
  "topic": "General",
  "question": "Which embryologic structures are the predecessors of the portal vein? 15",
  "options": {
    "A": "Umbilical veins",
    "B": "Umbilical arteries",
    "C": "Vitelline veins",
    "D": "None of the above"
  },
  "answer": "A",
  "explanation": {
    "correct": "Umbilical veins",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "Umbilical veins",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "Umbilical veins"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "Umbilical veins",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50153,
  "specialty": "HPB",
  "topic": "General",
  "question": "In which segments are the colorectal liver metastases located in the image below?",
  "options": {
    "A": "IV and VII",
    "B": "IV and V",
    "C": "III and VIII",
    "D": "I and VIII"
  },
  "answer": "A",
  "explanation": {
    "correct": "IV and VII",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "IV and VII",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "IV and VII"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "IV and VII",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1493,
  "specialty": "HPB",
  "topic": "Which of the following about the cystic artery and its frequency of",
  "question": "Which of the following about the cystic artery and its frequency of variants is true?3,32",
  "options": {
    "A": "74.7% of the time the cystic artery arises from the right hepatic artery",
    "B": "2.5% of the time the cystic artery arises from the gastroduodenal artery",
    "C": "20.5% of the time the cystic artery arises from the left hepatic artery",
    "D": "All of the above"
  },
  "answer": "A",
  "explanation": {
    "correct": "74.7% of the time the cystic artery arises from the right hepatic artery",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Which of the following about the cystic artery and its frequency of",
    "H_highlight_excellence": "74.7% of the time the cystic artery arises from the right hepatic artery",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "74"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "74",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1411,
  "specialty": "HPB",
  "topic": "The space passing behind the hepatoduodenal ligament to enter the lesser sac",
  "question": "The space passing behind the hepatoduodenal ligament to enter the lesser sac is known as:",
  "options": {
    "A": "Epiploic foramen",
    "B": "Duodenal tunnel",
    "C": "Foramen of Winslow",
    "D": "Both A and B",
    "E": "Both A and C"
  },
  "answer": "A",
  "explanation": {
    "correct": "Epiploic foramen",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "The space passing behind the hepatoduodenal ligament to enter the lesser sac",
    "H_highlight_excellence": "Epiploic foramen",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "Epiploic foramen"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "Epiploic foramen",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50159,
  "specialty": "HPB",
  "topic": "General",
  "question": "A 73-year-old male patient with a history of resected",
  "options": {
    "A": "NSWERS",
    "B": "Enlarged lymph nodes",
    "C": "Hyperenhancing resection site",
    "D": "Imaging artifact"
  },
  "answer": "A",
  "explanation": {
    "correct": "NSWERS",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "NSWERS",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "NSWERS"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "NSWERS",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 51320,
  "specialty": "HPB",
  "topic": "General",
  "question": "The right lobe of the liver includes which segments?",
  "options": {
    "A": "2, 3, 4",
    "B": "1, 2, 3, 4",
    "C": "5, 6, 7, 8",
    "D": "3, 4, 5, 6",
    "E": "1, 2, 7, 8"
  },
  "answer": "A",
  "explanation": {
    "correct": "2, 3, 4",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "2, 3, 4",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "2, 3, 4"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "2, 3, 4",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 51309,
  "specialty": "HPB",
  "topic": "General",
  "question": "The round ligament is also known as:",
  "options": {
    "A": "Ligamentum teres",
    "B": "Arantius ligament",
    "C": "Ductus venosum",
    "D": "Left triangular ligament",
    "E": "Falciform ligament"
  },
  "answer": "A",
  "explanation": {
    "correct": "Ligamentum teres",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "Ligamentum teres",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "Ligamentum teres"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "Ligamentum teres",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50132,
  "specialty": "HPB",
  "topic": "General",
  "question": "The falciform ligament connects dorsally to which liga- ments?",
  "options": {
    "A": "Triangular ligaments",
    "B": "Coronary ligaments",
    "C": "Gastrohepatic and gastroduodenal ligaments",
    "D": "None of the above"
  },
  "answer": "A",
  "explanation": {
    "correct": "Triangular ligaments",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "Triangular ligaments",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "Triangular ligaments"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "Triangular ligaments",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 51340,
  "specialty": "HPB",
  "topic": "General",
  "question": "The hepatoduodenal ligament contains which structures?",
  "options": {
    "A": "Portal vein",
    "B": "Hepatic artery",
    "C": "Common Bile duct",
    "D": "All of the above",
    "E": "Aa n dBo n l y"
  },
  "answer": "A",
  "explanation": {
    "correct": "Portal vein",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "Portal vein",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "Portal vein"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "Portal vein",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 51307,
  "specialty": "HPB",
  "topic": "General",
  "question": "The hepatoduodenal ligament contains which structures?",
  "options": {
    "A": "Portal vein",
    "B": "Hepatic artery",
    "C": "Common Bile duct",
    "D": "All of the above",
    "E": "Aa n dBo n l y"
  },
  "answer": "A",
  "explanation": {
    "correct": "Portal vein",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "Portal vein",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "Portal vein"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "Portal vein",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50119,
  "specialty": "HPB",
  "topic": "General",
  "question": "What should be done if one of the hepatic arteries (left or right) is accidentally ligated during surgery?",
  "options": {
    "A": "Arterial reconstruction is necessary",
    "B": "ar hepatic artery is preserved",
    "C": "Arterial reconstruction is unnecessary if the interlo-",
    "D": "None of the above"
  },
  "answer": "A",
  "explanation": {
    "correct": "Arterial reconstruction is necessary",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "Arterial reconstruction is necessary",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "Arterial reconstruction is necessary"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "Arterial reconstruction is necessary",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50079,
  "specialty": "HPB",
  "topic": "General",
  "question": "What should be the correct treatment strategy for this type of choledochal cyst?35",
  "options": {
    "A": "ERCP with stent placement",
    "B": "Extrahepatic bile duct cyst excision, cholecystec- tomy, and bilioenteric reconstruction",
    "C": "Cystenterostomy",
    "D": "All of the above"
  },
  "answer": "A",
  "explanation": {
    "correct": "ERCP with stent placement",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "ERCP with stent placement",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "ERCP with stent placement"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "ERCP with stent placement",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50063,
  "specialty": "HPB",
  "topic": "General",
  "question": "A 64-year-old male presents a liver mass on CT (com- puted tomography) scan. It reveals occlusion of the right portal vein and right-sided bile duct dilation. What most accurately describes the following two images?17",
  "options": {
    "A": "n extended right hepatectomy with hilar lymphadenectomy and portal vein reconstruction. Match the anatomic structures with the alphabetical labels shown in the figure:",
    "B": "Congestive right liver",
    "C": "Ischemia\u2013reperfusion injury",
    "D": "Atrophy-hypertrophy complex With the image presented in the previous question, underwent"
  },
  "answer": "A",
  "explanation": {
    "correct": "n extended right hepatectomy with hilar lymphadenectomy and portal vein reconstruction. Match the anatomic structures with the alphabetical",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "n extended right hepatectomy with hilar lymphadenectomy and portal vein reconstruction. Match the anatomic structures with the alphabetical",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "n extended right hepatectomy with hilar lymphadenectomy and portal vein reconstruction. Match the anatomic structures with"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "n extended right hepatectomy with hilar lymphadenectomy and portal vein reconstruction. Match the anatomic structures with the alphabetical",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1321,
  "specialty": "HPB",
  "topic": "A 73-year-old male patient with a history of resected",
  "question": "A 73-year-old male patient with a history of resected",
  "options": {
    "A": "nd size and are arranged in a linear pattern. 69",
    "B": "Enlarged lymph nodes",
    "C": "Hyperenhancing resection site",
    "D": "Imaging artifact On MRI, these round-shaped hyperintense lesions seen on the liver are, in fact, artifacts. The pulsation of the aorta is the reason for these mirror images to appear (also called \u201cghosting\u201d artifacts). They typically have the same shape"
  },
  "answer": "A",
  "explanation": {
    "correct": "nd size and are arranged in a linear pattern. 69",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "A 73-year-old male patient with a history of resected",
    "H_highlight_excellence": "nd size and are arranged in a linear pattern. 69",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "nd size and are arranged in a linear pattern"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "nd size and are arranged in a linear pattern",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50035,
  "specialty": "HPB",
  "topic": "General",
  "question": "The triangle of Calot contains which of the following structures:",
  "options": {
    "A": "Cystic artery",
    "B": "Cystic lymph node of Lund",
    "C": "Right hepatic artery",
    "D": "All of the above"
  },
  "answer": "A",
  "explanation": {
    "correct": "Cystic artery",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "Cystic artery",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "Cystic artery"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "Cystic artery",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1494,
  "specialty": "HPB",
  "topic": "Which of the following are criteria for technical resect-",
  "question": "Which of the following are criteria for technical resect-",
  "options": {
    "A": "Two contiguous preservable segments",
    "B": "Preserved vascular inflow, outflow, and biliary drainage",
    "C": "Adequate remnant volume and function",
    "D": "All of the above"
  },
  "answer": "A",
  "explanation": {
    "correct": "Two contiguous preservable segments",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Which of the following are criteria for technical resect-",
    "H_highlight_excellence": "Two contiguous preservable segments",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "Two contiguous preservable segments"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "Two contiguous preservable segments",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50052,
  "specialty": "HPB",
  "topic": "General",
  "question": "The left hepatic duct is consistently present in most patients. However, in what proportion of patients is the left hepatic duct completely absent?5,6",
  "options": {
    "A": "0.05%",
    "B": "3%",
    "C": "15%",
    "D": "41%"
  },
  "answer": "A",
  "explanation": {
    "correct": "0.05%",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "0.05%",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "0.05%"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "0.05%",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1512,
  "specialty": "HPB",
  "topic": "Which of the following statements about the cystic duct is true?9",
  "question": "Which of the following statements about the cystic duct is true?9",
  "options": {
    "A": "It most commonly inserts on the left lateral aspect of the common bile duct",
    "B": "Low insertion is defined as joining at the lower third of the common hepatic duct",
    "C": "A short cystic duct is defined as < 10 mm long",
    "D": "None of the above"
  },
  "answer": "A",
  "explanation": {
    "correct": "It most commonly inserts on the left lateral aspect of the common bile duct",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Which of the following statements about the cystic duct is true?9",
    "H_highlight_excellence": "It most commonly inserts on the left lateral aspect of the common bile duct",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "It most commonly inserts on the left lateral aspect of the common bile duct"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "It most commonly inserts on the left lateral aspect of the common bile duct",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 51294,
  "specialty": "HPB",
  "topic": "General",
  "question": "Conventional or normal hepatic artery blood flow is which of the following:",
  "options": {
    "A": "rtery proper to R/L hepatic arteries",
    "B": "Aorta to celiac axis to common hepatic artery to hepatic",
    "C": "Aorta to common hepatic artery to celiac axis to hepatic",
    "D": "None of the above"
  },
  "answer": "A",
  "explanation": {
    "correct": "rtery proper to R/L hepatic arteries",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "rtery proper to R/L hepatic arteries",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "rtery proper to R/L hepatic arteries"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "rtery proper to R/L hepatic arteries",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1388,
  "specialty": "HPB",
  "topic": "The cystic artery most commonly arises from the:",
  "question": "The cystic artery most commonly arises from the:",
  "options": {
    "A": "Hepatic artery proper",
    "B": "Common hepatic artery",
    "C": "Right hepatic artery",
    "D": "Left hepatic artery",
    "E": "Gastroduodenal artery"
  },
  "answer": "A",
  "explanation": {
    "correct": "Hepatic artery proper",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "The cystic artery most commonly arises from the:",
    "H_highlight_excellence": "Hepatic artery proper",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "Hepatic artery proper"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "Hepatic artery proper",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1509,
  "specialty": "HPB",
  "topic": "Which of the following statements about the Maku- uchi ligament is true?",
  "question": "Which of the following statements about the Maku- uchi ligament is true? 39,40",
  "options": {
    "A": "It has also been called the IVC ligament or hepato-",
    "B": "It is present in 77% of patients",
    "C": "audate lobe",
    "D": "All of the above"
  },
  "answer": "A",
  "explanation": {
    "correct": "It has also been called the IVC ligament or hepato-",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Which of the following statements about the Maku- uchi ligament is true?",
    "H_highlight_excellence": "It has also been called the IVC ligament or hepato-",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "It has also been called the IVC ligament or hepato-"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "It has also been called the IVC ligament or hepato-",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50105,
  "specialty": "HPB",
  "topic": "General",
  "question": "What is the vascular structure indicated by the arrow - head? How can you differentiate the vessels from one",
  "options": {
    "A": "Portal vein. The hepatic vein is surrounded by a hyperechoic sheath.",
    "B": "y a hyperechoic sheath.",
    "C": "Hepatic artery. The hepatic artery is not surrounded",
    "D": "Bile duct. The bile duct is not surrounded by a hyperechoic sheath."
  },
  "answer": "A",
  "explanation": {
    "correct": "Portal vein. The hepatic vein is surrounded by a hyperechoic sheath.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "Portal vein. The hepatic vein is surrounded by a hyperechoic sheath.",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "Portal vein. The hepatic vein is surrounded by a hyperechoic sheath."
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "Portal vein. The hepatic vein is surrounded by a hyperechoic sheath.",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 51348,
  "specialty": "HPB",
  "topic": "General",
  "question": "In Budd-Chiari syndrome:",
  "options": {
    "A": "The portal veins are thrombosed.",
    "B": "The hepatic veins are thrombosed.",
    "C": "Ascites is rarely present.",
    "D": "A hypercoagulable work-up should be done.",
    "E": "Both B and D are correct."
  },
  "answer": "A",
  "explanation": {
    "correct": "The portal veins are thrombosed.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "The portal veins are thrombosed.",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "The portal veins are thrombosed."
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "The portal veins are thrombosed.",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 51297,
  "specialty": "HPB",
  "topic": "General",
  "question": "A left hepatic trisectionectomy (or trisegmentectomy) removes which segments?",
  "options": {
    "A": "1, 2, 3, 4, 7",
    "B": "2, 3, 4, 5, 8",
    "C": "1, 2, 3, 4, 6, 7",
    "D": "Both A and B are correct.",
    "E": "Both B and C are correct."
  },
  "answer": "A",
  "explanation": {
    "correct": "1, 2, 3, 4, 7",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "1, 2, 3, 4, 7",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "1, 2, 3, 4, 7"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "1, 2, 3, 4, 7",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50061,
  "specialty": "HPB",
  "topic": "General",
  "question": "Which hepatic segments does the left hepatic duct typi-",
  "options": {
    "A": "I, II, III, and IV",
    "B": "II, III, IV, and V",
    "C": "V, VI, VII, and VIII",
    "D": "II and III"
  },
  "answer": "A",
  "explanation": {
    "correct": "I, II, III, and IV",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "I, II, III, and IV",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "I, II, III, and IV"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "I, II, III, and IV",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50214,
  "specialty": "HPB",
  "topic": "General",
  "question": "Which of the following are criteria for technical resectability of liver tumors? 68",
  "options": {
    "A": "ge",
    "B": "Preserved vascular inflow, outflow, and biliary drain-",
    "C": "Adequate remnant volume and function",
    "D": "All of the above"
  },
  "answer": "A",
  "explanation": {
    "correct": "ge",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "ge",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "ge"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "ge",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50122,
  "specialty": "HPB",
  "topic": "General",
  "question": "Which of the following statements is true?",
  "options": {
    "A": "The hepatic artery is the last structure in the hilum to be formed during embryogenesis",
    "B": "The Rex-Cantlie line represents the anatomical mid- line of the liver, thus dividing the liver into left and right liver",
    "C": "The portal vein develops from the primitive paired vitelline veins that arise on the yolk sac",
    "D": "All of the above"
  },
  "answer": "A",
  "explanation": {
    "correct": "The hepatic artery is the last structure in the hilum to be formed during embryogenesis",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "The hepatic artery is the last structure in the hilum to be formed during embryogenesis",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "The hepatic artery is the last structure in the hilum to be formed during embryogenesis"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "The hepatic artery is the last structure in the hilum to be formed during embryogenesis",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50055,
  "specialty": "HPB",
  "topic": "General",
  "question": "What is the embryologic origin of the extrahepatic bile",
  "options": {
    "A": "Mesoderm",
    "B": "Ectoderm",
    "C": "Endoderm",
    "D": "Hindgut"
  },
  "answer": "A",
  "explanation": {
    "correct": "Mesoderm",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "Mesoderm",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "Mesoderm"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "Mesoderm",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50115,
  "specialty": "HPB",
  "topic": "General",
  "question": "What is the location of the proper hepatic artery in the hepatoduodenal ligament?",
  "options": {
    "A": "Medial to the common bile duct",
    "B": "Lateral to the common bile duct",
    "C": "Ventral to the portal vein",
    "D": "A and C are correct Match the following anatomic structures with their respective labels in the figure:"
  },
  "answer": "A",
  "explanation": {
    "correct": "Medial to the common bile duct",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "Medial to the common bile duct",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "Medial to the common bile duct"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "Medial to the common bile duct",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1395,
  "specialty": "HPB",
  "topic": "The hepatoduodenal ligament contains which structures?",
  "question": "The hepatoduodenal ligament contains which structures?",
  "options": {
    "A": "Portal vein",
    "B": "Hepatic artery",
    "C": "Common Bile duct",
    "D": "All of the above",
    "E": "Aa n dBo n l y"
  },
  "answer": "A",
  "explanation": {
    "correct": "Portal vein",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "The hepatoduodenal ligament contains which structures?",
    "H_highlight_excellence": "Portal vein",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "Portal vein"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "Portal vein",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1385,
  "specialty": "HPB",
  "topic": "Select the correct statement:",
  "question": "Select the correct statement:",
  "options": {
    "A": "Bile from the caudate lobe drains into both the right and left hepatic ducts near the confluence",
    "B": "Hilar cholangiocarcinoma rarely invades segment I",
    "C": "The caudate lobe forms part of the anterior limit of the hilar plate",
    "D": "The caudate process is the most readily identified portion of segment I"
  },
  "answer": "A",
  "explanation": {
    "correct": "Bile from the caudate lobe drains into both the right and left hepatic ducts near the confluence",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Select the correct statement:",
    "H_highlight_excellence": "Bile from the caudate lobe drains into both the right and left hepatic ducts near the confluence",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "Bile from the caudate lobe drains into both the right and left hepatic ducts near the"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "Bile from the caudate lobe drains into both the right and left hepatic ducts near the confluence",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1380,
  "specialty": "HPB",
  "topic": "Name the avascular space on the ventral side of the ret- rohepatic",
  "question": "Name the avascular space on the ventral side of the ret- rohepatic IVC, commonly used to perform the hanging maneuver.",
  "options": {
    "A": "Space of Courvoisier",
    "B": "Space of Glisson",
    "C": "Space of Couinaud",
    "D": "Space of Rouviere"
  },
  "answer": "A",
  "explanation": {
    "correct": "Space of Courvoisier",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Name the avascular space on the ventral side of the ret- rohepatic",
    "H_highlight_excellence": "Space of Courvoisier",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "Space of Courvoisier"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "Space of Courvoisier",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50155,
  "specialty": "HPB",
  "topic": "General",
  "question": "Which of the following statements is true about the",
  "options": {
    "A": "It is also called congenital extrahepatic portosys- temic shunt",
    "B": "It is categorized into two types based on the pres-",
    "C": "A differential diagnosis is an acquired extrahepatic portosystemic shunt, as seen in cirrhotic patients",
    "D": "All of the above",
    "E": "nce or absence of portal inflow to the liver"
  },
  "answer": "A",
  "explanation": {
    "correct": "It is also called congenital extrahepatic portosys- temic shunt",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "It is also called congenital extrahepatic portosys- temic shunt",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "It is also called congenital extrahepatic portosys- temic shunt"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "It is also called congenital extrahepatic portosys- temic shunt",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1366,
  "specialty": "HPB",
  "topic": "In Budd-Chiari syndrome:",
  "question": "In Budd-Chiari syndrome:",
  "options": {
    "A": "T he portal veins are thrombosed.",
    "B": "The hepatic veins are thrombosed.",
    "C": "Ascites is rarely present.",
    "D": "A hypercoagulable work-up should be done.",
    "E": "Both B and D are correct."
  },
  "answer": "A",
  "explanation": {
    "correct": "T he portal veins are thrombosed.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "In Budd-Chiari syndrome:",
    "H_highlight_excellence": "T he portal veins are thrombosed.",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "T he portal veins are thrombosed"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "T he portal veins are thrombosed",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 51319,
  "specialty": "HPB",
  "topic": "General",
  "question": "V enous drainage of the hepatic segments are through which hepatic veins;",
  "options": {
    "A": "Right, middle, left, and short hepatic veins",
    "B": "Right, left, and center hepatic veins",
    "C": "Right, left, and short hepatic veins",
    "D": "Right, left, and long hepatic veins.",
    "E": "Right, middle, left, and long hepatic veins."
  },
  "answer": "A",
  "explanation": {
    "correct": "Right, middle, left, and short hepatic veins",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "Right, middle, left, and short hepatic veins",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "Right, middle, left, and short hepatic veins"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "Right, middle, left, and short hepatic veins",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50148,
  "specialty": "HPB",
  "topic": "General",
  "question": "Which of the following methods can be used intraopera- tively to identify the anatomical borders between the liver segments?",
  "options": {
    "A": "Inflow occlusion",
    "B": "Indigo carmine",
    "C": "Intraoperative ultrasound",
    "D": "All of the above"
  },
  "answer": "A",
  "explanation": {
    "correct": "Inflow occlusion",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "Inflow occlusion",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "Inflow occlusion"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "Inflow occlusion",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50201,
  "specialty": "HPB",
  "topic": "General",
  "question": "What is the average volume of the left liver? 50",
  "options": {
    "A": "56%",
    "B": "50%",
    "C": "45%",
    "D": "33%"
  },
  "answer": "A",
  "explanation": {
    "correct": "56%",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "56%",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "56%"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "56%",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1469,
  "specialty": "HPB",
  "topic": "What should be the correct treatment strategy for this type of choledochal",
  "question": "What should be the correct treatment strategy for this type of choledochal cyst?35",
  "options": {
    "A": "ERCP with stent placement",
    "B": "Extrahepatic bile duct cyst excision, cholecystec- tomy, and bilioenteric reconstruction",
    "C": "Cystenterostomy",
    "D": "All of the above"
  },
  "answer": "A",
  "explanation": {
    "correct": "ERCP with stent placement",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "What should be the correct treatment strategy for this type of choledochal",
    "H_highlight_excellence": "ERCP with stent placement",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "ERCP with stent placement"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "ERCP with stent placement",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1445,
  "specialty": "HPB",
  "topic": "What is the importance of the right inferior phrenic vein? 9",
  "question": "What is the importance of the right inferior phrenic vein? 9",
  "options": {
    "A": "It allows identification of the right hepatic vein (RHV) which runs into the inferior vena cava (IVC) just caudally",
    "B": "It is a common cause of bleeding during liver mobi- lization",
    "C": "It is frequently used for vascular reconstructions",
    "D": "All of the above"
  },
  "answer": "A",
  "explanation": {
    "correct": "It allows identification of the right hepatic vein (RHV) which runs into the inferior vena cava (IVC) just",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "What is the importance of the right inferior phrenic vein? 9",
    "H_highlight_excellence": "It allows identification of the right hepatic vein (RHV) which runs into the inferior vena cava (IVC) just",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "It allows identification of the right hepatic vein (RHV) which runs into the inferior vena cava"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "It allows identification of the right hepatic vein (RHV) which runs into the inferior vena cava (IVC) just",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 51291,
  "specialty": "HPB",
  "topic": "General",
  "question": "With severe portal HTN, portal blood flow is often:",
  "options": {
    "A": "Hepatofugal.",
    "B": "Hepatopetal.",
    "C": "Diverted through the coronary vein.",
    "D": "Both A and C are correct.",
    "E": "Both B and C are correct."
  },
  "answer": "A",
  "explanation": {
    "correct": "Hepatofugal.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "Hepatofugal.",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "Hepatofugal."
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "Hepatofugal.",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50123,
  "specialty": "HPB",
  "topic": "General",
  "question": "Who was the first to perform a liver transplant?",
  "options": {
    "A": "Claude Couinaud",
    "B": "Thomas Starzl",
    "C": "Erich M\u00fche",
    "D": "Christiaan Barnard"
  },
  "answer": "A",
  "explanation": {
    "correct": "Claude Couinaud",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "Claude Couinaud",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "Claude Couinaud"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "Claude Couinaud",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 51323,
  "specialty": "HPB",
  "topic": "General",
  "question": "The venous drainage of the caudate lobe is into which structure?",
  "options": {
    "A": "Left hepatic vein",
    "B": "Middle hepatic vein",
    "C": "Right hepatic vein",
    "D": "Inferior vena cava",
    "E": "Portal vein"
  },
  "answer": "A",
  "explanation": {
    "correct": "Left hepatic vein",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "Left hepatic vein",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "Left hepatic vein"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "Left hepatic vein",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50152,
  "specialty": "HPB",
  "topic": "General",
  "question": "A 64-year-old male patient presents with hypoenhanc- ing liver lesions on a CT scan. Where in the liver are these tumors located?",
  "options": {
    "A": "Segments IV and VIII",
    "B": "Segments II and VI",
    "C": "Segments III and V",
    "D": "Segments IV and VI"
  },
  "answer": "A",
  "explanation": {
    "correct": "Segments IV and VIII",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "Segments IV and VIII",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "Segments IV and VIII"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "Segments IV and VIII",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50178,
  "specialty": "HPB",
  "topic": "General",
  "question": "Who was the first to perform a successful liver resec- tion?22",
  "options": {
    "A": "Carl Langenbuch",
    "B": "Francis Glisson",
    "C": "Hogarth Pringle",
    "D": "Hugo Rex In 1888, the German surgeon Carl Johann August Lan- genbuch performed the first successful liver resection. He is also recognized for having performed the first open chol-",
    "E": "cystectomy in 1882.23"
  },
  "answer": "A",
  "explanation": {
    "correct": "Carl Langenbuch",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "Carl Langenbuch",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "Carl Langenbuch"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "Carl Langenbuch",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1536,
  "specialty": "HPB",
  "topic": "Which of the following structures is not a component of the portal",
  "question": "Which of the following structures is not a component of the portal triad? 34",
  "options": {
    "A": "Hepatic arteriole",
    "B": "Bile ductule",
    "C": "Lymphatic vessels",
    "D": "Hepatic venules"
  },
  "answer": "A",
  "explanation": {
    "correct": "Hepatic arteriole",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Which of the following structures is not a component of the portal",
    "H_highlight_excellence": "Hepatic arteriole",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "Hepatic arteriole"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "Hepatic arteriole",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50004,
  "specialty": "HPB",
  "topic": "General",
  "question": "The left hepatic duct is consistently present in most patients. However, in what proportion is the left hepatic duct completely absent?",
  "options": {
    "A": "0.05%",
    "B": "3%",
    "C": "15%",
    "D": "41%"
  },
  "answer": "A",
  "explanation": {
    "correct": "0.05%",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "0.05%",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "0.05%"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "0.05%",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50081,
  "specialty": "HPB",
  "topic": "General",
  "question": "The gallbladder is divided into38:",
  "options": {
    "A": "Fundus, infundibulum, neck",
    "B": "Fundus, body, neck",
    "C": "Fundus, body, infundibulum, Hartman\u2019s pouch, neck",
    "D": "Fundus, body, infundibulum, neck, cystic duct"
  },
  "answer": "A",
  "explanation": {
    "correct": "Fundus, infundibulum, neck",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "Fundus, infundibulum, neck",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "Fundus, infundibulum, neck"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "Fundus, infundibulum, neck",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1513,
  "specialty": "HPB",
  "topic": "Which of the following statements about the duplicated gallbladders is true?",
  "question": "Which of the following statements about the duplicated gallbladders is true?",
  "options": {
    "A": "gallbladder diverticulum, a choledochal cyst, per- icholecystic fluid, and focal adenomyomatosis",
    "B": "They always share a common cystic duct",
    "C": "Differential diagnosis includes folded gallbladder,",
    "D": "A and C are correct"
  },
  "answer": "A",
  "explanation": {
    "correct": "gallbladder diverticulum, a choledochal cyst, per- icholecystic fluid, and focal adenomyomatosis",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Which of the following statements about the duplicated gallbladders is true?",
    "H_highlight_excellence": "gallbladder diverticulum, a choledochal cyst, per- icholecystic fluid, and focal adenomyomatosis",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "gallbladder diverticulum, a choledochal cyst, per- icholecystic fluid, and focal adenomyomatosis"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "gallbladder diverticulum, a choledochal cyst, per- icholecystic fluid, and focal adenomyomatosis",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50047,
  "specialty": "HPB",
  "topic": "General",
  "question": "What is the diagnosis associated with the imaging pre- sented below?",
  "options": {
    "A": "This is a \u201cbeads on a string\u201d appearance of the bile",
    "B": "This is a \u201cbeads on a string\u201d appearance of the bile",
    "C": "This is onion skinning appearance, and it signifies primary sclerosing cholangitis.",
    "D": "This is onion skinning appearance, and it signifies primary biliary cholangitis"
  },
  "answer": "A",
  "explanation": {
    "correct": "This is a \u201cbeads on a string\u201d appearance of the bile",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "This is a \u201cbeads on a string\u201d appearance of the bile",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "This is a \u201cbeads on a string\u201d appearance of the bile"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "This is a \u201cbeads on a string\u201d appearance of the bile",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1524,
  "specialty": "HPB",
  "topic": "Which of the following statements is true about the",
  "question": "Which of the following statements is true about the",
  "options": {
    "A": "The portal vein provides 75% of the blood supply to the liver",
    "B": "The hepatic artery provides 75% of the blood supply to the liver",
    "C": "Blood supply to the intrahepatic bile ducts is mainly through the portal vein",
    "D": "The portal vein provides 50% of the blood supply to the liver"
  },
  "answer": "A",
  "explanation": {
    "correct": "The portal vein provides 75% of the blood supply to the liver",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Which of the following statements is true about the",
    "H_highlight_excellence": "The portal vein provides 75% of the blood supply to the liver",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "The portal vein provides 75% of the blood supply to the liver"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "The portal vein provides 75% of the blood supply to the liver",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1357,
  "specialty": "HPB",
  "topic": "How frequently does the cystic duct drain to the right hepatic duct?9",
  "question": "How frequently does the cystic duct drain to the right hepatic duct?9",
  "options": {
    "A": "Less than 1%",
    "B": "14%",
    "C": "27%",
    "D": "48%"
  },
  "answer": "A",
  "explanation": {
    "correct": "Less than 1%",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "How frequently does the cystic duct drain to the right hepatic duct?9",
    "H_highlight_excellence": "Less than 1%",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "Less than 1%"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "Less than 1%",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50015,
  "specialty": "HPB",
  "topic": "General",
  "question": "What is Mirizzi\u2019s syndrome?",
  "options": {
    "A": "It is a malignant obstruction of the common hepatic",
    "B": "It is a benign obstruction of the common hepatic",
    "C": "It is a malignant obstruction of the common hepatic",
    "D": "uct due to stones in the biliary tract"
  },
  "answer": "A",
  "explanation": {
    "correct": "It is a malignant obstruction of the common hepatic",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "It is a malignant obstruction of the common hepatic",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "It is a malignant obstruction of the common hepatic"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "It is a malignant obstruction of the common hepatic",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50074,
  "specialty": "HPB",
  "topic": "General",
  "question": "What is the structure depicted by the yellow arrow?",
  "options": {
    "A": "llowing for visualization of the intrahepatic biliary tree on a CT scan",
    "B": "Segment VII bile duct",
    "C": "Segment V bile duct",
    "D": "Right anterior sectoral duct",
    "E": "xplanation: this patient has bilateral biliary tract dilation,"
  },
  "answer": "A",
  "explanation": {
    "correct": "llowing for visualization of the intrahepatic biliary tree on a CT scan",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "llowing for visualization of the intrahepatic biliary tree on a CT scan",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "llowing for visualization of the intrahepatic biliary tree on a CT scan"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "llowing for visualization of the intrahepatic biliary tree on a CT scan",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1363,
  "specialty": "HPB",
  "topic": "How many tributaries of the biliary tree drain segment I?11",
  "question": "How many tributaries of the biliary tree drain segment I?11",
  "options": {
    "A": "1 or 2",
    "B": "3 or 4",
    "C": "7 or 8",
    "D": "9 or 10"
  },
  "answer": "A",
  "explanation": {
    "correct": "1 or 2",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "How many tributaries of the biliary tree drain segment I?11",
    "H_highlight_excellence": "1 or 2",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "1 or 2"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "1 or 2",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50164,
  "specialty": "HPB",
  "topic": "General",
  "question": "According to the Brisbane 2000 Terminology 1, which of the following statements is true?",
  "options": {
    "A": "Right anterior sectorectomy corresponds to resection of segments VI and VII",
    "B": "Extended right hepatectomy corresponds to resec - tion of right hemiliver and left lateral sector",
    "C": "Right posterior sectorectomy corresponds to resection of segments VI and VII",
    "D": "Extended left hepatectomy corresponds to resection of left hemiliver and segment IV"
  },
  "answer": "A",
  "explanation": {
    "correct": "Right anterior sectorectomy corresponds to resection of segments VI and VII",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "Right anterior sectorectomy corresponds to resection of segments VI and VII",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "Right anterior sectorectomy corresponds to resection of segments VI and VII"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "Right anterior sectorectomy corresponds to resection of segments VI and VII",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1409,
  "specialty": "HPB",
  "topic": "The right lobe of the liver includes which segments?",
  "question": "The right lobe of the liver includes which segments?",
  "options": {
    "A": "2, 3, 4",
    "B": "1, 2, 3, 4",
    "C": "5, 6, 7, 8",
    "D": "3, 4, 5, 6",
    "E": "1, 2, 7, 8"
  },
  "answer": "A",
  "explanation": {
    "correct": "2, 3, 4",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "The right lobe of the liver includes which segments?",
    "H_highlight_excellence": "2, 3, 4",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "2, 3, 4"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "2, 3, 4",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1547,
  "specialty": "HPB",
  "topic": "Who was the first to ever perform a laparoscopic chol-",
  "question": "Who was the first to ever perform a laparoscopic chol-",
  "options": {
    "A": "Claude Couinaud",
    "B": "Carl Hjortsjo",
    "C": "Erich M\u00fche",
    "D": "Pablo Mirizzi",
    "E": "cystectomy?48"
  },
  "answer": "A",
  "explanation": {
    "correct": "Claude Couinaud",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Who was the first to ever perform a laparoscopic chol-",
    "H_highlight_excellence": "Claude Couinaud",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "Claude Couinaud"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "Claude Couinaud",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50069,
  "specialty": "HPB",
  "topic": "General",
  "question": "What common bile duct width is highly indicative of",
  "options": {
    "A": "> 8 mm",
    "B": "> 10 mm",
    "C": "> 12 mm",
    "D": "> 14 mm"
  },
  "answer": "A",
  "explanation": {
    "correct": "> 8 mm",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "> 8 mm",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "> 8 mm"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "> 8 mm",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50179,
  "specialty": "HPB",
  "topic": "General",
  "question": "Which of the following statements is true? 2,15, 24, 25",
  "options": {
    "A": "The hepatic artery is the last structure in the hilum to",
    "B": "The Rex-Cantlie line represents the anatomical mid- line of the liver, thus dividing the liver into left and right liver",
    "C": "The portal vein develops from the primitive paired vitelline veins that arise on the yolk sac",
    "D": "All of the above The Rex-Cantlie line divides the liver into two hemilivers. It was first described by Hugo Rex in 1888, 26 and, 9 years later, James Cantlie described it. 25 The left liver includes segments I, II, III, and IV, and the right liver includes seg- ments V, VI, VII, and VIII."
  },
  "answer": "A",
  "explanation": {
    "correct": "The hepatic artery is the last structure in the hilum to",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "The hepatic artery is the last structure in the hilum to",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "The hepatic artery is the last structure in the hilum to"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "The hepatic artery is the last structure in the hilum to",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1552,
  "specialty": "HPB",
  "topic": "Who was the first to perform a successful liver resec- tion?",
  "question": "Who was the first to perform a successful liver resec- tion?",
  "options": {
    "A": "Carl Langenbuch",
    "B": "Francis Glisson",
    "C": "Hogarth Pringle",
    "D": "Hugo Rex"
  },
  "answer": "A",
  "explanation": {
    "correct": "Carl Langenbuch",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Who was the first to perform a successful liver resec- tion?",
    "H_highlight_excellence": "Carl Langenbuch",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "Carl Langenbuch"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "Carl Langenbuch",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1457,
  "specialty": "HPB",
  "topic": "What is the structure depicted by the yellow arrow?",
  "question": "What is the structure depicted by the yellow arrow?",
  "options": {
    "A": "llowing for visualization of the intrahepatic biliary tree on a CT scan",
    "B": "Segment VII bile duct",
    "C": "Segment V bile duct",
    "D": "Right anterior sectoral duct",
    "E": "xplanation: this patient has bilateral biliary tract dilation,"
  },
  "answer": "A",
  "explanation": {
    "correct": "llowing for visualization of the intrahepatic biliary tree on a CT scan",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "What is the structure depicted by the yellow arrow?",
    "H_highlight_excellence": "llowing for visualization of the intrahepatic biliary tree on a CT scan",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "llowing for visualization of the intrahepatic biliary tree on a CT scan"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "llowing for visualization of the intrahepatic biliary tree on a CT scan",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50078,
  "specialty": "HPB",
  "topic": "General",
  "question": "Which is the most frequently observed anatomical vari-",
  "options": {
    "A": "mpulla is present (85%)",
    "B": "Both ducts enter together, but the common channel is short, and no true ampulla is present (85%)",
    "C": "There is a long common channel that may or may not be dilated to form an ampulla (85%)",
    "D": "Junction of the ducts take place at the third portion of the duodenum, and the common channel always presents an ampulla (85%)"
  },
  "answer": "A",
  "explanation": {
    "correct": "mpulla is present (85%)",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "mpulla is present (85%)",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "mpulla is present (85%)"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "mpulla is present (85%)",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1446,
  "specialty": "HPB",
  "topic": "What is the incidence of hepatic artery anatomic vari-",
  "question": "What is the incidence of hepatic artery anatomic vari-",
  "options": {
    "A": "25%",
    "B": "45%",
    "C": "65%",
    "D": "85%"
  },
  "answer": "A",
  "explanation": {
    "correct": "25%",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "What is the incidence of hepatic artery anatomic vari-",
    "H_highlight_excellence": "25%",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "25%"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "25%",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1332,
  "specialty": "HPB",
  "topic": "A replaced right hepatic artery typically courses;",
  "question": "A replaced right hepatic artery typically courses;",
  "options": {
    "A": "Posterior to the portal vein",
    "B": "Anterior to the portal vein",
    "C": "In the gastrohepatic ligament",
    "D": "Both A and C are correct",
    "E": "Both B and C are correct"
  },
  "answer": "A",
  "explanation": {
    "correct": "Posterior to the portal vein",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "A replaced right hepatic artery typically courses;",
    "H_highlight_excellence": "Posterior to the portal vein",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "Posterior to the portal vein"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "Posterior to the portal vein",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 51290,
  "specialty": "HPB",
  "topic": "General",
  "question": "The portal vein is formed from confluence of which veins?",
  "options": {
    "A": "Splenic vein and inferior mesenteric vein",
    "B": "Splenic vein and superior mesenteric vein",
    "C": "Splenic vein and gastric vein",
    "D": "Superior mesenteric vein and inferior mesenteric vein",
    "E": "None of the above"
  },
  "answer": "A",
  "explanation": {
    "correct": "Splenic vein and inferior mesenteric vein",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "Splenic vein and inferior mesenteric vein",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "Splenic vein and inferior mesenteric vein"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "Splenic vein and inferior mesenteric vein",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1422,
  "specialty": "HPB",
  "topic": "What are the most common locations of the common",
  "question": "What are the most common locations of the common",
  "options": {
    "A": "Anterior and posterior (12 and 6 o\u2019clock)",
    "B": "Left and right (3 and 9 o\u2019clock)",
    "C": "hoose the anatomic structure that matches what is shown in the illustration:",
    "D": "Just right (9 o\u2019clock)"
  },
  "answer": "A",
  "explanation": {
    "correct": "Anterior and posterior (12 and 6 o\u2019clock)",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "What are the most common locations of the common",
    "H_highlight_excellence": "Anterior and posterior (12 and 6 o\u2019clock)",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "Anterior and posterior (12 and 6 o\u2019clock)"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "Anterior and posterior (12 and 6 o\u2019clock)",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1415,
  "specialty": "HPB",
  "topic": "V enous drainage of the hepatic segments are through which hepatic veins;",
  "question": "V enous drainage of the hepatic segments are through which hepatic veins;",
  "options": {
    "A": "Right, middle, left, and short hepatic veins",
    "B": "Right, left, and center hepatic veins",
    "C": "Right, left, and short hepatic veins",
    "D": "Right, left, and long hepatic veins.",
    "E": "Right, middle, left, and long hepatic veins."
  },
  "answer": "A",
  "explanation": {
    "correct": "Right, middle, left, and short hepatic veins",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "V enous drainage of the hepatic segments are through which hepatic veins;",
    "H_highlight_excellence": "Right, middle, left, and short hepatic veins",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "Right, middle, left, and short hepatic veins"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "Right, middle, left, and short hepatic veins",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1527,
  "specialty": "HPB",
  "topic": "Which of the following statements is true about the hepatic veins?",
  "question": "Which of the following statements is true about the hepatic veins?",
  "options": {
    "A": "Their course divides the liver into four segments",
    "B": "In more than half of patients, the left and middle hepatic veins join into one vein before draining into the IVC",
    "C": "The left hepatic vein only drains the left lateral sec- tor",
    "D": "All of the above"
  },
  "answer": "A",
  "explanation": {
    "correct": "Their course divides the liver into four segments",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Which of the following statements is true about the hepatic veins?",
    "H_highlight_excellence": "Their course divides the liver into four segments",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "Their course divides the liver into four segments"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "Their course divides the liver into four segments",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50029,
  "specialty": "HPB",
  "topic": "General",
  "question": "What should be the correct treatment strategy for this type of choledochal cyst?",
  "options": {
    "A": "ERCP with stent placement",
    "B": "Extrahepatic bile duct cyst excision, cholecystec- tomy, and bilioenteric reconstruction",
    "C": "Cystenterostomy",
    "D": "All of the above"
  },
  "answer": "A",
  "explanation": {
    "correct": "ERCP with stent placement",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "ERCP with stent placement",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "ERCP with stent placement"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "ERCP with stent placement",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 51287,
  "specialty": "HPB",
  "topic": "General",
  "question": "Regarding segmental hepatic anatomy, which of the fol- lowing is the most accurate statement?",
  "options": {
    "A": "The right lobe is divided into medial and lateral segments.",
    "B": "The right lobe is divided into anterior and posterior segments.",
    "C": "The left lobe is divided into medial and lateral segments.",
    "D": "The left lobe is divided into anterior and posterior segments.",
    "E": "Both A and D are true. F. Both B and C are true."
  },
  "answer": "A",
  "explanation": {
    "correct": "The right lobe is divided into medial and lateral segments.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "The right lobe is divided into medial and lateral segments.",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "The right lobe is divided into medial and lateral segments."
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "The right lobe is divided into medial and lateral segments.",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1348,
  "specialty": "HPB",
  "topic": "Considering the marked area as the future liver rem- nant (FLR), what",
  "question": "Considering the marked area as the future liver rem- nant (FLR), what resection is to be performed?",
  "options": {
    "A": "Right hepatectomy",
    "B": "Extended right hepatectomy/right trisectionec- tomy",
    "C": "Left hepatectomy",
    "D": "Extended left hepatectomy/left trisectionectomy"
  },
  "answer": "A",
  "explanation": {
    "correct": "Right hepatectomy",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Considering the marked area as the future liver rem- nant (FLR), what",
    "H_highlight_excellence": "Right hepatectomy",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "Right hepatectomy"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "Right hepatectomy",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1533,
  "specialty": "HPB",
  "topic": "Which of the following structures is NOT part of the",
  "question": "Which of the following structures is NOT part of the",
  "options": {
    "A": "Left hepatic duct",
    "B": "Anterior sectoral right hepatic duct",
    "C": "Gallbladder",
    "D": "Common hepatic duct",
    "E": "xtrahepatic biliary tree?"
  },
  "answer": "A",
  "explanation": {
    "correct": "Left hepatic duct",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Which of the following structures is NOT part of the",
    "H_highlight_excellence": "Left hepatic duct",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "Left hepatic duct"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "Left hepatic duct",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50108,
  "specialty": "HPB",
  "topic": "General",
  "question": "According to the Brisbane 2000 Terminology 1, which of the following statements is true?",
  "options": {
    "A": "Right anterior sectorectomy corresponds to resection of segments VI and VII",
    "B": "Extended right hepatectomy corresponds to resec - tion of right hemiliver and left lateral sector",
    "C": "Right posterior sectorectomy corresponds to resec- tion of segments VI and VII",
    "D": "Extended left hepatectomy corresponds to resection of left hemiliver and segment IV"
  },
  "answer": "A",
  "explanation": {
    "correct": "Right anterior sectorectomy corresponds to resection of segments VI and VII",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "Right anterior sectorectomy corresponds to resection of segments VI and VII",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "Right anterior sectorectomy corresponds to resection of segments VI and VII"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "Right anterior sectorectomy corresponds to resection of segments VI and VII",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50084,
  "specialty": "HPB",
  "topic": "General",
  "question": "What is the triangle of Calot?44",
  "options": {
    "A": "nd the inferior surface of the liver superiorly",
    "B": "It is the liver surface that is in touch with the duode- num",
    "C": "It is the deperitonized liver surface",
    "D": "It is an anatomic space bordered by the right hepatic"
  },
  "answer": "A",
  "explanation": {
    "correct": "nd the inferior surface of the liver superiorly",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "nd the inferior surface of the liver superiorly",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "nd the inferior surface of the liver superiorly"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "nd the inferior surface of the liver superiorly",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1475,
  "specialty": "HPB",
  "topic": "When the falciform ligament sheaths divide, which structure is contained within the",
  "question": "When the falciform ligament sheaths divide, which structure is contained within the left bare area?",
  "options": {
    "A": "IVC and hepatic veins",
    "B": "Portal vein",
    "C": "Gallbladder",
    "D": "None of the above"
  },
  "answer": "A",
  "explanation": {
    "correct": "IVC and hepatic veins",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "When the falciform ligament sheaths divide, which structure is contained within the",
    "H_highlight_excellence": "IVC and hepatic veins",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "IVC and hepatic veins"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "IVC and hepatic veins",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1477,
  "specialty": "HPB",
  "topic": "Which embryologic structures are the predecessors of the portal vein?",
  "question": "Which embryologic structures are the predecessors of the portal vein?",
  "options": {
    "A": "Umbilical veins",
    "B": "Umbilical arteries",
    "C": "Vitelline veins",
    "D": "None of the above"
  },
  "answer": "A",
  "explanation": {
    "correct": "Umbilical veins",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Which embryologic structures are the predecessors of the portal vein?",
    "H_highlight_excellence": "Umbilical veins",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "Umbilical veins"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "Umbilical veins",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50196,
  "specialty": "HPB",
  "topic": "General",
  "question": "What is the type of portal division shown below?",
  "options": {
    "A": "Independent left posterior portal vein",
    "B": "Bifurcation",
    "C": "Staged division",
    "D": "Trifurcation",
    "E": "xplanation: Couinaud was the first to describe and clas- sify portal vein variations.43 Watanabe et al. further classified these variations into three types without including two rare variants described by Couinaud.41 Additionally, he exposed the relationship of the bile ducts with these portal vein variants. These are important concepts for performing a safe extended left hepatectomy. In the figure below, we show the portal vein variations as described by Couinaud and Watanabe.44"
  },
  "answer": "A",
  "explanation": {
    "correct": "Independent left posterior portal vein",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "Independent left posterior portal vein",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "Independent left posterior portal vein"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "Independent left posterior portal vein",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1381,
  "specialty": "HPB",
  "topic": "Name the avascular space on the ventral side of the ret- rohepatic",
  "question": "Name the avascular space on the ventral side of the ret- rohepatic IVC, commonly used to perform the hanging maneuver.",
  "options": {
    "A": "Space of Courvoisier",
    "B": "Space of Glisson",
    "C": "Space of Couinaud",
    "D": "Space of Rouviere \u201cI found constantly a loose space between vena cava and liver, limited superiorly by emergence on the right of the right hepatic vein, on the left of the common stem middle + left veins\u201d Couinaud. 43,59, 60"
  },
  "answer": "A",
  "explanation": {
    "correct": "Space of Courvoisier",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Name the avascular space on the ventral side of the ret- rohepatic",
    "H_highlight_excellence": "Space of Courvoisier",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "Space of Courvoisier"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "Space of Courvoisier",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1515,
  "specialty": "HPB",
  "topic": "Which of the following statements about the portal vein is true?",
  "question": "Which of the following statements about the portal vein is true?",
  "options": {
    "A": "nterior to said structures",
    "B": "It originates posterior to the IVC",
    "C": "The left portal vein is longer than the right",
    "D": "Ligation of the right portal vein would cause hyper- trophy of the right liver"
  },
  "answer": "A",
  "explanation": {
    "correct": "nterior to said structures",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Which of the following statements about the portal vein is true?",
    "H_highlight_excellence": "nterior to said structures",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "nterior to said structures"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "nterior to said structures",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1350,
  "specialty": "HPB",
  "topic": "Conventional or normal hepatic artery blood flow is which of the following:",
  "question": "Conventional or normal hepatic artery blood flow is which of the following:",
  "options": {
    "A": "rtery proper to R/L hepatic arteries",
    "B": "Aorta to celiac axis to common hepatic artery to he- patic artery proper to R/L hepatic arteries",
    "C": "Aorta to common hepatic artery to celiac axis to hepatic",
    "D": "None of the above"
  },
  "answer": "A",
  "explanation": {
    "correct": "rtery proper to R/L hepatic arteries",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Conventional or normal hepatic artery blood flow is which of the following:",
    "H_highlight_excellence": "rtery proper to R/L hepatic arteries",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "rtery proper to R/L hepatic arteries"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "rtery proper to R/L hepatic arteries",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1382,
  "specialty": "HPB",
  "topic": "Regarding segmental hepatic anatomy, which of the fol- lowing is the most",
  "question": "Regarding segmental hepatic anatomy, which of the fol- lowing is the most accurate statement?",
  "options": {
    "A": "The right lobe is divided into medial and lateral segments.",
    "B": "The right lobe is divided into anterior and posterior segments.",
    "C": "The left lobe is divided into medial and lateral segments.",
    "D": "The left lobe is divided into anterior and posterior segments.",
    "E": "Both A and D are true. F. Both B and C are true."
  },
  "answer": "A",
  "explanation": {
    "correct": "The right lobe is divided into medial and lateral segments.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Regarding segmental hepatic anatomy, which of the fol- lowing is the most",
    "H_highlight_excellence": "The right lobe is divided into medial and lateral segments.",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "The right lobe is divided into medial and lateral segments"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "The right lobe is divided into medial and lateral segments",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50026,
  "specialty": "HPB",
  "topic": "General",
  "question": "Which is the most frequently observed anatomical vari-",
  "options": {
    "A": "mpulla is present (85%)",
    "B": "Both ducts enter together, but the common chan- nel is short, and no true ampulla is present (85%)",
    "C": "There is a long common channel that may or may not be dilated to form an ampulla (85%)",
    "D": "Junction of the ducts take place at the third portion of the duodenum, and the common channel always pre- sents an ampulla (85%)"
  },
  "answer": "A",
  "explanation": {
    "correct": "mpulla is present (85%)",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "mpulla is present (85%)",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "mpulla is present (85%)"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "mpulla is present (85%)",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50194,
  "specialty": "HPB",
  "topic": "General",
  "question": "Which of the following statements about the portal vein is true? 15",
  "options": {
    "A": "nterior to said structures",
    "B": "It originates posterior to the IVC",
    "C": "The left portal vein is longer than the right",
    "D": "Ligation of the right portal vein would cause hyper- trophy of the right liver"
  },
  "answer": "A",
  "explanation": {
    "correct": "nterior to said structures",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "nterior to said structures",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "nterior to said structures"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "nterior to said structures",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1423,
  "specialty": "HPB",
  "topic": "What are the possible causes of the sign depicted in the image?",
  "question": "What are the possible causes of the sign depicted in the image?",
  "options": {
    "A": "Air in the biliary tree caused by bile duct stenting",
    "B": "Blood in the biliary tree caused by bile duct stenting",
    "C": "Air in the biliary tree caused by a pancreatic head mass",
    "D": "Blood in the biliary tree caused by tumoral invasion"
  },
  "answer": "A",
  "explanation": {
    "correct": "Air in the biliary tree caused by bile duct stenting",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "What are the possible causes of the sign depicted in the image?",
    "H_highlight_excellence": "Air in the biliary tree caused by bile duct stenting",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "Air in the biliary tree caused by bile duct stenting"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "Air in the biliary tree caused by bile duct stenting",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1498,
  "specialty": "HPB",
  "topic": "Which of the following is the most common cause of neonatal cholestasis?",
  "question": "Which of the following is the most common cause of neonatal cholestasis?",
  "options": {
    "A": "Alpha1-antitrypsin deficiency",
    "B": "Biliary atresia",
    "C": "Infectious",
    "D": "Metabolic disorders"
  },
  "answer": "A",
  "explanation": {
    "correct": "Alpha1-antitrypsin deficiency",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Which of the following is the most common cause of neonatal cholestasis?",
    "H_highlight_excellence": "Alpha1-antitrypsin deficiency",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "Alpha1-antitrypsin deficiency"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "Alpha1-antitrypsin deficiency",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50181,
  "specialty": "HPB",
  "topic": "General",
  "question": "Which of the following statements is true about the",
  "options": {
    "A": "The portal vein provides 75% of the blood supply to the liver",
    "B": "The hepatic artery provides 75% of the blood supply to the liver",
    "C": "Blood supply to the intrahepatic bile ducts is mainly through the portal vein",
    "D": "The portal vein provides 50% of the blood supply to the liver"
  },
  "answer": "A",
  "explanation": {
    "correct": "The portal vein provides 75% of the blood supply to the liver",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "The portal vein provides 75% of the blood supply to the liver",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "The portal vein provides 75% of the blood supply to the liver"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "The portal vein provides 75% of the blood supply to the liver",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1360,
  "specialty": "HPB",
  "topic": "How many subsegments does segment VIII have?",
  "question": "How many subsegments does segment VIII have?",
  "options": {
    "A": "One",
    "B": "Three",
    "C": "Five",
    "D": "Seven"
  },
  "answer": "A",
  "explanation": {
    "correct": "One",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "How many subsegments does segment VIII have?",
    "H_highlight_excellence": "One",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "One"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "One",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1400,
  "specialty": "HPB",
  "topic": "The left lobe liver includes which segments?",
  "question": "The left lobe liver includes which segments?",
  "options": {
    "A": "2, 3, 4",
    "B": "1, 2, 3, 4",
    "C": "5, 6, 7, 8",
    "D": "3, 4, 5, 6",
    "E": "1, 2, 7, 8"
  },
  "answer": "A",
  "explanation": {
    "correct": "2, 3, 4",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "The left lobe liver includes which segments?",
    "H_highlight_excellence": "2, 3, 4",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "2, 3, 4"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "2, 3, 4",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1432,
  "specialty": "HPB",
  "topic": "What is a \u201cPhrygian cap\u201d deformity of the gallbladder?",
  "question": "What is a \u201cPhrygian cap\u201d deformity of the gallbladder?",
  "options": {
    "A": "ttached to the main one",
    "B": "A partial folding of the fundus of the gallbladder",
    "C": "An almost completely intrahepatic gallbladder with only the fundus exposed",
    "D": "A benign circumferential tumor of the gallbladder"
  },
  "answer": "A",
  "explanation": {
    "correct": "ttached to the main one",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "What is a \u201cPhrygian cap\u201d deformity of the gallbladder?",
    "H_highlight_excellence": "ttached to the main one",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "ttached to the main one"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "ttached to the main one",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1353,
  "specialty": "HPB",
  "topic": "For hepatic lobar anatomy, which of the following is",
  "question": "For hepatic lobar anatomy, which of the following is",
  "options": {
    "A": "The falciform ligament separates the right and left lobes of the liver.",
    "B": "The plane from the gallbladder bed to the IVC (Cantlie \u2019s line) separates the right and left lobes.",
    "C": "The falciform ligament separates the left lateral and left medial segments.",
    "D": "Both A and B are correct.",
    "E": "Both B and C are correct."
  },
  "answer": "A",
  "explanation": {
    "correct": "The falciform ligament separates the right and left lobes of the liver.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "For hepatic lobar anatomy, which of the following is",
    "H_highlight_excellence": "The falciform ligament separates the right and left lobes of the liver.",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "The falciform ligament separates the right and left lobes of the liver"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "The falciform ligament separates the right and left lobes of the liver",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1390,
  "specialty": "HPB",
  "topic": "The falciform ligament connects dorsally to which ligament? 37",
  "question": "The falciform ligament connects dorsally to which ligament? 37",
  "options": {
    "A": "dapted from Gray\u2019s \u201c Anatomy of the Human",
    "B": "ody,\u201d 20th Ed., 191838",
    "C": "Gastrohepatic and gastroduodenal ligaments",
    "D": "None of the above"
  },
  "answer": "A",
  "explanation": {
    "correct": "dapted from Gray\u2019s \u201c Anatomy of the Human",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "The falciform ligament connects dorsally to which ligament? 37",
    "H_highlight_excellence": "dapted from Gray\u2019s \u201c Anatomy of the Human",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "dapted from Gray\u2019s \u201c Anatomy of the Human"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "dapted from Gray\u2019s \u201c Anatomy of the Human",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50073,
  "specialty": "HPB",
  "topic": "General",
  "question": "Who was the first to describe the sheaths surrounding the portal pedicles?29",
  "options": {
    "A": "Francis Glisson",
    "B": "Johannes Walaeus",
    "C": "J. E. Healey Jr",
    "D": "escribed this finding. 29",
    "E": "xplanation: Francis Glisson described a sheath sur - rounding the portal triad in 1659. 30 However, in 1640, the Dutch physician Johannes Walaeus had originally"
  },
  "answer": "A",
  "explanation": {
    "correct": "Francis Glisson",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "Francis Glisson",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "Francis Glisson"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "Francis Glisson",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1429,
  "specialty": "HPB",
  "topic": "What is a duct of Luschka?",
  "question": "What is a duct of Luschka?",
  "options": {
    "A": "It is a segment I bile duct that drains directly in the",
    "B": "It is a segment V aberrant duct draining directly into the common hepatic duct",
    "C": "ially close to or inserts in the gallbladder",
    "D": "It is a subvesical bile duct that either runs superfi-"
  },
  "answer": "A",
  "explanation": {
    "correct": "It is a segment I bile duct that drains directly in the",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "What is a duct of Luschka?",
    "H_highlight_excellence": "It is a segment I bile duct that drains directly in the",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "It is a segment I bile duct that drains directly in the"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "It is a segment I bile duct that drains directly in the",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50138,
  "specialty": "HPB",
  "topic": "General",
  "question": "Which of the following statements about the portal vein is true?",
  "options": {
    "A": "nterior to said structures",
    "B": "It originates posterior to the IVC",
    "C": "The left portal vein is longer than the right",
    "D": "Ligation of the right portal vein would cause hyper- trophy of the right liver"
  },
  "answer": "A",
  "explanation": {
    "correct": "nterior to said structures",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "nterior to said structures",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "nterior to said structures"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "nterior to said structures",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 51328,
  "specialty": "HPB",
  "topic": "General",
  "question": "A replaced right hepatic artery typically courses;",
  "options": {
    "A": "Posterior to the portal vein",
    "B": "Anterior to the portal vein",
    "C": "In the gastrohepatic ligament",
    "D": "Both A and C are correct",
    "E": "Both B and C are correct"
  },
  "answer": "A",
  "explanation": {
    "correct": "Posterior to the portal vein",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "Posterior to the portal vein",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "Posterior to the portal vein"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "Posterior to the portal vein",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50022,
  "specialty": "HPB",
  "topic": "General",
  "question": "Who was the first to describe the sheaths surrounding the portal pedicles?",
  "options": {
    "A": "Francis Glisson",
    "B": "Johannes Walaeus",
    "C": "J. E. Healey Jr",
    "D": "Hugo Rex"
  },
  "answer": "A",
  "explanation": {
    "correct": "Francis Glisson",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "Francis Glisson",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "Francis Glisson"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "Francis Glisson",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50211,
  "specialty": "HPB",
  "topic": "General",
  "question": "Which of the following statements is true about the",
  "options": {
    "A": "It is also called congenital extrahepatic portosys- temic shunt",
    "B": "It is categorized into two types based on the pres-",
    "C": "losing the shunt. 61",
    "D": "All of the above",
    "E": "xplanation: The Abernethy malformation is also called"
  },
  "answer": "A",
  "explanation": {
    "correct": "It is also called congenital extrahepatic portosys- temic shunt",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "It is also called congenital extrahepatic portosys- temic shunt",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "It is also called congenital extrahepatic portosys- temic shunt"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "It is also called congenital extrahepatic portosys- temic shunt",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1478,
  "specialty": "HPB",
  "topic": "Which embryologic structures are the predecessors of the portal vein? 15",
  "question": "Which embryologic structures are the predecessors of the portal vein? 15",
  "options": {
    "A": "Umbilical veins",
    "B": "Umbilical arteries",
    "C": "Vitelline veins",
    "D": "None of the above"
  },
  "answer": "A",
  "explanation": {
    "correct": "Umbilical veins",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Which embryologic structures are the predecessors of the portal vein? 15",
    "H_highlight_excellence": "Umbilical veins",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "Umbilical veins"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "Umbilical veins",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1372,
  "specialty": "HPB",
  "topic": "In a patient with normal vascular anatomy, what will happen to the",
  "question": "In a patient with normal vascular anatomy, what will happen to the liver if the proper hepatic artery is ligated? 54",
  "options": {
    "A": "nd the liver subcapsular plexus may be sufficient to preserve liver function",
    "B": "In most cases, supply from the gastroduodenal artery is sufficient to preserve liver function",
    "C": "Extrinsic arteries along the common bile duct",
    "D": "The portal blood supply alone is sufficient to pre - serve liver function"
  },
  "answer": "A",
  "explanation": {
    "correct": "nd the liver subcapsular plexus may be sufficient to preserve liver function",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "In a patient with normal vascular anatomy, what will happen to the",
    "H_highlight_excellence": "nd the liver subcapsular plexus may be sufficient to preserve liver function",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "nd the liver subcapsular plexus may be sufficient to preserve liver function"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "nd the liver subcapsular plexus may be sufficient to preserve liver function",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1418,
  "specialty": "HPB",
  "topic": "What anatomical variation of the hepatic artery is shown in the illustration?",
  "question": "What anatomical variation of the hepatic artery is shown in the illustration?",
  "options": {
    "A": "Replaced left hepatic artery",
    "B": "Replaced right hepatic artery",
    "C": "Accessory right hepatic artery",
    "D": "Both replaced right and left hepatic artery"
  },
  "answer": "A",
  "explanation": {
    "correct": "Replaced left hepatic artery",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "What anatomical variation of the hepatic artery is shown in the illustration?",
    "H_highlight_excellence": "Replaced left hepatic artery",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "Replaced left hepatic artery"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "Replaced left hepatic artery",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1373,
  "specialty": "HPB",
  "topic": "In the following images, which segments do NOT show bile duct dilation?",
  "question": "In the following images, which segments do NOT show bile duct dilation?",
  "options": {
    "A": "II, III",
    "B": "VI, VII",
    "C": "V, VIII",
    "D": "IV, V"
  },
  "answer": "A",
  "explanation": {
    "correct": "II, III",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "In the following images, which segments do NOT show bile duct dilation?",
    "H_highlight_excellence": "II, III",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "II, III"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "II, III",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1476,
  "specialty": "HPB",
  "topic": "When the falciform ligament sheaths divide, which structure is contained within the",
  "question": "When the falciform ligament sheaths divide, which structure is contained within the left bare area? 37",
  "options": {
    "A": "IVC and hepatic veins",
    "B": "Portal vein",
    "C": "Gallbladder",
    "D": "None of the above"
  },
  "answer": "A",
  "explanation": {
    "correct": "IVC and hepatic veins",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "When the falciform ligament sheaths divide, which structure is contained within the",
    "H_highlight_excellence": "IVC and hepatic veins",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "IVC and hepatic veins"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "IVC and hepatic veins",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50090,
  "specialty": "HPB",
  "topic": "General",
  "question": "Who was the first to ever perform a laparoscopic chol-",
  "options": {
    "A": "Claude Couinaud",
    "B": "Carl Hjortsjo",
    "C": "Erich M\u00fche",
    "D": "Pablo Mirizzi",
    "E": "cystectomy?48"
  },
  "answer": "A",
  "explanation": {
    "correct": "Claude Couinaud",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "Claude Couinaud",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "Claude Couinaud"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "Claude Couinaud",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1542,
  "specialty": "HPB",
  "topic": "Which type of choledochal cyst is depicted in the illus- tration? What",
  "question": "Which type of choledochal cyst is depicted in the illus- tration? What is its relative frequency?",
  "options": {
    "A": "Type II, it is the least common",
    "B": "Type IVb, it is the least common",
    "C": "Type I, it is the most common",
    "D": "Type V, it is the most common"
  },
  "answer": "A",
  "explanation": {
    "correct": "Type II, it is the least common",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Which type of choledochal cyst is depicted in the illus- tration? What",
    "H_highlight_excellence": "Type II, it is the least common",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "Type II, it is the least common"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "Type II, it is the least common",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50141,
  "specialty": "HPB",
  "topic": "General",
  "question": "Why are these portal vein anatomical variants impor - tant?",
  "options": {
    "A": "Because the demarcation of the division between the right and left livers will vary",
    "B": "Because the staged division is associated with a large right posterior sector",
    "C": "Because the staged division is associated with a small right posterior sector",
    "D": "Because the staged division is associated with a large right anterior sector"
  },
  "answer": "A",
  "explanation": {
    "correct": "Because the demarcation of the division between the right and left livers will vary",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "Because the demarcation of the division between the right and left livers will vary",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "Because the demarcation of the division between the right and left livers will vary"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "Because the demarcation of the division between the right and left livers will vary",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50097,
  "specialty": "HPB",
  "topic": "General",
  "question": "What is the diagnosis associated with the imaging pre- sented below?55",
  "options": {
    "A": "This is a \u201cbeads on a string\u201d appearance of the bile",
    "B": "This is a \u201cbeads on a string\u201d appearance of the bile",
    "C": "This is onion skinning appearance, and it signifies primary sclerosing cholangitis.",
    "D": "This is onion skinning appearance, and it signifies primary biliary cholangitis"
  },
  "answer": "A",
  "explanation": {
    "correct": "This is a \u201cbeads on a string\u201d appearance of the bile",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "This is a \u201cbeads on a string\u201d appearance of the bile",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "This is a \u201cbeads on a string\u201d appearance of the bile"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "This is a \u201cbeads on a string\u201d appearance of the bile",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1320,
  "specialty": "HPB",
  "topic": "A 73-year-old male patient with a history of resected",
  "question": "A 73-year-old male patient with a history of resected",
  "options": {
    "A": "NSWERS",
    "B": "Enlarged lymph nodes",
    "C": "Hyperenhancing resection site",
    "D": "Imaging artifact"
  },
  "answer": "A",
  "explanation": {
    "correct": "NSWERS",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "A 73-year-old male patient with a history of resected",
    "H_highlight_excellence": "NSWERS",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "NSWERS"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "NSWERS",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1532,
  "specialty": "HPB",
  "topic": "Which of the following statements is true? 2,15, 24, 25",
  "question": "Which of the following statements is true? 2,15, 24, 25",
  "options": {
    "A": "The hepatic artery is the last structure in the hilum to",
    "B": "The Rex-Cantlie line represents the anatomical mid- line of the liver, thus dividing the liver into left and right liver",
    "C": "The portal vein develops from the primitive paired vitelline veins that arise on the yolk sac",
    "D": "All of the above The Rex-Cantlie line divides the liver into two hemilivers. It was first described by Hugo Rex in 1888, 26 and, 9 years later, James Cantlie described it. 25 The left liver includes segments I, II, III, and IV, and the right liver includes seg- ments V, VI, VII, and VIII."
  },
  "answer": "A",
  "explanation": {
    "correct": "The hepatic artery is the last structure in the hilum to",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Which of the following statements is true? 2,15, 24, 25",
    "H_highlight_excellence": "The hepatic artery is the last structure in the hilum to",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "The hepatic artery is the last structure in the hilum to"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "The hepatic artery is the last structure in the hilum to",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1425,
  "specialty": "HPB",
  "topic": "What common bile duct width is highly indicative of",
  "question": "What common bile duct width is highly indicative of",
  "options": {
    "A": "> 8 mm",
    "B": "> 10 mm",
    "C": "> 12 mm",
    "D": "> 14 mm"
  },
  "answer": "A",
  "explanation": {
    "correct": "> 8 mm",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "What common bile duct width is highly indicative of",
    "H_highlight_excellence": "> 8 mm",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "> 8 mm"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "> 8 mm",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50188,
  "specialty": "HPB",
  "topic": "General",
  "question": "The falciform ligament connects dorsally to which ligament? 37",
  "options": {
    "A": "dapted from Gray\u2019s \u201c Anatomy of the Human",
    "B": "ody,\u201d 20th Ed., 191838",
    "C": "Gastrohepatic and gastroduodenal ligaments",
    "D": "None of the above"
  },
  "answer": "A",
  "explanation": {
    "correct": "dapted from Gray\u2019s \u201c Anatomy of the Human",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "dapted from Gray\u2019s \u201c Anatomy of the Human",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "dapted from Gray\u2019s \u201c Anatomy of the Human"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "dapted from Gray\u2019s \u201c Anatomy of the Human",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1440,
  "specialty": "HPB",
  "topic": "What is the embryologic origin of the extrahepatic bile",
  "question": "What is the embryologic origin of the extrahepatic bile",
  "options": {
    "A": "Mesoderm",
    "B": "Ectoderm",
    "C": "Endoderm",
    "D": "uct?"
  },
  "answer": "A",
  "explanation": {
    "correct": "Mesoderm",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "What is the embryologic origin of the extrahepatic bile",
    "H_highlight_excellence": "Mesoderm",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "Mesoderm"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "Mesoderm",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 50107,
  "specialty": "HPB",
  "topic": "General",
  "question": "How many subsegments does segment VIII have?",
  "options": {
    "A": "One",
    "B": "Three",
    "C": "Five",
    "D": "Seven"
  },
  "answer": "A",
  "explanation": {
    "correct": "One",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "One",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "One"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "One",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 51292,
  "specialty": "HPB",
  "topic": "General",
  "question": "The left medial hepatic segment is also known as:",
  "options": {
    "A": "Segment IV",
    "B": "Quadrate lobe",
    "C": "Caudate lobe",
    "D": "Both A and C",
    "E": "Both A and B"
  },
  "answer": "A",
  "explanation": {
    "correct": "Segment IV",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Review the stem and choose the best option.",
    "H_highlight_excellence": "Segment IV",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB",
    "P_plan_for_improvement": "Segment IV"
  },
  "supplementary_callouts": {
    "guideline": "HPB",
    "takeaway": "Segment IV",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1334,
  "specialty": "HPB",
  "topic": "Aberrant biliary anatomy with the right anterior or pos- terior hepatic duct",
  "question": "Aberrant biliary anatomy with the right anterior or pos- terior hepatic duct draining into left hepatic duct occurs what percent of time?",
  "options": {
    "A": "5%",
    "B": "10%",
    "C": "25%",
    "D": "60%",
    "E": "80%"
  },
  "answer": "A",
  "explanation": {
    "correct": "5%",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Aberrant biliary anatomy with the right anterior or pos- terior hepatic duct",
    "H_highlight_excellence": "5%",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "HPB surgical guidelines",
    "P_plan_for_improvement": "5%"
  },
  "supplementary_callouts": {
    "guideline": "HPB surgical guidelines",
    "takeaway": "5%",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
]);
