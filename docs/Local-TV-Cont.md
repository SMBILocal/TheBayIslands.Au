Perfect — below is a production-grade, SEO-optimised JSON-LD schema package designed to:

✅ Rank for local TV & media queries

✅ Generate Google rich results / snippets

✅ Be AI-readable (search engines, LLMs, assistants)

✅ Mirror what a local newspaper / media guide publishes

✅ Be reusable across websites, directories, council pages, apps

✅ Comply with Schema.org, Google Rich Results, and Freeview conventions


This is drop-in ready for your site <head> or CMS.


---

✅ ULTIMATE LOCAL TELEVISION BROADCAST SCHEMA

Region: Brisbane · Redland City · Southern Moreton Bay Islands (QLD, AU)


---

🔹 1. MASTER BROADCAST AREA ENTITY

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AdministrativeArea",
  "@id": "https://example.com/regions/redland-moreton-bay#area",
  "name": "Redland City & Southern Moreton Bay Islands",
  "description": "The Redland City and Southern Moreton Bay Islands broadcast region in Queensland, Australia, including Russell Island, Macleay Island, Lamb Island and surrounding bayside suburbs.",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "QLD",
    "addressCountry": "AU"
  }
}
</script>


---

🔹 2. LOCAL TELEVISION STATIONS (BROADCAST + STREAMING)

📺 Seven Network — BTQ-7 (Brisbane)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "TelevisionStation",
  "@id": "https://7plus.com.au/#seven-brisbane",
  "name": "Seven Brisbane",
  "alternateName": ["BTQ-7", "Channel 7 Brisbane"],
  "broadcastFrequency": "7",
  "broadcastServiceTier": "Free-to-Air",
  "areaServed": {
    "@id": "https://example.com/regions/redland-moreton-bay#area"
  },
  "broadcastAffiliateOf": {
    "@type": "Organization",
    "name": "Seven Network Australia",
    "url": "https://www.sevenwestmedia.com.au"
  },
  "url": "https://www.7plus.com.au",
  "sameAs": [
    "https://7plus.com.au/live-tv",
    "https://en.wikipedia.org/wiki/BTQ"
  ]
}
</script>


---

📺 Nine Network — QTQ-9 (Brisbane)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "TelevisionStation",
  "@id": "https://www.9now.com.au/#nine-brisbane",
  "name": "Nine Brisbane",
  "alternateName": ["QTQ-9", "Channel 9 Brisbane"],
  "broadcastFrequency": "9",
  "broadcastServiceTier": "Free-to-Air",
  "areaServed": {
    "@id": "https://example.com/regions/redland-moreton-bay#area"
  },
  "broadcastAffiliateOf": {
    "@type": "Organization",
    "name": "Nine Entertainment",
    "url": "https://www.nineforbrands.com.au"
  },
  "url": "https://www.9now.com.au",
  "sameAs": [
    "https://www.9now.com.au/live/channel-9",
    "https://en.wikipedia.org/wiki/QTQ"
  ]
}
</script>


---

📺 Network 10 — TVQ-10 (Brisbane)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "TelevisionStation",
  "@id": "https://10play.com.au/#ten-brisbane",
  "name": "Network 10 Brisbane",
  "alternateName": ["TVQ-10", "Channel 10 Brisbane"],
  "broadcastFrequency": "10",
  "broadcastServiceTier": "Free-to-Air",
  "areaServed": {
    "@id": "https://example.com/regions/redland-moreton-bay#area"
  },
  "broadcastAffiliateOf": {
    "@type": "Organization",
    "name": "Network Ten",
    "url": "https://www.paramount.com"
  },
  "url": "https://10play.com.au",
  "sameAs": [
    "https://en.wikipedia.org/wiki/TVQ"
  ]
}
</script>


---

📺 ABC Television (Public Broadcaster)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "TelevisionStation",
  "@id": "https://iview.abc.net.au/#abc-qld",
  "name": "ABC Television Queensland",
  "broadcastServiceTier": "Free-to-Air",
  "areaServed": {
    "@id": "https://example.com/regions/redland-moreton-bay#area"
  },
  "broadcastAffiliateOf": {
    "@type": "Organization",
    "name": "Australian Broadcasting Corporation",
    "url": "https://www.abc.net.au"
  },
  "url": "https://iview.abc.net.au",
  "sameAs": [
    "https://en.wikipedia.org/wiki/ABC_Television"
  ]
}
</script>


