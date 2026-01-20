# 🚀 Deployment & Production Guide

## Pre-Launch Checklist

### Code Quality
- [ ] Run `npm run build` - builds without errors
- [ ] Run `npm run lint` - no linting errors
- [ ] All TypeScript types are correct
- [ ] No console errors in development
- [ ] All imports use correct relative paths

### Functionality Testing
- [ ] All 5 main pages load correctly
- [ ] All 5 detail pages load and display content
- [ ] Search functionality works on every page
- [ ] Filters work correctly (category, location)
- [ ] Mobile hamburger menu opens/closes
- [ ] Links navigate to correct pages
- [ ] Buttons have proper hover states
- [ ] Forms submit without errors

### Responsive Design
- [ ] Mobile (< 480px): Single column, hamburger menu
- [ ] Tablet (480-768px): Optimized spacing
- [ ] Desktop (> 768px): Full layout with sidebar
- [ ] Images scale properly on all sizes
- [ ] Text remains readable at all sizes
- [ ] Buttons are touch-friendly on mobile

### Performance
- [ ] Lighthouse score > 80
- [ ] First Contentful Paint < 2s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1
- [ ] Images are optimized
- [ ] CSS is minified
- [ ] JavaScript bundle < 500KB

### Browser Compatibility
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Chrome
- [ ] Mobile Safari

---

## Deployment Options

### Option 1: Vercel (Recommended)
**Best for:** Next.js applications, automatic deployments, preview URLs

#### Setup
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Steps
1. Connect GitHub repository
2. Set environment variables in Vercel dashboard
3. Enable auto-deploy on push to `main`
4. Configure production domain

#### Environment Variables in Vercel
```
NEXT_PUBLIC_SUPABASE_URL = https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = eyXXXXX...
SUPABASE_SERVICE_ROLE_KEY = eyXXXXX...
NEXT_PUBLIC_APP_URL = https://yourdomain.com
```

---

### Option 2: Netlify

#### Setup
1. Connect GitHub repo to Netlify
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. Add environment variables
4. Deploy

#### netlify.toml
```toml
[build]
  command = "npm run build"
  publish = ".next"

[env]
  NEXT_PUBLIC_SUPABASE_URL = "https://xxxxx.supabase.co"
  NEXT_PUBLIC_SUPABASE_ANON_KEY = "eyXXXXX..."
```

---

### Option 3: Docker + Cloud Run (Google Cloud)

#### Dockerfile
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

#### Deploy
```bash
gcloud run deploy thebayislands \
  --source . \
  --region us-central1 \
  --set-env-vars NEXT_PUBLIC_SUPABASE_URL=...
```

---

### Option 4: Self-Hosted (AWS EC2, DigitalOcean, etc.)

#### Build
```bash
npm run build
```

#### Run Production Server
```bash
npm start
```

#### Reverse Proxy (Nginx)
```nginx
server {
  listen 80;
  server_name yourdomain.com;

  location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_cache_bypass $http_upgrade;
  }
}
```

---

## Environment Configuration

### Production Environment Variables
Create `.env.production` with:
```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyXXXXX...
SUPABASE_SERVICE_ROLE_KEY=eyXXXXX...
NEXT_PUBLIC_APP_URL=https://yourdomain.com
NODE_ENV=production
```

### Verify Environment Variables
```bash
# Check that all required vars are set
echo $NEXT_PUBLIC_SUPABASE_URL
echo $NEXT_PUBLIC_SUPABASE_ANON_KEY
echo $NEXT_PUBLIC_APP_URL
```

---

## Database Preparation

### Before Going Live

1. **Backup Production Database**
   ```bash
   # Export Supabase database
   # In Supabase dashboard: Tools → Database Backups
   ```

2. **Seed Production Data**
   ```bash
   # Set production SUPABASE_SERVICE_ROLE_KEY
   node scripts/seed.js
   ```

3. **Test RLS Policies**
   - Verify public SELECT works
   - Test INSERT/UPDATE restrictions
   - Confirm anon user can only read

4. **Monitor Database Performance**
   - Check query logs for slow queries
   - Set up Supabase monitoring alerts
   - Review index usage

---

## Domain & SSL Setup

### Register Domain
1. Purchase domain from registrar (GoDaddy, Namecheap, etc.)
2. Point nameservers to hosting provider
3. Wait for DNS propagation (up to 48 hours)

### SSL Certificate (Automatic with Vercel/Netlify)
- Vercel: Automatic SSL via Let's Encrypt
- Netlify: Automatic SSL included
- Self-hosted: Use Let's Encrypt + Certbot

### Custom Domain Configuration

#### Vercel
1. Go to Project Settings
2. Domains → Add domain
3. Verify DNS records
4. SSL auto-provisioned

#### Netlify
1. Site settings → Domain management
2. Add custom domain
3. Configure DNS records
4. SSL auto-provisioned

---

## Performance Optimization

### Image Optimization
```tsx
// Use Next.js Image component
import Image from 'next/image';

<Image
  src="/logo.png"
  alt="SMBI Logo"
  width={48}
  height={48}
  priority
/>
```

### Code Splitting
Already handled by Next.js:
- Automatic route-based code splitting
- Dynamic imports for heavy components

### Caching Strategy
```javascript
// In next.config.js or API routes
cache: 'no-store'  // Fresh data for list pages
revalidate: 60     // ISR: Revalidate every 60s
```

### Database Query Optimization
```sql
-- Add indexes for common queries
CREATE INDEX idx_articles_created_at ON articles(created_at DESC);
CREATE INDEX idx_jobs_location ON jobs(location);
CREATE INDEX idx_businesses_category ON businesses(category);
```

