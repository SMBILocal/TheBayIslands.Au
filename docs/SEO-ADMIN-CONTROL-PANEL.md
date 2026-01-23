# SEO Admin Control Panel — Complete Setup & Operations Guide

## Overview

The SEO Control Panel (`/admin/seo`) provides one-click management for:
- **Search engine indexing** (enable/disable robots crawling)
- **Search engine submission** (one-click submit to Google, Bing, DuckDuckGo)
- **Backlink tracking** (manage and monitor incoming links)
- **Search mention monitoring** (track where Bay Islands is mentioned online)

---

## 1. Indexing Control (🤖 Tab)

### Current Status

The site currently **respects** the `NEXT_PUBLIC_ALLOW_INDEXING` environment variable:
- **DISABLED** (`false` or missing) → robots.txt blocks all crawling
- **ENABLED** (`true`) → robots.txt allows crawling; Google/Bing can index

### How to Toggle Indexing

#### Development/Staging (Recommended Default)
```bash
# In .env.local or deployment config
NEXT_PUBLIC_ALLOW_INDEXING=false
```
✅ This blocks search engines — good for development, testing, staging

#### Ready for Production
```bash
# In .env.local or deployment config
NEXT_PUBLIC_ALLOW_INDEXING=true
```
⚠️ Only enable when site is finalized and ready for search engine visibility

### Dynamic robots.txt

The [app/robots.ts](../app/robots.ts) file now generates robots.txt dynamically based on the environment variable:

```typescript
// When NEXT_PUBLIC_ALLOW_INDEXING=false
User-agent: *
Disallow: /
Sitemap: https://thebayislands.au/sitemap.xml

// When NEXT_PUBLIC_ALLOW_INDEXING=true
User-agent: *
Allow: /
Disallow: /api/, /admin/, /dashboard/, /private/
Crawl-Delay: 2
Sitemap: https://thebayislands.au/sitemap.xml
```

---

## 2. Search Engine Submission (📢 Tab)

### One-Click Submit to Search Engines

When indexing is **ENABLED**, click "📢 Submit Sitemap to All Search Engines" to submit to:
- **Google Search Console**
- **Bing Webmaster Tools**
- **DuckDuckGo**

### Manual Verification (Required First Time)

After enabling indexing, you must manually verify ownership:

#### Google Search Console
1. Go to https://search.google.com/search-console
2. Add property: `https://thebayislands.au`
3. Verify ownership (via DNS, HTML file, or Google Analytics)
4. Submit sitemap: `https://thebayislands.au/sitemap.xml`
5. Monitor **Coverage** and **Performance** tabs

#### Bing Webmaster Tools
1. Go to https://www.bing.com/webmaster
2. Add site: `https://thebayislands.au`
3. Verify via DNS, XML file, or CNAME
4. Submit sitemap
5. Monitor **Crawl Information** and **Indexing**

#### DuckDuckGo
1. Go to https://duckduckgo.com/search/submit
2. Submit your site URL
3. Note: DuckDuckGo uses Bing index, so Bing verification suffices

### API Integration (Optional - Advanced)

For automated submission without manual steps, integrate these APIs:

#### Google Indexing API
- **Purpose**: Real-time URL submission to Google
- **Requires**: OAuth2 service account setup
- **Docs**: https://developers.google.com/search/apis/indexing-api/v3
- **Cost**: Free (up to 200 requests/day)

#### Bing URL Submission API
- **Purpose**: Batch URL submission to Bing
- **Requires**: API key from Bing Webmaster Tools
- **Docs**: https://www.bing.com/webmaster/help/url-submission-api-8e249d5a

---

## 3. Backlink & Reciprocal Link Management (🔗 Tab)

### Add Backlinks

Track incoming links from other sites:
1. **Domain**: Source site (e.g., `redlandbaysidenews.com.au`)
2. **URL**: Full link (e.g., `https://redlandbaysidenews.com.au/bay-islands-guide`)
3. **Type**:
   - **Backlink** — one-way incoming link
   - **Reciprocal** — mutual link arrangement
   - **Social** — link from social media (Facebook, Instagram, etc.)
   - **Directory** — link from business directory

### Why Track Backlinks?

- **SEO Value**: High-quality backlinks improve search rankings
- **Authority**: Links from trusted sites (news, directories) boost credibility
- **Monitoring**: Track which sites are linking to you
- **Outreach**: Identify opportunities for new backlinks
- **Reciprocal**: Manage mutual linking arrangements

