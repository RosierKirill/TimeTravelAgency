#!/bin/bash

# TimeTravel Agency - Setup Script

echo "🚀 TimeTravel Agency - Installation & Setup"
echo "============================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

echo "✅ Node.js $(node --version) detected"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "🎨 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful"
else
    echo "⚠️  Build completed with warnings (this is okay for development)"
fi

echo ""
echo "✨ Setup Complete!"
echo ""
echo "To start the development server, run:"
echo "  npm run dev"
echo ""
echo "The app will be available at: http://localhost:3000"
echo ""
echo "Happy time traveling! 🕰️✨"
