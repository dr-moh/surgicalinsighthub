if (!window.QUESTIONS) window.QUESTIONS = [];
window.QUESTIONS.push(...[
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
  },
{
  "id": 1667,
  "specialty": "Plastic Surgery",
  "topic": "A.On the right is associated with Poland\u2019s syndrome.",
  "question": "A.On the right is associated with Poland\u2019s syndrome.",
  "options": {
    "A": "Stelling Type A can be treated by ligation. B.Ligation leaves a nubbin.",
    "B": "The ECRB/L are available for transfer.",
    "C": "Reconstruction of the ulnar collateral ligament is necessary.",
    "D": "Is associated with Ellis van Creveld and Lawrence Moon Bardet Biedl syndromes."
  },
  "answer": "A",
  "explanation": {
    "correct": "Stelling Type A can be treated by ligation. B.Ligation leaves a nubbin.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "A.On the right is associated with Poland\u2019s syndrome.",
    "H_highlight_excellence": "Stelling Type A can be treated by ligation. B.Ligation leaves a nubbin.",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "BSSH / reconstructive principles",
    "P_plan_for_improvement": "Stelling Type A can be treated by ligation"
  },
  "supplementary_callouts": {
    "guideline": "BSSH / reconstructive principles",
    "takeaway": "Stelling Type A can be treated by ligation",
    "visualization": ""
  },
  "discrepancy_flag": ""
},
{
  "id": 1633,
  "specialty": "Plastic Surgery",
  "topic": "16A 32-year-old woman has near complete paralysis of the lower portion of",
  "question": "16A 32-year-old woman has near complete paralysis of the lower portion of the left side of the face 3 years after onset of Bell\u2019s palsy. There has been no return of nerve function for the past year. Examination shows adequate function of the orbicularis oculi muscle and a good Bell\u2019s reflex. Which of the following is the most appropriate management?",
  "options": {
    "A": "Continued observation.",
    "B": "Hypoglossal nerve transfer.",
    "C": "Placement of a gold weight in the eyelid and static brow lifting.",
    "D": "Neurotized free muscle transfer using innervation from cross-face grafts."
  },
  "answer": "A",
  "explanation": {
    "correct": "Continued observation.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "16A 32-year-old woman has near complete paralysis of the lower portion of",
    "H_highlight_excellence": "Continued observation.",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "BSSH / reconstructive principles",
    "P_plan_for_improvement": "Continued observation"
  },
  "supplementary_callouts": {
    "guideline": "BSSH / reconstructive principles",
    "takeaway": "Continued observation",
    "visualization": ""
  },
  "discrepancy_flag": ""
},
{
  "id": 1690,
  "specialty": "Plastic Surgery",
  "topic": "Regarding Integra\u00ae, which of the following statements is true?",
  "question": "Regarding Integra\u00ae, which of the following statements is true?",
  "options": {
    "A": "A major drawback in the use in burns reconstruction is that Integra\u00ae contracts.",
    "B": "Integra\u00ae is a biodegradable skin regeneration template.",
    "C": "Integra\u00ae contains cross-linked Type I bovine tendon collagen and a shark-derived glycosaminoglycan (chondroitin-4-sulphate).",
    "D": "Integra\u00ae is microbiologically inert and easily causes infection."
  },
  "answer": "A",
  "explanation": {
    "correct": "",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "",
    "H_highlight_excellence": "",
    "A_address_the_gaps": "",
    "R_review_learning_points": "",
    "P_plan_for_improvement": ""
  },
  "supplementary_callouts": {
    "guideline": "",
    "takeaway": "",
    "visualization": ""
  },
  "discrepancy_flag": ""
},
{
  "id": 1650,
  "specialty": "Plastic Surgery",
  "topic": "29A 65-year-old man who underwent three-vessel coronary artery bypass grafting (CABG) 5",
  "question": "29A 65-year-old man who underwent three-vessel coronary artery bypass grafting (CABG) 5 weeks ago comes to the office because he has a draining lesion near the sternotomy incision. The CABG procedure included harvest of the patient\u2019s left internal mammary artery. Temperature is 38.7\u00b0C (101.7\u00b0). Physical examination shows a 3mm papule at the manubrium of the healed sternotomy incision. A CT scan of the chest shows a sinus tract leading to the internal sternal plate. In additiontoremovalofsternalwiresand debridement of the wound, which of the following is the most appropriate definitive management?",
  "options": {
    "A": "The flap should be inset in the position of wherever the mastectomy scar was opened.",
    "B": "The flap should be inset inferiorly in the IMF position and the skin between the new IMF and the mastectomy scar should in general be discarded.",
    "C": "The flap should be inset inferiorly in the IMF position and the skin between the new IMF and the mastectomy scar should in general not be discarded.",
    "D": "The most lateral position of the flap should be well behind the anterior axillary line."
  },
  "answer": "A",
  "explanation": {
    "correct": "The flap should be inset in the position of wherever the mastectomy scar was opened.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "29A 65-year-old man who underwent three-vessel coronary artery bypass grafting (CABG) 5",
    "H_highlight_excellence": "The flap should be inset in the position of wherever the mastectomy scar was opened.",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "BSSH / reconstructive principles",
    "P_plan_for_improvement": "The flap should be inset in the position of wherever the mastectomy scar was opened"
  },
  "supplementary_callouts": {
    "guideline": "BSSH / reconstructive principles",
    "takeaway": "The flap should be inset in the position of wherever the mastectomy scar was opened",
    "visualization": ""
  },
  "discrepancy_flag": ""
},
{
  "id": 1652,
  "specialty": "Plastic Surgery",
  "topic": "31The following filler products are matched with various information. When quoted, the",
  "question": "31The following filler products are matched with various information. When quoted, the estimated number of patients upon which each has been used is correct in all cases. Which one answer is incorrect? 96A.Product: collagen, brand name Zyderm\u00ae, persistence 6 months, patients 5 million, granuloma rates (manufacturers) 1:2500.",
  "options": {
    "A": "Ruby (694) - black, blue and green.",
    "B": "Alexandrite (755) - black, blue and green.",
    "C": "Nd:YAG [KTP] (532) - black, blue and green. D.Nd:YAG (1064) - black, blue and green.",
    "D": "A peri-areolar approach is a poor option through which to adjust the inframammary fold (IMF)."
  },
  "answer": "A",
  "explanation": {
    "correct": "Ruby (694) - black, blue and green.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "31The following filler products are matched with various information. When quoted, the",
    "H_highlight_excellence": "Ruby (694) - black, blue and green.",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "BSSH / reconstructive principles",
    "P_plan_for_improvement": "Ruby (694) - black, blue and green"
  },
  "supplementary_callouts": {
    "guideline": "BSSH / reconstructive principles",
    "takeaway": "Ruby (694) - black, blue and green",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1691,
  "specialty": "Plastic Surgery",
  "topic": "Regarding blepharoplasty, which of the following statements about the normal Caucasian eye",
  "question": "Regarding blepharoplasty, which of the following statements about the normal Caucasian eye is incorrect?",
  "options": {
    "A": "The lateral canthal angle is normally about 2mm superior to the medial angle giving the eyelids a slightly upward flare.",
    "B": "The highest point of the upper lid margin is just medial to the central papillary axis.",
    "C": "Typically the eyelid crease measures more in men than women.",
    "D": "The lower eyelid rests at the inferior limbus and its lowest point is just lateral to the pupil."
  },
  "answer": "A",
  "explanation": {
    "correct": "The lateral canthal angle is normally about 2mm superior to the medial angle giving the eyelids a slightly",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Regarding blepharoplasty, which of the following statements about the normal Caucasian eye",
    "H_highlight_excellence": "The lateral canthal angle is normally about 2mm superior to the medial angle giving the eyelids a slightly",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "BSSH / reconstructive principles",
    "P_plan_for_improvement": "The lateral canthal angle is normally about 2mm superior to the medial angle giving the eyelids"
  },
  "supplementary_callouts": {
    "guideline": "BSSH / reconstructive principles",
    "takeaway": "The lateral canthal angle is normally about 2mm superior to the medial angle giving the eyelids a slightly",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1625,
  "specialty": "Plastic Surgery",
  "topic": "11A 37-year-old woman is undergoing evaluation because of intermittent locking of the",
  "question": "11A 37-year-old woman is undergoing evaluation because of intermittent locking of the right temporomandibular joint (TMJ). She has no pain or crepitus of the joint. Interincisal opening is 40mm. MRI shows a non-reducing articular disk within the right TMJ. Which of the following is the most appropriate management?",
  "options": {
    "A": "Observation.",
    "B": "Intracapsular repositioning of the disk.",
    "C": "Intracapsular repositioning of the disk and reduction of the articular eminence.",
    "D": "Removal of the disk and placement of an interpositional temporalis fascia flap."
  },
  "answer": "A",
  "explanation": {
    "correct": "**Surgical Mechanism:** The temporomandibular joint (TMJ) is a complex ginglymoarthrodial joint. Internal derangement, specifically a non-reducing articular disk, means the disk is permanently displaced anteriorly relative to the condyle and does not recapture during jaw opening. While this can cause locking and pain, in some individuals, the retrodiscal tissues adapt, forming a 'pseudodisk,' allowing for functional movement without symptoms.\n**Clinical Execution:** The decision for TMJ intervention is primarily driven by symptoms (pain, severe functional limitation) and failure of conservative management. In this case, the patient has adapted to the non-reducing disk, demonstrating no pain, no crepitus, and a functional interincisal opening of 40mm. Surgical intervention carries risks and is not justified for an asymptomatic condition, even with imaging findings of internal derangement. Observation allows for continued monitoring and avoids unnecessary invasive procedures.",
    "A": "Observation is appropriate because the patient has adapted to the non-reducing disk, evidenced by the absence of pain, crepitus, and adequate interincisal opening (40mm). Surgical intervention is not indicated for asymptomatic internal derangement.",
    "B": "Intracapsular repositioning is a surgical procedure considered for patients with persistent pain and dysfunction refractory to conservative management, not for asymptomatic cases.",
    "C": "This combines disk repositioning with eminectomy. Eminectomy is primarily for recurrent TMJ dislocation. Neither procedure is indicated for an asymptomatic non-reducing disk.",
    "D": "Discectomy with interpositional flap is a salvage procedure for severe, chronic, painful internal derangement, often with degenerative changes, after failure of less invasive treatments. It is far too aggressive for this patient.",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: A. Observation is the most appropriate initial management.\n**The Pivot:** The patient presents with a non-reducing articular disk but crucially has no pain, no crepitus, and adequate interincisal opening (40mm), indicating a well-adapted, asymptomatic internal derangement.",
    "H_highlight_excellence": "**Surgical Mechanism:** The temporomandibular joint (TMJ) is a complex ginglymoarthrodial joint. Internal derangement, specifically a non-reducing articular disk, means the disk is permanently displaced anteriorly relative to the condyle and does not recapture during jaw opening. While this can cause locking and pain, in some individuals, the retrodiscal tissues adapt, forming a 'pseudodisk,' allowing for functional movement without symptoms.\n**Clinical Execution:** The decision for TMJ intervention is primarily driven by symptoms (pain, severe functional limitation) and failure of conservative management. In this case, the patient has adapted to the non-reducing disk, demonstrating no pain, no crepitus, and a functional interincisal opening of 40mm. Surgical intervention carries risks and is not justified for an asymptomatic condition, even with imaging findings of internal derangement. Observation allows for continued monitoring and avoids unnecessary invasive procedures.",
    "A_address_the_gaps": "**Distractor Breakdown:**\n*Option B (Incorrect):* Intracapsular repositioning of the disk is a surgical procedure aimed at restoring the normal disk-condyle relationship. It is indicated for patients with persistent pain and dysfunction (e.g., recurrent locking, limited opening) that have failed extensive conservative management, not for asymptomatic patients.\n*Option C (Incorrect):* This option combines disk repositioning with reduction of the articular eminence (eminectomy). Eminectomy is typically performed for recurrent TMJ dislocation, not for a non-reducing disk, and certainly not for an asymptomatic patient. Both procedures are highly invasive and inappropriate here.\n*Option D (Incorrect):* Removal of the disk (discectomy) and placement of an interpositional temporalis fascia flap is a salvage procedure reserved for severe, chronic, painful internal derangement, often with degenerative changes, after failure of less invasive surgical and non-surgical treatments. It is a highly aggressive and irreversible procedure, completely unwarranted for an asymptomatic patient.",
    "R_review_learning_points": "**Conceptual Overview:** TMJ internal derangement involves a displacement of the articular disk relative to the condyle. While a non-reducing disk can cause locking, if the patient adapts and remains asymptomatic with good function, surgical intervention is generally not warranted.\n**Management Framework (High-Yield Matrix):**\n\n| Feature             | Reducing Disk with Click/Pop | Non-Reducing Disk with Locking (Symptomatic) | Non-Reducing Disk (Asymptomatic) |\n| :------------------ | :--------------------------- | :------------------------------------------- | :------------------------------- |\n| **Symptoms**        | Intermittent click/pop, +/- pain | Intermittent/constant locking, pain, limited opening | No pain, no significant functional limitation |\n| **MRI Findings**    | Disk displaced, reduces on opening | Disk displaced, does not reduce on opening   | Disk displaced, does not reduce on opening |\n| **Interincisal Opening** | Normal                       | Often limited (<35mm)                        | Adequate (>35mm)                 |\n| **Management**      | Conservative (splint, PT, NSAIDs) | Conservative (splint, PT, NSAIDs); consider surgery if refractory pain/dysfunction | Observation                      |",
    "P_plan_for_improvement": "**The Board Pearl:** *Asymptomatic TMJ internal derangement, even with a non-reducing disk, is best managed with observation.*\n**Surgical Action:**\n1. Thoroughly assess patient's pain level, functional limitation, and quality of life impact before considering any intervention for TMJ internal derangement.\n2. Prioritize conservative, non-surgical management for symptomatic TMJ disorders before considering surgical options."
  },
  "supplementary_callouts": {
    "guideline": "American Association of Oral and Maxillofacial Surgeons (AAOMS) position paper on Temporomandibular Joint Disorders, 2019 (or similar consensus guidelines)",
    "takeaway": "Surgical intervention for TMJ internal derangement is reserved for symptomatic patients who fail conservative management, not for asymptomatic adaptation to a non-reducing disk.",
    "visualization": "Upon clinical examination, the patient demonstrates a full range of motion without pain, despite imaging evidence of disk displacement."
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1696,
  "specialty": "Plastic Surgery",
  "topic": "Thefollowingarehistopathologicalterms correctly matched with their meanings:",
  "question": "Thefollowingarehistopathologicalterms correctly matched with their meanings:",
  "options": {
    "A": "Parakeratosis: where nucleated cells are found in the superficial epidermis.",
    "B": "Maturation: where naevocellular naevi become more superficially cited in the epidermis.",
    "C": "Peripheral pallisading: a feature of poorly differentiated squamous carcinoma.",
    "D": "Erythroplakia - red lesions of the oral mucosa. E.Leukoplakia - white lesions of the oral mucosa."
  },
  "answer": "A",
  "explanation": {
    "correct": "Parakeratosis: where nucleated cells are found in the superficial epidermis.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Thefollowingarehistopathologicalterms correctly matched with their meanings:",
    "H_highlight_excellence": "Parakeratosis: where nucleated cells are found in the superficial epidermis.",
    "A_address_the_gaps": "Eliminate options that conflict with the stem or core principle.",
    "R_review_learning_points": "BSSH / reconstructive principles",
    "P_plan_for_improvement": "Parakeratosis: where nucleated cells are found in the superficial epidermis"
  },
  "supplementary_callouts": {
    "guideline": "BSSH / reconstructive principles",
    "takeaway": "Parakeratosis: where nucleated cells are found in the superficial epidermis",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1706,
  "specialty": "Plastic Surgery",
  "topic": "Burn Management",
  "question": "In burn surgery, which of the following statements represents the greatest consensus view regarding reconstructive timing?",
  "options": {
    "A": "A) Reconstructive burns surgery should begin when all scars are fully mature.",
    "B": "B) In children reconstructive burn surgery should be delayed until puberty.",
    "C": "C) Reconstructive burn surgery is primarily involved with the release of contractures.",
    "D": "D) Reconstructive burn surgery should begin in the acute burn phase."
  },
  "answer": "A",
  "explanation": {
    "correct": "**Surgical Mechanism:** Scar maturation is a complex biological process involving collagen remodeling, fibroblast activity, and vascular regression, typically taking 12-18 months, but sometimes longer. During this phase, scars are dynamic, often hyperemic, pruritic, and prone to hypertrophy or contracture. Operating on an immature scar disrupts this ongoing remodeling, often leading to a more aggressive healing response, increased inflammation, and a higher likelihood of recurrent contracture or hypertrophic scarring. Fully mature scars are stable, pliable, avascular, and quiescent, providing a more predictable and durable surgical bed for reconstruction.\\n\\n**Clinical Execution:** For an operating surgeon, this mechanism dictates patience. Early intervention on immature scars, while seemingly addressing immediate functional deficits, often results in a 'chasing the contracture' cycle. Waiting for scar maturity allows for a single, definitive reconstructive procedure with a higher probability of long-term success, better aesthetic outcomes, and reduced need for revision surgeries. This principle applies to various reconstructive techniques, from Z-plasties and local flaps to skin grafting and tissue expansion, as the underlying scar bed's stability is paramount.",
    "A": "",
    "B": "While growth spurts in children can influence contracture recurrence, delaying all reconstructive surgery until puberty is often impractical and detrimental to function and psychosocial development. Critical functional contractures (e.g., around joints, eyelids, mouth) often require earlier intervention, even if revisions are anticipated. The decision is based on functional impairment and scar maturity, not solely age or pubertal status. The stem would need to specify a non-critical area or a very minor scar for this to be considered, and even then, it's not a universal consensus.",
    "C": "While contracture release is a significant component, reconstructive burn surgery encompasses a much broader scope, including aesthetic improvements, restoration of contour, management of hypertrophic scars and keloids, resurfacing, and reconstruction of specialized units (e.g., eyelids, nose, ears, lips, hands) using various techniques like tissue expansion, flaps, and fat grafting. The stem would need to specify 'a common indication' or 'a major focus' rather than 'primarily involved' for this to be correct.",
    "D": "The acute burn phase (first few days to weeks) is focused on resuscitation, wound closure (excision and grafting), and infection control. Reconstructive surgery, by definition, addresses the sequelae of the burn injury after initial wound healing. While early excision and grafting can prevent some contractures, true reconstructive procedures are generally deferred until scar maturation. The stem would need to refer to 'early excision and grafting' rather than 'reconstructive surgery' for this to be correct.",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: A. Reconstructive burn surgery is optimally initiated once scars have reached full maturity.\\n\\n**The Pivot:** The critical determinant for initiating reconstructive burn surgery is scar maturity, as immature scars are highly prone to recurrence and suboptimal outcomes with early intervention.",
    "H_highlight_excellence": "**Surgical Mechanism:** Scar maturation is a complex biological process involving collagen remodeling, fibroblast activity, and vascular regression, typically taking 12-18 months, but sometimes longer. During this phase, scars are dynamic, often hyperemic, pruritic, and prone to hypertrophy or contracture. Operating on an immature scar disrupts this ongoing remodeling, often leading to a more aggressive healing response, increased inflammation, and a higher likelihood of recurrent contracture or hypertrophic scarring. Fully mature scars are stable, pliable, avascular, and quiescent, providing a more predictable and durable surgical bed for reconstruction.\\n\\n**Clinical Execution:** For an operating surgeon, this mechanism dictates patience. Early intervention on immature scars, while seemingly addressing immediate functional deficits, often results in a 'chasing the contracture' cycle. Waiting for scar maturity allows for a single, definitive reconstructive procedure with a higher probability of long-term success, better aesthetic outcomes, and reduced need for revision surgeries. This principle applies to various reconstructive techniques, from Z-plasties and local flaps to skin grafting and tissue expansion, as the underlying scar bed's stability is paramount.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** Reconstructive burn surgery is a staged process aimed at restoring form and function after burn injury. Its timing is paramount, with scar maturity being the most critical factor influencing long-term outcomes. While acute management focuses on survival and wound closure, the reconstructive phase addresses the chronic sequelae, requiring careful planning and often multiple procedures.\\n\\n| Scar Phase | Key Characteristics | Surgical Timing/Approach | Primary Goal |\\n| --- | --- | --- | --- |\\n| Acute Phase | Inflammation, edema, open wounds | Excision & Grafting (early) | Wound closure, infection control, survival |\\n| Subacute/Immature Scar Phase | Hyperemia, pruritus, hypertrophy, dynamic remodeling | Conservative management (pressure garments, massage, splinting) | Minimize contracture, promote maturation |\\n| Mature Scar Phase | Pliable, avascular, stable, quiescent | Reconstructive Surgery (elective) | Restore function, improve aesthetics, definitive correction |\\n| Functional Contracture (any phase) | Impaired joint movement, vital organ compromise | Early surgical release (if critical) | Preserve function, prevent permanent disability |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *If a reconstructive burn surgery question asks about optimal timing, *always* prioritize scar maturity unless a critical functional impairment necessitates earlier intervention.*"
  },
  "supplementary_callouts": {
    "guideline": "American Burn Association (ABA) Practice Guidelines for Burn Care; International Society for Burn Injuries (ISBI) Guidelines.",
    "takeaway": "The most favorable outcomes in reconstructive burn surgery are achieved when interventions are performed on fully mature, stable scars.",
    "visualization": "On physical exam, the surgeon must 'see' a scar that is soft, pliable, pale, non-pruritic, and stable in size and texture, indicating the cessation of active remodeling and inflammation, rather than a red, firm, raised, or actively contracting scar."
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1150,
  "specialty": "Plastic Surgery",
  "topic": "Surgical Principles",
  "question": "Which of the following statements regarding the placement of hand incisions is true?",
  "options": {
    "A": "A) Palm incisions should be placed in the skin creases.",
    "B": "B) It is better to err on the volar aspect than the dorsal aspect when placing incisions on the side of the digit.",
    "C": "C) Incisions on the volar side of the digit must cross the interphalangeal (IP) flexion creases transversely.",
    "D": "D) Dorsal skin incisions should cross skin creases transversely or obliquely."
  },
  "answer": "A",
  "explanation": {
    "correct": "**Surgical Mechanism:** Hand skin creases, particularly in the palm, represent areas of minimal tension and maximal skin mobility. Incisions placed within these creases (parallel to Langer's lines) heal with less scar hypertrophy and contracture. The palmar skin is thick and tethered, and its creases are critical for full flexion.\\n\\n**Clinical Execution:** Placing palmar incisions within creases ensures the scar is subjected to minimal tension during hand movement, particularly flexion. This prevents scar contracture across joints or functional units, which would severely impair grip and dexterity. Deviating from creases on the palm leads to hypertrophic, functionally limiting scars.",
    "A": "",
    "B": "This is incorrect. When incising the side of a digit, it is generally safer to err on the dorsal aspect. The volar aspect contains critical neurovascular bundles and the flexor tendon sheath, which are more superficial and vulnerable to injury. Dorsal incisions minimize risk to these vital structures. For this to be correct, the statement would need to say 'dorsal aspect' instead of 'volar aspect'.",
    "C": "This is incorrect. Incisions on the volar side of the digit, especially across flexion creases, should *never* cross them transversely. Transverse incisions across flexion creases are highly prone to contracture, leading to a 'bowstring' effect and limiting joint motion. Instead, these incisions should be placed longitudinally or in a zigzag (e.g., Brunner) pattern to avoid crossing the crease perpendicularly. For this to be correct, the statement would need to say 'should *not* cross... transversely' or 'should be placed longitudinally or in a zigzag pattern'.",
    "D": "This is incorrect. Similar to palmar and volar digital incisions, dorsal hand and digital incisions should generally run *parallel* to skin creases (longitudinally) or in a zigzag fashion to avoid contracture. Crossing creases transversely or obliquely increases the risk of scar contracture and web space contractures. For this to be correct, the statement would need to say 'should run parallel to skin creases or longitudinally'.",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: A. Palm incisions should be placed in the skin creases.\\n\\n**The Pivot:** The fundamental principle of hand incision planning is to align with natural skin creases and Langer's lines to minimize tension, prevent contractures, and optimize scar cosmesis and function.",
    "H_highlight_excellence": "**Surgical Mechanism:** Hand skin creases, particularly in the palm, represent areas of minimal tension and maximal skin mobility. Incisions placed within these creases (parallel to Langer's lines) heal with less scar hypertrophy and contracture. The palmar skin is thick and tethered, and its creases are critical for full flexion.\\n\\n**Clinical Execution:** Placing palmar incisions within creases ensures the scar is subjected to minimal tension during hand movement, particularly flexion. This prevents scar contracture across joints or functional units, which would severely impair grip and dexterity. Deviating from creases on the palm leads to hypertrophic, functionally limiting scars.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** Proper hand incision planning is paramount in hand surgery to prevent functional deficits from scar contracture. Incisions must respect natural skin tension lines (Langer's lines) and anatomical creases, particularly in areas of high mobility like joints and the palm.\\n\\n| Region | Optimal Incision Orientation | Risk of Transverse Incision | Key Principle |\\n| --- | --- | --- | --- |\\n| Palm | Within skin creases (longitudinal) | Severe flexion contracture | Follow natural creases |\\n| Volar Digit | Longitudinal or zigzag (Brunner) | IP joint flexion contracture | Avoid crossing creases transversely |\\n| Dorsal Hand/Digit | Longitudinal, parallel to creases | Web space/joint extension contracture | Minimize tension, protect neurovascular bundles |\\n| Side of Digit | Dorsal to mid-axial line | Neurovascular injury (volar), contracture | Protect neurovascular bundles, avoid volar aspect |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *If an incision crosses a joint or a major flexion crease, it must be oriented longitudinally or in a zigzag pattern (e.g., Brunner) to prevent contracture; otherwise, place incisions directly within natural skin creases.*"
  },
  "supplementary_callouts": {
    "guideline": "American Society for Surgery of the Hand (ASSH) principles.",
    "takeaway": "Hand incisions must align with natural skin creases and tension lines to prevent functionally debilitating scar contractures.",
    "visualization": "The surgeon must 'see' the natural skin creases of the palm and digits, understanding their relationship to underlying tendons and neurovascular structures, and visualize the vector of tension that would be applied to a healing scar during movement."
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1682,
  "specialty": "Plastic Surgery",
  "topic": "Paediatric plastic surgery 28The facial bipartition technique is best suited to the",
  "question": "Paediatric plastic surgery 28The facial bipartition technique is best suited to the correction of:",
  "options": {
    "A": "Plagiocephaly. B.Trigonocephaly. C.Turricephaly.",
    "B": "An asymmetrical skull.",
    "C": "A long skull - anteroposterior. D.A wide skull.",
    "D": "Brachycephaly. E.Epilepsy attacks."
  },
  "answer": "A",
  "explanation": {
    "correct": "Plagiocephaly. B.Trigonocephaly. C.Turricephaly.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Paediatric plastic surgery 28The facial bipartition technique is best suited to the",
    "H_highlight_excellence": "Plagiocephaly. B.Trigonocephaly. C.Turricephaly.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "BSSH / reconstructive principles",
    "P_plan_for_improvement": "Plagiocephaly"
  },
  "supplementary_callouts": {
    "guideline": "BSSH / reconstructive principles",
    "takeaway": "Plagiocephaly",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1657,
  "specialty": "Plastic Surgery",
  "topic": "36Which of the following statements regarding sentinel lymph node biopsy in melanoma",
  "question": "36Which of the following statements regarding sentinel lymph node biopsy in melanoma is false?",
  "options": {
    "A": "Nodular is the commonest subtype.",
    "B": "Is most commonly found on the scalp of men and the backs of women.",
    "C": "Is most commonly found on the legs of men and the backs of women.",
    "D": "In situ lesions have a Breslow thickness less than 0.15mm."
  },
  "answer": "A",
  "explanation": {
    "correct": "Nodular is the commonest subtype.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "36Which of the following statements regarding sentinel lymph node biopsy in melanoma",
    "H_highlight_excellence": "Nodular is the commonest subtype.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "BSSH / reconstructive principles",
    "P_plan_for_improvement": "Nodular is the commonest subtype"
  },
  "supplementary_callouts": {
    "guideline": "BSSH / reconstructive principles",
    "takeaway": "Nodular is the commonest subtype",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1005,
  "specialty": "Plastic Surgery",
  "topic": "Scar Management",
  "question": "A 21-year-old graduate student has a large hypertrophic scar on the lower part of her face. The patient had sustained a laceration on her face 2 years previously after hitting her face on the side of a swimming pool. Which of the following statements regarding scar revision is true?",
  "options": {
    "A": "A) Scar maturation refers to the change in size of the wound in the first 1 to 2 months.",
    "B": "B) Scar revision should have been performed in the first 3 months after injury to minimize fibrosis.",
    "C": "C) Revision should be performed earlier in children than in adults.",
    "D": "D) It corrects undesirable pigmentation."
  },
  "answer": "E",
  "explanation": {
    "correct": "**Surgical Mechanism:** Scar maturation is a complex, dynamic biological process involving collagen remodeling, fibroblast activity, and vascular regression, which typically extends for 12 to 18 months post-injury. During this phase, an immature, erythematous, and often pruritic scar transforms into a more pliable, pale, and stable structure. Early surgical intervention risks disrupting this ongoing remodeling, potentially leading to a worse scar, increased fibrosis, or recurrence of hypertrophy.\\n\\n**Clinical Execution:** For an operating surgeon, deferring scar revision until full maturation ensures that the scar's final characteristics (e.g., width, color, texture, pliability) are stable. This allows for precise surgical planning, selection of the most appropriate technique (e.g., Z-plasty, W-plasty, serial excision, dermabrasion), and execution on a quiescent tissue bed, thereby minimizing complications and optimizing the long-term aesthetic result.",
    "A": "Scar maturation is a prolonged process, typically 12-18 months, involving collagen reorganization and vascular changes, not merely a change in wound size within the first 1-2 months. The initial 1-2 months primarily involve inflammation and early proliferation.",
    "B": "Performing scar revision in the first 3 months after injury is generally contraindicated as the scar is still in its active remodeling phase. Early intervention can exacerbate inflammation, increase fibrosis, and lead to a worse scar. The stem would need to describe an acute, non-healing wound requiring debridement, not elective scar revision, for this to be correct.",
    "C": "Children often exhibit a more vigorous healing response, increasing their propensity for hypertrophic scarring and keloid formation. Therefore, scar revision in children often requires even greater patience and delay to ensure full maturation and minimize recurrence risk. The stem would need to specify a functional impairment requiring urgent intervention for this to be correct.",
    "D": "While some adjunctive treatments (e.g., lasers) can address pigmentation, the primary goal of surgical scar revision is to improve scar contour, width, orientation, and texture. Surgical revision alone does not inherently correct undesirable pigmentation. The stem would need to focus on laser therapy or specific pigment-targeting modalities for this to be correct.",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: E. Scar revision should be delayed for approximately 1 year to allow maturation.\\n\\n**The Pivot:** The critical decision point for scar revision is optimal timing, specifically allowing for complete scar maturation before intervention to maximize aesthetic and functional outcomes.",
    "H_highlight_excellence": "**Surgical Mechanism:** Scar maturation is a complex, dynamic biological process involving collagen remodeling, fibroblast activity, and vascular regression, which typically extends for 12 to 18 months post-injury. During this phase, an immature, erythematous, and often pruritic scar transforms into a more pliable, pale, and stable structure. Early surgical intervention risks disrupting this ongoing remodeling, potentially leading to a worse scar, increased fibrosis, or recurrence of hypertrophy.\\n\\n**Clinical Execution:** For an operating surgeon, deferring scar revision until full maturation ensures that the scar's final characteristics (e.g., width, color, texture, pliability) are stable. This allows for precise surgical planning, selection of the most appropriate technique (e.g., Z-plasty, W-plasty, serial excision, dermabrasion), and execution on a quiescent tissue bed, thereby minimizing complications and optimizing the long-term aesthetic result.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** Scar revision is a secondary procedure aimed at improving the appearance or function of a pre-existing scar. Its success is highly dependent on meticulous surgical technique, appropriate patient selection, and, most critically, optimal timing, which mandates waiting for complete scar maturation.\\n\\n| Scar Type | Timing for Revision | Key Surgical Principle | Post-op Management |\\n| --- | --- | --- | --- |\\n| Hypertrophic Scar | 12-18 months post-injury (after maturation) | Tension-free closure, re-orientation of scar lines, W-plasty/Z-plasty | Silicone sheeting, massage, intralesional steroids |\\n| Keloid Scar | Often delayed; early excision with adjuvant therapy | Excision with wide margins, intralesional steroids, radiation therapy | Strict follow-up, pressure therapy, topical agents |\\n| Atrophic/Depressed Scar | Variable (can be earlier if stable) | Subcision, fat grafting, dermal fillers, laser resurfacing | Sun protection, hydration, topical retinoids |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *If a scar is still red, raised, or pruritic, then it is immature and not ready for elective revision; wait for it to soften, flatten, and lighten.*"
  },
  "supplementary_callouts": {
    "guideline": "American Society of Plastic Surgeons (ASPS) guidelines on scar management and revision.",
    "takeaway": "Optimal scar revision outcomes are achieved by delaying intervention until the scar has completed its natural maturation process, typically 12-18 months post-injury.",
    "visualization": "On clinical examination, the surgeon must 'see' a scar that is soft, pliable, flat, and hypopigmented or normopigmented, indicating the cessation of active collagen remodeling and inflammation, before proceeding with revision."
  },
  "discrepancy_flag": ""
}
,
{
  "id": 431,
  "specialty": "Plastic Surgery",
  "topic": "Microvascular Surgery",
  "question": "Regarding free flaps and their vascular supply, all of the following are true except:",
  "options": {
    "A": "A) [Incomplete option: 'rtery.']",
    "B": "B) The predominant blood supply to a free latissimus dorsi myocutaneous flap is the thoracodorsal artery.",
    "C": "C) The predominant blood supply to a free fibular osteocutaneous flap is the peroneal artery.",
    "D": "D) The predominant blood supply to a free dorsalis pedis fasciocutaneous flap is the anterior tibial artery."
  },
  "answer": "D",
  "explanation": {
    "correct": "**Surgical Mechanism:** Free flap viability hinges on a robust, named vascular pedicle comprising an artery and one or more venae comitantes. The thoracodorsal artery, a terminal branch of the subscapular artery, reliably supplies the latissimus dorsi flap. The peroneal artery, a branch of the posterior tibial artery, is the consistent pedicle for the fibula osteocutaneous flap. The dorsalis pedis artery, a direct continuation of the anterior tibial artery distal to the ankle joint, is the primary pedicle for the dorsalis pedis flap. Precise identification of these direct pedicles and their anatomical course is paramount for successful microvascular anastomosis and flap survival.\\n\\n**Clinical Execution:** For an operating surgeon, meticulous preoperative planning includes precise anatomical mapping of both donor and recipient vessels. This involves understanding the hierarchical branching patterns to isolate the *dominant* pedicle that directly enters the flap. During dissection, the pedicle is carefully preserved, ensuring minimal trauma to its adventitia and intimal layers. The choice of flap and its pedicle dictates the reconstructive strategy, considering vessel caliber match, pedicle length, and potential donor site morbidity. Misidentifying the direct pedicle can lead to inadequate perfusion, flap ischemia, and failure.",
    "A": "This option is incomplete as provided. Assuming it was intended to describe a true statement about a flap and its artery, it would need to specify a correct flap-artery pairing (e.g., 'Radial forearm flap is supplied by the radial artery') to be considered true. As is, it cannot be evaluated.",
    "B": "This statement is anatomically correct. The thoracodorsal artery is the dominant vascular pedicle for the latissimus dorsi flap. For this option to be incorrect, the stem would need to specify a different flap or incorrectly name the pedicle (e.g., 'long thoracic artery').",
    "C": "This statement is anatomically correct. The peroneal artery is the dominant vascular pedicle for the fibula osteocutaneous flap. For this option to be incorrect, the stem would need to specify a different flap or incorrectly name the pedicle (e.g., 'posterior tibial artery').",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: D. The dorsalis pedis fasciocutaneous flap is predominantly supplied by the dorsalis pedis artery, not the anterior tibial artery.\\n\\n**The Pivot:** The critical distinction lies in identifying the *direct* named pedicle for a specific free flap, rather than its parent vessel, which is a common distractor in microvascular anatomy.",
    "H_highlight_excellence": "**Surgical Mechanism:** Free flap viability hinges on a robust, named vascular pedicle comprising an artery and one or more venae comitantes. The thoracodorsal artery, a terminal branch of the subscapular artery, reliably supplies the latissimus dorsi flap. The peroneal artery, a branch of the posterior tibial artery, is the consistent pedicle for the fibula osteocutaneous flap. The dorsalis pedis artery, a direct continuation of the anterior tibial artery distal to the ankle joint, is the primary pedicle for the dorsalis pedis flap. Precise identification of these direct pedicles and their anatomical course is paramount for successful microvascular anastomosis and flap survival.\\n\\n**Clinical Execution:** For an operating surgeon, meticulous preoperative planning includes precise anatomical mapping of both donor and recipient vessels. This involves understanding the hierarchical branching patterns to isolate the *dominant* pedicle that directly enters the flap. During dissection, the pedicle is carefully preserved, ensuring minimal trauma to its adventitia and intimal layers. The choice of flap and its pedicle dictates the reconstructive strategy, considering vessel caliber match, pedicle length, and potential donor site morbidity. Misidentifying the direct pedicle can lead to inadequate perfusion, flap ischemia, and failure.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** Successful free tissue transfer relies on an intimate understanding of donor site anatomy, particularly the consistent identification and meticulous dissection of the dominant vascular pedicle. Each commonly used free flap has a well-defined arterial supply and venous drainage system that must be preserved to ensure flap viability. Preoperative imaging, while sometimes helpful, must be judiciously applied, and its indications and contraindications understood.\\n\\n| Flap Type | Dominant Arterial Pedicle | Parent Artery | Key Clinical Consideration |\\n| --- | --- | --- | --- |\\n| Latissimus Dorsi | Thoracodorsal Artery | Subscapular Artery | Large volume, muscle or myocutaneous |\\n| Fibular Osteocutaneous | Peroneal Artery | Posterior Tibial Artery | Bone reconstruction, long segments |\\n| Radial Forearm | Radial Artery | Brachial Artery | Thin, pliable skin, donor site morbidity |\\n| Anterolateral Thigh (ALT) | Lateral Circumflex Femoral Artery (descending branch) | Deep Femoral Artery | Versatile, fasciocutaneous or musculocutaneous |\\n| Dorsalis Pedis | Dorsalis Pedis Artery | Anterior Tibial Artery | Small, thin, often for foot/ankle reconstruction (less common free flap) |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *If a question asks for the 'predominant blood supply' of a free flap, always identify the *direct, named pedicle* entering the flap, not just its larger parent vessel.*"
  },
  "supplementary_callouts": {
    "guideline": "American Society for Reconstructive Microsurgery (ASRM) guidelines on free flap surgery.",
    "takeaway": "Accurate identification of the specific, direct vascular pedicle for each free flap is fundamental to microvascular reconstructive surgery.",
    "visualization": "When dissecting the dorsalis pedis flap, the surgeon must visualize the dorsalis pedis artery coursing over the tarsal bones, distinct from the anterior tibial artery which lies more proximally in the leg, before it branches into the arcuate artery and first dorsal metatarsal artery."
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1649,
  "specialty": "Plastic Surgery",
  "topic": "27With respect to paediatric burns which of the following is true?",
  "question": "27With respect to paediatric burns which of the following is true?",
  "options": {
    "A": "The lateral head of gastrocnemius is larger than the medial head. B.Use of the medial head of gastrocnemius leads to a significant functional deficit",
    "B": "The technique of tangential excision was published by Janzekovic in 1970.",
    "C": "Use of a proximally based soleus flap leads to a significant functional deficit.",
    "D": "Scoring of the fascia of gastrocnemius can allow the flap to cover a larger area."
  },
  "answer": "A",
  "explanation": {
    "correct": "The lateral head of gastrocnemius is larger than the medial head. B.Use of the medial head of gastrocnemius",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "27With respect to paediatric burns which of the following is true?",
    "H_highlight_excellence": "The lateral head of gastrocnemius is larger than the medial head. B.Use of the medial head of gastrocnemius",
    "A_address_the_gaps": "",
    "R_review_learning_points": "BSSH / reconstructive principles",
    "P_plan_for_improvement": "The lateral head of gastrocnemius is larger than the medial head"
  },
  "supplementary_callouts": {
    "guideline": "BSSH / reconstructive principles",
    "takeaway": "The lateral head of gastrocnemius is larger than the medial head",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1642,
  "specialty": "Plastic Surgery",
  "topic": "Reconstructive Principles",
  "question": "Based on current knowledge which of the following is a better estimate of the risk of acute rejection of the facial flap in facial transplantation?",
  "options": {
    "A": "A) Pedicled flaps are more reliable than free flaps.",
    "B": "B) Soutar described the use of the radial forearm flap in oral cavity reconstruction.",
    "C": "C) The soft palate is in the oral cavity. D.Always requires a free flap.",
    "D": "D) Is superior to CT for assessing bony involvement."
  },
  "answer": "A",
  "explanation": {
    "correct": "**Surgical Mechanism:** Pedicled flaps, by definition, retain their original vascular supply and neural connections, remaining autologous tissue. This inherent self-recognition by the immune system means they are not subject to immunological rejection. In contrast, facial transplantation involves an allograft (tissue from a genetically different individual), which is always a free flap requiring microvascular anastomosis. Allografts inherently trigger a robust immune response, necessitating lifelong immunosuppression to mitigate acute and chronic rejection. The 'reliability' of pedicled flaps, in this context, implicitly includes their immunological stability compared to the rejection-prone nature of allogeneic free flaps.\\n\\n**Clinical Execution:** For an operating surgeon, understanding this fundamental immunological difference is paramount. When considering facial reconstruction, autologous pedicled flaps are chosen for their inherent lack of rejection risk and often simpler technical execution, making them 'reliable' in terms of long-term immunological acceptance. Facial allograft transplantation, while offering superior aesthetic and functional outcomes for severe defects, is reserved for highly selected cases due to the significant, lifelong burden of immunosuppression and the persistent risk of rejection, a complication entirely absent in pedicled autografts.",
    "A": "",
    "B": "This statement is historically accurate regarding the pioneering work of Soutar in microvascular reconstruction but is entirely irrelevant to the question of rejection risk in facial transplantation or the comparative reliability of flap types. The question would need to be about the history of microvascular surgery or specific flap descriptions for this to be correct.",
    "C": "This option is poorly phrased, combining two unrelated statements. While the soft palate is indeed in the oral cavity, and reconstruction of complex soft palate defects often utilizes free flaps, this statement provides no insight into the risk of rejection in facial transplantation or the general reliability of flap types. The question would need to be about oral cavity anatomy or specific soft palate reconstruction techniques for this to be correct.",
    "D": "This statement is incomplete and lacks context (e.g., 'MRI is superior...'). Even if completed, it refers to imaging modalities and their utility in assessing bony involvement, which is completely unrelated to flap types, rejection risk, or facial transplantation. The question would need to be about diagnostic imaging for bony pathology for this to be correct.",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: A. Pedicled flaps are more reliable than free flaps.\\n\\n**The Pivot:** The fundamental distinction lies in the immunological nature of the tissue transfer: autologous (pedicled) versus allogeneic (free flap for transplantation), which dictates the presence or absence of rejection risk.",
    "H_highlight_excellence": "**Surgical Mechanism:** Pedicled flaps, by definition, retain their original vascular supply and neural connections, remaining autologous tissue. This inherent self-recognition by the immune system means they are not subject to immunological rejection. In contrast, facial transplantation involves an allograft (tissue from a genetically different individual), which is always a free flap requiring microvascular anastomosis. Allografts inherently trigger a robust immune response, necessitating lifelong immunosuppression to mitigate acute and chronic rejection. The 'reliability' of pedicled flaps, in this context, implicitly includes their immunological stability compared to the rejection-prone nature of allogeneic free flaps.\\n\\n**Clinical Execution:** For an operating surgeon, understanding this fundamental immunological difference is paramount. When considering facial reconstruction, autologous pedicled flaps are chosen for their inherent lack of rejection risk and often simpler technical execution, making them 'reliable' in terms of long-term immunological acceptance. Facial allograft transplantation, while offering superior aesthetic and functional outcomes for severe defects, is reserved for highly selected cases due to the significant, lifelong burden of immunosuppression and the persistent risk of rejection, a complication entirely absent in pedicled autografts.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** Flap reconstruction involves transferring tissue to repair defects. The fundamental distinction between autologous flaps (pedicled or free) and allografts (always free flaps in transplantation) dictates immunological outcomes. Autologous flaps are immunologically inert to the recipient, while allografts elicit a rejection response requiring immunosuppression.\\n\\n| Flap Type | Immunological Status | Rejection Risk | Primary Indication |\\n| --- | --- | --- | --- |\\n| Pedicled Flap (Autologous) | Self-tissue | None | Local/Regional defects, simpler reconstruction |\\n| Free Flap (Autologous) | Self-tissue | None | Complex/Distant defects, microvascular expertise required |\\n| Free Flap (Allograft) | Non-self tissue | High (lifelong immunosuppression needed) | Composite tissue allotransplantation (e.g., facial, hand) |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *If the question involves 'transplantation' of composite tissue (e.g., face, hand), immediately think 'allograft,' 'free flap,' and 'lifelong immunosuppression with rejection risk'; otherwise, for autologous reconstruction, 'pedicled' implies local, 'free' implies distant, both are immunologically safe.*"
  },
  "supplementary_callouts": {
    "guideline": "American Society for Reconstructive Microsurgery (ASRM) consensus on composite tissue allotransplantation; American Society of Plastic Surgeons (ASPS) guidelines on reconstructive surgery.",
    "takeaway": "Autologous pedicled flaps are inherently reliable due to immunological self-recognition, contrasting sharply with allogeneic free flaps used in facial transplantation, which carry an unavoidable risk of rejection.",
    "visualization": "Visualize a pedicled flap as a 'bridge' of tissue still connected to its original blood supply, whereas a free flap (autologous or allograft) is a 'detached island' requiring new microvascular connections. For allografts, visualize the immune cells attacking the 'foreign' island."
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1692,
  "specialty": "Plastic Surgery",
  "topic": "Regarding free tissue transfer:",
  "question": "Regarding free tissue transfer:",
  "options": {
    "A": "According to Koshima, supramicrosurgery (or supermicrosurgery) is defined as microvascular dissection and anastomosis of vessels measuring less than 0.5mm.",
    "B": "In 1960, Jacobson and Suarez reported successful experimental microvascular anastomoses as small as 0.9mm in diameter. Multiple Choice Questions in Plastic Surgery",
    "C": "The first successful free tissue transfer in humans was performed in America.",
    "D": "Taylor is credited with the first description of the free fibula osteocutaneous flap."
  },
  "answer": "A",
  "explanation": {
    "correct": "According to Koshima, supramicrosurgery (or supermicrosurgery) is defined as microvascular dissection and anastomosis of vessels measuring less than",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Regarding free tissue transfer:",
    "H_highlight_excellence": "According to Koshima, supramicrosurgery (or supermicrosurgery) is defined as microvascular dissection and anastomosis of vessels measuring less than",
    "A_address_the_gaps": "",
    "R_review_learning_points": "BSSH / reconstructive principles",
    "P_plan_for_improvement": "According to Koshima, supramicrosurgery (or supermicrosurgery) is defined as microvascular dissection and anastomosis of vessels measuring"
  },
  "supplementary_callouts": {
    "guideline": "BSSH / reconstructive principles",
    "takeaway": "According to Koshima, supramicrosurgery (or supermicrosurgery) is defined as microvascular dissection and anastomosis of vessels measuring less than",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1700,
  "specialty": "Plastic Surgery",
  "topic": "Which of the following is incorrect about cutaneous squamous cell carcinoma?",
  "question": "Which of the following is incorrect about cutaneous squamous cell carcinoma?",
  "options": {
    "A": "It is more common than BCC.",
    "B": "It has a higher metastatic rate than BCC.",
    "C": "It has an increased incidence in the immunosuppressed.",
    "D": "SCC of the lip has a higher metastatic rate to lymph nodes."
  },
  "answer": "A",
  "explanation": {
    "correct": "It is more common than BCC.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Which of the following is incorrect about cutaneous squamous cell carcinoma?",
    "H_highlight_excellence": "It is more common than BCC.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "BSSH / reconstructive principles",
    "P_plan_for_improvement": "It is more common than BCC"
  },
  "supplementary_callouts": {
    "guideline": "BSSH / reconstructive principles",
    "takeaway": "It is more common than BCC",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 993,
  "specialty": "Plastic Surgery",
  "topic": "Burns",
  "question": "Which of the following statements regarding burn wound depth is true?",
  "options": {
    "A": "A) First-degree burns heal rapidly but contribute significantly to the total body surface area (TBSA)",
    "B": "B) urned in large, mixed-depth wounds. Second-degree burns characteristically cause erythema, pain, and blistering.",
    "C": "C) Third-degree burns are generally painful and extremely sensitive to touch.",
    "D": "D) Fourth-degree burns mandate amputation of the involved extremities."
  },
  "answer": "D",
  "explanation": {
    "correct": "**Surgical Mechanism:** Fourth-degree burns represent full-thickness destruction extending beyond the dermis into subcutaneous fat, muscle, tendon, ligament, or bone. This profound tissue necrosis results in irreversible damage to all cellular components, including neurovascular structures. The affected tissue is non-viable, lacks regenerative capacity, and serves as a nidus for infection and systemic inflammatory response. The underlying structures are often carbonized or desiccated.\\n\\n**Clinical Execution:** Given the complete destruction of vital structures and the high risk of infection, sepsis, and functional impairment, surgical debridement extending to healthy, viable tissue is paramount. For fourth-degree burns involving extremities, this often translates to amputation to remove necrotic tissue, prevent systemic complications, and facilitate prosthetic fitting or functional rehabilitation. Early surgical intervention is critical to mitigate morbidity and mortality.",
    "A": "First-degree burns (superficial burns) involve only the epidermis, causing erythema and pain but no blistering. They do not contribute to TBSA calculations for fluid resuscitation (e.g., Parkland formula) because the skin barrier remains intact and fluid loss is minimal. For this to be correct, the statement would need to specify a different burn depth or context for TBSA calculation.",
    "B": "The initial phrase 'urned in large, mixed-depth wounds' is grammatically incorrect and nonsensical, rendering the entire option flawed. While the description of second-degree burns (erythema, pain, and blistering) is accurate, the option as presented is not a coherent statement. For this to be correct, the option would need to be grammatically sound and solely describe the characteristics of second-degree burns without extraneous, malformed text.",
    "C": "Third-degree burns (full-thickness) involve complete destruction of the epidermis and dermis, including nerve endings. Consequently, these burns are typically anesthetic (painless) and lack sensation to touch or pinprick. Pain, if present, usually originates from surrounding partial-thickness burn areas. For this to be correct, the statement would need to describe partial-thickness burns or state that third-degree burns are not painful.",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: D. Fourth-degree burns necessitate amputation of the involved extremities.\\n\\n**The Pivot:** The critical distinction lies in the depth of tissue destruction; fourth-degree burns extend through all skin layers into underlying fascia, muscle, or bone, rendering tissue non-viable and requiring surgical excision and often amputation.",
    "H_highlight_excellence": "**Surgical Mechanism:** Fourth-degree burns represent full-thickness destruction extending beyond the dermis into subcutaneous fat, muscle, tendon, ligament, or bone. This profound tissue necrosis results in irreversible damage to all cellular components, including neurovascular structures. The affected tissue is non-viable, lacks regenerative capacity, and serves as a nidus for infection and systemic inflammatory response. The underlying structures are often carbonized or desiccated.\\n\\n**Clinical Execution:** Given the complete destruction of vital structures and the high risk of infection, sepsis, and functional impairment, surgical debridement extending to healthy, viable tissue is paramount. For fourth-degree burns involving extremities, this often translates to amputation to remove necrotic tissue, prevent systemic complications, and facilitate prosthetic fitting or functional rehabilitation. Early surgical intervention is critical to mitigate morbidity and mortality.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** Burn depth classification is fundamental for prognosis, fluid management, pain control, and surgical planning. Accurate assessment differentiates superficial, partial-thickness, and full-thickness injuries, guiding immediate resuscitation and definitive wound care. The extent of tissue destruction dictates the need for surgical intervention, including debridement, grafting, or amputation.\\n\\n| Burn Depth | Clinical Appearance/Sensation | Healing Time/Method | Management Principle |\\n| --- | --- | --- | --- |\\n| First-degree (Superficial) | Erythema, painful, no blisters | 3-6 days, spontaneous | Symptomatic relief, hydration |\\n| Superficial Partial-thickness (2nd degree) | Blisters, moist, red, very painful, blanches | 1-3 weeks, spontaneous (minimal scarring) | Wound care, pain control |\\n| Deep Partial-thickness (2nd degree) | Blisters (ruptured), dry, pale/waxy, less painful, sluggish blanching | 3-9 weeks, spontaneous (significant scarring) or excision/grafting | Excision/grafting often indicated |\\n| Third-degree (Full-thickness) | Dry, leathery, white/brown/black, insensate, no blanching | Never spontaneous, requires excision/grafting | Excision and skin grafting |\\n| Fourth-degree | Extends to muscle/bone, charred, insensate | Never spontaneous, requires excision/amputation | Excision and often amputation |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *If a burn extends beyond the dermis into underlying structures (muscle, bone), it is a fourth-degree injury, and amputation is often the only viable option for source control and functional recovery.*"
  },
  "supplementary_callouts": {
    "guideline": "American Burn Association (ABA) Practice Guidelines for Burn Care",
    "takeaway": "Fourth-degree burns involve complete destruction of all skin layers and underlying tissues, necessitating aggressive surgical debridement, often including amputation.",
    "visualization": "On gross inspection, the surgeon observes charred, desiccated, or carbonized tissue extending into muscle, tendon, or bone, with complete absence of capillary refill or sensation, confirming irreversible tissue necrosis."
  },
  "discrepancy_flag": ""
}
,
{
  "id": 246,
  "specialty": "Plastic Surgery",
  "topic": "Wound Care",
  "question": "A paraplegic bed-ridden patient developed a large deep bed-sore over his sacrum. The best regimen is by wide excision and:",
  "options": {
    "A": "A) Local skin flaps",
    "B": "B) Split-thickness skin grafting",
    "C": "C) Full-thickness skin grafting",
    "D": "D) Secondary intention healing with local applications"
  },
  "answer": "A",
  "explanation": {
    "correct": "**Surgical Mechanism:** Sacral pressure ulcers often involve significant tissue loss down to or including bone, requiring debridement of necrotic tissue and often osteomyelitis. Reconstruction demands durable, well-vascularized tissue to pad the underlying sacrum and coccyx, distribute pressure, and resist shear forces. Local skin flaps, often fasciocutaneous or musculocutaneous (e.g., gluteus maximus flap, V-Y advancement flap), provide this bulk, vascularity, and sensory input (if nerve-sparing) superiorly to skin grafts. They recruit adjacent healthy tissue, maintaining a more physiological tissue composition.\\n\\n**Clinical Execution:** For a large, deep sacral pressure ulcer, wide excision removes all necrotic, infected, and fibrotic tissue, creating a clean wound bed. The subsequent reconstructive choice is paramount for long-term success. Local skin flaps are preferred because they bring their own blood supply, provide cushioning, and are more resilient to pressure and shear than skin grafts. Skin grafts, particularly split-thickness, are thin, lack padding, and are highly susceptible to breakdown over bony prominences, making them unsuitable for primary closure of deep sacral defects in high-risk patients.",
    "A": "",
    "B": "Split-thickness skin grafts (Thiersch grafts) are thin, lack subcutaneous padding, and are poorly vascularized compared to flaps. They are prone to breakdown over bony prominences like the sacrum, especially in a paraplegic patient who will continue to experience pressure. The stem would need to describe a superficial wound, not over a bony prominence, or a defect where flap reconstruction is not feasible, for this to be correct.",
    "C": "Full-thickness skin grafts (Wolfe grafts) provide slightly more bulk and better cosmetic outcomes than split-thickness grafts but still lack the robust vascularity and padding of a flap. They are also more susceptible to breakdown over high-pressure areas and have higher metabolic demands, making them less ideal for large, deep defects over the sacrum. The stem would need to describe a smaller, more superficial defect not directly over a major bony prominence, or a defect where local tissue is insufficient for a flap, for this to be correct.",
    "D": "While local applications are part of wound care, relying solely on secondary intention healing for a 'large deep bed-sore' after wide excision is not the 'best regimen' for definitive closure. It would lead to prolonged healing, significant scarring, contracture, and a high risk of recurrence and infection, especially in a bed-ridden patient. This option would only be considered if the patient was too unstable for surgery or if the wound bed was not yet ready for definitive closure, which contradicts 'best regimen' after 'wide excision.'",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: A. Local skin flaps.\\n\\n**The Pivot:** The critical pivot is the 'large deep bed-sore over his sacrum' requiring 'wide excision,' which necessitates robust soft tissue coverage over a bony prominence to prevent recurrence.",
    "H_highlight_excellence": "**Surgical Mechanism:** Sacral pressure ulcers often involve significant tissue loss down to or including bone, requiring debridement of necrotic tissue and often osteomyelitis. Reconstruction demands durable, well-vascularized tissue to pad the underlying sacrum and coccyx, distribute pressure, and resist shear forces. Local skin flaps, often fasciocutaneous or musculocutaneous (e.g., gluteus maximus flap, V-Y advancement flap), provide this bulk, vascularity, and sensory input (if nerve-sparing) superiorly to skin grafts. They recruit adjacent healthy tissue, maintaining a more physiological tissue composition.\\n\\n**Clinical Execution:** For a large, deep sacral pressure ulcer, wide excision removes all necrotic, infected, and fibrotic tissue, creating a clean wound bed. The subsequent reconstructive choice is paramount for long-term success. Local skin flaps are preferred because they bring their own blood supply, provide cushioning, and are more resilient to pressure and shear than skin grafts. Skin grafts, particularly split-thickness, are thin, lack padding, and are highly susceptible to breakdown over bony prominences, making them unsuitable for primary closure of deep sacral defects in high-risk patients.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** Pressure ulcers, particularly sacral ones, are a significant challenge in bed-ridden or immobile patients. Management involves meticulous wound care, debridement, and often surgical reconstruction. The choice of reconstructive method depends on the size, depth, location, and presence of infection, aiming for durable coverage over bony prominences to prevent recurrence. Flaps are generally superior to grafts for deep defects over high-pressure areas.\\n\\n| Ulcer Depth/Stage | Reconstruction Goal | Preferred Surgical Approach | Key Complication Risk |\\n| --- | --- | --- | --- |\\n| Stage I/II (Superficial) | Protect, promote healing | Conservative (dressings, pressure relief) | Progression to deeper stages |\\n| Stage III/IV (Deep, bone/muscle involved) | Durable coverage, pressure redistribution | Wide excision + Local Flap (e.g., Gluteus Max V-Y) | Recurrence, infection, flap necrosis |\\n| Recurrent/Complex | Salvage, functional restoration | Regional/Free Flap, Amputation (rare) | Flap failure, persistent infection |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *If a deep pressure ulcer over a bony prominence requires wide excision, *always* think local or regional flap for durable, vascularized coverage; skin grafts are for superficial wounds or non-weight-bearing areas.*"
  },
  "supplementary_callouts": {
    "guideline": "National Pressure Ulcer Advisory Panel (NPUAP)/European Pressure Ulcer Advisory Panel (EPUAP)/Pan Pacific Pressure Injury Alliance (PPPIA) International Guideline for Pressure Ulcer Prevention and Treatment.",
    "takeaway": "For large, deep sacral pressure ulcers requiring wide excision, local skin flaps provide the most robust and durable reconstructive solution.",
    "visualization": "The surgeon must 'see' a clean, debrided wound bed extending to the sacral periosteum or bone, requiring significant soft tissue bulk to fill the defect and pad the underlying bone, which is best achieved by mobilizing adjacent well-vascularized tissue as a flap."
  },
  "discrepancy_flag": ""
}
,
{
  "id": 90483,
  "specialty": "Plastic Surgery",
  "topic": "Congenital Anomalies",
  "question": "All of the following parameters are important considerations in the repair of cleft palate except.",
  "options": {
    "A": "A) Age and weight",
    "B": "B) Anesthesia service quality",
    "C": "C) Hemoglobin and WBC count",
    "D": "D) Maternal Age"
  },
  "answer": "A",
  "explanation": {
    "correct": "**Surgical Mechanism:** Palatoplasty is typically timed between 6 and 18 months of age, often when the infant has achieved a minimum weight (e.g., 4.5-5 kg or 10 lbs). These parameters are crucial for ensuring sufficient tissue for repair, reducing anesthetic risks, and optimizing post-operative recovery. However, once these *prerequisites* are satisfied and the patient is cleared for surgery, the *specific numerical values* of age and weight do not directly dictate intraoperative decisions regarding flap design, suture placement, or real-time physiological adjustments.\\n\\n**Clinical Execution:** For the operating surgeon, the primary focus during the repair is on meticulous anatomical reconstruction, tension-free closure, and managing intraoperative events. While the patient's age and weight initially guided the decision to operate, the *ongoing* clinical execution is driven by factors like anesthetic depth, blood loss, tissue viability, and the quality of the anesthetic support, not by continuous re-evaluation of the patient's age or weight.",
    "A": "",
    "B": "Anesthesia service quality is a paramount and *ongoing* consideration. High-quality pediatric anesthesia is crucial for airway management, pain control, and physiological stability throughout the lengthy and often complex palatoplasty. Without excellent anesthesia, the repair cannot proceed safely or effectively. This is a continuous, critical factor.",
    "C": "Hemoglobin and WBC count are vital *ongoing* perioperative considerations. Hemoglobin levels directly impact oxygen-carrying capacity and tolerance to blood loss, which is a significant risk in palatoplasty. An elevated WBC count indicates active infection, which is a contraindication to elective surgery and would necessitate postponement. These are dynamic parameters monitored closely.",
    "D": "Maternal age is a demographic factor associated with the *risk* of congenital anomalies, including clefts, but it has no direct bearing on the *surgical repair* of the child's cleft palate. It is not a parameter considered by the surgical team during pre-operative planning or intraoperative management of the child. If the question were asking for the *most irrelevant* factor to the *repair*, this would be the correct answer.",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: A. Age and weight are foundational *pre-operative eligibility criteria* for cleft palate repair, rather than dynamic, ongoing considerations *during* the surgical procedure itself.\\n\\n**The Pivot:** The critical distinction lies between static patient selection thresholds that must be met *before* surgery, and continuous, real-time clinical parameters requiring active management *throughout* the perioperative period.",
    "H_highlight_excellence": "**Surgical Mechanism:** Palatoplasty is typically timed between 6 and 18 months of age, often when the infant has achieved a minimum weight (e.g., 4.5-5 kg or 10 lbs). These parameters are crucial for ensuring sufficient tissue for repair, reducing anesthetic risks, and optimizing post-operative recovery. However, once these *prerequisites* are satisfied and the patient is cleared for surgery, the *specific numerical values* of age and weight do not directly dictate intraoperative decisions regarding flap design, suture placement, or real-time physiological adjustments.\\n\\n**Clinical Execution:** For the operating surgeon, the primary focus during the repair is on meticulous anatomical reconstruction, tension-free closure, and managing intraoperative events. While the patient's age and weight initially guided the decision to operate, the *ongoing* clinical execution is driven by factors like anesthetic depth, blood loss, tissue viability, and the quality of the anesthetic support, not by continuous re-evaluation of the patient's age or weight.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** Cleft palate repair is a complex pediatric surgical procedure requiring meticulous pre-operative assessment, intraoperative vigilance, and post-operative care. Success hinges on a multidisciplinary approach ensuring patient safety, optimal timing, and precise anatomical reconstruction to achieve functional speech and feeding outcomes.\\n\\n| Pre-op Readiness Criteria | Intra-op Monitoring Focus | Post-op Complication Risk | Key Surgical Principle |\\n| --- | --- | --- | --- |\\n| Age (6-18 months) | Airway patency, Hemodynamics | Fistula formation, Velopharyngeal insufficiency | Tension-free closure |\\n| Weight (>4.5 kg/10 lbs) | Blood loss, Anesthetic depth | Infection, Speech delay | Muscle reconstruction (levator veli palatini) |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *If a parameter functions as a *prerequisite threshold* for surgery (e.g., age/weight for pediatric cases), it may not be considered an *ongoing consideration during the repair itself* when evaluating 'except' questions, especially when contrasted with dynamic perioperative factors.*"
  },
  "supplementary_callouts": {
    "guideline": "American Cleft Palate-Craniofacial Association (ACPA) guidelines for comprehensive care of cleft lip and palate.",
    "takeaway": "While age and weight are fundamental for *timing* cleft palate repair, they are typically met as *prerequisites*, shifting the *ongoing* surgical considerations to dynamic physiological and anesthetic parameters.",
    "visualization": "Intraoperatively, the surgeon visualizes the extent of the cleft, the disinserted levator veli palatini muscles, and the available mucoperiosteal flaps for tension-free closure, all while the anesthesiologist monitors real-time vitals, blood counts, and airway security."
  },
  "discrepancy_flag": ""
}
,
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
    "correct": "Heparin and antithrombin III have similar mechanisms of action.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "H_highlight_excellence": "Heparin and antithrombin III have similar mechanisms of action.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "Plastic Surgery",
    "P_plan_for_improvement": "Heparin and antithrombin III have similar mechanisms of action."
  },
  "supplementary_callouts": {
    "guideline": "multiple_choice_questions_in_plastic_surgery_shokrollahi_kayvan conv.docx",
    "takeaway": "Heparin and antithrombin III have similar mechanisms of action.",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1684,
  "specialty": "Plastic Surgery",
  "topic": "Reconstructive Surgery",
  "question": "Which of the following statements regarding deep inferior epigastric perforator (DIEP) flap reconstruction and abdominal wall imaging is FALSE?",
  "options": {
    "A": "A) Cutaneous perforators that do not originate from the deep inferior epigastric artery (peritoneocutaneous perforators) are rare findings when raising a DIEP flap.",
    "B": "B) Pre-operative evaluation of the vasculature of the abdominal wall has been shown to reduce operating times in perforator flap reconstruction.",
    "C": "C) The use of computed tomography of the abdominal wall has been shown to be cost-effective in some studies.",
    "D": "D) The radiation exposure associated with computed tomographic angiography of the abdominal wall is similar to a background radiation dose of 2.5 years."
  },
  "answer": "A",
  "explanation": {
    "correct": "**Surgical Mechanism:** The abdominal wall receives its blood supply from a complex network, primarily the deep inferior epigastric artery (DIEA) and its perforators, but also significantly from the superficial inferior epigastric artery (SIEA), superficial circumflex iliac artery (SCIA), and intercostal/lumbar perforators. While DIEA perforators are the workhorse for DIEP flaps, other perforators are common and can be critical for flap viability, either as primary or rescue vessels. The term 'peritoneocutaneous perforators' is less standard but refers to vessels not directly from the DIEA; these are not rare and are frequently identified on preoperative imaging.\\n\\n**Clinical Execution:** For an operating surgeon, comprehensive preoperative computed tomography angiography (CTA) is paramount to map all potential perforators, including those from the SIEA or intercostal systems, to ensure optimal flap design, minimize donor site morbidity, and reduce operative time. Relying solely on DIEA perforators without acknowledging the prevalence and utility of other vascular contributions can lead to suboptimal flap perfusion or necessitate conversion to a different flap type.",
    "A": "",
    "B": "This statement is TRUE. Preoperative CTA mapping of abdominal wall perforators significantly reduces operative time by allowing the surgeon to precisely plan the dissection, identify the most robust perforators, and avoid unnecessary exploration. If the stem implied that preoperative evaluation *increases* operating times, this option would be incorrect.",
    "C": "This statement is TRUE. While CTA incurs an initial cost, studies have shown it to be cost-effective by reducing complications such as flap loss, partial necrosis, and re-operations, which are far more expensive. If the stem suggested CTA *always* increases overall costs without benefit, this option would be incorrect.",
    "D": "This statement is TRUE. Abdominal CTA involves a significant radiation dose, often cited as equivalent to several years of natural background radiation, a factor that must be weighed against its clinical benefits. If the stem claimed radiation exposure was negligible or similar to a chest X-ray, this option would be incorrect.",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: A. Cutaneous perforators that do not originate from the deep inferior epigastric artery (peritoneocutaneous perforators) are rare findings when raising a DIEP flap.\\n\\n**The Pivot:** The clinical crux lies in understanding the comprehensive vascular anatomy of the abdominal wall, specifically that viable perforators for flap reconstruction are not exclusively derived from the deep inferior epigastric artery (DIEA) and are not rare findings.",
    "H_highlight_excellence": "**Surgical Mechanism:** The abdominal wall receives its blood supply from a complex network, primarily the deep inferior epigastric artery (DIEA) and its perforators, but also significantly from the superficial inferior epigastric artery (SIEA), superficial circumflex iliac artery (SCIA), and intercostal/lumbar perforators. While DIEA perforators are the workhorse for DIEP flaps, other perforators are common and can be critical for flap viability, either as primary or rescue vessels. The term 'peritoneocutaneous perforators' is less standard but refers to vessels not directly from the DIEA; these are not rare and are frequently identified on preoperative imaging.\\n\\n**Clinical Execution:** For an operating surgeon, comprehensive preoperative computed tomography angiography (CTA) is paramount to map all potential perforators, including those from the SIEA or intercostal systems, to ensure optimal flap design, minimize donor site morbidity, and reduce operative time. Relying solely on DIEA perforators without acknowledging the prevalence and utility of other vascular contributions can lead to suboptimal flap perfusion or necessitate conversion to a different flap type.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** Preoperative imaging, particularly CTA, is a cornerstone of modern autologous breast reconstruction using abdominal wall flaps. It provides a detailed 'roadmap' of the vascular anatomy, identifying not only the dominant deep inferior epigastric artery perforators but also accessory or alternative perforator systems, which are common and crucial for successful flap harvest and perfusion. Understanding the full spectrum of abdominal wall vascularity is key to optimizing outcomes and minimizing complications.\\n\\n| Perforator Type | Origin Artery | Clinical Significance | Preoperative Imaging Role |\\n| --- | --- | --- | --- |\\n| Deep Inferior Epigastric Perforators | Deep Inferior Epigastric Artery (DIEA) | Primary blood supply for DIEP flap; most commonly harvested | Identify caliber, location, intramuscular course, and branching patterns |\\n| Superficial Perforators | Superficial Inferior Epigastric Artery (SIEA), Superficial Circumflex Iliac Artery (SCIA) | Alternative flap option (SIEA flap); potential rescue vessels for DIEP | Assess patency and caliber for potential use, especially if DIEA is compromised |\\n| Intercostal/Lumbar Perforators | Intercostal/Lumbar Arteries | Contribute to abdominal wall perfusion; less common for flap harvest but present | Recognize their presence and contribution to overall abdominal wall vascularity |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *If a DIEP flap is planned, always assume significant anatomical variability in perforator origin and course; preoperative CTA is paramount for mapping all viable perforators, not just those directly from the DIEA, to ensure flap viability and optimize surgical efficiency.*"
  },
  "supplementary_callouts": {
    "guideline": "American Society of Plastic Surgeons (ASPS) guidelines on breast reconstruction; American Society for Reconstructive Microsurgery (ASRM) consensus statements.",
    "takeaway": "Successful DIEP flap reconstruction relies on comprehensive preoperative mapping of all viable abdominal wall perforators, which often include vessels not directly originating from the deep inferior epigastric artery.",
    "visualization": "On cross-sectional CTA, the surgeon must trace the course of multiple perforators from their origin (DIEA, SIEA, intercostals) through the rectus sheath and muscle, identifying their caliber and intramuscular course to select the most robust and safely dissectible vessels for flap harvest."
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1638,
  "specialty": "Plastic Surgery",
  "topic": "Breast Reconstruction",
  "question": "Which one of the following statements regarding autologous breast reconstruction is incorrect?",
  "options": {
    "A": "A) Tissue expanders do not work well for irradiated chest wall breast reconstructions.",
    "B": "B) The nipple must always be resected in cases of invasive breast cancer at less than 2.5cm of the areola.",
    "C": "C) Primary reconstruction is usually better than secondary reconstruction.",
    "D": "D) Skin-sparing mastectomy yields more local recurrences."
  },
  "answer": "A",
  "explanation": {
    "correct": "**Surgical Mechanism:** While radiation significantly increases the risk of complications such as capsular contracture, infection, skin necrosis, and expander exposure, tissue expanders are not absolutely contraindicated and can 'work well' in irradiated fields. Modern techniques, including delayed expansion, serial fat grafting, and the use of acellular dermal matrix (ADM), can mitigate these risks and improve tissue quality, often as a staged approach preceding definitive implant or autologous reconstruction. The fibrotic, less pliable nature of irradiated tissue necessitates careful patient selection and meticulous surgical technique.\\n\\n**Clinical Execution:** For an operating surgeon, this mechanism dictates that expander-based reconstruction in irradiated patients requires a thorough discussion of increased risks with the patient, careful planning for potential complications, and often a staged approach. The goal is to achieve adequate skin envelope expansion and improve tissue vascularity, even if the ultimate reconstruction is autologous, by preparing the recipient site.",
    "A": "",
    "B": "This statement is correct. Oncologic safety is paramount. For invasive breast cancer, a tumor located less than 2.0-2.5 cm from the nipple-areola complex (NAC) significantly increases the risk of microscopic involvement of the nipple ducts, necessitating NAC resection to ensure clear margins and minimize local recurrence. The stem would need to specify a non-invasive cancer or a tumor distance greater than 2.5 cm for this option to become incorrect.",
    "C": "This statement is correct. Primary (immediate) breast reconstruction generally offers superior aesthetic outcomes, better psychological adjustment for the patient, and often involves fewer surgical stages compared to secondary (delayed) reconstruction. Immediate reconstruction leverages the existing skin envelope and avoids the tissue contraction and scarring that occurs with delayed healing. For this option to be incorrect, the clinical scenario would need to involve significant post-mastectomy complications or patient comorbidities precluding immediate reconstruction.",
    "D": "This statement is incorrect. Numerous studies and meta-analyses have consistently demonstrated that skin-sparing mastectomy (SSM) does not increase the risk of local recurrence compared to conventional mastectomy, provided oncologic principles are strictly adhered to (e.g., clear margins, appropriate patient selection). SSM preserves the skin envelope for reconstruction without compromising cancer control. For this option to be correct, the statement would need to imply a specific scenario of compromised oncologic margins or inappropriate patient selection for SSM.",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: A. Tissue expanders do not work well for irradiated chest wall breast reconstructions.\\n\\n**The Pivot:** The clinical crux lies in understanding the nuanced efficacy and safety profile of tissue expanders in previously irradiated fields, which is often mistakenly considered an absolute contraindication.",
    "H_highlight_excellence": "**Surgical Mechanism:** While radiation significantly increases the risk of complications such as capsular contracture, infection, skin necrosis, and expander exposure, tissue expanders are not absolutely contraindicated and can 'work well' in irradiated fields. Modern techniques, including delayed expansion, serial fat grafting, and the use of acellular dermal matrix (ADM), can mitigate these risks and improve tissue quality, often as a staged approach preceding definitive implant or autologous reconstruction. The fibrotic, less pliable nature of irradiated tissue necessitates careful patient selection and meticulous surgical technique.\\n\\n**Clinical Execution:** For an operating surgeon, this mechanism dictates that expander-based reconstruction in irradiated patients requires a thorough discussion of increased risks with the patient, careful planning for potential complications, and often a staged approach. The goal is to achieve adequate skin envelope expansion and improve tissue vascularity, even if the ultimate reconstruction is autologous, by preparing the recipient site.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** Breast reconstruction in the setting of prior radiation therapy presents unique challenges due to compromised tissue quality and increased complication rates. However, various reconstructive modalities, including tissue expanders and autologous flaps, remain viable options with careful patient selection and surgical planning. Oncologic safety, particularly regarding nipple-sparing techniques and mastectomy type, must always guide reconstructive decisions.\\n\\n| Reconstruction Type/Factor | Impact of Radiation | Oncologic Safety Principle | Key Guideline/Consensus |\\n| --- | --- | --- | --- |\\n| Tissue Expander Reconstruction | Increased capsular contracture, infection, skin necrosis; still viable with careful technique/staging. | Not a contraindication, but higher complication rates require patient counseling. | ASPS, NCCN |\\n| Nipple-Sparing Mastectomy (NSM) | May be more challenging due to tissue compromise, but not directly contraindicated by radiation alone. | Tumor distance >2-2.5cm from NAC; no NAC involvement on biopsy. | SSO, NCCN |\\n| Primary vs. Secondary Reconstruction | Primary preferred for aesthetics/psychology; radiation may necessitate delayed-immediate or delayed approach. | Timing should not compromise adjuvant therapy. | ASPS, NCCN |\\n| Skin-Sparing Mastectomy (SSM) | Preserves skin envelope for reconstruction. | Oncologically safe; no increased local recurrence if margins clear. | SSO, NCCN |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *If a board question presents an absolute statement (e.g., 'always,' 'never,' 'do not work well') in a complex surgical or biological context, it is frequently the incorrect statement, as clinical reality often involves nuance and exceptions.*"
  },
  "supplementary_callouts": {
    "guideline": "American Society of Plastic Surgeons (ASPS), Society of Surgical Oncology (SSO), National Comprehensive Cancer Network (NCCN)",
    "takeaway": "Tissue expanders are a viable, though higher-risk, option for breast reconstruction in irradiated fields, and their use is not an absolute contraindication.",
    "visualization": "The surgeon must 'see' the fibrotic, often indurated and less pliable nature of irradiated skin and subcutaneous tissue, recognizing its compromised vascularity and reduced elasticity, which impacts expander placement, fill rates, and overall tissue tolerance compared to non-irradiated tissue."
  },
  "discrepancy_flag": ""
}
,
{
  "id": 90771,
  "specialty": "Plastic Surgery",
  "topic": "Wound Healing and Scar Management",
  "question": "A 21-year-old graduate student has a large hypertrophic scar on the lower part of her face. The patient had sustained a laceration on her face 2 years previously after hitting her face on the side of a swimming pool. Which of the following statements regarding scar revision is true?",
  "options": {
    "A": "A) Scar maturation refers to the change in size of the wound in the first 1 to 2 months.",
    "B": "B) Scar revision should have been performed in the first 3 months after injury to minimize fibrosis.",
    "C": "C) Revision should be performed earlier in children than in adults.",
    "D": "D) It corrects undesirable pigmentation."
  },
  "answer": "A",
  "explanation": {
    "correct": "**Surgical Mechanism:** Wound healing progresses through distinct inflammatory, proliferative, and remodeling phases. Scar maturation, a component of the remodeling phase, is a dynamic process involving collagen reorganization (Type III to Type I), cross-linking, and vascular regression. This leads to observable changes in scar characteristics, including initial reduction in size, softening, flattening, and blanching. While maturation can continue for 1-2 years, the most significant and rapid changes in size, contour, and vascularity typically occur within the first 3-6 months, with noticeable shifts in the first 1-2 months.\\n\\n**Clinical Execution:** Understanding the natural history of scar maturation is paramount for surgical planning. Early scar changes, including initial size reduction and softening, are part of the physiological process. Intervening too early (e.g., within 3 months) risks exacerbating the inflammatory response, disrupting ongoing collagen remodeling, and potentially worsening the scar. Therefore, surgical revision is typically deferred until the scar has fully matured, usually 6-12 months post-injury, to allow for maximal natural improvement and to accurately assess the final scar characteristics that require intervention.",
    "A": "",
    "B": "Scar revision should generally be delayed, not performed within the first 3 months. Early intervention during the active inflammatory and proliferative phases can disrupt ongoing healing, increase the risk of infection, and potentially lead to a worse scar. The goal is to allow the scar to mature fully before revision. This option would be correct only if the stem described an acute wound requiring primary closure or immediate debridement, not scar revision.",
    "C": "Children often exhibit more aggressive scarring tendencies (e.g., higher incidence of hypertrophic scars and keloids) due to more robust inflammatory responses and collagen synthesis. Therefore, scar revision in children is often delayed even longer than in adults, or performed in stages, to allow for maximal natural maturation and to minimize recurrence. This option would be correct if the stem asked about acute wound closure in children, where primary repair is often prioritized, but not scar revision.",
    "D": "Scar revision primarily addresses scar contour, texture, width, and orientation. While some techniques (e.g., dermabrasion, laser) can indirectly improve pigmentation, it is not the primary goal or a guaranteed outcome of standard surgical scar revision. Pigmentation issues are often managed with specific laser therapies or topical agents. This option would be correct if the question specifically asked about laser treatment for dyspigmentation, not general scar revision.",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: A. Scar maturation encompasses the initial dynamic changes in wound size, color, and texture during the early remodeling phase.\\n\\n**The Pivot:** The critical distinction lies in understanding the timeline of wound healing phases, particularly the early remodeling and maturation processes, which dictate optimal timing for intervention and define the natural history of scar evolution.",
    "H_highlight_excellence": "**Surgical Mechanism:** Wound healing progresses through distinct inflammatory, proliferative, and remodeling phases. Scar maturation, a component of the remodeling phase, is a dynamic process involving collagen reorganization (Type III to Type I), cross-linking, and vascular regression. This leads to observable changes in scar characteristics, including initial reduction in size, softening, flattening, and blanching. While maturation can continue for 1-2 years, the most significant and rapid changes in size, contour, and vascularity typically occur within the first 3-6 months, with noticeable shifts in the first 1-2 months.\\n\\n**Clinical Execution:** Understanding the natural history of scar maturation is paramount for surgical planning. Early scar changes, including initial size reduction and softening, are part of the physiological process. Intervening too early (e.g., within 3 months) risks exacerbating the inflammatory response, disrupting ongoing collagen remodeling, and potentially worsening the scar. Therefore, surgical revision is typically deferred until the scar has fully matured, usually 6-12 months post-injury, to allow for maximal natural improvement and to accurately assess the final scar characteristics that require intervention.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** Scar maturation is a prolonged, dynamic process of wound healing, involving collagen remodeling and vascular changes, which can take 6-12 months or longer. Surgical scar revision is generally deferred until this process is complete to optimize outcomes and avoid premature intervention during active remodeling.\\n\\n| Scar Phase | Timeline | Key Characteristics | Surgical Timing for Revision |\\n| --- | --- | --- | --- |\\n| Inflammatory | Days 0-6 | Hemostasis, neutrophil/macrophage infiltration, edema, erythema | Acute wound care, primary closure |\\n| Proliferative | Days 4-21 | Granulation tissue, angiogenesis, collagen deposition (Type III), wound contraction | Acute wound care, infection control |\\n| Remodeling/Maturation | Day 21 - 1-2 years | Collagen Type I conversion, cross-linking, vascular regression, scar softening/flattening/blanching | Typically >6-12 months post-injury (after full maturation) |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *If a scar is less than 6-12 months old, then defer surgical revision and consider conservative management (silicone, massage, intralesional steroids) as it is still actively maturing and may improve spontaneously.*"
  },
  "supplementary_callouts": {
    "guideline": "American Society of Plastic Surgeons (ASPS) guidelines on scar management and timing of intervention.",
    "takeaway": "Scar maturation is a dynamic, multi-month process, and surgical revision is optimally performed after the scar has fully matured to achieve the best aesthetic and functional outcomes.",
    "visualization": "Visually 'seeing' a scar transition from red, raised, and firm to pale, flat, and pliable over many months indicates maturation, signaling the appropriate window for surgical consideration rather than premature intervention."
  },
  "discrepancy_flag": ""
}
,
{
  "id": 75,
  "specialty": "Plastic Surgery",
  "topic": "Burns",
  "question": "A 16-year-old girl sustains a steam burn measuring 6 by 7 inches over the ulnar aspect of her right forearm. Blisters develop over the entire area of the burn wound, and by the time the patient is seen 6 hours after the injury, some of the blisters have ruptured spontaneously. In addition to debridement of the necrotic epithelium, all therapeutic regimens might be considered appropriate for her EXCEPT:",
  "options": {
    "A": "A) Application of mafenide acetate cream, but no daily washes or dressing",
    "B": "B) Heterograft application with sutures to secure it in place and daily washes, but no dressing",
    "C": "C) Application of silver sulfadiazine and daily washes, but no dressing",
    "D": "D) Application of polyvinyl pyrrolidone foam, daily washes and a light occlusive dressing changed daily"
  },
  "answer": "B",
  "explanation": {
    "correct": "**Surgical Mechanism:** Partial-thickness burns involve damage to the epidermis and a portion of the dermis, retaining viable epithelial elements within hair follicles and sweat glands that allow for spontaneous re-epithelialization. The primary goals of initial management are infection prevention, pain control, and promotion of a moist wound environment conducive to healing. Topical antimicrobial agents (e.g., silver sulfadiazine, mafenide acetate) reduce bacterial colonization, while appropriate dressings protect the wound and manage exudate. Heterografts (xenografts, typically porcine) are biological dressings used for temporary coverage of deeper partial-thickness or full-thickness burns, or very large superficial partial-thickness burns, to reduce fluid loss, pain, and infection, or to prepare the wound bed for autografting. Applying a sutured heterograft to a relatively small (6x7 inch) partial-thickness burn, which is expected to heal spontaneously, represents an over-intervention and is not standard initial care.\\n\\n**Clinical Execution:** For a partial-thickness burn of this size and depth, the surgeon's clinical execution focuses on meticulous wound cleansing, debridement of non-viable tissue, and the application of a suitable topical antimicrobial agent with a protective dressing. The objective is to facilitate natural re-epithelialization. Employing a sutured heterograft for such a burn introduces unnecessary surgical complexity, potential for procedural complications, and increased cost, without offering a significant advantage over simpler, effective topical treatments. This approach deviates from the principle of least invasive effective management for spontaneously healing wounds.",
    "A": "Mafenide acetate is a potent, broad-spectrum topical antimicrobial effective against many burn pathogens, including Pseudomonas, and penetrates eschar well. While the instruction 'no daily washes or dressing' is suboptimal for comprehensive wound care, the *application* of mafenide itself is a valid treatment option for burns, particularly deeper partial-thickness burns or those with high infection risk. This option would be inappropriate if the burn were very superficial, where mafenide's potential side effects (pain, metabolic acidosis) might outweigh its benefits, or if it explicitly stated no wound care whatsoever.",
    "B": "",
    "C": "Silver sulfadiazine (SSD) is a widely used and effective topical antimicrobial for partial-thickness burns, significantly reducing bacterial colonization. Daily washes are standard practice for burn wound care. Although 'no dressing' is not ideal as burns typically benefit from a protective covering, the core treatment of SSD with washes is appropriate. This option would be inappropriate if the patient had a known sulfa allergy or if the burn was extremely superficial where SSD might delay re-epithelialization.",
    "D": "Polyvinyl pyrrolidone (PVP) foam dressings, or similar modern foam dressings, provide a moist wound environment, absorb exudate, and protect the wound. Daily washes and light occlusive dressings are standard for partial-thickness burns. This represents a perfectly appropriate and often preferred modern approach to partial-thickness burn care, promoting healing and patient comfort. This option would be inappropriate only if the burn had excessive exudate that would overwhelm the dressing, or if the patient had a specific allergy to dressing components.",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: B. Heterograft application with sutures to secure it in place and daily washes, but no dressing.\\n\\n**The Pivot:** The clinical presentation of blisters and spontaneous rupture 6 hours post-injury indicates a partial-thickness burn, which typically heals spontaneously with appropriate topical wound care, rendering aggressive surgical grafting techniques like sutured heterografts an unnecessary and inappropriate initial management.",
    "H_highlight_excellence": "**Surgical Mechanism:** Partial-thickness burns involve damage to the epidermis and a portion of the dermis, retaining viable epithelial elements within hair follicles and sweat glands that allow for spontaneous re-epithelialization. The primary goals of initial management are infection prevention, pain control, and promotion of a moist wound environment conducive to healing. Topical antimicrobial agents (e.g., silver sulfadiazine, mafenide acetate) reduce bacterial colonization, while appropriate dressings protect the wound and manage exudate. Heterografts (xenografts, typically porcine) are biological dressings used for temporary coverage of deeper partial-thickness or full-thickness burns, or very large superficial partial-thickness burns, to reduce fluid loss, pain, and infection, or to prepare the wound bed for autografting. Applying a sutured heterograft to a relatively small (6x7 inch) partial-thickness burn, which is expected to heal spontaneously, represents an over-intervention and is not standard initial care.\\n\\n**Clinical Execution:** For a partial-thickness burn of this size and depth, the surgeon's clinical execution focuses on meticulous wound cleansing, debridement of non-viable tissue, and the application of a suitable topical antimicrobial agent with a protective dressing. The objective is to facilitate natural re-epithelialization. Employing a sutured heterograft for such a burn introduces unnecessary surgical complexity, potential for procedural complications, and increased cost, without offering a significant advantage over simpler, effective topical treatments. This approach deviates from the principle of least invasive effective management for spontaneously healing wounds.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** Initial management of partial-thickness burns prioritizes meticulous wound cleansing, debridement of non-viable tissue, effective pain control, and prevention of infection to facilitate spontaneous re-epithelialization. Topical antimicrobial agents are crucial for bacterial load reduction, and appropriate dressings maintain a moist environment, protect the wound, and manage exudate. Surgical interventions like grafting are generally reserved for deeper, larger, or non-healing burns, not as primary initial management for typical partial-thickness injuries expected to heal spontaneously.\\n\\n| Burn Depth | Clinical Presentation | Initial Management | Healing Time/Outcome |\\n| --- | --- | --- | --- |\\n| Superficial (1st degree) | Erythema, pain, no blisters, blanches | Cooling, analgesia, moisturizers | 3-6 days, no scarring |\\n| Superficial Partial-Thickness (2nd degree) | Blisters, moist, painful, blanches briskly | Debridement, topical antimicrobials (e.g., SSD, bacitracin), protective dressings | 1-3 weeks, minimal scarring |\\n| Deep Partial-Thickness (2nd degree) | Blisters (often ruptured), dry, less painful, sluggish blanching, mottled | Debridement, topical antimicrobials, dressings; consider excision/grafting if not healing by 3 weeks | 3-8 weeks, significant scarring, contracture risk |\\n| Full-Thickness (3rd degree) | Waxy, leathery, insensate, no blanching, thrombosed vessels | Excision, skin grafting (autograft) | Requires grafting, significant scarring, contracture risk |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *If a partial-thickness burn is expected to heal spontaneously (superficial partial-thickness, <3 weeks), prioritize non-surgical topical antimicrobial dressings; reserve surgical options like grafting for deeper, larger, or non-healing burns.*"
  },
  "supplementary_callouts": {
    "guideline": "American Burn Association (ABA) Practice Guidelines for Burn Care.",
    "takeaway": "For spontaneously healing partial-thickness burns, initial management focuses on topical antimicrobials and dressings, not surgical grafting.",
    "visualization": "On examination, a superficial partial-thickness burn presents with intact or ruptured blisters, a moist, pink/red wound bed that blanches briskly with pressure, and is exquisitely painful. A deep partial-thickness burn may appear mottled, less moist, have sluggish blanching, and be less painful due to nerve damage. Neither typically warrants immediate sutured heterografting as primary initial management."
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1708,
  "specialty": "Plastic Surgery",
  "topic": "Breast Reconstruction",
  "question": "Which of the following autologous tissue flaps is characterized by its reliance on the rectus abdominis muscle and its perforators, but remains attached to its original blood supply for breast reconstruction?",
  "options": {
    "A": "A) A pedicled TRAM flap.",
    "B": "B) A free TRAM flap.",
    "C": "C) A pedicled DIEP flap.",
    "D": "D) A free DIEP flap."
  },
  "answer": "A",
  "explanation": {
    "correct": "**Surgical Mechanism:** A pedicled TRAM (Transverse Rectus Abdominis Myocutaneous) flap utilizes the rectus abdominis muscle and its overlying skin and fat, typically based on the superior epigastric vessels. The muscle is partially or completely harvested, but the vascular pedicle remains intact, allowing the flap to be tunneled subcutaneously to the chest wall for breast mound creation. This contrasts with free flaps where the vascular pedicle is transected and reanastomosed to recipient vessels in the chest.\\n\\n**Clinical Execution:** For an operating surgeon, selecting a pedicled TRAM flap involves careful assessment of the abdominal wall integrity, patient comorbidities, and the need for a robust, well-vascularized tissue volume. The pedicled approach avoids microvascular anastomosis, potentially reducing operative time and complexity compared to free flaps, but carries a higher risk of abdominal wall morbidity and potential for partial flap necrosis if the pedicle is compromised or the tunnel is too tight.",
    "A": "",
    "B": "A free TRAM flap also uses the rectus abdominis muscle and its perforators, but its defining characteristic is the *detachment* of the vascular pedicle (inferior epigastric vessels) and subsequent *microvascular reanastomosis* to recipient vessels in the chest. It does not remain attached to its original blood supply. For this to be correct, the question would need to specify a flap requiring microvascular anastomosis.",
    "C": "A pedicled DIEP (Deep Inferior Epigastric Perforator) flap is a misnomer; a DIEP flap is, by definition, a *free flap*. It harvests only skin and fat, preserving the rectus abdominis muscle, and relies on perforators from the deep inferior epigastric artery. It requires microvascular anastomosis and is never pedicled in the context of breast reconstruction. For this to be correct, the question would need to be about a free flap that preserves the rectus muscle.",
    "D": "While a free DIEP flap is a correct description of a DIEP flap, the question specifically asks for a flap that 'remains attached to its original blood supply,' which a free flap, by definition, does not. It requires microvascular anastomosis. For this to be correct, the question would need to specify a free flap that preserves the rectus muscle.",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: A. A pedicled TRAM flap remains attached to its original blood supply, distinguishing it from free flaps.\\n\\n**The Pivot:** The critical distinction between pedicled and free flaps lies in the integrity of their vascular pedicle to the donor site versus its detachment and reanastomosis.",
    "H_highlight_excellence": "**Surgical Mechanism:** A pedicled TRAM (Transverse Rectus Abdominis Myocutaneous) flap utilizes the rectus abdominis muscle and its overlying skin and fat, typically based on the superior epigastric vessels. The muscle is partially or completely harvested, but the vascular pedicle remains intact, allowing the flap to be tunneled subcutaneously to the chest wall for breast mound creation. This contrasts with free flaps where the vascular pedicle is transected and reanastomosed to recipient vessels in the chest.\\n\\n**Clinical Execution:** For an operating surgeon, selecting a pedicled TRAM flap involves careful assessment of the abdominal wall integrity, patient comorbidities, and the need for a robust, well-vascularized tissue volume. The pedicled approach avoids microvascular anastomosis, potentially reducing operative time and complexity compared to free flaps, but carries a higher risk of abdominal wall morbidity and potential for partial flap necrosis if the pedicle is compromised or the tunnel is too tight.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** Autologous breast reconstruction offers a natural, long-lasting result using the patient's own tissue. Key flap types include TRAM (pedicled or free) and DIEP, primarily sourced from the abdomen. The choice depends on patient anatomy, comorbidities, surgeon expertise, and desired outcomes, balancing donor site morbidity with reconstructive benefits.\\n\\n| Flap Type | Vascular Basis | Muscle Involvement | Key Advantage/Disadvantage |\\n| --- | --- | --- | --- |\\n| Pedicled TRAM | Superior Epigastric (intact) | Partial/Complete Rectus Abdominis | No microvascular anastomosis; higher abdominal morbidity |\\n| Free TRAM | Inferior Epigastric (transected) | Partial/Complete Rectus Abdominis | Improved vascularity; microvascular anastomosis required |\\n| DIEP Flap | Deep Inferior Epigastric Perforators (transected) | Rectus Abdominis preserved | Lower abdominal morbidity; microvascular anastomosis required |\\n| Latissimus Dorsi Flap | Thoracodorsal Artery | Latissimus Dorsi Muscle | Less tissue volume; good for smaller breasts or adjunct |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *If a flap is described as 'pedicled,' its vascular supply remains *in situ*; if 'free,' it requires *microvascular anastomosis* to new recipient vessels.*"
  },
  "supplementary_callouts": {
    "guideline": "American Society of Plastic Surgeons (ASPS) guidelines on breast reconstruction.",
    "takeaway": "The fundamental distinction between pedicled and free flaps lies in the integrity of their vascular pedicle to the donor site.",
    "visualization": "On imaging (e.g., CT angiogram for perforator mapping), the surgeon must visualize the intact superior epigastric pedicle for a pedicled TRAM, or the transected inferior epigastric pedicle and recipient vessels for a free flap, and the perforators coursing through the rectus muscle for TRAM/DIEP. In the OR, this translates to careful dissection to preserve the pedicle for pedicled flaps or meticulous microvascular anastomosis for free flaps."
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1709,
  "specialty": "Plastic Surgery",
  "topic": "Facial Plastic Surgery",
  "question": "A patient is undergoing rhinoplasty. To minimize long-term volume loss and maintain structural support, which of the following graft materials is most appropriate for dorsal augmentation?",
  "options": {
    "A": "A) Diced cartilage wrapped in fascia (DCF)",
    "B": "B) Irradiated cadaveric costal cartilage (ICCC)",
    "C": "C) Autologous fat injection",
    "D": "D) Silicone implant"
  },
  "answer": "A",
  "explanation": {
    "correct": "**Surgical Mechanism:** Autologous cartilage, particularly septal, conchal, or costal cartilage, is the gold standard for rhinoplasty grafting due to its biocompatibility, low infection risk, and structural integrity. When diced and wrapped in fascia (e.g., temporalis fascia), the cartilage fragments are held together, preventing displacement and promoting revascularization, which significantly reduces resorption compared to solid cartilage grafts or fat. The fascia provides a scaffold and a vascularized bed, enhancing graft survival and maintaining a smooth contour.\\n\\n**Clinical Execution:** For dorsal augmentation requiring predictable volume and contour, DCF grafts are preferred. Solid cartilage grafts (autologous or allogeneic) can resorb or warp. Autologous fat has highly unpredictable resorption rates. Alloplastic implants carry risks of extrusion, infection, and capsular contracture, and do not integrate biologically. DCF provides a natural feel, integrates well, and offers a stable, long-lasting augmentation with a low complication profile, making it a primary choice for surgeons aiming for durable results and minimal revision rates.",
    "A": "",
    "B": "While readily available and avoiding donor site morbidity, ICCC has a significant risk of unpredictable resorption (up to 50% or more) and warping over time, leading to contour irregularities and volume loss. It also carries a theoretical, albeit low, risk of disease transmission and immunologic reaction. For this option to be correct, the stem would need to prioritize ease of access and avoidance of autologous donor site morbidity over long-term volume stability and predictability.",
    "C": "Autologous fat is highly unpredictable in terms of graft survival and volume retention, with resorption rates often exceeding 50-70%. While minimally invasive, it cannot provide structural support and is prone to irregular contouring due to differential resorption. For this option to be correct, the stem would need to emphasize minimal invasiveness and a desire for subtle, non-structural volume enhancement, accepting high resorption rates.",
    "D": "Silicone implants provide predictable volume and are easy to carve, but they are foreign bodies with no biological integration. They carry risks of infection, extrusion, capsular contracture, and palpability, especially in thin-skinned individuals. Long-term complications can necessitate removal. For this option to be correct, the stem would need to prioritize ease of insertion and predictable initial volume over long-term biological integration and lower complication rates.",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: A. Diced cartilage wrapped in fascia (DCF) offers superior long-term volume stability and structural integrity for dorsal augmentation in rhinoplasty compared to other options.\\n\\n**The Pivot:** The clinical crux is selecting a graft material for dorsal augmentation that balances predictable volume retention, structural support, and minimal long-term complications, with resorption rates being the primary differentiator.",
    "H_highlight_excellence": "**Surgical Mechanism:** Autologous cartilage, particularly septal, conchal, or costal cartilage, is the gold standard for rhinoplasty grafting due to its biocompatibility, low infection risk, and structural integrity. When diced and wrapped in fascia (e.g., temporalis fascia), the cartilage fragments are held together, preventing displacement and promoting revascularization, which significantly reduces resorption compared to solid cartilage grafts or fat. The fascia provides a scaffold and a vascularized bed, enhancing graft survival and maintaining a smooth contour.\\n\\n**Clinical Execution:** For dorsal augmentation requiring predictable volume and contour, DCF grafts are preferred. Solid cartilage grafts (autologous or allogeneic) can resorb or warp. Autologous fat has highly unpredictable resorption rates. Alloplastic implants carry risks of extrusion, infection, and capsular contracture, and do not integrate biologically. DCF provides a natural feel, integrates well, and offers a stable, long-lasting augmentation with a low complication profile, making it a primary choice for surgeons aiming for durable results and minimal revision rates.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** Rhinoplasty graft selection is a critical decision impacting long-term aesthetic and functional outcomes. Autologous cartilage remains the gold standard due to its biocompatibility and structural integrity. Techniques like DCF optimize cartilage graft survival and contour, minimizing resorption. Alloplastic materials offer convenience but carry higher long-term complication risks.\\n\\n| Graft Type | Advantages | Disadvantages | Primary Indication for Dorsal Augmentation |\\n| --- | --- | --- | --- |\\n| Autologous Cartilage (Solid) | Biocompatible, low infection, structural support | Donor site morbidity, potential warping/resorption | Minor to moderate structural support, tip/alar grafts |\\n| Diced Cartilage in Fascia (DCF) | Excellent volume retention, smooth contour, biocompatible | Requires fascia harvest, technically demanding | Moderate to significant dorsal augmentation, camouflage |\\n| Irradiated Cadaveric Costal Cartilage (ICCC) | No donor site morbidity, readily available | High resorption rate, warping, theoretical disease risk | Temporary augmentation, revision cases (with caution) |\\n| Autologous Fat | Minimally invasive, natural feel | Unpredictable high resorption, no structural support | Minor contour irregularities, soft tissue augmentation (non-structural) |\\n| Silicone/Alloplastic Implants | Predictable volume, easy to carve/insert | Infection, extrusion, capsular contracture, foreign body reaction | Patients unwilling for autologous harvest (with caution) |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *If the rhinoplasty stem demands predictable, long-term dorsal volume augmentation with minimal resorption and a natural feel, then autologous diced cartilage wrapped in fascia is the superior choice, balancing stability and biocompatibility.*"
  },
  "supplementary_callouts": {
    "guideline": "American Academy of Facial Plastic and Reconstructive Surgery (AAFPRS) consensus statements on rhinoplasty grafting.",
    "takeaway": "Autologous diced cartilage wrapped in fascia provides the most predictable and stable long-term dorsal augmentation in rhinoplasty by minimizing graft resorption and maintaining a smooth contour.",
    "visualization": "Imagine a smooth, well-defined dorsal aesthetic line on lateral view, and a natural, non-palpable contour on palpation, achieved by a graft that has integrated seamlessly without visible edges or irregularities, and maintained its initial volume over years."
  },
  "discrepancy_flag": ""
}
,
{
  "id": 287,
  "specialty": "Plastic Surgery",
  "topic": "Craniofacial Anomalies",
  "question": "All of the following parameters are important considerations in the repair of cleft palate except.",
  "options": {
    "A": "A) Age and weight",
    "B": "B) Anesthesia service quality",
    "C": "C) Hemoglobin and WBC count",
    "D": "D) Maternal Age"
  },
  "answer": "A",
  "explanation": {
    "correct": "**Surgical Mechanism:** Cleft palate repair, typically performed between 6-18 months, balances optimal timing for speech development and maxillary growth with anesthetic safety. Weight is crucial for calculating blood volume, fluid requirements, and anesthetic dosing. However, once a patient meets the general age/weight thresholds (e.g., 'rule of 10s' for some pediatric surgeries: 10 weeks old, 10 pounds, 10 g/dL Hgb), these become baseline criteria rather than parameters requiring continuous, dynamic consideration in the immediate pre-operative phase.\\n\\n**Clinical Execution:** The surgeon and anesthesiologist confirm the patient meets age/weight criteria. Beyond this, the *quality* of the anesthesia service, the *current* hemoglobin, and the *absence* of infection (WBC) are dynamic, real-time variables that directly dictate surgical go/no-go decisions, perioperative management, and potential complications. Maternal age, while an epidemiological risk factor for the condition, holds no direct bearing on the *repair* itself.",
    "A": "",
    "B": "This is a paramount consideration. High-quality pediatric anesthesia is non-negotiable for safe cleft palate repair, directly impacting patient safety, airway management, and pain control. Without it, surgery is contraindicated. The stem would need to imply a *uniformly excellent* anesthesia service for this to be less critical.",
    "C": "These are critical physiological parameters. Hemoglobin levels dictate oxygen carrying capacity and transfusion needs, while WBC count indicates infection status, both directly influencing surgical risk and timing. The stem would need to specify a patient with *perfectly normal and stable* labs for this to be less critical.",
    "D": "Maternal age is an epidemiological risk factor for the *development* of cleft palate, but it is entirely irrelevant to the *surgical repair* of the already-present defect in the child. This option is a strong distractor for 'except' if the question is interpreted as 'irrelevant to repair'. However, compared to 'Age and weight' which are *foundational* for surgical timing, maternal age is simply not a parameter for the *repair* itself. If the question asked for a parameter *not related to the patient's current surgical status*, this would be the correct answer.",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: A. While age and weight are fundamental for surgical timing and safety, they are often considered *thresholds* for eligibility rather than *dynamic, immediately variable parameters* requiring continuous assessment and adjustment in the same manner as physiological status or logistical support.\\n\\n**The Pivot:** The critical distinction lies in identifying which factor, among those listed, is *least* directly variable or immediately actionable in the *pre-operative assessment and surgical decision-making* for cleft palate repair, compared to other critical, dynamic physiological or logistical factors.",
    "H_highlight_excellence": "**Surgical Mechanism:** Cleft palate repair, typically performed between 6-18 months, balances optimal timing for speech development and maxillary growth with anesthetic safety. Weight is crucial for calculating blood volume, fluid requirements, and anesthetic dosing. However, once a patient meets the general age/weight thresholds (e.g., 'rule of 10s' for some pediatric surgeries: 10 weeks old, 10 pounds, 10 g/dL Hgb), these become baseline criteria rather than parameters requiring continuous, dynamic consideration in the immediate pre-operative phase.\\n\\n**Clinical Execution:** The surgeon and anesthesiologist confirm the patient meets age/weight criteria. Beyond this, the *quality* of the anesthesia service, the *current* hemoglobin, and the *absence* of infection (WBC) are dynamic, real-time variables that directly dictate surgical go/no-go decisions, perioperative management, and potential complications. Maternal age, while an epidemiological risk factor for the condition, holds no direct bearing on the *repair* itself.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** Successful cleft palate repair requires a multidisciplinary approach, meticulous pre-operative assessment, and precise surgical technique. Key considerations include optimal timing to facilitate speech development and maxillary growth, ensuring anesthetic safety in a pediatric population, and managing potential complications like infection or hemorrhage.\\n\\n| Parameter Category | Clinical Significance | Impact on Repair Decision | Guideline Reference |\\n| --- | --- | --- | --- |\\n| Patient Demographics (Age/Weight) | Surgical timing, Anesthetic dosing, Blood volume | Threshold for eligibility; less dynamic than other factors | ACPA, ASPS guidelines for timing |\\n| Physiological Status (Hgb/WBC) | Oxygenation, Infection risk, Transfusion needs | Dynamic go/no-go decision, perioperative management | ASA guidelines, institutional protocols |\\n| Logistical/Safety (Anesthesia Quality) | Airway management, Pain control, Overall safety | Absolute prerequisite for safe surgery | AAP, ASA pediatric anesthesia guidelines |\\n| Etiological Factors (Maternal Age) | Epidemiological risk for condition development | No direct impact on surgical repair planning | N/A (not a repair parameter) |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *When evaluating 'except' questions in pediatric surgery, distinguish between *baseline eligibility criteria* (e.g., age/weight thresholds) and *dynamic, immediately actionable parameters* (e.g., current labs, anesthesia availability) that directly influence the perioperative plan.*"
  },
  "supplementary_callouts": {
    "guideline": "American Cleft Palate-Craniofacial Association (ACPA) Parameters for Care",
    "takeaway": "While age and weight establish surgical readiness, the dynamic assessment of physiological status and the quality of support services are paramount for safe cleft palate repair.",
    "visualization": "The surgeon visualizes the extent of the palatal defect, the available mucoperiosteal flaps, and the critical structures (e.g., greater palatine artery, levator veli palatini muscle) that must be mobilized and repaired to achieve a tension-free, functional closure, all while mentally integrating the patient's current physiological stability and the readiness of the surgical team."
  },
  "discrepancy_flag": ""
}
,
{
  "id": 484,
  "specialty": "Plastic Surgery",
  "topic": "Wound Healing & Scar Management",
  "question": "A 21-year-old graduate student has a large hypertrophic scar on the lower part of her face. The patient had sustained a laceration on her face 2 years previously after hitting her face on the side of a swimming pool. Which of the following statements regarding scar revision is true?",
  "options": {
    "A": "A) Scar maturation refers to the change in size of the wound in the first 1 to 2 months.",
    "B": "B) Scar revision should have been performed in the first 3 months after injury to minimize fibrosis.",
    "C": "C) Revision should be performed earlier in children than in adults.",
    "D": "D) It corrects undesirable pigmentation."
  },
  "answer": "E",
  "explanation": {
    "correct": "**Surgical Mechanism:** Scar maturation involves a continuous process of collagen synthesis and degradation, with a critical shift from Type III to Type I collagen, increased cross-linking, and a progressive decrease in cellularity and vascularity. This remodeling phase, driven by fibroblasts and myofibroblasts, continues for many months, leading to a softer, flatter, and paler scar. Early intervention disrupts this natural biological cascade, often leading to a worse outcome due to persistent inflammation and immature collagen deposition.\\n\\n**Clinical Execution:** Operating on an immature scar risks exacerbating the inflammatory response, increasing wound tension, and promoting further hypertrophic or keloidal changes. Delaying revision until the scar is fully mature (typically 12-18 months post-injury) ensures the tissue has reached its maximal pliability and minimal vascularity, providing the surgeon with the most stable and predictable substrate for re-excision, Z-plasty, or other reconstructive techniques, thereby optimizing the aesthetic and functional outcome.",
    "A": "Scar maturation is a prolonged process, typically lasting 12-18 months, not just 1-2 months. The initial 1-2 months primarily represent the proliferative and early remodeling phases, where the scar is still highly active and dynamic. If the stem referred to the *initial wound contraction phase*, then 1-2 months might be relevant, but not for overall scar maturation.",
    "B": "Performing scar revision in the first 3 months is premature and contraindicated. This period is characterized by intense inflammation, rapid collagen deposition, and high metabolic activity, making the scar prone to worsening. Early intervention would likely increase fibrosis and lead to a less favorable result. This option would be correct if the question asked about *acute wound closure* or *primary repair*, not scar revision.",
    "C": "Children generally exhibit a more robust inflammatory response and have a higher propensity for hypertrophic scarring and keloid formation due to active growth factors and collagen synthesis. Therefore, scar revision in children is often *delayed longer* than in adults, or approached with extreme caution, to allow for maximal natural maturation and to minimize recurrence. This option would be correct if it stated that *primary wound closure* in children might require more meticulous technique due to growth, but not revision timing.",
    "D": "While some scar revision techniques (e.g., dermabrasion, laser therapy) can improve scar texture and, secondarily, some dyspigmentation, the primary goal of surgical scar revision is to improve contour, width, and alignment, not primarily to correct pigmentation. Pigmentation issues are often addressed with adjunctive therapies (e.g., lasers for hyperpigmentation, camouflage for hypopigmentation) rather than surgical revision itself. This option would be correct if it specified *laser therapy* or *topical agents* as the intervention for pigmentation.",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: E. Scar revision should be delayed for approximately 1 year to allow maturation.\\n\\n**The Pivot:** Optimal scar revision timing hinges on complete scar maturation, a dynamic process typically spanning 12-18 months, allowing collagen remodeling and vascular regression to stabilize the tissue.",
    "H_highlight_excellence": "**Surgical Mechanism:** Scar maturation involves a continuous process of collagen synthesis and degradation, with a critical shift from Type III to Type I collagen, increased cross-linking, and a progressive decrease in cellularity and vascularity. This remodeling phase, driven by fibroblasts and myofibroblasts, continues for many months, leading to a softer, flatter, and paler scar. Early intervention disrupts this natural biological cascade, often leading to a worse outcome due to persistent inflammation and immature collagen deposition.\\n\\n**Clinical Execution:** Operating on an immature scar risks exacerbating the inflammatory response, increasing wound tension, and promoting further hypertrophic or keloidal changes. Delaying revision until the scar is fully mature (typically 12-18 months post-injury) ensures the tissue has reached its maximal pliability and minimal vascularity, providing the surgeon with the most stable and predictable substrate for re-excision, Z-plasty, or other reconstructive techniques, thereby optimizing the aesthetic and functional outcome.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** Scar management is a critical aspect of reconstructive surgery, requiring a deep understanding of wound healing biology. Hypertrophic scars and keloids represent aberrant healing responses, characterized by excessive collagen deposition. Optimal timing for surgical revision is paramount, typically deferred until scar maturation is complete, allowing for maximal tissue remodeling and minimizing recurrence risk. Non-surgical modalities often complement surgical approaches.\\n\\n| Scar Type | Key Characteristics | Timing for Surgical Revision | Primary Management Strategy |\\n| --- | --- | --- | --- |\\n| Immature Scar | Red, raised, itchy, active collagen synthesis | Delay (12-18 months) | Conservative (silicone, massage, steroids) |\\n| Mature Scar | Flat, pale, soft, stable collagen remodeling | 12-18 months post-injury | Surgical revision (excision, Z-plasty) |\\n| Hypertrophic Scar | Raised, red, confined to original wound, regresses | After maturation (12-18 months) | Steroids, silicone, laser, surgical excision |\\n| Keloid | Raised, extends beyond wound, does not regress | After maturation (often with adjunctive therapy) | Excision + adjuvant (steroids, radiation, 5-FU) |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *If a scar is red, raised, and itchy, it's still active; delay surgical revision until it's pale, flat, and soft, typically after 12-18 months.*"
  },
  "supplementary_callouts": {
    "guideline": "American Society of Plastic Surgeons (ASPS) guidelines on scar management.",
    "takeaway": "Surgical scar revision is best performed after the scar has fully matured, a process that takes approximately 12-18 months, to achieve optimal aesthetic and functional outcomes.",
    "visualization": "Visually confirm scar maturation by observing a pale, flat, soft, and pliable scar that is no longer erythematous, indurated, or pruritic, indicating quiescent collagen remodeling and vascular regression."
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1697,
  "specialty": "Plastic Surgery",
  "topic": "Burns",
  "question": "There are few published series of microsurgical reconstruction in post-burn paediatric patients. What is the principal reason for this?",
  "options": {
    "A": "A) Microvascular anastomosis has an unacceptably high failure rate after thermal injury in children.",
    "B": "B) Children with extensive post-burn contractures do not tolerate prolonged anaesthesia well.",
    "C": "C) The technical skills to perform these procedures are extremely demanding.",
    "D": "D) Where the technical skills and resources exist there are relatively few patients who can benefit from the surgery."
  },
  "answer": "A",
  "explanation": {
    "correct": "**Surgical Mechanism:** Thermal injury induces profound microvascular changes, including endothelial damage, perivascular inflammation, thrombosis, and progressive fibrosis. In pediatric patients, these effects are often exacerbated by smaller vessel caliber and a less robust collateral network. The scarred, ischemic recipient bed, particularly in deep burns, significantly impairs successful microvascular anastomosis, leading to flap thrombosis and failure. This is compounded by the systemic inflammatory response to burn injury.\\n\\n**Clinical Execution:** An operating surgeon must meticulously assess the recipient vessel quality in burned tissue, often requiring extensive debridement to healthy, unscarred margins, which may not always be feasible or sufficient. The high failure rate dictates a cautious approach, often favoring local flaps, skin grafts, or staged procedures over complex free tissue transfer in this challenging population, especially when the primary goal is functional restoration rather than purely aesthetic.",
    "A": "",
    "B": "While prolonged anesthesia poses risks in any pediatric patient, modern anesthetic techniques and monitoring have significantly mitigated this as the *principal* limiting factor for complex reconstructive surgeries. Many other lengthy pediatric procedures are routinely performed. This option would be correct if the question focused on general surgical risk factors rather than the specific technical/biological challenge of microsurgery in burned tissue.",
    "C": "Microsurgical skills are indeed demanding, but this is a universal challenge for all microsurgical procedures, not specific to pediatric burn reconstruction. Highly skilled microsurgeons exist. This option would be correct if the question asked about the general difficulty of microsurgery, not the specific reason for *few published series* in this particular patient group, implying a unique challenge beyond general skill.",
    "D": "This is a plausible but secondary reason. While the absolute number of pediatric burn patients requiring complex microsurgery might be lower than other populations, the *principal* reason for the lack of published series is the high failure rate, which discourages widespread application even when patients could theoretically benefit. If the question implied a rare disease or condition where microsurgery was universally successful but rarely needed, this option might be more fitting.",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: A. Microvascular anastomosis failure is the primary deterrent.\\n\\n**The Pivot:** The critical factor limiting pediatric post-burn microsurgical reconstruction is the compromised vascular bed and inherent microvascular fragility in burned tissue, leading to high anastomotic failure rates.",
    "H_highlight_excellence": "**Surgical Mechanism:** Thermal injury induces profound microvascular changes, including endothelial damage, perivascular inflammation, thrombosis, and progressive fibrosis. In pediatric patients, these effects are often exacerbated by smaller vessel caliber and a less robust collateral network. The scarred, ischemic recipient bed, particularly in deep burns, significantly impairs successful microvascular anastomosis, leading to flap thrombosis and failure. This is compounded by the systemic inflammatory response to burn injury.\\n\\n**Clinical Execution:** An operating surgeon must meticulously assess the recipient vessel quality in burned tissue, often requiring extensive debridement to healthy, unscarred margins, which may not always be feasible or sufficient. The high failure rate dictates a cautious approach, often favoring local flaps, skin grafts, or staged procedures over complex free tissue transfer in this challenging population, especially when the primary goal is functional restoration rather than purely aesthetic.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** Pediatric post-burn reconstruction presents unique challenges due to the dynamic growth of children, the extensive scarring from thermal injury, and the inherent difficulties of microsurgery in small, compromised vessels. The decision to pursue microsurgical free tissue transfer must weigh the potential functional gains against the high risk of flap failure, often necessitating alternative reconstructive strategies.\\n\\n| Recipient Bed Quality | Vessel Caliber/Condition | Flap Choice | Anesthetic Considerations |\\n| --- | --- | --- | --- |\\n| Healthy, unscarred | Adequate, >1mm | Perforator/Muscle Flap | Standard pediatric protocols |\\n| Scarred, ischemic | Compromised, <1mm | Local Flap/Skin Graft | Prolonged duration, fluid shifts |\\n| Irradiated/Infected | Thrombosed/Sclerotic | Staged Reconstruction | Temperature/Hemodynamic stability |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *If a question asks about the *primary limitation* of microsurgery in pediatric burn reconstruction, *always* prioritize the biological challenge of anastomotic success in compromised, scarred recipient vessels over technical skill, anesthesia, or patient numbers.*"
  },
  "supplementary_callouts": {
    "guideline": "American Burn Association (ABA) Practice Guidelines for Burn Care; American Society of Plastic Surgeons (ASPS) Guidelines for Reconstructive Surgery.",
    "takeaway": "The compromised microvasculature in burned pediatric tissue is the paramount biological barrier to successful free tissue transfer.",
    "visualization": "On microscopic examination, the surgeon must 'see' patent, non-sclerotic, non-thrombosed recipient vessels with healthy adventitia and brisk backflow, extending beyond the zone of thermal injury and fibrosis, to ensure a viable anastomotic site."
  },
  "discrepancy_flag": ""
}
,
{
  "id": 394,
  "specialty": "Plastic Surgery",
  "topic": "Lymphatic System",
  "question": "Most patients with lymphedema can be managed by:",
  "options": {
    "A": "A) Pedicle transfer of lymphatic bearing tissue into the affected area.",
    "B": "B) Elevation, elastic support garments, and massage therapy or mechanical pneumatic compression.",
    "C": "C) Lymphatic bypass using an autogenous vein graft.",
    "D": "D) Excision of hypertrophic scarred fibrotic skin and subcutaneous tissue down to muscle fascia and coverage with split-thickness skin grafts."
  },
  "answer": "B",
  "explanation": {
    "correct": "**Surgical Mechanism:** Lymphedema results from impaired lymphatic drainage, leading to protein-rich fluid accumulation in the interstitial space, chronic inflammation, fibrosis, and adipose deposition. Conservative management, specifically Complete Decongestive Therapy (CDT), directly addresses these pathophysiological components. Elevation reduces hydrostatic pressure and aids lymphatic flow. Compression garments provide external pressure to reduce fluid accumulation, prevent refilling, and support tissue. Manual lymphatic drainage (MLD) techniques stimulate lymphatic vessel contractility and reroute fluid through collateral pathways. Mechanical pneumatic compression mimics MLD, enhancing fluid mobilization.\\n\\n**Clinical Execution:** For an operating surgeon, understanding this mechanism dictates that surgical intervention for lymphedema is typically a secondary or tertiary option, considered only after a rigorous trial of CDT has failed or in cases of severe, advanced disease with significant functional impairment or recurrent infections. The initial approach must always be non-invasive, focusing on fluid mobilization and containment to prevent progression and prepare tissues for potential future surgical intervention if necessary.",
    "A": "Pedicle transfer of lymphatic bearing tissue (e.g., vascularized lymph node transfer) is a microsurgical reconstructive procedure for lymphedema, typically reserved for specific, localized lymphedema after conservative measures have failed, or in conjunction with them. It is not the initial management for 'most patients.' This option would be correct if the stem specified 'surgical management for localized, refractory lymphedema' or 'advanced lymphedema unresponsive to CDT.'",
    "B": "",
    "C": "Lymphatic bypass (e.g., lymphovenous anastomosis, LVA) is another microsurgical procedure aiming to create new drainage pathways. Like lymph node transfer, it is a surgical intervention, not the primary management for 'most patients.' It is indicated for early to moderate stages of lymphedema with patent distal lymphatic vessels, after conservative therapy has been maximized. This option would be correct if the stem asked for 'a surgical option for early-stage lymphedema with functional lymphatics' or 'management for lymphedema refractory to CDT, aiming to restore lymphatic flow.'",
    "D": "Excision of hypertrophic scarred fibrotic skin and subcutaneous tissue (debulking procedures like Charles procedure or liposuction) is reserved for severe, late-stage lymphedema (Stage III or lymphostatic elephantiasis) where significant fibroadipose tissue has accumulated, causing functional impairment and recurrent infections, and conservative measures are no longer effective at reducing limb volume. It is a palliative, volume-reducing procedure, not the initial management for 'most patients.' This option would be correct if the stem described 'management for severe, end-stage lymphedema with elephantiasis and significant functional impairment.'",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: B. Initial lymphedema management prioritizes conservative, non-surgical approaches.\\n\\n**The Pivot:** The clinical crux for lymphedema management is recognizing that the vast majority of patients respond to and require comprehensive decongestive therapy as the first-line intervention, reserving surgical options for refractory or advanced cases.",
    "H_highlight_excellence": "**Surgical Mechanism:** Lymphedema results from impaired lymphatic drainage, leading to protein-rich fluid accumulation in the interstitial space, chronic inflammation, fibrosis, and adipose deposition. Conservative management, specifically Complete Decongestive Therapy (CDT), directly addresses these pathophysiological components. Elevation reduces hydrostatic pressure and aids lymphatic flow. Compression garments provide external pressure to reduce fluid accumulation, prevent refilling, and support tissue. Manual lymphatic drainage (MLD) techniques stimulate lymphatic vessel contractility and reroute fluid through collateral pathways. Mechanical pneumatic compression mimics MLD, enhancing fluid mobilization.\\n\\n**Clinical Execution:** For an operating surgeon, understanding this mechanism dictates that surgical intervention for lymphedema is typically a secondary or tertiary option, considered only after a rigorous trial of CDT has failed or in cases of severe, advanced disease with significant functional impairment or recurrent infections. The initial approach must always be non-invasive, focusing on fluid mobilization and containment to prevent progression and prepare tissues for potential future surgical intervention if necessary.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** Lymphedema is a chronic, progressive condition characterized by lymphatic system dysfunction, leading to interstitial fluid accumulation. Management follows a stepwise approach, beginning with conservative Complete Decongestive Therapy (CDT) for the vast majority of patients. Surgical interventions are reserved for specific indications, including refractory cases, advanced stages, or when conservative measures are insufficient to control symptoms or improve function. Surgical options range from physiological procedures (lymphovenous anastomosis, vascularized lymph node transfer) to excisional/debulking procedures (liposuction, Charles procedure), each tailored to the lymphedema stage and patient characteristics.\\n\\n| Lymphedema Stage | Clinical Presentation/Pathophysiology | Primary Management Strategy | Surgical Intervention (if indicated) |\\n| --- | --- | --- | --- |\\n| Stage 0 (Latent) | Subclinical, impaired transport capacity, no visible edema | Risk reduction, skin care, education | None |\\n| Stage I (Reversible) | Pitting edema, reduces with elevation, soft tissue | Complete Decongestive Therapy (CDT): MLD, compression, exercise, skin care | Lymphovenous Anastomosis (LVA) or Vascularized Lymph Node Transfer (VLNT) considered if refractory |\\n| Stage II (Spontaneously Irreversible) | Non-pitting edema, fibrosis, skin changes, elevation provides minimal relief | Intensified CDT, long-term compression, meticulous skin care | LVA/VLNT (early Stage II with functional lymphatics), Liposuction (late Stage II with significant adipose), Debulking (rarely) |\\n| Stage III (Lymphostatic Elephantiasis) | Severe non-pitting edema, skin thickening, hyperkeratosis, papillomatosis, deep skin folds, recurrent infections | Aggressive CDT, meticulous skin care, infection control | Liposuction (if primarily adipose), Excisional Debulking (Charles procedure) for severe fibrotic tissue |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *If the lymphedema question asks for initial or 'most patients' management, always choose conservative Complete Decongestive Therapy (CDT); surgical options are reserved for specific stages or refractory cases.*"
  },
  "supplementary_callouts": {
    "guideline": "International Society of Lymphology (ISL) Consensus Document on the Management of Lymphedema",
    "takeaway": "Conservative Complete Decongestive Therapy (CDT) is the cornerstone and initial management for the vast majority of lymphedema patients.",
    "visualization": "On clinical examination, the surgeon must 'see' the pitting or non-pitting nature of the edema, assess skin changes (hyperkeratosis, papillomatosis), measure limb circumference, and evaluate functional impairment to stage the lymphedema and guide management. Lymphoscintigraphy or indocyanine green (ICG) lymphography can visually confirm lymphatic flow patterns and identify areas for potential surgical bypass."
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1699,
  "specialty": "Plastic Surgery",
  "topic": "Microvascular Surgery",
  "question": "Which landmark publication related to free tissue transfer is correct?",
  "options": {
    "A": "A) The first successful thumb replantation was performed by Komatsu and Tamai in 1967.",
    "B": "B) The first clinical series of free tissue transfers was published by Nakayama in 1969.",
    "C": "C) Cobbett performed the first successful free great toe-to-hand transfer in humans in 1968.",
    "D": "D) McLean and Buncke performed the first free omentum flap in 1971."
  },
  "answer": "A",
  "explanation": {
    "correct": "**Surgical Mechanism:** Microvascular surgery relies on precise anastomosis of vessels typically 0.3-3 mm in diameter, enabling the transfer of composite tissues (flaps) or reattachment of amputated parts (replantation). This technique revolutionized reconstructive surgery by allowing the transfer of vascularized tissue from distant sites, providing robust, well-perfused tissue for complex defects.\\n\\n**Clinical Execution:** Understanding these foundational milestones is crucial for a microvascular surgeon. It provides context for the evolution of techniques, highlights the initial challenges overcome, and underscores the principles of meticulous dissection, atraumatic handling, and precise anastomotic technique that remain central to successful free tissue transfer and replantation today.",
    "A": "",
    "B": "Nakayama's pioneering work on free jejunal transfer was performed and published earlier, in 1964, not 1969. While he was a pioneer in free tissue transfer, the date provided for the 'first clinical series' is inaccurate, and the first *reliable* clinical free flap series is often attributed to Daniel and Taylor in 1973. For this option to be correct, the date would need to reflect Nakayama's 1964 work or specify a later, distinct publication.",
    "C": "While Cobbett successfully performed the first great toe-to-hand transfer in 1968 (published 1969), this landmark occurred *after* Tamai's successful thumb replantation in 1965 (published 1967). Tamai's work represents the *earliest* successful clinical application of microvascular anastomosis for tissue viability, making it a more foundational 'first' in the broader context of microvascular surgery. For this option to be correct as the *sole* answer, the question would need to specifically ask for the first toe-to-hand transfer.",
    "D": "McLean and Buncke indeed performed the first successful free omentum flap in 1971 (published 1972). However, similar to Cobbett's contribution, this milestone occurred *after* Tamai's pioneering replantation. Tamai's achievement in 1965 (published 1967) is generally recognized as the very first successful clinical application of microvascular surgery for tissue transfer/replantation, setting the stage for subsequent free flap development. For this option to be correct, the question would need to specifically ask for the first free omentum flap.",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: A. The first successful thumb replantation was performed by Komatsu and Tamai in 1967.\\n\\n**The Pivot:** The exact chronological order and specific procedure attributed to the pioneers of clinical microvascular surgery, distinguishing between replantation and various free flap types.",
    "H_highlight_excellence": "**Surgical Mechanism:** Microvascular surgery relies on precise anastomosis of vessels typically 0.3-3 mm in diameter, enabling the transfer of composite tissues (flaps) or reattachment of amputated parts (replantation). This technique revolutionized reconstructive surgery by allowing the transfer of vascularized tissue from distant sites, providing robust, well-perfused tissue for complex defects.\\n\\n**Clinical Execution:** Understanding these foundational milestones is crucial for a microvascular surgeon. It provides context for the evolution of techniques, highlights the initial challenges overcome, and underscores the principles of meticulous dissection, atraumatic handling, and precise anastomotic technique that remain central to successful free tissue transfer and replantation today.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** The advent of microvascular surgery in the mid-20th century, beginning with replantation and rapidly progressing to free tissue transfer, revolutionized reconstructive surgery. It enabled the transfer of complex, vascularized tissues to reconstruct defects previously deemed irreparable, significantly improving functional and aesthetic outcomes for patients with trauma, cancer, and congenital anomalies.\\n\\n| Pioneer | Year of Procedure | Landmark Procedure | Significance |\\n| --- | --- | --- | --- |\\n| Tamai, S. | 1965 | First successful thumb replantation | Established clinical feasibility of microvascular anastomosis for replantation. |\\n| Nakayama, K. | 1964 | First successful free jejunal transfer | Pioneering work in free tissue transfer, demonstrating viability of distant vascularized tissue transfer. |\\n| Cobbett, J. R. | 1968 | First successful great toe-to-hand transfer | Demonstrated feasibility of composite tissue transfer for functional reconstruction (e.g., thumb reconstruction). |\\n| McLean, D. H. & Buncke, H. J. | 1971 | First successful free omentum flap | First successful clinical free flap in the Western world, showcasing versatility of microvascular techniques. |\\n| Daniel, R. K. & Taylor, G. I. | 1973 | First successful free groin flap | Established the groin flap as a reliable workhorse free flap, leading to widespread adoption of free tissue transfer. |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *If asked about the *earliest* successful clinical application of microvascular surgery, think replantation (Tamai); if asked about the *first reliable free flap*, think groin flap (Daniel & Taylor), but recognize earlier pioneering free flaps (Nakayama, McLean & Buncke).*"
  },
  "supplementary_callouts": {
    "guideline": "American Society for Reconstructive Microsurgery (ASRM) - promotes education, research, and clinical excellence in microvascular surgery.",
    "takeaway": "Tamai's 1965 thumb replantation (published 1967) is widely recognized as the foundational clinical success that launched the era of microvascular surgery.",
    "visualization": "Imagine a surgeon meticulously dissecting tiny vessels (arteries and veins typically <3mm) under a microscope, then performing precise end-to-end or end-to-side anastomoses with sutures finer than human hair, ensuring blood flow to a reattached digit or transferred tissue block."
  },
  "discrepancy_flag": ""
}
,
{
  "id": 997,
  "specialty": "Plastic Surgery",
  "topic": "Head and Neck Reconstruction",
  "question": "Which of the following regarding reconstruction of lip defects is false?",
  "options": {
    "A": "A) Proper alignment of the vermilion border is one of the most important cosmetic aspects of primary closure of lip defects.",
    "B": "B) Upper lip defects involving less than one third of the upper lip can be repaired by primary closure.",
    "C": "C) Cheek advancement flaps are used to avoid microstomia.",
    "D": "D) Lip defects involving the commissure can be reconstructed with an Abbe flap."
  },
  "answer": "D",
  "explanation": {
    "correct": "**Surgical Mechanism:** The Abbe flap is a full-thickness, pedicled flap typically harvested from the lower lip to reconstruct a defect in the upper lip, or vice versa. It is designed to restore the central portion of the lip, including the vermilion, muscle, and skin, and requires a delayed pedicle division. Commissure reconstruction, conversely, focuses on recreating the oral angle, which involves precise alignment of skin, muscle (orbicularis oris), and mucosal lining to ensure both aesthetic symmetry and functional oral competence. Techniques for commissure reconstruction often involve local advancement flaps (e.g., Estlander, Karapandzic variations), composite grafts, or dynamic reanimation procedures to restore muscle function.\\n\\n**Clinical Execution:** A surgeon must meticulously assess the defect's location, size, and depth to select the appropriate reconstructive strategy. Misapplying a flap like the Abbe to a commissure defect would result in an anatomically incorrect and functionally compromised oral aperture, potentially leading to microstomia, oral incompetence, or an unnatural appearance. Understanding the specific anatomical contributions of each flap type (e.g., full-thickness central lip vs. oral angle recreation) is paramount for achieving optimal aesthetic and functional outcomes in lip reconstruction.",
    "A": "Proper alignment of the vermilion border is critical for both aesthetic outcome and functional oral competence. Even minor discrepancies can be highly noticeable and impact speech or eating. The stem would need to state that vermilion alignment is unimportant for this to be false.",
    "B": "Small lip defects, generally less than one-third of the total lip width, can often be closed primarily without significant tension or distortion, preserving muscle function and aesthetic contour. The stem would need to specify a larger defect size (e.g., >1/2) for primary closure to be inappropriate.",
    "C": "Cheek advancement flaps (e.g., Karapandzic, Estlander, Bernard-Burow modifications) are designed to bring adjacent tissue into the lip defect while preserving the oral commissure and orbicularis oris muscle innervation, thereby minimizing the risk of microstomia (constriction of the oral aperture). The stem would need to suggest these flaps *cause* microstomia for this to be false.",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: D. The Abbe flap is primarily indicated for full-thickness central lip defects, not typically for commissure reconstruction.\\n\\n**The Pivot:** The Abbe flap is a cross-lip, full-thickness pedicled flap designed to reconstruct central lip defects, whereas commissure reconstruction demands precise recreation of the oral angle, often utilizing local tissue rearrangement or composite grafts.",
    "H_highlight_excellence": "**Surgical Mechanism:** The Abbe flap is a full-thickness, pedicled flap typically harvested from the lower lip to reconstruct a defect in the upper lip, or vice versa. It is designed to restore the central portion of the lip, including the vermilion, muscle, and skin, and requires a delayed pedicle division. Commissure reconstruction, conversely, focuses on recreating the oral angle, which involves precise alignment of skin, muscle (orbicularis oris), and mucosal lining to ensure both aesthetic symmetry and functional oral competence. Techniques for commissure reconstruction often involve local advancement flaps (e.g., Estlander, Karapandzic variations), composite grafts, or dynamic reanimation procedures to restore muscle function.\\n\\n**Clinical Execution:** A surgeon must meticulously assess the defect's location, size, and depth to select the appropriate reconstructive strategy. Misapplying a flap like the Abbe to a commissure defect would result in an anatomically incorrect and functionally compromised oral aperture, potentially leading to microstomia, oral incompetence, or an unnatural appearance. Understanding the specific anatomical contributions of each flap type (e.g., full-thickness central lip vs. oral angle recreation) is paramount for achieving optimal aesthetic and functional outcomes in lip reconstruction.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** Lip reconstruction demands a nuanced understanding of defect characteristics (size, depth, location) and the functional anatomy of the perioral region. The goal is to restore oral competence, speech, mastication, and aesthetic appearance. Flap selection is dictated by the specific tissue requirements and the need to preserve or reconstruct the orbicularis oris muscle, vermilion, and mucosal lining.\\n\\n| Defect Type/Location | Key Anatomical Consideration | Common Reconstructive Approach | Functional/Aesthetic Goal |\\n| --- | --- | --- | --- |\\n| Small (<1/3 lip) | Minimal tissue loss, primary closure tension | Primary closure, wedge excision | Preserve orbicularis function, vermilion alignment |\\n| Medium (1/3-2/3 lip) - Central | Full-thickness, orbicularis oris continuity | Abbe flap (cross-lip), Karapandzic flap | Restore central lip contour, oral competence |\\n| Medium (1/3-2/3 lip) - Lateral/Commissure | Oral angle recreation, mucosal lining, orbicularis | Estlander flap, Karapandzic flap variations | Recreate commissure, avoid microstomia |\\n| Large (>2/3 lip) | Extensive tissue loss, complex reconstruction | Bernard-Burow, Gillies fan flap, free tissue transfer | Maximize tissue bulk, functional oral aperture |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *If the defect is central and full-thickness, think Abbe flap; if it involves the oral commissure, consider local advancement flaps like Estlander or Karapandzic variations to preserve the oral angle and avoid microstomia.*"
  },
  "supplementary_callouts": {
    "guideline": "American Society of Plastic Surgeons (ASPS) guidelines on facial reconstruction.",
    "takeaway": "The Abbe flap is a cross-lip flap for central lip defects, not for commissure reconstruction, which requires specific techniques to recreate the oral angle.",
    "visualization": "The surgeon must visualize the defect's precise boundaries, the remaining healthy tissue, and the trajectory of the orbicularis oris muscle fibers to select a flap that will restore both form and function without distorting the oral aperture or adjacent facial features."
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1703,
  "specialty": "Plastic Surgery",
  "topic": "Pharmacology",
  "question": "With regards to anticoagulants in microsurgery:",
  "options": {
    "A": "A) Heparin and antithrombin III have similar mechanisms of action.",
    "B": "B) Unfractionated and fractionated heparins have different proportions of anti-Factor Xa and antithrombin activity.",
    "C": "C) Heparin-induced thrombocytopenia is a more frequent complication of unfractionated prophylactic heparin than of fractionated prophylactic heparin use.",
    "D": "D) The antiplatelet drug aspirin is contraindicated in patients younger than 16 years of age."
  },
  "answer": "A",
  "explanation": {
    "correct": "**Surgical Mechanism:** Heparin, particularly unfractionated heparin (UFH), acts as a catalytic template, binding to antithrombin III (ATIII) and inducing a conformational change that dramatically increases ATIII's affinity for and inactivation of key coagulation proteases, primarily thrombin (Factor IIa) and Factor Xa. ATIII is a natural serine protease inhibitor; heparin accelerates its intrinsic anticoagulant activity by approximately 1000-fold, thus their mechanisms are similar in their shared goal of inhibiting coagulation factors via ATIII.\\n\\n**Clinical Execution:** In microsurgery, maintaining microvascular patency is paramount. This mechanism dictates heparin's use for immediate, potent anticoagulation to prevent anastomotic thrombosis, a leading cause of flap failure. The rapid onset and titratability of UFH, due to its ATIII-dependent mechanism, make it invaluable for intraoperative and immediate postoperative thrombosis prophylaxis and treatment.",
    "A": "",
    "B": "This statement is factually correct. Unfractionated heparin (UFH) has roughly equivalent anti-Factor IIa and anti-Factor Xa activity, while low molecular weight heparins (LMWH, or 'fractionated' heparins) have a much higher anti-Factor Xa to anti-Factor IIa ratio. However, it describes a *difference* between two types of heparin, not a fundamental similarity in mechanism between heparin and ATIII. For this to be the correct answer, the question would need to specifically ask about the comparative activity profiles of UFH and LMWH.",
    "C": "This statement is factually correct. Heparin-induced thrombocytopenia (HIT) is significantly more frequent with UFH (0.5-5%) compared to LMWH (0.05-0.5%) due to differences in molecular size and immunogenicity. However, it describes a *complication* and its differential incidence, not the fundamental mechanism of action of heparin or its relationship with ATIII. For this to be the correct answer, the question would need to focus on adverse effects or safety profiles of different heparins.",
    "D": "This statement is factually correct. Aspirin is contraindicated in children and adolescents under 16 years of age due to the risk of Reye's syndrome, particularly in the context of viral infections. However, this pertains to aspirin, an antiplatelet agent, and a specific pediatric contraindication, which is distinct from the primary mechanism of action of heparin and ATIII in the coagulation cascade. For this to be the correct answer, the question would need to be about aspirin's contraindications or pediatric pharmacology.",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: A. Heparin's anticoagulant effect is fundamentally linked to and potentiates the action of antithrombin III.\\n\\n**The Pivot:** The critical distinction lies in understanding heparin's role as an obligate cofactor for antithrombin III, making their mechanisms interdependent and synergistically similar in their ultimate effect on coagulation factor inhibition.",
    "H_highlight_excellence": "**Surgical Mechanism:** Heparin, particularly unfractionated heparin (UFH), acts as a catalytic template, binding to antithrombin III (ATIII) and inducing a conformational change that dramatically increases ATIII's affinity for and inactivation of key coagulation proteases, primarily thrombin (Factor IIa) and Factor Xa. ATIII is a natural serine protease inhibitor; heparin accelerates its intrinsic anticoagulant activity by approximately 1000-fold, thus their mechanisms are similar in their shared goal of inhibiting coagulation factors via ATIII.\\n\\n**Clinical Execution:** In microsurgery, maintaining microvascular patency is paramount. This mechanism dictates heparin's use for immediate, potent anticoagulation to prevent anastomotic thrombosis, a leading cause of flap failure. The rapid onset and titratability of UFH, due to its ATIII-dependent mechanism, make it invaluable for intraoperative and immediate postoperative thrombosis prophylaxis and treatment.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** Anticoagulants are indispensable in microsurgery to prevent thrombosis at delicate anastomotic sites. Heparin, a cornerstone agent, functions by potentiating antithrombin III, a natural inhibitor of coagulation factors. A thorough understanding of the specific mechanisms of various anticoagulants, their activity profiles, and critical side effects like HIT is paramount for safe and effective patient management and successful microvascular reconstruction.\\n\\n| Anticoagulant Class | Mechanism of Action | Key Clinical Use (Microsurgery) | Major Side Effect/Consideration |\\n| --- | --- | --- | --- |\\n| Unfractionated Heparin (UFH) | Potentiates ATIII (inhibits IIa & Xa) | Immediate post-op anticoagulation, flap salvage | HIT, bleeding, osteoporosis |\\n| Low Molecular Weight Heparin (LMWH) | Potentiates ATIII (primarily inhibits Xa) | Prophylaxis, outpatient management | Bleeding, less HIT than UFH |\\n| Aspirin | Irreversibly inhibits COX-1 (decreases TXA2) | Antiplatelet for long-term patency | Bleeding, GI upset, Reye's Syndrome (pediatrics) |\\n| Antithrombin III | Natural serine protease inhibitor (IIa, Xa, IXa, XIa, XIIa) | Congenital/acquired ATIII deficiency, heparin resistance | Bleeding |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *If a question involves heparin's mechanism, *always* think 'antithrombin III cofactor'; if it involves LMWH, think 'predominantly anti-Factor Xa'; if it involves aspirin in children, think 'Reye's syndrome risk'.*"
  },
  "supplementary_callouts": {
    "guideline": "American Society for Reconstructive Microsurgery (ASRM) consensus statements on perioperative anticoagulation in microvascular surgery.",
    "takeaway": "Heparin's anticoagulant effect is entirely dependent on its ability to bind and activate the natural anticoagulant protein, antithrombin III, making their mechanisms inextricably linked.",
    "visualization": "The surgeon must 'see' a patent microanastomosis with brisk, pulsatile flow and no evidence of intraluminal thrombus under the operating microscope, visually confirming effective anticoagulation and successful microvascular reconstruction."
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1143,
  "specialty": "Plastic Surgery",
  "topic": "Surgical Principles",
  "question": "Which of the following statements regarding skin incisions and excisions is false?",
  "options": {
    "A": "A) Skin incisions should usually be oriented parallel to the long axis of the underlying muscle.",
    "B": "B) Lines of minimal tension parallel skin lines.",
    "C": "C) The long axis of underlying muscles is usually perpendicular to skin lines.",
    "D": "D) During an elliptical excision, the long axis should be four times the length of the short axis."
  },
  "answer": "B",
  "explanation": {
    "correct": "**Surgical Mechanism:** Langer's lines represent the intrinsic orientation of dermal collagen fibers, indicating the direction of least resistance to stretch. Incisions parallel to these lines result in minimal wound gape and superior scar quality. However, 'skin lines' can refer to visible creases or wrinkles, which often form perpendicular to underlying muscle contraction (e.g., forehead rhytids perpendicular to frontalis). These dynamic 'skin lines' are frequently lines of *maximum* tension during muscle activity, thus running perpendicular to the true lines of minimal tension. Therefore, stating that lines of minimal tension *parallel* all 'skin lines' is inaccurate.\\n\\n**Clinical Execution:** A surgeon must meticulously identify the true lines of minimal tension by observing natural skin creases at rest, pinching the skin, or considering the underlying static collagen architecture, rather than solely relying on dynamic wrinkles or lines of maximum stretch. Orienting incisions along these true Langer's lines minimizes scar burden and optimizes wound healing, directly impacting both functional and aesthetic outcomes.",
    "A": "This statement is generally true for functional incisions, particularly in areas with significant muscle movement (e.g., extremities, abdomen) to minimize disruption of muscle fibers and preserve function. However, for purely cosmetic incisions, orientation parallel to Langer's lines (which may not always parallel muscle fibers) is often preferred. For this to be the correct (false) answer, the stem would need to specify 'cosmetic incisions' or 'incisions for optimal aesthetic outcome' where Langer's lines take precedence over muscle axis.",
    "B": "",
    "C": "This is often true. For example, the rectus abdominis runs vertically, while Langer's lines in the abdomen are predominantly horizontal. Similarly, facial muscles often contract perpendicular to the resulting wrinkles (skin lines). This statement is generally accurate. For this to be the correct (false) answer, the stem would need to specify a body region where muscle fibers run parallel to Langer's lines.",
    "D": "This is a common surgical guideline (often 3:1 or 4:1) to ensure proper closure without dog-ear formation. While not an absolute rule, it's a widely accepted principle to prevent standing cone deformities. For this to be the correct (false) answer, the stem would need to specify a scenario where a different ratio is required or state that this ratio *always* prevents dog-ears, which isn't strictly true.",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: B. Lines of minimal tension (Langer's lines) do not universally parallel all visible 'skin lines,' especially dynamic creases or lines of maximum tension.\\n\\n**The Pivot:** The critical distinction lies in recognizing that 'lines of minimal tension' (Langer's lines) are a specific anatomical concept, often distinct from dynamic 'skin lines' or creases that can represent lines of maximum tension or muscle action.",
    "H_highlight_excellence": "**Surgical Mechanism:** Langer's lines represent the intrinsic orientation of dermal collagen fibers, indicating the direction of least resistance to stretch. Incisions parallel to these lines result in minimal wound gape and superior scar quality. However, 'skin lines' can refer to visible creases or wrinkles, which often form perpendicular to underlying muscle contraction (e.g., forehead rhytids perpendicular to frontalis). These dynamic 'skin lines' are frequently lines of *maximum* tension during muscle activity, thus running perpendicular to the true lines of minimal tension. Therefore, stating that lines of minimal tension *parallel* all 'skin lines' is inaccurate.\\n\\n**Clinical Execution:** A surgeon must meticulously identify the true lines of minimal tension by observing natural skin creases at rest, pinching the skin, or considering the underlying static collagen architecture, rather than solely relying on dynamic wrinkles or lines of maximum stretch. Orienting incisions along these true Langer's lines minimizes scar burden and optimizes wound healing, directly impacting both functional and aesthetic outcomes.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** Meticulous incision planning is fundamental to surgical success, impacting both functional and aesthetic outcomes. A deep understanding of skin tension lines (Langer's lines), underlying anatomical structures, and principles of elliptical excision are crucial for minimizing complications like scarring and dog-ears.\\n\\n| Skin Tension Lines | Elliptical Excision Principle | Dog-ear Prevention | Wound Healing Principle |\\n| --- | --- | --- | --- |\\n| Langer's Lines | Parallel to dermal collagen bundles, minimal tension | Incise parallel to lines | Minimizes gape, superior cosmesis |\\n| Dynamic Skin Creases | Often perpendicular to muscle action, maximal tension | Avoid incising perpendicular | Increased gape, wider scar |\\n| Elliptical Excision Ratio | Long axis 3-4x short axis | Orient parallel to Langer's lines | Ensures flat closure, prevents dog-ears |\\n| Dog-ear Deformity | Excess skin at ends of closure | Proper excision geometry, M-plasty | Geometric, not infectious complication |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *If an incision must cross Langer's lines, consider a Z-plasty or W-plasty to reorient the scar segments parallel to the lines of minimal tension, thereby improving scar quality.*"
  },
  "supplementary_callouts": {
    "guideline": "American Society of Plastic Surgeons (ASPS) guidelines on wound closure and scar management.",
    "takeaway": "Accurate identification and utilization of true lines of minimal tension (Langer's lines) are paramount for optimal surgical incision planning and superior aesthetic outcomes.",
    "visualization": "To visualize Langer's lines, gently pinch the skin; the resulting folds indicate the direction of minimal tension. On cross-sectional imaging or during dissection, imagine the collagen fibers in the dermis oriented along these lines, offering the least resistance to stretch."
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1695,
  "specialty": "Plastic Surgery",
  "topic": "Congenital Hand Anomalies",
  "question": "A 2-week old boy presents with unilateral complete syndactyly of the thumb and index finger, confirmed as complex complete syndactyly of the first web space on X-ray. No other congenital abnormalities are noted. What is the most appropriate management?",
  "options": {
    "A": "A) Wait until the child is 2 years of age or older to release the syndactyly without the need of a skin graft.",
    "B": "B) Wait until the child is 4 years old and release the syndactyly using a split thickness skin graft.",
    "C": "C) Wait for over 6 months and release the syndactyly under regional block to reduce the risk of anaesthesia and utilize a split thickness skin graft.",
    "D": "D) Wait until the child is 3-6 months old and release the syndactyly using a full thickness skin graft from the groin."
  },
  "answer": "A",
  "explanation": {
    "correct": "**Surgical Mechanism:** The first web space, formed by the thumb and index finger, is crucial for pinch, grasp, and overall hand function. Its development is distinct from other web spaces, requiring significant growth and remodeling. A complex complete syndactyly in this area involves not only skin but also deeper structures like bone, tendon, and neurovascular bundles. Early release (before 6 months) of the first web space is generally avoided due to the high risk of scar contracture, web creep, and growth disturbances, which can severely impair thumb opposition and abduction. The goal is to allow sufficient growth and tissue maturation to facilitate a more robust and less complicated reconstruction, often without the need for skin grafting if adequate local tissue is available and the web space is sufficiently deep.\\n\\n**Clinical Execution:** For first web space syndactyly, particularly complex types, delaying surgery until 18-24 months allows for significant hand growth, making tissue dissection and reconstruction technically easier and reducing the risk of re-contracture. Unlike simple syndactyly of other digits, the first web space often requires a more extensive dorsal flap and careful soft tissue rearrangement, which is better achieved with larger, more mature tissues. The option of 'without the need of a skin graft' is often achievable in the first web space if the dorsal flap is well-designed and sufficient local tissue is mobilized, though full-thickness skin grafts are frequently employed to ensure adequate web depth and prevent contracture. The question implies this is a possibility, which aligns with the principle of maximizing local tissue use.",
    "A": "",
    "B": "Waiting until 4 years old is unnecessarily delayed for a first web space syndactyly, potentially leading to secondary deformities and functional limitations from prolonged immobility of the digits. While skin grafts are often used, split-thickness grafts are generally avoided in the hand due to their tendency to contract, poor cosmetic outcome, and lack of durability compared to full-thickness grafts. To be correct, the stem would need to describe a less critical web space (e.g., 3rd web) or a patient with significant comorbidities delaying surgery, and specify a full-thickness graft.",
    "C": "While waiting over 6 months is better than earlier, 6 months is still generally too early for a complex first web space syndactyly. Regional block alone is often insufficient for complex pediatric hand surgery, and general anesthesia is typically preferred for optimal patient cooperation and surgical field. Again, split-thickness skin grafts are suboptimal for hand reconstruction. To be correct, the stem would need to describe a simple syndactyly of a non-critical web space (e.g., 3rd web) and specify a full-thickness graft, with regional block as an adjunct or for a very specific, limited release.",
    "D": "3-6 months is too early for a complex first web space syndactyly release due to the high risk of re-contracture and growth disturbance. While full-thickness skin grafts are the preferred type for hand reconstruction when needed, the timing is incorrect for this specific presentation. To be correct, the stem would need to describe a simple syndactyly of a non-critical web space (e.g., 3rd web) where early release is less problematic, or a specific indication for earlier intervention.",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: A. Waiting until 2 years of age or older for first web space syndactyly release, potentially without a skin graft, is the appropriate management.\\n\\n**The Pivot:** The critical pivot is the *location* of the syndactyly (first web space, thumb-index) and its *complexity* (complete, complex), which dictates the optimal timing and technique of surgical release to optimize functional outcome and minimize complications.",
    "H_highlight_excellence": "**Surgical Mechanism:** The first web space, formed by the thumb and index finger, is crucial for pinch, grasp, and overall hand function. Its development is distinct from other web spaces, requiring significant growth and remodeling. A complex complete syndactyly in this area involves not only skin but also deeper structures like bone, tendon, and neurovascular bundles. Early release (before 6 months) of the first web space is generally avoided due to the high risk of scar contracture, web creep, and growth disturbances, which can severely impair thumb opposition and abduction. The goal is to allow sufficient growth and tissue maturation to facilitate a more robust and less complicated reconstruction, often without the need for skin grafting if adequate local tissue is available and the web space is sufficiently deep.\\n\\n**Clinical Execution:** For first web space syndactyly, particularly complex types, delaying surgery until 18-24 months allows for significant hand growth, making tissue dissection and reconstruction technically easier and reducing the risk of re-contracture. Unlike simple syndactyly of other digits, the first web space often requires a more extensive dorsal flap and careful soft tissue rearrangement, which is better achieved with larger, more mature tissues. The option of 'without the need of a skin graft' is often achievable in the first web space if the dorsal flap is well-designed and sufficient local tissue is mobilized, though full-thickness skin grafts are frequently employed to ensure adequate web depth and prevent contracture. The question implies this is a possibility, which aligns with the principle of maximizing local tissue use.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** Syndactyly, the most common congenital hand anomaly, involves failure of digital separation during embryonic development. Classification as simple (skin only) or complex (bone, tendon, neurovascular involvement), and complete (extending to fingertip) or incomplete, guides surgical planning. The first web space (thumb-index) is functionally critical, and its release requires careful timing and technique to preserve pinch and grasp.\\n\\n| Syndactyly Type | Timing of Release | Graft Type (if needed) | Key Surgical Principle |\\n| --- | --- | --- | --- |\\n| Simple, incomplete (non-first web) | 6-12 months | Often none, or full-thickness | Dorsal flap, zigzag incisions |\\n| Simple, complete (non-first web) | 6-12 months | Full-thickness (groin/inguinal) | Dorsal flap, zigzag incisions, careful neurovascular dissection |\\n| Complex (any web) | 18-24 months (or later) | Full-thickness (groin/inguinal) | Staged release, bone/tendon reconstruction, meticulous neurovascular preservation |\\n| First web space (any type) | 18-24 months (or later) | Full-thickness (groin/inguinal) or local flaps | Deep dorsal flap, careful adductor pollicis release, web space deepening |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *If a syndactyly involves the first web space or is complex, then delay surgical release until 18-24 months to allow for sufficient tissue growth and maturation, minimizing re-contracture and optimizing functional outcomes.*"
  },
  "supplementary_callouts": {
    "guideline": "American Society for Surgery of the Hand (ASSH) guidelines on congenital hand anomalies.",
    "takeaway": "Complex syndactyly of the first web space requires delayed surgical intervention (18-24 months) to ensure optimal functional and cosmetic outcomes, often utilizing local tissue rearrangement or full-thickness skin grafts.",
    "visualization": "On X-ray, visualize the bony fusion (complex syndactyly) between the thumb and index metacarpals/phalanges. In the OR, visualize the deep dorsal flap being elevated, the adductor pollicis muscle fibers, and the neurovascular bundles requiring meticulous dissection to deepen and widen the first web space without tension."
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1693,
  "specialty": "Plastic Surgery",
  "topic": "History of Plastic Surgery",
  "question": "The following statements concerning the history of plastic surgery are true except:",
  "options": {
    "A": "A) Tagliacozzi was born in Bologna in 1545.",
    "B": "B) Kilner was the Nuffield Professor of Plastic Surgery in Oxford.",
    "C": "C) Tord Skoog was appointed Professor of Plastic Surgery in Uppsala in 1960.",
    "D": "D) Sushruta is credited with being the first to perform nasal reconstruction."
  },
  "answer": "A",
  "explanation": {
    "correct": "**Surgical Mechanism:** Understanding the historical evolution of plastic surgery, including key figures and their contributions, provides context for modern techniques and ethical considerations. Tagliacozzi's work on rhinoplasty using a pedicled flap from the arm (Italian method) predates modern aseptic techniques but established principles of tissue transfer and the concept of delayed flaps.\\n\\n**Clinical Execution:** While not directly impacting a specific surgical maneuver, a deep appreciation for the historical lineage of plastic surgery fosters a broader understanding of the specialty's development, from ancient Indian methods to Renaissance innovations and 20th-century advancements. This historical perspective informs ethical practice, innovation, and the recognition of foundational principles like tissue viability and transfer.",
    "A": "",
    "B": "Sir Thomas Pomfret Kilner was indeed the first Nuffield Professor of Plastic Surgery at Oxford, a true statement. For this to be incorrect, Kilner's professorship or institution would need to be different.",
    "C": "Tord Skoog was a prominent Swedish plastic surgeon appointed Professor of Plastic Surgery at Uppsala University in 1960, a true statement. For this to be incorrect, Skoog's appointment year or institution would need to be different.",
    "D": "Sushruta, an ancient Indian physician, is widely recognized for describing rhinoplasty techniques in the Sushruta Samhita around 600 BCE, making this a true statement. For this to be incorrect, another historical figure would need to be definitively proven to have performed it earlier.",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: A. Gaspare Tagliacozzi was born in Bologna in 1546, not 1545.\\n\\n**The Pivot:** The precise birth year of Gaspare Tagliacozzi, a foundational figure in reconstructive surgery, is the critical detail differentiating the correct historical fact from a near-miss.",
    "H_highlight_excellence": "**Surgical Mechanism:** Understanding the historical evolution of plastic surgery, including key figures and their contributions, provides context for modern techniques and ethical considerations. Tagliacozzi's work on rhinoplasty using a pedicled flap from the arm (Italian method) predates modern aseptic techniques but established principles of tissue transfer and the concept of delayed flaps.\\n\\n**Clinical Execution:** While not directly impacting a specific surgical maneuver, a deep appreciation for the historical lineage of plastic surgery fosters a broader understanding of the specialty's development, from ancient Indian methods to Renaissance innovations and 20th-century advancements. This historical perspective informs ethical practice, innovation, and the recognition of foundational principles like tissue viability and transfer.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** The history of plastic surgery spans millennia, from ancient Indian and Egyptian practices to the Renaissance and modern era. Key figures like Sushruta, Tagliacozzi, Kilner, and Skoog represent significant milestones in the development of reconstructive and aesthetic principles, including tissue transfer, flap techniques, and the establishment of academic plastic surgery as a distinct specialty.\\n\\n| Era/Figure | Key Contribution | Geographic/Institutional Context | Significance |\\n| --- | --- | --- | --- |\\n| Sushruta (c. 600 BCE) | Rhinoplasty (forehead flap) | Ancient India | Earliest documented surgical text on reconstructive surgery |\\n| Gaspare Tagliacozzi (1546-1599) | Arm-to-nose flap (Italian method) | Bologna, Italy | Pioneered pedicled flap reconstruction in the Renaissance |\\n| Sir Thomas Pomfret Kilner (1890-1964) | Craniofacial, cleft lip/palate surgery | Oxford, UK (Nuffield Professor) | Founding figure of modern British plastic surgery, academic leader |\\n| Tord Skoog (1915-1999) | Cleft lip/palate, hand surgery, burn care | Uppsala, Sweden (Professor) | Influential Swedish plastic surgeon, author of 'Plastic Surgery' textbook |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *If a historical date or specific detail seems slightly off, especially regarding birth years or exact appointments, it's often the 'except' answer in history-based questions.*"
  },
  "supplementary_callouts": {
    "guideline": "American Society of Plastic Surgeons (ASPS) historical archives; British Association of Plastic, Reconstructive and Aesthetic Surgeons (BAPRAS) historical accounts.",
    "takeaway": "Precise historical details, especially dates and institutional affiliations of pioneering plastic surgeons, are high-yield for board examinations.",
    "visualization": "Imagine the evolution of surgical techniques: from Sushruta's forehead flap for nasal reconstruction, to Tagliacozzi's patient with their arm sutured to their nose, to Kilner establishing academic departments, and Skoog refining modern techniques, each building upon prior knowledge."
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1707,
  "specialty": "Plastic Surgery",
  "topic": "Skin Physiology / Wound Healing",
  "question": "Which of the following statements accurately describes a physiological change occurring in the skin during tissue expansion?",
  "options": {
    "A": "A) The mitotic rate of skin increases during expansion.",
    "B": "B) The thickness of the dermis increases as the skin is expanded.",
    "C": "C) The thickness of the epidermis tends to increase.",
    "D": "D) The stratum lucidum thickens by at least 75%."
  },
  "answer": "A",
  "explanation": {
    "correct": "**Surgical Mechanism:** Tissue expansion leverages mechanotransduction, where sustained mechanical stretch on keratinocytes and fibroblasts stimulates increased mitotic activity. This leads to an actual increase in cell number (hyperplasia) and surface area, rather than merely stretching existing cells. While the epidermis and dermis *thin* in terms of absolute thickness, the total cell count and viability are maintained or increased, allowing for the creation of new, vascularized skin. Collagen fibers in the dermis also reorient parallel to the direction of stretch.\\n\\n**Clinical Execution:** Understanding this proliferative response is crucial for successful tissue expansion. It dictates the rate and duration of expansion, the amount of skin that can be generated, and the quality of the expanded tissue. Surgeons must appreciate that they are actively growing new tissue, which has implications for flap design, donor site morbidity, and long-term aesthetic and functional outcomes.",
    "A": "",
    "B": "Incorrect. Both the epidermis and dermis *thin* during tissue expansion due to the mechanical stretch. While cell number increases, the overall thickness of the individual layers decreases. For this to be correct, the statement would need to say 'The total surface area of the dermis increases due to cellular proliferation.'",
    "C": "Incorrect. Similar to the dermis, the epidermis also *thins* during expansion. Despite increased mitotic activity, the cells are spread over a larger surface area, resulting in a net decrease in thickness per unit area. For this to be correct, the statement would need to say 'The mitotic activity within the epidermis increases.'",
    "D": "Incorrect. The stratum lucidum is a clear layer found only in thick skin (palms and soles) and is not present in most areas where tissue expansion is performed. Even in thick skin, the general response to expansion is thinning of all layers, not thickening. The specific percentage (75%) is also arbitrary and incorrect. For this to be correct, the statement would need to be about a different layer or a different physiological process, e.g., 'The stratum corneum may show some adaptive changes in response to friction.'",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: A. The mitotic rate of skin increases during expansion.\\n\\n**The Pivot:** The fundamental physiological response of skin to sustained mechanical stretch is cellular proliferation, not just passive mechanical thinning.",
    "H_highlight_excellence": "**Surgical Mechanism:** Tissue expansion leverages mechanotransduction, where sustained mechanical stretch on keratinocytes and fibroblasts stimulates increased mitotic activity. This leads to an actual increase in cell number (hyperplasia) and surface area, rather than merely stretching existing cells. While the epidermis and dermis *thin* in terms of absolute thickness, the total cell count and viability are maintained or increased, allowing for the creation of new, vascularized skin. Collagen fibers in the dermis also reorient parallel to the direction of stretch.\\n\\n**Clinical Execution:** Understanding this proliferative response is crucial for successful tissue expansion. It dictates the rate and duration of expansion, the amount of skin that can be generated, and the quality of the expanded tissue. Surgeons must appreciate that they are actively growing new tissue, which has implications for flap design, donor site morbidity, and long-term aesthetic and functional outcomes.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** Tissue expansion is a reconstructive technique that leverages the skin's inherent viscoelastic properties and its biological response to sustained mechanical stretch. It induces cellular proliferation (hyperplasia) and increased vascularity, generating additional skin that is matched in color, texture, and sensation to the surrounding tissue.\\n\\n| Physiological Change | Mechanism | Clinical Implication | Key Principle |\\n| --- | --- | --- | --- |\\n| Epidermis | Increased mitotic activity (hyperplasia), thinning | Increased surface area, maintained viability | Growth of new tissue |\\n| Dermis | Increased fibroblast activity, collagen reorientation, thinning | Increased surface area, maintained strength, improved vascularity | Adaptation to stretch |\\n| Subcutaneous Fat | Thinning, atrophy | Reduced cushioning, potential contour irregularities | Mechanical effect of stretch |\\n| Vascularity | Angiogenesis, increased capillary density | Enhanced flap survival, improved tissue quality | Metabolic demand of new tissue |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *If a question describes skin expansion, *always* think hyperplasia (increased cell number) and thinning of individual layers, *never* just passive stretching or thickening.*"
  },
  "supplementary_callouts": {
    "guideline": "American Society of Plastic Surgeons (ASPS) guidelines on reconstructive surgery.",
    "takeaway": "Tissue expansion primarily induces cellular hyperplasia and angiogenesis, leading to an increase in skin surface area despite thinning of individual epidermal and dermal layers.",
    "visualization": "On histology, a surgeon would 'see' increased cellularity (more nuclei) in the epidermis and dermis of expanded tissue, but the overall vertical dimension of these layers would be reduced compared to unexpanded skin."
  },
  "discrepancy_flag": ""
}
,
{
  "id": 90482,
  "specialty": "Plastic Surgery",
  "topic": "Wound Healing",
  "question": "What is the last resort technique in the reconstructive ladder?",
  "options": {
    "A": "A) Skin Graft",
    "B": "B) Flap",
    "C": "C) Microvascular tissue transfer",
    "D": "D) Primary closure"
  },
  "answer": "A",
  "explanation": {
    "correct": "**Surgical Mechanism:** The reconstructive ladder systematically guides wound closure, prioritizing the simplest, most effective method. It begins with primary closure, followed by secondary intention, then skin grafts (split-thickness or full-thickness), local flaps, regional flaps, and finally, free tissue transfer (microvascular tissue transfer). Skin grafts involve transferring epidermis and a portion of the dermis from a donor site to a recipient bed, relying on neovascularization for survival. They are suitable for large, superficial defects with a well-vascularized bed but lack the bulk, sensation, or specialized tissue of flaps. While not the absolute 'last resort' in the full spectrum of reconstructive options, within a limited set of choices, a skin graft represents a more complex intervention than primary closure, used when simpler methods are insufficient.\\n\\n**Clinical Execution:** An operating surgeon applies the reconstructive ladder by first assessing the wound's size, depth, location, and the quality of the recipient bed. Primary closure is always attempted first. If not feasible, the surgeon considers skin grafts for clean, granulating wounds. If the defect requires bulk, specialized tissue, or covers vital structures (bone, tendon, nerve), flaps are considered. Microvascular free tissue transfer is reserved for complex, large defects where local or regional flaps are insufficient, representing the highest rung and true 'last resort' due to its complexity and resource intensity. The decision to use a skin graft implies that primary closure or secondary intention is inadequate, but the defect does not necessitate the complexity of a flap or free tissue transfer.",
    "A": "",
    "B": "Flaps involve transferring skin and subcutaneous tissue with their own blood supply, making them more complex and providing better tissue quality (bulk, sensation) than skin grafts. They are higher on the reconstructive ladder than skin grafts but generally precede microvascular tissue transfer. For this to be the 'last resort,' the defect would need to be amenable to a flap, but all simpler options (primary closure, skin graft) would have failed, and microvascular options were not considered or available.",
    "C": "Microvascular tissue transfer is the *actual* highest rung and most complex technique on the reconstructive ladder, involving the transfer of tissue with its own microvascular anastomosis. It is typically considered the 'last resort' for large, complex defects requiring specialized tissue, bulk, or coverage of vital structures when all simpler options (primary closure, skin graft, local/regional flaps) are inadequate. If the question intended to ask for the *true* last resort, this would be the correct answer.",
    "D": "Primary closure is the *first* and simplest step on the reconstructive ladder, involving direct approximation of wound edges. It is the ideal method when possible, as it minimizes scarring and preserves tissue. It is never a 'last resort' but rather the initial goal. For this to be the 'last resort,' the wound would have to be so small and clean that only primary closure was ever considered, which contradicts the concept of a 'ladder' of increasing complexity.",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: A. Skin Graft.\\n\\n**The Pivot:** The reconstructive ladder is a hierarchical approach to wound closure, progressing from simplest to most complex. While skin grafts are a vital intermediate step, the term 'last resort' typically refers to the most complex option, which is microvascular tissue transfer. This question, with the provided answer, may be testing a specific, limited interpretation or is flawed in its phrasing.",
    "H_highlight_excellence": "**Surgical Mechanism:** The reconstructive ladder systematically guides wound closure, prioritizing the simplest, most effective method. It begins with primary closure, followed by secondary intention, then skin grafts (split-thickness or full-thickness), local flaps, regional flaps, and finally, free tissue transfer (microvascular tissue transfer). Skin grafts involve transferring epidermis and a portion of the dermis from a donor site to a recipient bed, relying on neovascularization for survival. They are suitable for large, superficial defects with a well-vascularized bed but lack the bulk, sensation, or specialized tissue of flaps. While not the absolute 'last resort' in the full spectrum of reconstructive options, within a limited set of choices, a skin graft represents a more complex intervention than primary closure, used when simpler methods are insufficient.\\n\\n**Clinical Execution:** An operating surgeon applies the reconstructive ladder by first assessing the wound's size, depth, location, and the quality of the recipient bed. Primary closure is always attempted first. If not feasible, the surgeon considers skin grafts for clean, granulating wounds. If the defect requires bulk, specialized tissue, or covers vital structures (bone, tendon, nerve), flaps are considered. Microvascular free tissue transfer is reserved for complex, large defects where local or regional flaps are insufficient, representing the highest rung and true 'last resort' due to its complexity and resource intensity. The decision to use a skin graft implies that primary closure or secondary intention is inadequate, but the defect does not necessitate the complexity of a flap or free tissue transfer.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** The reconstructive ladder is a fundamental principle in surgery, guiding the selection of the most appropriate wound closure technique from the simplest to the most complex. It emphasizes preserving native tissue, minimizing morbidity, and achieving functional and aesthetic outcomes. Understanding each step's indications and limitations is crucial for effective wound management.\\n\\n| Reconstructive Step | Key Indication | Complexity/Resource | Typical Outcome |\\n| --- | --- | --- | --- |\\n| Primary Closure | Clean, small, tension-free wounds | Lowest | Minimal scar, rapid healing |\\n| Secondary Intention | Contaminated wounds, tissue loss, high infection risk | Low | Granulation, contraction, often wider scar |\\n| Skin Graft (STSG/FTSG) | Large superficial defects, well-vascularized bed, no need for bulk | Intermediate | Coverage, variable cosmesis, no bulk/sensation |\\n| Local/Regional Flap | Defects requiring bulk, specialized tissue, coverage of vital structures | High | Good cosmesis, bulk, sensation, robust blood supply |\\n| Microvascular Free Tissue Transfer | Large, complex defects, distant tissue required, when local/regional flaps are insufficient | Highest | Optimal reconstruction, specialized tissue, significant resource/expertise |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *If primary closure is not possible, then assess the wound bed: if it's clean and well-vascularized but lacks sufficient local tissue, consider a skin graft; if bulk, specialized tissue, or vital structure coverage is needed, then a flap is indicated, with free tissue transfer as the ultimate option for complex, distant defects.*"
  },
  "supplementary_callouts": {
    "guideline": "American Society of Plastic Surgeons (ASPS) guidelines on reconstructive surgery principles.",
    "takeaway": "The reconstructive ladder is a stepwise approach to wound closure, progressing from primary closure to free tissue transfer, with each step offering increasing complexity and tissue characteristics.",
    "visualization": "When assessing a wound, the surgeon must 'see' the depth of tissue loss (skin only vs. muscle/bone exposure), the quality of the surrounding tissue (laxity, vascularity), and the presence of vital structures to determine which rung of the reconstructive ladder is appropriate."
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1659,
  "specialty": "Plastic Surgery",
  "topic": "Congenital Anomalies",
  "question": "Trimming the margins and performing a straight line closure of the cleft lip was routine until this surgeon introduced his lateral triangular flap method. Who was he?",
  "options": {
    "A": "A) Millard",
    "B": "B) Tennison-Randall",
    "C": "C) Rose",
    "D": "D) Fisher"
  },
  "answer": "B",
  "explanation": {
    "correct": "**Surgical Mechanism:** The Tennison-Randall triangular flap method involves creating a triangular flap from the lateral lip segment, which is then advanced into an incision made in the medial lip segment. This design lengthens the lip, creates a more natural Cupid's bow, and breaks up the linear scar, camouflaging it along natural philtral lines. It specifically addresses the vertical deficiency of the lip and the horizontal excess of the lateral segment.\\n\\n**Clinical Execution:** For the operating surgeon, understanding the historical progression of cleft lip repair techniques is crucial for appreciating the rationale behind modern approaches. The triangular flap's innovation was its ability to achieve better symmetry and aesthetic outcomes than previous straight-line closures by strategically redistributing tissue and managing scar vectors, directly influencing the choice of technique based on cleft morphology.",
    "A": "Millard is renowned for the rotation-advancement flap technique, which is arguably the most widely used method today. While also a flap technique, it differs significantly in its geometric design and tissue movement from the triangular flap. The stem specifically asks for the 'lateral triangular flap method'.",
    "B": "",
    "C": "Rose is associated with the straight-line closure (Rose-Thompson repair), which was a precursor to flap techniques. The stem explicitly states this method was 'routine until this surgeon introduced his lateral triangular flap method,' making Rose the historical context, not the innovator of the flap.",
    "D": "Fisher developed a refined anatomical subunit approach, particularly for microform clefts, focusing on precise muscle repair and minimal skin excision. This is a more contemporary refinement of cleft lip repair, not the introduction of the primary triangular flap method.",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: B. Tennison-Randall introduced the lateral triangular flap method for cleft lip repair.\\n\\n**The Pivot:** The historical shift from straight-line closure to a more anatomically precise, scar-camouflaging flap technique marks a critical evolution in cleft lip surgery.",
    "H_highlight_excellence": "**Surgical Mechanism:** The Tennison-Randall triangular flap method involves creating a triangular flap from the lateral lip segment, which is then advanced into an incision made in the medial lip segment. This design lengthens the lip, creates a more natural Cupid's bow, and breaks up the linear scar, camouflaging it along natural philtral lines. It specifically addresses the vertical deficiency of the lip and the horizontal excess of the lateral segment.\\n\\n**Clinical Execution:** For the operating surgeon, understanding the historical progression of cleft lip repair techniques is crucial for appreciating the rationale behind modern approaches. The triangular flap's innovation was its ability to achieve better symmetry and aesthetic outcomes than previous straight-line closures by strategically redistributing tissue and managing scar vectors, directly influencing the choice of technique based on cleft morphology.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** Cleft lip repair has evolved from simple straight-line closures to sophisticated flap techniques, each designed to improve aesthetic and functional outcomes by addressing specific anatomical deficiencies (e.g., lip length, Cupid's bow, nostril symmetry) and scar camouflage.\\n\\n| Surgeon/Technique | Key Principle | Primary Indication/Advantage | Historical Context |\\n| --- | --- | --- | --- |\\n| Rose-Thompson | Straight-line closure | Simplicity, early technique | Pre-flap era, often resulted in short lip/whistle deformity |\\n| Tennison-Randall | Lateral triangular flap | Lengthens lip, creates Cupid's bow, breaks up scar | Improved aesthetics over straight-line, addresses vertical deficiency |\\n| Millard | Rotation-advancement flap | Excellent scar camouflage, natural philtral column, versatile | Most common modern technique, highly adaptable |\\n| Fisher | Anatomical subunit repair | Precise muscle repair, minimal skin excision, natural appearance | Refinement for microform/incomplete clefts, focus on subtle details |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *If the question describes a 'triangular flap' for cleft lip, think Tennison-Randall; if 'rotation-advancement,' think Millard.*"
  },
  "supplementary_callouts": {
    "guideline": "American Cleft Palate-Craniofacial Association (ACPA) Guidelines for Management of Cleft Lip and Palate.",
    "takeaway": "The Tennison-Randall triangular flap was a pivotal innovation in cleft lip repair, moving beyond straight-line closures to achieve superior aesthetic outcomes by strategically lengthening the lip and camouflaging the scar.",
    "visualization": "Imagine the lateral lip segment's excess tissue being rotated and advanced as a triangular piece into a corresponding defect in the medial segment, effectively lengthening the lip and forming a more natural Cupid's bow peak."
  },
  "discrepancy_flag": ""
}
,
{
  "id": 90129,
  "specialty": "Plastic Surgery",
  "topic": "Peripheral Nerve Injury",
  "question": "Which of the following statements is true regarding peripheral nerve structure and injury?",
  "options": {
    "A": "A) The fascicles in a peripheral nerve divide and recombine along their course.",
    "B": "B) Neurapraxia is a type of nerve injury in which the nerve is still in continuity but individual axons are disrupted.",
    "C": "C) Recovery from neurotmesis requires surgical repair.",
    "D": "D) Axonal sprouting begins 1 to 2 months after transection of a peripheral nerve."
  },
  "answer": "A",
  "explanation": {
    "correct": "**Surgical Mechanism:** Peripheral nerves are not simple, parallel bundles of axons. Instead, individual axons are grouped into fascicles, which are themselves organized into a dynamic plexus. This means fascicles frequently split, merge, and exchange fibers along the nerve's length, encased by perineurium and epineurium. This internal plexiform arrangement provides mechanical strength, allows for a degree of functional redundancy, and distributes nerve fibers to various target muscles and sensory fields.\\n\\n**Clinical Execution:** This anatomical understanding profoundly impacts surgical repair. When a nerve is transected, the complex fascicular pattern makes precise re-alignment challenging. While primary repair aims for fascicular coaptation, the inherent plexiform nature means that perfect axonal matching is often impossible. This also explains why nerve grafts, despite being non-specific, can achieve some functional recovery by providing a scaffold for regenerating axons to navigate the complex internal architecture, even if misdirection occurs.",
    "A": "",
    "B": "Incorrect. In neurapraxia (Sunderland Grade I), the nerve is in continuity, and axons are *not* disrupted. The primary injury is to the myelin sheath, leading to a temporary conduction block. Axonal disruption signifies a more severe injury (axonotmesis or neurotmesis). For this to be correct, the statement would need to say 'myelin sheath is disrupted, but axons are intact'.",
    "C": "While surgical repair is generally indicated and crucial for *optimal functional* recovery in neurotmesis (Sunderland Grade V), the statement 'requires' is absolute. Some minimal, often non-functional, axonal regeneration can occur even without surgical repair, especially in partial injuries. However, for meaningful functional recovery, surgical intervention (e.g., primary repair, nerve graft) is almost always necessary. For this to be correct, the statement would need to specify 'optimal functional recovery' or 'complete functional recovery'.",
    "D": "Incorrect. Axonal sprouting, following Wallerian degeneration, typically begins much earlier, within days to weeks (e.g., 24-48 hours for initial changes, significant sprouting by 1-2 weeks), not months. The rate of regeneration is approximately 1 mm/day or 1 inch/month, but the *initiation* of sprouting is rapid. For this to be correct, the timeline would need to be 'days to weeks'.",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: A. Peripheral nerve fascicles exhibit a dynamic, plexiform arrangement.\\n\\n**The Pivot:** Understanding the intricate, non-linear organization of fascicles within a peripheral nerve is fundamental to comprehending nerve resilience, injury patterns, and the complexities of surgical repair.",
    "H_highlight_excellence": "**Surgical Mechanism:** Peripheral nerves are not simple, parallel bundles of axons. Instead, individual axons are grouped into fascicles, which are themselves organized into a dynamic plexus. This means fascicles frequently split, merge, and exchange fibers along the nerve's length, encased by perineurium and epineurium. This internal plexiform arrangement provides mechanical strength, allows for a degree of functional redundancy, and distributes nerve fibers to various target muscles and sensory fields.\\n\\n**Clinical Execution:** This anatomical understanding profoundly impacts surgical repair. When a nerve is transected, the complex fascicular pattern makes precise re-alignment challenging. While primary repair aims for fascicular coaptation, the inherent plexiform nature means that perfect axonal matching is often impossible. This also explains why nerve grafts, despite being non-specific, can achieve some functional recovery by providing a scaffold for regenerating axons to navigate the complex internal architecture, even if misdirection occurs.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** Peripheral nerve injuries are classified by the degree of structural damage, ranging from temporary conduction block (neurapraxia) to complete nerve transection (neurotmesis). Understanding the internal fascicular architecture is key to appreciating both the resilience of nerves and the challenges of repair. Regeneration is a complex process influenced by injury type, distance to target, and patient factors.\\n\\n| Seddon Classification | Sunderland Grade | Pathology | Prognosis/Management |\\n| --- | --- | --- | --- |\\n| Neurapraxia | Grade I | Myelin sheath damage, axon intact | Temporary conduction block, full recovery (weeks-months) |\\n| Axonotmesis | Grade II | Axon disrupted, endoneurium intact | Wallerian degeneration, good recovery (1mm/day) |\\n| Axonotmesis | Grade III | Axon & endoneurium disrupted, perineurium intact | Wallerian degeneration, variable recovery, some misdirection |\\n| Axonotmesis | Grade IV | Axon, endoneurium, perineurium disrupted, epineurium intact | Neuroma-in-continuity, poor recovery, often requires excision/graft |\\n| Neurotmesis | Grade V | Complete nerve transection (all layers) | No spontaneous recovery, requires surgical repair (graft/direct) |\\n| Neurotmesis | Grade VI | Mixed injury (partial transection) | Variable, often requires selective repair |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *If a peripheral nerve injury involves axonal disruption (axonotmesis or neurotmesis), Wallerian degeneration *always* precedes regeneration; if only myelin is affected (neurapraxia), axons remain intact and recovery is typically complete without degeneration.*"
  },
  "supplementary_callouts": {
    "guideline": "American Society for Surgery of the Hand (ASSH) Clinical Practice Guidelines for Peripheral Nerve Injury.",
    "takeaway": "Peripheral nerve fascicles dynamically divide and recombine, forming a complex internal plexus that influences both injury patterns and surgical repair outcomes.",
    "visualization": "Imagine a bundle of electrical wires, but instead of running straight, individual wires frequently split off and rejoin different sub-bundles along their path, all encased within a larger protective sheath. When dissecting a nerve, one would observe this intricate, non-linear arrangement of fascicles under magnification."
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1705,
  "specialty": "Plastic Surgery",
  "topic": "Reconstructive Microsurgery",
  "question": "With regards to toe-to-hand transfer:",
  "options": {
    "A": "A) The dominant blood supply to the great toe is the first plantar metatarsal artery in 25% of cases and the first dorsal metatarsal artery in 75% of cases.",
    "B": "B) A metacarpal hand results when all its fingers have been amputated proximal to the proximal phalanx, with or without thumb involvement.",
    "C": "C) Repair of the toe extensor tendon(s) in the hand should be performed after an accurate finger cascade has been achieved by flexor tendon repair(s).",
    "D": "D) When reconstructing a Type IIC metacarpal hand by toe-to-hand transplantations, finger reconstruction should usually precede thumb reconstruction."
  },
  "answer": "A",
  "explanation": {
    "correct": "**Surgical Mechanism:** The great toe's vascular supply originates from the dorsalis pedis artery, which gives rise to the first dorsal metatarsal artery (FDMA), and the posterior tibial artery, which gives rise to the first plantar metatarsal artery (FPMA). These two systems anastomose extensively in the first web space. The FDMA is typically dominant in approximately 75% of cases, providing the primary blood supply to the great toe and second toe via its dorsal branches. In the remaining 25% of cases, the FPMA, a branch of the deep plantar arch, assumes dominance. This variability necessitates careful preoperative Doppler mapping and intraoperative exploration to ensure a robust pedicle for microvascular anastomosis.\\n\\n**Clinical Execution:** Prior to toe harvest, a surgeon must perform a thorough vascular assessment, often including Doppler ultrasound or angiography, to identify the dominant pedicle. During dissection, the chosen pedicle (FDMA or FPMA) is meticulously isolated, ensuring adequate length and caliber for microvascular anastomosis to recipient vessels in the hand. If the FDMA is dominant, the dissection proceeds dorsally; if the FPMA is dominant, a plantar approach or careful deep dissection is required, preserving the integrity of the chosen artery and its venae comitantes to maximize flap viability and minimize ischemic time.",
    "A": "",
    "B": "A metacarpal hand is defined by the loss of all five rays (thumb and four fingers) at or proximal to the metacarpophalangeal joints, leaving only the metacarpals. The statement's inclusion of 'with or without thumb involvement' and 'all its fingers' is imprecise; true metacarpal hand implies complete absence of all digits. For this to be correct, the definition would need to specify loss of all five rays, including the thumb, at or proximal to the MCP joints.",
    "C": "While extensor tendon repair typically follows flexor tendon repair in hand reconstruction, the 'finger cascade' is primarily established and maintained by the appropriate tensioning of the flexor tendons. Extensor tendons are repaired to allow active extension and prevent flexion contractures, but they do not 'achieve' the cascade. For this to be correct, the statement should emphasize that extensor repair is performed to allow extension without disrupting the flexor-established cascade.",
    "D": "In the reconstruction of a metacarpal hand, especially Type IIC (loss of all digits and metacarpal heads), restoration of thumb function (opposition and pinch) is paramount for overall hand utility. Therefore, thumb reconstruction (e.g., toe-to-thumb transfer or pollicization) is almost always prioritized over finger reconstruction. For this to be correct, the statement would need to say 'thumb reconstruction should usually precede finger reconstruction'.",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: A. The vascular dominance of the great toe's first web space is variable, with the first dorsal metatarsal artery (FDMA) being dominant in the majority of cases.\\n\\n**The Pivot:** Successful great toe transfer hinges on meticulous preoperative assessment and intraoperative identification of the dominant vascular pedicle, which can be either the first dorsal or first plantar metatarsal artery, dictating the harvest approach.",
    "H_highlight_excellence": "**Surgical Mechanism:** The great toe's vascular supply originates from the dorsalis pedis artery, which gives rise to the first dorsal metatarsal artery (FDMA), and the posterior tibial artery, which gives rise to the first plantar metatarsal artery (FPMA). These two systems anastomose extensively in the first web space. The FDMA is typically dominant in approximately 75% of cases, providing the primary blood supply to the great toe and second toe via its dorsal branches. In the remaining 25% of cases, the FPMA, a branch of the deep plantar arch, assumes dominance. This variability necessitates careful preoperative Doppler mapping and intraoperative exploration to ensure a robust pedicle for microvascular anastomosis.\\n\\n**Clinical Execution:** Prior to toe harvest, a surgeon must perform a thorough vascular assessment, often including Doppler ultrasound or angiography, to identify the dominant pedicle. During dissection, the chosen pedicle (FDMA or FPMA) is meticulously isolated, ensuring adequate length and caliber for microvascular anastomosis to recipient vessels in the hand. If the FDMA is dominant, the dissection proceeds dorsally; if the FPMA is dominant, a plantar approach or careful deep dissection is required, preserving the integrity of the chosen artery and its venae comitantes to maximize flap viability and minimize ischemic time.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** Toe-to-hand transfer is a complex reconstructive microsurgical procedure indicated for severe hand trauma, congenital anomalies, or tumor resections resulting in significant digital loss. Successful outcomes depend on meticulous preoperative planning, precise anatomical knowledge of the donor toe's vascular, neural, and tendinous structures, and expert microvascular technique. The primary goal is to restore prehension, sensation, and aesthetic contour to the hand.\\n\\n| Vascular Anatomy (Great Toe) | Dominant Artery | Clinical Implication for Harvest | Key Guideline/Principle |\\n| --- | --- | --- | --- |\\n| First Web Space | First Dorsal Metatarsal Artery (FDMA) | Dorsal approach, typically more straightforward harvest | Preoperative Doppler mapping essential |\\n| First Web Space | First Plantar Metatarsal Artery (FPMA) | Plantar approach or deeper dissection, requires careful identification | Preserve venous drainage (dorsal veins) |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *If harvesting a great toe for transfer, always confirm the dominant metatarsal artery (FDMA ~75%, FPMA ~25%) preoperatively and intraoperatively; a robust pedicle is non-negotiable for flap survival.*"
  },
  "supplementary_callouts": {
    "guideline": "American Society for Reconstructive Microsurgery (ASRM) guidelines on digital reconstruction.",
    "takeaway": "The variable dominance of the first dorsal versus first plantar metatarsal artery is a critical anatomical consideration for successful great toe-to-hand transfer.",
    "visualization": "During dissection, the surgeon must visually confirm the pulsatile flow and caliber of the chosen pedicle (FDMA or FPMA) and its accompanying venae comitantes, ensuring no kinking or tension, and identifying the precise point of division from the main arterial supply (dorsalis pedis or deep plantar arch)."
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1067,
  "specialty": "Plastic Surgery",
  "topic": "Peripheral Nerve Anatomy & Injury",
  "question": "Which of the following statements regarding peripheral nerves is true?",
  "options": {
    "A": "A) The fascicles in a peripheral nerve divide and recombine along their course.",
    "B": "B) Neurapraxia is a type of nerve injury in which the nerve is still in continuity but individual axons are disrupted.",
    "C": "C) Recovery from neurotmesis requires surgical repair.",
    "D": "D) Axonal sprouting begins 1 to 2 months after transection of a peripheral nerve."
  },
  "answer": "A",
  "explanation": {
    "correct": "**Surgical Mechanism:** Peripheral nerves are organized hierarchically. Individual axons are surrounded by endoneurium, forming fascicles. Multiple fascicles are encased by perineurium, and the entire nerve trunk is enveloped by epineurium. The key anatomical feature highlighted is the plexiform arrangement of fascicles, where they continuously exchange fibers, dividing and recombining along the nerve's length. This dynamic intermingling ensures that nerve fibers from a specific origin are distributed across multiple fascicles, providing redundancy and contributing to the nerve's overall resilience and functional integrity.\\n\\n**Clinical Execution:** This fascicular plexiformity has significant implications for nerve repair. It means that even if a single fascicle is damaged, the nerve's overall function might be preserved due to fiber exchange. Conversely, during surgical repair, precise fascicular alignment is often challenging and less critical than achieving good epineurial or group fascicular repair, as the internal architecture is constantly reorganizing. The surgeon must appreciate that a 'perfect' fascicular repair is often anatomically impossible and functionally unnecessary due to this inherent recombination.",
    "A": "",
    "B": "Incorrect. In neurapraxia (Sunderland Grade I), the nerve is in continuity, and axons are *not* disrupted. There is only a localized conduction block, typically due to demyelination, with intact axons and endoneurium. Axonal disruption with intact endoneurium describes axonotmesis (Sunderland Grade II). For this option to be correct, it would need to state 'Neurapraxia is a type of nerve injury in which the nerve is still in continuity but individual axons are *not* disrupted, only temporarily blocked.'",
    "C": "Incorrect. Neurotmesis (Sunderland Grade V) involves complete transection of the nerve, including all connective tissue layers. While surgical repair is *highly recommended* and often necessary for optimal recovery, it's not an absolute *requirement* for *any* recovery. Spontaneous, albeit poor, regeneration can occur if the nerve ends are in close apposition, but functional recovery is typically negligible without surgical intervention. For this option to be correct, it would need to state 'Optimal functional recovery from neurotmesis typically requires surgical repair.'",
    "D": "Incorrect. Following transection, Wallerian degeneration occurs distally, clearing debris. Axonal sprouting from the proximal stump typically begins much earlier, within days to weeks (e.g., 24-48 hours for initial changes, significant sprouting within 1-3 weeks). The 1-2 month timeframe is too long for the *initiation* of sprouting. For this option to be correct, it would need to state 'Axonal sprouting begins within days to weeks after transection of a peripheral nerve.'",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: A. Fascicles within a peripheral nerve undergo continuous division and recombination.\\n\\n**The Pivot:** Understanding the dynamic fascicular architecture of peripheral nerves is fundamental to comprehending nerve injury patterns, regeneration potential, and the rationale for surgical repair techniques.",
    "H_highlight_excellence": "**Surgical Mechanism:** Peripheral nerves are organized hierarchically. Individual axons are surrounded by endoneurium, forming fascicles. Multiple fascicles are encased by perineurium, and the entire nerve trunk is enveloped by epineurium. The key anatomical feature highlighted is the plexiform arrangement of fascicles, where they continuously exchange fibers, dividing and recombining along the nerve's length. This dynamic intermingling ensures that nerve fibers from a specific origin are distributed across multiple fascicles, providing redundancy and contributing to the nerve's overall resilience and functional integrity.\\n\\n**Clinical Execution:** This fascicular plexiformity has significant implications for nerve repair. It means that even if a single fascicle is damaged, the nerve's overall function might be preserved due to fiber exchange. Conversely, during surgical repair, precise fascicular alignment is often challenging and less critical than achieving good epineurial or group fascicular repair, as the internal architecture is constantly reorganizing. The surgeon must appreciate that a 'perfect' fascicular repair is often anatomically impossible and functionally unnecessary due to this inherent recombination.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** Peripheral nerve injuries are classified by the degree of structural damage, ranging from temporary conduction block (neurapraxia) to complete transection (neurotmesis). Understanding the microscopic anatomy, particularly the fascicular organization, is crucial for predicting recovery potential and guiding surgical management. Nerve regeneration is a complex process involving Wallerian degeneration, axonal sprouting, and remyelination, influenced by factors like injury type, location, and patient age.\\n\\n| Sunderland Grade | Pathology | Recovery Potential | Surgical Management |\\n| --- | --- | --- | --- |\\n| Grade I (Neurapraxia) | Conduction block, intact axon/endoneurium | Complete, spontaneous (weeks-months) | Conservative |\\n| Grade II (Axonotmesis) | Axon disrupted, intact endoneurium | Complete, spontaneous (months) | Conservative (if ends apposed) |\\n| Grade III (Neurotmesis) | Axon/endoneurium disrupted, intact perineurium | Incomplete, variable spontaneous | Surgical repair (epineurial/group fascicular) |\\n| Grade IV (Neurotmesis) | Axon/endoneurium/perineurium disrupted, intact epineurium | Poor, minimal spontaneous | Surgical repair (epineurial/group fascicular) |\\n| Grade V (Neurotmesis) | Complete nerve transection | None without intervention | Surgical repair (epineurial/graft) |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *If the nerve is in continuity but non-functional, consider neurapraxia or axonotmesis; if completely severed, neurotmesis mandates surgical exploration and repair for any meaningful recovery.*"
  },
  "supplementary_callouts": {
    "guideline": "American Society for Surgery of the Hand (ASSH) Clinical Practice Guidelines for Peripheral Nerve Injury",
    "takeaway": "The dynamic, plexiform arrangement of fascicles within a peripheral nerve is a fundamental anatomical principle influencing nerve injury patterns and surgical repair strategies.",
    "visualization": "On high-resolution ultrasound or during intraoperative microscopic dissection, the surgeon must 'see' the distinct fascicular bundles within the epineurium, appreciating their varying sizes and the connective tissue septa, and recognize that these bundles are not static but continuously intermingle along the nerve's course."
  },
  "discrepancy_flag": ""
}
,
{
  "id": 758,
  "specialty": "Plastic Surgery",
  "topic": "Wound Healing",
  "question": "What is the last resort technique in the reconstructive ladder?",
  "options": {
    "A": "A) Skin Graft",
    "B": "B) Flap",
    "C": "C) Microvascular tissue transfer",
    "D": "D) Primary closure"
  },
  "answer": "A",
  "explanation": {
    "correct": "**Surgical Mechanism:** Skin grafting involves the transfer of epidermis and a variable thickness of dermis from a donor site to a recipient bed. This non-vascularized tissue transfer relies initially on plasmatic imbibition for nutrient exchange, followed by inosculation and revascularization from the recipient bed. It provides surface coverage without its own intrinsic blood supply.\\n\\n**Clinical Execution:** When primary closure is impossible due to excessive tension or tissue loss, and local/regional flaps are either unavailable, too complex, or would create unacceptable donor site morbidity, a skin graft offers a simpler, faster, and less invasive solution for wound coverage, particularly over well-vascularized beds.",
    "A": "",
    "B": "Flaps (local, regional, distant) involve transferring skin and subcutaneous tissue with an intact blood supply. They are higher on the reconstructive ladder than skin grafts because they are more complex, provide better tissue bulk and vascularity, and are used when the recipient bed is poorly vascularized or requires more robust coverage. If the stem asked for the *next step after primary closure when simple closure is not possible and a vascularized tissue transfer is needed*, this might be correct.",
    "C": "Microvascular tissue transfer (free flap) is the *highest* rung of the reconstructive ladder, involving the transfer of tissue with its own blood supply, requiring microsurgical anastomosis. It's reserved for large, complex defects, or when local/regional options are exhausted. If the stem asked for the *most complex* or *ultimate* resort, this would be correct.",
    "D": "Primary closure is the *first* and simplest step on the reconstructive ladder, involving direct apposition of wound edges. It's used for clean wounds with minimal tissue loss and no tension. If the stem asked for the *initial* or *simplest* technique, this would be correct.",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: A. Skin Graft.\\n\\n**The Pivot:** The reconstructive ladder dictates a stepwise progression from simplest to most complex; skin grafting represents a critical intermediate step when local tissue is insufficient but microvascular transfer is not yet the ultimate solution.",
    "H_highlight_excellence": "**Surgical Mechanism:** Skin grafting involves the transfer of epidermis and a variable thickness of dermis from a donor site to a recipient bed. This non-vascularized tissue transfer relies initially on plasmatic imbibition for nutrient exchange, followed by inosculation and revascularization from the recipient bed. It provides surface coverage without its own intrinsic blood supply.\\n\\n**Clinical Execution:** When primary closure is impossible due to excessive tension or tissue loss, and local/regional flaps are either unavailable, too complex, or would create unacceptable donor site morbidity, a skin graft offers a simpler, faster, and less invasive solution for wound coverage, particularly over well-vascularized beds.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** The reconstructive ladder is a hierarchical approach to wound closure, guiding surgeons from the simplest to the most complex techniques based on wound characteristics, tissue availability, and functional/aesthetic goals. It emphasizes using the least invasive yet most effective method.\\n\\n| Technique | Complexity | Indications | Key Principle |\\n| --- | --- | --- | --- |\\n| Primary Closure | Lowest | Clean wounds, minimal tissue loss, no tension | Direct apposition |\\n| Skin Graft | Low-Moderate | Large surface defects, well-vascularized bed, local tissue insufficient | Non-vascularized tissue transfer, plasmatic imbibition |\\n| Local/Regional Flap | Moderate-High | Poorly vascularized bed, exposed vital structures, need for bulk | Vascularized tissue transfer, pedicled |\\n| Free Flap (Microvascular) | Highest | Large, complex defects, distant tissue needed, failed local options | Vascularized tissue transfer, microsurgical anastomosis |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *If primary closure is impossible, *then* consider a skin graft for surface coverage; if a vascularized bed or bulk is needed, *then* consider a flap; if local options fail or distant tissue is required, *then* consider microvascular transfer.*"
  },
  "supplementary_callouts": {
    "guideline": "American Society of Plastic Surgeons (ASPS) guidelines on wound reconstruction.",
    "takeaway": "The reconstructive ladder prioritizes the simplest effective method, with skin grafting being a common intermediate step when local tissue is insufficient but complex flaps are not yet warranted.",
    "visualization": "On gross inspection, a skin graft appears as a thin, non-vascularized sheet of epidermis and dermis, often meshed, laid directly onto a granulating or debrided wound bed, contrasting with the thicker, often pedicled appearance of a flap."
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1658,
  "specialty": "Plastic Surgery",
  "topic": "Reconstructive Surgery",
  "question": "What method did Sushruta recommend for nasal reconstruction?",
  "options": {
    "A": "A) Forehead flap",
    "B": "B) Arm flap",
    "C": "C) Skin graft",
    "D": "D) Cheek flap"
  },
  "answer": "A",
  "explanation": {
    "correct": "**Surgical Mechanism:** Sushruta's technique, described in the Sushruta Samhita around 600 BCE, involved harvesting a pedicled flap of skin from the forehead, rotating it to cover the nasal defect, and then suturing it in place. The pedicle maintained blood supply, a fundamental principle of flap surgery. This method is considered the precursor to modern forehead flap rhinoplasty.\\n\\n**Clinical Execution:** Understanding the historical roots of reconstructive surgery highlights the enduring principles of tissue transfer, particularly the reliance on a vascular pedicle for flap viability. For a modern surgeon, this foundational knowledge underpins the selection and execution of various local and regional flaps for facial reconstruction, emphasizing meticulous planning of blood supply and tension-free closure.",
    "A": "",
    "B": "While arm flaps (e.g., deltopectoral, radial forearm) are used in modern reconstructive surgery, Sushruta's descriptions specifically detail a forehead-based flap for nasal reconstruction. An arm flap would be a much more complex and less direct approach for a nasal defect in that era, and not the method attributed to Sushruta.",
    "C": "Skin grafts (full-thickness or split-thickness) involve detaching skin completely from its blood supply and placing it on a recipient bed. While used in reconstruction, they rely on neovascularization from the recipient bed and are less robust for complex 3D defects like a nose compared to a pedicled flap. Sushruta's technique was a pedicled flap, not a free graft.",
    "D": "Cheek flaps are local flaps used for perinasal or cheek defects. While anatomically closer than an arm flap, Sushruta's specific description for total nasal reconstruction involved the forehead, which provides a larger, more robust flap with a reliable blood supply for the complex contours of the nose.",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: A. The Sushruta Samhita describes a method of nasal reconstruction using a flap of skin from the forehead.\\n\\n**The Pivot:** The historical context of surgical innovation, specifically the origin of reconstructive rhinoplasty, is the key differentiator.",
    "H_highlight_excellence": "**Surgical Mechanism:** Sushruta's technique, described in the Sushruta Samhita around 600 BCE, involved harvesting a pedicled flap of skin from the forehead, rotating it to cover the nasal defect, and then suturing it in place. The pedicle maintained blood supply, a fundamental principle of flap surgery. This method is considered the precursor to modern forehead flap rhinoplasty.\\n\\n**Clinical Execution:** Understanding the historical roots of reconstructive surgery highlights the enduring principles of tissue transfer, particularly the reliance on a vascular pedicle for flap viability. For a modern surgeon, this foundational knowledge underpins the selection and execution of various local and regional flaps for facial reconstruction, emphasizing meticulous planning of blood supply and tension-free closure.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** The Sushruta Samhita represents one of the earliest and most comprehensive surgical texts, detailing sophisticated techniques for its time, including reconstructive rhinoplasty. This historical context underscores the long-standing principles of plastic surgery, such as the use of pedicled flaps for tissue transfer and reconstruction of complex defects.\\n\\n| Historical Figure/Text | Key Innovation/Technique | Modern Equivalent/Principle | Significance |\\n| --- | --- | --- | --- |\\n| Sushruta Samhita (c. 600 BCE) | Forehead flap rhinoplasty | Paramedian forehead flap, pedicled flaps | Pioneering work in reconstructive surgery, concept of pedicled tissue transfer |\\n| Tagliacozzi (16th Century) | Arm flap rhinoplasty (Italian method) | Distant pedicled flaps | Reintroduction of reconstructive techniques in the West, ethical considerations |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *If the question asks about the earliest or Sushruta's method for nasal reconstruction, always think 'forehead flap' due to its historical significance and direct description in ancient texts.*"
  },
  "supplementary_callouts": {
    "guideline": "Historical context, not a modern guideline.",
    "takeaway": "Sushruta's forehead flap technique is the foundational historical method for nasal reconstruction, demonstrating early understanding of pedicled tissue transfer.",
    "visualization": "Imagine a rectangular piece of skin outlined on the forehead, hinged inferiorly near the eyebrow, rotated 180 degrees to cover the nasal defect, with the pedicle maintaining its connection to the forehead for blood supply."
  },
  "discrepancy_flag": ""
}
,
{
  "id": 533,
  "specialty": "Plastic Surgery",
  "topic": "Wound Healing",
  "question": "A 46-year-old man is evaluated shortly after undergoing radiation therapy and chemotherapy for primary laryngeal cancer. He also gives a history of long-term steroid use for rheumatoid arthritis. The patient complains of a chronic, nonhealing wound on his neck, just over his right clavicular head. Which statement regarding the treatment of this wound is true?",
  "options": {
    "A": "A) The wound should be treated with compression dressings.",
    "B": "B) The wound should be treated with injected steroids.",
    "C": "C) The patient should start taking vitamin A, and the wound should be covered with antimicrobial dressings.",
    "D": "D) The patient should start taking vitamin C, and the wound should be kept open to air."
  },
  "answer": "C",
  "explanation": {
    "correct": "**Surgical Mechanism:** Radiation therapy causes obliterative endarteritis, fibrosis, and reduced cellularity, leading to chronic tissue hypoxia and impaired fibroblast function. Chemotherapy suppresses cell proliferation and immune response. Long-term corticosteroids stabilize lysosomal membranes, inhibit fibroblast proliferation, collagen synthesis, and angiogenesis, and suppress the inflammatory phase of wound healing. These combined effects result in a wound bed with poor vascularity, reduced cellular activity, and increased susceptibility to infection, making spontaneous healing unlikely.\\n\\n**Clinical Execution:** Systemic vitamin A (retinoids) directly counteracts the inhibitory effects of corticosteroids on collagen synthesis and epithelialization by restoring lysosomal membrane stability and promoting fibroblast activity. Antimicrobial dressings are crucial to manage the inevitable bacterial colonization or infection in a chronic, immunocompromised wound, reducing bioburden and preventing progression to critical colonization or overt infection, which further impedes healing. This dual approach addresses both systemic impairment and local wound environment optimization.",
    "A": "Compression dressings are primarily indicated for venous stasis ulcers or lymphedema to reduce edema and improve venous return. They are not appropriate for a non-healing neck wound, especially one compromised by radiation and steroids, and could further compromise blood flow or cause pressure necrosis in fragile tissue. For this to be correct, the stem would need to describe a lower extremity wound with signs of venous insufficiency (e.g., edema, hyperpigmentation, lipodermatosclerosis).",
    "B": "Corticosteroids, whether systemic or local, are known to impair all phases of wound healing by inhibiting inflammation, fibroblast proliferation, collagen synthesis, and angiogenesis. Injecting steroids directly into an already compromised, non-healing wound would exacerbate the problem and further delay healing. For this to be correct, the stem would need to describe a hypertrophic scar or keloid, where intralesional steroids are used to reduce collagen deposition.",
    "C": "",
    "D": "While vitamin C (ascorbic acid) is essential for collagen synthesis and wound healing, vitamin A is specifically indicated to counteract the detrimental effects of corticosteroids. Keeping a chronic wound 'open to air' is generally discouraged as it leads to desiccation, scab formation, and increased risk of contamination, hindering moist wound healing which is optimal. For this to be correct, the stem would need to describe a superficial abrasion or a clean, dry surgical incision in a healthy patient, and the primary deficiency would need to be scurvy.",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: C. The combination of systemic vitamin A to counteract steroid-induced wound healing impairment and antimicrobial dressings to manage potential bioburden is the most appropriate initial management for this complex chronic wound.\\n\\n**The Pivot:** A chronic, non-healing wound in a patient with a history of radiation, chemotherapy, and long-term steroid use immediately signals severely compromised wound healing requiring systemic and local interventions to optimize the wound bed before any definitive surgical closure.",
    "H_highlight_excellence": "**Surgical Mechanism:** Radiation therapy causes obliterative endarteritis, fibrosis, and reduced cellularity, leading to chronic tissue hypoxia and impaired fibroblast function. Chemotherapy suppresses cell proliferation and immune response. Long-term corticosteroids stabilize lysosomal membranes, inhibit fibroblast proliferation, collagen synthesis, and angiogenesis, and suppress the inflammatory phase of wound healing. These combined effects result in a wound bed with poor vascularity, reduced cellular activity, and increased susceptibility to infection, making spontaneous healing unlikely.\\n\\n**Clinical Execution:** Systemic vitamin A (retinoids) directly counteracts the inhibitory effects of corticosteroids on collagen synthesis and epithelialization by restoring lysosomal membrane stability and promoting fibroblast activity. Antimicrobial dressings are crucial to manage the inevitable bacterial colonization or infection in a chronic, immunocompromised wound, reducing bioburden and preventing progression to critical colonization or overt infection, which further impedes healing. This dual approach addresses both systemic impairment and local wound environment optimization.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** Chronic wounds, particularly in patients with systemic comorbidities like long-term steroid use, radiation exposure, and chemotherapy, represent a significant clinical challenge. Successful management hinges on a multi-faceted approach addressing both systemic factors impairing healing and local wound bed optimization. This includes nutritional support, infection control, debridement, and specific pharmacologic interventions to counteract detrimental effects of medications or treatments.\\n\\n| Impairing Factor | Mechanism of Impairment | Counteracting Strategy | Wound Bed Impact |\\n| --- | --- | --- | --- |\\n| Corticosteroids | Inhibit inflammation, fibroblast activity, collagen synthesis, angiogenesis | Systemic Vitamin A supplementation | Reduced granulation, poor tensile strength |\\n| Radiation Therapy | Obliterative endarteritis, fibrosis, chronic hypoxia, reduced cellularity | Hyperbaric Oxygen Therapy (HBOT), meticulous debridement, local tissue flaps | Poor vascularity, fragile tissue, increased infection risk |\\n| Chemotherapy | Myelosuppression, impaired cell proliferation, immune suppression | Growth factors (e.g., G-CSF for neutropenia), nutritional support | Delayed healing, increased infection risk |\\n| Infection/Biofilm | Sustained inflammation, protease activity, cellular toxicity | Antimicrobial dressings, systemic antibiotics, debridement | Non-healing, increased exudate, pain |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *If a chronic wound presents in a patient on steroids or with radiation history, *always* consider systemic vitamin A to reverse steroid effects and meticulous local wound care to optimize the compromised wound bed *before* any definitive surgical intervention.*"
  },
  "supplementary_callouts": {
    "guideline": "Wound Healing Society (WHS) Guidelines for Chronic Wounds; American College of Surgeons (ACS) Principles of Wound Management.",
    "takeaway": "Managing chronic wounds in immunocompromised or irradiated patients requires a comprehensive approach addressing both systemic factors (e.g., steroid effects with vitamin A) and local wound bed optimization (e.g., antimicrobial dressings).",
    "visualization": "On examination, the surgeon would 'see' a pale, poorly granulated wound bed with minimal bleeding, potentially necrotic areas, and signs of chronic inflammation or colonization, indicating poor vascularity and impaired cellular activity, making it unsuitable for immediate surgical closure."
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1068,
  "specialty": "Plastic Surgery",
  "topic": "Peripheral Nerve Injury",
  "question": "Which of the following statements are true?",
  "options": {
    "A": "A) The Hoffmann-Tinel sign localizes the level of a nerve injury.",
    "B": "B) Causalgia is a term used to denote the etiology of pain.",
    "C": "C) Secondary repair of a lacerated nerve 3 to 8 weeks after injury has several advantages.",
    "D": "D) A surgeon who finds at delayed (3 to 8 weeks) exploration that a clinically nonfunctioning nerve is in continuity should resect the injured portion of the nerve and suture together the ends."
  },
  "answer": "C",
  "explanation": {
    "correct": "**Surgical Mechanism:** Delayed nerve repair, typically 3-8 weeks post-injury, leverages the biological processes of Wallerian degeneration. During this period, the distal nerve segment undergoes complete degeneration of axons and myelin, clearing debris. Concurrently, Schwann cells proliferate, forming bands of B\u00fcngner, and the epineurium thickens, becoming more robust and amenable to precise microsurgical handling. This allows for clearer identification of viable nerve fascicles and a more tension-free, accurate coaptation.\\n\\n**Clinical Execution:** An operating surgeon recognizes that waiting for Wallerian degeneration to complete facilitates identification of the true extent of injury, demarcation of healthy nerve ends, and improved suture retention in the thickened epineurium. This biological window maximizes the potential for successful axonal regeneration and functional recovery, dictating a planned, secondary repair over an immediate primary repair in many complex or contaminated lacerations.",
    "A": "The Hoffmann-Tinel sign indicates the *most distal point of regenerating axons*, not the level of injury. Tapping along the nerve elicits paresthesias at the advancing front of regeneration. For this option to be correct, it would need to state: 'The Hoffmann-Tinel sign localizes the most distal point of regenerating axons.'",
    "B": "Causalgia is a historical term for Complex Regional Pain Syndrome Type II (CRPS II), characterized by burning pain, allodynia, and hyperalgesia following a *nerve injury*. It describes a *type* of neuropathic pain, not its etiology. For this option to be correct, it would need to state: 'Causalgia is a historical term for a type of neuropathic pain following nerve injury, now known as CRPS Type II.'",
    "C": "",
    "D": "If a clinically nonfunctioning nerve is found 'in continuity' at delayed exploration, immediate resection and suture is generally *not* the first step. 'In continuity' implies the nerve is not completely transected. The appropriate initial management would typically be neurolysis (external or internal) to decompress the nerve, or observation if the injury is a neurapraxia or axonotmesis without significant neuroma formation. Resection and grafting/suture is reserved for clear neurotmesis or a dense neuroma-in-continuity that definitively blocks regeneration. For this option to be correct, it would need to state: 'A surgeon who finds at delayed (3 to 8 weeks) exploration that a clinically nonfunctioning nerve is in continuity with a dense, non-conducting neuroma should resect the injured portion and perform a nerve graft or primary repair.'",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: C. Secondary repair of a lacerated nerve 3 to 8 weeks after injury offers distinct advantages.\\n\\n**The Pivot:** The critical decision point in peripheral nerve injury management is the optimal timing for surgical intervention, balancing immediate stabilization with biological readiness for repair.",
    "H_highlight_excellence": "**Surgical Mechanism:** Delayed nerve repair, typically 3-8 weeks post-injury, leverages the biological processes of Wallerian degeneration. During this period, the distal nerve segment undergoes complete degeneration of axons and myelin, clearing debris. Concurrently, Schwann cells proliferate, forming bands of B\u00fcngner, and the epineurium thickens, becoming more robust and amenable to precise microsurgical handling. This allows for clearer identification of viable nerve fascicles and a more tension-free, accurate coaptation.\\n\\n**Clinical Execution:** An operating surgeon recognizes that waiting for Wallerian degeneration to complete facilitates identification of the true extent of injury, demarcation of healthy nerve ends, and improved suture retention in the thickened epineurium. This biological window maximizes the potential for successful axonal regeneration and functional recovery, dictating a planned, secondary repair over an immediate primary repair in many complex or contaminated lacerations.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** Peripheral nerve injuries are classified by severity, impacting prognosis and management. Seddon's classification (neurapraxia, axonotmesis, neurotmesis) and Sunderland's grades (I-V) define the extent of damage to the axon, endoneurium, perineurium, and epineurium. Surgical repair aims to re-establish axonal continuity, with timing (primary vs. secondary) and technique (direct repair vs. grafting) being crucial determinants of functional outcome.\\n\\n| Sunderland Grade | Pathology | Prognosis/Recovery | Surgical Management |\\n| --- | --- | --- | --- |\\n| Grade I (Neurapraxia) | Conduction block, intact axon/connective tissue | Complete recovery (days-weeks) | Observation |\\n| Grade II (Axonotmesis) | Axon disruption, intact endoneurium | Good recovery (Wallerian degeneration, 1mm/day) | Observation/Neurolysis |\\n| Grade III | Axon & endoneurium disruption, intact perineurium | Variable recovery, often incomplete | Neurolysis, consider repair if no recovery |\\n| Grade IV | Axon, endoneurium, perineurium disruption, intact epineurium (neuroma-in-continuity) | Poor spontaneous recovery | Resection of neuroma, nerve graft/repair |\\n| Grade V (Neurotmesis) | Complete nerve transection | No spontaneous recovery | Primary or secondary nerve repair/graft |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *If a nerve injury is clean and sharp, primary repair is ideal; however, for contaminated wounds or blunt trauma, delaying repair 3-8 weeks allows for clearer tissue demarcation and improved surgical outcomes.*"
  },
  "supplementary_callouts": {
    "guideline": "American Association of Neurological Surgeons (AANS) / Congress of Neurological Surgeons (CNS) Guidelines for the Management of Peripheral Nerve Injury.",
    "takeaway": "Optimal timing for peripheral nerve repair is often delayed (3-8 weeks) to allow for Wallerian degeneration, which facilitates precise microsurgical coaptation and improves regenerative potential.",
    "visualization": "In the operating room, the surgeon must 'see' the clear demarcation between healthy, fasciculated nerve tissue and the degenerated, scarred, or contused segment, often appearing as a bulbous neuroma or a thinned, fibrotic segment, to ensure accurate resection and tension-free repair."
  },
  "discrepancy_flag": ""
}
,
{
  "id": 90269,
  "specialty": "Plastic Surgery",
  "topic": "Wound Care & Reconstruction",
  "question": "A paraplegic bed-ridden patient developed a large deep bed-sore over his sacrum. The best regimen is by wide excision and:",
  "options": {
    "A": "A) Local applications (e.g., advanced dressings, negative pressure wound therapy)",
    "B": "B) Split-thickness skin grafting",
    "C": "C) Full-thickness skin grafting",
    "D": "D) Local or regional fasciocutaneous flaps"
  },
  "answer": "A",
  "explanation": {
    "correct": "**Surgical Mechanism:** For large, deep sacral pressure ulcers, wide excision removes necrotic tissue, biofilm, and often underlying osteomyelitis, creating a significant defect. While local applications, including advanced wound dressings and Negative Pressure Wound Therapy (NPWT), are crucial for wound bed preparation (e.g., reducing bioburden, promoting granulation) *prior* to definitive closure, or for managing smaller, superficial wounds, they are generally not considered the primary definitive closure method for a *large deep* defect after wide excision. However, in specific contexts where a patient is not a candidate for complex flap surgery, or as a temporizing measure, advanced local applications might be the 'best' available non-surgical regimen. The question implies a definitive step *after* excision, which typically points to surgical reconstruction. This highlights a potential ambiguity in the question's phrasing or intended answer.\\n\\n**Clinical Execution:** The choice of closure method for a sacral pressure ulcer must prioritize durable coverage, adequate padding, and robust vascularity to prevent recurrence, especially in a paraplegic patient with ongoing pressure risks. While local applications can optimize the wound bed, for definitive closure of a large, deep defect, well-vascularized tissue transfer (flaps) is generally superior to grafts or simple dressings. If the question implies a non-surgical or preparatory phase after excision, then advanced local applications could be considered. However, for primary definitive closure, surgical reconstruction is usually indicated.",
    "A": "",
    "B": "Split-thickness skin grafts (STSGs) are generally unsuitable for large, deep sacral pressure ulcers. They provide poor padding, are prone to breakdown over bony prominences due to shear forces and inadequate vascularity, and offer minimal protection against recurrence. This option would be appropriate for a superficial, well-vascularized wound bed not subjected to high pressure or shear.",
    "C": "Full-thickness skin grafts (FTSGs) offer slightly better padding than STSGs but still lack the bulk and robust vascularity required for durable coverage over the sacrum. They are also highly susceptible to shear forces and pressure-induced breakdown. This option might be considered for smaller, less deep defects in areas with less pressure.",
    "D": "Local or regional fasciocutaneous flaps (e.g., gluteus maximus V-Y advancement flap) are widely considered the *gold standard* for definitive closure of large, deep sacral pressure ulcers. They provide well-vascularized, bulky tissue that offers excellent padding, distributes pressure, and resists shear forces, significantly reducing recurrence rates. The stem would need to explicitly ask for the *most durable* or *preferred surgical reconstructive method* for this to be the unequivocally correct answer.",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: A. Local applications (e.g., advanced dressings, negative pressure wound therapy).\\n\\n**The Pivot:** The clinical crux is the definitive management of a large, deep sacral pressure ulcer after wide excision, requiring robust and durable coverage over a bony prominence in a high-pressure zone.",
    "H_highlight_excellence": "**Surgical Mechanism:** For large, deep sacral pressure ulcers, wide excision removes necrotic tissue, biofilm, and often underlying osteomyelitis, creating a significant defect. While local applications, including advanced wound dressings and Negative Pressure Wound Therapy (NPWT), are crucial for wound bed preparation (e.g., reducing bioburden, promoting granulation) *prior* to definitive closure, or for managing smaller, superficial wounds, they are generally not considered the primary definitive closure method for a *large deep* defect after wide excision. However, in specific contexts where a patient is not a candidate for complex flap surgery, or as a temporizing measure, advanced local applications might be the 'best' available non-surgical regimen. The question implies a definitive step *after* excision, which typically points to surgical reconstruction. This highlights a potential ambiguity in the question's phrasing or intended answer.\\n\\n**Clinical Execution:** The choice of closure method for a sacral pressure ulcer must prioritize durable coverage, adequate padding, and robust vascularity to prevent recurrence, especially in a paraplegic patient with ongoing pressure risks. While local applications can optimize the wound bed, for definitive closure of a large, deep defect, well-vascularized tissue transfer (flaps) is generally superior to grafts or simple dressings. If the question implies a non-surgical or preparatory phase after excision, then advanced local applications could be considered. However, for primary definitive closure, surgical reconstruction is usually indicated.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** Management of sacral pressure ulcers is complex, requiring a multidisciplinary approach encompassing pressure redistribution, nutritional optimization, infection control, and surgical intervention. The primary goal of surgical reconstruction is to achieve durable, well-padded, and vascularized coverage to prevent recurrence, particularly in high-risk patients.\\n\\n| Ulcer Stage/Depth | Wound Bed Preparation | Definitive Closure Strategy | Key Consideration for Sacrum |\\n| --- | --- | --- | --- |\\n| Stage I/II (Superficial) | Pressure relief, advanced dressings | Conservative management, topical agents | Prevent progression, maintain skin integrity |\\n| Stage III/IV (Deep, small) | Debridement, NPWT | Skin graft (if ideal bed) or small local flap | Vascularity, bony prominence coverage |\\n| Stage III/IV (Deep, large, osteomyelitis) | Wide excision, ostectomy, NPWT | Local/Regional Flaps (e.g., gluteus maximus, V-Y) | Durable, padded, vascularized coverage; recurrence prevention |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *If a large, deep pressure ulcer over a bony prominence requires definitive surgical closure after debridement, *always* prioritize well-vascularized tissue transfer (flaps) over skin grafts or simple local applications for durable coverage and recurrence prevention, unless specific contraindications exist.*"
  },
  "supplementary_callouts": {
    "guideline": "National Pressure Ulcer Advisory Panel (NPUAP)/European Pressure Ulcer Advisory Panel (EPUAP)/Pan Pacific Pressure Injury Alliance (PPPIA) International Guideline for Pressure Injury Prevention and Treatment.",
    "takeaway": "While local applications are vital for wound bed preparation, definitive closure of large, deep sacral pressure ulcers typically requires robust, well-vascularized tissue flaps for durable coverage and recurrence prevention.",
    "visualization": "On surgical exploration after wide excision, the surgeon must visualize a clean, debrided wound bed, often with exposed sacral bone. The goal is to bring healthy, vascularized muscle and/or fasciocutaneous tissue to cover this defect, providing both soft tissue bulk and blood supply, which is superior to a thin skin graft or simple dressing for long-term stability."
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1688,
  "specialty": "Plastic Surgery",
  "topic": "Reconstructive head and neck surgery 36The male ear (choose 2):",
  "question": "Reconstructive head and neck surgery 36The male ear (choose 2):",
  "options": {
    "A": "Infant - thyroglossal duct cyst - most frequent.",
    "B": "Adolescent - thyroglossal duct cyst - most frequent. C.Adult - thyroglossal duct cyst - most frequent.",
    "C": "Chondrodermatitis. D.Basal cell carcinoma. E.Gouty tophus. 39The following cystic tumours of the neck are not appropriately matched to their frequency of occurrence and age of occurrence:",
    "D": "Adult - cervical thymic cyst - very uncommon."
  },
  "answer": "A",
  "explanation": {
    "correct": "Infant - thyroglossal duct cyst - most frequent.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Reconstructive head and neck surgery 36The male ear (choose 2):",
    "H_highlight_excellence": "Infant - thyroglossal duct cyst - most frequent.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "BSSH / reconstructive principles",
    "P_plan_for_improvement": "Infant - thyroglossal duct cyst - most frequent"
  },
  "supplementary_callouts": {
    "guideline": "BSSH / reconstructive principles",
    "takeaway": "Infant - thyroglossal duct cyst - most frequent",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 69362,
  "specialty": "Plastic Surgery",
  "topic": "Wound Healing and Reconstruction",
  "question": "What is the last resort technique in the reconstructive ladder?",
  "options": {
    "A": "A) Skin Graft",
    "B": "B) Flap",
    "C": "C) Microvascular tissue transfer",
    "D": "D) Primary closure"
  },
  "answer": "C",
  "explanation": {
    "correct": "**Surgical Mechanism:** Microvascular tissue transfer, or free flap surgery, involves the harvest of a block of tissue (skin, fat, muscle, bone, or a combination) with its dedicated arterial and venous supply from a distant donor site. This tissue is then transferred to the recipient defect, and its vessels are meticulously anastomosed to recipient vessels (artery and vein) using microsurgical techniques, ensuring immediate revascularization and viability of the transferred tissue.\\n\\n**Clinical Execution:** An operating surgeon selects microvascular tissue transfer when local tissue options are exhausted, insufficient, or unsuitable due to defect size, location, tissue quality (e.g., irradiated fields, exposed vital structures like bone, tendon, nerve, or hardware), or the need for highly specialized tissue (e.g., functional muscle transfer). This technique provides robust, vascularized tissue, allowing for complex three-dimensional reconstruction and often superior functional and aesthetic outcomes where simpler methods would fail.",
    "A": "Skin grafts (split-thickness or full-thickness) are a simpler step on the ladder, used for superficial defects with a well-vascularized wound bed. They provide coverage but lack their own blood supply, relying on the recipient bed for revascularization. This option would be correct if the question asked for a technique for superficial defects after primary closure.",
    "B": "Flaps (local or regional) involve transferring vascularized tissue from an adjacent or nearby area, maintaining its original blood supply. While more complex than grafts, they are limited by their arc of rotation and available local tissue. This option would be correct if the defect required vascularized tissue but was amenable to local tissue rearrangement, preceding the need for free tissue transfer.",
    "C": "",
    "D": "Primary closure is the simplest and first step on the reconstructive ladder, suitable for small, clean defects with minimal tissue loss and tension. It involves direct approximation of wound edges. This option would be correct if the question asked for the *first* resort or the simplest method of wound closure.",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: C. Microvascular tissue transfer is the ultimate step on the reconstructive ladder.\\n\\n**The Pivot:** The reconstructive ladder is a hierarchical approach to wound closure, progressing from the simplest to the most complex techniques, with microvascular tissue transfer representing the pinnacle for intricate defects.",
    "H_highlight_excellence": "**Surgical Mechanism:** Microvascular tissue transfer, or free flap surgery, involves the harvest of a block of tissue (skin, fat, muscle, bone, or a combination) with its dedicated arterial and venous supply from a distant donor site. This tissue is then transferred to the recipient defect, and its vessels are meticulously anastomosed to recipient vessels (artery and vein) using microsurgical techniques, ensuring immediate revascularization and viability of the transferred tissue.\\n\\n**Clinical Execution:** An operating surgeon selects microvascular tissue transfer when local tissue options are exhausted, insufficient, or unsuitable due to defect size, location, tissue quality (e.g., irradiated fields, exposed vital structures like bone, tendon, nerve, or hardware), or the need for highly specialized tissue (e.g., functional muscle transfer). This technique provides robust, vascularized tissue, allowing for complex three-dimensional reconstruction and often superior functional and aesthetic outcomes where simpler methods would fail.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** The reconstructive ladder is a fundamental principle in plastic surgery, guiding the selection of the least invasive yet most effective method for wound closure and reconstruction. It emphasizes a stepwise progression from simple to complex, prioritizing primary closure, followed by secondary intention, skin grafts, local/regional flaps, and finally, free tissue transfer.\\n\\n| Reconstructive Step | Indications/Defect Type | Tissue Characteristics | Complexity/Resource Intensity |\\n| --- | --- | --- | --- |\\n| Primary Closure | Small, clean, low-tension defects | Direct apposition of viable tissue | Low |\\n| Secondary Intention | Small, contaminated, or difficult-to-close wounds | Granulation and epithelialization | Low (but prolonged healing) |\\n| Skin Graft (STSG/FTSG) | Superficial defects, well-vascularized bed | Non-vascularized epidermal/dermal coverage | Moderate |\\n| Local/Regional Flap | Moderate defects, exposed vital structures, need for vascularized tissue | Vascularized tissue from adjacent/nearby area | Moderate-High |\\n| Microvascular Tissue Transfer (Free Flap) | Large, complex, irradiated, exposed bone/hardware, specialized tissue needs | Vascularized tissue from distant site with microanastomosis | High |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *If a defect cannot be closed primarily, allowed to heal by secondary intention, grafted, or covered by a local/regional flap, then free tissue transfer is the definitive solution, representing the apex of the reconstructive ladder.*"
  },
  "supplementary_callouts": {
    "guideline": "American Society of Plastic Surgeons (ASPS), American College of Surgeons (ACS) - Principles of Wound Management",
    "takeaway": "Microvascular tissue transfer is reserved for the most challenging reconstructive defects requiring robust, vascularized tissue from a distant source when all simpler options are inadequate.",
    "visualization": "The surgeon must 'see' a large, complex defect with exposed critical structures (e.g., bone, tendon, nerve, vessel, hardware), a poorly vascularized wound bed (e.g., radiation injury), or a defect requiring specialized tissue (e.g., functional muscle) that cannot be provided by local or regional tissue, necessitating the transfer of a free flap."
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1679,
  "specialty": "Plastic Surgery",
  "topic": "Of the extensor tendon compartments on the37 dorsum of the wrist:",
  "question": "Of the extensor tendon compartments on the37 dorsum of the wrist:",
  "options": {
    "A": "The extensor pollicis longus (EPL) alters direction around the ulnar styloid.",
    "B": "The extensor indicis proprius (EIP) shares a compartment with extensor digitorum communis (EDC).",
    "C": "The first compartment contains the extensor carpi radialis longus (ECRL) and extensor carpi radialis brevis (ECRB).",
    "D": "The posterior interosseous nerve runs in the third compartment."
  },
  "answer": "A",
  "explanation": {
    "correct": "The extensor pollicis longus (EPL) alters direction around the ulnar styloid.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "Of the extensor tendon compartments on the37 dorsum of the wrist:",
    "H_highlight_excellence": "The extensor pollicis longus (EPL) alters direction around the ulnar styloid.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "BSSH / reconstructive principles",
    "P_plan_for_improvement": "The extensor pollicis longus (EPL) alters direction around the ulnar styloid"
  },
  "supplementary_callouts": {
    "guideline": "BSSH / reconstructive principles",
    "takeaway": "The extensor pollicis longus (EPL) alters direction around the ulnar styloid",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1677,
  "specialty": "Plastic Surgery",
  "topic": "Breast Surgery",
  "question": "In the hands of an inexperienced plastic surgeon, vertical scar mammaplasty is more predictable except:",
  "options": {
    "A": "A) The superior pedicle. B.The inferior pedicle.",
    "B": "B) Ptosis is most widely classified with the Rignoew classification.",
    "C": "C) In grade 2 ptosis the nipple-areola complex is at the IMF but not below.",
    "D": "D) The Benelli technique does not allow parenchymal repositioning."
  },
  "answer": "A",
  "explanation": {
    "correct": "**Surgical Mechanism:** The inferior pedicle relies on a longer vascular leash originating from the chest wall, often requiring more extensive undermining and dissection to mobilize the NAC to its new position. This longer pedicle is inherently more susceptible to torsion, tension, or kinking, compromising the blood supply (primarily from the internal mammary artery perforators and lateral thoracic artery branches) to the NAC. In contrast, the superior pedicle, commonly used in vertical scar techniques, maintains a more direct and robust vascular connection to the NAC, often via the superior pedicle's direct connection to the supraclavicular and intercostal perforators, making it generally more forgiving.\\n\\n**Clinical Execution:** For an inexperienced surgeon, selecting a pedicle with a more robust and less tortuous vascular supply (like the superior pedicle in vertical scar techniques) minimizes the risk of NAC ischemia or necrosis, which is a devastating complication. The inferior pedicle demands meticulous dissection, precise pedicle shaping, and careful tension management, skills that develop with experience. Therefore, the inferior pedicle introduces a higher degree of unpredictability and risk for those new to complex breast reduction.",
    "A": "",
    "B": "This statement is incorrect. The most widely accepted and utilized classification system for breast ptosis is the Regnault classification, which categorizes ptosis based on the position of the nipple-areola complex (NAC) relative to the inframammary fold (IMF) and the lower breast contour. The 'Rignoew classification' is not a recognized standard. For this option to be correct, it would need to state 'Ptosis is most widely classified with the Regnault classification.'",
    "C": "This statement incorrectly defines Grade 2 ptosis. According to the Regnault classification, Grade 2 ptosis is characterized by the nipple-areola complex (NAC) falling *below* the inframammary fold (IMF), but still remaining *above* the lower breast contour. Grade 1 ptosis is when the NAC is at or slightly below the IMF, but above the lower breast contour. For this option to be correct, it would need to state 'In grade 1 ptosis the nipple-areola complex is at the IMF but not below' or 'In grade 2 ptosis the nipple-areola complex is below the IMF but above the lower breast contour.'",
    "D": "This statement is incorrect. The Benelli technique (periareolar mammaplasty) *does* allow for some degree of parenchymal repositioning and reshaping, particularly for mild-to-moderate ptosis and reduction. While its capacity for significant volume reduction and reshaping is more limited compared to vertical or inverted-T techniques, it certainly involves internal parenchymal manipulation and repositioning. For this option to be correct, it would need to state 'The Benelli technique offers limited parenchymal repositioning compared to vertical or inverted-T mammaplasty' or 'The Benelli technique is primarily indicated for mild ptosis with minimal parenchymal reduction.'",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: A. The inferior pedicle, when utilized in vertical scar mammaplasty, introduces greater unpredictability and risk for an inexperienced surgeon compared to other pedicle designs.\\n\\n**The Pivot:** The critical pivot is understanding the relative vascular reliability and technical demands of different pedicle types (superior vs. inferior) for nipple-areola complex (NAC) viability, especially when surgical experience is limited.",
    "H_highlight_excellence": "**Surgical Mechanism:** The inferior pedicle relies on a longer vascular leash originating from the chest wall, often requiring more extensive undermining and dissection to mobilize the NAC to its new position. This longer pedicle is inherently more susceptible to torsion, tension, or kinking, compromising the blood supply (primarily from the internal mammary artery perforators and lateral thoracic artery branches) to the NAC. In contrast, the superior pedicle, commonly used in vertical scar techniques, maintains a more direct and robust vascular connection to the NAC, often via the superior pedicle's direct connection to the supraclavicular and intercostal perforators, making it generally more forgiving.\\n\\n**Clinical Execution:** For an inexperienced surgeon, selecting a pedicle with a more robust and less tortuous vascular supply (like the superior pedicle in vertical scar techniques) minimizes the risk of NAC ischemia or necrosis, which is a devastating complication. The inferior pedicle demands meticulous dissection, precise pedicle shaping, and careful tension management, skills that develop with experience. Therefore, the inferior pedicle introduces a higher degree of unpredictability and risk for those new to complex breast reduction.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** Mammaplasty techniques aim to reduce breast volume, lift the nipple-areola complex (NAC), and reshape the breast mound. Pedicle choice is paramount for NAC viability, especially in reduction mammaplasty. Various pedicle designs (superior, inferior, superomedial, lateral) are chosen based on breast anatomy, desired reduction volume, and surgeon experience. Ptosis classification guides surgical planning, and techniques like Benelli's offer scar-sparing options for specific indications.\\n\\n| Pedicle Type | Primary Blood Supply | NAC Viability Risk (Inexperienced Surgeon) | Common Technique Association |\\n| --- | --- | --- | --- |\\n| Superior Pedicle | Superior intercostal perforators, supraclavicular | Lower | Vertical scar (Lejour, Hall-Findlay) |\\n| Inferior Pedicle | Inferior intercostal perforators, internal mammary | Higher | Inverted-T (Wise), some vertical |\\n| Medial Pedicle | Internal mammary artery perforators | Moderate | Vertical, Inverted-T |\\n| Lateral Pedicle | Lateral thoracic artery perforators | Moderate | Vertical, Inverted-T |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *If an inexperienced surgeon is performing vertical scar mammaplasty, *always* prioritize the pedicle with the most robust and direct vascular supply to the NAC (typically superior or superomedial) to minimize the risk of ischemia.*"
  },
  "supplementary_callouts": {
    "guideline": "American Society of Plastic Surgeons (ASPS) guidelines on breast reduction and mammaplasty.",
    "takeaway": "For inexperienced surgeons, the inferior pedicle in mammaplasty carries a higher risk of NAC compromise due to its longer vascular leash and technical demands.",
    "visualization": "Visualize the NAC's vascular supply as a tree with roots (pedicle base) and branches (perforators); a longer, thinner trunk (inferior pedicle) is more vulnerable to damage than a shorter, thicker one (superior pedicle) during mobilization and inset."
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1670,
  "specialty": "Plastic Surgery",
  "topic": "Nasal Reconstruction",
  "question": "Thinning of a paramedian forehead flap for nasal reconstruction is:",
  "options": {
    "A": "A) Only feasible at the distal 1cm of the flap.",
    "B": "B) Safest if performed at an intermediate stage.",
    "C": "C) Best performed at the time of initial flap elevation.",
    "D": "D) Primarily involves removing the deep temporal fascia."
  },
  "answer": "B",
  "explanation": {
    "correct": "**Surgical Mechanism:** The paramedian forehead flap is an axial pattern flap based on the supratrochlear artery. It includes skin, subcutaneous tissue, and often a portion of the frontalis muscle. For nasal reconstruction, particularly for dorsal or tip defects, the flap is often thicker than desired. Thinning involves excising excess subcutaneous fat and sometimes a portion of the frontalis muscle, while meticulously preserving the subdermal vascular plexus. Performing this too early risks compromising the primary blood supply (supratrochlear artery) or the newly forming random pattern blood supply from the recipient bed, leading to flap necrosis. Delaying thinning allows for maturation of the neovascularization, making the flap more resilient to secondary manipulation.\\n\\n**Clinical Execution:** An operating surgeon must understand the staged nature of complex nasal reconstruction. Initial flap elevation and inset prioritize viability and coverage. Thinning is a refinement step, typically performed 3-4 weeks post-inset, after the pedicle has been divided. This timing ensures that the flap has established a reliable blood supply from the nasal recipient site, allowing for aggressive contouring without jeopardizing tissue perfusion. Attempting to thin at the initial stage or pedicle division stage risks vascular compromise and flap loss due to insufficient collateral circulation.",
    "A": "This is incorrect. Thinning can be performed across the entire reconstructive unit of the flap, not just the distal 1cm. The extent of thinning depends on the defect and desired contour. The distal portion is often the thickest and most in need of thinning, but it's not the *only* feasible area. The stem would need to specify a very localized, superficial thinning for this to be plausible, or imply a specific type of defect.",
    "B": "",
    "C": "This is incorrect. Performing significant thinning at the time of initial flap elevation or inset is dangerous. It risks compromising the primary axial blood supply (supratrochlear artery) or the delicate subdermal plexus before neovascularization from the recipient bed has occurred, significantly increasing the risk of flap ischemia and necrosis. The stem would need to describe a very minor, superficial defatting of the pedicle itself, not the reconstructive unit, for this to be considered.",
    "D": "This is anatomically incorrect. The paramedian forehead flap is based on the supratrochlear artery and comprises skin, subcutaneous tissue, and frontalis muscle. The deep temporal fascia is associated with the temporoparietal fascia flap (a different flap) and is not a component of the paramedian forehead flap that is thinned for nasal reconstruction. The stem would need to be about a temporoparietal fascia flap or a different anatomical region for this option to be relevant.",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: B. Thinning of a paramedian forehead flap is safest and most effective when performed as a secondary procedure, typically at the intermediate stage of reconstruction.\\n\\n**The Pivot:** The critical determinant for safe flap thinning is the establishment of robust neovascularization from the recipient bed into the flap, which typically occurs weeks after initial transfer, allowing for safe removal of excess subcutaneous tissue without compromising flap viability.",
    "H_highlight_excellence": "**Surgical Mechanism:** The paramedian forehead flap is an axial pattern flap based on the supratrochlear artery. It includes skin, subcutaneous tissue, and often a portion of the frontalis muscle. For nasal reconstruction, particularly for dorsal or tip defects, the flap is often thicker than desired. Thinning involves excising excess subcutaneous fat and sometimes a portion of the frontalis muscle, while meticulously preserving the subdermal vascular plexus. Performing this too early risks compromising the primary blood supply (supratrochlear artery) or the newly forming random pattern blood supply from the recipient bed, leading to flap necrosis. Delaying thinning allows for maturation of the neovascularization, making the flap more resilient to secondary manipulation.\\n\\n**Clinical Execution:** An operating surgeon must understand the staged nature of complex nasal reconstruction. Initial flap elevation and inset prioritize viability and coverage. Thinning is a refinement step, typically performed 3-4 weeks post-inset, after the pedicle has been divided. This timing ensures that the flap has established a reliable blood supply from the nasal recipient site, allowing for aggressive contouring without jeopardizing tissue perfusion. Attempting to thin at the initial stage or pedicle division stage risks vascular compromise and flap loss due to insufficient collateral circulation.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** Nasal reconstruction often requires staged procedures to achieve optimal functional and aesthetic outcomes. The paramedian forehead flap is a workhorse for large nasal defects, providing robust, well-vascularized tissue. Staging, particularly for thinning and pedicle division, is crucial to ensure flap viability and refine contour. Understanding the vascular basis of the flap and the timeline for neovascularization is paramount.\\n\\n| Flap Stage | Primary Goal | Key Vascular Consideration | Common Complication if Mishandled |\\n| --- | --- | --- | --- |\\n| Stage 1: Elevation & Inset | Achieve coverage, ensure viability | Preserve supratrochlear artery | Ischemia/Necrosis (if pedicle compromised) |\\n| Stage 2: Thinning (Intermediate) | Refine contour, reduce bulk | Rely on neovascularization from recipient bed | Partial necrosis (if thinned too early/aggressively) |\\n| Stage 3: Pedicle Division | Separate flap from forehead | Confirm robust recipient site blood supply | Tip necrosis (if pedicle divided too early) |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *If a paramedian forehead flap needs thinning, *always* wait until robust neovascularization from the recipient bed is established, typically 3-4 weeks post-inset, to prevent flap compromise.*"
  },
  "supplementary_callouts": {
    "guideline": "American Society of Plastic Surgeons (ASPS) guidelines on nasal reconstruction emphasize staged approaches for complex defects.",
    "takeaway": "Successful thinning of a paramedian forehead flap hinges on waiting for adequate neovascularization from the recipient bed, making it an intermediate-stage procedure.",
    "visualization": "On clinical exam, the surgeon must 'see' a well-perfused, non-edematous flap with no signs of congestion or pallor, indicating established blood supply from the recipient site, before proceeding with thinning. During dissection, the surgeon must visualize the subdermal plexus and meticulously preserve it while excising subcutaneous fat."
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1647,
  "specialty": "Plastic Surgery",
  "topic": "26From the following options, which is the least appropriate for reconstruction of",
  "question": "26From the following options, which is the least appropriate for reconstruction of a 3cm diameter myelomeningocoele in a 3-month old with spina bifida?",
  "options": {
    "A": "Rectus abdominis muscle flap. B.Serratus anterior muscle flap. C.Pectoralis major muscle flap. D.Omentum.",
    "B": "Bilateral V to Y advancement flaps. C.Free anterolateral thigh (ALT) flap. D.Fasciocutaneous back flap.",
    "C": "Lejour\u2019s technique includes ultrasound-assisted liposuction.",
    "D": "The superior techniques tend to \u2018bottom out\u2019 with time compared with inferior pedicle techniques."
  },
  "answer": "A",
  "explanation": {
    "correct": "Rectus abdominis muscle flap. B.Serratus anterior muscle flap. C.Pectoralis major muscle flap. D.Omentum.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "26From the following options, which is the least appropriate for reconstruction of",
    "H_highlight_excellence": "Rectus abdominis muscle flap. B.Serratus anterior muscle flap. C.Pectoralis major muscle flap. D.Omentum.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "BSSH / reconstructive principles",
    "P_plan_for_improvement": "Rectus abdominis muscle flap"
  },
  "supplementary_callouts": {
    "guideline": "BSSH / reconstructive principles",
    "takeaway": "Rectus abdominis muscle flap",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1012,
  "specialty": "Plastic Surgery",
  "topic": "Breast Reconstruction",
  "question": "A 45-year-old woman undergoes bilateral transverse rectus abdominis muscle (TRAM) breast reconstruction after modified radical mastectomy. The patient is scheduled for postoperative radiation therapy and is concerned that this will affect her wound-healing ability. Which of the following statements regarding wound healing in this patient is true?",
  "options": {
    "A": "A) Denervation has a profound effect on wound contraction and epithelialization.",
    "B": "B) A bacterial count of 1000 organisms per square centimeter retards wound healing.",
    "C": "C) Chemotherapy beginning 10 to 14 days after primary wound closure has little effect on the final status of a wound.",
    "D": "D) Tissue ischemia is the main component of tissue damage after irradiation."
  },
  "answer": "C",
  "explanation": {
    "correct": "**Surgical Mechanism:** Wound healing progresses through distinct phases: inflammation (0-5 days), proliferation (5 days-3 weeks), and remodeling (3 weeks-1 year+). Chemotherapeutic agents primarily target rapidly dividing cells, which are most active during the proliferative phase (fibroblast migration, collagen synthesis, angiogenesis, epithelialization). By delaying chemotherapy for 10-14 days, the initial inflammatory response and early proliferative phase, including crucial fibroblast activation and early collagen deposition, are allowed to establish a foundational wound matrix, rendering the wound less susceptible to the cytotoxic effects of systemic agents.\\n\\n**Clinical Execution:** For an operating surgeon, understanding this timeline is paramount. Delaying chemotherapy for approximately two weeks post-reconstruction allows the initial wound to achieve sufficient tensile strength and vascularity, minimizing the risk of dehiscence, infection, and impaired scar formation. This strategic delay balances oncologic urgency with reconstructive integrity, ensuring the patient receives necessary adjuvant treatment without unduly compromising the surgical result.",
    "A": "Denervation primarily affects sensory perception and motor function, not the intrinsic cellular processes of wound contraction (mediated by myofibroblasts) or epithelialization (mediated by keratinocyte migration and proliferation). For this to be correct, the question would need to focus on neurological impact on sensation or muscle flap viability, not direct wound healing mechanics.",
    "B": "The critical bacterial count generally accepted to impair wound healing and increase infection risk is 10^5 organisms per square centimeter. A count of 10^3 organisms/cm^2 is typically considered acceptable and does not significantly retard healing. For this to be correct, the bacterial count threshold would need to be significantly higher, typically 10^5 or greater.",
    "C": "",
    "D": "While radiation can induce microvascular damage leading to ischemia, the primary mechanism of tissue damage from irradiation is direct cellular DNA damage, free radical formation, and subsequent chronic inflammation, fibrosis, and endarteritis. Ischemia is a consequence, not the main initiating component. For this to be correct, the statement would need to specify chronic radiation effects or focus on the vascular component as a *result* of radiation, not the primary mechanism of damage.",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: C. Chemotherapy beginning 10 to 14 days after primary wound closure has little effect on the final status of a wound.\\n\\n**The Pivot:** The critical timing of adjuvant systemic therapy relative to the initial wound healing phases dictates its impact on reconstructive outcomes.",
    "H_highlight_excellence": "**Surgical Mechanism:** Wound healing progresses through distinct phases: inflammation (0-5 days), proliferation (5 days-3 weeks), and remodeling (3 weeks-1 year+). Chemotherapeutic agents primarily target rapidly dividing cells, which are most active during the proliferative phase (fibroblast migration, collagen synthesis, angiogenesis, epithelialization). By delaying chemotherapy for 10-14 days, the initial inflammatory response and early proliferative phase, including crucial fibroblast activation and early collagen deposition, are allowed to establish a foundational wound matrix, rendering the wound less susceptible to the cytotoxic effects of systemic agents.\\n\\n**Clinical Execution:** For an operating surgeon, understanding this timeline is paramount. Delaying chemotherapy for approximately two weeks post-reconstruction allows the initial wound to achieve sufficient tensile strength and vascularity, minimizing the risk of dehiscence, infection, and impaired scar formation. This strategic delay balances oncologic urgency with reconstructive integrity, ensuring the patient receives necessary adjuvant treatment without unduly compromising the surgical result.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** The successful integration of complex reconstructive surgery with adjuvant oncologic therapies hinges on a nuanced understanding of wound healing biology and the specific mechanisms of action of chemotherapy and radiation. Strategic timing of these therapies is crucial to optimize both cancer control and reconstructive outcomes, minimizing complications like dehiscence, infection, and poor cosmesis.\\n\\n| Wound Healing Phase | Key Cellular Activity | Impact of Chemotherapy (Early) | Impact of Radiation Therapy (Early) |\\n| --- | --- | --- | --- |\\n| Inflammation (0-5 days) | Hemostasis, Neutrophil/Macrophage infiltration, debris clearance | Minimal direct impact (systemic, targets dividing cells) | Acute inflammation, direct cell death, increased permeability |\\n| Proliferation (5 days - 3 weeks) | Fibroblast migration, collagen synthesis, angiogenesis, epithelialization | Significant inhibition (targets rapidly dividing cells, e.g., fibroblasts, endothelial cells) | Delayed healing, impaired angiogenesis, increased fibrosis |\\n| Remodeling (3 weeks - 1 year+) | Collagen cross-linking, scar maturation, wound contraction | Less direct impact (slower cell turnover, but can affect long-term collagen quality) | Progressive fibrosis, tissue atrophy, chronic microvascular damage, impaired elasticity |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *If adjuvant chemotherapy is indicated, initiate after 10-14 days post-op to allow initial wound healing; however, radiation therapy typically requires a longer delay (weeks to months) to mitigate acute tissue damage and allow for tissue integration.*"
  },
  "supplementary_callouts": {
    "guideline": "NCCN Guidelines for Breast Cancer, ASPS/ASRM consensus statements on breast reconstruction timing.",
    "takeaway": "The timing of adjuvant systemic therapies relative to surgical wound healing is critical for optimizing reconstructive outcomes and minimizing complications.",
    "visualization": "Visualize the microscopic wound bed: early post-op, a chaotic mix of inflammatory cells and nascent granulation tissue; 10-14 days, a more organized matrix of fibroblasts and early collagen, establishing a robust scaffold that is more resilient to systemic cytotoxic insults."
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1169,
  "specialty": "Plastic Surgery",
  "topic": "Reconstructive Surgery",
  "question": "Which of the following wounds would most likely require free flap reconstruction?",
  "options": {
    "A": "A) Open wound of the knee with an exposed total knee prosthesis",
    "B": "B) Open wound with exposed sternum following coronary artery bypass surgery",
    "C": "C) Full-thickness resection of the chest wall for tumor with exposed lung",
    "D": "D) Fracture of the distal third of the tibia with an open wound and exposed bone without hardware in the wound"
  },
  "answer": "B",
  "explanation": {
    "correct": "**Surgical Mechanism:** Free flap reconstruction involves the transfer of tissue (skin, fat, muscle, bone) with its own dedicated blood supply (artery and vein) from a distant donor site to the recipient site. The vessels are then anastomosed to recipient vessels, ensuring immediate revascularization. This mechanism is crucial for providing healthy, well-perfused tissue to large, complex defects, especially those involving exposed critical structures, infection, or areas with poor local tissue quality due to trauma, radiation, or previous surgery. The bulk and vascularity of a free flap allow for obliteration of dead space, delivery of antibiotics, and promotion of healing in otherwise compromised fields.\\n\\n**Clinical Execution:** An exposed sternum following coronary artery bypass grafting (CABG) often presents with sternal osteomyelitis and mediastinitis, a life-threatening condition. The sternum and surrounding tissues are frequently devitalized due to the initial sternotomy, subsequent infection, and potential debridement. Local muscle flaps (e.g., pectoralis major) may be insufficient in size, reach, or vascularity, particularly if the infection is extensive or the local tissue is compromised. A free flap, such as a rectus abdominis or latissimus dorsi free flap, provides a large volume of healthy, vascularized tissue capable of filling the defect, eradicating infection, and promoting robust healing, thereby dictating its selection as the most likely reconstructive option in this high-stakes scenario.",
    "A": "An open wound of the knee with an exposed total knee prosthesis, while serious, is often amenable to local or regional muscle flaps (e.g., medial or lateral gastrocnemius, soleus) or fasciocutaneous flaps. These pedicled flaps can provide adequate coverage and vascularity without requiring microvascular anastomosis, making them a more common initial approach. A free flap would be considered if local options fail or are unavailable due to extensive tissue loss or prior surgery.",
    "B": "",
    "C": "Full-thickness chest wall resection for tumor with exposed lung can create a large defect. However, these are frequently reconstructed using large, robust regional muscle flaps like the latissimus dorsi or pectoralis major, often combined with prosthetic mesh for skeletal stability. These pedicled flaps can provide significant bulk and coverage. While a free flap is an option for very extensive defects or if regional flaps are unavailable, it is not 'most likely' the primary choice over well-established regional options.",
    "D": "A fracture of the distal third of the tibia with an open wound and exposed bone is a classic indication for flap coverage due to the paucity of local soft tissue and poor vascularity. Free flaps are indeed very commonly used here (e.g., anterolateral thigh, latissimus dorsi). However, local muscle flaps (e.g., soleus, gastrocnemius) or perforator flaps are often attempted first for smaller defects or if local tissue is viable. The sternal defect, with its mediastinal involvement and high infection risk, often presents a more immediate and critical need for the robust vascularity of a free flap.",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: B. Open wound with exposed sternum following coronary artery bypass surgery.\\n\\n**The Pivot:** The critical factor is the combination of exposed vital structures (sternum, mediastinum), often with associated infection (osteomyelitis, mediastinitis), and severely compromised local tissue vascularity, necessitating robust, vascularized tissue transfer from a distant site.",
    "H_highlight_excellence": "**Surgical Mechanism:** Free flap reconstruction involves the transfer of tissue (skin, fat, muscle, bone) with its own dedicated blood supply (artery and vein) from a distant donor site to the recipient site. The vessels are then anastomosed to recipient vessels, ensuring immediate revascularization. This mechanism is crucial for providing healthy, well-perfused tissue to large, complex defects, especially those involving exposed critical structures, infection, or areas with poor local tissue quality due to trauma, radiation, or previous surgery. The bulk and vascularity of a free flap allow for obliteration of dead space, delivery of antibiotics, and promotion of healing in otherwise compromised fields.\\n\\n**Clinical Execution:** An exposed sternum following coronary artery bypass grafting (CABG) often presents with sternal osteomyelitis and mediastinitis, a life-threatening condition. The sternum and surrounding tissues are frequently devitalized due to the initial sternotomy, subsequent infection, and potential debridement. Local muscle flaps (e.g., pectoralis major) may be insufficient in size, reach, or vascularity, particularly if the infection is extensive or the local tissue is compromised. A free flap, such as a rectus abdominis or latissimus dorsi free flap, provides a large volume of healthy, vascularized tissue capable of filling the defect, eradicating infection, and promoting robust healing, thereby dictating its selection as the most likely reconstructive option in this high-stakes scenario.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** Complex wound reconstruction follows the reconstructive ladder, progressing from simplest to most complex methods: primary closure, secondary intention, skin grafting, local flaps, regional flaps, and finally, free tissue transfer. Free flaps are reserved for large, complex defects where local or regional tissues are insufficient, compromised, or unavailable, especially when covering vital structures, managing infection, or requiring specific tissue types (e.g., vascularized bone). The decision hinges on defect size, location, tissue requirements, recipient site vascularity, and the presence of infection or radiation.\\n\\n| Wound Characteristic | Reconstructive Ladder Step | Key Indication for Free Flap | Core Guideline/Surgical Society Consensus |\\n| --- | --- | --- | --- |\\n| Small, clean, non-critical area | Primary closure / Skin graft | N/A | ASPS (American Society of Plastic Surgeons) |\\n| Moderate defect, healthy local tissue | Local / Regional Flap | Failure of local/regional options, large defect, poor local vascularity | ACS (American College of Surgeons) |\\n| Large defect, exposed vital structure, infection, devitalized tissue, poor local vascularity | Free Flap | Obliteration of dead space, infection control, robust vascularized tissue for critical coverage | Wound Healing Society (WHS) |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *If a wound involves exposed critical structures (e.g., bone, prosthesis, mediastinum) in a devascularized or infected field where local tissue is compromised, always prioritize a robust, vascularized free flap for definitive reconstruction.*"
  },
  "supplementary_callouts": {
    "guideline": "American Society of Plastic Surgeons (ASPS) guidelines on microvascular reconstruction; Society of Thoracic Surgeons (STS) guidelines for sternal wound management.",
    "takeaway": "Free flap reconstruction is most indicated for complex wounds with exposed vital structures, infection, and compromised local tissue, particularly in high-risk areas like the sternum post-CABG.",
    "visualization": "The surgeon must 'see' a large, deep sternal defect with exposed, often necrotic, bone and potentially communicating with the mediastinum, surrounded by fibrotic, poorly vascularized tissue, indicating that local tissue rearrangement or pedicled flaps would be inadequate to provide durable, infection-resistant coverage."
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1672,
  "specialty": "Plastic Surgery",
  "topic": "Breast Surgery",
  "question": "The approximate 10-year rupture rate of modern silicone breast implants is:",
  "options": {
    "A": "A) 1-5%",
    "B": "B) 10-15%",
    "C": "C) 20-30%",
    "D": "D) 40-50%"
  },
  "answer": "B",
  "explanation": {
    "correct": "**Surgical Mechanism:** Silicone implant shells are semi-permeable membranes, subject to wear, fatigue, and chemical degradation over time. Rupture can be intracapsular (contained within the fibrous capsule) or extracapsular. The cohesive gel in modern implants minimizes free silicone migration in intracapsular ruptures.\\n\\n**Clinical Execution:** For an operating surgeon, understanding rupture rates informs patient counseling regarding implant longevity, the need for surveillance (e.g., MRI screening), and the potential for reoperation. This knowledge guides the discussion on the expected lifespan of the device and the likelihood of future complications requiring intervention.",
    "A": "This rate is too low for a 10-year period. While some studies might report lower rates for very specific implant types or shorter follow-up, a 1-5% rate is not representative of the cumulative 10-year risk across modern implants. This might be closer to a 1-3 year rate for some implants.",
    "B": "",
    "C": "This rate is too high for modern, cohesive gel silicone implants at 10 years. This range was more characteristic of older generation implants (e.g., 1st or 2nd generation) or for very long-term follow-up (e.g., 15-20 years) of even modern implants.",
    "D": "This rate is excessively high and not reflective of any generation of silicone breast implants at 10 years. Such a high rate would render the implants clinically unacceptable due to frequent reoperations.",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: B. The 10-year rupture rate for modern silicone breast implants is approximately 10-15%.\\n\\n**The Pivot:** The critical distinction lies in understanding the long-term integrity of current-generation silicone implants versus older models, which had significantly higher rupture rates.",
    "H_highlight_excellence": "**Surgical Mechanism:** Silicone implant shells are semi-permeable membranes, subject to wear, fatigue, and chemical degradation over time. Rupture can be intracapsular (contained within the fibrous capsule) or extracapsular. The cohesive gel in modern implants minimizes free silicone migration in intracapsular ruptures.\\n\\n**Clinical Execution:** For an operating surgeon, understanding rupture rates informs patient counseling regarding implant longevity, the need for surveillance (e.g., MRI screening), and the potential for reoperation. This knowledge guides the discussion on the expected lifespan of the device and the likelihood of future complications requiring intervention.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** Silicone breast implant rupture is a significant long-term complication requiring careful patient education and surveillance. Modern implants, while improved, are not lifetime devices, and patients should be aware of the cumulative risk of rupture over time.\\n\\n| Implant Generation | Typical 10-Year Rupture Rate | Detection Method | Management |\\n| --- | --- | --- | --- |\\n| 1st/2nd Gen (Liquid Silicone) | 25-50% (or higher) | Palpation, Mammography, Ultrasound | Explantation due to high migration risk |\\n| 3rd/4th/5th Gen (Cohesive Gel) | 10-15% | MRI (gold standard), Ultrasound, Mammography | Explantation/Exchange (often with capsulectomy) |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *If a patient with silicone implants presents with a new breast contour change, pain, or palpable lump, always consider implant rupture and prioritize MRI for definitive diagnosis, especially for intracapsular rupture.*"
  },
  "supplementary_callouts": {
    "guideline": "American Society of Plastic Surgeons (ASPS) / American Society for Aesthetic Plastic Surgery (ASAPS) consensus statements on breast implant surveillance. FDA recommendations for MRI screening.",
    "takeaway": "Modern silicone breast implants have an approximate 10-15% rupture rate by 10 years, necessitating patient counseling and surveillance.",
    "visualization": "On MRI, a 'linguine sign' (collapsed implant shell within the fibrous capsule) is pathognomonic for intracapsular rupture. 'Keyhole' or 'teardrop' signs on ultrasound can also indicate rupture."
  },
  "discrepancy_flag": ""
}
,
{
  "id": 51177,
  "specialty": "Plastic Surgery",
  "topic": "Peripheral Nerve System",
  "question": "Which of the following statements regarding peripheral nerve injury is false?",
  "options": {
    "A": "A) Nerve repair is progressively less effective if delayed beyond 2 months after surgery.",
    "B": "B) Nerve repair is best performed under 4 to 15 times magnification.",
    "C": "C) Nerve repair is best performed in a fashion that minimizes tension across the repair.",
    "D": "D) Regeneration may be followed clinically by observing distal progression of the Tinel sign."
  },
  "answer": "E",
  "explanation": {
    "correct": "**Surgical Mechanism:** Peripheral nerve regeneration is a complex biological process involving axonal sprouting from the proximal stump, Schwann cell proliferation, and guidance through the distal stump's endoneurial tubes. Direct, tension-free coaptation of the epineurium or fascicles provides the most optimal environment for regeneration by minimizing scar formation and maximizing axonal alignment. Conduits, typically bioabsorbable or autologous vein, create a physical bridge across a nerve gap, providing a scaffold and containing neurotrophic factors, but they do not inherently 'assist' regeneration in the same direct biological sense as a healthy nerve environment or autograft, which provides viable Schwann cells and endoneurial architecture.\\n\\n**Clinical Execution:** For an operating surgeon, the primary goal in peripheral nerve repair is tension-free direct coaptation. If a gap exists, the decision matrix involves assessing gap length. For short gaps (<3cm), conduits may be considered, but for longer gaps, autologous nerve grafting (e.g., sural nerve) remains the gold standard due to its superior ability to provide viable Schwann cells and endoneurial architecture for axonal guidance. Conduits are a compromise, not a universal 'assistance' to regeneration, and their efficacy is highly dependent on gap length and nerve type.",
    "A": "This statement is true. Prolonged denervation leads to irreversible atrophy of target end-organs (muscle, sensory receptors) and degeneration of the distal nerve stump's Schwann cells and endoneurial tubes, significantly reducing the potential for functional recovery. Early repair (within 3-6 weeks) is ideal, with efficacy sharply declining after 3-6 months. If the stem implied that delayed repair was equally effective, this option would be false.",
    "B": "This statement is true. Microsurgical techniques, typically employing operating microscopes or high-power loupes (magnification often 6x to 40x), are essential for precise identification and coaptation of nerve fascicles and epineurium, minimizing trauma and ensuring accurate alignment. Without adequate magnification, the delicate structures cannot be adequately visualized, leading to suboptimal repair. If the stem suggested macroscopic repair was sufficient, this option would be false.",
    "C": "This statement is true and a fundamental principle of nerve repair. Tension at the repair site leads to ischemia, fibrosis, and gapping, all of which impede axonal regeneration and functional recovery. Techniques like mobilization, joint positioning, or nerve grafting are used to achieve tension-free repair. If the stem advocated for high-tension repair, this option would be false.",
    "D": "This statement is true. The Tinel sign (paresthesias or tingling sensation elicited by percussion over a regenerating nerve) indicates regenerating axons. Its distal progression over time is a classic clinical marker of successful nerve regeneration, as axons grow approximately 1mm/day. If the stem suggested the Tinel sign was irrelevant or indicated nerve degeneration, this option would be false.",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: E. The statement that conduits 'assist' nerve regeneration is false; rather, they are employed to bridge nerve gaps when direct tension-free repair is not feasible, not as a general aid to regeneration.\\n\\n**The Pivot:** The critical distinction lies in understanding the primary indication and limitations of nerve conduits versus direct repair or autografting in peripheral nerve reconstruction, particularly regarding their biological contribution to regeneration.",
    "H_highlight_excellence": "**Surgical Mechanism:** Peripheral nerve regeneration is a complex biological process involving axonal sprouting from the proximal stump, Schwann cell proliferation, and guidance through the distal stump's endoneurial tubes. Direct, tension-free coaptation of the epineurium or fascicles provides the most optimal environment for regeneration by minimizing scar formation and maximizing axonal alignment. Conduits, typically bioabsorbable or autologous vein, create a physical bridge across a nerve gap, providing a scaffold and containing neurotrophic factors, but they do not inherently 'assist' regeneration in the same direct biological sense as a healthy nerve environment or autograft, which provides viable Schwann cells and endoneurial architecture.\\n\\n**Clinical Execution:** For an operating surgeon, the primary goal in peripheral nerve repair is tension-free direct coaptation. If a gap exists, the decision matrix involves assessing gap length. For short gaps (<3cm), conduits may be considered, but for longer gaps, autologous nerve grafting (e.g., sural nerve) remains the gold standard due to its superior ability to provide viable Schwann cells and endoneurial architecture for axonal guidance. Conduits are a compromise, not a universal 'assistance' to regeneration, and their efficacy is highly dependent on gap length and nerve type.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** Peripheral nerve injury management prioritizes early, tension-free, microsurgical repair. When direct repair is not possible due to a gap, autologous nerve grafting remains the gold standard, with conduits serving as an alternative for short gaps, each with specific indications and limitations. Clinical monitoring of regeneration, such as the Tinel sign, is crucial for assessing recovery.\\n\\n| Repair Strategy | Indication/Gap Length | Key Advantage | Key Disadvantage |\\n| --- | --- | --- | --- |\\n| Direct Coaptation | No gap or minimal gap (<1cm) | Optimal regeneration environment, no donor site morbidity | Requires tension-free approximation |\\n| Autologous Nerve Graft | Longer gaps (>3cm) | Provides viable Schwann cells and endoneurial tubes, gold standard for long gaps | Donor site morbidity, two suture lines |\\n| Nerve Conduit | Short gaps (1-3cm) | Avoids donor site morbidity, single suture line | Less effective for long gaps, no viable Schwann cells |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *If a peripheral nerve injury presents with a gap, *always* consider autologous nerve graft as the gold standard for optimal functional recovery, reserving conduits for specific, short-gap scenarios where donor site morbidity is a primary concern.*"
  },
  "supplementary_callouts": {
    "guideline": "American Society for Surgery of the Hand (ASSH) Clinical Practice Guidelines for Peripheral Nerve Repair",
    "takeaway": "Nerve conduits are gap-bridging devices, not universal enhancers of regeneration, and their utility is limited by gap length and inferior to autograft for longer defects.",
    "visualization": "When dissecting the injured nerve, the surgeon must visually assess the extent of nerve loss to determine if direct coaptation is possible without tension, or if a gap necessitates a conduit or graft. The presence of a clean, viable nerve stump for coaptation is paramount, and the conduit's role is to provide a physical tunnel, not to replace the biological architecture of a graft."
  },
  "discrepancy_flag": ""
}
,
{
  "id": 90277,
  "specialty": "Plastic Surgery",
  "topic": "Lymphatic System",
  "question": "Most patients with lymphedema can be managed by:",
  "options": {
    "A": "A) Pedicle transfer of lymphatic bearing tissue into the affected area.",
    "B": "B) Elevation, elastic support garments, and massage therapy or mechanical pneumatic compression.",
    "C": "C) Lymphatic bypass using an autogenous vein graft.",
    "D": "D) Excision of hypertrophic scarred fibrotic skin and subcutaneous tissue down to muscle fascia and coverage with split-thickness skin grafts."
  },
  "answer": "B",
  "explanation": {
    "correct": "**Surgical Mechanism:** Lymphedema results from impaired lymphatic drainage, leading to the accumulation of protein-rich interstitial fluid. This fluid promotes inflammation, adipogenesis, and fibrosis. Complete Decongestive Therapy (CDT), encompassing manual lymphatic drainage (MLD), compression therapy (elastic garments, bandages), skin care, and exercise, directly addresses these pathophysiological mechanisms. MLD manually mobilizes lymphatic fluid towards patent lymphatic territories. Compression garments increase interstitial tissue pressure, reducing ultrafiltration from capillaries, enhancing lymphatic flow, and preventing fluid re-accumulation. Elevation utilizes gravity to aid fluid return, while exercise stimulates the muscle pump, further promoting lymphatic transport.\\n\\n**Clinical Execution:** For an operating surgeon, understanding that the vast majority of lymphedema cases respond to and are initially managed by CDT is paramount. Surgical interventions are reserved for specific, often advanced, or refractory cases. The initial clinical pathway for a lymphedema patient always begins with a trial of conservative management to reduce limb volume, improve skin integrity, and enhance functional status before considering the risks and benefits of invasive procedures. This approach minimizes patient morbidity and optimizes outcomes by establishing a baseline and identifying non-responders.",
    "A": "Pedicle transfer of lymphatic bearing tissue (e.g., vascularized lymph node transfer, VLNT) is a microsurgical procedure indicated for specific, often earlier-stage, lymphedema cases where lymphatic reconstruction is feasible. It is not the initial management for 'most' patients and carries surgical risks. This option would be correct if the question specified 'surgical management for localized, early-stage lymphedema in a patient failing conservative therapy'.",
    "B": "",
    "C": "Lymphatic bypass using an autogenous vein graft (lymphovenous anastomosis, LVA) is another microsurgical technique aiming to connect lymphatic vessels directly to veins, bypassing obstructed segments. Like VLNT, it is a specialized surgical intervention for select patients, typically those with patent distal lymphatics, and not the primary management for the general lymphedema population. This option would be correct if the question asked for 'a surgical option for patients with patent distal lymphatic vessels and failed conservative management'.",
    "D": "Excision of hypertrophic scarred fibrotic skin and subcutaneous tissue (debulking surgery, Charles procedure) is a radical excisional procedure reserved for severe, end-stage lymphedema (lymphostatic elephantiasis) with significant functional impairment, recurrent infections, and failure of all other conservative and reconstructive options. It is associated with significant morbidity and is rarely the first-line approach. This option would be correct if the question specified 'management for severe, end-stage lymphostatic elephantiasis refractory to all other treatments'.",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: B. Elevation, elastic support garments, and massage therapy or mechanical pneumatic compression.\\n\\n**The Pivot:** The clinical crux lies in identifying the initial, non-invasive, and most broadly applicable management strategy for lymphedema, which is conservative therapy.",
    "H_highlight_excellence": "**Surgical Mechanism:** Lymphedema results from impaired lymphatic drainage, leading to the accumulation of protein-rich interstitial fluid. This fluid promotes inflammation, adipogenesis, and fibrosis. Complete Decongestive Therapy (CDT), encompassing manual lymphatic drainage (MLD), compression therapy (elastic garments, bandages), skin care, and exercise, directly addresses these pathophysiological mechanisms. MLD manually mobilizes lymphatic fluid towards patent lymphatic territories. Compression garments increase interstitial tissue pressure, reducing ultrafiltration from capillaries, enhancing lymphatic flow, and preventing fluid re-accumulation. Elevation utilizes gravity to aid fluid return, while exercise stimulates the muscle pump, further promoting lymphatic transport.\\n\\n**Clinical Execution:** For an operating surgeon, understanding that the vast majority of lymphedema cases respond to and are initially managed by CDT is paramount. Surgical interventions are reserved for specific, often advanced, or refractory cases. The initial clinical pathway for a lymphedema patient always begins with a trial of conservative management to reduce limb volume, improve skin integrity, and enhance functional status before considering the risks and benefits of invasive procedures. This approach minimizes patient morbidity and optimizes outcomes by establishing a baseline and identifying non-responders.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** Lymphedema management follows a stepwise approach, prioritizing conservative measures (Complete Decongestive Therapy) as the foundation. Surgical interventions are considered for patients who fail conservative therapy, have specific anatomical patterns amenable to reconstruction, or present with advanced, debilitating disease requiring debulking. Accurate staging and patient selection are critical for optimal outcomes.\\n\\n| ISL Stage | Clinical Presentation | Primary Management | Surgical Consideration |\\n| --- | --- | --- | --- |\\n| Stage 0 (Latency) | No visible edema, subjective symptoms | Risk reduction, education | None |\\n| Stage I (Reversible) | Pitting edema, reduces with elevation | CDT (MLD, compression, skin care, exercise) | Rarely, if early VLNT/LVA considered |\\n| Stage II (Irreversible) | Non-pitting edema, fibrosis, skin changes | Lifelong CDT, meticulous skin care | VLNT, LVA, liposuction (for fatty component) if CDT fails |\\n| Stage III (Lymphostatic Elephantiasis) | Severe non-pitting edema, extensive skin changes, papillomatosis | Intensive CDT, infection control | Debulking (Charles procedure) for functional impairment |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *If the patient presents with lymphedema, then Complete Decongestive Therapy (CDT) is the initial, foundational management for nearly all stages and etiologies, with surgery reserved for specific indications after conservative failure.*"
  },
  "supplementary_callouts": {
    "guideline": "International Society of Lymphology (ISL) Consensus Document on the Management of Lymphedema",
    "takeaway": "Conservative management, primarily Complete Decongestive Therapy (CDT), is the cornerstone and initial treatment for the vast majority of lymphedema patients.",
    "visualization": "The surgeon must 'see' the presence of pitting edema, skin texture changes (e.g., hyperkeratosis, papillomatosis), and limb circumference measurements to stage the lymphedema and assess the effectiveness of conservative therapy, guiding the decision for potential surgical intervention."
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1137,
  "specialty": "Plastic Surgery",
  "topic": "Peripheral Nerve Injury",
  "question": "Which of the following statements regarding peripheral nerve injury is false?",
  "options": {
    "A": "A) Nerve repair is progressively less effective if delayed beyond 2 months after surgery.",
    "B": "B) Nerve repair is best performed under 4 to 15 times magnification.",
    "C": "C) Nerve repair is best performed in a fashion that minimizes tension across the repair.",
    "D": "D) Regeneration may be followed clinically by observing distal progression of the Tinel sign."
  },
  "answer": "E",
  "explanation": {
    "correct": "**Surgical Mechanism:** Peripheral nerve regeneration is a complex process involving axonal sprouting, Schwann cell migration, and re-myelination. Optimal repair aims to provide a tension-free, aligned environment for regenerating axons to cross the injury site. Direct primary repair is the gold standard for sharp transections without significant tissue loss. When a gap exists, the choice between conduit and autograft depends on the gap length and nerve type. Conduits provide a physical guide for axonal growth but lack the cellular components (Schwann cells) and growth factors inherent in autologous nerve grafts, which are crucial for longer gaps and robust regeneration.\\n\\n**Clinical Execution:** For an operating surgeon, the decision-making algorithm for nerve repair prioritizes direct, tension-free coaptation. If a gap prevents this, the next consideration is the gap length. Short gaps (typically <3 cm) may be bridged with synthetic or biological conduits, which can prevent neuroma formation and guide regenerating axons. However, for longer gaps or mixed motor/sensory nerves, autologous nerve grafting (e.g., sural nerve) remains superior due to its biological scaffold and cellular support for regeneration. Conduits do not 'assist' regeneration in the same biological sense as a graft; rather, they provide a passive physical bridge, and their efficacy diminishes significantly with increasing gap length.",
    "A": "This statement is true. Delay beyond 2-3 months leads to irreversible changes in the distal nerve stump (denervation atrophy of Schwann cells, muscle atrophy, end-organ degeneration), significantly reducing the potential for functional recovery. For this to be false, the statement would need to suggest that timing is irrelevant or that efficacy improves with delay.",
    "B": "This statement is true. Microsurgical techniques using magnification (typically 3.5x to 25x, often 10-15x for nerve repair) are essential for precise fascicular alignment and epineurial repair, minimizing trauma and improving outcomes. For this to be false, the statement would need to suggest macroscopic repair or lower magnification is adequate.",
    "C": "This statement is true and a fundamental principle. Tension at the repair site leads to ischemia, fibrosis, and failure of axonal regeneration. Mobilization, joint positioning, or nerve grafting are employed to achieve tension-free repair. For this to be false, the statement would need to advocate for high-tension repairs.",
    "D": "This statement is true. The Tinel sign (tingling sensation upon percussion over a regenerating nerve) indicates axonal growth. Its distal progression is a classic clinical marker of nerve regeneration. For this to be false, the statement would need to suggest the Tinel sign is irrelevant or indicates nerve degeneration.",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: E. The statement that conduits inherently assist nerve regeneration is false.\\n\\n**The Pivot:** The critical distinction lies in understanding the specific indications and biological limitations of nerve conduits versus direct repair or autologous nerve grafting for peripheral nerve injuries.",
    "H_highlight_excellence": "**Surgical Mechanism:** Peripheral nerve regeneration is a complex process involving axonal sprouting, Schwann cell migration, and re-myelination. Optimal repair aims to provide a tension-free, aligned environment for regenerating axons to cross the injury site. Direct primary repair is the gold standard for sharp transections without significant tissue loss. When a gap exists, the choice between conduit and autograft depends on the gap length and nerve type. Conduits provide a physical guide for axonal growth but lack the cellular components (Schwann cells) and growth factors inherent in autologous nerve grafts, which are crucial for longer gaps and robust regeneration.\\n\\n**Clinical Execution:** For an operating surgeon, the decision-making algorithm for nerve repair prioritizes direct, tension-free coaptation. If a gap prevents this, the next consideration is the gap length. Short gaps (typically <3 cm) may be bridged with synthetic or biological conduits, which can prevent neuroma formation and guide regenerating axons. However, for longer gaps or mixed motor/sensory nerves, autologous nerve grafting (e.g., sural nerve) remains superior due to its biological scaffold and cellular support for regeneration. Conduits do not 'assist' regeneration in the same biological sense as a graft; rather, they provide a passive physical bridge, and their efficacy diminishes significantly with increasing gap length.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** Peripheral nerve injury management hinges on timely, tension-free repair, often requiring microsurgical techniques. The choice of repair method (direct, conduit, autograft) is dictated by the gap length and the specific nerve involved, with autografts generally preferred for longer defects due to their biological superiority.\\n\\n| Repair Method | Gap Length | Key Advantage | Key Disadvantage |\\n| --- | --- | --- | --- |\\n| Direct Repair | <1 cm | Gold standard, no donor site morbidity | Requires tension-free coaptation |\\n| Nerve Conduit | 1-3 cm | Avoids donor site morbidity, guides axons | Lacks biological support, limited for longer gaps |\\n| Autologous Nerve Graft | >3 cm | Provides biological scaffold (Schwann cells), effective for long gaps | Donor site morbidity, two coaptation sites |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *If a peripheral nerve injury presents with a gap, then autologous nerve grafting is generally superior to conduits for defects exceeding 3 cm, especially in mixed motor/sensory nerves, due to its biological support for regeneration.*"
  },
  "supplementary_callouts": {
    "guideline": "American Society for Surgery of the Hand (ASSH) Clinical Practice Guidelines for Peripheral Nerve Repair",
    "takeaway": "Nerve conduits provide a physical bridge for axonal growth but lack the biological support of autologous nerve grafts, making them less effective for longer nerve defects.",
    "visualization": "When dissecting a nerve injury, the surgeon must visually assess the extent of nerve tissue loss and the tension required for direct coaptation; if the nerve ends cannot be brought together without tension, a gap exists, necessitating either a conduit or a graft."
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1635,
  "specialty": "Plastic Surgery",
  "topic": "16With regard to post-burn reconstruction of the female breast, which of the",
  "question": "16With regard to post-burn reconstruction of the female breast, which of the following statements is correct?",
  "options": {
    "A": "This is not a treatable condition. B.A foot drop splint.",
    "B": "The flaps can be re-advanced if contracture recurs.",
    "C": "Tibialis posterior to tibialis anterior transfer. D.Ankle fusion in the position of function.",
    "D": "It is not an ideal technique for contractures longer than approximately 10cm."
  },
  "answer": "A",
  "explanation": {
    "correct": "This is not a treatable condition. B.A foot drop splint.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "16With regard to post-burn reconstruction of the female breast, which of the",
    "H_highlight_excellence": "This is not a treatable condition. B.A foot drop splint.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "BSSH / reconstructive principles",
    "P_plan_for_improvement": "This is not a treatable condition"
  },
  "supplementary_callouts": {
    "guideline": "BSSH / reconstructive principles",
    "takeaway": "This is not a treatable condition",
    "visualization": ""
  },
  "discrepancy_flag": ""
}
,
{
  "id": 1623,
  "specialty": "Plastic Surgery",
  "topic": "Burns",
  "question": "When considering extensive burn scarring restricting movement of all joints of both upper limbs, which should be the order of priority for surgical release?",
  "options": {
    "A": "A) The axilla, to restore shoulder abduction and allow for basic hygiene and positioning.",
    "B": "B) The dominant hand, to restore fine motor skills and grasp.",
    "C": "C) The elbow joints, to allow for feeding and reaching.",
    "D": "D) The most severely contracted joint, irrespective of its location."
  },
  "answer": "A",
  "explanation": {
    "correct": "**Surgical Mechanism:** Extensive burn contractures of the upper limbs often involve multiple joints, severely limiting range of motion. The axilla is a pivotal anatomical region, housing the brachial plexus, axillary artery, and vein, and its contracture directly impedes shoulder abduction and external rotation. Loss of shoulder abduction prevents basic self-care activities such as perineal hygiene, dressing, and feeding. Releasing axillary contractures often provides the most significant initial functional gain, unlocking the entire upper limb for subsequent rehabilitation and staged releases of more distal joints.\\n\\n**Clinical Execution:** For an operating surgeon, prioritizing axillary release in extensive bilateral upper limb contractures is a strategic decision. It allows for improved patient positioning, facilitates wound care, and enables early initiation of physical therapy for the entire limb. While hand and elbow function are crucial, restoring gross shoulder movement often provides the foundational mobility required for subsequent, more refined functional restoration. This approach optimizes the patient's ability to participate in their own care and rehabilitation.",
    "A": "",
    "B": "While hand function is paramount for fine motor skills and independence, prioritizing it over axillary release in extensive bilateral contractures can be suboptimal. Without adequate shoulder abduction (axilla release), the hand may not be able to reach critical areas for self-care, rendering its restored fine motor function less impactful initially. The stem would need to specify a scenario where only isolated hand contractures are present, or where gross shoulder function is already preserved, for this to be the primary priority.",
    "C": "Elbow release is critical for feeding and reaching, but similar to hand function, its utility is limited if the shoulder cannot abduct. A patient with fixed adduction at the shoulder cannot effectively position the elbow for feeding or reaching, even if the elbow itself has full range of motion. This option would be prioritized if axillary function was preserved or if the primary functional deficit was isolated to elbow flexion/extension, preventing specific ADLs like bringing food to the mouth.",
    "D": "Prioritizing solely based on the degree of contracture can be misleading. A severely contracted wrist might be less functionally debilitating than a moderately contracted axilla in terms of overall ADLs. Surgical prioritization must consider functional impact, not just severity of anatomical restriction. The stem would need to imply that all joints have equal functional importance, which is rarely the case in extensive burn contractures.",
    "E": ""
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: A. The axilla is prioritized for surgical release in extensive upper limb burn contractures.\\n\\n**The Pivot:** The critical clinical crux is identifying the joint release that provides the greatest functional impact for activities of daily living (ADLs) and overall patient care in the context of extensive, bilateral upper limb contractures. The original options provided were irrelevant; this debrief uses reconstructed, clinically relevant options.",
    "H_highlight_excellence": "**Surgical Mechanism:** Extensive burn contractures of the upper limbs often involve multiple joints, severely limiting range of motion. The axilla is a pivotal anatomical region, housing the brachial plexus, axillary artery, and vein, and its contracture directly impedes shoulder abduction and external rotation. Loss of shoulder abduction prevents basic self-care activities such as perineal hygiene, dressing, and feeding. Releasing axillary contractures often provides the most significant initial functional gain, unlocking the entire upper limb for subsequent rehabilitation and staged releases of more distal joints.\\n\\n**Clinical Execution:** For an operating surgeon, prioritizing axillary release in extensive bilateral upper limb contractures is a strategic decision. It allows for improved patient positioning, facilitates wound care, and enables early initiation of physical therapy for the entire limb. While hand and elbow function are crucial, restoring gross shoulder movement often provides the foundational mobility required for subsequent, more refined functional restoration. This approach optimizes the patient's ability to participate in their own care and rehabilitation.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** Surgical release of burn scar contractures is a staged process aimed at restoring function and improving quality of life. Prioritization is crucial, especially in extensive multi-joint involvement, focusing on restoring key functional arcs of motion that enable activities of daily living and facilitate subsequent rehabilitation.\\n\\n| Joint/Region | Primary Functional Impact | Prioritization Rationale (Extensive U/L Burns) | Key Surgical Principle |\\n| --- | --- | --- | --- |\\n| Axilla | Shoulder abduction, external rotation, hygiene, positioning | High priority: Unlocks global upper limb function, enables self-care | Full release of anterior, posterior, and medial bands; skin grafting |\\n| Elbow | Flexion/extension, reaching, feeding | Secondary priority: Critical for ADLs once shoulder mobility is achieved | Release of antecubital fossa or posterior elbow contractures |\\n| Hand/Wrist | Grasp, fine motor, manipulation | Tertiary priority: Essential for independence, but often follows proximal releases | Release of palmar/dorsal contractures, web space deepening |\\n| Neck | Airway, head positioning, vision | High priority (if involved): Critical for airway, vision, and feeding | Release of anterior neck bands, often requiring large grafts |\\n",
    "P_plan_for_improvement": "**The Board Pearl:** *If extensive upper limb burn contractures are present, *always* prioritize axillary release first to restore shoulder abduction, as it is the gateway to global upper limb function and basic self-care.*"
  },
  "supplementary_callouts": {
    "guideline": "American Burn Association (ABA) Practice Guidelines for Burn Care; American Society of Plastic Surgeons (ASPS) guidelines on reconstructive burn surgery.",
    "takeaway": "In extensive upper limb burn contractures, axillary release is paramount for restoring foundational shoulder mobility, enabling critical ADLs, and facilitating comprehensive rehabilitation.",
    "visualization": "Imagine a patient unable to lift their arms away from their body, preventing them from reaching their face, washing their armpits, or even sitting comfortably. The surgeon must 'see' the dense, inelastic scar bands tethering the arm to the torso, preventing glenohumeral abduction, and mentally map the incision lines and graft placement needed to restore a full 90-degree arc of abduction."
  },
  "discrepancy_flag": ""
}
]);
