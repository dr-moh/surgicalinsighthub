#!/bin/bash
# SIH → GitHub Sync Script
# Run from terminal: bash /Users/dr.moh/Documents/SIH/sih_project/scripts/sync_to_github.sh

set -e

SRC="/Users/dr.moh/Documents/SIH/sih_project"
DST="/Users/dr.moh/Documents/GitHub/surgicalinsighthub"

echo "🔵 SIH → GitHub Sync Starting..."
echo ""

# ── 1. FIX PERMISSIONS ──
echo "🔧 Fixing permissions..."
chmod -R u+w "$DST/notes/" 2>/dev/null || true
chmod -R u+w "$DST/js/questions/" 2>/dev/null || true

# ── 2. COPY NEW NOTE HTML FILES ──
echo ""
echo "📄 Syncing note HTML files..."

cp "$SRC/notes/Surgical Operative Approach/Abdominal Trauma.html" \
   "$DST/notes/Surgical Operative Approach/Abdominal Trauma.html" \
   && echo "  ✅ Abdominal Trauma.html" || echo "  ❌ Abdominal Trauma.html"

cp "$SRC/notes/Surgical Operative Approach/anal Surgical Procedures Monograph.html" \
   "$DST/notes/Surgical Operative Approach/anal Surgical Procedures Monograph.html" \
   && echo "  ✅ anal Surgical Procedures Monograph.html" || echo "  ❌ anal Surgical Procedures Monograph.html"

cp "$SRC/notes/ortho_trauma.html" \
   "$DST/notes/ortho_trauma.html" \
   && echo "  ✅ ortho_trauma.html" || echo "  ❌ ortho_trauma.html"

# ── 3. COPY MCQ JS FILES ──
echo ""
echo "📦 Syncing MCQ JS files..."

for f in \
  enriched_batch_2.js \
  enriched_batch_3.js \
  enriched_batch_4.js \
  enriched_batch_5.js \
  enriched_batch_6.js \
  enriched_batch_7_10.js \
  enriched_high_yield.js \
  enriched_plastic_batch.js \
  enriched_pretest_batch.js \
  enriched_rush_batch.js \
  oncology_mcq.js \
  r2_exam.js \
  tash_surgery.js
do
  cp "$SRC/js/questions/$f" "$DST/js/questions/$f" \
    && echo "  ✅ $f" || echo "  ❌ $f"
done

# ── 4. GIT COMMIT & PUSH ──
echo ""
echo "🚀 Committing and pushing to GitHub..."

cd "$DST"
git add -A
git status --short
git commit -m "Add Abdominal Trauma + Anal Procedures monographs; sync MCQ batches enriched_2-10 + oncology, r2, tash, plastic, pretest, rush"
git push origin main

echo ""
echo "✅ Done! All changes pushed to GitHub."
