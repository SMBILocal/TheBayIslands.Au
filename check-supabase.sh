#!/bin/bash
# Comprehensive Supabase Connection Check

echo "=========================================="
echo "🔍 SUPABASE CONNECTION DIAGNOSTIC REPORT"
echo "=========================================="
echo ""

# Load environment variables
if [ -f .env.local ]; then
    export $(cat .env.local | grep -v '^#' | xargs)
    echo "✅ Environment variables loaded from .env.local"
else
    echo "❌ .env.local file not found"
    exit 1
fi

echo ""
echo "📋 Configuration:"
echo "  URL: $NEXT_PUBLIC_SUPABASE_URL"
echo "  Key: ${NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY:0:30}..."
echo ""

# Test 1: Check if Supabase URL is reachable
echo "=========================================="
echo "Test 1: Network Connectivity"
echo "=========================================="
if curl -s -o /dev/null -w "%{http_code}" "$NEXT_PUBLIC_SUPABASE_URL" | grep -q "200\|404"; then
    echo "✅ Supabase server is reachable"
else
    echo "❌ Cannot reach Supabase server"
fi
echo ""

# Test 2: Check Auth API
echo "=========================================="
echo "Test 2: Auth API Test"
echo "=========================================="
AUTH_RESPONSE=$(curl -s "${NEXT_PUBLIC_SUPABASE_URL}/auth/v1/health")
echo "Response: $AUTH_RESPONSE"
if echo "$AUTH_RESPONSE" | grep -q "healthy\|ok"; then
    echo "✅ Auth API is healthy"
else
    echo "⚠️  Auth API response: $AUTH_RESPONSE"
fi
echo ""

# Test 3: Check REST API with anon key
echo "=========================================="
echo "Test 3: REST API Test (Anonymous)"
echo "=========================================="
REST_RESPONSE=$(curl -s \
    -H "apikey: $NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY" \
    -H "Authorization: Bearer $NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY" \
    "${NEXT_PUBLIC_SUPABASE_URL}/rest/v1/")

echo "Response: $REST_RESPONSE"
if echo "$REST_RESPONSE" | grep -q "No tables found\|paths"; then
    echo "✅ REST API is accessible"
else
    echo "⚠️  REST API response: $REST_RESPONSE"
fi
echo ""

# Test 4: Try to query a table (users)
echo "=========================================="
echo "Test 4: Query Users Table"
echo "=========================================="
USERS_RESPONSE=$(curl -s \
    -H "apikey: $NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY" \
    -H "Authorization: Bearer $NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY" \
    "${NEXT_PUBLIC_SUPABASE_URL}/rest/v1/users?select=id,email,role&limit=5")

echo "Response: $USERS_RESPONSE"
if echo "$USERS_RESPONSE" | grep -q '\['; then
    echo "✅ Users table exists and is queryable"
    echo "   Users found: $(echo "$USERS_RESPONSE" | jq '. | length' 2>/dev/null || echo "Parse error")"
else
    echo "❌ Users table not accessible: $USERS_RESPONSE"
fi
echo ""

# Test 5: Try to query pricing_plans table
echo "=========================================="
echo "Test 5: Query Pricing Plans Table"
echo "=========================================="
PLANS_RESPONSE=$(curl -s \
    -H "apikey: $NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY" \
    -H "Authorization: Bearer $NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY" \
    "${NEXT_PUBLIC_SUPABASE_URL}/rest/v1/pricing_plans?select=*&limit=10")

echo "Response: $PLANS_RESPONSE"
if echo "$PLANS_RESPONSE" | grep -q '\['; then
    echo "✅ Pricing Plans table exists"
    echo "   Plans found: $(echo "$PLANS_RESPONSE" | jq '. | length' 2>/dev/null || echo "Parse error")"
else
    echo "❌ Pricing Plans table not accessible: $PLANS_RESPONSE"
fi
echo ""

# Test 6: Check Edge Functions
echo "=========================================="
echo "Test 6: Edge Functions Check"
echo "=========================================="
FUNCTION_RESPONSE=$(curl -s \
    -H "Authorization: Bearer $NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY" \
    "${NEXT_PUBLIC_SUPABASE_URL}/functions/v1/list-plans")

echo "Response: $FUNCTION_RESPONSE"
if echo "$FUNCTION_RESPONSE" | grep -q '\['; then
    echo "✅ list-plans function is deployed and working"
else
    echo "⚠️  list-plans function response: $FUNCTION_RESPONSE"
fi
echo ""

# Test 7: Check other expected tables
echo "=========================================="
echo "Test 7: Check All Expected Tables"
echo "=========================================="
TABLES=("directory_listings" "jobs" "events" "classifieds" "articles" "subscriptions" "reviews")

for TABLE in "${TABLES[@]}"; do
    TABLE_RESPONSE=$(curl -s \
        -H "apikey: $NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY" \
        -H "Authorization: Bearer $NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY" \
        "${NEXT_PUBLIC_SUPABASE_URL}/rest/v1/${TABLE}?select=id&limit=1")
    
    if echo "$TABLE_RESPONSE" | grep -q '\['; then
        COUNT=$(curl -s \
            -H "apikey: $NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY" \
            -H "Authorization: Bearer $NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY" \
            -H "Prefer: count=exact" \
            "${NEXT_PUBLIC_SUPABASE_URL}/rest/v1/${TABLE}?select=id&limit=1" \
            -I | grep -i "content-range" | awk '{print $2}' | cut -d'/' -f2)
        echo "✅ $TABLE: $(echo $COUNT | tr -d '\r') records"
    else
        echo "❌ $TABLE: Not accessible"
    fi
done
echo ""

echo "=========================================="
echo "📊 SUMMARY"
echo "=========================================="
echo "Supabase Project: jazreuartewyrmbfhtdz"
echo "URL: $NEXT_PUBLIC_SUPABASE_URL"
echo ""
echo "Next Steps:"
echo "1. If tables are missing, run schema migrations"
echo "2. If Edge Functions are not working, check function deployment"
echo "3. If auth is failing, verify API keys in Supabase dashboard"
echo ""
echo "Dashboard: https://supabase.com/dashboard/project/jazreuartewyrmbfhtdz"
echo "=========================================="
