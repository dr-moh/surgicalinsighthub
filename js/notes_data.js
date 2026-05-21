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
    }
  ],

  /* ── OPERATIVE PLAYBOOKS ── */
  operative: [
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
    }
  ]
};