### Backlink Sources (Bay Islands)

Priority sites for backlinks:
1. **Local News**: Redland Bayside News, Bay Islands Herald
2. **Business Directories**: Google Business, Yellow Pages, TrueLocal
3. **Local Government**: Redland City Council, Queensland Parks
4. **Community Sites**: Island community forums, Facebook groups
5. **Industry Directories**: Tourism Queensland, Moreton Bay guides

---

## 4. Search Mention Monitoring (📢 Tab)

### What It Does

Tracks mentions of "Bay Islands" across the web:
- Search rankings for key queries
- Where the site appears in results
- Unlinked mentions (brand mentions without links)
- Social media mentions

### Running Internet Search

Click "🔍 Search for Links & Mentions" to:
1. Search for "bay islands" keywords
2. Check search engine results
3. Find where Bay Islands ranks
4. Identify new linking opportunities

### Manual Mention Entry

Track specific mentions:
- **Query**: Search term (e.g., "bay islands rubbish management")
- **URL**: Where found (the page/site mentioning Bay Islands)
- **Date**: When discovered

### Integration with APIs (Advanced)

For automated monitoring, integrate:

#### Google Search Console API
- Real-time search performance data
- Query analytics and click tracking
- Core Web Vitals monitoring

#### SEMrush/Ahrefs/Moz APIs
- Backlink analysis
- Keyword rankings
- Competitor tracking
- Mention detection

#### Social Media APIs
- Brand mention alerts
- Sentiment analysis
- Engagement metrics

---

## 5. Environment Variables

### Required

```bash
# .env.local or deployment config
NEXT_PUBLIC_ALLOW_INDEXING=false  # Start with false (development)
```

### Optional (For Advanced Features)

```bash
# Google APIs (if integrating Indexing API)
GOOGLE_SERVICE_ACCOUNT_EMAIL=
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY=

# Bing APIs
BING_WEBMASTER_KEY=

# SEMrush/Ahrefs/Moz (if using for monitoring)
SEMRUSH_API_KEY=
AHREFS_API_KEY=
MOZ_API_KEY=
```

---

## 6. Workflow: Development → Production

### Phase 1: Development (Weeks 1-4)
```
NEXT_PUBLIC_ALLOW_INDEXING=false
├─ Site is hidden from search engines
├─ Robots.txt blocks all crawling
├─ Build, test, iterate safely
└─ No need to worry about SEO yet
```

### Phase 2: Pre-Launch (Week 5)
```
Still NEXT_PUBLIC_ALLOW_INDEXING=false
├─ Final content review
├─ Technical SEO audit
├─ Set up Search Console & Bing Webmaster
├─ Verify site ownership
└─ Prepare sitemaps
```

### Phase 3: Launch (Week 6)
```
NEXT_PUBLIC_ALLOW_INDEXING=true
├─ Update environment variable
├─ Rebuild/redeploy application
├─ robots.txt now allows crawling
├─ Click "Submit to Search Engines"
├─ Monitor Search Console for results
└─ Track indexing progress
```

### Phase 4: Monitoring (Ongoing)
```
Check /admin/seo weekly:
├─ Monitor Search Console
├─ Track backlinks
├─ Watch for search mentions
├─ Update backlink entries
└─ Add new internal pages to tracking
```

---

## 7. Local SEO Advantage

### Why This Matters for Bay Islands

Bay Islands is a **local destination** — leverage local SEO:

#### Local Citations
- Add to local directories (TrueLocal, Local.com.au, Yelp)
- Consistent NAP (Name, Address, Phone)
- Local business categories

#### Local Keywords
- "Things to do Bay Islands"
- "Bay Islands accommodation"
- "SMBI transport services"
- "Russell Island attractions"

#### Local Backlinks
- Redland City Council
- Tourism Queensland
- Local news outlets
- Community associations

#### Local Schema
- Already implemented: Organization, LocalBusiness, Article
- Add: Events, FAQPage, BreadcrumbList

---

## 8. Admin Panel Features

### 🤖 Indexing Tab
- [ ] Toggle indexing on/off
- [ ] View current robots.txt status
- [ ] Understand indexing impact
- [ ] Submit to search engines (one-click)

### 🔗 Backlinks Tab
- [ ] Add/edit backlinks
- [ ] Track link status (active/broken)
- [ ] Organize by type (backlink/reciprocal/social/directory)
- [ ] View full link details
- [ ] Delete outdated links