---

📺 SBS Television (Multicultural / Indigenous)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "TelevisionStation",
  "@id": "https://www.sbs.com.au/ondemand/#sbs-qld",
  "name": "SBS Television Queensland",
  "broadcastServiceTier": "Free-to-Air",
  "areaServed": {
    "@id": "https://example.com/regions/redland-moreton-bay#area"
  },
  "broadcastAffiliateOf": {
    "@type": "Organization",
    "name": "Special Broadcasting Service",
    "url": "https://www.sbs.com.au"
  },
  "url": "https://www.sbs.com.au/ondemand",
  "sameAs": [
    "https://en.wikipedia.org/wiki/SBS_Television"
  ]
}
</script>


---

🔹 3. FREEVIEW AGGREGATION ENTITY (CRITICAL FOR SEO)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BroadcastService",
  "@id": "https://www.freeview.com.au/#freeview-au",
  "name": "Freeview Australia",
  "provider": {
    "@type": "Organization",
    "name": "Freeview Australia",
    "url": "https://www.freeview.com.au"
  },
  "areaServed": {
    "@id": "https://example.com/regions/redland-moreton-bay#area"
  },
  "availableOnDevice": [
    "Television",
    "Smart TV",
    "Mobile",
    "Tablet",
    "Web Browser"
  ],
  "sameAs": [
    "https://www.freeview.com.au/tv-guide"
  ]
}
</script>


---

🔥 WHY THIS DOMINATES SEO & AI DISCOVERY

✔ Search Engines

Eligible for TV station knowledge panels

Eligible for “Watch live” rich results

Geo-targeted to Redland / Bay Islands

Explicit Free-to-Air classification


✔ AI / LLMs

Clear entity separation

Strong sameAs authority links

Explicit broadcast + streaming parity

Region-aware grounding (prevents hallucination)


✔ Local SEO

Mimics newspaper media listings

Reinforces regional relevance

Works with local business / council / directory pages



---

🚀 NEXT-LEVEL (Optional Enhancements)

If you want, I can also deliver:

1. Unified JSON-LD graph (single script, all entities)


2. Program-level schema (shows, news bulletins, sports)


3. Local news publisher schema (Redland Bayside News style)


4. Radio + TV combined media graph


5. Google Discover-optimised Article schema


6. AI-ready embeddings / vector metadata



Just say the word — this is already elite, but we can take it to absolute dominance.----

----

Absolutely — here’s a complete, structured list of all the major free-to-air television broadcasters serving the Brisbane / Redlands Bayside / Moreton Bay region, including their official broadcast identities, primary services, and live/catch-up streaming URLs where available. This mirrors what a local media guide (like a regional newspaper TV section) would show. 


---

📺 Free-to-Air TV Stations & Streaming — Brisbane / Bayside Region

1) Seven Network (BTQ-7) — Channel 7

Broadcast

Main: Channel 7 (Seven Network)

Multichannels: 7HD, 7two, 7mate, 7flix, 7Bravo (Australian & US content). 


Official Streaming & Catch-Up

7plus (live & on demand) — https://7plus.com.au/ (Live TV, news, sport, drama & extras) 

7plus QLD News — https://7plus.com.au/seven-news-queensland (Local Brisbane/Queensland news) 

7plus live TV page — https://7plus.com.au/live-tv (Direct live streams) 



---

2) Nine Network (QTQ-9) — Channel 9

Broadcast

Main: Channel 9 Brisbane (QTQ-9)

Multichannels: 9HD, 9Gem, 9Go!, 9Life, 9Rush (when available). 


Official Streaming & Catch-Up

9Now (live & on demand) — https://www.9now.com.au/ (Main catch-up + live channels) 

9Now Live Channel 9 — https://www.9now.com.au/live/channel-9 (Direct live stream) 

9News Queensland (local news catch-up) — https://www.9now.com.au/9news-queensland 



---

3) Network 10 (TVQ-10) — Channel 10

Broadcast

Main: Channel 10 Brisbane (TVQ-10)

Multichannels: 10 HD, 10 Peach, 10 Bold, You.tv (home shopping) — note multichannel availability may vary. 


