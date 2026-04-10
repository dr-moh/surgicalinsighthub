# Surgical Insight Hub — Website
**Dissect. Learn. Dominate.**

Official website for Surgical Insight Hub (SIH), the YesSurgeryBet podcast, and the SIH Monograph Series.
Built by Dr. Abdulmalik Moh.

---

## How to Update Content

All content lives in **one file: `data.json`**

To add a new note, open `data.json` and add an entry to the `notes` array:
```json
{
  "id": 9,
  "title": "Your New Topic",
  "category": "emergency",
  "categoryLabel": "Emergency Surgery",
  "description": "Brief description of the note content.",
  "tags": ["Tag1", "Tag2", "Tag3"],
  "pages": "6 pages",
  "isNew": true,
  "telegramLink": "https://t.me/sugicalInsightHub"
}
```

**Category options:** `emergency` · `hpb` · `colorectal` · `peds` · `periop`

To add a new podcast episode, add an entry to the `episodes` array:
```json
{
  "id": 9,
  "title": "Your New Episode Title",
  "description": "One sentence description.",
  "tags": ["Tag1", "Tag2"],
  "youtubeLink": "https://www.youtube.com/@YeSurgeryBett",
  "isLatest": true
}
```

Set "isLatest": true on the newest episode and false on all others.

---

## Files

| File | Purpose |
|------|---------|
| `index.html` | Home page |
| `notes.html` | Notes library |
| `podcast.html` | Podcast episodes |
| `about.html` | About page |
| `data.json` | **All content — edit this to update the site** |
| `colorectal_Notebook.html` | SIH Monograph — Colorectal & Anal Surgery |
| `anestesia_with_mono.html` | SIH Monograph — Anesthesia & Perioperative Care |
| `Surgical_Insight_Hub_Logo.png` | Logo — keep in root folder |

---

## Social Links

- Telegram: https://t.me/sugicalInsightHub
- YouTube: https://www.youtube.com/@YeSurgeryBett
- LinkedIn: https://www.linkedin.com/company/surgical-insight-hub

---

## Hosting

Hosted free on Cloudflare Pages.
Live at: `https://surgicalinsighthub.pages.dev`

---

## Daily Update Workflow
```bash
# 1. Edit data.json with new content
# 2. Save the file
# 3. Run these 3 commands:

git add .
git commit -m "added new note: Topic Name"
git push
```

Site updates within 60 seconds.