---

## Monitoring & Analytics

### Setup Google Analytics
1. Create Google Analytics 4 property
2. Add tracking ID to `.env`
3. Install @next/analytics (optional)
4. Monitor traffic and user behavior

### Setup Sentry (Error Tracking)
```bash
npm install @sentry/nextjs
```

```javascript
// sentry.config.js
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,
});
```

### Setup Uptime Monitoring
Services: Pingdom, Uptime Robot, StatusPage.io
- Monitor main domain
- Alert on downtime
- Public status dashboard

---

## Backup & Recovery

### Database Backups
```bash
# Supabase handles automatic backups
# Manual export: Dashboard → Tools → Database Backups
```

### Code Backups
```bash
# GitHub already stores your code
# Ensure GitHub repo is backed up to local machine
git clone https://github.com/username/repo.git
```

### Recovery Procedure
1. Restore from Supabase backup if data issues
2. Re-deploy from GitHub if code issues
3. Clear Vercel build cache if needed
4. Run seed script if tables are empty

---

## Security Checklist

- [ ] All API keys in environment variables
- [ ] `.env.local` in `.gitignore`
- [ ] Supabase RLS policies enabled
- [ ] No hardcoded credentials in code
- [ ] HTTPS enforced on production
- [ ] CORS properly configured
- [ ] Rate limiting on API endpoints
- [ ] Input validation on forms
- [ ] SQL injection protection via Supabase
- [ ] XSS protection via React escaping

### Security Headers (Nginx)
```nginx
add_header X-Frame-Options "SAMEORIGIN";
add_header X-Content-Type-Options "nosniff";
add_header X-XSS-Protection "1; mode=block";
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains";
```

---

## Post-Launch Monitoring

### First 24 Hours
- [ ] Monitor error logs
- [ ] Check page load times
- [ ] Verify all features work
- [ ] Test search and filters
- [ ] Check mobile experience
- [ ] Monitor database queries

### First Week
- [ ] Analyze user behavior
- [ ] Check performance metrics
- [ ] Review error tracking
- [ ] Monitor database size
- [ ] Test backup/recovery

### Ongoing
- [ ] Daily: Check error logs
- [ ] Weekly: Review analytics
- [ ] Monthly: Database maintenance
- [ ] Quarterly: Performance optimization
- [ ] Annually: Security audit

---

## Troubleshooting Common Issues

### 500 Errors on Production
1. Check environment variables
2. Verify Supabase connection
3. Review server logs
4. Check database backups

### Slow Page Load
1. Check database query times
2. Optimize images
3. Enable caching headers
4. Consider CDN

### Search Not Working
1. Verify API endpoint returns data
2. Check client-side filtering logic
3. Review browser console for errors

### Database Connection Refused
1. Verify SUPABASE_URL is correct
2. Check SUPABASE_ANON_KEY validity
3. Ensure Supabase project is active
4. Verify IP whitelist if applicable

---

## Production Maintenance

### Weekly Tasks
```bash
# Check for dependency updates
npm outdated

# Update non-breaking dependencies
npm update

# Review analytics
# Check error tracking dashboard
```

### Monthly Tasks
```bash
# Update minor/patch versions
npm upgrade

# Run full test suite
npm test

# Backup database
# Review performance metrics
```

### Quarterly Tasks
```bash
# Major version updates
npm install --save-latest

# Security audit
npm audit

# Performance optimization review
# Database maintenance (VACUUM, ANALYZE)
```

---

## Scaling Considerations

### When to Scale
- **Database**: When queries become slow
- **Hosting**: When CPU/memory usage high
- **CDN**: When bandwidth costs increase
- **Rate Limiting**: When traffic spikes

### Scaling Options
1. **Supabase**: Auto-scales, pay-as-you-go
2. **Vercel**: Auto-scales, no action needed
3. **Add Redis Cache**: For frequently accessed data
4. **CDN**: For static assets

---

## Disaster Recovery Plan

### Scenario: Database Corruption
1. Stop accepting writes
2. Restore from latest backup
3. Re-run seed script if needed
4. Validate data integrity
5. Resume operations

### Scenario: Malicious Attack
1. Enable rate limiting
2. Block suspicious IPs
3. Review access logs
4. Update security headers
5. Notify users if data affected

### Scenario: Complete Data Loss
1. Restore from Supabase backup
2. Re-deploy code from GitHub
3. Verify all services operational
4. Communicate status to users

---

## Performance Targets

| Metric | Target | Acceptable |
|--------|--------|-----------|
| First Contentful Paint | < 1.5s | < 2s |
| Largest Contentful Paint | < 2.5s | < 4s |
| Cumulative Layout Shift | < 0.1 | < 0.25 |
| Time to Interactive | < 3s | < 5s |
| Lighthouse Score | 90+ | 80+ |
| Database Query (avg) | < 100ms | < 500ms |
| API Response Time | < 200ms | < 1s |

---

## Launch Announcement Template

```markdown
🎉 TheBayIslands.Au is LIVE!

We're excited to announce the launch of the brand new Bay Islands 
directory and classifieds platform.

🏝️ What you can do:
- Browse local jobs and opportunities
- Discover community events
- Find local businesses
- Buy and sell items in classifieds
- Read stories about island life

🚀 Features:
- Search and filter by location and category
- Get all the details about jobs, businesses, and events
- Share listings with friends
- Connect with local community members

Visit us now: https://yourdomain.com

Feedback? Email us at support@thebayislands.au
```

---

**Ready to Launch! 🎉**

Your world-class Bay Islands platform is production-ready. Follow this checklist and deployment guide for a smooth launch.

**Good luck! 🏝️**
