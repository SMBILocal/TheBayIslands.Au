import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Local Radio Stations | Bay Islands Radio 88.0 FM | The Bay Islands',
  description:
    'Stream Bay Islands Radio (88.0 FM) and discover local community stations serving Russell Island, Macleay Island, Lamb Island & Redland City. Complete directory of Brisbane accessible FM stations.',
  keywords: [
    'Bay Islands Radio',
    '88.0 FM',
    'Local radio stations',
    'Moreton Bay Islands',
    'Russell Island',
    'Macleay Island',
    'Lamb Island',
    'Bay FM',
    'community radio',
    'Brisbane radio',
    'streaming radio',
  ],
  openGraph: {
    title: 'Local Radio Stations - Bay Islands Radio & Community Broadcasting',
    description:
      'Tune into Bay Islands Radio (88.0 FM) and explore all accessible local and regional FM stations.',
    type: 'website',
    url: 'https://thebayislands.au/radio',
    images: [
      {
        url: 'https://thebayislands.au/og-radio.png',
        width: 1200,
        height: 630,
        alt: 'Bay Islands Radio 88.0 FM',
      },
    ],
  },
  alternates: {
    canonical: 'https://thebayislands.au/radio',
  },
};

export default function RadioLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Schema.org Structured Data for BroadcastService */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BroadcastService',
            '@id': 'https://thebayislands.au/radio',
            name: 'Bay Islands Radio & Local Community Stations',
            url: 'https://thebayislands.au/radio',
            description:
              'Community radio stations and local broadcasts serving the Bay Islands and surrounding region',
            broadcastServiceType: 'PUBLIC_RADIO',
            broadcastFrequency: [
              {
                '@type': 'BroadcastFrequency',
                frequency: '88.0',
                frequencyUnit: 'MHz FM',
              },
              {
                '@type': 'BroadcastFrequency',
                frequency: '100.3',
                frequencyUnit: 'MHz FM',
              },
            ],
            serviceArea: {
              '@type': 'Place',
              name: 'Moreton Bay Islands & Brisbane Region',
              geo: {
                '@type': 'GeoShape',
                box: '-27.6 153.1 -27.5 153.2',
              },
            },
            potentialAction: {
              '@type': 'ListenAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://thebayislands.au/radio',
              },
            },
          }),
        }}
      />

      {/* Schema.org LocalBusiness for Bay Islands Radio */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Bay Islands Radio',
            description: 'Community radio serving Russell Island, Macleay Island, Lamb Island',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Russell Island',
              addressRegion: 'QLD',
              postalCode: '4184',
              addressCountry: 'AU',
            },
            telephone: '+61 7 3409 XXXX',
            url: 'https://thebayislands.au/radio',
            areaServed: [
              {
                '@type': 'City',
                name: 'Russell Island',
              },
              {
                '@type': 'City',
                name: 'Macleay Island',
              },
              {
                '@type': 'City',
                name: 'Lamb Island',
              },
            ],
          }),
        }}
      />

      {/* Schema.org BroadcastFrequency List */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'FM Radio Stations',
            description: 'List of all accessible FM radio stations in Bay Islands region',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Bay Islands Radio',
                frequency: '88.0 MHz FM',
                format: 'Community Variety',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Bay FM',
                frequency: '100.3 MHz FM',
                format: 'Community Radio',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: '96five',
                frequency: '96.5 MHz FM',
                format: 'Christian Community',
              },
              {
                '@type': 'ListItem',
                position: 4,
                name: '4AAA',
                frequency: '98.9 MHz FM',
                format: 'Indigenous Community',
              },
              {
                '@type': 'ListItem',
                position: 5,
                name: '4EB',
                frequency: '98.1 MHz FM',
                format: 'Multilingual Community',
              },
              {
                '@type': 'ListItem',
                position: 6,
                name: 'Rebel FM',
                frequency: '99.4 MHz FM',
                format: 'Rock Format',
              },
              {
                '@type': 'ListItem',
                position: 7,
                name: '4MBS Classic FM',
                frequency: '103.7 MHz FM',
                format: 'Classical Music',
              },
              {
                '@type': 'ListItem',
                position: 8,
                name: '4ZZZ',
                frequency: '102.1 MHz FM',
                format: 'Independent Community',
              },
              {
                '@type': 'ListItem',
                position: 9,
                name: 'Triple J',
                frequency: '107.7 MHz FM',
                format: 'Youth Broadcasting',
              },
              {
                '@type': 'ListItem',
                position: 10,
                name: 'Nova',
                frequency: '106.9 MHz FM',
                format: 'Commercial Pop',
              },
            ],
          }),
        }}
      />

      {children}
    </>
  );
}
