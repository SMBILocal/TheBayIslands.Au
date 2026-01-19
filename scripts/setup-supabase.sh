#!/bin/bash

# TheBayIslands.Au - Supabase Setup Script
# This script walks you through setting up your Supabase project

echo "🚀 TheBayIslands.Au - Supabase Project Setup"
echo "=============================================="
echo ""
echo "This script will help you set up your Supabase project."
echo "You need to have created a project at https://supabase.com first"
echo ""

read -p "Have you created a Supabase project? (yes/no): " created_project

if [ "$created_project" != "yes" ]; then
    echo ""
    echo "Please visit https://supabase.com and create a new project first."
    echo "Then run this script again."
    exit 1
fi

echo ""
echo "Step 1: Enter your Supabase credentials"
echo "========================================"
echo ""
echo "You can find these in your Supabase dashboard:"
echo "- Settings → API (for URL and ANON_KEY)"
echo "- Settings → Security → Service Role Key (for SERVICE_ROLE_KEY)"
echo ""

read -p "Enter your Supabase Project URL (e.g., https://xxxxx.supabase.co): " SUPABASE_URL
read -p "Enter your NEXT_PUBLIC_SUPABASE_ANON_KEY: " ANON_KEY
read -p "Enter your SUPABASE_SERVICE_ROLE_KEY: " SERVICE_ROLE_KEY

# Verify inputs
if [ -z "$SUPABASE_URL" ] || [ -z "$ANON_KEY" ] || [ -z "$SERVICE_ROLE_KEY" ]; then
    echo "Error: All fields are required"
    exit 1
fi

echo ""
echo "Step 2: Updating .env.local"
echo "==========================="

# Create/update .env.local
cat > .env.local << EOF
NEXT_PUBLIC_SUPABASE_URL=$SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=$ANON_KEY
SUPABASE_SERVICE_ROLE_KEY=$SERVICE_ROLE_KEY
EOF

echo "✅ .env.local updated with your Supabase credentials"
echo ""

echo "Step 3: Database Schema Setup"
echo "============================="
echo ""
echo "You must now run the database schema in your Supabase SQL Editor:"
echo ""
echo "1. Go to: $SUPABASE_URL/project/sql/editor"
echo "2. Click 'New Query'"
echo "3. Copy the entire contents of: supabase/schema-v0.0.2.sql"
echo "4. Paste it into the SQL Editor"
echo "5. Click 'Run' (or press Cmd/Ctrl + Enter)"
echo ""
echo "This will create:"
echo "  ✓ 8 tables (users, directory_listings, jobs, events, classifieds, comments, favorites, saved_searches)"
echo "  ✓ Row Level Security (RLS) policies"
echo "  ✓ Indexes for performance"
echo "  ✓ Full-text search support"
echo ""

read -p "Have you run the schema in Supabase SQL Editor? (yes/no): " schema_done

if [ "$schema_done" = "yes" ]; then
    echo ""
    echo "Step 4: Verify Database Connection"
    echo "===================================="
    echo ""
    echo "Testing connection to your Supabase project..."
    echo ""
    
    # Try to connect with Node/TypeScript
    npm run test:db 2>/dev/null
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ Database connection successful!"
        echo ""
        echo "Step 5: Next Steps"
        echo "=================="
        echo ""
        echo "Your Supabase project is now ready! To continue:"
        echo ""
        echo "1. Review the implementation guide:"
        echo "   cat V0.0.2-IMPLEMENTATION-GUIDE.md"
        echo ""
        echo "2. Install Supabase dependencies:"
        echo "   npm install @supabase/supabase-js"
        echo ""
        echo "3. Start the development server:"
        echo "   npm run dev"
        echo ""
        echo "4. Test Supabase connection:"
        echo "   npm run test:db"
        echo ""
        echo "🎉 You're all set!"
    else
        echo ""
        echo "⚠️  Database connection test failed."
        echo "Please verify your credentials and try again."
        echo ""
        echo "Troubleshooting:"
        echo "- Check that your URL is correct"
        echo "- Check that your ANON_KEY is correct"
        echo "- Make sure you ran the schema in SQL Editor"
        echo "- Check your project's RLS policies"
    fi
else
    echo ""
    echo "⏸️  Setup paused."
    echo ""
    echo "Once you've run the schema in Supabase SQL Editor, run this script again:"
    echo "  bash scripts/setup-supabase.sh"
fi

echo ""
