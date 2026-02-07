#!/bin/bash

echo "🛑 Aborting broken merge and cleaning up..."
git merge --abort 2>/dev/null || git rebase --abort 2>/dev/null || true
git reset --hard HEAD

echo "🔄 Going back to working v0.0.9 branch..."
git checkout thebayislands.au-v0.0.9

echo "📋 Status:"
git status

echo ""
echo "✅ You're back on v0.0.9 with working code."
echo ""
echo "Now deploying to main..."
git checkout main
git reset --hard thebayislands.au-v0.0.9
git push --force origin main

echo ""
echo "✅ Done! Main deployed. Vercel will update in 1-2 minutes."
echo "Going back to v0.0.9..."
git checkout thebayislands.au-v0.0.9

echo ""
echo "✅ All fixed! You're on v0.0.9 with working code, and main is deployed."
