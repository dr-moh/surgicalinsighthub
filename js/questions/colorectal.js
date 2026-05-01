if (!window.QUESTIONS) window.QUESTIONS = [];
window.QUESTIONS.push(...[
[
  {
    "specialty": "Colorectal Surgery",
    "topic": "Hemorrhoids",
    "question": "Internal hemorrhoids are graded based on their degree of prolapse. Which grade describes a hemorrhoid that prolapses but can be manually reduced?",
    "options": {
      "A": "Grade I",
      "B": "Grade II",
      "C": "Grade III",
      "D": "Grade IV"
    },
    "answer": "C",
    "explanation": {
      "correct": "Hemorrhoid Grading: I: Bleeding, no prolapse; II: Prolapses but reduces spontaneously; III: Prolapses and requires manual reduction; IV: Permanently prolapsed/incarcerated.",
      "A": "No prolapse.",
      "B": "Spontaneous reduction.",
      "C": "Manual reduction required.",
      "D": "Incarcerated/Non-reducible."
    },
    "guideline": "ASCRS Clinical Practice Guidelines for Hemorrhoids",
    "takeaway": "Grade III Hemorrhoids = Prolapse requiring manual reduction.",
    "sharp_metadata": {
      "S": "Patient with bright red blood per rectum and a 'lump' they have to push back in after bowel movements.",
      "H": "Excellence in anatomy: Internal hemorrhoids are above the dentate line and are usually painless unless strangulated.",
      "A": "Identify Rubber Band Ligation as the most common treatment for Grade I-II (and some III).",
      "R": "Common outpatient surgical condition.",
      "P": "Fiber supplementation first; if failing, consider Ligation or Hemorrhoidectomy."
    },
    "id": 1682,
    "_src_file": "colorectal.js"
  },
  {
    "specialty": "Colorectal Surgery",
    "topic": "Anal Fistula",
    "question": "According to Goodsall's Law, an external fistula opening that is ANTERIOR to a transverse line drawn through the anus will usually follow which path?",
    "options": {
      "A": "A radial, straight path to the internal opening",
      "B": "A curved path to the posterior midline",
      "C": "It will always cross the midline",
      "D": "There is no predictable path"
    },
    "answer": "A",
    "explanation": {
      "correct": "Goodsall's Law: 1. Anterior openings follow a straight radial path to the dentate line. 2. Posterior openings follow a curved path to the posterior midline. (Exception: Anterior openings >3cm from the anus may act like posterior ones).",
      "A": "Classic 'Anterior' rule.",
      "B": "Rule for posterior openings.",
      "C": "Incorrect.",
      "D": "Predictable in most cases."
    },
    "guideline": "Management of Anorectal Abscess and Fistula",
    "takeaway": "Goodsall's Law: Anterior = Straight; Posterior = Curved to Midline.",
    "sharp_metadata": {
      "S": "Patient with recurrent perianal drainage and an external pit at the 2 o'clock position (anterior).",
      "H": "Excellence in technique: Using a probe or 'fistulography' with peroxide can help identify the tract.",
      "A": "Identify the 'internal opening' at the crypts at the dentate line.",
      "R": "Fundamental proctology anatomy.",
      "P": "Fistulotomy if the tract is superficial and doesn't involve too much sphincter."
    },
    "id": 1683,
    "_src_file": "colorectal.js"
  },
  {
    "specialty": "Colorectal Surgery",
    "topic": "Crohn's Disease",
    "question": "Which of the following pathological features is characteristic of Crohn's Disease but NOT Ulcerative Colitis (UC)?",
    "options": {
      "A": "Continuous mucosal involvement",
      "B": "Transmural inflammation and non-caseating granulomas",
      "C": "Lead pipe appearance of the colon",
      "D": "Primary involvement of the rectum"
    },
    "answer": "B",
    "explanation": {
      "correct": "Crohn's is characterized by transmural (full-thickness) inflammation, skip lesions, and granulomas. UC is limited to the mucosa/submucosa and is continuous, starting in the rectum.",
      "A": "Feature of UC.",
      "B": "Feature of Crohn's.",
      "C": "Feature of UC due to loss of haustra.",
      "D": "Feature of UC (rectal sparing is common in Crohn's)."
    },
    "guideline": "ACG Clinical Guideline: Management of Crohn's Disease",
    "takeaway": "Crohn's = Transmural + Granulomas + Skip Lesions.",
    "sharp_metadata": {
      "S": "Young patient with right-sided abdominal pain and perianal fistulas.",
      "H": "Excellence in surgery: Crohn's surgery is generally for *complications* (stricture, abscess), not for 'cure' (unlike UC).",
      "A": "Identify the 'cobblestone' appearance of the mucosa on colonoscopy.",
      "R": "Major surgical IBD topic.",
      "P": "Optimize with biologics (e.g., Infliximab); if failing, consider strictureplasty or limited resection."
    },
    "id": 1684,
    "_src_file": "colorectal.js"
  },
  {
    "specialty": "Colorectal Surgery",
    "topic": "Rectal Cancer",
    "question": "What is the surgical 'Gold Standard' for the resection of rectal cancer to ensure the lowest risk of local recurrence?",
    "options": {
      "A": "Low Anterior Resection (LAR)",
      "B": "Total Mesorectal Excision (TME)",
      "C": "Abdominoperineal Resection (APR)",
      "D": "Transanal Endoscopic Microsurgery (TEMS)"
    },
    "answer": "B",
    "explanation": {
      "correct": "Total Mesorectal Excision (TME) involves sharp dissection of the 'Holy Plane' (outside the mesorectal fascia), removing the rectum along with its lymphatics and fat as an intact package. This drastically reduced recurrence rates.",
      "A": "A type of procedure that *includes* TME.",
      "B": "The specific oncological surgical technique.",
      "C": "Removal of the anus/rectum with permanent colostomy; includes TME.",
      "D": "For very early/small tumors only."
    },
    "guideline": "NCCN Guidelines: Rectal Cancer",
    "takeaway": "Rectal Cancer = TME ('Holy Plane' dissection).",
    "sharp_metadata": {
      "S": "Patient with biopsy-proven adenocarcinoma 8cm from the anal verge.",
      "H": "Excellence in staging: Pelvic MRI is the most important tool for determining the 'circumferential resection margin' (CRM).",
      "A": "Address the role of neoadjuvant chemoradiation for Stage II/III tumors to downstage before TME.",
      "R": "Standard of care for rectal oncology.",
      "P": "Staging MRI -> Neoadjuvant CRT (if needed) -> TME Surgery."
    },
    "id": 1685,
    "_src_file": "colorectal.js"
  },
  {
    "specialty": "Colorectal Surgery",
    "topic": "FAP / Genetic Syndromes",
    "question": "A 20-year-old patient is found to have hundreds of polyps on colonoscopy. Genetic testing reveals a mutation in the APC gene. What is the recommended management?",
    "options": {
      "A": "Annual colonoscopy until age 50",
      "B": "Daily Aspirin and follow-up in 3 years",
      "C": "Prophylactic Total Proctocolectomy",
      "D": "Observation only"
    },
    "answer": "C",
    "explanation": {
      "correct": "Familial Adenomatous Polyposis (FAP) has a nearly 100% risk of colon cancer by age 40 if left untreated. Total proctocolectomy is the mandatory treatment once polyps develop, usually in late teens/early 20s.",
      "A": "Cancer will almost certainly develop before then.",
      "B": "May reduce polyp burden but doesn't prevent cancer.",
      "C": "Definitive preventive management.",
      "D": "Ethically incorrect."
    },
    "guideline": "NCCN Guidelines: Genetic/Familial Colorectal Cancer",
    "takeaway": "FAP (APC Mutation) = 100% Cancer Risk; Prophylactic Colectomy.",
    "sharp_metadata": {
      "S": "Teenager with a family history of early colectomy.",
      "H": "Excellence in screening: Screening should start at age 10-12 with annual flexible sigmoidoscopy.",
      "A": "Identify 'Gardner Syndrome' as FAP + Osteomas + Desmoid tumors + Sebaceous cysts.",
      "R": "Essential surgical genetics.",
      "P": "Counsel for Total Proctocolectomy with Ileal Pouch-Anal Anastomosis (IPAA)."
    },
    "id": 1686,
    "_src_file": "colorectal.js"
  },
  {
    "specialty": "Colorectal Surgery",
    "topic": "Toxic Megacolon",
    "question": "A patient with Ulcerative Colitis presents with fever, tachycardia, and a dilated colon (>6 cm) on X-ray. What is the first-line MEDICAL management?",
    "options": {
      "A": "Immediate subtotal colectomy",
      "B": "IV Corticosteroids, NPO, and broad-spectrum antibiotics",
      "C": "Colonoscopic decompression",
      "D": "Infliximab only"
    },
    "answer": "B",
    "explanation": {
      "correct": "Initial management for toxic megacolon is aggressive medical stabilization: NPO, IV fluids, high-dose IV steroids, and antibiotics. Surgery is indicated if no improvement in 24-48 hours or if perforation occurs.",
      "A": "Indicated if medical management fails.",
      "B": "Standard initial protocol.",
      "C": "Contraindicated; high risk of perforation.",
      "D": "Used for rescue but steroids/ABX are first-line."
    },
    "guideline": "Management of Toxic Megacolon",
    "takeaway": "Toxic Megacolon = Dilated colon + Sepsis; Medical stabilization first.",
    "sharp_metadata": {
      "S": "UC patient in a severe flare; vitals 39.0C, HR 130, distended abdomen.",
      "H": "Excellence in surgery: Subtotal colectomy with end-ileostomy is the preferred procedure if surgery is needed (avoids pelvic dissection in an unstable patient).",
      "A": "Identify 'C. difficile' as a common trigger for toxic megacolon that must be ruled out.",
      "R": "Life-threatening surgical complication of IBD.",
      "P": "Immediate medical therapy; frequent abdominal exams; prepare for emergency surgery if failing."
    },
    "id": 1687,
    "_src_file": "colorectal.js"
  },
  {
    "specialty": "Colorectal Surgery",
    "topic": "Anal Fissure",
    "question": "What is the first-line treatment for a chronic anal fissure located in the posterior midline?",
    "options": {
      "A": "Lateral Internal Sphincterotomy (LIS)",
      "B": "Topical nitroglycerin or diltiazem + Fiber supplementation",
      "C": "Botox injection into the sphincter",
      "D": "Anal stretch (Lord's procedure)"
    },
    "answer": "B",
    "explanation": {
      "correct": "The first-line management for chronic anal fissures is conservative: stool softeners, fiber, sitz baths, and topical vasodilators (GTN or Diltiazem) to relax the internal sphincter and improve blood flow.",
      "A": "Gold standard for *refractory* fissures; 95% cure but risk of incontinence.",
      "B": "Standard initial therapy.",
      "C": "Second-line medical therapy.",
      "D": "Outdated; high risk of permanent incontinence."
    },
    "guideline": "ASCRS Clinical Practice Guideline for Anal Fissure",
    "takeaway": "Anal Fissure = Fiber + Topical Vasodilators first-line.",
    "sharp_metadata": {
      "S": "Patient with 'shards of glass' pain during bowel movements and bright red blood on paper.",
      "H": "Excellence in exam: Seeing a 'sentinel pile' or skin tag indicates the fissure is chronic.",
      "A": "Identify the posterior midline (6 o'clock) as the most common site due to poor perfusion.",
      "R": "Extremely common proctology case.",
      "P": "Start medical therapy; reserve LIS for cases failing 6-8 weeks of treatment."
    },
    "id": 1688,
    "_src_file": "colorectal.js"
  },
  {
    "specialty": "Colorectal Surgery",
    "topic": "Volvulus",
    "question": "A 'Coffee Bean' sign on abdominal X-ray in an elderly, constipated patient is characteristic of which condition?",
    "options": {
      "A": "Cecal Volvulus",
      "B": "Sigmoid Volvulus",
      "C": "Small Bowel Obstruction",
      "D": "Gallstone Ileus"
    },
    "answer": "B",
    "explanation": {
      "correct": "Sigmoid volvulus classically shows a large, dilated loop of colon originating from the pelvis, resembling a coffee bean. Cecal volvulus looks more like a 'comma' and is directed toward the LUQ.",
      "A": "Usually in younger patients; 'comma' shape.",
      "B": "Classic radiographic sign in the elderly.",
      "C": "Central dilated loops with valvulae conniventes.",
      "D": "Pneumobilia + ectopic stone."
    },
    "guideline": "Management of Colonic Volvulus",
    "takeaway": "Sigmoid Volvulus = Coffee Bean sign; Sigmoidoscopic decompression.",
    "sharp_metadata": {
      "S": "Institutionalized elderly patient with massive abdominal distention.",
      "H": "Excellence in management: Sigmoidoscopic decompression (with a rectal tube) is successful in 80% of sigmoid cases.",
      "A": "Identify the high recurrence risk (up to 50%) after decompression alone; elective resection is usually advised.",
      "R": "High-yield geriatric surgical emergency.",
      "P": "Immediate sigmoidoscopy and flatus tube; elective sigmoidectomy later in the admission."
    },
    "id": 1689,
    "_src_file": "colorectal.js"
  },
  {
    "specialty": "Colorectal Surgery",
    "topic": "Colon Cancer Screening",
    "question": "According to the latest 2021 USPSTF and ACS guidelines, at what age should routine colorectal cancer screening begin for an average-risk individual?",
    "options": {
      "A": "40",
      "B": "45",
      "C": "50",
      "D": "55"
    },
    "answer": "B",
    "explanation": {
      "correct": "Guidelines were updated in 2021 to lower the starting age for CRC screening from 50 to 45 for average-risk individuals, due to the rising incidence of 'early-onset' colon cancer.",
      "A": "Used if a first-degree relative had cancer at age 50.",
      "B": "Current standard of care.",
      "C": "Former standard of care.",
      "D": "Too late."
    },
    "guideline": "USPSTF Screening for Colorectal Cancer 2021",
    "takeaway": "CRC Screening = Starts at age 45.",
    "sharp_metadata": {
      "S": "Healthy 45-year-old asking about health maintenance.",
      "H": "Excellence in prevention: Colonoscopy is the only screening tool that is also *preventive* (via polypectomy).",
      "A": "Identify fecal immunochemical test (FIT) as an annual alternative for those refusing colonoscopy.",
      "R": "Critical public health surgery update.",
      "P": "Order screening colonoscopy."
    },
    "id": 1690,
    "_src_file": "colorectal.js"
  },
  {
    "specialty": "Colorectal Surgery",
    "topic": "Ischemic Colitis",
    "question": "A patient presents with sudden LLQ pain followed by bloody diarrhea. Colonoscopy shows 'thumbprinting' and cyanotic mucosa at the splenic flexure. What is the most likely diagnosis?",
    "options": {
      "A": "Acute Mesenteric Ischemia (SMA)",
      "B": "Ischemic Colitis",
      "C": "Ulcerative Colitis",
      "D": "Infectious Colitis (E. coli O157:H7)"
    },
    "answer": "B",
    "explanation": {
      "correct": "Ischemic colitis typically affects the 'watershed' areas (Splenic flexure - Griffith's point; Rectosigmoid - Sudak's point). It presents with pain followed by self-limited bleeding, unlike SMA ischemia which is 'pain out of proportion' and more severe.",
      "A": "Affects small bowel; much more severe.",
      "B": "Classic watershed presentation.",
      "C": "Chronic, not sudden onset.",
      "D": "Possible, but watershed distribution favors ischemia."
    },
    "guideline": "Management of Colonic Ischemia",
    "takeaway": "Ischemic Colitis = Pain + Bloody Diarrhea + Watershed area (Splenic flexure).",
    "sharp_metadata": {
      "S": "Elderly patient after a period of hypotension (e.g., post-op or dehydration).",
      "H": "Excellence in diagnosis: Most cases are transient and resolve with supportive care (fluids/bowel rest).",
      "A": "Identify 'Thumbprinting' on X-ray/CT as a sign of submucosal edema/hemorrhage.",
      "R": "Common geriatric surgical condition.",
      "P": "Bowel rest, IV fluids, and observation; if peritonitic, proceed to surgery."
    },
    "id": 1691,
    "_src_file": "colorectal.js"
  },
  {
    "id": 202,
    "specialty": "Colorectal",
    "topic": "rush.docx",
    "question": "With regard to diabetes insipidus, which of the following statements is true?",
    "options": {
      "A": "Diabetes insipidus causes hypervolemic hyponatremia.",
      "D": "Alcohol intoxication can mimic diabetes insipidus.",
      "E": "Lithium administration could induce central diabetes insipidus."
    },
    "answer": "D",
    "explanation": {
      "correct": "The correct answer, 'Alcohol intoxication can mimic diabetes insipidus,' is high-yield because alcohol is a well-known ADH (antidiuretic hormone) inhibitor. By suppressing ADH release, alcohol leads to increased free water excretion, mimicking the polyuria seen in DI. This is a common clinical scenario that can confuse initial assessments.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "D",
      "set_the_stage": "This question probes a fundamental understanding of the pathophysiology and clinical presentations of diabetes insipidus (DI), a condition characterized by the inability to concentrate urine, leading to polyuria and polydipsia. Recognizing its mimics and potential etiologies is crucial for accurate diagnosis and management.",
      "highlight_excellence": "The correct answer, 'Alcohol intoxication can mimic diabetes insipidus,' is high-yield because alcohol is a well-known ADH (antidiuretic hormone) inhibitor. By suppressing ADH release, alcohol leads to increased free water excretion, mimicking the polyuria seen in DI. This is a common clinical scenario that can confuse initial assessments.",
      "address_gaps": "Option A is incorrect because DI typically leads to hypernatremia (due to free water loss) and can result in hypovolemia if fluid intake doesn't compensate. Hypervolemic hyponatremia is characteristic of conditions like SIADH or heart failure. Option E is incorrect; while lithium is a known cause of nephrogenic DI (impaired kidney response to ADH), it does not typically induce central DI (ADH deficiency).",
      "review_guidelines": "When evaluating questions about DI, focus on the core mechanisms: ADH deficiency (central DI) or resistance (nephrogenic DI). Consider common causes and mimics. Think about the electrolyte and volume status implications of each. Differentiating DI from other causes of polyuria (e.g., primary polydipsia) is also a key learning objective.",
      "plan": "For future questions on DI, ensure a comprehensive understanding of: 1. The role of ADH in water balance. 2. The distinction between central and nephrogenic DI. 3. Common etiologies for both types (e.g., head trauma, surgery, tumors for central; lithium, hypercalcemia for nephrogenic). 4. Key diagnostic tests (water deprivation test, ADH levels, response to desmopressin). 5. Important mimics like primary polydipsia and psychogenic polydipsia. 6. The impact on serum sodium and osmolality."
    },
    "guideline": "When evaluating questions about DI, focus on the core mechanisms: ADH deficiency (central DI) or resistance (nephrogenic DI). Consider common causes and mimics. Think about the electrolyte and volume status implications of each. Differentiating DI from other causes of polyuria (e.g., primary polydipsia) is also a key learning objective.",
    "takeaway": "PLAN: For future questions on DI, ensure a comprehensive understanding of: 1. The role of ADH in water balance. 2. The distinction between central and nephrogenic DI. 3. Common etiologies for both types (e.g., head trauma, surgery, tumors for central; lithium, hypercalcemia for nephrogenic). 4. Key diagnostic tests (water deprivation test, ADH levels, response to desmopressin). 5. Important mimics like primary polydipsia and psychogenic polydipsia. 6. The impact on serum sodium and osmolality.",
    "_src_file": "colorectal.js"
  },
  {
    "id": 201,
    "specialty": "Colorectal",
    "topic": "rush.docx",
    "question": "Which of the following statements regarding changes in volume status of the ECF compartment is true?",
    "options": {
      "A": "Hyponatremia is diagnostic of excess ECF volume.",
      "B": "Hypernatremia is diagnostic of depletion of ECF volume.",
      "E": "The concentration of serum sodium is directly related to extracellular volume."
    },
    "answer": "Letter C",
    "explanation": {
      "correct": "The correct answer (C) accurately reflects the principle that changes in serum sodium concentration are *primarily* driven by alterations in extracellular fluid volume, not simply a direct reflection of volume itself. This demonstrates a solid grasp of the complex interplay between sodium, water, and ECF volume.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "Letter C",
      "set_the_stage": "This question assesses understanding of volume status assessment, a cornerstone of critical care and surgical patient management. Recognizing the relationship between electrolyte abnormalities and ECF volume is crucial for guiding fluid resuscitation and treatment strategies.",
      "highlight_excellence": "The correct answer (C) accurately reflects the principle that changes in serum sodium concentration are *primarily* driven by alterations in extracellular fluid volume, not simply a direct reflection of volume itself. This demonstrates a solid grasp of the complex interplay between sodium, water, and ECF volume.",
      "address_gaps": "Options A and B are frequently misconstrued. Hyponatremia can be caused by both volume depletion *and* excessive water intake, making it a non-specific indicator. Similarly, hypernatremia can be caused by volume expansion. Option E is an oversimplification; while there's a correlation, it’s not a direct, linear relationship and doesn’t account for factors like osmotic shifts.",
      "review_guidelines": "1. **Assess ECF Volume:** Utilize clinical signs (edema, jugular venous distension, orthostatic hypotension), physical exam findings (tachycardia, rales), and laboratory data (serum creatinine, BUN, fractional excretion of sodium - FEENa) to determine the degree of ECF volume depletion or expansion. 2. **Sodium Interpretation:** Understand that changes in serum sodium are *secondary* to volume shifts.  A low sodium suggests volume depletion, while a high sodium suggests volume expansion. 3. **FEENa:** This is a more sensitive marker of true volume status than BUN/Creatinine ratio, especially in patients with renal dysfunction. 4. **Consider Osmolality:** Total body osmolality provides a more accurate reflection of the overall fluid balance than serum sodium alone, particularly in patients with significant edema or burns.",
      "plan": "Implement a structured approach to volume assessment: 1. Initial Assessment: Quickly assess for signs of hypotension, tachycardia, and respiratory distress. 2. Fluid Resuscitation: Initiate with crystalloid solutions (e.g., normal saline, lactated Ringer's) based on the suspected volume deficit. 3. Monitor Response: Closely monitor vital signs, urine output, and serum electrolytes. 4. Adjust Fluid Rate: Adjust the fluid rate based on the patient's response and ongoing assessment. Consider adding albumin if hypovolemia persists despite crystalloid resuscitation."
    },
    "guideline": "1. **Assess ECF Volume:** Utilize clinical signs (edema, jugular venous distension, orthostatic hypotension), physical exam findings (tachycardia, rales), and laboratory data (serum creatinine, BUN, fractional excretion of sodium - FEENa) to determine the degree of ECF volume depletion or expansion. 2. **Sodium Interpretation:** Understand that changes in serum sodium are *secondary* to volume shifts.  A low sodium suggests volume depletion, while a high sodium suggests volume expansion. 3. **FEENa:** This is a more sensitive marker of true volume status than BUN/Creatinine ratio, especially in patients with renal dysfunction. 4. **Consider Osmolality:** Total body osmolality provides a more accurate reflection of the overall fluid balance than serum sodium alone, particularly in patients with significant edema or burns.",
    "takeaway": "PLAN: Implement a structured approach to volume assessment: 1. Initial Assessment: Quickly assess for signs of hypotension, tachycardia, and respiratory distress. 2. Fluid Resuscitation: Initiate with crystalloid solutions (e.g., normal saline, lactated Ringer's) based on the suspected volume deficit. 3. Monitor Response: Closely monitor vital signs, urine output, and serum electrolytes. 4. Adjust Fluid Rate: Adjust the fluid rate based on the patient's response and ongoing assessment. Consider adding albumin if hypovolemia persists despite crystalloid resuscitation.",
    "_src_file": "colorectal.js"
  },
  {
    "id": 203,
    "specialty": "Colorectal",
    "topic": "Infectious Colitis",
    "question": "Which of the following is true regarding the pathophysiology of C. difficile?",
    "options": {
      "A": "Antimicrobial agents with activity against C. difficile spores after contact with an infected patient.",
      "B": "A patient’s inability to produce antibody to toxin A is a significant predictor of recurrent disease.",
      "C": "Studies have suggested that gastric acid suppression (PPIs) may be protective.",
      "D": "Alcohol-based hand sanitizers are effective in removing spores."
    },
    "answer": "B",
    "explanation": {
      "correct": "Humoral immunity against Toxin A protects against clinical recurrence.",
      "A": "Incorrect; spores are highly resistant to standard antimicrobials.",
      "B": "Correct; low IgG against Toxin A predicts failure to clear the organism.",
      "C": "Incorrect; PPIs *increase* the risk of C. diff.",
      "D": "Incorrect; alcohol does not kill spores; soap and water mechanical washing is required."
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "B",
      "set_the_stage": "Clostridioides difficile causes pseudomembranous colitis primarily through the action of two exotoxins (Toxin A and Toxin B).",
      "highlight_excellence": "While Toxin B is highly cytotoxic, a robust host IgG antibody response to Toxin A is the primary determinant of whether a patient will suffer recurrent episodes. Patients who fail to mount this antibody response are at high risk for relapse.",
      "address_gaps": "Alcohol sanitizers (D) cannot penetrate the thick spore coat; handwashing with soap physically removes them. PPIs (C) eliminate the gastric acid barrier, facilitating spore survival and transit into the colon.",
      "review_learning_points": "Treatment guidelines (IDSA/SHEA) recommend oral Fidaxomicin or Vancomycin. Fecal microbiota transplant (FMT) is highly effective for multiply recurrent cases, as it restores the microbiome to outcompete C. diff.",
      "plan_for_improvement": "For C. diff: Wash hands with SOAP, stop the PPI, and use oral Vancomycin."
    },
    "guideline": "IDSA Guidelines strongly emphasize discontinuing unnecessary PPIs and practicing contact precautions (soap and water) to prevent transmission.",
    "takeaway": "Host immune failure is the main driver of the frustrating cycle of recurrent C. diff colitis.",
    "visualization": "Colonoscopy shows multiple, raised, yellowish-white plaques (pseudomembranes) scattered over erythematous colonic mucosa.",
    "_src_file": "colorectal.js"
  }
]
]);
