#!/bin/bash

echo "🛑 Aborting current merge..."
git merge --abort

echo "✅ Merge aborted. Your working v0.0.9 code is safe."
echo ""
echo "📋 Current status:"
git status

echo ""
echo "Now we'll force push v0.0.9 to main (since v0.0.9 is working)"
echo "Press Enter to continue or Ctrl+C to cancel..."
read

echo "🔄 Pushing v0.0.9 to remote..."
git push origin thebayislands.au-v0.0.9

echo "🔄 Switching to main branch..."
git checkout main

echo "🔄 Pulling latest main..."
git pull origin main

echo "🔄 Resetting main to match v0.0.9 exactly..."
git reset --hard origin/thebayislands.au-v0.0.9

echo "📤 Force pushing to main to deploy..."
git push --force origin main

echo ""
echo "✅ Done! Main now has your working v0.0.9 code."
echo "Vercel should deploy in 1-2 minutes."
echo ""
echo "To get back to v0.0.9 branch:"
echo "  git checkout thebayislands.au-v0.0.9"
