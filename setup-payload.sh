#!/bin/bash

# PayloadCMS Setup Script for Clean Cut Trees
echo "🌲 Setting up PayloadCMS for Clean Cut Trees..."

# Copy collection files to PayloadCMS project
echo "📁 Copying collection files..."
cp -r payload-collections/*.ts ~/codebase/personal/gainz/client-sites-3000/clean-cut-trees/src/collections/

# Copy migration data
echo "📦 Copying migration data..."
cp -r content-migration ~/codebase/personal/gainz/client-sites-3000/clean-cut-trees/

# Copy implementation guide
echo "📋 Copying implementation guide..."
cp IMPLEMENTATION_GUIDE.md ~/codebase/personal/gainz/client-sites-3000/clean-cut-trees/

echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. cd ~/codebase/personal/gainz/client-sites-3000/clean-cut-trees"
echo "2. Update payload.config.ts to include the new collections"
echo "3. Install gray-matter: npm install gray-matter"
echo "4. Set up your database connection in .env"
echo "5. Run: npm run dev"
echo "6. Run migration script when ready"
echo ""
echo "📚 Check IMPLEMENTATION_GUIDE.md for detailed instructions!"