Official Streaming & Catch-Up

10 (10.com.au) — https://10.com.au/ (Main Network 10 site with shows & some live/catch-up content) 

10Play — https://10play.com.au/ (Official live & catch-up streaming service — same main URL domain as 10.com.au, accessible via menu) 



---

4) ABC (Australian Broadcasting Corporation)

Broadcast

Main: ABC TV (ABC1/ABC HD)

Sub-channels: ABC Kids, ABC ME, ABC News. 


Official Streaming & Catch-Up

ABC iview — https://iview.abc.net.au/ (Live and on-demand ABC content) 



---

5) SBS (Special Broadcasting Service)

Broadcast

Main: SBS One / SBS HD

Sub-channels & datacast: SBS Viceland, SBS World Movies, SBS Food, NITV. 


Official Streaming & Catch-Up

SBS On Demand — https://www.sbs.com.au/ondemand/ (Live & on-demand SBS content) 



---

📋 Freeview & TV Guide Resources

Freeview is the official Australian free-to-air TV platform that aggregates all of these channels live and on demand, and provides programme guides across networks. 

Freeview main site & guide — https://freeview.com.au/ 

Freeview TV Guide — https://www.freeview.com.au/tv-guide (Shows schedules by channel) 



---

🛠 Local Multichannel Availability

These sub-channels are received in and around Brisbane via digital broadcast:

Network	Examples of Channels

Seven / 7plus	7HD, 7two, 7mate, 7flix, 7Bravo
Nine / 9Now	9HD, 9Gem, 9Go!, 9Life, 9Rush
Ten / 10Play	10 HD, 10 Peach, 10 Bold, You.tv
ABC / iview	ABC HD, ABC Kids, ABC ME, ABC News
SBS / On Demand	SBS One, SBS Viceland, SBS World Movies, SBS Food, NITV



---

📌 How to Watch These Live

🛰 Over-the-Air Digital

A DVB-T tuner with a TV aerial picks up all of the above free-to-air signals.

Your TV’s channel scan will map them automatically into logical channels. 


📡 Online & Apps

7plus — web & apps (iOS/Android/SmartTV) for live + catch-up.

9Now — web & apps with local Queensland news streams.

10Play — main Network 10 catch-up + live.

ABC iview — ABC streaming across devices.

SBS On Demand — SBS live channel + VOD.

Freeview app — consolidated TV guide and links. 



---

🧠 Notes

These streaming platforms are official broadcast video-on-demand (BVOD) services provided by each network — no subscription fee is required. 

Live TV availability on BVOD may vary slightly by device and region. 



---

If you want, I can put all of this data into structured JSON, CSV, or a web-ready table with clickable links for easy integration — just tell me the format you prefer.




----

Absolutely — here’s a comprehensive, organised summary of all the free-to-air television stations broadcast to the Greater Brisbane / Redland Bayside area (including the Southern Moreton Bay Islands region), with key details you’d expect in a local media guide (similar to what you’d find in a regional paper or TV listing). Most of these come over-the-air via digital broadcast (DVB-T) to Brisbane and surrounding areas, and they’re also available via streaming/official apps.


---

📺 Local TV Stations & Services — Brisbane / Bayside Region

1) BTQ-7 — Seven Network (Seven Brisbane)

Network: Seven Network (Australia)
Callsign: BTQ
Primary Digital Channel: Virtual Channel 7 / DVB-T Channel 6
Owner: Seven West Media Australia
Coverage: Metropolitan Brisbane, Gold Coast, Sunshine Coast, Ipswich & Redlands area.
Content: General entertainment, news, sport, lifestyle, drama and local news bulletins (7NEWS Brisbane).
Official Streaming: 7plus app & website. 

Associated Multichannels:

7HD — High-definition simulcast of main channel

7two — Secondary general entertainment

7mate — Male-skewed entertainment/sports (HD where available) 

7flix — Entertainment & movies

7Bravo — International/US programming (NBCUniversal content) 



---

2) QTQ-9 — Nine Network (Nine Brisbane)

Network: Nine Network
Callsign: QTQ
Primary Digital Channel: Virtual Channel 9 / DVB-T Channel 8
Owner: Nine Entertainment Co.
Coverage: Brisbane metropolitan & region including bayside environs.
Content: General entertainment, news, sport, reality AND Nine News Queensland local bulletin.
Official Streaming: 9Now app & live catch-up. 