### 📢 Mentions Tab
- [ ] Run internet search for mentions
- [ ] Track search result position
- [ ] Manually add discovered mentions
- [ ] Monitor brand visibility
- [ ] Identify linking opportunities

---

## 9. Technical Implementation

### Files Created

```
app/robots.ts
├─ Dynamic robots.txt generation based on env var
├─ Blocks crawling when NEXT_PUBLIC_ALLOW_INDEXING=false
└─ Allows crawling when NEXT_PUBLIC_ALLOW_INDEXING=true

app/admin/seo/page.tsx
├─ Full admin interface
├─ Indexing toggle
├─ Backlink management
├─ Mention tracking
└─ Search engine submission

app/api/admin/seo/toggle-indexing/route.ts
├─ API for toggling indexing status
├─ Logs change events
└─ Returns deployment instructions

app/api/admin/seo/search-mentions/route.ts
├─ Search for mentions across web
├─ Integrates with search APIs
├─ Returns results and recommendations
└─ Provides API suggestions

app/api/admin/seo/submit-search-engines/route.ts
├─ Submit sitemap to Google, Bing, DuckDuckGo
├─ Returns verification steps
├─ Provides next actions
└─ Includes API integration options
```

### Routes Added

```
/admin/seo                              → SEO Control Panel
/api/admin/seo/toggle-indexing          → Toggle indexing endpoint
/api/admin/seo/search-mentions          → Search mentions endpoint
/api/admin/seo/submit-search-engines    → Submit to search engines endpoint
```

---

## 10. Next Steps

### Immediate (Today)
- [ ] Review this documentation
- [ ] Set `NEXT_PUBLIC_ALLOW_INDEXING=false` in .env.local
- [ ] Test `/admin/seo` admin panel
- [ ] Verify backlink/mention tracking UI works

### Before Launch (Week 5)
- [ ] Set up Google Search Console
- [ ] Set up Bing Webmaster Tools
- [ ] Verify site ownership in both
- [ ] Add key local directories (TrueLocal, etc.)
- [ ] Compile list of backlink targets

### At Launch (Week 6)
- [ ] Change to `NEXT_PUBLIC_ALLOW_INDEXING=true`
- [ ] Rebuild and deploy
- [ ] Click "Submit to Search Engines" in admin
- [ ] Monitor Search Console daily for first week

### After Launch (Ongoing)
- [ ] Check Search Console weekly
- [ ] Monitor search rankings
- [ ] Add new backlinks as discovered
- [ ] Track mentions
- [ ] Build local citations

---

## 11. FAQ

**Q: What happens if I enable indexing too early?**
A: Search engines may crawl incomplete content. Keep it disabled during development; enable only when ready for public visibility.

**Q: Can I re-disable indexing after enabling it?**
A: Yes. Change the env var back to `false`, redeploy, and robots.txt will block crawling again. Existing index entries will gradually be removed over time.

**Q: How long does indexing take?**
A: Usually 24-72 hours for initial pages. Bing is faster; Google can be slower. Submit sitemap in Search Console to speed it up.

**Q: What's the difference between robots.txt and meta robots?**
A: robots.txt is global (blocks all); meta robots tags are per-page (e.g., `noindex` on admin pages).

**Q: Do I need to submit every URL or just sitemap?**
A: Submitting sitemap is enough. Search engines crawl the sitemap and find all pages.

**Q: How do I monitor if indexing is working?**
A: Use Search Console → Coverage to see how many pages are indexed and any errors.

---

## 12. Support & Resources

### Official Search Engine Tools
- **Google**: https://search.google.com/search-console
- **Bing**: https://www.bing.com/webmaster
- **DuckDuckGo**: https://duckduckgo.com/search/submit

### SEO Learning
- **Google SEO Starter Guide**: https://developers.google.com/search/docs/beginner/seo-starter-guide
- **Moz Beginner's Guide to SEO**: https://moz.com/beginners-guide-to-seo
- **Yoast SEO Blog**: https://yoast.com/seo/

### Backlink Monitoring Tools
- **Google Search Console** (free)
- **Bing Webmaster Tools** (free)
- **SEMrush** ($99+/month)
- **Ahrefs** ($199+/month)
- **Moz** ($99+/month)

---

**Last Updated**: January 23, 2026  
**Version**: v0.0.5  
**Status**: Production Ready
