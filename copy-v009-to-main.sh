#!/bin/bash

echo "🛑 Cleaning up merge conflicts..."
git reset --hard HEAD
git clean -fd

echo "🔄 Switching to v0.0.9 (your working branch)..."
git checkout thebayislands.au-v0.0.9

echo "✅ On v0.0.9. Checking status..."
git status

echo ""
echo "🔄 Making main an exact copy of v0.0.9..."
git branch -D main 2>/dev/null || true
git checkout -b main

echo "📤 Force pushing to main to deploy..."
git push --force origin main

echo ""
echo "✅ SUCCESS! Main is now an exact copy of v0.0.9"
echo "Vercel will deploy your mobile menu fixes in 1-2 minutes!"
echo ""
echo "Current branch:"
git branch --show-current
