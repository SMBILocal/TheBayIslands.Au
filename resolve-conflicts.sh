#!/bin/bash

echo "🔄 Fetching latest main branch..."
git fetch origin main

echo "📋 Current branch status:"
git status

echo ""
echo "🔀 Attempting to merge main into thebayislands.au-v0.0.9..."
git merge origin/main

# Check if merge was successful
if [ $? -eq 0 ]; then
    echo "✅ Merge successful! No conflicts."
    echo ""
    echo "📤 Pushing to remote..."
    git push origin thebayislands.au-v0.0.9
    echo ""
    echo "🔄 Switching to main branch..."
    git checkout main
    echo "🔄 Pulling latest main..."
    git pull origin main
    echo "🔀 Merging v0.0.9 into main..."
    git merge thebayislands.au-v0.0.9
    echo "📤 Pushing to main for deployment..."
    git push origin main
    echo ""
    echo "✅ All done! Your changes should deploy to Vercel in 1-2 minutes."
else
    echo "⚠️  Merge conflicts detected!"
    echo ""
    echo "Conflicted files:"
    git diff --name-only --diff-filter=U
    echo ""
    echo "To resolve conflicts:"
    echo "1. Open each conflicted file above"
    echo "2. Look for <<<<<<< HEAD markers"
    echo "3. Keep the code you want and remove the conflict markers"
    echo "4. After fixing all conflicts, run:"
    echo "   git add ."
    echo "   git commit -m 'Resolved merge conflicts'"
    echo "   git push origin thebayislands.au-v0.0.9"
    echo "   Then run this script again"
fi
