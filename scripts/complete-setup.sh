#!/bin/bash

# SMBI Local - Schema Refresh & Data Population Script
# Run this to complete the setup

echo "╔════════════════════════════════════════╗"
echo "║   SMBI LOCAL - SETUP COMPLETION        ║"
echo "╚════════════════════════════════════════╝"
echo ""

echo "📋 This script will help you complete the setup."
echo ""
echo "MANUAL STEPS REQUIRED:"
echo ""
echo "STEP 1: Refresh Supabase Schema Cache"
echo "----------------------------------------"
echo "1. Open: https://supabase.com/dashboard/project/jazreuartewyrmbfhtdz"
echo "2. Go to: Database section"
echo "3. Click: 'Refresh Schema' or run this SQL:"
echo "   NOTIFY pgrst, 'reload schema';"
echo ""
echo "Press Enter when done..."
read

echo ""
echo "STEP 2: Populate Database with Dummy Data"
echo "------------------------------------------"
echo "1. Open: https://supabase.com/dashboard/project/jazreuartewyrmbfhtdz/sql"
echo "2. Copy file: supabase/migrations/populate_dummy_data.sql"
echo "3. Paste into SQL Editor"
echo "4. Click 'Run'"
echo ""
echo "Press Enter when done..."
read

echo ""
echo "STEP 3: Verify Data"
echo "-------------------"
echo "Running verification queries..."
echo ""

# Use node to run verification
cat > /tmp/verify-data.mjs << 'EOF'
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jazreuartewyrmbfhtdz.supabase.co';
const supabaseKey = 'sb_secret_b2qQ4DIFS_jEqvJpfJBfzw_Jx6Nk0rw';

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { autoRefreshToken: false, persistSession: false }
});

console.log('Checking database contents...\n');

const tables = [
  'directory_listings',
  'articles', 
  'events',
  'classifieds',
  'comments',
  'categories'
];

for (const table of tables) {
  const { count, error } = await supabase
    .from(table)
    .select('*', { count: 'exact', head: true });
  
  if (error) {
    console.log(`❌ ${table}: ERROR - ${error.message}`);
  } else {
    const status = count > 0 ? '✅' : '⚠️';
    console.log(`${status} ${table}: ${count} rows`);
  }
}

// Check auth users
const { data: { users }, error: authError } = await supabase.auth.admin.listUsers();
if (authError) {
  console.log(`❌ Auth users: ERROR - ${authError.message}`);
} else {
  console.log(`\n✅ Auth users: ${users?.length || 0} accounts`);
  users?.forEach(u => {
    const role = u.app_metadata?.role || 'user';
    console.log(`   - ${u.email} (${role})`);
  });
}

console.log('\n');
EOF

/home/codespace/nvm/current/bin/node /tmp/verify-data.mjs

echo ""
echo "STEP 4: Test Login"
echo "------------------"
echo "1. Open: http://localhost:3001/login"
echo "2. Login as admin:"
echo "   Email: smbilocal@gmail.com"
echo "   Password: SecurePass123!"
echo "3. Should redirect to /admin"
echo ""
echo "4. Test regular user:"
echo "   Email: user@thebayislands.au"
echo "   Password: User123!@#"
echo "5. Should redirect to /dashboard"
echo ""

echo "╔════════════════════════════════════════╗"
echo "║   SETUP COMPLETE!                      ║"
echo "╚════════════════════════════════════════╝"
echo ""
echo "📚 Next steps:"
echo "   - Review: docs/IMPLEMENTATION-PLAN.md"
echo "   - Check: docs/IMMEDIATE-ACTIONS.md for troubleshooting"
echo ""
