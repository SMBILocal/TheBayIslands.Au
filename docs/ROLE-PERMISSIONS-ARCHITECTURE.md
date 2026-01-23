# Role-Based Access Control (RBAC) Architecture
## The Bay Islands - Production SAAS Implementation

**Status**: Architecture Design
**Version**: v1.0
**Date**: January 23, 2026

---

## Role Hierarchy & Permissions

### 1. Super Admin (Parent/Master Admin)
**Industry Name**: Platform Owner / System Administrator  
**Description**: Complete system access, can manage all admins, approve/reject all content, access all reports

#### Permissions:
- ✅ View all content (all tables)
- ✅ Create/Edit/Delete any content
- ✅ Approve/Reject all pending content
- ✅ Manage all users (create, edit, suspend, delete)
- ✅ Manage all admins (create, edit, demote, delete)
- ✅ View all reports and moderation logs
- ✅ Resolve reports and ban users
- ✅ Access analytics and system metrics
- ✅ Configure system settings
- ✅ View audit logs for all actions
- ✅ Assign/Revoke admin roles
- ✅ Access backups and recovery options

#### Dashboard:
- System overview (user count, content count, report count)
- All pending approvals (all content types)
- All open reports (all users)
- Admin management console (create/edit/delete admins)
- Analytics dashboard (traffic, conversions, growth)
- Audit logs (all system actions)
- Moderation logs (all moderator actions)

---

### 2. Admin (Staff Admin / Content Manager)
**Industry Name**: Site Administrator / Content Manager  
**Description**: Manages content and users below them, needs approval from Super Admin for sensitive actions

#### Permissions:
- ✅ View all user content (articles, listings, events, jobs, classifieds)
- ✅ Approve/Reject user content (articles, comments)
- ✅ View all reports for their moderation queue
- ✅ Resolve reports (dismiss or flag for Super Admin)
- ✅ Suspend/unsuspend users
- ✅ Edit/delete inappropriate user content
- ✅ Manage moderators (create, edit, assign tasks)
- ✅ View analytics for managed content
- ✅ Create articles (admin-authored)
- ✅ Approve moderator actions (requires Super Admin sign-off for major actions)
- ❌ Cannot delete users (Super Admin only)
- ❌ Cannot access system settings
- ❌ Cannot manage other admins
- ❌ Cannot access Super Admin dashboard

#### Dashboard:
- Content approval queue (from editors & users)
- User-submitted reports (content flagged as spam/inappropriate)
- User management (view, suspend, monitor)
- Moderator oversight (view moderator approvals)
- Moderation logs (actions by moderators they manage)
- Content analytics

---

### 3. Moderator (Community Moderator / Editor)
**Industry Name**: Content Moderator / Editor  
**Description**: Reviews content from editors and users, approves/rejects before publishing

#### Permissions:
- ✅ View pending user articles
- ✅ Approve/Reject user articles
- ✅ Edit articles (grammar, formatting, add tags)
- ✅ View comments on articles
- ✅ Flag inappropriate comments for Admin review
- ✅ Create/edit/delete their own articles
- ✅ Write original content
- ✅ Cannot edit locked pages (docs, policies, pages)
- ✅ Cannot manage users
- ✅ Cannot resolve reports
- ❌ Cannot delete user content
- ❌ Cannot suspend users
- ❌ Cannot access moderation queue (only assigned tasks)

#### Dashboard:
- Pending articles to review
- Their published articles
- Comments on their articles
- Task list (assigned moderation tasks)
- Personal analytics (articles written, articles approved)

---

### 4. Editor (Content Creator)
**Industry Name**: Content Editor / Author  
**Description**: Creates and submits content for moderator approval

#### Permissions:
- ✅ Create/edit/delete own articles
- ✅ View own articles (drafts and published)
- ✅ Submit articles for moderation
- ✅ Write comments on published articles
- ✅ View comments on own articles
- ✅ Create event listings (submitted for approval)
- ✅ Create job listings (submitted for approval)
- ✅ Cannot edit articles after submission (moderator does)
- ✅ Cannot delete published articles
- ✅ Cannot approve other editors' content
- ❌ Cannot access moderation dashboard
- ❌ Cannot edit locked pages
- ❌ Cannot see other editors' drafts

