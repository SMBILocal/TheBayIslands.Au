import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Local Radio Stations | Bay Islands & Brisbane',
  description: 'Guide to local radio stations including Bay Islands Radio 88.0 FM, Triple M Brisbane, and all major Brisbane radio stations.',
  keywords: 'Bay Islands Radio, 88.0 FM, Brisbane radio stations, local radio Queensland',
};

const RADIO_STATIONS = [
  {
    name: 'Bay Islands Radio',
    frequency: '88.0 FM',
    type: 'Community',
    description: 'Local community radio serving the Southern Moreton Bay Islands',
    website: 'https://www.bayislandsradio.com.au/',
    stream: 'Available online',
    coverage: 'Bay Islands'
  },
  {
    name: 'Triple M Brisbane',
    frequency: '104.5 FM',
    type: 'Commercial',
    description: 'Active rock, classic rock, sports commentary (AFL/NRL)',
    website: 'https://www.triplem.com.au/brisbane',
    stream: 'Live streaming available',
    coverage: 'Brisbane & Bay Islands'
  },
  {
    name: 'B105',
    frequency: '105.3 FM',
    type: 'Commercial',
    description: 'Top 40 / Contemporary Hits',
    website: 'https://www.b105.com.au/',
    stream: 'Live streaming',
    coverage: 'Brisbane region'
  },
  {
    name: 'Nova 106.9',
    frequency: '106.9 FM',
    type: 'Commercial',
    description: 'Pop hits and entertainment',
    website: 'https://www.nova.com.au/brisbane',
    stream: 'Live streaming',
    coverage: 'Brisbane region'
  },
  {
    name: 'KIIS 97.3',
    frequency: '97.3 FM',
    type: 'Commercial',
    description: 'Contemporary hits',
    website: 'https://www.kiis973.com.au/',
    stream: 'Live streaming',
    coverage: 'Brisbane region'
  },
  {
    name: 'Triple J',
    frequency: '107.7 FM',
    type: 'ABC',
    description: 'Youth / alternative music',
    website: 'https://www.abc.net.au/triplej/',
    stream: 'ABC Listen app',
    coverage: 'National'
  },
  {
    name: 'ABC Brisbane',
    frequency: '612 AM / 91.7 FM',
    type: 'ABC',
    description: 'News, talk, and local content',
    website: 'https://www.abc.net.au/brisbane',
    stream: 'ABC Listen app',
    coverage: 'Brisbane & region'
  },
  {
    name: 'ABC Classic',
    frequency: '106.1 FM',
    type: 'ABC',
    description: 'Classical music',
    website: 'https://www.abc.net.au/classic/',
    stream: 'ABC Listen app',
    coverage: 'National'
  },
  {
    name: '4KQ',
    frequency: '693 AM',
    type: 'Commercial',
    description: 'Classic hits / oldies',
    website: 'https://www.4kq.com.au/',
    stream: 'Live streaming',
    coverage: 'Brisbane region'
  }
];

export default function RadioPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <Link href="/media" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to Media
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          📻 Local Radio Stations
        </h1>
        <p className="text-xl text-gray-600">
          Your guide to radio stations serving the Bay Islands and Brisbane region
        </p>
      </div>

      <section className="bg-blue-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4">🌊 Bay Islands Radio 88.0 FM</h2>
        <p className="text-gray-700 mb-4">
          Bay Islands Radio is your local community station broadcasting on 88.0 FM across the 
          Southern Moreton Bay Islands. Tune in for local news, community announcements, and island-focused content.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-bold mb-2">Listen Online</h3>
            <p className="text-gray-700 text-sm mb-2">Stream live via:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Official website</li>
              <li>• TuneIn Radio app</li>
              <li>• myTuner Radio app</li>
              <li>• Online Radio Box</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Contact</h3>
            <p className="text-gray-700 text-sm">
              Website: <a href="https://www.bayislandsradio.com.au/" target="_blank" rel="noopener noreferrer" 
                className="text-blue-600 hover:underline">bayislandsradio.com.au</a>
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">All Radio Stations</h2>
        <div className="space-y-6">
          {RADIO_STATIONS.map((station) => (
            <div key={station.frequency} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold">{station.name}</h3>
                  <div className="flex gap-3 mt-1">
                    <span className="text-blue-600 font-semibold">{station.frequency}</span>
                    <span className="text-gray-500 text-sm">• {station.type}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-3">{station.description}</p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-semibold">Coverage:</span> {station.coverage}
                </div>
                <div>
                  <span className="font-semibold">Streaming:</span> {station.stream}
                </div>
                {station.website && (
                  <div>
                    <a href={station.website} target="_blank" rel="noopener noreferrer"
                      className="text-blue-600 hover:underline">
                      Visit Website →
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4">📱 How to Listen</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-bold mb-3">📻 FM/AM Radio</h3>
            <p className="text-gray-700 text-sm">
              Traditional radio receivers pick up all local stations across the Bay Islands and Brisbane
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-3">🌐 Online Streaming</h3>
            <p className="text-gray-700 text-sm">
              Most stations offer live streaming via their websites and popular radio apps
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-3">📲 Mobile Apps</h3>
            <p className="text-gray-700 text-sm">
              Download TuneIn, myTuner, or ABC Listen for convenient mobile access
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Station Types</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-bold mb-2">Community</h3>
            <p className="text-gray-700">Local, non-profit stations focused on community content and local issues</p>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-bold mb-2">Commercial</h3>
            <p className="text-gray-700">Music, entertainment, and news from major broadcasting networks</p>
          </div>
          <div className="border-l-4 border-amber-500 pl-4">
            <h3 className="font-bold mb-2">ABC/Public</h3>
            <p className="text-gray-700">National broadcaster providing news, music, and cultural programming</p>
          </div>
        </div>
      </section>

      <section className="border-t pt-8">
        <h2 className="text-2xl font-bold mb-4">Streaming Services</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <a href="https://tunein.com/" target="_blank" rel="noopener noreferrer"
            className="p-4 border rounded hover:border-blue-500 hover:shadow-md transition-all">
            <h3 className="font-semibold mb-1">TuneIn Radio</h3>
            <p className="text-sm text-gray-600">Stream thousands of stations</p>
          </a>
          <a href="https://mytuner-radio.com/" target="_blank" rel="noopener noreferrer"
            className="p-4 border rounded hover:border-blue-500 hover:shadow-md transition-all">
            <h3 className="font-semibold mb-1">myTuner Radio</h3>
            <p className="text-sm text-gray-600">Global radio directory</p>
          </a>
          <a href="https://www.abc.net.au/listen/" target="_blank" rel="noopener noreferrer"
            className="p-4 border rounded hover:border-blue-500 hover:shadow-md transition-all">
            <h3 className="font-semibold mb-1">ABC Listen</h3>
            <p className="text-sm text-gray-600">All ABC radio networks</p>
          </a>
          <a href="https://onlineradiobox.com/" target="_blank" rel="noopener noreferrer"
            className="p-4 border rounded hover:border-blue-500 hover:shadow-md transition-all">
            <h3 className="font-semibold mb-1">Online Radio Box</h3>
            <p className="text-sm text-gray-600">Listen online</p>
          </a>
        </div>
      </section>
    </main>
  );
}
