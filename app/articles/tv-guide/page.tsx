import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'TV Stations & Guide | Brisbane & Bay Islands',
  description: 'Free-to-air TV stations, streaming options, and viewing guide for Brisbane and Bay Islands region.',
  keywords: 'Brisbane TV stations, free to air TV, Channel 7 Brisbane, Channel 9 Queensland, ABC TV',
};

const TV_STATIONS = [
  {
    name: 'Channel 7 Brisbane',
    channel: '7',
    description: 'Local Queensland news, sport, and entertainment',
    website: 'https://7news.com.au/queensland',
    streaming: '7plus app',
    coverage: 'Brisbane & Bay Islands'
  },
  {
    name: 'Channel 9 Brisbane',
    channel: '9',
    description: 'Queensland and national news, sport, entertainment',
    website: 'https://www.9news.com.au/queensland',
    streaming: '9Now app',
    coverage: 'Brisbane & Bay Islands'
  },
  {
    name: 'Channel 10',
    channel: '10',
    description: 'Entertainment, news, and sport',
    website: 'https://10play.com.au/',
    streaming: '10 play app',
    coverage: 'National'
  },
  {
    name: 'ABC Queensland',
    channel: '2',
    description: 'National broadcaster with local Queensland news',
    website: 'https://www.abc.net.au/news/queensland/',
    streaming: 'ABC iview',
    coverage: 'National'
  },
  {
    name: 'SBS',
    channel: '3',
    description: 'Multicultural programs and news',
    website: 'https://www.sbs.com.au/',
    streaming: 'SBS On Demand',
    coverage: 'National'
  }
];

const DIGITAL_CHANNELS = [
  { name: '7TWO', parent: 'Seven', description: 'Movies and classic shows' },
  { name: '7mate', parent: 'Seven', description: 'Sport and entertainment' },
  { name: '7flix', parent: 'Seven', description: 'Drama and movies' },
  { name: '9Gem', parent: 'Nine', description: 'General entertainment' },
  { name: '9Go!', parent: 'Nine', description: 'Youth-focused content' },
  { name: '9Life', parent: 'Nine', description: 'Lifestyle programming' },
  { name: '10 Bold', parent: 'Ten', description: 'Drama and lifestyle' },
  { name: '10 Peach', parent: 'Ten', description: 'Youth entertainment' },
  { name: 'ABC ME', parent: 'ABC', description: 'Children\'s programs' },
  { name: 'ABC News', parent: 'ABC', description: '24-hour news' },
  { name: 'SBS Viceland', parent: 'SBS', description: 'Documentary and lifestyle' },
  { name: 'SBS Food', parent: 'SBS', description: 'Food and cooking' },
];

