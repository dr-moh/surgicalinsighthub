/**
 * SIH Notes Data — js/notes_data.js
 * Single source of truth for all notes in the library.
 *
 * Schema per note object:
 *   id          {string}   unique slug
 *   title       {string}   display title
 *   kicker      {string}   small label above title
 *   specialty   {string[]} filter keys
 *   description {string}   one-paragraph summary
 *   tags        {string[]} chip labels
 *   pages       {string}   footer left label
 *   type        {string}   'web' | 'telegram'
 *   url         {string}   href for the CTA button
 *   isNew       {boolean}  show "New" badge on kicker
 *   tab         {string}   'highjield' | 'operative'
 *
 * Operative-tab extras:
 *   opKicker    {string}   specialty line
 *   opBadge     {string}   badge label
 *   opMeta      {string}   right-side footer text
 */

window.NOTES_DATA = {

  /* ── HIGH-YIELD NOTES ── */
  highjield: [
    {
      id: 'hy-crohns-disease',
      title: 'Crohn\'s Disease Staging & Interventions',
      kicker: 'IBD Master Series',
      specialty: ['colorectal', 'basics'],
      description: 'Evidence-based clinical guidelines on Crohn\'s disease: Montreal classification, diagnostic biomarkers, medical step-up/top-down biologics, strictureplasty models, perianal Seton drainage, and the Rutgeerts recurrence score.',
      tags: ['red:IBD', 'red:Staging', 'Strictureplasty', 'Biologics', 'Rutgeerts', 'ABSITE'],
      pages: '5 Pillars',
      type: 'web',
      url: 'notes/Surgical High-Yield Notes/crohns_disease.html',
      isNew: true
    },
    {
      id: 'hy-anastomotic-complications',
      title: 'Anastomotic Complications',
      kicker: 'Colorectal High-Yield Notes',
      specialty: ['colorectal', 'emergency'],
      description: 'Comprehensive clinical guide covering risk stratification, biomechanical markers, minor/major hemostasis, intraperitoneal/extraperitoneal leaks, ICG fluorescence angiography, EVT, and fistula timelines.',
      tags: ['red:Colorectal', 'red:Complications', 'ICG Angiography', 'EVT', 'ABSITE'],
      pages: '5 Pillars',
      type: 'web',
      url: 'notes/Surgical High-Yield Notes/anastomotic_complications.html',
      isNew: true
    },
    {
      id: 'hy-ortho-trauma',
      title: 'Orthopaedic Trauma',
      kicker: 'Surgical High-Yield Notes',
      specialty: ['ortho'],
      description: '3 volumes, 29 topics. Pelvic ring fractures, compartment syndrome, open fractures, damage control orthopaedics, and spine emergencies.',
      tags: ['red:Trauma', 'red:Emergencies', 'Polytrauma', 'Paediatrics'],
      pages: '3 volumes',
      type: 'web',
      url: 'notes/Surgical High-Yield Notes/ortho_trauma.html',
      isNew: true
    },
    {
      id: 'hy-appendicitis',
      title: 'Appendicitis 2025',
      kicker: 'Surgical High-Yield Notes',
      specialty: ['emergency'],
      description: 'Master Monograph. Surgical anatomy, technical steps, landmark trials (APPAC, CODA), and high-order board review viva scenarios.',
      tags: ['red:Laparoscopy', 'red:WSES 2020', 'AIR Score', 'CODA'],
      pages: '5 Sections',
      type: 'web',
      url: 'notes/Surgical High-Yield Notes/appendicitis_2025_notebook.html',
      isNew: true
    },

    {
      id: 'hy-anesthesia',
      title: 'Anesthesia & Perioperative Care',
      kicker: 'Surgical High-Yield Notes',
      specialty: ['periop'],
      description: 'Interactive dashboard. Airway, pharmacology, RSI, Mallampati, Cormack-Lehane, and ICU basics for the surgical resident.',
      tags: ['red:RSI', 'red:Airway', 'LEMON', 'Mallampati', 'ICU'],
      pages: '5 topics + MCQ',
      type: 'web',
      url: 'notes/Surgical Operative Approach/Anesthesia & Perioperative Care.html',
      isNew: true
    },
    {
      id: 'hy-thyroid',
      title: 'Goiter & Thyroid Pathology',
      kicker: 'Surgical High-Yield Notes',
      specialty: ['hpb'],
      description: 'High-yield pathology and surgical management of thyroid disorders. Benign nodules, toxic goiters, and thyroid malignancies.',
      tags: ['red:Thyroid', 'Endocrine', 'Pathology'],
      pages: 'Monograph',
      type: 'web',
      url: 'notes/Surgical High-Yield Notes/goiter & thyroid.html',
      isNew: true
    },
    {
      id: 'hy-adrenal',
      title: 'Adrenal Disease Pathology & Surgery',
      kicker: 'Surgical High-Yield Notes',
      specialty: ['endocrine', 'basics'],
      description: 'Comprehensive study guide covering the surgical pathology of the adrenal gland. Hypercortisolism, primary aldosteronism, pheochromocytoma, adrenocortical carcinoma, and neuroblastoma.',
      tags: ['red:Adrenal', 'Endocrine', 'Conn\'s', 'Cushing\'s', 'Pheo', 'ACC', 'ABSITE'],
      pages: 'Monograph',
      type: 'web',
      url: 'notes/Surgical High-Yield Notes/adrenal_disease.html',
      isNew: true
    },
    {
      id: 'hy-hpb-tumours',
      title: 'HPB Tumours Master Library',
      kicker: 'Surgical High-Yield Notes',
      specialty: ['hpb'],
      description: 'Comprehensive hepatopancreatobiliary oncology. Hepatocellular carcinoma, cholangiocarcinoma, pancreatic adenocarcinoma, and GIST.',
      tags: ['red:HCC', 'red:Pancreatic Ca', 'Bismuth', 'Resectability'],
      pages: 'Master Library',
      type: 'telegram',
      url: 'https://t.me/sugicalInsightHub',
      isNew: true
    },
    {
      id: 'hy-residency-books',
      title: 'Residency Books & Tools',
      kicker: 'Surgical Residency Journal',
      specialty: ['basics'],
      description: 'The ultimate guide to textbooks, atlases, and digital tools for the surgical resident. Strategize your study journey from Intern year to Fellowship.',
      tags: ['red:Education', 'Textbooks', 'Digital Tools', 'Residency'],
      pages: 'Blog Article',
      type: 'web',
      url: 'blog/residency-books-and-tools.html',
      isNew: true
    },
    {
      id: 'hy-abdominal-trauma-general',
      title: 'General Principles of Abdominal Operations for Trauma',
      kicker: 'Surgical High-Yield Notes',
      specialty: ['emergency', 'basics'],
      description: 'Standardized PGY-3 trauma monograph covering exposure, systematic exploration, retroperitoneal vascular zones, medial visceral rotation, and temporary abdominal closure.',
      tags: ['red:Trauma', 'red:Emergency', 'Midline Laparotomy', 'Visceral Rotation', 'ABSITE'],
      pages: 'Monograph',
      type: 'web',
      url: 'notes/Surgical Operative Approach/General Principles of Abdominal Operations for Trauma.html',
      isNew: true
    },
    {
      id: 'hy-hernia-monograph',
      title: 'Surgical Monograph: Hernia & Hernia Repair',
      kicker: 'Surgical High-Yield Notes',
      specialty: ['basics'],
      description: 'Comprehensive guide to groin, ventral, incisional, and pelvic hernias. Rives-Stoppa retromuscular repair, transversus abdominis release (TAR), and emergency strangulation management.',
      tags: ['red:Hernia', 'General Surgery', 'Rives-Stoppa', 'TAR', 'ABSITE'],
      pages: 'Monograph',
      type: 'web',
      url: 'notes/Surgical Operative Approach/Hernia and Hernia Repair Monograph.html',
      isNew: true
    },
    {
      id: 'hy-cholangiocarcinoma',
      title: 'Cholangiocarcinoma Pathology & Surgical Management',
      kicker: 'HPB Oncology Monograph',
      specialty: ['hpb'],
      description: 'Comprehensive study guide covering anatomic classification (Bismuth-Corlette), vascular relations, resectability criteria, hepatectomy caudate segment 1 boundaries, and Roux-en-Y reconstruction.',
      tags: ['red:HPB', 'red:Oncology', 'Bismuth', 'Whipple', 'Roux-en-Y', 'ABSITE'],
      pages: '5 Pillars',
      type: 'web',
      url: 'notes/Surgical High-Yield Notes/cholangiocarcinoma.html',
      isNew: true
    },
    {
      id: 'hy-adrenal-mass',
      title: 'Adrenal Mass Pathology & Surgical Management',
      kicker: 'Endocrine Oncology Monograph',
      specialty: ['endocrine', 'basics'],
      description: 'Comprehensive study guide covering functional vs non-functional workup algorithms, retroperitoneal vascular relations (adrenal veins), Weiss score components, and transperitoneal vs posterior retroperitoneal adrenalectomy steps.',
      tags: ['red:Adrenal', 'Endocrine', 'Pheo', 'Conn\'s', 'Cushing\'s', 'ACC', 'ABSITE'],
      pages: '5 Pillars',
      type: 'web',
      url: 'notes/Surgical High-Yield Notes/adrenal_mass.html',
      isNew: true
    },
    {
      id: 'hy-hiatal-hernia',
      title: 'Hiatal Hernia Pathology & Surgical Management',
      kicker: 'Foregut Surgery Monograph',
      specialty: ['basics'],
      description: 'Comprehensive study guide covering sliding vs paraesophageal classifications, Borchardt\'s triad in gastric volvulus, Cameron ulcers, open Nissen and Collis gastroplasty step-by-step techniques.',
      tags: ['red:Hernia', 'Foregut', 'Nissen', 'Collis', 'Borchardt', 'Cameron', 'ABSITE'],
      pages: '5 Pillars',
      type: 'web',
      url: 'notes/Surgical High-Yield Notes/hiatal_hernia.html',
      isNew: true
    },
    {
      id: 'hy-vte-prophylaxis',
      title: 'Optimizing VTE Prophylaxis for Surgical Patients',
      kicker: 'Perioperative Care Monograph',
      specialty: ['periop', 'basics'],
      description: 'Advanced clinical guide covering Caprini RAM scoring, ERAS 2025/2026 protocols, heparin-induced thrombocytopenia (HIT) 4T scores, and IVC filter insertion steps.',
      tags: ['blue:VTE', 'blue:Anticoagulation', 'Caprini', 'HIT', 'IVC Filter', 'ABSITE'],
      pages: '5 Pillars',
      type: 'web',
      url: 'notes/Surgical High-Yield Notes/vte_prophylaxis.html',
      isNew: true
    },
    {
      id: 'hy-pancreatic-trauma',
      title: 'Pancreatic Trauma Pathology & Surgical Management',
      kicker: 'HPB Trauma Monograph',
      specialty: ['hpb', 'emergency'],
      description: 'Comprehensive study guide covering AAST Organ Injury Scale revisions (2025), ductal integrity decision algorithms, damage control pancreas packing, associated injury sequencing, and Whipple thresholds.',
      tags: ['blue:Trauma', 'blue:Pancreas', 'AAST OIS 2025', 'Damage Control', 'Whipple', 'ABSITE'],
      pages: '5 Pillars',
      type: 'web',
      url: 'notes/Surgical High-Yield Notes/pancreatic_trauma.html',
      isNew: true
    }
  ],

  /* ── OPERATIVE PLAYBOOKS ── */
  operative: [
    {
      id: 'op-crohns-disease',
      title: 'Surgical Monograph: Crohn\'s Disease',
      opKicker: 'Colorectal · Basics',
      description: 'Comprehensive PGY-3 surgical framework covering pre-operative optimization, surgical indications, step-by-step ileocaecal resection, strictureplasty, perianal Seton drainage, and Rutgeerts score post-op management.',
      opBadge: 'PGY-3 Framework',
      opMeta: '5 Pillars',
      url: 'notes/Surgical Operative Approach/crohns_disease_operative.html'
    },
    {
      id: 'op-arm',
      title: 'Anorectal Malformation (PSARP)',
      opKicker: 'Paediatric Surgery · Colorectal',
      description: 'Systematic approach to PSARP. Peña classification, operative steps for high vs low malformations, and the critical view of the rectum-urethra interface.',
      opBadge: 'Paediatric Core',
      opMeta: 'PSARP Steps',
      url: 'notes/Surgical Operative Approach/ARM Monograph.html'
    },
    {
      id: 'op-abdominal-trauma',
      title: 'Personalized Surgical Monograph Series  SPLENIC & RENAL TRAUMA  Advanced Monograph',
      opKicker: 'Trauma · Emergency',
      description: 'Management of the most commonly injured solid organs. AAST grading, non-operative pathways, and the critical Gerota\'s fascia control sequence.',
      opBadge: 'Gold Standard',
      opMeta: 'Pillar 1-5 Monograph',
      url: 'notes/Surgical Operative Approach/Personalized Surgical Monograph Series  SPLENIC & RENAL TRAUMA  Advanced Monograph.html'
    },
    {
      id: 'op-damage-control',
      title: 'Damage Control Laparotomy',
      opKicker: 'Emergency · Trauma',
      description: 'Rapid control of hemorrhage and contamination. Systematic 4-quadrant packing and the physiological "Game Plan" for the triad of death.',
      opBadge: 'Gold Standard',
      opMeta: 'Critical Framework',
      url: 'notes/Surgical Operative Approach/Damage Control Laparotomy.html'
    },
    {
      id: 'op-hemicolectomy',
      title: 'Right & Left Hemicolectomy',
      opKicker: 'Colorectal · Oncology',
      description: 'Standardized oncological resection. Vascular control, safe ureteric identification, and the "Pillar" system for safe anastomosis.',
      opBadge: 'Essential',
      opMeta: 'Pillar 1-5 Monograph',
      url: 'notes/Surgical Operative Approach/Hemicolectomy.html'
    },
    {
      id: 'op-stoma',
      title: 'Ileostomy & Colostomy Reversal',
      opKicker: 'Colorectal · General',
      description: 'Transitioning from temporary stoma to restoration of continuity. Mobilization techniques and the "Game Plan" for the difficult stoma site.',
      opBadge: 'Essential',
      opMeta: 'Technical Playbook',
      url: 'notes/Surgical Operative Approach/Stoma Reversal.html'
    },
    {
      id: 'op-hernia',
      title: 'Open Inguinal Hernia Repair',
      opKicker: 'General Surgery · Groin',
      description: 'Mastering the Lichtenstein tension-free repair and Shouldice tissue repair. Systematic identification of the \'Big Three\' nerves.',
      opBadge: 'Essential',
      opMeta: 'Pillar 1-5 Monograph',
      url: 'notes/Surgical Operative Approach/Open Inguinal Hernia Repair.html'
    },
    {
      id: 'op-thyroid',
      title: 'Thyroidectomy',
      opKicker: 'Head & Neck · Endocrine',
      description: 'Total, Hemi & Completion thyroidectomy. RLN identification, parathyroid preservation, Berry\'s Ligament, and managing the post-op hematoma emergency.',
      opBadge: 'Essential',
      opMeta: 'ATA Guidelines · IONM',
      url: 'notes/Surgical Operative Approach/Thyroidectomy.html'
    },
    {
      id: 'op-whipple',
      title: 'Whipple Procedure',
      opKicker: 'HPB Surgery · Oncology',
      description: 'Mastering the pancreaticoduodenectomy. Systemic approach to resection phases, reconstruction (PJ, HJ, GJ), and the critical view for vascular safety.',
      opBadge: 'High Complexity',
      opMeta: 'Pillar 1-5 Monograph',
      url: 'notes/Surgical Operative Approach/Pancreaticoduodenectomy (Whipple\'s Procedure) Monograph.html'
    },
    {
      id: 'op-chole',
      title: 'Laparoscopic Cholecystectomy',
      opKicker: 'HPB · Laparoscopy',
      description: 'The standard of care for biliary disease. Achieving the Critical View of Safety, Calot\'s dissection, and the bail-out algorithm for the difficult gallbladder.',
      opBadge: 'Essential',
      opMeta: 'Technical Pearls',
      url: 'notes/Surgical Operative Approach/Cholecystectomy Monograph.html'
    },
    {
      id: 'op-colorectal',
      title: 'Colorectal & Anal Surgery',
      opKicker: 'Colorectal · Proctology',
      description: 'Masterclass covering TME planes, CRM management, Nigro protocol, and the "Pillar" system for oncological resections.',
      opBadge: 'Essential',
      opMeta: 'Pillar 1-5 Monograph',
      url: 'notes/Surgical Operative Approach/Colorectal & Anal Surgery Monograph.html'
    },
    {
      id: 'op-bowel-obstr',
      title: 'Bowel Obstruction Approach',
      opKicker: 'Emergency Surgery · GI',
      description: 'The Bologna algorithm and operative decision-making. From trial of Gastrografin to the "The Point of No Return" in strangulation.',
      opBadge: 'Emergency Core',
      opMeta: 'Bologna 2020',
      url: 'notes/Surgical Operative Approach/Bowel Obstruction Monograph.html'
    },
    {
      id: 'op-peptic-ulcer',
      title: 'Repair of Perforated Peptic Ulcer',
      opKicker: 'Emergency · Upper GI',
      description: 'The Graham Patch and beyond. Resuscitation game plan, operative identification of the perforation, and decision making for conservative management.',
      opBadge: 'Essential',
      opMeta: 'Pillar 1-5 Monograph',
      url: 'notes/Surgical Operative Approach/Repair of Perforated Peptic Ulcer Monograph.html'
    },
    {
      id: 'op-drains',
      title: 'Surgical Drain Placement',
      opKicker: 'Basic Surgical Techniques',
      description: 'Indications, types of drains (passive vs active), placement techniques, and "The Drain Game" exit strategy for the surgical resident.',
      opBadge: 'Fundamentals',
      opMeta: 'Resident Guide',
      url: 'notes/Surgical Operative Approach/Surgical Drain Placement Monograph.html'
    },
    {
      id: 'op-desarticulation',
      title: 'Lower Limb Disarticulation',
      opKicker: 'Orthopaedics · Trauma',
      description: 'Operative approach to hip and knee disarticulations. Vascular control, flap design for optimal healing, and functional outcomes.',
      opBadge: 'Advanced',
      opMeta: 'Technical Playbook',
      url: 'notes/Surgical Operative Approach/Desarticulation.html'
    },
    {
      id: 'op-anal-procedures',
      title: 'Anal Surgical Procedures',
      opKicker: 'Colorectal · Proctology',
      description: 'Hemorrhoidectomy, fistula-in-ano management (LIFT, Seton), and anal fissure repair. The technical atlas for high-volume proctology.',
      opBadge: 'Essential',
      opMeta: 'Technical Atlas',
      url: 'notes/Surgical Operative Approach/Anal Surgical Procedures Monograph.html'
    },
    {
      id: 'op-fracture',
      title: 'Fracture Management',
      opKicker: 'Orthopaedics · Trauma',
      description: 'Principles of reduction, fixation, and healing. Understanding stability, biology, and the "AO" philosophy for operative intervention.',
      opBadge: 'Essential',
      opMeta: 'Core Skills',
      url: 'notes/Surgical Operative Approach/Fracture Management Monograph.html'
    },
    {
      id: 'op-abdominal-trauma-general',
      title: 'General Principles of Abdominal Operations for Trauma',
      opKicker: 'Emergency · Trauma',
      description: 'Standardized PGY-3 trauma monograph covering exposure, systematic exploration, retroperitoneal vascular zones, medial visceral rotation, and temporary abdominal closure.',
      opBadge: 'Gold Standard',
      opMeta: '5 Pillars',
      url: 'notes/Surgical Operative Approach/General Principles of Abdominal Operations for Trauma.html'
    },
    {
      id: 'op-hernia-monograph',
      title: 'Surgical Monograph: Hernia & Hernia Repair',
      opKicker: 'General Surgery · Abdominal Wall',
      description: 'Comprehensive guide to groin, ventral, incisional, and pelvic hernias. Rives-Stoppa, TAR component separation, and emergency management of strangulation.',
      opBadge: 'PGY-3 Framework',
      opMeta: '5 Pillars',
      url: 'notes/Surgical Operative Approach/Hernia and Hernia Repair Monograph.html'
    }
  ],

  /* ── SPECIALTY PORTALS ── */
  specialty: [
    {
      id: 'op-ortho-approaches',
      title: 'Orthopaedic Surgical Approaches',
      opKicker: 'Orthopaedics · Specialty Portal',
      description: 'Standalone interactive portal mapping board-critical orthopedic approaches: Deltopectoral, Henry\'s volar forearm, Smith-Petersen anterior hip, Watson-Jones, Posterior hip, lateral fibula, and posterolateral ankle. Full anatomy diagrams, internervous planes, and Red Zones.',
      opBadge: 'OrthoFixar Standard',
      opMeta: 'Standalone Interactive SPA',
      url: 'notes/Orthopaedic Surgical Portal/orthopedics.html'
    },
    {
      id: 'op-general-surgery-portal',
      title: 'General Surgery Approaches & Procedures',
      opKicker: 'General Surgery · Specialty Portal',
      description: 'Interactive specialty portal mapping general surgical procedures from Zollinger\'s Atlas: laparotomy, gastrectomy, intestinal resections, herniorrhaphy, appendectomy, mastectomies, and amputations. Features drawings and step-by-step techniques.',
      opBadge: 'Zollinger Standard',
      opMeta: 'Interactive Portal',
      url: 'notes/General Surgery Portal/general_surgery.html'
    },
    {
      id: 'op-hpb-portal',
      title: 'HPB Surgical Approaches & Procedures',
      opKicker: 'HPB Surgery · Specialty Portal',
      description: 'Interactive specialty portal mapping hepato-pancreato-biliary procedures: cholecystectomy, choledochostomy, hepatectomy, pancreatic pseudocyst drainage, and the Whipple pancreaticoduodenectomy. Features surgical steps and vascular safety zones.',
      opBadge: 'Zollinger Standard',
      opMeta: 'Interactive Portal',
      url: 'notes/HPB Surgery Portal/hpb.html'
    },
    {
      id: 'op-vascular-portal',
      title: 'Vascular Surgical Approaches & Procedures',
      opKicker: 'Vascular Surgery · Specialty Portal',
      description: 'Interactive specialty portal mapping vascular reconstructions: AAA repair, bypass grafts, carotid endarterectomy, varicose vein stripping, and portal hypertension shunting procedures.',
      opBadge: 'Zollinger Standard',
      opMeta: 'Interactive Portal',
      url: 'notes/Vascular Surgical Portal/vascular.html'
    },
    {
      id: 'op-gynecology-portal',
      title: 'Gynecologic Surgical Approaches & Procedures',
      opKicker: 'Gynecology · Specialty Portal',
      description: 'Interactive specialty portal mapping obstetric and gynecologic procedures: abdominal and vaginal hysterectomy, salpingectomy, oophorectomy, and colporrhaphy.',
      opBadge: 'Zollinger Standard',
      opMeta: 'Interactive Portal',
      url: 'notes/Gynecologic Surgical Portal/gynecology.html'
    }
  ]
};
