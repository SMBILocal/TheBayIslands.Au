#!/bin/bash
set -e

echo "🛑 Step 1: Abort any merge in progress..."
git merge --abort 2>/dev/null || true

echo "🧹 Step 2: Remove all changes and get clean state..."
git reset --hard HEAD

echo "📥 Step 3: Get working files from v0.0.9 branch..."
git show thebayislands.au-v0.0.9:components/Navbar.tsx > components/Navbar.tsx
git show thebayislands.au-v0.0.9:components/TopAuthBar.tsx > components/TopAuthBar.tsx
git show thebayislands.au-v0.0.9:app/page.tsx > app/page.tsx
git show thebayislands.au-v0.0.9:styles/globals.css > styles/globals.css
git show thebayislands.au-v0.0.9:app/layout.tsx > app/layout.tsx

echo "✅ Files copied successfully!"

echo "📝 Step 4: Stage files..."
git add components/Navbar.tsx components/TopAuthBar.tsx app/page.tsx styles/globals.css app/layout.tsx

echo "💾 Step 5: Commit..."
git commit -m "Deploy: Copy working mobile menu fixes from v0.0.9 to main"

echo "📤 Step 6: Push to main (this will deploy to Vercel)..."
git push origin main

echo ""
echo "✅ SUCCESS! Your working v0.0.9 code is now on main!"
echo "Vercel will deploy in 1-2 minutes."
echo ""
echo "Starting dev server..."
npm run dev
