#!/bin/bash
# Get list of all tables in Supabase

export $(cat .env.local | grep -v '^#' | xargs)

echo "=========================================="
echo "📋 SUPABASE TABLES INVENTORY"
echo "=========================================="
echo ""

# Try to find all tables by querying common ones
POSSIBLE_TABLES=("user_profiles" "plans" "subscriptions" "businesses" "business_listings" 
                 "directory_listings" "jobs" "events" "classifieds" "articles" "reviews"
                 "categories" "locations" "suburbs" "users" "profiles")

echo "Checking for existing tables..."
echo ""

FOUND_TABLES=()

for TABLE in "${POSSIBLE_TABLES[@]}"; do
    RESPONSE=$(curl -s \
        -H "apikey: $NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY" \
        -H "Authorization: Bearer $NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY" \
        -H "Prefer: count=exact" \
        "${NEXT_PUBLIC_SUPABASE_URL}/rest/v1/${TABLE}?select=*&limit=1" 2>&1)
    
    if echo "$RESPONSE" | grep -q '\['; then
        # Get count from header
        COUNT=$(curl -s \
            -H "apikey: $NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY" \
            -H "Authorization: Bearer $NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY" \
            -H "Prefer: count=exact" \
            "${NEXT_PUBLIC_SUPABASE_URL}/rest/v1/${TABLE}?select=*&limit=0" \
            -I 2>/dev/null | grep -i "content-range" | awk '{print $2}' | cut -d'/' -f2 | tr -d '\r')
        
        echo "✅ $TABLE (${COUNT:-0} records)"
        FOUND_TABLES+=("$TABLE")
        
        # Get first record as sample
        SAMPLE=$(curl -s \
            -H "apikey: $NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY" \
            -H "Authorization: Bearer $NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY" \
            "${NEXT_PUBLIC_SUPABASE_URL}/rest/v1/${TABLE}?select=*&limit=1")
        
        if [ "$SAMPLE" != "[]" ]; then
            echo "   Sample data: $SAMPLE" | head -c 200
            echo "..."
        fi
        echo ""
    fi
done

echo ""
echo "=========================================="
echo "📊 SUMMARY"
echo "=========================================="
echo "Found ${#FOUND_TABLES[@]} tables:"
for TABLE in "${FOUND_TABLES[@]}"; do
    echo "  - $TABLE"
done
echo ""
