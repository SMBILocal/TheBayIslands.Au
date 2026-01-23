import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Local Media | Radio, TV & Newspapers | Bay Islands',
  description: 'Your guide to local media: radio stations, TV channels, and newspapers serving the Bay Islands and Redlands Coast.',
  keywords: 'Bay Islands media, local radio Brisbane, local TV Queensland, Redlands newspapers',
};

export default function MediaPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          📻 Local Media
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Stay connected with local radio, TV, and newspapers serving the Bay Islands and Redlands Coast
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <Link
          href="/media/radio"
          className="group border-2 rounded-lg p-8 hover:border-blue-500 hover:shadow-xl transition-all"
        >
          <div className="text-6xl mb-4">📻</div>
          <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-600">Radio Stations</h2>
          <p className="text-gray-600 mb-4">
            Local and regional radio including Bay Islands Radio 88.0 FM and Brisbane stations
          </p>
          <div className="text-blue-600 font-semibold">Tune In →</div>
        </Link>

        <Link
          href="/media/tv"
          className="group border-2 rounded-lg p-8 hover:border-blue-500 hover:shadow-xl transition-all"
        >
          <div className="text-6xl mb-4">📺</div>
          <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-600">TV Stations</h2>
          <p className="text-gray-600 mb-4">
            Free-to-air TV channels and streaming options available in the region
          </p>
          <div className="text-blue-600 font-semibold">Watch Now →</div>
        </Link>

        <Link
          href="/media/newspapers"
          className="group border-2 rounded-lg p-8 hover:border-blue-500 hover:shadow-xl transition-all"
        >
          <div className="text-6xl mb-4">📰</div>
          <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-600">Newspapers</h2>
          <p className="text-gray-600 mb-4">
            Local print and online news including Redland City Bulletin and regional papers
          </p>
          <div className="text-blue-600 font-semibold">Read News →</div>
        </Link>
      </div>

      <section className="bg-blue-50 rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-bold mb-6">🌊 Bay Islands Media</h2>
        <p className="text-gray-700 mb-4">
          The Southern Moreton Bay Islands are served by a mix of local and regional media outlets. 
          From community radio to metropolitan TV stations, residents have access to news, entertainment, 
          and information relevant to island life.
        </p>
        <p className="text-gray-700">
          Stay informed about local events, weather updates, council news, and community stories through 
          our comprehensive media guide.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">📡 Digital & Streaming</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6">
            <div className="text-4xl mb-3">🌐</div>
            <h3 className="font-bold text-lg mb-3">Online Streaming</h3>
            <p className="text-gray-700">
              Most local radio stations and newspapers offer online streaming and digital editions, 
              keeping you connected even when away from the islands.
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <div className="text-4xl mb-3">📱</div>
            <h3 className="font-bold text-lg mb-3">Mobile Apps</h3>
            <p className="text-gray-700">
              Download apps from major radio networks and news outlets to access live streams, 
              podcasts, and breaking news on your mobile device.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">🎯 What You'll Find</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-bold mb-2">Local News</h3>
            <p className="text-gray-700">Community stories, council updates, and island-specific news coverage</p>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-bold mb-2">Entertainment</h3>
            <p className="text-gray-700">Music, talk shows, TV programs, and podcasts for all interests</p>
          </div>
          <div className="border-l-4 border-amber-500 pl-4">
            <h3 className="font-bold mb-2">Emergency Info</h3>
            <p className="text-gray-700">Weather alerts, emergency broadcasts, and community safety updates</p>
          </div>
        </div>
      </section>

      <section className="border-t pt-8">
        <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <a href="https://www.abc.net.au/queensland/" target="_blank" rel="noopener noreferrer"
            className="p-4 border rounded hover:border-blue-500 hover:shadow-md transition-all">
            <h3 className="font-semibold mb-1">ABC Queensland</h3>
            <p className="text-sm text-gray-600">National broadcaster</p>
          </a>
          <a href="https://www.redland.qld.gov.au/" target="_blank" rel="noopener noreferrer"
            className="p-4 border rounded hover:border-blue-500 hover:shadow-md transition-all">
            <h3 className="font-semibold mb-1">Redland Council</h3>
            <p className="text-sm text-gray-600">Official council news</p>
          </a>
        </div>
      </section>
    </main>
  );
}
