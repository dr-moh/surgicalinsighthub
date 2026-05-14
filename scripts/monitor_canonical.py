#!/usr/bin/env python3
"""Monitor canonical_questions.json and print record count every 5 minutes."""
import time
import json
import os

PATH = os.path.join('MCQ Bank', 'canonical_questions.json')

def count_records(path):
    try:
        if not os.path.exists(path):
            return 0
        with open(path, 'r', encoding='utf-8') as f:
            data = json.load(f)
            return len(data) if isinstance(data, list) else 0
    except Exception as e:
        return f'error:{e}'


def main():
    while True:
        ts = time.strftime('%Y-%m-%d %H:%M:%S')
        cnt = count_records(PATH)
        print(f'{ts} processed:{cnt}', flush=True)
        time.sleep(300)


if __name__ == '__main__':
    main()
