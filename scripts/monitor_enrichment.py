#!/usr/bin/env python3
"""Monitor the enrichment pipeline and log progress every 5 minutes.

Writes periodic summaries to `enrichment_progress.log`.
"""
import time
import json
import os
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
EXTRACTED = ROOT / 'MCQ_extracted.json'
ENRICHED = ROOT / 'MCQ_enriched.json'
CANONICAL = ROOT / 'MCQ Bank' / 'canonical_questions.json'
LOG = ROOT / 'enrichment_progress.log'


def is_pipeline_running():
    try:
        out = subprocess.check_output(['pgrep', '-f', 'mcq_pipeline.py']).decode().strip()
        return bool(out)
    except Exception:
        return False


def count_json_items(path: Path):
    if not path.exists():
        return 0
    try:
        data = json.loads(path.read_text(encoding='utf-8'))
        if isinstance(data, list):
            return len(data)
        return 1
    except Exception:
        return 0


def main():
    with open(LOG, 'a', encoding='utf-8') as f:
        f.write('--- Monitor started ---\n')
    while True:
        ts = time.strftime('%Y-%m-%d %H:%M:%S')
        running = is_pipeline_running()
        extracted_count = count_json_items(EXTRACTED)
        enriched_count = count_json_items(ENRICHED)
        canonical_exists = CANONICAL.exists()
        line = f"{ts} | running={running} | extracted={extracted_count} | enriched={enriched_count} | canonical_exists={canonical_exists}\n"
        with open(LOG, 'a', encoding='utf-8') as f:
            f.write(line)
        time.sleep(300)


if __name__ == '__main__':
    main()
