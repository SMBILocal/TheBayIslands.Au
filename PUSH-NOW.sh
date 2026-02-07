#!/bin/bash
echo "Adding fixed files..."
git add components/Navbar.tsx components/TopAuthBar.tsx app/page.tsx styles/globals.css

echo "Committing..."
git commit -m "Fix: Remove all merge conflict markers - deploy working v0.0.9 code"

echo "Pushing to main (will deploy to Vercel)..."
git push origin main

echo ""
echo "✅ DONE! Check Vercel in 1-2 minutes for deployment!"
echo ""
echo "Starting dev server..."
npm run dev