export default function TvPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <Link href="/articles" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to Articles
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          📺 TV Stations & Guide
        </h1>
        <p className="text-xl text-gray-600">
          Free-to-air television stations and streaming options for Brisbane and Bay Islands
        </p>
      </div>

      <section className="bg-blue-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4">📡 Digital TV Reception</h2>
        <p className="text-gray-700 mb-4">
          Bay Islands residents receive all major Brisbane free-to-air TV stations via digital television. 
          Most areas have good reception, though some locations may require external antennas.
        </p>
        <p className="text-gray-700">
          All stations also offer free streaming apps for watching live TV and catch-up content on 
          mobile devices, tablets, and smart TVs.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Main TV Networks</h2>
        <div className="space-y-6">
          {TV_STATIONS.map((station) => (
            <div key={station.channel} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold">{station.name}</h3>
                  <span className="text-blue-600 font-semibold">Channel {station.channel}</span>
                </div>
              </div>
              <p className="text-gray-700 mb-3">{station.description}</p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-semibold">Coverage:</span> {station.coverage}
                </div>
                <div>
                  <span className="font-semibold">Streaming:</span> {station.streaming}
                </div>
                <div>
                  <a href={station.website} target="_blank" rel="noopener noreferrer"
                    className="text-blue-600 hover:underline">
                    Visit Website →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Digital Channels</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {DIGITAL_CHANNELS.map((channel) => (
            <div key={channel.name} className="border rounded-lg p-4">
              <h3 className="font-bold mb-1">{channel.name}</h3>
              <p className="text-xs text-gray-600 mb-2">{channel.parent} Network</p>
              <p className="text-sm text-gray-700">{channel.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4">📱 Streaming Apps</h2>
        <p className="text-gray-700 mb-4">
          All major networks offer free streaming apps with live TV and catch-up content:
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-bold mb-2">📺 7plus</h3>
            <p className="text-sm text-gray-700">Channel 7 and digital channels, live and on-demand</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">📺 9Now</h3>
            <p className="text-sm text-gray-700">Channel 9 and digital channels, live and on-demand</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">📺 10 play</h3>
            <p className="text-sm text-gray-700">Channel 10 and digital channels, live and on-demand</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">📺 ABC iview</h3>
            <p className="text-sm text-gray-700">ABC programs and live channels</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">📺 SBS On Demand</h3>
            <p className="text-sm text-gray-700">SBS programs and live channels</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">🎯 Programming Highlights</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-bold mb-2">Local News</h3>
            <p className="text-gray-700">Channel 7 and 9 provide Brisbane and Queensland-focused news bulletins daily</p>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-bold mb-2">Sport</h3>
            <p className="text-gray-700">NRL, AFL, cricket, tennis, and major sporting events across all networks</p>
          </div>
          <div className="border-l-4 border-amber-500 pl-4">
            <h3 className="font-bold mb-2">Entertainment</h3>
            <p className="text-gray-700">Movies, drama, reality TV, and Australian productions</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">📶 Reception Tips</h2>
        <div className="bg-blue-50 rounded-lg p-6">
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-xl">📡</span>
              <p><strong>Antenna:</strong> External digital TV antenna recommended for best reception on the islands</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl">🔧</span>
              <p><strong>Installation:</strong> Professional installation ensures optimal signal quality</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl">🌐</span>
              <p><strong>Streaming:</strong> Use apps when over-the-air signal is weak or unavailable</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl">📍</span>
              <p><strong>Transmitter:</strong> Mt. Coot-tha is the main Brisbane transmitter serving the region</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="border-t pt-8">
        <h2 className="text-2xl font-bold mb-4">Official Sites & Apps</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="https://7plus.com.au/" target="_blank" rel="noopener noreferrer"
            className="p-4 border rounded hover:border-blue-500 hover:shadow-md transition-all">
            <h3 className="font-semibold mb-1">7plus</h3>
            <p className="text-sm text-gray-600">Channel 7 streaming</p>
          </a>
          <a href="https://www.9now.com.au/" target="_blank" rel="noopener noreferrer"
            className="p-4 border rounded hover:border-blue-500 hover:shadow-md transition-all">
            <h3 className="font-semibold mb-1">9Now</h3>
            <p className="text-sm text-gray-600">Channel 9 streaming</p>
          </a>
          <a href="https://10play.com.au/" target="_blank" rel="noopener noreferrer"
            className="p-4 border rounded hover:border-blue-500 hover:shadow-md transition-all">
            <h3 className="font-semibold mb-1">10 play</h3>
            <p className="text-sm text-gray-600">Channel 10 streaming</p>
          </a>
          <a href="https://iview.abc.net.au/" target="_blank" rel="noopener noreferrer"
            className="p-4 border rounded hover:border-blue-500 hover:shadow-md transition-all">
            <h3 className="font-semibold mb-1">ABC iview</h3>
            <p className="text-sm text-gray-600">ABC streaming</p>
          </a>
          <a href="https://www.sbs.com.au/ondemand/" target="_blank" rel="noopener noreferrer"
            className="p-4 border rounded hover:border-blue-500 hover:shadow-md transition-all">
            <h3 className="font-semibold mb-1">SBS On Demand</h3>
            <p className="text-sm text-gray-600">SBS streaming</p>
          </a>
        </div>
      </section>
    </main>
  );
}