#### Dashboard:
- My articles (drafts, pending, published, rejected)
- My submissions (events, jobs created)
- Comments on my articles
- Personal activity feed
- Approval status tracker

---

### 5. User (Community Member)
**Industry Name**: Registered User / Member  
**Description**: Can participate in community (comments, ratings, business interactions)

#### Permissions:
- ✅ Create business listings (submitted for approval)
- ✅ Create job listings (submitted for approval)
- ✅ Create event listings (submitted for approval)
- ✅ Create classified listings (submitted for approval)
- ✅ View all published content
- ✅ Write comments on articles/events/listings
- ✅ Submit ratings & reviews for businesses
- ✅ Edit/delete own comments
- ✅ Edit/delete own listings (if in draft)
- ✅ Delete own account (data export available)
- ✅ Save favorite listings
- ✅ Save favorite articles
- ✅ Create favorite searches
- ✅ Message business owners (contact form)
- ❌ Cannot edit published listings
- ❌ Cannot approve content
- ❌ Cannot see draft content from others
- ❌ Cannot access moderation features

#### Dashboard:
- My business listings (draft, pending, approved, expired)
- My job postings
- My events
- My classifieds
- My saved items & searches
- My comments & reviews
- Notification center

---

## Permission Matrix

| Action | Super Admin | Admin | Moderator | Editor | User |
|--------|:-----------:|:-----:|:---------:|:------:|:----:|
| **Content Management** |
| View all content | ✅ | ✅ | ✅ | ❌ | ❌ |
| Create articles | ✅ | ✅ | ✅ | ✅ | ❌ |
| Approve articles | ✅ | ✅ | ✅ | ❌ | ❌ |
| Edit any article | ✅ | ✅ | ✅ | 🔸 Own | 🔸 Own |
| Delete articles | ✅ | 🔸 Inappropriate | 🔸 Flag only | ❌ | 🔸 Own unpub |
| **User Management** |
| View all users | ✅ | ✅ | ❌ | ❌ | 🔸 Own |
| Create users | ✅ | ❌ | ❌ | ❌ | ❌ |
| Suspend users | ✅ | ✅ | ❌ | ❌ | ❌ |
| Delete users | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Admin Management** |
| Create admins | ✅ | ❌ | ❌ | ❌ | ❌ |
| Manage admins | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Moderation** |
| View reports | ✅ | ✅ | 🔸 Assigned | ❌ | ❌ |
| Resolve reports | ✅ | ✅ | ❌ | ❌ | ❌ |
| View audit logs | ✅ | 🔸 Limited | ❌ | ❌ | ❌ |
| Ban users | ✅ | 🔸 Suspend | ❌ | ❌ | ❌ |
| **System** |
| System settings | ✅ | ❌ | ❌ | ❌ | ❌ |
| View analytics | ✅ | ✅ | 🔸 Limited | ❌ | ❌ |
| Manage backups | ✅ | ❌ | ❌ | ❌ | ❌ |

**Legend**: ✅ Full Access | ❌ No Access | 🔸 Limited/Conditional

---

## Approval Workflow

```
User (creates content)
  ↓
Editor (submits for review)
  ↓
Moderator (approves or requests changes)
  ↓
Admin (reviews moderator decision)
  ↓
Super Admin (final approval for sensitive content)
  ↓
Published
```

### Types of Content & Approval Rules:

**User-Generated Content** (Fast Track):
- Business Listings → User → Auto-approved (if payment verified) → Live
- Event Listings → User → Moderator Approval → Live
- Job Listings → User → Moderator Approval → Live
- Classifieds → User → Auto-approved → Live
- Comments → User → Auto-approved (moderated retroactively)

**Editor Content** (Standard Track):
- Articles → Editor → Moderator → Admin → Live
- Pages → Editor → Admin → Super Admin → Live
- Locked Pages → Super Admin only

