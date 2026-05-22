#!/bin/bash
echo "🚀 Initializing SHARP 3.0 Waterfall Pipeline Environment..."

# 1. Create a virtual environment if it doesn't exist
if [ ! -d "venv" ]; then
    echo "📦 Creating Python virtual environment..."
    python3 -m venv venv
fi

# 2. Activate the virtual environment
echo "🔄 Activating virtual environment..."
source venv/bin/activate

# 3. Upgrade pip and install dependencies
echo "⬇️ Installing required dependencies..."
pip install --upgrade pip
pip install requests

# 4. Run the processor
echo "⚡ Starting the high-throughput Waterfall Bulk Pipeline..."
nohup python scripts/bulk_markdown_pipeline.py > pipeline.log 2>&1 &

echo "✅ Pipeline successfully launched in the background!"
echo "📄 To view the live progress, run: tail -f pipeline.log"
