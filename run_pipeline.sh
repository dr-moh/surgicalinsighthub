#!/bin/bash
echo "🚀 Initializing SHARP 3.0 MCQ Enrichment Pipeline Environment..."

# 1. Create a virtual environment if it doesn't exist
if [ ! -d "venv" ]; then
    echo "📦 Creating Python virtual environment..."
    python3 -m venv venv
fi

# 2. Activate the virtual environment
echo "🔄 Activating virtual environment..."
source venv/bin/activate

# 3. Upgrade pip and install google-genai
echo "⬇️ Installing required dependencies..."
pip install --upgrade pip
pip install google-genai requests

# 4. Authenticate with Google Cloud (if needed)
echo "☁️ Verifying Google Cloud Authentication..."
if ! gcloud auth print-access-token &> /dev/null; then
    echo "🔑 Please authenticate with Google Cloud:"
    gcloud auth application-default login
fi

# 5. Run the processor
echo "⚡ Starting the high-throughput Bulk SHARP Processor..."
python bulk_sharp_processor.py

echo "✅ Pipeline execution completed or interrupted. You can run this script again to resume safely."
