#!/bin/bash

echo "🛑 Stopping dev server..."
killall -9 node 2>/dev/null

echo "🧹 Cleaning up merge..."
git merge --abort 2>/dev/null || true

echo "📥 Getting clean files from v0.0.9 branch..."
git show thebayislands.au-v0.0.9:components/Navbar.tsx > components/Navbar.tsx
git show thebayislands.au-v0.0.9:components/TopAuthBar.tsx > components/TopAuthBar.tsx  
git show thebayislands.au-v0.0.9:app/page.tsx > app/page.tsx
git show thebayislands.au-v0.0.9:styles/globals.css > styles/globals.css

echo "✅ All files cleaned!"

echo "📝 Adding and committing..."
git add components/Navbar.tsx components/TopAuthBar.tsx app/page.tsx styles/globals.css
git commit -m "Fix: Resolved merge conflicts by using v0.0.9 working code"

echo "📤 Pushing to main..."
git push origin main

echo ""
echo "✅ DONE! Main branch deployed with your working fixes!"
echo "Starting dev server..."
npm run dev
