#!/bin/bash

echo "🔧 Auto-resolving conflicts - keeping your working code..."

# Accept all changes from current HEAD (your working v0.0.9 code)
git checkout --ours app/page.tsx
git checkout --ours components/Navbar.tsx
git checkout --ours components/TopAuthBar.tsx
git checkout --ours styles/globals.css

echo "✅ Conflicts resolved by keeping your working code"

git add app/page.tsx components/Navbar.tsx components/TopAuthBar.tsx styles/globals.css

echo "📝 Committing..."
git commit -m "Resolved merge conflicts - kept working v0.0.9 code"

echo "📤 Pushing to main..."
git push origin main

echo ""
echo "✅ Done! Your working code is now on main and deploying to Vercel!"
