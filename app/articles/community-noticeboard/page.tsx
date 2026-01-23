import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Community Notice Board | Bay Islands',
  description: 'Bay Islands community notice board for events, classifieds, volunteer opportunities, and local announcements across all demographics.',
  keywords: 'Bay Islands community board, local notices, community events, classifieds SMBI',
};

export default function NoticesPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          📌 Community Notice Board
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Post and discover community notices, events, and opportunities across the Bay Islands
        </p>
      </div>

      <section className="bg-blue-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4">Welcome to Your Community Hub</h2>
        <p className="text-gray-700 mb-4">
          Connect with your local community through free or paid notices. Post events, classifieds, volunteer 
          opportunities, or share information. All notices are moderated to keep content relevant and useful.
        </p>
        <Link href="/community/notices/submit"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Submit a Notice →
        </Link>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <a href="#toddlers" className="p-6 text-center border-2 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all">
          <div className="text-4xl mb-3">🧸</div>
          <div className="font-semibold">Toddlers & Children</div>
        </a>
        <a href="#teens" className="p-6 text-center border-2 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all">
          <div className="text-4xl mb-3">🎓</div>
          <div className="font-semibold">Teens & Young Adults</div>
        </a>
        <a href="#adults" className="p-6 text-center border-2 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all">
          <div className="text-4xl mb-3">🏡</div>
          <div className="font-semibold">Adults</div>
        </a>
        <a href="#seniors" className="p-6 text-center border-2 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all">
          <div className="text-4xl mb-3">👴👵</div>
          <div className="font-semibold">Seniors</div>
        </a>
      </div>

      <section id="toddlers" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">🧸 Toddlers & Children</h2>
        <p className="text-gray-600 mb-4">Activities, playgroups, childcare, and local classes</p>
        <div className="space-y-4">
          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="font-bold mb-2">Russell Island Playgroup</h3>
            <p className="text-gray-700 mb-2">Free playgroup for toddlers aged 1-4. Music, storytelling, and social activities.</p>
            <p className="text-sm text-gray-600">📍 Russell Island Community Hall • Every Thursday 10am-12pm</p>
          </div>
          <div className="bg-blue-50 border-2 border-blue-500 rounded-lg p-6">
            <div className="text-xs text-blue-600 font-semibold mb-2">FEATURED</div>
            <h3 className="font-bold mb-2">Macleay Island Swimming Lessons</h3>
            <p className="text-gray-700 mb-2">Learn to swim program for children 2-12 years. Qualified instructors.</p>
            <p className="text-sm text-gray-600">📍 Macleay Island Pool • Bookings: 0400 000 000</p>
          </div>
        </div>
      </section>

      <section id="teens" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">🎓 Teens & Young Adults</h2>
        <p className="text-gray-600 mb-4">Sports, school events, workshops, and youth activities</p>
        <div className="space-y-4">
          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="font-bold mb-2">Youth Soccer Tryouts</h3>
            <p className="text-gray-700 mb-2">Russell Island Youth Soccer Club accepting new players ages 13-18.</p>
            <p className="text-sm text-gray-600">📍 Russell Island Sports Ground • Saturday 4pm</p>
          </div>
          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="font-bold mb-2">Teen Coding Workshop</h3>
            <p className="text-gray-700 mb-2">Learn web development and coding basics. Free workshop for ages 13-19.</p>
            <p className="text-sm text-gray-600">📍 Macleay Island Library • Monthly</p>
          </div>
        </div>
      </section>

      <section id="adults" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">🏡 Adults</h2>
        <p className="text-gray-600 mb-4">Local events, buy/swap/sell, adult classes, and networking</p>
        <div className="space-y-4">
          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="font-bold mb-2">Victoria Point Community Market</h3>
            <p className="text-gray-700 mb-2">Monthly market featuring local arts, crafts, fresh produce, and handmade goods.</p>
            <p className="text-sm text-gray-600">📍 Victoria Point Community Hall • First Saturday monthly 8am-2pm</p>
          </div>
          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="font-bold mb-2">Island Buy & Swap</h3>
            <p className="text-gray-700 mb-2">Community buy, swap, and sell listings. Join our Facebook group.</p>
            <p className="text-sm text-gray-600">📱 Facebook: Bay Islands Buy Swap Sell</p>
          </div>
        </div>
      </section>

      <section id="seniors" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">👴👵 Seniors</h2>
        <p className="text-gray-600 mb-4">Community gatherings, seniors programs, and health workshops</p>
        <div className="space-y-4">
          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="font-bold mb-2">Russell Island Seniors Morning Tea</h3>
            <p className="text-gray-700 mb-2">Social morning tea and games for local seniors. All welcome!</p>
            <p className="text-sm text-gray-600">📍 Russell Island RSL • Wednesdays 10am-12pm</p>
          </div>
          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="font-bold mb-2">Health & Wellness Program</h3>
            <p className="text-gray-700 mb-2">Free health checks and wellness workshops for seniors.</p>
            <p className="text-sm text-gray-600">📍 Macleay Island Medical Centre • Monthly</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4">📋 Posting Guidelines</h2>
        <ul className="space-y-2 text-gray-700">
          <li>✓ Free notices are moderated for relevance</li>
          <li>✓ Featured/paid notices appear at the top of each section</li>
          <li>✓ Respect community rules and terms of service</li>
          <li>✓ No spam, offensive content, or illegal activities</li>
        </ul>
      </section>

      <section className="border-t pt-8">
        <h2 className="text-2xl font-bold mb-4">Community Resources</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="https://www.redland.qld.gov.au/" target="_blank" rel="noopener noreferrer"
            className="p-4 border rounded hover:border-blue-500 hover:shadow-md transition-all">
            <h3 className="font-semibold mb-1">Redland City Council</h3>
            <p className="text-sm text-gray-600">Official council information</p>
          </a>
          <a href="https://www.translink.com.au/" target="_blank" rel="noopener noreferrer"
            className="p-4 border rounded hover:border-blue-500 hover:shadow-md transition-all">
            <h3 className="font-semibold mb-1">TransLink</h3>
            <p className="text-sm text-gray-600">Bus & train information</p>
          </a>
          <a href="https://www.servicesaustralia.gov.au/" target="_blank" rel="noopener noreferrer"
            className="p-4 border rounded hover:border-blue-500 hover:shadow-md transition-all">
            <h3 className="font-semibold mb-1">Services Australia</h3>
            <p className="text-sm text-gray-600">Centrelink services</p>
          </a>
        </div>
      </section>
    </main>
  );
}
