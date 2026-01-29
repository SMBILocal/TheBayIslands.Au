#!/usr/bin/env node

import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY
);

async function checkProfileSchema() {
  console.log('🔍 Checking users table schema...\n');
  
  // Check if users table exists and get schema
  const { data: tables, error: tableError } = await supabase
    .from('users')
    .select('*')
    .limit(1);
  
  if (tableError) {
    console.error('❌ Error querying users table:', tableError.message);
    return;
  }
  
  console.log('✅ Users table exists\n');
  
  // Get the super admin user
  const { data: user, error: userError } = await supabase
    .from('users')
    .select('*')
    .eq('id', 'fd3284e3-ff1c-4b33-a1bf-921267fc6fbe')
    .single();
  
  if (userError) {
    console.log('⚠️  Super admin user not in users table:', userError.message);
  } else {
    console.log('✅ Super admin user found in users table:');
    console.log(JSON.stringify(user, null, 2));
  }
  
  console.log('\n🔍 Checking auth.users for super admin...\n');
  
  // Check auth.users
  const { data: authData, error: authError } = await supabase.auth.admin.listUsers();
  
  if (!authError) {
    const authUser = authData.users.find(u => u.email === 'smbilocal@gmail.com');
    if (authUser) {
      console.log('✅ Found in auth.users:');
      console.log('ID:', authUser.id);
      console.log('Email:', authUser.email);
      console.log('Metadata:', JSON.stringify(authUser.user_metadata, null, 2));
    }
  }
  
  // Check comments table
  console.log('\n🔍 Checking comments table...\n');
  const { data: comments, error: commentsError } = await supabase
    .from('comments')
    .select('*')
    .limit(1);
  
  if (commentsError) {
    console.error('❌ Comments table error:', commentsError.message);
  } else {
    console.log('✅ Comments table exists');
  }
}

checkProfileSchema().catch(console.error);