**Admin Content** (Fast Track):
- Admin Articles → Admin → Auto-approved → Live
- Policy Updates → Admin → Super Admin approval → Live

**Super Admin Content** (Immediate):
- System Announcements → Immediate → Live
- Policy Pages → Immediate → Live

---

## Database Schema

### users table (extended)

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  email TEXT UNIQUE,
  username TEXT UNIQUE,
  
  -- Role & Permissions
  user_role TEXT DEFAULT 'user' CHECK (user_role IN ('super_admin', 'admin', 'moderator', 'editor', 'user')),
  permissions JSONB, -- Serialized permissions
  
  -- Admin-specific
  managed_by UUID REFERENCES users(id), -- Super admin who manages this admin
  admin_since TIMESTAMP,
  
  -- Status
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'suspended', 'deleted')),
  moderation_status TEXT DEFAULT 'active' CHECK (moderation_status IN ('active', 'flagged', 'suspended')),
  
  -- Metadata
  display_name TEXT,
  avatar_url TEXT,
  bio TEXT,
  location TEXT,
  is_premium BOOLEAN DEFAULT false,
  subscription_tier TEXT DEFAULT 'free',
  
  -- Timestamps
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  last_login TIMESTAMP
);
```

### role_permissions table (reference)

```sql
CREATE TABLE role_permissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  role TEXT UNIQUE CHECK (role IN ('super_admin', 'admin', 'moderator', 'editor', 'user')),
  permissions JSONB, -- Array of permission strings
  created_at TIMESTAMP DEFAULT NOW()
);

