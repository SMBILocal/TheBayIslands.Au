import Link from "next/link"

const sections = [
  { title: "Explore", links: [
    { href: "/", label: "Home" },
    { href: "/directory", label: "Business Directory" },
    { href: "/articles", label: "Articles" },
    { href: "/events", label: "Events" },
    { href: "/classifieds", label: "Classifieds" },
    { href: "/jobs", label: "Jobs" },
  ]},
  { title: "Account", links: [
    { href: "/login", label: "Login" },
    { href: "/signup", label: "Sign up" },
    { href: "/upgrade", label: "Upgrade & Pricing" },
  ]},
  { title: "Legal", links: [
    { href: "/terms", label: "Terms of Service" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/refunds", label: "Refund & Cancellation" },
    { href: "/cookies", label: "Cookies Policy" },
    { href: "/environment", label: "Environmental Commitment" },
  ]},
];

export default function SiteMapPage() {
  return (
    <main style={{maxWidth: 960, margin: '0 auto', padding: '48px 20px', lineHeight: 1.6}}>
      <h1 style={{fontSize: 32, fontWeight: 700, marginBottom: 16}}>Sitemap</h1>
      <p style={{color: '#475569', marginBottom: 32}}>Quick links to the main areas of thebayislands.au.</p>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24}}>
        {sections.map((section) => (
          <div key={section.title} style={{border: '1px solid #e2e8f0', borderRadius: 12, padding: 20, background: '#fff'}}>
            <h2 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>{section.title}</h2>
            <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8}}>
              {section.links.map(link => (
                <li key={link.href}>
                  <Link href={link.href} style={{color: '#0ea5e9', textDecoration: 'none'}}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
