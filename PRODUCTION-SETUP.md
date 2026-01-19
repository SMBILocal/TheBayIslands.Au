# Production Environment Configuration Guide

## Required Environment Variables

### Supabase Configuration
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

### Application Configuration
```
NEXT_PUBLIC_SITE_URL=https://thebayislands.au
NEXT_PUBLIC_APP_NAME=The Bay Islands
NEXT_PUBLIC_ADMIN_EMAILS=admin@thebayislands.au,support@thebayislands.au
```

### Email Configuration (Resend/SendGrid/etc)
```
RESEND_API_KEY=your-resend-api-key
SENDGRID_API_KEY=your-sendgrid-api-key
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASSWORD=your-password
```

### Optional: Analytics & Monitoring
```
NEXT_PUBLIC_GA_ID=your-google-analytics-id
SENTRY_DSN=your-sentry-dsn
```

## Deployment Steps

### 1. Database Setup
1. Go to https://supabase.com and create a new project
2. Copy your Project URL and Anon Key
3. Run the schema in SQL Editor:
   - Go to SQL Editor
   - Create a new query
   - Copy contents from `supabase/schema-v0.0.2.sql`
   - Execute the query

### 2. Email Configuration
1. Configure email provider (Resend recommended for simplicity)
2. Set up transactional email templates in Supabase Auth
3. Configure email redirect URLs in Supabase Settings

### 3. Environment Files
Create `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
NEXT_PUBLIC_SITE_URL=https://thebayislands.au
NEXT_PUBLIC_ADMIN_EMAILS=admin@thebayislands.au
```

### 4. Deployment
```bash
# Install dependencies
npm install

# Build
npm run build

# Test locally
npm run start

# Deploy (using Vercel)
vercel deploy --prod
```

## Security Checklist

- [ ] Verify RLS policies are enabled on all tables
- [ ] Update admin email list in environment variables
- [ ] Configure CORS in Supabase settings
- [ ] Set up email verification in Auth settings
- [ ] Enable two-factor authentication if needed
- [ ] Set up database backup schedule
- [ ] Configure rate limiting on APIs
- [ ] Implement DDoS protection (Cloudflare)
- [ ] Set up SSL/TLS certificates
- [ ] Configure security headers in Next.js

## Monitoring & Maintenance

### Database
- Monitor query performance with Supabase Dashboard
- Set up automated backups (Supabase handles this)
- Review and optimize indexes regularly

### Application
- Monitor error rates with Sentry
- Track performance metrics with GA
- Review user activity logs
- Check email delivery rates

### Admin Tasks
- Review pending listings daily
- Monitor for spam/abuse
- Process user support tickets
- Update featured listings

## Scaling Considerations

### Database
- Use read replicas for high traffic
- Implement caching (Redis)
- Archive old data periodically

### Application
- Use CDN for static assets (Vercel/Cloudflare)
- Implement image optimization
- Set up edge functions for API routes
- Use serverless functions for heavy processing

### Monitoring
- Set up uptime monitoring
- Configure alerts for critical errors
- Track usage metrics
- Plan capacity based on growth

## Support & Maintenance

### Regular Updates
- Keep dependencies updated
- Review security advisories
- Monitor Next.js releases
- Test updates in staging first

### User Support
- Set up support email
- Create FAQ section
- Document common issues
- Plan response time SLAs