-- Example permission structure:
{
  "content": ["create", "read", "update", "delete"],
  "users": ["read", "create"],
  "moderation": ["view", "approve"],
  "articles": ["read", "create", "approve"],
  "comments": ["read", "create", "delete_own"],
  "system": []
}
```

### role_audit table (track changes)

```sql
CREATE TABLE role_audit (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  changed_by UUID REFERENCES users(id),
  target_user UUID REFERENCES users(id),
  old_role TEXT,
  new_role TEXT,
  reason TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## Signup Flows

### User Signup (Public)
```
1. User visits /signup
2. Enters: email, password, display_name, location
3. Verification email sent
4. Click verification link
5. Account created with user_role = 'user'
6. Redirected to /dashboard/user
```

### Admin Invite (Closed)
```
1. Super Admin navigates to /admin/invite
2. Selects role (admin, moderator, editor)
3. Enters email
4. System generates invite code
5. Invite sent to email with signup link
6. Admin visits /signup/admin?code=xyz
7. Enters password, display_name
8. Account created with specified role
9. Redirected to appropriate admin dashboard
```

### Demo Accounts (For Testing)
```
Super Admin: super@demo.local (password: demo123!)
Admin: admin@demo.local (password: demo123!)
Moderator: moderator@demo.local (password: demo123!)
Editor: editor@demo.local (password: demo123!)
User: user@demo.local (password: demo123!)
```

---

## Dashboard Hierarchy

### Super Admin Dashboard
- System Overview
  - Total users, active sessions, traffic
  - Content statistics (articles, listings, events)
  - Revenue (if applicable)
  - System health (uptime, error rate)
  
- Admin Management
  - List all admins
  - Create new admin
  - Edit admin details
  - View admin actions
  - Promote/demote admins
  
- Content Approval Queue
  - All pending approvals
  - Filter by type and priority
  - Bulk approve/reject
  
- Reports & Moderation
  - All open reports
  - Report analytics
  - User moderation history
  
- System Settings
  - Database backups
  - Email configuration
  - API keys
  - Feature flags

### Admin Dashboard
- Content Approval
  - Pending articles
  - Pending user listings
  - Reports queue
  
- User Management
  - View all users
  - Suspend/unsuspend
  - Monitor activity
  
- Moderator Management
  - View assigned moderators
  - Review their approvals
  - Override decisions
  
- Analytics
  - Content published
  - User engagement
  - Report trends

### Moderator Dashboard
- Assigned Tasks
  - Articles awaiting review
  - User content flagged
  - Comments to moderate
  
- My Content
  - Articles I created
  - Approval history
  
- Analytics
  - Articles I've approved
  - Moderation activity

### Editor Dashboard
- My Articles
  - Drafts
  - Pending review
  - Published
  - Rejected (with feedback)
  
- My Submissions
  - Events created
  - Jobs posted
  - Activity history

### User Dashboard
- My Listings
  - Business (all statuses)
  - Jobs (all statuses)
  - Events (all statuses)
  - Classifieds (all statuses)
  
- My Activity
  - Comments written
  - Reviews submitted
  - Saved items
  
- Account Settings
  - Profile edit
  - Notifications
  - Privacy settings

---

## Row-Level Security (RLS) Policies

### users table
```
SELECT: Users can view own profile, super admin/admin can view all
UPDATE: Users can update own profile, super admin can update any
DELETE: Super admin only
```

### articles table
```
SELECT: Everyone (if published), authors + moderators (if draft)
INSERT: authenticated users with editor+ role
UPDATE: Authors, moderators, admins
DELETE: Super admin only (soft delete)
```

### comments table
```
SELECT: Everyone (if parent published), authenticated (if draft)
INSERT: Authenticated users
UPDATE: Comment author, moderators, admins
DELETE: Comment author, admins
```

### moderation_logs table
```
SELECT: Super admin, admins, moderators (own actions)
INSERT: System (automatic)
DELETE: Super admin only
```

---

## API Endpoints for Role Management

### Get User Roles (Admin+)
```
GET /api/admin/roles
GET /api/admin/roles/[userId]
Response: { role, permissions, managedBy }
```

### Update User Role (Super Admin)
```
POST /api/admin/roles/update
Body: { userId, newRole, reason }
```

### List Admins (Super Admin)
```
GET /api/admin/users/admins
Response: Array of admin users with metadata
```

### Create Invite (Super Admin)
```
POST /api/admin/invites/create
Body: { email, role }
Response: { inviteCode, expiresAt }
```

### Check Permissions
```
GET /api/auth/permissions
Response: { role, permissions: [...] }
```

---

## Security Considerations

1. **Role Assignment**: Only Super Admin can assign admin roles
2. **Audit Trail**: All role changes logged with reason and timestamp
3. **Permissions Caching**: Cache role permissions to reduce DB queries
4. **JWT Claims**: Include role in JWT token for performance
5. **Rate Limiting**: Admin actions rate-limited differently
6. **Session Management**: Admin sessions logged and can be revoked
7. **IP Whitelisting**: Optional for admin accounts
8. **Two-Factor Auth**: Required for admin+ accounts
9. **Activity Monitoring**: Track all admin actions
10. **Auto-Logout**: Admin sessions auto-expire after 1 hour inactivity

---

## Implementation Phases

### Phase 1: Database & Auth (This Phase)
- ✅ Update users table with role columns
- ✅ Create role_permissions reference table
- ✅ Create role_audit logging table
- ✅ Update RLS policies

### Phase 2: Signup Flows
- Create public user signup page
- Create admin invite & signup system
- Email verification system

### Phase 3: Dashboards
- Build each role's dashboard UI
- Add role-specific features
- Implement permission checks

### Phase 4: Approval Workflows
- Create approval queue system
- Build approval UI
- Email notifications on approval status

### Phase 5: Comments & Ratings
- Add comments system
- Add 5-star rating system
- Social features (share, like)

### Phase 6: Testing & Demo Data
- Create seed script with demo users
- Create demo comments & ratings
- Full end-to-end testing

---

## Next Steps

1. Run database migrations to create new tables
2. Seed demo users (super_admin, admin, moderator, editor, user, 3x regular user)
3. Create auth context with role awareness
4. Build signup flows (user + admin invite)
5. Build dashboards for each role
6. Add permission checks throughout codebase

---

**Document Version**: v1.0  
**Last Updated**: January 23, 2026  
**Status**: Ready for Implementation
