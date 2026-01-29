import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jazreuartewyrmbfhtdz.supabase.co';
const supabaseServiceKey = 'sb_secret_b2qQ4DIFS_jEqvJpfJBfzw_Jx6Nk0rw';

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: { autoRefreshToken: false, persistSession: false }
});

console.log('╔════════════════════════════════════════╗');
console.log('║   DATABASE SCHEMA AUDIT REPORT         ║');
console.log('╚════════════════════════════════════════╝\n');

// Tables we need based on the application
const requiredTables = {
  'user_profiles': 'User account information and preferences',
  'plans': 'Subscription plans/tiers',
  'user_subscriptions': 'User subscription records',
  'organizations': 'Business/organization accounts',
  'organization_members': 'Organization membership',
  'directory_listings': 'Business directory entries',
  'articles': 'News articles/blog posts',
  'events': 'Community events',
  'classifieds': 'Classified ads',
  'jobs': 'Job listings',
  'comments': 'User comments on all content types',
  'reviews': 'Reviews for businesses/listings',
  'favorites': 'User bookmarks/favorites',
  'notifications': 'User notifications',
  'settings': 'Global/user settings',
  'categories': 'Content categories',
  'tags': 'Content tags',
  'media': 'Uploaded media files',
  'moderation_queue': 'Content pending moderation',
  'audit_log': 'System audit trail'
};

async function checkTable(tableName) {
  try {
    const { data, error, count } = await supabase
      .from(tableName)
      .select('*', { count: 'exact', head: true });
    
    if (error) {
      if (error.code === 'PGRST116' || error.message.includes('not found')) {
        return { exists: false, count: 0, error: error.message };
      }
      return { exists: false, count: 0, error: error.message };
    }
    
    return { exists: true, count: count || 0, error: null };
  } catch (err) {
    return { exists: false, count: 0, error: err.message };
  }
}

console.log('📊 Checking Required Tables:\n');

const results = {};
for (const [tableName, description] of Object.entries(requiredTables)) {
  const result = await checkTable(tableName);
  results[tableName] = result;
  
  const status = result.exists ? '✅' : '❌';
  const countStr = result.exists ? `(${result.count} rows)` : '(MISSING)';
  
  console.log(`${status} ${tableName.padEnd(25)} ${countStr}`);
  if (!result.exists) {
    console.log(`   📝 Purpose: ${description}`);
  }
}

console.log('\n═══════════════════════════════════════');
console.log('📈 SUMMARY');
console.log('═══════════════════════════════════════\n');

const existing = Object.entries(results).filter(([_, r]) => r.exists);
const missing = Object.entries(results).filter(([_, r]) => !r.exists);

console.log(`✅ Existing Tables: ${existing.length}`);
existing.forEach(([name, r]) => {
  console.log(`   - ${name} (${r.count} rows)`);
});

console.log(`\n❌ Missing Tables: ${missing.length}`);
missing.forEach(([name]) => {
  console.log(`   - ${name} (${requiredTables[name]})`);
});

console.log('\n═══════════════════════════════════════');
console.log('🔍 CHECKING ADMIN PAGES REQUIREMENTS');
console.log('═══════════════════════════════════════\n');

// Check specific admin page requirements
const adminPageRequirements = {
  '/admin': ['user_profiles', 'settings'],
  '/admin/directory': ['directory_listings', 'moderation_queue'],
  '/admin/articles': ['articles', 'moderation_queue'],
  '/admin/events': ['events', 'moderation_queue'],
  '/admin/classifieds': ['classifieds', 'moderation_queue'],
  '/admin/jobs': ['jobs', 'moderation_queue'],
  '/admin/users': ['user_profiles', 'user_subscriptions'],
  '/admin/moderation': ['moderation_queue', 'comments', 'reviews'],
  '/admin/settings': ['settings']
};

for (const [page, tables] of Object.entries(adminPageRequirements)) {
  const allExist = tables.every(t => results[t]?.exists);
  const status = allExist ? '✅' : '⚠️';
  console.log(`${status} ${page}`);
  
  if (!allExist) {
    const missingTables = tables.filter(t => !results[t]?.exists);
    console.log(`   Missing: ${missingTables.join(', ')}`);
  }
}

console.log('\n');
