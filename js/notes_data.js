/**
 * SIH Notes Data — js/notes_data.js
 * Single source of truth for all notes in the library.
 *
 * Schema per note object:
 *   id          {string}   unique slug
 *   title       {string}   display title (HTML entities allowed)
 *   kicker      {string}   small label above title
 *   specialty   {string[]} filter keys — must match filter-bar buttons:
 *                          'emergency' | 'hpb' | 'colorectal' | 'peds' |
 *                          'periop' | 'ortho' | 'basics'
 *   description {string}   one-paragraph summary (plain text, no HTML)
 *   tags        {string[]} chip labels; prefix with 'red:' for red chips
 *   pages       {string}   footer left label (e.g. "5 Sections", "6 pages")
 *   type        {string}   'web' | 'telegram'
 *                          web      → green border, "Read Now →" button
 *                          telegram → gold border, "Download Free" button
 *   url         {string}   href for the CTA button
 *   isNew       {boolean}  show "New" badge on kicker
 *   tab         {string}   'highjield' | 'operative'
 *
 * Operative-tab extras (tab === 'operative'):
 *   opKicker    {string}   specialty line under card title
 *   opBadge     {string}   badge label (e.g. "Essential")
 *   opMeta      {string}   right-side footer text
 */

window.NOTES_DATA = {

  /* ─────────────────────────────────────────────
     TAB 1 — HIGH-YIELD NOTES
  ───────────────────────────────────────────── */
  highjield: [
    {
      id: 'ortho-trauma',
      title: 'Orthopaedic Trauma',
      kicker: 'SIH Monograph Series',
      specialty: ['ortho'],
      description: '3 volumes, 29 topics. Pelvic ring fractures, compartment syndrome, open fractures, damage control orthopaedics, spine emergencies, and paediatric orthopaedics. ABSITE & MRCS board review.',
      tags: ['red:Trauma', 'red:Emergencies', 'Polytrauma', 'Paediatrics'],
      pages: '3 volumes',
      type: 'web',
      url: 'notes/ortho_trauma.html',
      isNew: true
    },
    {
      id: 'appendicitis-2025',
      title: 'Appendicitis 2025',
      kicker: 'SIH Monograph Series',
      specialty: ['emergency'],
      description: 'Master Monograph. Surgical anatomy, technical steps (Lap/Open/Robotic), AIR/Alvarado scores, landmark trials (APPAC, CODA), and high-order board review viva scenarios.',
      tags: ['red:Laparoscopy', 'red:WSES 2020', 'AIR Score', 'CODA'],
      pages: '5 Sections',
      type: 'web',
      url: 'notes/appendicitis_2025_notebook.html',
      isNew: true
    },
    {
      id: 'anesthesia-periop-monograph',
      title: 'Anesthesia &amp; Perioperative Care',
      kicker: 'SIH Monograph Series',
      specialty: ['periop'],
      description: 'Interactive dashboard. Airway, pharmacology, RSI, anesthesia types, complications, ICU basics. LEMON score, Mallampati, Cormack-Lehane. Board review MCQs included.',
      tags: ['red:RSI', 'red:Airway', 'LEMON', 'Mallampati', 'ICU'],
      pages: '5 topics + MCQ',
      type: 'web',
      url: 'notes/Anesthesia & Perioperative Care Monograph.html',
      isNew: true
    },
    {
      id: 'colorectal-notebook',
      title: 'Colorectal &amp; Anal Surgery',
      kicker: 'SIH Monograph Series',
      specialty: ['colorectal'],
      description: '6 monographs. Benign polyps, FAP, Lynch syndrome, CRC, rectal cancer, CRLM, anal tumors, Fournier\'s. ABSITE · MRCS · FRCS board review with integrated viva Q&A and trial data.',
      tags: ['red:TME', 'red:CRC', 'Lynch', 'CRLM', 'Nigro'],
      pages: '6 monographs',
      type: 'web',
      url: 'notes/colorectal_Notebook.html',
      isNew: true
    },
    {
      id: 'abdominal-trauma',
      title: 'Abdominal Trauma',
      kicker: 'SIH Monograph Series',
      specialty: ['emergency'],
      description: 'Master Monograph. Blunt and penetrating abdominal trauma. Splenic and renal injuries, AAST grading, management of liver trauma, and the damage control laparotomy approach.',
      tags: ['red:Trauma', 'red:Splenic Injury', 'Renal Trauma', 'AAST Grading'],
      pages: 'Monograph',
      type: 'web',
      url: 'notes/Abdominal Trauma.html',
      isNew: true
    },
    {
      id: 'anal-surgical-procedures',
      title: 'Anal Surgical Procedures',
      kicker: 'SIH Monograph Series',
      specialty: ['colorectal'],
      description: 'Operative monograph. Haemorrhoidectomy (Milligan-Morgan & Ferguson), anorectal abscess drainage, and fistula-in-ano surgery (Parks classification, LIFT, Seton). Pre-op workup and risk stratification.',
      tags: ['red:Haemorrhoids', 'red:Fistula-in-Ano', 'Abscess', 'Parks Classification'],
      pages: '4 Procedures',
      type: 'web',
      url: 'notes/anal Surgical Procedures Monograph.html',
      isNew: true
    },
    {
      id: 'whipples-monograph',
      title: 'Pancreaticoduodenectomy (Whipple\'s)',
      kicker: 'SIH Monograph Series',
      specialty: ['hpb'],
      description: 'Master Monograph. Systematic task analysis of the Whipple procedure. Kocherization, SMV/Portal vein dissection, and the "Big Three" reconstructions (PJ, HJ, GJ).',
      tags: ['red:Whipple', 'red:HPB', 'Reconstruction', 'SMV'],
      pages: 'Interactive',
      type: 'web',
      url: "notes/Surgical Operative Approach/Pancreaticoduodenectomy (Whipple's Procedure) Monograph.html",
      isNew: true
    },
    {
      id: 'ppu-monograph',
      title: 'Repair of Perforated Peptic Ulcer',
      kicker: 'SIH Monograph Series',
      specialty: ['emergency'],
      description: 'Technical Monograph. From resuscitation to the Graham Patch. Decision making for conservative management vs. surgical repair, and H. pylori eradication.',
      tags: ['red:PPU', 'red:Graham Patch', 'Emergency', 'Omental Patch'],
      pages: 'Interactive',
      type: 'web',
      url: 'notes/Surgical Operative Approach/Repair of Perforated Peptic Ulcer Monograph.html',
      isNew: true
    },
    {
      id: 'cholecystectomy-monograph',
      title: 'Laparoscopic Cholecystectomy',
      kicker: 'SIH Monograph Series',
      specialty: ['hpb'],
      description: 'Technical Monograph. Achieving the Critical View of Safety, Calot\'s dissection, and the bail-out algorithm for the difficult gallbladder. Biliary anatomy and safe laparoscopy.',
      tags: ['red:CVS', 'red:Biliary', 'Calot', 'Laparoscopy'],
      pages: 'Interactive',
      type: 'web',
      url: 'notes/Surgical Operative Approach/Cholecystectomy Monograph.html',
      isNew: true
    },
    {
      id: 'drain-placement-monograph',
      title: 'Surgical Drain Placement',
      kicker: 'SIH Monograph Series',
      specialty: ['basics'],
      description: 'Technical Monograph. Indications, types of drains (passive vs active), placement techniques, and "The Drain Game" exit strategy for the surgical resident.',
      tags: ['red:Drains', 'red:JP Drain', 'Basic Tech', 'Resident Guide'],
      pages: 'Interactive',
      type: 'web',
      url: 'notes/Surgical Operative Approach/Surgical Drain Placement Monograph.html',
      isNew: true
    },
    {
      id: 'hpb-tumours-library',
      title: 'HPB Tumours Master Library',
      kicker: 'SIH Master Library',
      specialty: ['hpb'],
      description: 'Comprehensive hepatopancreatobiliary oncology. Hepatocellular carcinoma, cholangiocarcinoma, pancreatic adenocarcinoma, GIST, and ampullary tumours. Staging, resectability criteria, and landmark trials.',
      tags: ['red:HCC', 'red:Pancreatic Ca', 'Bismuth', 'Resectability'],
      pages: 'Master Library',
      type: 'telegram',
      url: 'https://t.me/sugicalInsightHub',
      isNew: true
    },
    {
      id: 'basic-surgical-techniques',
      title: 'Basic Surgical Techniques',
      kicker: 'SIH Master Library',
      specialty: ['basics'],
      description: 'The resident\'s practical bible. Knot tying, suture selection, tissue handling, wound closure, drain placement, stoma formation, and operative setup. Zero theory — all technique.',
      tags: ['red:Knot Tying', 'red:Sutures', 'Drains', 'Stoma'],
      pages: 'Master Library',
      type: 'telegram',
      url: 'https://t.me/sugicalInsightHub',
      isNew: true
    },
    {
      id: 'basics-vol1',
      title: 'All I Need For Basics Surgery — Vol 1',
      kicker: 'SIH Master Library',
      specialty: ['basics'],
      description: 'Foundations for the surgical resident. Fluid management, wound healing, surgical infection, nutritional support, blood transfusion, and pre/postoperative care. Board review integrated.',
      tags: ['red:Fluids', 'red:Wound Healing', 'Nutrition', 'Infection'],
      pages: 'Volume 1',
      type: 'telegram',
      url: 'https://t.me/sugicalInsightHub',
      isNew: true
    },
    {
      id: 'basics-vol2',
      title: 'All I Need For Basics Surgery — Vol 2',
      kicker: 'SIH Master Library',
      specialty: ['basics'],
      description: 'Core surgical pathology and decision-making. Hernias, thyroid and parathyroid, adrenal, breast, soft tissue tumours, and skin lesions. High-yield for MRCS, ABSITE &amp; FRCS.',
      tags: ['red:Hernias', 'red:Thyroid', 'Breast', 'Adrenal'],
      pages: 'Volume 2',
      type: 'telegram',
      url: 'https://t.me/sugicalInsightHub',
      isNew: true
    },
    {
      id: 'arm-peds',
      title: 'Anorectal Malformation',
      kicker: 'Paediatric Surgery',
      specialty: ['peds'],
      description: 'Peña/Krickenbeck classification, VACTERL, PSARP steps, colostomy principles, cloaca management, bowel management programme.',
      tags: ['red:Krickenbeck', 'red:PSARP', 'Cloaca', 'VACTERL'],
      pages: 'Monograph',
      type: 'web',
      url: 'notes/ARM_ResidencyJournal.html',
      isNew: true
    },
    {
      id: 'bowel-obstruction',
      title: 'Bowel Obstruction',
      kicker: 'Emergency Surgery',
      specialty: ['emergency'],
      description: 'SBO/LBO, Bologna criteria, WSES 2020 algorithm, strangulation recognition, operative decision-making.',
      tags: ['red:WSES 2020', 'Bologna', 'Resident Journal'],
      pages: 'Monograph',
      type: 'web',
      url: 'notes/BO_ResidencyJournal_v3.html',
      isNew: true
    },
    {
      id: 'pud-perforation',
      title: 'PUD Perforation',
      kicker: 'Emergency Surgery',
      specialty: ['emergency'],
      description: 'Boey score, omental patch technique, resection indications, H. pylori eradication protocol.',
      tags: ['red:Boey Score', 'Omental Patch', '6 pages'],
      pages: 'Technical Monograph',
      type: 'web',
      url: 'notes/Surgical Operative Approach/Repair of Perforated Peptic Ulcer Monograph.html',
      isNew: false
    },
    {
      id: 'fourniers-gangrene',
      title: 'Fournier\'s Gangrene',
      kicker: 'Emergency Surgery',
      specialty: ['emergency', 'colorectal'],
      description: 'FGSI scoring, debridement extent, reconstruction timing, colostomy indications, mortality predictors.',
      tags: ['red:FGSI', 'Debridement', '5 pages'],
      pages: '5 pages',
      type: 'telegram',
      url: 'https://t.me/sugicalInsightHub',
      isNew: false
    },
    {
      id: 'choledocholithiasis',
      title: 'Choledocholithiasis',
      kicker: 'HPB Surgery',
      specialty: ['hpb'],
      description: 'ASGE 2019 risk stratification, ERCP indications, laparoscopic CBD exploration, MRCP pathway.',
      tags: ['red:ASGE 2019', 'ERCP', '6 pages'],
      pages: 'Technical Monograph',
      type: 'web',
      url: 'notes/Surgical Operative Approach/Cholecystectomy Monograph.html',
      isNew: false
    },
    {
      id: 'hpb-surgery',
      title: 'HPB Surgery',
      kicker: 'HPB Surgery',
      specialty: ['hpb'],
      description: 'Biliary anatomy, BDI Strasberg, cholangiocarcinoma Bismuth-Corlette, Whipple steps, portal HTN.',
      tags: ['red:Strasberg', 'Whipple', '7 pages'],
      pages: 'Technical Monograph',
      type: 'web',
      url: "notes/Surgical Operative Approach/Pancreaticoduodenectomy (Whipple's Procedure) Monograph.html",
      isNew: false
    },
    {
      id: 'anesthesia-periop',
      title: 'Anesthesia &amp; Perioperative Care',
      kicker: 'Perioperative Care',
      specialty: ['periop'],
      description: 'RSI, airway decision tree, regional vs general, postop pain protocols, ICU handover essentials.',
      tags: ['red:RSI', 'ASA', 'Master Class'],
      pages: 'Monograph',
      type: 'web',
      url: 'notes/Anesthesia & Perioperative Care Monograph.html',
      isNew: true
    },
    {
      id: 'ct-imaging',
      title: 'High-Yield CT Imaging Findings',
      kicker: 'Imaging',
      specialty: ['emergency'],
      description: 'Free air, pneumatosis, volvulus, closed loop, ischaemia — rapid surgical pattern recognition.',
      tags: ['CT Pearls', 'Free Air', '5 pages'],
      pages: '5 pages',
      type: 'telegram',
      url: 'https://t.me/sugicalInsightHub',
      isNew: false
    },
    {
      id: 'anesthesia-illustrated',
      title: 'Anesthesia Illustrated Monograph',
      kicker: 'Perioperative Care',
      specialty: ['periop'],
      description: 'Heavily illustrated guide to airway management, surgical anesthesia, and critical care monitoring. Full clinical dashboards.',
      tags: ['red:Illustrated', 'Airway', 'ICU'],
      pages: 'Monograph',
      type: 'web',
      url: 'notes/Anesthesia_Perioperative_Care_Illustrated_Monograph.files/header.html',
      isNew: true
    }
  ],

  /* ─────────────────────────────────────────────
     TAB 2 — OPERATIVE APPROACH
  ───────────────────────────────────────────── */
  operative: [
    {
      id: 'op-inguinal-hernia',
      title: 'Open Inguinal Hernia Repair',
      opKicker: 'General Surgery · Groin',
      description: 'Lichtenstein & Shouldice repair. Nerve identification, sac management, mesh fixation, bail-out strategies.',
      opBadge: 'Essential',
      opMeta: 'Pillar 1-5 Monograph',
      url: 'notes/Surgical Operative Approach/Open Inguinal Hernia Repair.html'
    },
    {
      id: 'op-thyroidectomy',
      title: 'Thyroidectomy',
      opKicker: 'Head &amp; Neck · Endocrine',
      description: 'Total, Hemi &amp; Completion thyroidectomy. RLN identification, parathyroid preservation, Berry\'s Ligament, post-op hematoma emergency.',
      opBadge: 'Essential',
      opMeta: 'ATA Guidelines · IONM',
      url: 'notes/Surgical Operative Approach/Thyroidectomy.html'
    },
    {
      id: 'op-damage-control',
      title: 'Damage Control Laparotomy',
      opKicker: 'Trauma · Emergency',
      description: 'The abbreviated laparotomy game plan. Haemorrhage &amp; contamination control, the lethal triad, and the ICU resuscitation phase.',
      opBadge: 'Essential',
      opMeta: 'Pillar 1-5 Monograph',
      url: 'notes/Surgical Operative Approach/Damage Control Laparotomy.html'
    },
    {
      id: 'op-hemicolectomy',
      title: 'Right &amp; Left Hemicolectomy',
      opKicker: 'Colorectal · Oncology',
      description: 'Systematic medial-to-lateral dissection, vascular ligation (CME/D3), and anastomosis techniques.',
      opBadge: 'Essential',
      opMeta: 'Technical Pearls',
      url: 'notes/Surgical Operative Approach/Hemicolectomy.html'
    },
    {
      id: 'op-stoma-reversal',
      title: 'Ileostomy &amp; Colostomy Reversal',
      opKicker: 'Colorectal · General',
      description: 'Pre-op workup (distal loopogram), mobilization techniques, and hand-sewn vs stapled anastomosis.',
      opBadge: 'Essential',
      opMeta: 'Resident Guide',
      url: 'notes/Surgical Operative Approach/Stoma Reversal.html'
    },
    {
      id: 'op-cholecystectomy',
      title: 'Laparoscopic Cholecystectomy',
      opKicker: 'HPB · Laparoscopy',
      description: 'Critical View of Safety, Calot\'s dissection, and the bail-out algorithm for the difficult gallbladder.',
      opBadge: 'Essential',
      opMeta: '12 Technical Pearls',
      url: 'notes/Surgical Operative Approach/Cholecystectomy Monograph.html'
    },
    {
      id: 'op-whipples',
      title: 'Whipple\'s Procedure',
      opKicker: 'HPB · Oncology',
      description: 'Pancreaticoduodenectomy game plan. Kocherization, SMV dissection, and the three reconstructions.',
      opBadge: 'Master Series',
      opMeta: 'HPB Monograph',
      url: "notes/Surgical Operative Approach/Pancreaticoduodenectomy (Whipple's Procedure) Monograph.html"
    },
    {
      id: 'op-ppu',
      title: 'Repair of Perforated Peptic Ulcer',
      opKicker: 'Emergency · Upper GI',
      description: 'The Graham Patch and beyond. Resuscitation, operative steps, and post-op care.',
      opBadge: 'Essential',
      opMeta: 'Technical Guide',
      url: 'notes/Surgical Operative Approach/Repair of Perforated Peptic Ulcer Monograph.html'
    },
    {
      id: 'op-drain-placement',
      title: 'Surgical Drain Placement',
      opKicker: 'Basic Surgical Techniques',
      description: 'Indications, types of drains, and placement techniques. Jackson-Pratt vs. Penrose.',
      opBadge: 'Fundamentals',
      opMeta: 'Skills Lab',
      url: 'notes/Surgical Operative Approach/Surgical Drain Placement Monograph.html'
    }
  ]
};
