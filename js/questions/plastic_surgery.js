if (!window.QUESTIONS) window.QUESTIONS = [];
window.QUESTIONS.push(...[
[
  {
    "id": 262,
    "specialty": "Plastic Surgery",
    "topic": "Burns",
    "question": "True regarding full-thickness (3rd degree) burns?",
    "options": {
      "A": "Only involve the epidermis",
      "B": "Characterized by painful blistering",
      "C": "Blanch upon pressure",
      "D": "Are usually leathery and anesthetic"
    },
    "answer": "D",
    "verified_answer": "D",
    "set_the_stage": "Burn severity is determined by the depth of tissue damage and total body surface area (TBSA).",
    "highlight_excellence": "Option D is correct. Full-thickness (3rd degree) burns involve the entire dermis and adnexal structures, leaving the wound leathery, waxy, and notably anesthetic (painless) because nerves are destroyed.",
    "address_gaps": "A describes 1st degree burns. B and C describe 2nd degree (partial thickness) burns, which are painful and blistered.",
    "review_learning_points": "Full-thickness burns will not heal spontaneously (except by significant contraction) and always require skin grafting.",
    "plan": "Immediate management focuses on airway, fluid resuscitation (Parkland formula), and early escharotomy if the burn is circumferential.",
    "visualization": "The 'Eschar'—tough, non-elastic, burnt tissue that can cause compartment syndrome.",
    "_src_file": "plastic_surgery.js"
  },
  {
    "specialty": "Plastic Surgery",
    "topic": "Oncology",
    "question": "Which of the following variables best predicts prognosis for patients with localized cutaneous melanoma?",
    "options": {
      "A": "Breslow thickness.",
      "B": "Clark's level.",
      "C": "Ulceration.",
      "D": "Gender."
    },
    "answer": "A",
    "explanation": {
      "correct": "The prognosis for localized melanoma is best predicted by the Breslow thickness (measured in millimeters from the granular layer of the epidermis to the deepest part of the tumor).",
      "A": "Most important prognostic factor.",
      "B": "Less predictive than Breslow.",
      "C": "Predictive but secondary to thickness.",
      "D": "Minor prognostic factor."
    },
    "guideline": "AJCC Melanoma Staging",
    "takeaway": "Breslow thickness is the most critical prognostic factor for localized melanoma.",
    "id": 1205,
    "_src_file": "plastic_surgery.js"
  },
  {
    "specialty": "Plastic Surgery",
    "topic": "Skin Grafts",
    "question": "What is the correct sequence of phases for skin graft 'take'?",
    "options": {
      "A": "Inosculation -> Imbibition -> Revascularization",
      "B": "Imbibition -> Inosculation -> Revascularization",
      "C": "Revascularization -> Imbibition -> Inosculation",
      "D": "Inosculation -> Revascularization -> Imbibition"
    },
    "answer": "B",
    "explanation": {
      "correct": "Skin graft take occurs in three phases: 1. Plasma Imbibition (first 24-48h, passive absorption of nutrients); 2. Inosculation (days 2-5, alignment of donor and recipient capillaries); 3. Revascularization/Angiogenesis (day 5+, definitive blood flow established).",
      "A": "Wrong order.",
      "B": "Correct order: Imbibition, Inosculation, Revascularization.",
      "C": "Wrong order.",
      "D": "Wrong order."
    },
    "guideline": "Principles of Skin Grafting",
    "takeaway": "Graft Take: Imbibition (0-48h) -> Inosculation (48h-5d) -> Revascularization (>5d).",
    "sharp_metadata": {
      "S": "Patient following skin graft placement.",
      "H": "Excellence in post-op care prevents shear during the delicate inosculation phase.",
      "A": "Address the fact that 'imbibition' is the reason grafts look pale or dusky initially.",
      "R": "Standard physiologic process for free tissue transfer.",
      "P": "Apply a bolster dressing to ensure close contact and minimize hematoma/seroma."
    },
    "id": 1502,
    "_src_file": "plastic_surgery.js"
  },
  {
    "specialty": "Plastic Surgery",
    "topic": "Parkland Formula",
    "question": "A 70 kg man has 30% TBSA burns. Using the Parkland formula, what is the total volume of Lactated Ringer's required in the first 24 hours?",
    "options": {
      "A": "4.2 L",
      "B": "8.4 L",
      "C": "12.6 L",
      "D": "16.8 L"
    },
    "answer": "B",
    "explanation": {
      "correct": "Parkland Formula: 4 mL x Weight (kg) x % TBSA. So, 4 x 70 x 30 = 8,400 mL or 8.4 L. Half is given in the first 8 hours, and the other half over the remaining 16 hours.",
      "A": "Corresponds to 2 mL/kg/% (Modified Brooke).",
      "B": "Correct Parkland calculation (4 mL/kg/%).",
      "C": "Too high.",
      "D": "Too high."
    },
    "guideline": "American Burn Association Fluid Resuscitation Guidelines",
    "takeaway": "Parkland = 4mL x kg x %TBSA. Half in first 8 hours.",
    "sharp_metadata": {
      "S": "70kg male with 30% TBSA burns.",
      "H": "Accurate fluid resuscitation prevents 'fluid creep' and burn shock.",
      "A": "Identify that the time starts from the MOMENT of injury, not arrival.",
      "R": "ABA consensus guidelines for major burns.",
      "P": "Titrate fluids to a goal urine output of 0.5 - 1.0 mL/kg/hr."
    },
    "id": 1503,
    "_src_file": "plastic_surgery.js"
  },
  {
    "specialty": "Plastic Surgery",
    "topic": "Z-Plasty",
    "question": "In a standard Z-plasty with 60-degree limb angles, what is the theoretical percentage of length increase achieved along the central limb?",
    "options": {
      "A": "25%",
      "B": "50%",
      "C": "75%",
      "D": "100%"
    },
    "answer": "C",
    "explanation": {
      "correct": "A 60-degree Z-plasty provides approximately 75% lengthening of the central limb. 30 degrees gives 25%, and 45 degrees gives 50%. 60 degrees is the 'sweet spot' for maximum length without excessive tension.",
      "A": "30-degree angles.",
      "B": "45-degree angles.",
      "C": "60-degree angles.",
      "D": "Requires larger/multiple Z-plasties."
    },
    "guideline": "Principles of Scar Revision",
    "takeaway": "60-degree Z-plasty = 75% lengthening.",
    "sharp_metadata": {
      "S": "Contracted scar limiting joint mobility.",
      "H": "Excellence in Z-plasty design redirects tension and adds length.",
      "A": "Address the tradeoff between limb angle and tension (higher angle = more length but harder to close).",
      "R": "Mathematical geometric principles of local flaps.",
      "P": "Ensure limbs are of equal length to avoid dog-ears."
    },
    "id": 1504,
    "_src_file": "plastic_surgery.js"
  },
  {
    "specialty": "Plastic Surgery",
    "topic": "Hand Infections",
    "question": "A patient presents with a swollen 'sausage digit,' pain on passive extension, and tenderness along the flexor sheath. Which of the following is NOT one of Kanavel's cardinal signs for flexor tenosynovitis?",
    "options": {
      "A": "Digit held in slight flexion",
      "B": "Symmetric (fusiform) swelling",
      "C": "Pain on active flexion",
      "D": "Tenderness over the flexor sheath"
    },
    "answer": "C",
    "explanation": {
      "correct": "Kanavel's Signs are: 1. Digit held in slight flexion; 2. Fusiform swelling; 3. Tenderness over the flexor sheath; 4. Pain on PASSIVE extension. Pain on active flexion is common but not one of the four cardinal signs.",
      "A": "One of Kanavel's signs.",
      "B": "One of Kanavel's signs.",
      "C": "Not a Kanavel sign (should be passive extension).",
      "D": "One of Kanavel's signs."
    },
    "guideline": "Management of Hand Infections",
    "takeaway": "Kanavel's Signs: Flexed posture, Fusiform swelling, Sheath tenderness, Passive extension pain.",
    "sharp_metadata": {
      "S": "Patient with possible deep space infection of the hand.",
      "H": "Rapid recognition of flexor tenosynovitis prevents tendon necrosis.",
      "A": "Differentiate between superficial cellulitis and deep sheath infection.",
      "R": "Classic surgical signs described by Allen Kanavel.",
      "P": "Urgent surgical drainage and IV antibiotics."
    },
    "id": 1505,
    "_src_file": "plastic_surgery.js"
  },
  {
    "specialty": "Plastic Surgery",
    "topic": "Melanoma Margins",
    "question": "For a melanoma with a Breslow thickness of 1.5 mm, what is the recommended wide local excision (WLE) margin?",
    "options": {
      "A": "0.5 cm",
      "B": "1.0 cm",
      "C": "2.0 cm",
      "D": "3.0 cm"
    },
    "answer": "C",
    "explanation": {
      "correct": "NCCN Margin Guidelines: In-situ = 0.5-1 cm; <1 mm thickness = 1 cm; 1-2 mm thickness = 1-2 cm; >2 mm thickness = 2 cm.",
      "A": "For in-situ.",
      "B": "For <1 mm thickness.",
      "C": "Standard for 1-2 mm thickness.",
      "D": "Excessive."
    },
    "guideline": "NCCN Guidelines for Melanoma",
    "takeaway": "Melanoma WLE Margins: <1mm = 1cm, 1-2mm = 1-2cm, >2mm = 2cm.",
    "sharp_metadata": {
      "S": "1.5 mm Breslow melanoma on the trunk.",
      "H": "Excellence in margin control balances recurrence risk with functional closure.",
      "A": "Address the transition from 1cm to 2cm margins based on the 1mm threshold.",
      "R": "NCCN clinical practice guidelines.",
      "P": "Perform sentinel lymph node biopsy (SLNB) for tumors >1mm or those with high-risk features."
    },
    "id": 1506,
    "_src_file": "plastic_surgery.js"
  },
  {
    "specialty": "Plastic Surgery",
    "topic": "Inhalation Injury",
    "question": "What is the most definitive diagnostic tool for identifying inhalation injury in a burn patient?",
    "options": {
      "A": "Carboxyhemoglobin level",
      "B": "Chest X-ray",
      "C": "Fiberoptic bronchoscopy",
      "D": "Arterial blood gas"
    },
    "answer": "C",
    "explanation": {
      "correct": "Fiberoptic bronchoscopy is the gold standard for diagnosing inhalation injury. It allows direct visualization of soot, mucosal edema, erythema, and ulceration in the airway.",
      "A": "Indicates CO poisoning, not necessarily airway injury.",
      "B": "Often normal in the first 24-48 hours.",
      "C": "Definitive visualization.",
      "D": "Nonspecific."
    },
    "guideline": "Management of Inhalation Injury",
    "takeaway": "Bronchoscopy is the gold standard for diagnosing inhalation injury.",
    "sharp_metadata": {
      "S": "Burn patient with soot in the nares and hoarseness.",
      "H": "Early diagnosis and airway protection prevents catastrophic edema-induced obstruction.",
      "A": "Recognize that clinical signs (singed nose hairs) are sensitive but not specific/definitive.",
      "R": "ABA criteria for inhalation injury.",
      "P": "Low threshold for early intubation if bronchoscopy shows significant edema."
    },
    "id": 1507,
    "_src_file": "plastic_surgery.js"
  },
  {
    "specialty": "Plastic Surgery",
    "topic": "Dupuytren's Contracture",
    "question": "Which digit is most commonly affected in Dupuytren's contracture?",
    "options": {
      "A": "Thumb",
      "B": "Index finger",
      "C": "Middle finger",
      "D": "Ring finger"
    },
    "answer": "D",
    "explanation": {
      "correct": "Dupuytren's contracture most commonly affects the ring finger, followed by the small finger. It involves nodular thickening and contraction of the palmar fascia.",
      "A": "Rare.",
      "B": "Uncommon.",
      "C": "Uncommon.",
      "D": "Most common (Ring > Small > Middle)."
    },
    "guideline": "Management of Dupuytren's Disease",
    "takeaway": "Dupuytren's: Ring finger is most commonly involved.",
    "sharp_metadata": {
      "S": "Older male with palpable cords in the palm and inability to flatten the hand.",
      "H": "Identifying the pathology helps differentiate from trigger finger or stenosing tenosynovitis.",
      "A": "Address the 'Hueston Table Top Test'—if they can't flatten the palm, it's positive.",
      "R": "Association with smoking, diabetes, and Northern European descent (Viking disease).",
      "P": "Consider collagenase injection (Xiaflex) or surgical fasciectomy."
    },
    "id": 1508,
    "_src_file": "plastic_surgery.js"
  },
  {
    "specialty": "Plastic Surgery",
    "topic": "Flap Classification",
    "question": "According to the Mathes-Nahai classification, a Type II muscle flap is characterized by:",
    "options": {
      "A": "One single vascular pedicle",
      "B": "One dominant pedicle and several minor pedicles",
      "C": "Two dominant pedicles",
      "D": "Segmental vascular pedicles"
    },
    "answer": "B",
    "explanation": {
      "correct": "Mathes-Nahai Classification: Type I: One pedicle (Gastrocnemius); Type II: One dominant + minor pedicles (Gracilis); Type III: Two dominant (Gluteus maximus); Type IV: Segmental (Sartorius); Type V: One dominant + segmental (Latissimus dorsi).",
      "A": "Type I.",
      "B": "Type II.",
      "C": "Type III.",
      "D": "Type IV."
    },
    "guideline": "Mathes and Nahai Flap Classification",
    "takeaway": "Mathes-Nahai II: 1 Dominant + Minor pedicles (e.g., Gracilis).",
    "sharp_metadata": {
      "S": "Planning a muscle flap for lower extremity reconstruction.",
      "H": "Excellence in flap selection ensures a robust blood supply.",
      "A": "Address the fact that for Type II flaps, the minor pedicles must often be sacrificed.",
      "R": "Standard surgical classification for reconstructive flaps.",
      "P": "Identify the dominant pedicle's entry point before dissection."
    },
    "id": 1509,
    "_src_file": "plastic_surgery.js"
  },
  {
    "specialty": "Plastic Surgery",
    "topic": "SCC vs BCC",
    "question": "Which characteristic is more typical of Squamous Cell Carcinoma (SCC) compared to Basal Cell Carcinoma (BCC)?",
    "options": {
      "A": "Pearly borders and telangiectasia",
      "B": "Metastatic potential and association with chronic ulcers (Marjolin's)",
      "C": "Slow growth and rare metastasis",
      "D": "Originates from the basal layer of the epidermis"
    },
    "answer": "B",
    "explanation": {
      "correct": "SCC has a higher metastatic potential (especially when occurring in scars/ulcers, known as Marjolin's ulcer) compared to BCC, which almost never metastasizes. BCC is the most common and is characterized by pearly borders.",
      "A": "Typical of BCC.",
      "B": "Typical of SCC.",
      "C": "Typical of BCC.",
      "D": "Typical of BCC."
    },
    "guideline": "Principles of Skin Oncology",
    "takeaway": "SCC has higher metastatic potential than BCC, especially in chronic wounds.",
    "sharp_metadata": {
      "S": "Patient with a non-healing ulcer in an old burn scar.",
      "H": "Recognition of Marjolin's ulcer (SCC) mandates aggressive biopsy and staging.",
      "A": "Address the risk of SCC in immunosuppressed or chronically inflamed tissue.",
      "R": "Comparative biology of non-melanoma skin cancers.",
      "P": "Perform a punch biopsy of the ulcer margin."
    },
    "id": 1510,
    "_src_file": "plastic_surgery.js"
  },
  {
    "specialty": "Plastic Surgery",
    "topic": "Z-Plasty Alignment",
    "question": "When designing a Z-plasty, how should the central limb be ideally oriented relative to the scar/contracture?",
    "options": {
      "A": "Perpendicular to the scar",
      "B": "Parallel and directly on the scar",
      "C": "At a 45-degree angle to the scar",
      "D": "Circularly around the scar"
    },
    "answer": "B",
    "explanation": {
      "correct": "The central limb of the Z-plasty should be placed directly on the line of the scar or contracture that needs to be lengthened. The flaps are then transposed, which rotates the central limb by 90 degrees.",
      "A": "Wrong orientation.",
      "B": "Parallel to the contracture line.",
      "C": "Flap limbs are at angles, but central limb is parallel.",
      "D": "Incorrect."
    },
    "guideline": "Z-Plasty Technique",
    "takeaway": "Z-plasty central limb lies parallel to the line of contracture.",
    "sharp_metadata": {
      "S": "Planning a local flap for a neck contracture.",
      "H": "Optimal orientation ensures maximum functional gain.",
      "A": "Address the transposition mechanics where the scar is rotated into the Relaxed Skin Tension Lines (RSTLs).",
      "R": "Basic geometric flap principles.",
      "P": "Mark the Z carefully with equal limb lengths before making any incisions."
    },
    "id": 1511,
    "_src_file": "plastic_surgery.js"
  },
  {
    "specialty": "Plastic Surgery",
    "topic": "Flexor Tendon Zones",
    "question": "In the hand, 'No Man's Land' refers to which flexor tendon zone, traditionally known for poor surgical outcomes due to adhesions?",
    "options": {
      "A": "Zone I",
      "B": "Zone II",
      "C": "Zone III",
      "D": "Zone IV"
    },
    "answer": "B",
    "explanation": {
      "correct": "Zone II (from the A1 pulley to the FDS insertion) was historically called 'No Man's Land' because the FDS and FDP tendons are enclosed in a tight fibro-osseous sheath, making repair difficult and prone to adhesions.",
      "A": "Distal to FDS insertion.",
      "B": "No Man's Land (Fibro-osseous sheath).",
      "C": "Lumbrical origin (palm).",
      "D": "Carpal tunnel."
    },
    "guideline": "Flexor Tendon Injury Management",
    "takeaway": "Zone II is 'No Man's Land' for flexor tendon repairs.",
    "sharp_metadata": {
      "S": "Laceration over the proximal phalanx with loss of digit flexion.",
      "H": "Excellence in Zone II repair requires early controlled motion to prevent adhesions.",
      "A": "Address the anatomical complexity of two tendons in one tight sheath.",
      "R": "Verdan's classification of flexor tendon zones.",
      "P": "Repair both FDS and FDP if possible and start Kleinert or Duran rehab protocols."
    },
    "id": 1512,
    "_src_file": "plastic_surgery.js"
  },
  {
    "specialty": "Plastic Surgery",
    "topic": "Cleft Lip Repair",
    "question": "The 'Rule of Tens' is often used to determine the timing of cleft lip repair. Which of the following is NOT part of this rule?",
    "options": {
      "A": "10 weeks of age",
      "B": "10 lbs in weight",
      "C": "10 g/dL of hemoglobin",
      "D": "10 months of age"
    },
    "answer": "D",
    "explanation": {
      "correct": "The Rule of Tens for cleft lip repair: 10 weeks of age, 10 lbs weight, 10 g/dL Hemoglobin. This ensures the infant is robust enough for general anesthesia and surgery.",
      "A": "Part of the rule.",
      "B": "Part of the rule.",
      "C": "Part of the rule.",
      "D": "Not part (repair is much earlier than 10 months)."
    },
    "guideline": "Management of Craniofacial Clefts",
    "takeaway": "Rule of Tens: 10 weeks, 10 lbs, 10g Hb.",
    "sharp_metadata": {
      "S": "Infant with isolated unilateral cleft lip.",
      "H": "Optimal timing balances anesthetic safety with early social/functional benefit.",
      "A": "Identify the Rule of Tens as a safety threshold, not an absolute requirement.",
      "R": "Traditional surgical standard.",
      "P": "Perform repair (e.g., Millard rotation-advancement) once the rule is met."
    },
    "id": 1513,
    "_src_file": "plastic_surgery.js"
  },
  {
    "specialty": "Plastic Surgery",
    "topic": "Breast Reconstruction",
    "question": "Which flap is a 'muscle-sparing' alternative to the traditional TRAM flap for breast reconstruction, relying only on the deep inferior epigastric perforators?",
    "options": {
      "A": "VRAM",
      "B": "DIEP flap",
      "C": "Latissimus dorsi flap",
      "D": "S-GAP flap"
    },
    "answer": "B",
    "explanation": {
      "correct": "The DIEP (Deep Inferior Epigastric Perforator) flap is a muscle-sparing free flap that uses the same skin and fat as a TRAM flap but leaves the rectus abdominis muscle intact, reducing abdominal wall morbidity.",
      "A": "Includes the whole muscle.",
      "B": "Muscle-sparing perforator flap.",
      "C": "Back muscle flap.",
      "D": "Gluteal perforator flap."
    },
    "guideline": "Options for Autologous Breast Reconstruction",
    "takeaway": "DIEP flap spares the rectus muscle, unlike the TRAM flap.",
    "sharp_metadata": {
      "S": "Patient desiring autologous breast reconstruction after mastectomy.",
      "H": "DIEP flap provides excellent aesthetic results with minimal donor site morbidity.",
      "A": "Address the technical challenge of microvascular anastomosis for free flaps.",
      "R": "ASPS guidelines on breast reconstruction.",
      "P": "Assess abdominal donor site and perforator locations with CT angiography pre-op."
    },
    "id": 1514,
    "_src_file": "plastic_surgery.js"
  },
  {
    "specialty": "Plastic Surgery",
    "topic": "Facial Fractures",
    "question": "A 'Tripod Fracture' (Zygomaticomaxillary Complex fracture) involves disruptions at how many specific suture lines?",
    "options": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "5"
    },
    "answer": "B",
    "explanation": {
      "correct": "A 'Tripod' fracture involves three points: 1. Zygomaticofrontal suture; 2. Zygomaticotemporal suture (arch); 3. Infraorbital rim (Zygomaticomaxillary suture).",
      "A": "Too few.",
      "B": "Classic three-point fracture.",
      "C": "Le Fort fractures involve more.",
      "D": "Too many."
    },
    "guideline": "Management of Facial Trauma",
    "takeaway": "Tripod fracture = Zygomaticofrontal + Zygomaticotemporal + Infraorbital rim.",
    "sharp_metadata": {
      "S": "Patient with facial trauma, trismus, and flattened cheekbone.",
      "H": "Early CT visualization of the tripod points ensures correct reduction.",
      "A": "Identify 'trismus' as a sign of coronoid process impingement by the depressed zygoma.",
      "R": "ZMC fracture anatomy.",
      "P": "Open reduction and internal fixation (ORIF) for displaced fractures."
    },
    "id": 1515,
    "_src_file": "plastic_surgery.js"
  },
  {
    "specialty": "Plastic Surgery",
    "topic": "Skin Grafts",
    "question": "Which of the following is an advantage of a Full-Thickness Skin Graft (FTSG) compared to a Split-Thickness Skin Graft (STSG)?",
    "options": {
      "A": "Higher survival rate on poor beds",
      "B": "Lower risk of secondary contraction",
      "C": "Donor site heals by re-epithelialization",
      "D": "Can cover larger areas"
    },
    "answer": "B",
    "explanation": {
      "correct": "FTSGs contain the entire dermis and are much more resistant to secondary contraction (shrinking after healing) compared to STSGs. However, they have a higher metabolic demand and are less likely to 'take' on compromised beds.",
      "A": "STSG survives better.",
      "B": "FTSG has less secondary contraction.",
      "C": "STSG donor site re-epithelializes; FTSG donor site must be closed primarily.",
      "D": "STSG can be meshed to cover huge areas."
    },
    "guideline": "Selection of Skin Graft Type",
    "takeaway": "FTSG = Less secondary contraction; STSG = Better 'take' and more primary contraction.",
    "sharp_metadata": {
      "S": "Reconstruction of a defect on the lower eyelid.",
      "H": "Using FTSG prevents ectropion (eyelid pulling down) due to its resistance to contraction.",
      "A": "Address the tradeoff between 'take' and 'contraction' (More dermis = less contraction but harder take).",
      "R": "Physiology of wound healing and skin grafts.",
      "P": "Match the skin color and texture of the donor site to the recipient site."
    },
    "id": 1516,
    "_src_file": "plastic_surgery.js"
  },
  {
    "specialty": "Plastic Surgery",
    "topic": "Basal Cell Ca Treatment",
    "question": "For a 'high-risk' Basal Cell Carcinoma on the nose or eyelid, what is the treatment of choice to ensure the highest cure rate while sparing tissue?",
    "options": {
      "A": "Wide Local Excision with 5mm margins",
      "B": "Curettage and Electrodesiccation",
      "C": "Mohs Micrographic Surgery",
      "D": "Radiation Therapy"
    },
    "answer": "C",
    "explanation": {
      "correct": "Mohs surgery is indicated for high-risk areas (the 'H-zone' of the face) and recurrent lesions. It allows for 100% margin evaluation while preserving as much healthy tissue as possible.",
      "A": "Standard for low-risk areas.",
      "B": "For small, very low-risk lesions on trunk/limbs.",
      "C": "Gold standard for high-risk facial BCC.",
      "D": "For patients who cannot tolerate surgery."
    },
    "guideline": "NCCN Guidelines for Basal Cell Carcinoma",
    "takeaway": "Mohs surgery is the treatment of choice for high-risk facial BCC.",
    "sharp_metadata": {
      "S": "Patient with a recurrent BCC on the nasal tip.",
      "H": "Mohs provides the lowest recurrence rate (<1-2%) for difficult facial sites.",
      "A": "Identify the 'H-zone' (nose, eyes, ears) as high-risk regardless of tumor size.",
      "R": "Criteria for Mohs micrographic surgery.",
      "P": "Refer to a Mohs surgeon for staged resection and intraoperative pathology."
    },
    "id": 1517,
    "_src_file": "plastic_surgery.js"
  },
  {
    "specialty": "Plastic Surgery",
    "topic": "Microvascular Monitoring",
    "question": "What is the most sensitive early sign of VENOUS congestion in a free flap?",
    "options": {
      "A": "Decreased temperature",
      "B": "Pale, cool skin",
      "C": "Rapid capillary refill and dusky/purple color",
      "D": "Absence of Doppler signal"
    },
    "answer": "C",
    "explanation": {
      "correct": "Venous congestion causes blood to pool in the flap, leading to a dusky/purple hue and a paradoxically 'rapid' capillary refill (<1 sec). The flap may also become tense or swollen.",
      "A": "Occurs in both arterial and venous failure.",
      "B": "Typical of arterial insufficiency.",
      "C": "Classic venous congestion triad (Purple, Tense, Rapid refill).",
      "D": "Late sign."
    },
    "guideline": "Monitoring of Microvascular Free Flaps",
    "takeaway": "Venous Congestion: Purple color and rapid capillary refill.",
    "sharp_metadata": {
      "S": "Post-op free flap monitoring.",
      "H": "Rapid return to theater for venous congestion can save the flap.",
      "A": "Address the difference between arterial 'clot' (pale/no refill) and venous 'clot' (purple/fast refill).",
      "R": "Standard clinical flap monitoring parameters.",
      "P": "Check the flap every hour for the first 24-48 hours."
    },
    "id": 1518,
    "_src_file": "plastic_surgery.js"
  },
  {
    "specialty": "Plastic Surgery",
    "topic": "Hand Fractures",
    "question": "A 'Boxer's Fracture' typically involves which bone?",
    "options": {
      "A": "Distal radius",
      "B": "Scaphoid",
      "C": "5th Metacarpal neck",
      "D": "Proximal phalanx of the thumb"
    },
    "answer": "C",
    "explanation": {
      "correct": "A Boxer's fracture is a fracture of the 5th metacarpal neck, usually caused by striking a hard object with a closed fist.",
      "A": "Colles fracture.",
      "B": "Scaphoid fracture.",
      "C": "5th metacarpal neck fracture.",
      "D": "Bennett fracture (base of 1st metacarpal)."
    },
    "guideline": "Management of Metacarpal Fractures",
    "takeaway": "Boxer's Fracture = 5th metacarpal neck.",
    "sharp_metadata": {
      "S": "Young male with hand pain and swelling after an altercation.",
      "H": "Identifying the 'dropped knuckle' sign clinically.",
      "A": "Address the acceptable angulation (up to 40-70 degrees in the 5th metacarpal due to mobility).",
      "R": "Common orthopedic hand injury.",
      "P": "Ulnar gutter splint or surgery if angulation/rotation is excessive."
    },
    "id": 1519,
    "_src_file": "plastic_surgery.js"
  },
  {
    "specialty": "Plastic Surgery",
    "topic": "Melanoma SLNB",
    "question": "Sentinel Lymph Node Biopsy (SLNB) is generally indicated for melanoma of what Breslow thickness?",
    "options": {
      "A": "Only for lesions >4 mm",
      "B": "For all lesions, including in-situ",
      "C": "For lesions >= 0.8 mm (or <0.8 mm with ulceration)",
      "D": "Only when nodes are clinically palpable"
    },
    "answer": "C",
    "explanation": {
      "correct": "Current guidelines recommend SLNB for T1b melanomas (0.8-1.0 mm thick OR <0.8 mm with ulceration) and all melanomas >1.0 mm (T2-T4).",
      "A": "Indicated much earlier.",
      "B": "In-situ doesn't need SLNB.",
      "C": "Standard threshold (T1b and above).",
      "D": "If nodes are palpable, it's already Stage III; go straight to dissection or FNA."
    },
    "guideline": "ASCO-SSO Joint Practice Guideline",
    "takeaway": "SLNB is indicated for melanoma >=0.8mm or with high-risk features.",
    "sharp_metadata": {
      "S": "Patient with 1.2 mm Breslow thickness melanoma.",
      "H": "Accurate staging with SLNB guides adjuvant therapy decisions.",
      "A": "Address the role of SLNB in 'staging' rather than 'curative' intent.",
      "R": "Current melanoma management standards.",
      "P": "Perform SLNB at the same time as the wide local excision."
    },
    "id": 1520,
    "_src_file": "plastic_surgery.js"
  },
  {
    "specialty": "Plastic Surgery",
    "topic": "Scar Maturation",
    "question": "Hypertrophic scars differ from keloids in that hypertrophic scars:",
    "options": {
      "A": "Extend beyond the original wound boundaries",
      "B": "Stay within the original wound boundaries",
      "C": "Never regress spontaneously",
      "D": "Are most common on the earlobes and chest"
    },
    "answer": "B",
    "explanation": {
      "correct": "Hypertrophic scars remain within the boundaries of the original incision/wound and often regress over time. Keloids extend beyond the original borders and do not regress.",
      "A": "Definition of a keloid.",
      "B": "Definition of a hypertrophic scar.",
      "C": "Keloids don't regress; hypertrophic scars often do.",
      "D": "Keloids are more common at these sites."
    },
    "guideline": "Management of Pathologic Scarring",
    "takeaway": "Hypertrophic scars stay within the wound; Keloids grow beyond it.",
    "sharp_metadata": {
      "S": "Patient worried about a raised scar 6 months after surgery.",
      "H": "Differentiating between hypertrophic and keloid determines the risk of recurrence after revision.",
      "A": "Address the timing—hypertrophic scars usually appear within weeks; keloids can appear months later.",
      "R": "Surgical pathology of scarring.",
      "P": "Treat with silicone sheeting, pressure garments, or intralesional steroids."
    },
    "id": 1521,
    "_src_file": "plastic_surgery.js"
  },
  {
    "specialty": "Plastic Surgery",
    "topic": "Tissue Expansion",
    "question": "What is the primary physiologic change in the skin during tissue expansion?",
    "options": {
      "A": "Thinning of the epidermis",
      "B": "Thickening of the dermis",
      "C": "Increased mitotic activity in the epidermis",
      "D": "Decreased vascularity"
    },
    "answer": "C",
    "explanation": {
      "correct": "Tissue expansion causes the skin to grow. This is achieved by increased mitotic activity in the epidermis. Interestingly, the dermis and subcutaneous fat actually THIN during expansion.",
      "A": "Epidermis actually thickens or stays same due to mitosis.",
      "B": "Dermis thins significantly.",
      "C": "Primary mechanism of 'growth'.",
      "D": "Vascularity actually increases (angiogenesis)."
    },
    "guideline": "Principles of Tissue Expansion",
    "takeaway": "Tissue expansion induces epidermal mitosis and dermal thinning.",
    "sharp_metadata": {
      "S": "Planning scalp reconstruction using tissue expanders.",
      "H": "Slow, serial expansion creates 'extra' skin of matching color/texture.",
      "A": "Address the temporary thinning of the dermis as a risk for exposure/extrusion.",
      "R": "Biology of mechanotransduction in skin.",
      "P": "Inflate the expander weekly until the desired skin surface area is reached."
    },
    "id": 1522,
    "_src_file": "plastic_surgery.js"
  },
  {
    "specialty": "Plastic Surgery",
    "topic": "Hand Surgery: Bennett Fracture",
    "question": "A 'Bennett Fracture' is best described as:",
    "options": {
      "A": "A transverse fracture of the distal radius",
      "B": "An intra-articular fracture-dislocation at the base of the first metacarpal",
      "C": "A comminuted fracture of the proximal phalanx",
      "D": "A rupture of the ulnar collateral ligament of the thumb"
    },
    "answer": "B",
    "explanation": {
      "correct": "A Bennett fracture is an intra-articular fracture at the base of the thumb (1st metacarpal). The small volar fragment stays attached to the anterior oblique ligament, while the rest of the metacarpal is pulled proximally and radially by the Abductor Pollicis Longus (APL).",
      "A": "Colles/Smith.",
      "B": "Base of 1st MC fracture-dislocation.",
      "C": "Nonspecific.",
      "D": "Gamekeeper's/Skier's thumb."
    },
    "guideline": "Thumb Fractures and Dislocations",
    "takeaway": "Bennett Fracture = Intra-articular base of 1st metacarpal.",
    "sharp_metadata": {
      "S": "Patient with thumb pain after falling onto an outstretched hand.",
      "H": "Understanding the deforming force (APL) explains why these are unstable.",
      "A": "Identify the 'volar fragment' as the key to the diagnosis.",
      "R": "Classic hand injury pattern.",
      "P": "Requires surgical stabilization (Closed reduction and percutaneous pinning or ORIF)."
    },
    "id": 1523,
    "_src_file": "plastic_surgery.js"
  },
  {
    "specialty": "Plastic Surgery",
    "topic": "Radiation and Wound Healing",
    "question": "Radiation therapy impairs wound healing primarily by:",
    "options": {
      "A": "Increasing collagen production",
      "B": "Inducing endarteritis obliterans and tissue hypoxia",
      "C": "Promoting rapid re-epithelialization",
      "D": "Stimulating fibroblast activity"
    },
    "answer": "B",
    "explanation": {
      "correct": "Radiation causes progressive endarteritis obliterans (narrowing of small blood vessels), leading to chronic ischemia, fibrosis, and hypocellularity. This makes the tissue fragile and prone to breakdown.",
      "A": "Collagen becomes disorganized/fibrotic.",
      "B": "Endarteritis and hypoxia are the hallmarks.",
      "C": "Impairs re-epithelialization.",
      "D": "Decreases/alters fibroblast function."
    },
    "guideline": "Management of the Radiated Wound",
    "takeaway": "Radiation causes endarteritis obliterans and chronic tissue hypoxia.",
    "sharp_metadata": {
      "S": "Patient with a non-healing wound in a previously radiated field.",
      "H": "Surgical planning in radiated tissue requires bringing in well-vascularized, non-radiated tissue (e.g., a distant flap).",
      "A": "Identify 'delayed' effects of radiation as a lifelong risk for wound complications.",
      "R": "Radiation biology in surgery.",
      "P": "Avoid local flaps from the radiated field; use free flaps or distant regional flaps."
    },
    "id": 1524,
    "_src_file": "plastic_surgery.js"
  },
  {
    "specialty": "Plastic Surgery",
    "topic": "Tendon Healing",
    "question": "During which phase of tendon healing is the repair at its WEAKEST, necessitating careful movement?",
    "options": {
      "A": "Inflammatory phase (Days 1-5)",
      "B": "Fibroblastic/Proliferative phase (Days 5-21)",
      "C": "Remodeling phase (Months)",
      "D": "Immediately after surgery (Day 0)"
    },
    "answer": "B",
    "explanation": {
      "correct": "Tendons are weakest between days 5 and 21 (the proliferative phase). During this time, the original suture hold is weakening, but the new collagen has not yet gained significant structural strength.",
      "A": "Weak, but held by sutures.",
      "B": "Nadiral strength around day 7-10.",
      "C": "Strength is increasing.",
      "D": "Held by full suture strength."
    },
    "guideline": "Physiology of Tendon Repair",
    "takeaway": "Tendons reach their minimum strength around 7-10 days post-repair.",
    "sharp_metadata": {
      "S": "Patient 1 week out from a flexor tendon repair.",
      "H": "Precise adherence to hand therapy protocols prevents rupture during the 'weakest' phase.",
      "A": "Address the tradeoff between immobilization (prevents rupture but causes adhesions) and mobilization (prevents adhesions but risks rupture).",
      "R": "Tendon healing kinetics.",
      "P": "Continue protected passive motion; avoid any active resistance."
    },
    "id": 1525,
    "_src_file": "plastic_surgery.js"
  },
  {
    "specialty": "Plastic Surgery",
    "topic": "Ear Reconstruction",
    "question": "What is the preferred material for the structural framework in total ear reconstruction (microtia)?",
    "options": {
      "A": "Silicone implant",
      "B": "Autologous rib cartilage",
      "C": "Porous polyethylene (Medpor)",
      "D": "Cadaveric bone"
    },
    "answer": "B",
    "explanation": {
      "correct": "Autologous rib cartilage (usually from ribs 6, 7, and 8) is considered the gold standard for ear reconstruction (Brent or Nagata techniques). It is living tissue and has a lower risk of infection/extrusion than synthetic materials.",
      "A": "High extrusion risk.",
      "B": "Gold standard (Autologous).",
      "C": "Popular alternative, but carries risk of exposure.",
      "D": "Not used."
    },
    "guideline": "Management of Microtia",
    "takeaway": "Autologous costal cartilage is the preferred framework for ear reconstruction.",
    "sharp_metadata": {
      "S": "6-year-old child with Grade III microtia.",
      "H": "Excellence in ear carving creates a symmetric, natural-looking result.",
      "A": "Address the timing—reconstruction is usually delayed until age 6-9 to ensure adequate rib cartilage volume.",
      "R": "Standard of care for major ear defects.",
      "P": "Multi-stage procedure: Framework, Lobule transposition, Elevation."
    },
    "id": 1526,
    "_src_file": "plastic_surgery.js"
  },
  {
    "specialty": "Plastic Surgery",
    "topic": "Wound Contraction",
    "question": "Which cell type is primarily responsible for wound contraction in secondary intention healing?",
    "options": {
      "A": "Macrophage",
      "B": "Endothelial cell",
      "C": "Myofibroblast",
      "D": "Neutrophil"
    },
    "answer": "C",
    "explanation": {
      "correct": "Myofibroblasts are specialized fibroblasts that contain alpha-smooth muscle actin, allowing them to contract and pull the wound edges together.",
      "A": "Orchestrates healing.",
      "B": "Forms new vessels.",
      "C": "Primary cell for contraction.",
      "D": "Initial inflammatory cell."
    },
    "guideline": "Biology of Wound Healing",
    "takeaway": "Myofibroblasts drive wound contraction.",
    "sharp_metadata": {
      "S": "Large open wound being allowed to heal by secondary intention.",
      "H": "Understanding the power of contraction helps predict which wounds will close vs. those needing a graft.",
      "A": "Address the risk of functional contracture if a wound closes by contraction over a joint.",
      "R": "Cellular mechanisms of healing.",
      "P": "Splint joints in extension if they are crossed by a contracting wound."
    },
    "id": 1527,
    "_src_file": "plastic_surgery.js"
  },
  {
    "specialty": "Plastic Surgery",
    "topic": "Reconstructive Ladder",
    "question": "According to the 'Reconstructive Ladder,' what is the next step if primary closure is not possible and the wound cannot heal by secondary intention?",
    "options": {
      "A": "Skin Graft",
      "B": "Local Flap",
      "C": "Regional Flap",
      "D": "Free Flap"
    },
    "answer": "A",
    "explanation": {
      "correct": "The Reconstructive Ladder (bottom to top): 1. Primary closure; 2. Secondary intention; 3. Skin graft; 4. Local flap; 5. Regional flap; 6. Free flap.",
      "A": "Next simplest step after closure fails.",
      "B": "Follows skin grafting.",
      "C": "More complex than local flaps.",
      "D": "Top of the ladder (highest complexity)."
    },
    "guideline": "Principles of Reconstructive Surgery",
    "takeaway": "Ladder: Primary -> Secondary -> Graft -> Local Flap -> Regional -> Free.",
    "sharp_metadata": {
      "S": "10cm defect on the pretibial area with exposed muscle but intact periosteum.",
      "H": "Following the ladder ensures the 'simplest effective' solution is chosen.",
      "A": "Identify the 'Reconstructive Elevator'—skipping steps if a more complex solution is clearly superior.",
      "R": "Traditional surgical teaching.",
      "P": "Assess if the 'bed' can support a graft (needs blood supply, no exposed bone/tendon without cover)."
    },
    "id": 1528,
    "_src_file": "plastic_surgery.js"
  },
  {
    "specialty": "Plastic Surgery",
    "topic": "Local Anesthetic with Epi",
    "question": "What is the primary benefit of adding Epinephrine (1:100,000 or 1:200,000) to local anesthetics during plastic surgery procedures?",
    "options": {
      "A": "To increase the pH and reduce injection pain",
      "B": "To prolong the duration of action and reduce systemic absorption",
      "C": "To provide sedation",
      "D": "To prevent allergic reactions"
    },
    "answer": "B",
    "explanation": {
      "correct": "Epinephrine causes vasoconstriction, which slows the removal of the anesthetic from the site (prolonging effect), reduces peak blood levels (reducing toxicity), and provides local hemostasis.",
      "A": "Sodium Bicarbonate does this.",
      "B": "Primary benefit: duration and safety.",
      "C": "No sedative effect.",
      "D": "No effect on allergies."
    },
    "guideline": "Use of Adjuvants in Local Anesthesia",
    "takeaway": "Epinephrine prolongs local anesthesia and reduces systemic toxicity.",
    "sharp_metadata": {
      "S": "Excision of a large lipoma under local anesthesia.",
      "H": "Using Epi allows for larger doses of lidocaine (up to 7mg/kg vs 4.5mg/kg without).",
      "A": "Address the 'myth' of avoiding Epi in 'fingers, toes, and nose'—modern evidence shows it is generally safe if used appropriately.",
      "R": "Pharmacology of local anesthetics.",
      "P": "Wait 7-10 minutes for optimal vasoconstriction before starting the incision."
    },
    "id": 1529,
    "_src_file": "plastic_surgery.js"
  },
  {
    "specialty": "Plastic Surgery",
    "topic": "Burn Resuscitation Endpoint",
    "question": "What is the most reliable clinical indicator of adequate fluid resuscitation in a burn patient?",
    "options": {
      "A": "Heart rate < 100 bpm",
      "B": "Normal blood pressure",
      "C": "Urine output of 0.5-1.0 mL/kg/hr",
      "D": "CVP of 8-12 mmHg"
    },
    "answer": "C",
    "explanation": {
      "correct": "Urine output (0.5-1.0 mL/kg/hr for adults, 1.0-1.5 mL/kg/hr for children) is the most reliable and widely used indicator of organ perfusion during burn resuscitation.",
      "A": "Burn patients are often tachycardic due to catecholamine surge.",
      "B": "BP can be maintained by compensatory mechanisms despite hypovolemia.",
      "C": "Gold standard for resuscitation monitoring.",
      "D": "Invasive and may be misleading in capillary leak states."
    },
    "guideline": "ABA Practice Guidelines for Burn Management",
    "takeaway": "Target urine output in burns: 0.5-1.0 mL/kg/hr.",
    "sharp_metadata": {
      "S": "Monitoring a patient during the first 8 hours of burn care.",
      "H": "Excellence in titration prevents 'over-resuscitation' and abdominal compartment syndrome.",
      "A": "Identify 'fluid creep'—the tendency to give more than Parkland calculated.",
      "R": "American Burn Association standards.",
      "P": "Adjust the IV rate hourly based on the previous hour's urine output."
    },
    "id": 1530,
    "_src_file": "plastic_surgery.js"
  },
  {
    "specialty": "Plastic Surgery",
    "topic": "Hand Surgery: Scaphoid Fracture",
    "question": "A patient with pain in the 'anatomic snuffbox' after a fall should be treated as having which fracture until proven otherwise?",
    "options": {
      "A": "Distal radius",
      "B": "Scaphoid",
      "C": "Hamate",
      "D": "Triquetrum"
    },
    "answer": "B",
    "explanation": {
      "correct": "Snuffbox tenderness is highly sensitive for scaphoid fractures. Because of the risk of avascular necrosis (due to retrograde blood supply), suspected scaphoid fractures should be splinted even if initial X-rays are negative.",
      "A": "Pain is more proximal.",
      "B": "Scaphoid (Anatomic snuffbox).",
      "C": "Pain is ulnar/volar.",
      "D": "Pain is dorsal/ulnar."
    },
    "guideline": "Management of Carpal Fractures",
    "takeaway": "Snuffbox tenderness = Suspected scaphoid fracture.",
    "sharp_metadata": {
      "S": "Patient with wrist pain after a fall, negative initial X-rays.",
      "H": "Precautionary immobilization prevents long-term non-union and AVN.",
      "A": "Address the retrograde blood supply (entering the distal pole) as the reason for proximal pole AVN.",
      "R": "Standard orthopedic teaching.",
      "P": "Thumb spica splint and repeat X-ray (or MRI/CT) in 10-14 days."
    },
    "id": 1531,
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 1215,
    "specialty": "Plastic Surgery",
    "topic": "Comprhensive Surgery Revision conv.docx",
    "question": "Several types of gastrointestinal autografts have been used to replace the esophagus after extirpation of carcinomas. Successful reconstructions have been achieved most frequently with:",
    "options": {
      "A": "Stomach.",
      "B": "Jejunum.",
      "D": "Ascending colon.",
      "E": "Descending colon."
    },
    "answer": "A",
    "explanation": {
      "correct": "The stomach remains the most frequently utilized and successful autograft for esophageal replacement. Its inherent characteristics, such as readily available length, good vascular supply (gastric arteries), and ability to be mobilized into the chest, make it a versatile option. Furthermore, its physiological similarity to the esophagus in terms of peristalsis and ability to handle gastric contents (though with potential for reflux) contributes to its frequent success.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "A",
      "set_the_stage": "This question probes a fundamental concept in surgical reconstruction, specifically the choice of autograft for esophageal replacement following oncologic resection. Understanding the relative advantages and disadvantages of various gastrointestinal segments is crucial for optimal patient outcomes.",
      "highlight_excellence": "The stomach remains the most frequently utilized and successful autograft for esophageal replacement. Its inherent characteristics, such as readily available length, good vascular supply (gastric arteries), and ability to be mobilized into the chest, make it a versatile option. Furthermore, its physiological similarity to the esophagus in terms of peristalsis and ability to handle gastric contents (though with potential for reflux) contributes to its frequent success.",
      "address_gaps": "While the stomach is most frequent, it's important to acknowledge that other segments can be used, particularly when the stomach is unavailable or compromised. The jejunum, while offering good length and vascularity, can be prone to ischemia if the vascular pedicle is too long or kinked. Colon segments (ascending and descending) are also viable options, offering excellent length and a robust blood supply, but may require more complex surgical techniques and can be associated with higher rates of anastomotic leak or stricture compared to the stomach. The choice is often dictated by patient anatomy, previous surgeries, and surgeon preference.",
      "review_guidelines": "When considering esophageal reconstruction, prioritize grafts that offer adequate length, a reliable blood supply, and physiological compatibility. The stomach is the gold standard due to its inherent advantages. However, be prepared to consider alternatives like jejunum or colon based on individual patient factors and potential complications associated with each.",
      "plan": "For future questions on esophageal reconstruction, focus on the specific indications and contraindications for each type of graft, as well as the common complications associated with their use. Consider the vascular anatomy of each segment and how it impacts its suitability for thoracic transposition."
    },
    "guideline": "When considering esophageal reconstruction, prioritize grafts that offer adequate length, a reliable blood supply, and physiological compatibility. The stomach is the gold standard due to its inherent advantages. However, be prepared to consider alternatives like jejunum or colon based on individual patient factors and potential complications associated with each.",
    "takeaway": "PLAN: For future questions on esophageal reconstruction, focus on the specific indications and contraindications for each type of graft, as well as the common complications associated with their use. Consider the vascular anatomy of each segment and how it impacts its suitability for thoracic transposition.",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 1209,
    "specialty": "Plastic Surgery",
    "topic": "Comprhensive Surgery Revision conv.docx",
    "question": "Allograft rejection may involve which of the following?",
    "options": {
      "B": "Veto cells.",
      "C": "Cytotoxicity.",
      "E": "The Arthus reaction."
    },
    "answer": "C",
    "explanation": {
      "correct": "The correct answer (C) – Cytotoxicity – is the most accurate. Allograft rejection fundamentally involves cytotoxic T cells and NK cells directly attacking the graft endothelium, leading to inflammation and tissue damage. The other options, while related to immune responses, are less directly involved in the *primary* mechanism of allograft rejection.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "C",
      "set_the_stage": "This question assesses understanding of the cellular and inflammatory mechanisms underlying allograft rejection. It’s a common area of confusion for trainees.",
      "highlight_excellence": "The correct answer (C) – Cytotoxicity – is the most accurate. Allograft rejection fundamentally involves cytotoxic T cells and NK cells directly attacking the graft endothelium, leading to inflammation and tissue damage. The other options, while related to immune responses, are less directly involved in the *primary* mechanism of allograft rejection.",
      "address_gaps": "The incorrect answer (A) – Veto cells – is a misnomer. ‘Veto cells’ aren’t a recognized cell type in allograft rejection. (B) Cytotoxicity is a key process, but the question asks for the *may involve* mechanism. (E) The Arthus reaction is a localized inflammatory response, but it’s a secondary event in rejection, not the core mechanism.  A significant gap is a lack of emphasis on the role of NK cells.",
      "review_guidelines": "1. **Cellular Mechanisms:** Reinforce understanding of cytotoxic T cells, NK cells, and their role in endothelial cell lysis. 2. **Inflammation Cascade:** Review the inflammatory response following allograft transplantation – complement activation, cytokine release, and recruitment of inflammatory cells. 3. **Rejection Types:** Differentiate between acute and chronic rejection, recognizing that cytotoxicity is more prominent in acute rejection. 4. **Immunological Tolerance:** Briefly touch upon the concept of immunological tolerance and how it’s disrupted in allograft rejection.",
      "plan": "I recommend a focused review of immunology specifically related to transplantation. Case studies illustrating cytotoxic T cell-mediated rejection would be beneficial.  Consider using diagrams to visualize the inflammatory cascade and the interaction between graft endothelium and immune cells. Further questions should focus on differentiating rejection mechanisms and their clinical manifestations."
    },
    "guideline": "1. **Cellular Mechanisms:** Reinforce understanding of cytotoxic T cells, NK cells, and their role in endothelial cell lysis. 2. **Inflammation Cascade:** Review the inflammatory response following allograft transplantation – complement activation, cytokine release, and recruitment of inflammatory cells. 3. **Rejection Types:** Differentiate between acute and chronic rejection, recognizing that cytotoxicity is more prominent in acute rejection. 4. **Immunological Tolerance:** Briefly touch upon the concept of immunological tolerance and how it’s disrupted in allograft rejection.",
    "takeaway": "PLAN: I recommend a focused review of immunology specifically related to transplantation. Case studies illustrating cytotoxic T cell-mediated rejection would be beneficial.  Consider using diagrams to visualize the inflammatory cascade and the interaction between graft endothelium and immune cells. Further questions should focus on differentiating rejection mechanisms and their clinical manifestations.",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 1210,
    "specialty": "Plastic Surgery",
    "topic": "Comprhensive Surgery Revision conv.docx",
    "question": "Which of the following statements about allograft rejection are true?",
    "options": {
      "B": "Allograft rejection may be mediated by antibodies or by cells.",
      "D": "Acute cellular rejection is the major cause for loss of clinical organ transplants.",
      "E": "An individual with ―tolerance‖ is unable to reject an allograft."
    },
    "answer": "B",
    "explanation": {
      "correct": "Option B is unequivocally correct. Allograft rejection is a complex process involving both humoral (antibody-mediated) and cellular (T-cell mediated) responses. This represents the foundational understanding of the disease process. The other options contain inaccuracies that are important to identify.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "B",
      "set_the_stage": "This question assesses understanding of allograft rejection mechanisms, a critical component of transplant surgery. It tests knowledge of the diverse pathways involved and their relative importance.",
      "highlight_excellence": "Option B is unequivocally correct. Allograft rejection is a complex process involving both humoral (antibody-mediated) and cellular (T-cell mediated) responses. This represents the foundational understanding of the disease process. The other options contain inaccuracies that are important to identify.",
      "address_gaps": "Several areas need reinforcement. Option D is frequently incorrect – chronic allograft nephropathy and cardiac allograft syndrome are far more common causes of long-term graft failure than acute cellular rejection. Option E is also incorrect; tolerance, while a fascinating area of research, is *not* a state where rejection is prevented. It's a complex, incompletely understood process where the recipient’s immune system actively suppresses the allograft, and even then, rejection can occur. A deeper understanding of the different types of rejection (ACR, BCR, DCC) and their respective triggers is crucial.",
      "review_guidelines": "1. **Rejection Types:** Reinforce the distinctions between Acute Cellular Rejection (ACR), Acute Antibody-Mediated Rejection (ABMR), Chronic Rejection, and Delayed Graft Function (DGF). 2. **Immune Mechanisms:** Review the roles of T cells, B cells, antibodies, and HLA matching. 3. **Tolerance:** Discuss the concept of tolerance – its theoretical basis and the challenges in achieving it clinically. 4. **Clinical Presentation:** Familiarize yourself with the clinical signs and symptoms associated with each type of rejection. 5. **Management:** Understand the immunosuppressive regimens used to prevent and treat rejection.",
      "plan": "Implement a targeted review of allograft rejection pathophysiology. Include case studies focusing on the clinical presentation and management of different rejection types. Consider utilizing flow diagrams to illustrate the sequential events in the rejection process. Further research into the mechanisms of tolerance is also recommended."
    },
    "guideline": "1. **Rejection Types:** Reinforce the distinctions between Acute Cellular Rejection (ACR), Acute Antibody-Mediated Rejection (ABMR), Chronic Rejection, and Delayed Graft Function (DGF). 2. **Immune Mechanisms:** Review the roles of T cells, B cells, antibodies, and HLA matching. 3. **Tolerance:** Discuss the concept of tolerance – its theoretical basis and the challenges in achieving it clinically. 4. **Clinical Presentation:** Familiarize yourself with the clinical signs and symptoms associated with each type of rejection. 5. **Management:** Understand the immunosuppressive regimens used to prevent and treat rejection.",
    "takeaway": "PLAN: Implement a targeted review of allograft rejection pathophysiology. Include case studies focusing on the clinical presentation and management of different rejection types. Consider utilizing flow diagrams to illustrate the sequential events in the rejection process. Further research into the mechanisms of tolerance is also recommended.",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 1201,
    "specialty": "Plastic Surgery",
    "topic": "rush.docx",
    "question": "A 34-year-old man sustained a gunshot wound to his abdomen that necessitated exploratory laparotomy and small bowel resection. Two weeks after the initial operation, he was reex plored for a large intraabdominal abscess. Which of the following will result in the most rapid gain in strength of the new incision?",
    "options": {
      "B": "The midline scar is excised with a 1-cm margin.",
      "C": "The midline incision is reopened without excision of the scar.",
      "D": "The midline incision is left to heal by secondary intention.",
      "E": "The rate of gain in strength is not affected by the incision technique."
    },
    "answer": "C",
    "explanation": {
      "correct": "The correct answer (C) reflects the established principle of minimizing tension on the healing incision. Reopening without excision avoids further mechanical stress, which is a primary driver of delayed healing and scar weakening. The other options are less optimal: B – Excision creates a new wound edge and significantly increases tension; D – Secondary intention healing can be slow and prone to complications; E – Wound healing is profoundly influenced by surgical technique and tension.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "C",
      "set_the_stage": "This question assesses understanding of wound healing principles, specifically concerning incisional strength and scar management following abdominal surgery. The patient presents with a gunshot wound leading to resection and subsequent abscess formation, highlighting the complexities of post-operative wound care.",
      "highlight_excellence": "The correct answer (C) reflects the established principle of minimizing tension on the healing incision. Reopening without excision avoids further mechanical stress, which is a primary driver of delayed healing and scar weakening. The other options are less optimal: B – Excision creates a new wound edge and significantly increases tension; D – Secondary intention healing can be slow and prone to complications; E – Wound healing is profoundly influenced by surgical technique and tension.",
      "address_gaps": "A key gap in understanding is the concept of ‘mechanical tension’ on the incision. Students may struggle to differentiate between various closure techniques and their impact on scar strength. Furthermore, a deeper understanding of the inflammatory response and its role in wound healing is needed. The question also tests knowledge of the difference between primary and secondary intention healing.",
      "review_guidelines": "1. **Wound Tension:** Emphasize that minimizing tension at the incision site is paramount for optimal healing. Tension leads to increased inflammation, breakdown of the granulation tissue, and ultimately, a weaker scar. 2. **Scar Management:** Review the different scar closure techniques (primary, secondary, tertiary) and their respective advantages and disadvantages. 3. **Inflammation & Healing:** Reinforce the inflammatory phase as a necessary but controlled process in wound healing. 4. **Re-exploration for Abscesses:** Understand the potential for abscess formation following abdominal surgery and the importance of meticulous wound care.",
      "plan": "Further education should include a detailed discussion of wound biomechanics, the role of fibroblasts and collagen synthesis in scar formation, and the impact of infection on healing. Case studies illustrating the consequences of excessive tension on incisions would be beneficial. Consider incorporating a practical component – perhaps a simulated incision closure exercise – to reinforce these concepts."
    },
    "guideline": "1. **Wound Tension:** Emphasize that minimizing tension at the incision site is paramount for optimal healing. Tension leads to increased inflammation, breakdown of the granulation tissue, and ultimately, a weaker scar. 2. **Scar Management:** Review the different scar closure techniques (primary, secondary, tertiary) and their respective advantages and disadvantages. 3. **Inflammation & Healing:** Reinforce the inflammatory phase as a necessary but controlled process in wound healing. 4. **Re-exploration for Abscesses:** Understand the potential for abscess formation following abdominal surgery and the importance of meticulous wound care.",
    "takeaway": "PLAN: Further education should include a detailed discussion of wound biomechanics, the role of fibroblasts and collagen synthesis in scar formation, and the impact of infection on healing. Case studies illustrating the consequences of excessive tension on incisions would be beneficial. Consider incorporating a practical component – perhaps a simulated incision closure exercise – to reinforce these concepts.",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 1208,
    "specialty": "Plastic Surgery",
    "topic": "Comprhensive Surgery Revision conv.docx",
    "question": "The unusual intensity of alloimmune responses reflects which of the following characteristics?",
    "options": {
      "D": "Stimulation of many T-cell receptors during the interaction of a T cell with an antigen-presenting cell.",
      "E": "The high frequency of antigen-presenting cells able to be recognized by T cells."
    },
    "answer": "E",
    "explanation": {
      "correct": "The correct answer (E) accurately identifies the fundamental mechanism. The sheer number of antigen-presenting cells (APCs) – particularly dendritic cells – available to interact with T cells dramatically increases the probability of T cell activation. This ‘mass activation’ is what defines the intense alloimmune response seen in transplantation. The other options (D) describe a single T cell interaction, not the overall phenomenon.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "E",
      "set_the_stage": "This question assesses understanding of alloimmune responses, specifically focusing on the key driver of their intensity. It’s a common question type found in immunology and transplant medicine boards.",
      "highlight_excellence": "The correct answer (E) accurately identifies the fundamental mechanism. The sheer number of antigen-presenting cells (APCs) – particularly dendritic cells – available to interact with T cells dramatically increases the probability of T cell activation. This ‘mass activation’ is what defines the intense alloimmune response seen in transplantation. The other options (D) describe a single T cell interaction, not the overall phenomenon.",
      "address_gaps": "The incorrect answer (B) is misleading. While T-cell receptor stimulation is *part* of the process, it’s the *quantity* of APCs, not just the stimulation, that’s the primary determinant of intensity. A single, highly stimulated T cell wouldn’t explain the robust response.  There's also a gap in understanding the role of dendritic cells as the primary APCs in initiating alloimmunity.",
      "review_guidelines": "1. **Dendritic Cells:** Reinforce the role of dendritic cells as the key APCs in initiating and amplifying alloimmune responses. They are exceptionally efficient at capturing and presenting antigens to T cells. 2. **T-Cell Receptor Diversity:** Understand how the vast diversity of T-cell receptors contributes to the potential for recognition, but quantity is more critical for intensity. 3. **Allograft Rejection Mechanisms:** Review the stages of allograft rejection – primary, secondary, and tertiary – and how each stage is influenced by alloimmune responses. 4. **Immunological Tolerance:** Contrast alloimmune responses with the concept of immunological tolerance, where the immune system learns to accept self-antigens.",
      "plan": "I recommend a focused review of dendritic cell biology, T-cell receptor diversity, and the mechanisms of allograft rejection.  Consider using flashcards or practice questions specifically targeting the factors that contribute to the intensity of alloimmune responses.  A deeper dive into the role of costimulatory signals during T cell activation would also be beneficial."
    },
    "guideline": "1. **Dendritic Cells:** Reinforce the role of dendritic cells as the key APCs in initiating and amplifying alloimmune responses. They are exceptionally efficient at capturing and presenting antigens to T cells. 2. **T-Cell Receptor Diversity:** Understand how the vast diversity of T-cell receptors contributes to the potential for recognition, but quantity is more critical for intensity. 3. **Allograft Rejection Mechanisms:** Review the stages of allograft rejection – primary, secondary, and tertiary – and how each stage is influenced by alloimmune responses. 4. **Immunological Tolerance:** Contrast alloimmune responses with the concept of immunological tolerance, where the immune system learns to accept self-antigens.",
    "takeaway": "PLAN: I recommend a focused review of dendritic cell biology, T-cell receptor diversity, and the mechanisms of allograft rejection.  Consider using flashcards or practice questions specifically targeting the factors that contribute to the intensity of alloimmune responses.  A deeper dive into the role of costimulatory signals during T cell activation would also be beneficial.",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 1213,
    "specialty": "Plastic Surgery",
    "topic": "Comprhensive Surgery Revision conv.docx",
    "question": "Advantages of split-thickness skin grafts over full-thickness skin grafts include:",
    "options": {
      "A": "Split-thickness grafts include only part of the epidermis and none of the dermis.",
      "C": "Split-thickness grafts offer better resistance to contraction.",
      "E": "Split-thickness grafts survive better on surfaces with compromised blood supply."
    },
    "answer": "C",
    "explanation": {
      "correct": "The correct answer (C) accurately identifies a primary advantage of STSG – their superior resistance to contraction. This is due to the relatively thinner dermis component, which minimizes scar tissue formation and subsequent contracture. This is a critical consideration in areas like the face and scalp where minimizing scarring is paramount.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "C",
      "set_the_stage": "This question assesses understanding of the key differences between split-thickness (STSG) and full-thickness (FTSG) skin grafts, a fundamental concept in reconstructive surgery. The question specifically probes the advantages of STSG, which are crucial for appropriate graft selection.",
      "highlight_excellence": "The correct answer (C) accurately identifies a primary advantage of STSG – their superior resistance to contraction. This is due to the relatively thinner dermis component, which minimizes scar tissue formation and subsequent contracture. This is a critical consideration in areas like the face and scalp where minimizing scarring is paramount.",
      "address_gaps": "Option A is incorrect. STSG *does* include part of the dermis, albeit a thinner layer. Option E is also incorrect; FTSGs generally have better survival in compromised vascular beds due to their thicker dermis, which can tolerate ischemia better. Letter B is also incorrect as it describes a disadvantage of STSG.",
      "review_guidelines": "1. **Graft Depth:** Reinforce the understanding of the difference in graft depth – STSG includes the epidermis and a portion of the dermis, while FTSG includes the entire epidermis and dermis. 2. **Contracture Risk:** Emphasize the higher contracture risk associated with STSG due to the thinner dermis. 3. **Vascularity & Survival:** Understand that FTSGs generally have better survival rates in areas with compromised blood supply. 4. **Clinical Indications:** Review the appropriate indications for each graft type based on wound characteristics (size, depth, location, vascularity).",
      "plan": "I recommend a focused review of graft physiology, including the role of the epidermis and dermis, scar tissue formation, and factors influencing graft survival. Case-based discussions focusing on facial reconstruction, burn management, and other common reconstructive scenarios would be beneficial. Further, a review of the principles of wound healing and vascular assessment is warranted."
    },
    "guideline": "1. **Graft Depth:** Reinforce the understanding of the difference in graft depth – STSG includes the epidermis and a portion of the dermis, while FTSG includes the entire epidermis and dermis. 2. **Contracture Risk:** Emphasize the higher contracture risk associated with STSG due to the thinner dermis. 3. **Vascularity & Survival:** Understand that FTSGs generally have better survival rates in areas with compromised blood supply. 4. **Clinical Indications:** Review the appropriate indications for each graft type based on wound characteristics (size, depth, location, vascularity).",
    "takeaway": "PLAN: I recommend a focused review of graft physiology, including the role of the epidermis and dermis, scar tissue formation, and factors influencing graft survival. Case-based discussions focusing on facial reconstruction, burn management, and other common reconstructive scenarios would be beneficial. Further, a review of the principles of wound healing and vascular assessment is warranted.",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 1211,
    "specialty": "Plastic Surgery",
    "topic": "Comprhensive Surgery Revision conv.docx",
    "question": "Survival rates for patients on dialysis are better than those for patients receiving renal allografts in the following circumstances:",
    "options": {
      "A": "A living related donor is available.",
      "C": "The recipient's renal failure is secondary to diabetes.",
      "D": "None of the above."
    },
    "answer": "D",
    "explanation": {
      "correct": "The correct answer (D) reflects the current reality. While allograft survival remains generally better, the gap has closed significantly, and dialysis survival rates are now comparable, especially in carefully selected patients. This highlights the importance of individualized decision-making.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "D",
      "set_the_stage": "This question tests understanding of the evolving landscape of renal replacement therapy and the relative benefits of dialysis versus allograft transplantation. Historically, allograft survival was superior, but dialysis has dramatically improved, particularly with advancements in technology and patient care.",
      "highlight_excellence": "The correct answer (D) reflects the current reality. While allograft survival remains generally better, the gap has closed significantly, and dialysis survival rates are now comparable, especially in carefully selected patients. This highlights the importance of individualized decision-making.",
      "address_gaps": "The question’s phrasing – ‘better than those for patients receiving renal allografts’ – is slightly misleading. It implies a clear superiority of dialysis, which isn’t entirely accurate anymore. Options A and C represent factors that *can* influence outcomes, but don’t inherently guarantee better dialysis survival. A living donor improves graft function and reduces immunosuppression, while diabetes is a significant risk factor for allograft failure regardless of the treatment modality.",
      "review_guidelines": "1. **Dialysis Advances:** Recognize the transformative impact of advancements in dialysis technology (hemodialysis, peritoneal dialysis, and home hemodialysis) on patient survival. 2. **Allograft Considerations:** Understand that allograft survival is influenced by factors like HLA matching, antibody status, patient comorbidities (particularly diabetes), and immunosuppression protocols. 3. **Individualized Assessment:** Emphasize the need for a comprehensive assessment of each patient’s suitability for either dialysis or transplantation, considering factors beyond just the primary renal failure. 4. **Outcome Comparison:** Be aware that dialysis survival rates have improved substantially and are now often comparable to allograft survival, particularly in well-managed patients.",
      "plan": "Further review should focus on:  * Current dialysis technology and its impact on patient outcomes. * The immunological factors influencing allograft rejection and long-term survival. * The role of patient comorbidities (diabetes, hypertension, cardiovascular disease) in both dialysis and allograft outcomes. * The principles of shared decision-making in renal replacement therapy."
    },
    "guideline": "1. **Dialysis Advances:** Recognize the transformative impact of advancements in dialysis technology (hemodialysis, peritoneal dialysis, and home hemodialysis) on patient survival. 2. **Allograft Considerations:** Understand that allograft survival is influenced by factors like HLA matching, antibody status, patient comorbidities (particularly diabetes), and immunosuppression protocols. 3. **Individualized Assessment:** Emphasize the need for a comprehensive assessment of each patient’s suitability for either dialysis or transplantation, considering factors beyond just the primary renal failure. 4. **Outcome Comparison:** Be aware that dialysis survival rates have improved substantially and are now often comparable to allograft survival, particularly in well-managed patients.",
    "takeaway": "PLAN: Further review should focus on:  * Current dialysis technology and its impact on patient outcomes. * The immunological factors influencing allograft rejection and long-term survival. * The role of patient comorbidities (diabetes, hypertension, cardiovascular disease) in both dialysis and allograft outcomes. * The principles of shared decision-making in renal replacement therapy.",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 1202,
    "specialty": "Plastic Surgery",
    "topic": "rush.docx",
    "question": "A 30-year-old man is scheduled for definitive management of his open wounds after undergoing embolectomy and fasciotomies on his left lower extremity. Which of the following statements is true regarding the use of split- and full-thickness skin grafts?",
    "options": {
      "A": "A split-thickness skin graft undergoes approximately 40% shrinkage of its surface area immediately after harvesting.",
      "B": "A full-thickness skin graft undergoes approximately 10% shrinkage of its surface area immediately after harvesting.",
      "E": "Skin grafts may be exposed to moderate amounts of sunlight without changing pigmentation."
    },
    "answer": "A",
    "explanation": {
      "correct": "The correct answer (A) accurately reflects the typical shrinkage observed with split-thickness skin grafts (approximately 40%). This shrinkage is a fundamental characteristic driving the graft’s ability to cover a wound. Understanding this shrinkage is crucial for accurate wound bed assessment and graft sizing. The other options are incorrect.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "A",
      "set_the_stage": "This question assesses understanding of skin graft shrinkage, a critical factor in graft selection and management, particularly in complex wounds like those following embolectomy and fasciotomy. The patient’s history of extensive tissue damage necessitates careful consideration of graft options to achieve optimal coverage and minimize complications.",
      "highlight_excellence": "The correct answer (A) accurately reflects the typical shrinkage observed with split-thickness skin grafts (approximately 40%). This shrinkage is a fundamental characteristic driving the graft’s ability to cover a wound. Understanding this shrinkage is crucial for accurate wound bed assessment and graft sizing. The other options are incorrect.",
      "address_gaps": "Several areas represent gaps in understanding. Firstly, the question’s options are somewhat simplistic and don’t fully capture the nuances of graft shrinkage and its relationship to wound bed preparation. Secondly, the provided answer key (D) is incorrect. A more comprehensive understanding of graft types and their shrinkage profiles is needed.  Specifically, the student needs to understand that full-thickness grafts shrink less than split-thickness grafts.",
      "review_guidelines": "1. **Graft Types & Shrinkage:** Reinforce the differences in shrinkage between split-thickness (STSG) and full-thickness (FTSG) skin grafts.  STSG typically shrinks 40-60% immediately post-harvest, while FTSG shrinks approximately 10-20%. This is due to the different collagen fiber depths and cellularity. 2. **Wound Bed Preparation:** Emphasize the importance of a meticulously prepared wound bed – debrided, granulation tissue, and appropriate moisture balance – to maximize graft take. 3. **Graft Sizing:**  Accurate graft sizing is paramount, considering the expected shrinkage. 4. **Post-operative Care:**  Discuss the importance of protecting grafts from excessive sunlight, which can cause hyperpigmentation, and maintaining a moist wound environment.",
      "plan": "1. **Case Discussion:** Present similar case scenarios involving complex wounds and discuss the rationale for choosing between STSGs and FTSGs based on wound characteristics, patient factors, and desired cosmetic outcome. 2. **Simulation/Lab Exercise:** Utilize simulated wounds to demonstrate graft harvesting and application, highlighting shrinkage and its impact on coverage. 3. **Review Anatomy & Physiology:** Reinforce the understanding of skin structure, collagen fiber arrangement, and cellular response to injury, relating this to graft behavior."
    },
    "guideline": "1. **Graft Types & Shrinkage:** Reinforce the differences in shrinkage between split-thickness (STSG) and full-thickness (FTSG) skin grafts.  STSG typically shrinks 40-60% immediately post-harvest, while FTSG shrinks approximately 10-20%. This is due to the different collagen fiber depths and cellularity. 2. **Wound Bed Preparation:** Emphasize the importance of a meticulously prepared wound bed – debrided, granulation tissue, and appropriate moisture balance – to maximize graft take. 3. **Graft Sizing:**  Accurate graft sizing is paramount, considering the expected shrinkage. 4. **Post-operative Care:**  Discuss the importance of protecting grafts from excessive sunlight, which can cause hyperpigmentation, and maintaining a moist wound environment.",
    "takeaway": "PLAN: 1. **Case Discussion:** Present similar case scenarios involving complex wounds and discuss the rationale for choosing between STSGs and FTSGs based on wound characteristics, patient factors, and desired cosmetic outcome. 2. **Simulation/Lab Exercise:** Utilize simulated wounds to demonstrate graft harvesting and application, highlighting shrinkage and its impact on coverage. 3. **Review Anatomy & Physiology:** Reinforce the understanding of skin structure, collagen fiber arrangement, and cellular response to injury, relating this to graft behavior.",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 1204,
    "specialty": "Plastic Surgery",
    "topic": "Surgical Oncology",
    "question": "Which of the following statements is/are true of the epidemiology and etiology of melanoma?",
    "options": {
      "A": "Most patients are diagnosed after age 60 years.",
      "B": "Skin color has no association with risk of melanoma.",
      "C": "Sun exposure is the only risk factor for melanoma.",
      "D": "The per capita incidence of melanoma is highest in Australia."
    },
    "answer": "D",
    "explanation": {
      "correct": "Australia and New Zealand have the highest incidence of melanoma globally.",
      "A": "Incorrect; it is one of the most common cancers in young adults (25-29).",
      "B": "Incorrect; fair skin (Fitzpatrick I/II) is a major risk factor.",
      "C": "Incorrect; genetics (CDKN2A), family history, and immunosuppression are also factors.",
      "D": "Correct; due to a predominantly fair-skinned population living near the equator under a thin ozone layer."
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "D",
      "set_the_stage": "Melanoma incidence correlates strongly with intermittent, intense UV radiation exposure on susceptible phenotypes.",
      "highlight_excellence": "The geographical epidemiology of melanoma perfectly illustrates the gene-environment interaction. The highest rates are in Australia, where Caucasian populations of Celtic descent receive massive UV loads. Conversely, melanoma in dark-skinned populations (which is rare) often presents as acral lentiginous melanoma on the palms/soles, completely independent of sun exposure.",
      "address_gaps": "Option A ignores that melanoma heavily afflicts the young. Option B ignores the protective effect of melanin. Option C ignores familial dysplastic nevus syndromes.",
      "review_learning_points": "Risk factors: ABCDE atypical moles, red hair/fair skin, severe childhood blistering sunburns, and positive family history.",
      "plan_for_improvement": "Highest incidence = Australia. Most common subtype = Superficial Spreading."
    },
    "guideline": "WHO and cancer registries universally track UV index and latitude as direct correlates to melanoma incidence in fair-skinned cohorts.",
    "takeaway": "Blistering sunburns in childhood on fair skin create the biological groundwork for melanoma decades later.",
    "visualization": "A dark, asymmetrical lesion with irregular borders and varied colors (black, blue, red) on the sun-exposed shoulder of a young patient.",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 30,
    "specialty": "Plastic Surgery",
    "topic": "Wound Care & Grafts",
    "question": "Which of the following is TRUE of skin grafts?",
    "options": {
      "A": "Split-thickness grafts contain the epidermis and all of the dermis.",
      "B": "Full-thickness grafts are more likely to survive than split-thickness grafts.",
      "C": "Split-thickness grafts inhibit wound contraction better than full-thickness grafts.",
      "D": "Full-thickness skin grafts inhibit wound contraction more than split-thickness grafts.",
      "E": "Split-thickness grafts are more aesthetic than full-thickness grafts."
    },
    "answer": "D",
    "explanation": {
      "correct": "The amount of dermis determines the graft's ability to inhibit secondary wound contraction.",
      "A": "Incorrect; split-thickness contains only *part* of the dermis.",
      "B": "Incorrect; FTSG have higher metabolic demands and are *less* likely to survive (take) than STSG.",
      "C": "Incorrect; STSG allows significant contraction.",
      "D": "Correct; FTSG contains all dermal appendages and suppresses myofibroblast activity heavily.",
      "E": "Incorrect; FTSG matches color and texture much better."
    },
    "sharp": {
      "status": "ACCEPT",
      "verified_answer": "D",
      "set_the_stage": "Skin graft selection requires balancing the 'take' rate against the functional and aesthetic outcome.",
      "highlight_excellence": "A Full-Thickness Skin Graft (FTSG) contains the epidermis and the entire dermis. The thick dermal layer provides excellent structural integrity and actively signals myofibroblasts in the wound bed to stop contracting. Therefore, FTSG prevents contractures across joints or the face perfectly. However, because it is thick, it struggles to revascularize (imbibition/inosculation) and fails easily on poor beds.",
      "address_gaps": "Split-Thickness Skin Grafts (STSG) take easily because they are thin, but they shrink significantly over time. FTSGs (E) are far superior aesthetically.",
      "review_learning_points": "Rule of thumb: The thicker the dermis, the better the final appearance and the less the contraction, but the lower the chance of graft survival.",
      "plan_for_improvement": "Face and hands get FTSG. Massive torso burns get STSG."
    },
    "guideline": "Reconstructive ladder principles dictate using the simplest method; however, for functional areas (eyelids, fingers), FTSG is the standard of care to prevent crippling contractures.",
    "takeaway": "If you don't want the wound to shrink and distort surrounding tissue, use a full-thickness graft.",
    "visualization": "A thin, meshed STSG expanding like a fishnet over a large burn vs. a smooth, perfectly matched patch of FTSG placed seamlessly onto the nose.",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90666,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "With regards to anticoagulants in microsurgery:",
    "options": {
      "A": "Heparin and antithrombin III have similar mechanisms of action.",
      "B": "Unfractionated and fractionated heparins have different proportions of anti-Factor Xa and antithrombin activity.",
      "C": "Heparin-induced thrombocytopenia is a more frequent complication of unfractionated prophylactic heparin than of fractionated prophylactic heparin use.",
      "D": "The antiplatelet drug aspirin is contraindicated in patients younger than 16 years of age."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Heparin and antithrombin III have similar mechanisms of action.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "With regards to anticoagulants in microsurgery:",
      "highlight_excellence": "Best answer: A Heparin and antithrombin III have similar mechanisms of action.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Heparin and antithrombin III have similar mechanisms of action.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90667,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "Which landmark publication related to free tissue transfer is correct?",
    "options": {
      "A": "The first successful thumb replantation was performed by Komatsu and Tamai in 1967.",
      "B": "The first clinical series of free tissue transfers was published by Nakayama in 1969.",
      "C": "Cobbett performed the first successful free great toe-to-hand transfer in humans in 1968.",
      "D": "McLean and Buncke performed the first free omentum flap in 1971."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A The first successful thumb replantation was performed by Komatsu and Tamai in 1967.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "Which landmark publication related to free tissue transfer is correct?",
      "highlight_excellence": "Best answer: A The first successful thumb replantation was performed by Komatsu and Tamai in 1967.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "The first successful thumb replantation was performed by Komatsu and Tamai in 1967.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90668,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "Concerning composite tissue allotransplantation, which of the following is true?",
    "options": {
      "A": "Corticosteroids are used for both maintenance therapy and treatment of acute rejection episodes and act by inhibiting NF-kB activation and inflammatory cytokine production.",
      "B": "Antithymocyte globulin (ATG) is an induction agent which binds cell surface antigens, and depletes T cells.",
      "C": "Tacrolimus (FK 506) blocks the production of IL-2 and has been shown in recent studies to possibly speed up nerve regrowth.",
      "D": "Mycophenolate mofetil (MMF) prevents T-cell proliferation and differentiation."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Corticosteroids are used for both maintenance therapy and treatment of acute rejection episodes and act by inhibiting NF-kB activation and inflammatory cytokine production.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "Concerning composite tissue allotransplantation, which of the following is true?",
      "highlight_excellence": "Best answer: A Corticosteroids are used for both maintenance therapy and treatment of acute rejection episodes and act by inhibiting NF-kB activation and inflammatory cytokine production.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Corticosteroids are used for both maintenance therapy and treatment of acute rejection episodes and act by inhibiting NF-kB activation and inflammatory cytokine production.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90669,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "With regards to toe-to-hand transfer:",
    "options": {
      "A": "The dominant blood supply to the great toe is the first plantar metatarsal artery in 25% of cases and the first dorsal metatarsal artery in 75% of cases.",
      "B": "A metacarpal hand results when all its fingers have been amputated proximal to the proximal phalanx, with or without thumb involvement.",
      "C": "Repair of the toe extensor tendon(s) in the hand should be performed after an accurate finger cascade has been achieved by flexor tendon repair(s).",
      "D": "When reconstructing a Type IIC metacarpal hand by toe-to-hand transplantations, finger reconstruction should usually precede thumb reconstruction."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A The dominant blood supply to the great toe is the first plantar metatarsal artery in 25% of cases and the first dorsal metatarsal artery in 75% of cases.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "With regards to toe-to-hand transfer:",
      "highlight_excellence": "Best answer: A The dominant blood supply to the great toe is the first plantar metatarsal artery in 25% of cases and the first dorsal metatarsal artery in 75% of cases.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "The dominant blood supply to the great toe is the first plantar metatarsal artery in 25% of cases and the first dorsal metatarsal artery in 75% of cases.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90670,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "Regarding free tissue transfer:",
    "options": {
      "A": "According to Koshima, supramicrosurgery (or supermicrosurgery) is defined as microvascular dissection and anastomosis of vessels measuring less than 0.5mm.",
      "B": "In 1960, Jacobson and Suarez reported successful experimental microvascular anastomoses as small as 0.9mm in diameter. Multiple Choice Questions in Plastic Surgery",
      "C": "The first successful free tissue transfer in humans was performed in America.",
      "D": "Taylor is credited with the first description of the free fibula osteocutaneous flap."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A According to Koshima, supramicrosurgery (or supermicrosurgery) is defined as microvascular dissection and anastomosis of vessels measuring less than 0.5mm.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "Regarding free tissue transfer:",
      "highlight_excellence": "Best answer: A According to Koshima, supramicrosurgery (or supermicrosurgery) is defined as microvascular dissection and anastomosis of vessels measuring less than 0.5mm.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "According to Koshima, supramicrosurgery (or supermicrosurgery) is defined as microvascular dissection and anastomosis of vessels measuring less than 0.5mm.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90671,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "Basic principles and basic science 12Body mass index is calculated:",
    "options": {
      "A": "Superficial inferior epigastric artery. B.Deep inferior epigastric artery.",
      "B": "More problems with venous drainage of the flap. C.A better survival of zone IV.",
      "C": "Superior epigastric artery.",
      "D": "Superficial circumflex iliac artery. E.Intercostal and segmental arteries."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Superficial inferior epigastric artery. B.Deep inferior epigastric artery.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "Basic principles and basic science 12Body mass index is calculated:",
      "highlight_excellence": "Best answer: A Superficial inferior epigastric artery. B.Deep inferior epigastric artery.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Superficial inferior epigastric artery. B.Deep inferior epigastric artery.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90672,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "Basic principles and basic science 19Thinning of a paramedian forehead flap for nasal reconstruction is:",
    "options": {
      "A": "The Mann-Whitney U test is a non-parametric test. B.The Kruskal-Wallis test is a non-parametric test.",
      "B": "Only feasible at the distal 1cm of the flap. C.Safest if performed at an intermediate stage.",
      "C": "A meta-analysis is a method of combining results from a number of independent studies to give an overall estimate of effect.",
      "D": "Non-parametric tests are dependent on the distribution of the data. E.The normal distribution of data is symmetrical, forming a characteristic bell-shaped curve."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A The Mann-Whitney U test is a non-parametric test. B.The Kruskal-Wallis test is a non-parametric test.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "Basic principles and basic science 19Thinning of a paramedian forehead flap for nasal reconstruction is:",
      "highlight_excellence": "Best answer: A The Mann-Whitney U test is a non-parametric test. B.The Kruskal-Wallis test is a non-parametric test.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "The Mann-Whitney U test is a non-parametric test. B.The Kruskal-Wallis test is a non-parametric test.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90673,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "21The names of Salmon, Manchot, Taylor, Morain, and Tempest are all associated with our knowledge of which of the following?",
    "options": {
      "A": "Keep the operating theatre temperature high.",
      "B": "Make sure both vessels are of the same calibre.",
      "C": "Make sure there is no intimal damage in either vessel.",
      "D": "Inject a bolus of heparin before putting the clamp on the vessel. E.Never release the vein before starting the arterial anastomosis."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Keep the operating theatre temperature high.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "21The names of Salmon, Manchot, Taylor, Morain, and Tempest are all associated with our knowledge of which of the follow",
      "highlight_excellence": "Best answer: A Keep the operating theatre temperature high.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Keep the operating theatre temperature high.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90674,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "24Which statement is false?",
    "options": {
      "A": "The parascapular flap is vascularised by the transverse branch of the circumflex scapular vessels.",
      "B": "The anterolateral thigh flap is normally vascularised by the descending branch of the lateral circumflex femoral vessels.",
      "C": "The skin island of the osteocutaneous fibula free flap is generally circulated by septocutaneous branches from the peroneal vessels running off posterior of the fibula.",
      "D": "The venous outflow of the radial forearm flap can be based on either the concomitant veins of the radial artery or on the cephalic vein or on both."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A The parascapular flap is vascularised by the transverse branch of the circumflex scapular vessels.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "24Which statement is false?",
      "highlight_excellence": "Best answer: A The parascapular flap is vascularised by the transverse branch of the circumflex scapular vessels.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "The parascapular flap is vascularised by the transverse branch of the circumflex scapular vessels.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90675,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "is correctly attributed?",
    "options": {
      "A": "The thickness of the dermis increases as the skin is expanded. B.The mitotic rate of skin stays static during expansion.",
      "B": "Next day wound check and discharge.",
      "C": "The thickness of the epidermis tends to increase. D.The stratum lucidum thickens by at least 75%.",
      "D": "Winter (1962, Nature) - moist wounds heal better. E.Penn (1955) - ideal breast measurements. Multiple Choice Questions in Plastic Surgery 28The following is the appropriate treatment postoperatively for patients with split skin grafts to the lower limb:"
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A The thickness of the dermis increases as the skin is expanded. B.The mitotic rate of skin stays static during expansion.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "is correctly attributed?",
      "highlight_excellence": "Best answer: A The thickness of the dermis increases as the skin is expanded. B.The mitotic rate of skin stays static during expansion.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "The thickness of the dermis increases as the skin is expanded. B.The mitotic rate of skin stays static during expansion.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90676,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "Basic principles and basic science",
    "options": {
      "A": "Groin flap.",
      "B": "Thoracodorsal artery perforator flap. C.Anterolateral thigh flap.",
      "C": "Reverse sural artery flap.11 D.Free or pedicled dorsalis pedis flap.",
      "D": "First dorsal metacarpal artery flap. E.Deltopectoral flap."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Groin flap.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "Basic principles and basic science",
      "highlight_excellence": "Best answer: A Groin flap.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Groin flap.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90677,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "1236Which statement is true?",
    "options": {
      "A": "The gracilis muscle is a poor choice for perineal reconstruction due to its small width.",
      "B": "The adductor artery usually arises from the profunda femoris artery but it may also arise from the medial circumflex artery.",
      "C": "A gracilis flap is not a viable option for breast reconstruction.",
      "D": "The obturator nerve supplies the motor innervation to the gracilis muscle."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A The gracilis muscle is a poor choice for perineal reconstruction due to its small width.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "1236Which statement is true?",
      "highlight_excellence": "Best answer: A The gracilis muscle is a poor choice for perineal reconstruction due to its small width.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "The gracilis muscle is a poor choice for perineal reconstruction due to its small width.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90678,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "Basic principles and basic science 38Interleukin-1 (IL-1) is released from:",
    "options": {
      "A": "The posterior radial collateral artery. B.The anterior radial collateral artery. C.The posterior ulnar collateral artery. D.The anterior ulnar collateral artery. E.The lateral circumflex humeral artery.",
      "B": "The nuclei and cytoplasm decrease in size.",
      "C": "Sebaceous gland content increases D.The dermis gradually thins.",
      "D": "The presence of subendothelial damage will cause anastomotic thrombosis and failure."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A The posterior radial collateral artery. B.The anterior radial collateral artery. C.The posterior ulnar collateral artery. D.The anterior ulnar collateral artery. E.The lateral circumflex humeral artery.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "Basic principles and basic science 38Interleukin-1 (IL-1) is released from:",
      "highlight_excellence": "Best answer: A The posterior radial collateral artery. B.The anterior radial collateral artery. C.The posterior ulnar collateral artery. D.The anterior ulnar collateral artery. E.The lateral circumflex humeral artery.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "The posterior radial collateral artery. B.The anterior radial collateral artery. C.The posterior ulnar collateral artery. D.The anterior ulnar collateral artery. E.The lateral circumflex humeral artery.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90679,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "Basic principles and basic science 53The rupture rate of silicone breast implants is approximately:",
    "options": {
      "A": "Microvascular spasm. B.Interstitial oedema. C.Microthrombi.",
      "B": "Patience of candidates and tutors.",
      "C": "Appropriate educational centres and training programs. 18D.Individualised advanced training.",
      "D": "Myoglobinuria."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Microvascular spasm. B.Interstitial oedema. C.Microthrombi.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "Basic principles and basic science 53The rupture rate of silicone breast implants is approximately:",
      "highlight_excellence": "Best answer: A Microvascular spasm. B.Interstitial oedema. C.Microthrombi.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Microvascular spasm. B.Interstitial oedema. C.Microthrombi.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90680,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "The parents of a 2-week old boy bring the child to your clinic because he was born with a unilateral complete syndactyly of the thumb and the index finger. He has no other congenital abnormality. You examine the patient and order an X-ray that shows it to be a complex complete syndactyly of the first web space. You decide to:",
    "options": {
      "A": "Wait until the child is 2 years of age or older to release the syndactyly without the need of a skin graft.",
      "B": "Wait until the child is 4 years old and release the syndactyly using a split thickness skin graft.",
      "C": "Wait for over 6 months and release the syndactyly under regional block to reduce the risk of anaesthesia and utilize a split thickness skin graft.",
      "D": "Wait until the child is 3-6 months old and release the syndactyly using a full thickness skin graft from the groin."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Wait until the child is 2 years of age or older to release the syndactyly without the need of a skin graft.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "The parents of a 2-week old boy bring the child to your clinic because he was born with a unilateral complete syndactyly",
      "highlight_excellence": "Best answer: A Wait until the child is 2 years of age or older to release the syndactyly without the need of a skin graft.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Wait until the child is 2 years of age or older to release the syndactyly without the need of a skin graft.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90681,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "Hypoplastic thumbs Type II of the Blauth classification can be treated successfully by:",
    "options": {
      "A": "Releasing the contracted first web space, reconstruction of the ulnar collateral ligament, transposition flap to release the first web space, a full thickness skin graft and opponensplasty.",
      "B": "Releasing the contracted first web space, reconstruction of the radial collateral ligament, transposition flap to release the first web space, a full thickness skin graft and opponensplasty.",
      "C": "Amputation of the hypoplastic thumb and pollicisation of the index finger with use of a full thickness skin graft.",
      "D": "Amputation of the hypoplastic thumb and pollicisation of the small finger with a split thickness skin graft."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Releasing the contracted first web space, reconstruction of the ulnar collateral ligament, transposition flap to release the first web space, a full thickness skin graft and opponensplasty.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "Hypoplastic thumbs Type II of the Blauth classification can be treated successfully by:",
      "highlight_excellence": "Best answer: A Releasing the contracted first web space, reconstruction of the ulnar collateral ligament, transposition flap to release the first web space, a full thickness skin graft and opponensplasty.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Releasing the contracted first web space, reconstruction of the ulnar collateral ligament, transposition flap to release the first web space, a full thickness skin graft and opponensplasty.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90682,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "Of the extensor tendon compartments on the37 dorsum of the wrist:",
    "options": {
      "A": "The extensor pollicis longus (EPL) alters direction around the ulnar styloid.",
      "B": "The extensor indicis proprius (EIP) shares a compartment with extensor digitorum communis (EDC).",
      "C": "The first compartment contains the extensor carpi radialis longus (ECRL) and extensor carpi radialis brevis (ECRB).",
      "D": "The posterior interosseous nerve runs in the third compartment."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A The extensor pollicis longus (EPL) alters direction around the ulnar styloid.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "Of the extensor tendon compartments on the37 dorsum of the wrist:",
      "highlight_excellence": "Best answer: A The extensor pollicis longus (EPL) alters direction around the ulnar styloid.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "The extensor pollicis longus (EPL) alters direction around the ulnar styloid.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90683,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "Of the bones in the carpus:",
    "options": {
      "A": "The scaphoid is the largest bone.",
      "B": "40% of the blood supply of the scaphoid enters via the waist of the bone.",
      "C": "40% of the scaphoid surface is covered with articular cartilage.",
      "D": "The kinetic forces of the carpus produce a tendency for the scaphoid to extend."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A The scaphoid is the largest bone.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "Of the bones in the carpus:",
      "highlight_excellence": "Best answer: A The scaphoid is the largest bone.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "The scaphoid is the largest bone.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90684,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "The palmar aponeurosis:",
    "options": {
      "A": "Single extremity involvement. B.Stiff elbow.",
      "B": "Is inserted into the flexor digitorum profundus tendons.",
      "C": "Stiff shoulder. D.Stiff fingers. E.Absent thumb.",
      "D": "Is inserted mainly into the bases of the proximal phalanges and the flexor sheaths."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Single extremity involvement. B.Stiff elbow.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "The palmar aponeurosis:",
      "highlight_excellence": "Best answer: A Single extremity involvement. B.Stiff elbow.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Single extremity involvement. B.Stiff elbow.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90685,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "11Which nerve is not commonly used as a source of donor action in nerve transfer for treatment of brachial plexus injuries?",
    "options": {
      "A": "The median nerve enters the forearm between the two heads of the supinator muscle.",
      "B": "The posterior interosseous nerve enters the forearm between brachioradialis and extensor carpi radialis longus (ECRL).",
      "C": "The anterior interosseous nerve runs on the interosseous membrane between flexor pollicis longus (FPL) and flexor digitorum profundus (FDP).",
      "D": "The median nerve ends by supplying the wrist joint and no other more distal structure."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A The median nerve enters the forearm between the two heads of the supinator muscle.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "11Which nerve is not commonly used as a source of donor action in nerve transfer for treatment of brachial plexus injuri",
      "highlight_excellence": "Best answer: A The median nerve enters the forearm between the two heads of the supinator muscle.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "The median nerve enters the forearm between the two heads of the supinator muscle.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90687,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "22In the finger, what is the usual relationship of the digital nerve to the digital artery?",
    "options": {
      "A": "Elbow pain and stiffness of all digits.",
      "B": "Night pain and delayed union of the callus. C.Pin tract infection.",
      "C": "Brown pigment of the skin. D.Kidney malformation.",
      "D": "A and C."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Elbow pain and stiffness of all digits.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "22In the finger, what is the usual relationship of the digital nerve to the digital artery?",
      "highlight_excellence": "Best answer: A Elbow pain and stiffness of all digits.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Elbow pain and stiffness of all digits.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90688,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "33Which is correct in relation to replantation of a digit?",
    "options": {
      "A": "The intercostal nerves are often transferred to the median nerve.",
      "B": "The phrenic nerve cannot be used because of the risk of respiratory compromise.",
      "C": "The spinal accessory nerve causes complete paralysis of trapezius. D.The axillary nerve can be innervated by the nerves to triceps.",
      "D": "Is not successful when cold ischaemia exceeds 24 hours. E.Is more successful with postoperative IV heparin. 34In nerve transfer for brachial plexus injury:"
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A The intercostal nerves are often transferred to the median nerve.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "33Which is correct in relation to replantation of a digit?",
      "highlight_excellence": "Best answer: A The intercostal nerves are often transferred to the median nerve.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "The intercostal nerves are often transferred to the median nerve.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90689,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "35A 43-year-old woman has a pinpoint area of tenderness at the base of the nail of the left ring finger. The area is painful to touch and sensitive to cold. Physical examination of the finger shows a deformity of the nail plate. Which of the following is the most likely diagnosis?",
    "options": {
      "A": "May present as Dupuytren’s disease. B.May mimic infection.",
      "B": "Embryonic rest.",
      "C": "May mimic melanoma.",
      "D": "Spreads to lymph nodes."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A May present as Dupuytren’s disease. B.May mimic infection.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "35A 43-year-old woman has a pinpoint area of tenderness at the base of the nail of the left ring finger. The area is pai",
      "highlight_excellence": "Best answer: A May present as Dupuytren’s disease. B.May mimic infection.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "May present as Dupuytren’s disease. B.May mimic infection.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90690,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "46In carpal tunnel syndrome which is false? 48A.There is a 25% incidence in males.",
    "options": {
      "A": "Compression in the first part results in sensory and motor palsy. B.Compression in the third part results in sensory symptoms only.",
      "B": "Medial intermuscular septum. C.Osbourne’s canal.",
      "C": "Compression in the first portion of the second part results in motor symptoms only.",
      "D": "Can cause Ramsay Hunt syndrome."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Compression in the first part results in sensory and motor palsy. B.Compression in the third part results in sensory symptoms only.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "46In carpal tunnel syndrome which is false? 48A.There is a 25% incidence in males.",
      "highlight_excellence": "Best answer: A Compression in the first part results in sensory and motor palsy. B.Compression in the third part results in sensory symptoms only.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Compression in the first part results in sensory and motor palsy. B.Compression in the third part results in sensory symptoms only.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90691,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "A.On the right is associated with Poland’s syndrome.",
    "options": {
      "A": "Stelling Type A can be treated by ligation. B.Ligation leaves a nubbin.",
      "B": "The ECRB/L are available for transfer.",
      "C": "Reconstruction of the ulnar collateral ligament is necessary.",
      "D": "Is associated with Ellis van Creveld and Lawrence Moon Bardet Biedl syndromes."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Stelling Type A can be treated by ligation. B.Ligation leaves a nubbin.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "A.On the right is associated with Poland’s syndrome.",
      "highlight_excellence": "Best answer: A Stelling Type A can be treated by ligation. B.Ligation leaves a nubbin.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Stelling Type A can be treated by ligation. B.Ligation leaves a nubbin.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90692,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "63Which one of the following components of a limb allograft will elicit the most and the least cellular immune response following transplantation?",
    "options": {
      "A": "Web creep is less likely to occur if the separation is performed after age two.",
      "B": "Is associated with maternal diabetes. C.Classification includes shovel hand. D.Causes no functional problems.",
      "C": "Dupuytren’s contracture.",
      "D": "Osteoarthritis of the CMC joint of the thumb. E.An interosseous ganglion of the scaphoid. 70Regarding syndactyly:"
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Web creep is less likely to occur if the separation is performed after age two.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "63Which one of the following components of a limb allograft will elicit the most and the least cellular immune response ",
      "highlight_excellence": "Best answer: A Web creep is less likely to occur if the separation is performed after age two.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Web creep is less likely to occur if the separation is performed after age two.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90693,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "71In the surgical treatment of trigger finger, what structure is incised?",
    "options": {
      "A": "Anti-TNF alpha prevents articular destruction and tendon rupture. B.Rheumatoid nodules can be treated successfully by intra-lesional steroids.",
      "B": "Radial tunnel syndrome. C.Carpal pathology.",
      "C": "A positive response to rheumatoid disease modifying agents is one of the diagnostic features.",
      "D": "Thumb surgery is considered a low-risk, high-benefit procedure."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Anti-TNF alpha prevents articular destruction and tendon rupture. B.Rheumatoid nodules can be treated successfully by intra-lesional steroids.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "71In the surgical treatment of trigger finger, what structure is incised?",
      "highlight_excellence": "Best answer: A Anti-TNF alpha prevents articular destruction and tendon rupture. B.Rheumatoid nodules can be treated successfully by intra-lesional steroids.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Anti-TNF alpha prevents articular destruction and tendon rupture. B.Rheumatoid nodules can be treated successfully by intra-lesional steroids.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90694,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "75Which one of the following is a diagnostic criterion for rheumatoid arthritis according to the American Academy of Rheumatology?",
    "options": {
      "A": "Index - 5° DIP joint, 40° PIP joint, 25° MCP joint. 58B.Index - 10° DIP joint, 10° PIP joint, neutral MCP joint. C.Thumb - neutral IP joint, neutral MCP joint.",
      "B": "The ulnar collateral ligament is obstructed by extensor pollicis longus (EPL). Multiple Choice Questions in Plastic Surgery",
      "C": "The ulnar collateral ligament is obstructed by extensor pollicis brevis (EPB).",
      "D": "Thumb - neutral IP joint, 45° MCP joint."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Index - 5° DIP joint, 40° PIP joint, 25° MCP joint. 58B.Index - 10° DIP joint, 10° PIP joint, neutral MCP joint. C.Thumb - neutral IP joint, neutral MCP joint.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "75Which one of the following is a diagnostic criterion for rheumatoid arthritis according to the American Academy of Rhe",
      "highlight_excellence": "Best answer: A Index - 5° DIP joint, 40° PIP joint, 25° MCP joint. 58B.Index - 10° DIP joint, 10° PIP joint, neutral MCP joint. C.Thumb - neutral IP joint, neutral MCP joint.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Index - 5° DIP joint, 40° PIP joint, 25° MCP joint. 58B.Index - 10° DIP joint, 10° PIP joint, neutral MCP joint. C.Thumb - neutral IP joint, neutral MCP joint.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90695,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "Regarding blepharoplasty, which of the following statements about the normal Caucasian eye is incorrect?",
    "options": {
      "A": "The lateral canthal angle is normally about 2mm superior to the medial angle giving the eyelids a slightly upward flare.",
      "B": "The highest point of the upper lid margin is just medial to the central papillary axis.",
      "C": "Typically the eyelid crease measures more in men than women.",
      "D": "The lower eyelid rests at the inferior limbus and its lowest point is just lateral to the pupil."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A The lateral canthal angle is normally about 2mm superior to the medial angle giving the eyelids a slightly upward flare.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "Regarding blepharoplasty, which of the following statements about the normal Caucasian eye is incorrect?",
      "highlight_excellence": "Best answer: A The lateral canthal angle is normally about 2mm superior to the medial angle giving the eyelids a slightly upward flare.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "The lateral canthal angle is normally about 2mm superior to the medial angle giving the eyelids a slightly upward flare.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90696,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "Which of the following is not true for a patient seeking lower lid blepharoplasty?",
    "options": {
      "A": "A Schirmer I test showing less than 10mm at 5 minutes would be a relative contra-indication.",
      "B": "A ‘snap’ test should always be performed.",
      "C": "Excess skin below the level of the orbital margin is usually corrected by lower lid blepharoplasty.",
      "D": "Blindness is a rare but recognised complication."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A A Schirmer I test showing less than 10mm at 5 minutes would be a relative contra-indication.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "Which of the following is not true for a patient seeking lower lid blepharoplasty?",
      "highlight_excellence": "Best answer: A A Schirmer I test showing less than 10mm at 5 minutes would be a relative contra-indication.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "A Schirmer I test showing less than 10mm at 5 minutes would be a relative contra-indication.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90697,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "11Which of the following is true of breast implants? 90A.Saline implants have a lower capsular contracture rate than silicone. B.Silicone implants have a higher deflation rate than saline.",
    "options": {
      "A": "Head elevation and ice packs. B.Antihypertensive medication. C.Diuretics and pain medication.",
      "B": "Haematoma.",
      "C": "Foreign body reaction mediated through myofibroblasts. D.Infection.",
      "D": "Canthotomy, mannitol and acetazolamide."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Head elevation and ice packs. B.Antihypertensive medication. C.Diuretics and pain medication.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "11Which of the following is true of breast implants? 90A.Saline implants have a lower capsular contracture rate than sil",
      "highlight_excellence": "Best answer: A Head elevation and ice packs. B.Antihypertensive medication. C.Diuretics and pain medication.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Head elevation and ice packs. B.Antihypertensive medication. C.Diuretics and pain medication.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90698,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "15A 45-year-old woman who recently underwent Lasik vision correction is seen in consultation for blepharoplasty. How long following the Lasik procedure would it be appropriate to operate on her?",
    "options": {
      "A": "Collagen injections only last 3 months or less.",
      "B": "Following dermal fat grafts, most of the fat is reabsorbed but 85% of the graft bulk persists.",
      "C": "Following autologous fat grafts there is a 25% decline in volume 12 months after injection.",
      "D": "Autologous fat should be injected in 5cc aliquots."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Collagen injections only last 3 months or less.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "15A 45-year-old woman who recently underwent Lasik vision correction is seen in consultation for blepharoplasty. How lon",
      "highlight_excellence": "Best answer: A Collagen injections only last 3 months or less.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Collagen injections only last 3 months or less.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90699,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "24Which of the following anatomic structures of the earorginatesfromthesecond(hyoid) pharyngeal arch?",
    "options": {
      "A": "0.2-0.5%. B.2-5%.",
      "B": "Arnold’s nerve supplies the lower lateral portion and inferior cranial surface of the ear.",
      "C": "10-20%. D.25-30%. E.50%. 27A 26-year-old woman of Asian descent who underwent rhinoplasty 5 years ago has erosion of the silicone rubber (Silastic) prothesis through the skin of the nasal tip. Physical examination shows a depressedscarinthisregion.Secondary 3 Aesthetic surgery",
      "D": "The antihelix, antitragus and lobule arise from the third branchial arch and drain to cervical nodes."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A 0.2-0.5%. B.2-5%.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "24Which of the following anatomic structures of the earorginatesfromthesecond(hyoid) pharyngeal arch?",
      "highlight_excellence": "Best answer: A 0.2-0.5%. B.2-5%.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "0.2-0.5%. B.2-5%.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90700,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "rhinoplasty is planned. Use of which of the following grafts for this procedure is most appropriate to minimise volume loss?",
    "options": {
      "A": "Open fat excision.",
      "B": "Tangential excision of the anterior bellies of digastric. Multiple Choice Questions in Plastic Surgery",
      "C": "Intracapsular excision of the superficial portion of the submandibular gland.",
      "D": "Release of the suprahyoid fascia for a high hyoid. E.Corset platysmaplasty."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Open fat excision.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "rhinoplasty is planned. Use of which of the following grafts for this procedure is most appropriate to minimise volume l",
      "highlight_excellence": "Best answer: A Open fat excision.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Open fat excision.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90701,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "31The following filler products are matched with various information. When quoted, the estimated number of patients upon which each has been used is correct in all cases. Which one answer is incorrect? 96A.Product: collagen, brand name Zyderm®, persistence 6 months, patients 5 million, granuloma rates (manufacturers) 1:2500.",
    "options": {
      "A": "Ruby (694) - black, blue and green.",
      "B": "Alexandrite (755) - black, blue and green.",
      "C": "Nd:YAG [KTP] (532) - black, blue and green. D.Nd:YAG (1064) - black, blue and green.",
      "D": "A peri-areolar approach is a poor option through which to adjust the inframammary fold (IMF)."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Ruby (694) - black, blue and green.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "31The following filler products are matched with various information. When quoted, the estimated number of patients upon",
      "highlight_excellence": "Best answer: A Ruby (694) - black, blue and green.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Ruby (694) - black, blue and green.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90702,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "35Which of the following is not a useful nerve block for peri-orbital surgery?",
    "options": {
      "A": "Medial superior palpebral artery. B.Superior arcade.",
      "B": "They should be excised directly with minimal margins.",
      "C": "Angular artery. D.Facial artery.",
      "D": "They can be treated with minimal-skin-excision lower lid blepharoplasty."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Medial superior palpebral artery. B.Superior arcade.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "35Which of the following is not a useful nerve block for peri-orbital surgery?",
      "highlight_excellence": "Best answer: A Medial superior palpebral artery. B.Superior arcade.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Medial superior palpebral artery. B.Superior arcade.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90703,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "In the hands of an inexperienced plastic surgeon, vertical scar mammaplasty is more predictable except:",
    "options": {
      "A": "The superior pedicle. B.The inferior pedicle.",
      "B": "Ptosis is most widely classified with the Rignoew classification.",
      "C": "In grade 2 ptosis the nipple-areola complex is at the IMF but not below.",
      "D": "The Benelli technique does not allow parenchymal repositioning."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A The superior pedicle. B.The inferior pedicle.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "In the hands of an inexperienced plastic surgeon, vertical scar mammaplasty is more predictable except:",
      "highlight_excellence": "Best answer: A The superior pedicle. B.The inferior pedicle.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "The superior pedicle. B.The inferior pedicle.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90704,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "reference to the dual plane breast augmentation technique?",
    "options": {
      "A": "A pedicled TRAM flap. B.A free TRAM flap.",
      "B": "Residual haematoma/seroma may contribute to capsule formation. C.Rinsing the pocket with antibacterial solution may reduce the capsular contracture rate.",
      "C": "A pedicled DIEP flap. D.A free DIEP flap.",
      "D": "Polyurethane (PU) implants have reduced capsular contracture rates."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A A pedicled TRAM flap. B.A free TRAM flap.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "reference to the dual plane breast augmentation technique?",
      "highlight_excellence": "Best answer: A A pedicled TRAM flap. B.A free TRAM flap.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "A pedicled TRAM flap. B.A free TRAM flap.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90705,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "20Which one of the following statements regarding autologous breast reconstruction is incorrect?",
    "options": {
      "A": "Tissue expanders do not work well for irradiated chest wall breast reconstructions.",
      "B": "The nipple must always be resected in cases of invasive breast cancer at less than 2.5cm of the areola.",
      "C": "Primaryreconstructionisusuallybetterthansecondary reconstruction.",
      "D": "Skin-sparing mastectomy yields more local recurrences."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Tissue expanders do not work well for irradiated chest wall breast reconstructions.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "20Which one of the following statements regarding autologous breast reconstruction is incorrect?",
      "highlight_excellence": "Best answer: A Tissue expanders do not work well for irradiated chest wall breast reconstructions.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Tissue expanders do not work well for irradiated chest wall breast reconstructions.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90706,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "26From the following options, which is the least appropriate for reconstruction of a 3cm diameter myelomeningocoele in a 3-month old with spina bifida?",
    "options": {
      "A": "Rectus abdominis muscle flap. B.Serratus anterior muscle flap. C.Pectoralis major muscle flap. D.Omentum.",
      "B": "Bilateral V to Y advancement flaps. C.Free anterolateral thigh (ALT) flap. D.Fasciocutaneous back flap.",
      "C": "Lejour’s technique includes ultrasound-assisted liposuction.",
      "D": "The superior techniques tend to ‘bottom out’ with time compared with inferior pedicle techniques."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Rectus abdominis muscle flap. B.Serratus anterior muscle flap. C.Pectoralis major muscle flap. D.Omentum.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "26From the following options, which is the least appropriate for reconstruction of a 3cm diameter myelomeningocoele in a",
      "highlight_excellence": "Best answer: A Rectus abdominis muscle flap. B.Serratus anterior muscle flap. C.Pectoralis major muscle flap. D.Omentum.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Rectus abdominis muscle flap. B.Serratus anterior muscle flap. C.Pectoralis major muscle flap. D.Omentum.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90707,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "29A 65-year-old man who underwent three-vessel coronary artery bypass grafting (CABG) 5 weeks ago comes to the office because he has a draining lesion near the sternotomy incision. The CABG procedure included harvest of the patient’s left internal mammary artery. Temperature is 38.7°C (101.7°). Physical examination shows a 3mm papule at the manubrium of the healed sternotomy incision. A CT scan of the chest shows a sinus tract leading to the internal sternal plate. In additiontoremovalofsternalwiresand debridement of the wound, which of the following is the most appropriate definitive management?",
    "options": {
      "A": "The flap should be inset in the position of wherever the mastectomy scar was opened.",
      "B": "The flap should be inset inferiorly in the IMF position and the skin between the new IMF and the mastectomy scar should in general be discarded.",
      "C": "The flap should be inset inferiorly in the IMF position and the skin between the new IMF and the mastectomy scar should in general not be discarded.",
      "D": "The most lateral position of the flap should be well behind the anterior axillary line."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A The flap should be inset in the position of wherever the mastectomy scar was opened.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "29A 65-year-old man who underwent three-vessel coronary artery bypass grafting (CABG) 5 weeks ago comes to the office be",
      "highlight_excellence": "Best answer: A The flap should be inset in the position of wherever the mastectomy scar was opened.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "The flap should be inset in the position of wherever the mastectomy scar was opened.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90708,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "Poland's syndrome is false?",
    "options": {
      "A": "Cutaneous perforators that do not originate from the deep inferior epigastric artery (peritoneocutaneous perforators) are rare findings when raising a DIEP flap.",
      "B": "Pre-operative evaluation of the vasculature of the abdominal wall has been shown to reduce operating times in perforator flap reconstruction.",
      "C": "The use of computed tomography of the abdominal wall has been shown to be cost-effective in some studies.",
      "D": "The radiation exposure associated with computed tomographic 124angiography of the abdominal wall is similar to a background radiation dose of 2.5 years."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Cutaneous perforators that do not originate from the deep inferior epigastric artery (peritoneocutaneous perforators) are rare findings when raising a DIEP flap.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "Poland's syndrome is false?",
      "highlight_excellence": "Best answer: A Cutaneous perforators that do not originate from the deep inferior epigastric artery (peritoneocutaneous perforators) are rare findings when raising a DIEP flap.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Cutaneous perforators that do not originate from the deep inferior epigastric artery (peritoneocutaneous perforators) are rare findings when raising a DIEP flap.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90709,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "burn surgery, which of the following statements141 do you consider to represent the greatest consensus view?",
    "options": {
      "A": "Reconstructive burns surgery should begin when all scars are fully mature.",
      "B": "In children reconstructive burn surgery should be delayed until puberty.",
      "C": "Reconstructive burn surgery is primarily involved with the release of contractures.",
      "D": "Reconstructive burn surgery should begin in the acute burn phase. E.The principal goal of reconstructive burns surgery is independent mobility."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Reconstructive burns surgery should begin when all scars are fully mature.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "burn surgery, which of the following statements141 do you consider to represent the greatest consensus view?",
      "highlight_excellence": "Best answer: A Reconstructive burns surgery should begin when all scars are fully mature.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Reconstructive burns surgery should begin when all scars are fully mature.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90710,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "Regarding Integra®, which of the following statements is true?",
    "options": {
      "A": "A major drawback in the use in burns reconstruction is that Integra® contracts.",
      "B": "Integra® is a biodegradable skin regeneration template.",
      "C": "Integra® contains cross-linked Type I bovine tendon collagen and a shark-derived glycosaminoglycan (chondroitin-4-sulphate).",
      "D": "Integra® is microbiologically inert and easily causes infection."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A A major drawback in the use in burns reconstruction is that Integra® contracts.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "Regarding Integra®, which of the following statements is true?",
      "highlight_excellence": "Best answer: A A major drawback in the use in burns reconstruction is that Integra® contracts.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "A major drawback in the use in burns reconstruction is that Integra® contracts.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90711,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "There are few published series of microsurgical reconstruction in post-burn paediatric patients. What is the principal reason for this?",
    "options": {
      "A": "Microvascular anastomosis has an unacceptably high failure rate after thermal injury in children.",
      "B": "Children with extensive post-burn contractures do not tolerate prolonged anaesthesia well.",
      "C": "The technical skills to perform these procedures are extremely demanding. 5 Burns and trauma",
      "D": "Where the technical skills and resources exist there are relatively few patients who can benefit from the surgery."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Microvascular anastomosis has an unacceptably high failure rate after thermal injury in children.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "There are few published series of microsurgical reconstruction in post-burn paediatric patients. What is the principal r",
      "highlight_excellence": "Best answer: A Microvascular anastomosis has an unacceptably high failure rate after thermal injury in children.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Microvascular anastomosis has an unacceptably high failure rate after thermal injury in children.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90712,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "10Whenconsideringextensiveburnscarring restricting movement of all joints of both upper limbs, which should be the order of priority for surgical release?",
    "options": {
      "A": "Gross mobility of the tooth. B.Root fracture.",
      "B": "The most severely deformed hand should be treated first, irrespective of dominance.",
      "C": "Exposed apices. D.None of the above. E.All of the above.",
      "D": "The axilla of the dominant hand should be treated first."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Gross mobility of the tooth. B.Root fracture.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "10Whenconsideringextensiveburnscarring restricting movement of all joints of both upper limbs, which should be the order",
      "highlight_excellence": "Best answer: A Gross mobility of the tooth. B.Root fracture.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Gross mobility of the tooth. B.Root fracture.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90713,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "12Which two of the following statements are true regarding pigmentary changes following burn injury? 145",
    "options": {
      "A": "Is common after chemical burns.",
      "B": "Is fatal at concentrations of 1 part per million.",
      "C": "Can be treated with amyl nitrite, sodium nitrite and sodium thiosulphate or hydroxycobalamin.",
      "D": "Can be treated with ethyl chloride and alkalinisation of urine."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Is common after chemical burns.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "12Which two of the following statements are true regarding pigmentary changes following burn injury? 145",
      "highlight_excellence": "Best answer: A Is common after chemical burns.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Is common after chemical burns.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90714,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "14Which one of the following statements do you think would have the greatest consensus support from a panel of international burns experts?",
    "options": {
      "A": "Following a deep head and neck burn with loss of the ear and an extensive peri-auricular scar it is possible to use tissue expansion in combination with a superficial temporoparietal fascial turnover flap to create a reasonable ear reconstruction.",
      "B": "When both upper and lower eyelids are involved in a scar, the lower lid should be replaced with a full thickness graft as it has less mobility and acts like a dam, while the upper lid is very mobile and a 146thin, split thickness graft should be used.",
      "C": "Following deep perineal burns in the very young male child it may be more appropriate to consider gender reassignment than attempt genital reconstruction which is fraught with difficulties.",
      "D": "The greatest challenge of the complex post-burn reconstruction is to match the reconstructive need with the potential donor tissue as every patient has a different pattern of scarring and deformity."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Following a deep head and neck burn with loss of the ear and an extensive peri-auricular scar it is possible to use tissue expansion in combination with a superficial temporoparietal fascial turnover flap to create a reasonable ear reconstruction.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "14Which one of the following statements do you think would have the greatest consensus support from a panel of internati",
      "highlight_excellence": "Best answer: A Following a deep head and neck burn with loss of the ear and an extensive peri-auricular scar it is possible to use tissue expansion in combination with a superficial temporoparietal fascial turnover flap to create a reasonable ear reconstruction.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Following a deep head and neck burn with loss of the ear and an extensive peri-auricular scar it is possible to use tissue expansion in combination with a superficial temporoparietal fascial turnover flap to create a reasonable ear reconstruction.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90715,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "16With regard to post-burn reconstruction of the female breast, which of the following statements is correct?",
    "options": {
      "A": "This is not a treatable condition. B.A foot drop splint.",
      "B": "The flaps can be re-advanced if contracture recurs.",
      "C": "Tibialis posterior to tibialis anterior transfer. D.Ankle fusion in the position of function.",
      "D": "It is not an ideal technique for contractures longer than approximately 10cm."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A This is not a treatable condition. B.A foot drop splint.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "16With regard to post-burn reconstruction of the female breast, which of the following statements is correct?",
      "highlight_excellence": "Best answer: A This is not a treatable condition. B.A foot drop splint.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "This is not a treatable condition. B.A foot drop splint.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90716,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "23With regards to forearm fasciotomies, which one149 is true?",
    "options": {
      "A": "A single, straight-line incision all the way along the ulnar and volar aspect of the forearm is a well-recognised approach for the volar fasciotomy.",
      "B": "Mannitol must be used adjunctively because the risk of disabling contracture is so high.",
      "C": "It is not possible to decompress both the carpal tunnel and Guyon’s canal through the same palmar incision.",
      "D": "Hyperbaric oxygen should never be used. E.None of the above is true."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A A single, straight-line incision all the way along the ulnar and volar aspect of the forearm is a well-recognised approach for the volar fasciotomy.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "23With regards to forearm fasciotomies, which one149 is true?",
      "highlight_excellence": "Best answer: A A single, straight-line incision all the way along the ulnar and volar aspect of the forearm is a well-recognised approach for the volar fasciotomy.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "A single, straight-line incision all the way along the ulnar and volar aspect of the forearm is a well-recognised approach for the volar fasciotomy.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90717,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "27With respect to paediatric burns which of the following is true?",
    "options": {
      "A": "The lateral head of gastrocnemius is larger than the medial head. B.Use of the medial head of gastrocnemius leads to a significant functional deficit",
      "B": "The technique of tangential excision was published by Janzekovic in 1970.",
      "C": "Use of a proximally based soleus flap leads to a significant functional deficit.",
      "D": "Scoring of the fascia of gastrocnemius can allow the flap to cover a larger area."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A The lateral head of gastrocnemius is larger than the medial head. B.Use of the medial head of gastrocnemius leads to a significant functional deficit",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "27With respect to paediatric burns which of the following is true?",
      "highlight_excellence": "Best answer: A The lateral head of gastrocnemius is larger than the medial head. B.Use of the medial head of gastrocnemius leads to a significant functional deficit",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "The lateral head of gastrocnemius is larger than the medial head. B.Use of the medial head of gastrocnemius leads to a significant functional deficit",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90718,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "30The ideal skin substitute would be:",
    "options": {
      "A": "46ml of human albumin solution.",
      "B": "384ml per 24 hours for Parkland’s formula of crystalloid. Multiple Choice Questions in Plastic Surgery",
      "C": "48ml of normal saline for the first period using Muir and Barclay’s regime.",
      "D": "200ml over 24 hours of hypertonic saline."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A 46ml of human albumin solution.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "30The ideal skin substitute would be:",
      "highlight_excellence": "Best answer: A 46ml of human albumin solution.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "46ml of human albumin solution.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90719,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "33Which one answer is true regarding osteomyelitis in the lower limb?",
    "options": {
      "A": "Full thickness electrical burn to the left leg of 12% body surface area.",
      "B": "Compartment pressures of 15mmHg. C.Compartment pressures of 20mmHg. D.Positive Homan’s sign.",
      "C": "Nephrotic syndrome.",
      "D": "Everyday exercise activities such as cycling, horseriding.153 E.Giant lipoma. 37The following is the best indication for lower limb fasciotomy:"
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Full thickness electrical burn to the left leg of 12% body surface area.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "33Which one answer is true regarding osteomyelitis in the lower limb?",
      "highlight_excellence": "Best answer: A Full thickness electrical burn to the left leg of 12% body surface area.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Full thickness electrical burn to the left leg of 12% body surface area.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90720,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "Which is true concerning reconstruction of the eyelids?167",
    "options": {
      "A": "Occurs in approximately 50% of patients following a submandibular gland excision.",
      "B": "Occurs when parasympathetic innervation of sweat glands is replaced by sympathetic innervation to the parotid gland.",
      "C": "Botulinum toxin is licensed for use in its symptomatic treatment. D.Was described by Lucja Frey-Gottesman in the 8th century.",
      "D": "The Tripier flap is a single stage bilobed flap suitable for reconstruction of the entire lower eyelid."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Occurs in approximately 50% of patients following a submandibular gland excision.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "Which is true concerning reconstruction of the eyelids?167",
      "highlight_excellence": "Best answer: A Occurs in approximately 50% of patients following a submandibular gland excision.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Occurs in approximately 50% of patients following a submandibular gland excision.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90721,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "With regards to the eyes and eyelids, which 168statement is correct?",
    "options": {
      "A": "The lacrimal gland secretes tears which are bilaminar, consisting of a superficial mucoprotein layer and a deep aqueous layer.",
      "B": "The lacrimal gland has three lobes.",
      "C": "Tears bend incoming light before it strikes the cornea with up to 2.0 diopters of refractile power.",
      "D": "The superior tarsal plate is 8-10mm in vertical height and the inferior tarsal plate is smaller at 4-6mm."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A The lacrimal gland secretes tears which are bilaminar, consisting of a superficial mucoprotein layer and a deep aqueous layer.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "With regards to the eyes and eyelids, which 168statement is correct?",
      "highlight_excellence": "Best answer: A The lacrimal gland secretes tears which are bilaminar, consisting of a superficial mucoprotein layer and a deep aqueous layer.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "The lacrimal gland secretes tears which are bilaminar, consisting of a superficial mucoprotein layer and a deep aqueous layer.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90722,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "11A 37-year-old woman is undergoing evaluation because of intermittent locking of the right temporomandibular joint (TMJ). She has no pain or crepitus of the joint. Interincisal opening is 40mm. MRI shows a non-reducing articular disk within the right TMJ. Which of the following is the most appropriate management?",
    "options": {
      "A": "Observation.",
      "B": "Intracapsular repositioning of the disk.",
      "C": "Intracapsular repositioning of the disk and reduction of the articular eminence.",
      "D": "Removal of the disk and placement of an interpositional temporalis fascia flap."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Observation.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "11A 37-year-old woman is undergoing evaluation because of intermittent locking of the right temporomandibular joint (TMJ",
      "highlight_excellence": "Best answer: A Observation.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Observation.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90723,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "Reconstructive head and neck surgery 12Maxillary sinus tumours:",
    "options": {
      "A": "Long duration.",
      "B": "Gender (women > men).",
      "C": "Idiopathic leukoplakia (i.e. occurring in non-smokers). D.Presence of Candida albicans.",
      "D": "A DCIA flap will not provide sufficient bony stock for restorative dentistry implant rehabilitation."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Long duration.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "Reconstructive head and neck surgery 12Maxillary sinus tumours:",
      "highlight_excellence": "Best answer: A Long duration.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Long duration.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90724,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "16A 32-year-old woman has near complete paralysis of the lower portion of the left side of the face 3 years after onset of Bell’s palsy. There has been no return of nerve function for the past year. Examination shows adequate function of the orbicularis oculi muscle and a good Bell’s reflex. Which of the following is the most appropriate management?",
    "options": {
      "A": "Continued observation.",
      "B": "Hypoglossal nerve transfer.",
      "C": "Placement of a gold weight in the eyelid and static brow lifting.",
      "D": "Neurotized free muscle transfer using innervation from cross-face grafts."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Continued observation.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "16A 32-year-old woman has near complete paralysis of the lower portion of the left side of the face 3 years after onset ",
      "highlight_excellence": "Best answer: A Continued observation.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Continued observation.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90725,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "18A 7-year-old has cryptotia. Which of the following operative techniques is most appropriate for173 correction?",
    "options": {
      "A": "A Bjork flap is an inferiorly-based U-shaped flap of anterior tracheal wall.",
      "B": "It is best to enter the trachea above the first cartilaginous ring.",
      "C": "The tracheal rings are located between the thyroid cartilage and the manubrium.",
      "D": "The parathyroid glands need to be seen and preserved during the procedure."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A A Bjork flap is an inferiorly-based U-shaped flap of anterior tracheal wall.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "18A 7-year-old has cryptotia. Which of the following operative techniques is most appropriate for173 correction?",
      "highlight_excellence": "Best answer: A A Bjork flap is an inferiorly-based U-shaped flap of anterior tracheal wall.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "A Bjork flap is an inferiorly-based U-shaped flap of anterior tracheal wall.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90726,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "20Concerning acute rejection in composite tissue transplantation, which one of the following statements is incorrect?",
    "options": {
      "A": "Is primarily T-cell-mediated.",
      "B": "Is reversible in almost all cases.",
      "C": "Topical immunosuppressives have no role in its treatment.",
      "D": "Is characterised by perivascular infiltration of lymphocytes in the upper and mid dermis."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Is primarily T-cell-mediated.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "20Concerning acute rejection in composite tissue transplantation, which one of the following statements is incorrect?",
      "highlight_excellence": "Best answer: A Is primarily T-cell-mediated.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Is primarily T-cell-mediated.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90727,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "23Based on current knowledge which of the following is a better estimate of the risk of acute rejectionofthefacialflapinfacial transplantation?",
    "options": {
      "A": "Pedicled flaps are more reliable than free flaps.",
      "B": "Soutar described the use of the radial forearm flap in oral cavity reconstruction.",
      "C": "The soft palate is in the oral cavity. D.Always requires a free flap.",
      "D": "Is superior to CT for assessing bony involvement."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Pedicled flaps are more reliable than free flaps.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "23Based on current knowledge which of the following is a better estimate of the risk of acute rejectionofthefacialflapin",
      "highlight_excellence": "Best answer: A Pedicled flaps are more reliable than free flaps.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Pedicled flaps are more reliable than free flaps.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90728,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "26Which two of the following anatomic structures of the ear originates from the second (hyoid) pharyngeal arch?",
    "options": {
      "A": "Nasal polyps have a 2% malignant potential. B.Are mainly adenocarcinoma.",
      "B": "Squamous carcinoma. C.Basal carcinoma.",
      "C": "Most commonly present in the <50-year age group. D.Are commonest in Western Europe.",
      "D": "Hypertrophic/keloid scar. E.None of the above. 28Concerning tumours of the paranasal sinuses:"
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Nasal polyps have a 2% malignant potential. B.Are mainly adenocarcinoma.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "26Which two of the following anatomic structures of the ear originates from the second (hyoid) pharyngeal arch?",
      "highlight_excellence": "Best answer: A Nasal polyps have a 2% malignant potential. B.Are mainly adenocarcinoma.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Nasal polyps have a 2% malignant potential. B.Are mainly adenocarcinoma.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90729,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "Reconstructive head and neck surgery 29The paramedian forehead flap receives its blood supply from:",
    "options": {
      "A": "No special necessary tests.",
      "B": "Zooming out to least magnification and focusing till the picture is sharp.",
      "C": "Zooming in to most magnification and focusing till the picture is sharp.",
      "D": "Zooming to the level you want to work at and focusing till the picture is sharp."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A No special necessary tests.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "Reconstructive head and neck surgery 29The paramedian forehead flap receives its blood supply from:",
      "highlight_excellence": "Best answer: A No special necessary tests.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "No special necessary tests.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90730,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "Reconstructive head and neck surgery 36The male ear (choose 2):",
    "options": {
      "A": "Infant - thyroglossal duct cyst - most frequent.",
      "B": "Adolescent - thyroglossal duct cyst - most frequent. C.Adult - thyroglossal duct cyst - most frequent.",
      "C": "Chondrodermatitis. D.Basal cell carcinoma. E.Gouty tophus. 39The following cystic tumours of the neck are not appropriately matched to their frequency of occurrence and age of occurrence:",
      "D": "Adult - cervical thymic cyst - very uncommon."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Infant - thyroglossal duct cyst - most frequent.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "Reconstructive head and neck surgery 36The male ear (choose 2):",
      "highlight_excellence": "Best answer: A Infant - thyroglossal duct cyst - most frequent.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Infant - thyroglossal duct cyst - most frequent.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90731,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "41What method did Sushruta recommend for nasal 180reconstruction?",
    "options": {
      "A": "Boys. B. Girls.",
      "B": "Forehead flap. C.Arm flap.",
      "C": "On the right. D.On the left. E.Twins.",
      "D": "Skin graft. E.Cheek flap. 42Microtia is more common in (choose two):"
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Boys. B. Girls.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "41What method did Sushruta recommend for nasal 180reconstruction?",
      "highlight_excellence": "Best answer: A Boys. B. Girls.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Boys. B. Girls.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90732,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "Reconstructive head and neck surgery",
    "options": {
      "A": "Is likely to be in the deep lobe. B.Is likely to be a metastasis.",
      "B": "It is associated with mydriasis in Horner’s syndrome. C.Gold weights are usually adequate treatment.",
      "C": "Will tend to produce gustatory sweating. D.Rarely involves the facial nerve.",
      "D": "Muller’s muscle may be dysfunctional."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Is likely to be in the deep lobe. B.Is likely to be a metastasis.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "Reconstructive head and neck surgery",
      "highlight_excellence": "Best answer: A Is likely to be in the deep lobe. B.Is likely to be a metastasis.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Is likely to be in the deep lobe. B.Is likely to be a metastasis.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90733,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "49Which of the following statements is false regarding face transplantation?",
    "options": {
      "A": "The composite flap could be based on the superficial temporal artery.",
      "B": "The composite flap could be based on the facial artery.",
      "C": "Tacrolimus has shown promising results in experimental studies linking it to faster neural regrowth.",
      "D": "Partial face transplants have been performed in France, USA and China."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A The composite flap could be based on the superficial temporal artery.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "49Which of the following statements is false regarding face transplantation?",
      "highlight_excellence": "Best answer: A The composite flap could be based on the superficial temporal artery.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "The composite flap could be based on the superficial temporal artery.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90734,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "Reconstructive head and neck surgery 50The parotid gland:",
    "options": {
      "A": "The pathophysiology of mandibular invasion from an oral cancer alters after radiotherapy.",
      "B": "Usually leads to decreased sensation in the lip. C.Makes a tumour inoperable.",
      "C": "Receives sympathetic supply from the glossopharyngeal nerve via the otic ganglion.",
      "D": "The best way of determining bony invasion is with a bone scan."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A The pathophysiology of mandibular invasion from an oral cancer alters after radiotherapy.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "Reconstructive head and neck surgery 50The parotid gland:",
      "highlight_excellence": "Best answer: A The pathophysiology of mandibular invasion from an oral cancer alters after radiotherapy.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "The pathophysiology of mandibular invasion from an oral cancer alters after radiotherapy.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90735,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "52Which one of the following is not a recognised cause of facial palsy?",
    "options": {
      "A": "In adults, the vascular pedicle to the fibula flap is usually limited in length to approximately 12cm.",
      "B": "Arteria peronea magna is a relative contraindication to fibula flap harvest.",
      "C": "The double-barrelled fibula flap configuration was first reported by Jupiter et al for long bone reconstruction.",
      "D": "According to Mathes and Nahai, the fibula bone, like the pectoralis muscle, has a Type V vascular pattern."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A In adults, the vascular pedicle to the fibula flap is usually limited in length to approximately 12cm.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "52Which one of the following is not a recognised cause of facial palsy?",
      "highlight_excellence": "Best answer: A In adults, the vascular pedicle to the fibula flap is usually limited in length to approximately 12cm.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "In adults, the vascular pedicle to the fibula flap is usually limited in length to approximately 12cm.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90736,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "Thefollowingarehistopathologicalterms correctly matched with their meanings:",
    "options": {
      "A": "Parakeratosis: where nucleated cells are found in the superficial epidermis.",
      "B": "Maturation: where naevocellular naevi become more superficially cited in the epidermis.",
      "C": "Peripheral pallisading: a feature of poorly differentiated squamous carcinoma.",
      "D": "Erythroplakia - red lesions of the oral mucosa. E.Leukoplakia - white lesions of the oral mucosa."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Parakeratosis: where nucleated cells are found in the superficial epidermis.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "Thefollowingarehistopathologicalterms correctly matched with their meanings:",
      "highlight_excellence": "Best answer: A Parakeratosis: where nucleated cells are found in the superficial epidermis.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Parakeratosis: where nucleated cells are found in the superficial epidermis.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90737,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "Which of the following is incorrect about cutaneous squamous cell carcinoma?",
    "options": {
      "A": "It is more common than BCC.",
      "B": "It has a higher metastatic rate than BCC.",
      "C": "It has an increased incidence in the immunosuppressed.",
      "D": "SCC of the lip has a higher metastatic rate to lymph nodes."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A It is more common than BCC.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "Which of the following is incorrect about cutaneous squamous cell carcinoma?",
      "highlight_excellence": "Best answer: A It is more common than BCC.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "It is more common than BCC.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90738,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "Which of the following statements is correct?",
    "options": {
      "A": "The hamstring muscles include semimembranosus, semitendinosus and gracilis.",
      "B": "The dominant action of biceps femoris is to flex the hip joint.",
      "C": "The sciatic nerve is accessible in the angle between the lower border of gluteus maximus and the medial border of the long head of biceps femoris.",
      "D": "All but one of the motor branches of the sciatic nerve arises from its medial side, making the lateral side the safest side to dissect along."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A The hamstring muscles include semimembranosus, semitendinosus and gracilis.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "Which of the following statements is correct?",
      "highlight_excellence": "Best answer: A The hamstring muscles include semimembranosus, semitendinosus and gracilis.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "The hamstring muscles include semimembranosus, semitendinosus and gracilis.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90739,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "16Which of the following is not correct with respect to the axilla?",
    "options": {
      "A": "Nodular histological types have no radial growth phase. B.Acral melanomas account for 30% of lesions.",
      "B": "The posterior wall comprises latissimus dorsi, teres major and subscapularis.",
      "C": "Lentigo maligna is the commonest subtype.",
      "D": "Superficial spreading melanoma is common on the palms of the hand."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Nodular histological types have no radial growth phase. B.Acral melanomas account for 30% of lesions.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "16Which of the following is not correct with respect to the axilla?",
      "highlight_excellence": "Best answer: A Nodular histological types have no radial growth phase. B.Acral melanomas account for 30% of lesions.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Nodular histological types have no radial growth phase. B.Acral melanomas account for 30% of lesions.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90740,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "21Which of the following prognostic features of melanoma is not included in the AJCC staging system?",
    "options": {
      "A": "Ulceration.209",
      "B": "Mitotic rate.",
      "C": "Clarke’s level of invasion.",
      "D": "Micrometastasis to lymph nodes. E.Lactate dehydrogenase (LDH)."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Ulceration.209",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "21Which of the following prognostic features of melanoma is not included in the AJCC staging system?",
      "highlight_excellence": "Best answer: A Ulceration.209",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Ulceration.209",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90741,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "24With respect to sentinel lymph node biopsy in melanoma, which is the best answer?",
    "options": {
      "A": "The axillary vein lies lateral to the axillary artery.",
      "B": "The average number of lymph nodes in each axilla is between 70 and 80.",
      "C": "Tributaries of the axillary vein should all be divided.",
      "D": "The thoracodorsal artery must be sacrificed to allow clearance of level 3 nodes."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A The axillary vein lies lateral to the axillary artery.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "24With respect to sentinel lymph node biopsy in melanoma, which is the best answer?",
      "highlight_excellence": "Best answer: A The axillary vein lies lateral to the axillary artery.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "The axillary vein lies lateral to the axillary artery.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90742,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "Cutaneous malignancy and sarcoma 27Melanomas arise from:",
    "options": {
      "A": "Nodular lesions grow downward deep into the dermis as cords and islands of variably basophilic cells with hyperchromatic nuclei, embedded in a mucinous matrix and are often surrounded by fibroblasts and lymphocytes.",
      "B": "Perivascular and perineural invasion are features associated with more aggressive tumours.",
      "C": "The reported incomplete excision rate of BCCs is approximately 7%.",
      "D": "The estimation of surgical excision margins is often inaccurate."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Nodular lesions grow downward deep into the dermis as cords and islands of variably basophilic cells with hyperchromatic nuclei, embedded in a mucinous matrix and are often surrounded by fibroblasts and lymphocytes.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "Cutaneous malignancy and sarcoma 27Melanomas arise from:",
      "highlight_excellence": "Best answer: A Nodular lesions grow downward deep into the dermis as cords and islands of variably basophilic cells with hyperchromatic nuclei, embedded in a mucinous matrix and are often surrounded by fibroblasts and lymphocytes.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Nodular lesions grow downward deep into the dermis as cords and islands of variably basophilic cells with hyperchromatic nuclei, embedded in a mucinous matrix and are often surrounded by fibroblasts and lymphocytes.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90743,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "36Which of the following statements regarding sentinel lymph node biopsy in melanoma is false?",
    "options": {
      "A": "Nodular is the commonest subtype.",
      "B": "Is most commonly found on the scalp of men and the backs of women.",
      "C": "Is most commonly found on the legs of men and the backs of women.",
      "D": "In situ lesions have a Breslow thickness less than 0.15mm."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Nodular is the commonest subtype.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "36Which of the following statements regarding sentinel lymph node biopsy in melanoma is false?",
      "highlight_excellence": "Best answer: A Nodular is the commonest subtype.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Nodular is the commonest subtype.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90744,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "Cutaneous malignancy and sarcoma",
    "options": {
      "A": "Metastasis never occurs.",
      "B": "Is the most commonly occuring cancer of the lower lip.",
      "C": "A 4mm margin on the face gives a cure rate of greater than 90%. D.Are never pigmented.",
      "D": "Is a precursor of squamous carcinoma in situ. E.Most commonly affects the nipple. 42In relation to basal cell carcinoma:215"
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Metastasis never occurs.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "Cutaneous malignancy and sarcoma",
      "highlight_excellence": "Best answer: A Metastasis never occurs.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Metastasis never occurs.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90745,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "11Regarding hemifacial atrophy, which is correct?",
    "options": {
      "A": "Flip-flap (Mathieu) repair is a two-stage repair.",
      "B": "Meatal advancement with glanuloplasty incorporated (MAGPI) and Snodgrass (tubularised incised plate [TIP]) repairs are BOTH single-stage repairs.",
      "C": "Full thickness skin grafts must come from the buccal mucosa. D.Homan’s test is critical before commencing surgery.",
      "D": "Should be treated surgically within 6 months of diagnosis."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Flip-flap (Mathieu) repair is a two-stage repair.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "11Regarding hemifacial atrophy, which is correct?",
      "highlight_excellence": "Best answer: A Flip-flap (Mathieu) repair is a two-stage repair.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Flip-flap (Mathieu) repair is a two-stage repair.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90746,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "Paediatric plastic surgery 21Microtia is associated with all except:",
    "options": {
      "A": "Is a congenital defect of the primary palate posterior to the incisive foramen.",
      "B": "Is a congenital defect of the hard palate anterior to the incisive foramen.",
      "C": "Can occur as submucous clefts which often present only with speech abnormalities.",
      "D": "Is twice as common in males."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Is a congenital defect of the primary palate posterior to the incisive foramen.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "Paediatric plastic surgery 21Microtia is associated with all except:",
      "highlight_excellence": "Best answer: A Is a congenital defect of the primary palate posterior to the incisive foramen.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Is a congenital defect of the primary palate posterior to the incisive foramen.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90747,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "Paediatric plastic surgery 28The facial bipartition technique is best suited to the correction of:",
    "options": {
      "A": "Plagiocephaly. B.Trigonocephaly. C.Turricephaly.",
      "B": "An asymmetrical skull.",
      "C": "A long skull - anteroposterior. D.A wide skull.",
      "D": "Brachycephaly. E.Epilepsy attacks."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Plagiocephaly. B.Trigonocephaly. C.Turricephaly.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "Paediatric plastic surgery 28The facial bipartition technique is best suited to the correction of:",
      "highlight_excellence": "Best answer: A Plagiocephaly. B.Trigonocephaly. C.Turricephaly.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Plagiocephaly. B.Trigonocephaly. C.Turricephaly.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90748,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "Paediatric plastic surgery 36Hemifacial microsomia (craniofacial microsomia):",
    "options": {
      "A": "Microtia.",
      "B": "Prominent ears. C.Stahl’s bar.",
      "C": "Treatments such as dermabrasion and CO2 laser are more effective after the age of 3.",
      "D": "Pre-auricular tags. E. Darwin’s tubercle. Multiple Choice Questions in Plastic Surgery"
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Microtia.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "Paediatric plastic surgery 36Hemifacial microsomia (craniofacial microsomia):",
      "highlight_excellence": "Best answer: A Microtia.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Microtia.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90749,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "44Trimming the margins and performing a straight line closure of the cleft lip was routine until this surgeon introduced his lateral triangular flap method. Who was he? 243",
    "options": {
      "A": "50% of babies proceed to full spontaneous recovery within 3 months.",
      "B": "Some elbow flexion is present.",
      "C": "The branches of the posterior cord are unaffected. D.The Oberlin’s transfer can be a useful procedure. E.Horner’s sign is usually present. 244",
      "D": "The pterygoid hamulus is absent."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A 50% of babies proceed to full spontaneous recovery within 3 months.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "44Trimming the margins and performing a straight line closure of the cleft lip was routine until this surgeon introduced",
      "highlight_excellence": "Best answer: A 50% of babies proceed to full spontaneous recovery within 3 months.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "50% of babies proceed to full spontaneous recovery within 3 months.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90750,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "Paediatric plastic surgery",
    "options": {
      "A": "Should ensure the antihelix marginally projects more than the helix. B.Can often be corrected with splitage at 2-3 years of age.",
      "B": "The von Langenbeck technique involves raising a unipedicled flap. C.Intravelar veloplasty involves repair of the nasal mucosa.",
      "C": "Is best undertaken at age 5.",
      "D": "Using the Mustardé and Chongchet (anterior scoring) techniques were both described in 1963 in the British Journal of Plastic Surgery."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Should ensure the antihelix marginally projects more than the helix. B.Can often be corrected with splitage at 2-3 years of age.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "Paediatric plastic surgery",
      "highlight_excellence": "Best answer: A Should ensure the antihelix marginally projects more than the helix. B.Can often be corrected with splitage at 2-3 years of age.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Should ensure the antihelix marginally projects more than the helix. B.Can often be corrected with splitage at 2-3 years of age.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90751,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "The following statements concerning the history of plastic surgery are true except:",
    "options": {
      "A": "Tagliacozzi was born in Bologna in 1545.",
      "B": "Kilner was the Nuffield Professor of Plastic Surgery in Oxford.",
      "C": "Tord Skoog was appointed Professor of Plastic Surgery in Uppsala in 1960.",
      "D": "Sushruta is credited with being the first to perform nasal reconstruction."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Tagliacozzi was born in Bologna in 1545.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "The following statements concerning the history of plastic surgery are true except:",
      "highlight_excellence": "Best answer: A Tagliacozzi was born in Bologna in 1545.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Tagliacozzi was born in Bologna in 1545.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90752,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "10Who first described the anatomical structures which cause chordee?",
    "options": {
      "A": "Carpue. B.Colley.",
      "B": "Swift.",
      "C": "Maharata. D.Kooma.",
      "D": "Anger. E. Galen. 11Who wrote satirically about Tagliacozzi? 266A.Molière."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Carpue. B.Colley.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "10Who first described the anatomical structures which cause chordee?",
      "highlight_excellence": "Best answer: A Carpue. B.Colley.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Carpue. B.Colley.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  },
  {
    "id": 90753,
    "specialty": "Plastic Surgery",
    "topic": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "question": "50Which one of fundamental procedures? the following is experimental true regarding microsurgical",
    "options": {
      "A": "Sun Lee’s portocaval shunt operation in the rat was the first published procedure initiating the development of experimental microsurgery.",
      "B": "Kidney transplantation in a rat was the first published experimental microsurgical procedure.",
      "C": "Anastomoses of microvessels can be performed by cuff technique only.",
      "D": "Tissue transplantation can not be completed without vascular anastomoses."
    },
    "answer": "A",
    "explanation": {
      "correct": "Best answer: A Sun Lee’s portocaval shunt operation in the rat was the first published procedure initiating the development of experimental microsurgery.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "sharp": {
      "set_the_stage": "50Which one of fundamental procedures? the following is experimental true regarding microsurgical",
      "highlight_excellence": "Best answer: A Sun Lee’s portocaval shunt operation in the rat was the first published procedure initiating the development of experimental microsurgery.",
      "address_gaps": "Discard distractors that do not fit the stem.",
      "review_learning_points": "Focus on the main exam pearl behind the answer.",
      "plan": "Memorize the key takeaway for revision.",
      "plan_for_improvement": "Memorize the key takeaway for revision."
    },
    "guideline": "",
    "takeaway": "Sun Lee’s portocaval shunt operation in the rat was the first published procedure initiating the development of experimental microsurgery.",
    "visualization": "",
    "_src_file": "plastic_surgery.js"
  }
]
]);
