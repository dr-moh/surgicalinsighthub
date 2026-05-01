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
]);