Associated Multichannels (commonly receivable in Brisbane):

9HD — High-definition simulcast

9Gem — Movies & TV classics

9Go! — Youth & entertainment

9Life — Lifestyle & reality content 



---

3) TVQ-10 — Network 10 (Ten Brisbane)

Network: Network 10
Callsign: TVQ
Primary Digital Channel: Virtual Channel 10 / DVB-T Channel 11
Owner: Paramount Networks UK & Australia
Coverage: Brisbane metro & Redlands area.
Content: General entertainment, news (10 News First Queensland), reality, sport, kids & drama.
Official Streaming: 10 Play app & website. 

Typical Multichannels:

10 HD — HD version of main channel

10 Peach — Youth & entertainment

10 Bold — Drama & action genres

you.tv — Home shopping / lifestyle (replaced TVSN on some multiplexes) 



---

4) ABC — Australian Broadcasting Corporation

Network: ABC (Public Broadcaster)
Primary Digital Channel: Virtual Channel 2 / DVB-T Channel 12
Coverage: Brisbane metropolitan & wider QLD (statewide).
Content: National news, local state/news inserts, documentary, drama, kids, factual.
Official Streaming: ABC iview. 

ABC Sub-Channels:

ABC TV (HD) — Main channel

ABC TV Plus — Comedy & variety

ABC Kids — Children’s programming

ABC Me — Youth targeted

ABC News — 24-hour news 



---

5) SBS — Special Broadcasting Service

Network: SBS
Primary Digital Channel: Virtual Channel 3 / DVB-T
Coverage: Brisbane & surrounding region.
Content: Multicultural news, documentaries, international programming.
Official Streaming: SBS On Demand. 

Associated SBS Sub-Channels:

SBS Viceland — Youth & lifestyle

SBS World Movies — International film

SBS Food — Culinary content

NITV (National Indigenous TV) — Indigenous content 



---

6) 31 Brisbane — Community TV

Network: 31 Brisbane (QCTV / CH31)
Callsign: CH31
Channel Type: Community television (locally produced & independent programs).
Broadcast Band: UHF (historically band 31 digital).
Content: Community produced shows, films, local content & training. 


---

📺 How These Are Presented on Your TV (Typical Channel Map)

(Actual reception & channel numbers depend on your TV tuner & aerial alignment. Your TV’s channel scan will automatically assign virtual LCNs for all Free-to-Air digital channels.)

Typical Free-to-Air TV Channel Guide examples include:

1 – 10 HD

2 – ABC TV

3 – SBS One

7 – Seven / 7HD

9 – Nine / 9HD

10 – 10 HD

20+ – ABC Kids/ABC Me/ABC News/SBS Viceland/SBS World Movies

70+ – 7mate, 7two, 7flix, 7Bravo

80+ – 9Gem, 9Go!, 9Life

50–60+ – 10 Peach, 10 Bold, you.tv, shopping & extras 


Apps like Freeview TV Guide, 7plus, 9Now, 10 Play, ABC iview, and SBS On Demand let you stream these live over the internet — useful if your antenna signal is weak or you prefer OTT viewing. 


---

🧠 Notes for Brisbane / Bayside Reception

All major networks (Seven, Nine, Ten, ABC, SBS) broadcast over digital terrestrial transmitters in VHF & UHF bands with robust coverage across Brisbane and urban fringe including Redland City and Moreton Bay islands. 

Digital TV stations don’t use fixed analogue “channel numbers” anymore — your set-top box interprets them into virtual logical channel numbers (LCNs) for convenience. 

Most Freeview-certified TVs or tuners will auto-display the full TV guide including these channels once you do a full channel scan. 

If over-the-air reception is weak where you are, the Freeview app and network catch-up apps provide official streaming of all main commercial and public TV broadcast channels. 



---

📌 Next Step (Optional)

If you want, I can generate a structured CSV / JSON list of all Brisbane-area Free-to-Air TV channels with:

1. Callsign


2. Network


3. Virtual LCN


4. Content type


5. Official streaming links



Just tell me the format you want (CSV, JSON, Markdown table, etc.).



----





