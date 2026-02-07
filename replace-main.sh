#!/bin/bash

echo "🛑 Aborting any merge..."
git merge --abort 2>/dev/null || true

echo "🧹 Cleaning up..."
git reset --hard
git clean -fd

echo "🔄 Switching to v0.0.9..."
git checkout thebayislands.au-v0.0.9

echo "✅ On v0.0.9"
git log --oneline -1

echo ""
echo "🗑️ Deleting old main branch..."
git branch -D main

echo "✨ Creating new main from v0.0.9..."
git checkout -b main

echo "📤 Force replacing remote main..."
git push --force origin main

echo ""
echo "✅ DONE! Main is now v0.0.9"
echo "Vercel deploying now!"
