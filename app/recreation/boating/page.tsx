import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Boating & Marinas | Bay Islands & Redlands Coast',
  description: 'Complete guide to marinas, boat ramps, ferry terminals, parking and boating infrastructure across Bay Islands and Redlands Coast.',
  keywords: 'Bay Islands marinas, boat ramps Redlands, ferry terminals, boating infrastructure, Russell Island marina',
};

const MARINAS_AND_RAMPS = [
  {
    name: 'Russell Island Marina',
    type: 'Marina & Boat Ramp',
    location: 'Russell Island',
    facilities: ['Boat ramp', 'Jetty', 'Parking', 'Ferry terminal'],
    description: 'Main marina with public boat ramp and ferry access'
  },
  {
    name: 'Macleay Island Boat Ramp',
    type: 'Boat Ramp',
    location: 'Macleay Island',
    facilities: ['Boat ramp', 'Parking', 'Picnic area'],
    description: 'Public boat ramp with parking facilities'
  },
  {
    name: 'Redland Bay Marina',
    type: 'Marina',
    location: 'Redland Bay (Mainland)',
    facilities: ['Marina berths', 'Boat ramp', 'Fuel', 'Chandlery', 'Parking'],
    description: 'Major mainland marina with full facilities'
  },
  {
    name: 'Victoria Point Boat Ramp',
    type: 'Boat Ramp',
    location: 'Victoria Point (Mainland)',
    facilities: ['Multi-lane ramp', 'Parking', 'Amenities'],
    description: 'Popular mainland launching point'
  }
];

const FERRY_TERMINALS = [
  {
    name: 'Russell Island Ferry Terminal',
    operator: 'SeaLink & Stradbroke Ferries',
    services: 'Regular passenger & vehicle services',
    parking: 'Limited on-island parking, ample mainland parking'
  },
  {
    name: 'Macleay Island Ferry Terminal',
    operator: 'SeaLink & Stradbroke Ferries',
    services: 'Regular passenger & vehicle services',
    parking: 'Limited on-island parking'
  },
  {
    name: 'Redland Bay Ferry Terminal',
    operator: 'SeaLink & Stradbroke Ferries',
    services: 'Main mainland terminal for all islands',
    parking: 'Large car park, ride-share zone, taxi rank'
  }
];

export default function BoatingPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <Link href="/recreation" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to Recreation
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          ⚓ Boating & Marinas Guide
        </h1>
        <p className="text-xl text-gray-600">
          Complete guide to marinas, boat ramps, and boating infrastructure
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Marinas & Boat Ramps</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {MARINAS_AND_RAMPS.map((facility) => (
            <div key={facility.name} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl">🚤</span>
                <div>
                  <h3 className="text-xl font-bold">{facility.name}</h3>
                  <p className="text-sm text-gray-600">{facility.type} • {facility.location}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-3">{facility.description}</p>
              <div>
                <h4 className="font-semibold text-sm mb-2">Facilities:</h4>
                <div className="flex flex-wrap gap-2">
                  {facility.facilities.map((item) => (
                    <span key={item} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Ferry Terminals & Access</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FERRY_TERMINALS.map((terminal) => (
            <div key={terminal.name} className="border rounded-lg p-6">
              <div className="text-3xl mb-3">⛴️</div>
              <h3 className="font-bold text-lg mb-2">{terminal.name}</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Operator:</strong> {terminal.operator}</p>
                <p><strong>Services:</strong> {terminal.services}</p>
                <p><strong>Parking:</strong> {terminal.parking}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6">🅿️ Parking & Transport</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold mb-3">Mainland Parking</h3>
            <ul className="space-y-2 text-sm">
              <li>✓ Redland Bay Terminal - Large car park</li>
              <li>✓ Victoria Point - Ample parking near ramp</li>
              <li>✓ Long-term parking available</li>
              <li>✓ Ride-share and taxi services</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3">Island Parking</h3>
            <ul className="space-y-2 text-sm">
              <li>• Limited parking at ferry terminals</li>
              <li>• Boat trailer parking available</li>
              <li>• Walk or bike from ferry recommended</li>
              <li>• Shuttle services during peak times</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">⚡ Infrastructure Upgrades</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-bold mb-1">Recent Improvements</h3>
            <p className="text-gray-700">Road upgrades, enhanced parking facilities, and improved boat ramp access across multiple locations</p>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-bold mb-1">Ongoing Development</h3>
            <p className="text-gray-700">Shopping center access improvements, public transport connections, and marina facility enhancements</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">🛟 Boating Safety</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6">
            <div className="text-3xl mb-3">📋</div>
            <h3 className="font-bold mb-2">Registration</h3>
            <p className="text-sm text-gray-600">All vessels must be registered with Maritime Safety Queensland</p>
          </div>
          <div className="border rounded-lg p-6">
            <div className="text-3xl mb-3">🦺</div>
            <h3 className="font-bold mb-2">Safety Equipment</h3>
            <p className="text-sm text-gray-600">Life jackets, flares, EPIRB, and communication devices required</p>
          </div>
          <div className="border rounded-lg p-6">
            <div className="text-3xl mb-3">🌊</div>
            <h3 className="font-bold mb-2">Weather Check</h3>
            <p className="text-sm text-gray-600">Always check conditions before departure</p>
          </div>
        </div>
      </section>

      <section className="border-t pt-8">
        <h2 className="text-2xl font-bold mb-4">Important Resources</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="https://www.msq.qld.gov.au/" target="_blank" rel="noopener noreferrer"
            className="p-4 border rounded hover:border-blue-500 hover:shadow-md transition-all">
            <h3 className="font-semibold mb-1">Maritime Safety QLD</h3>
            <p className="text-sm text-gray-600">Registration & safety</p>
          </a>
          <a href="https://www.sealinkqld.com.au/" target="_blank" rel="noopener noreferrer"
            className="p-4 border rounded hover:border-blue-500 hover:shadow-md transition-all">
            <h3 className="font-semibold mb-1">SeaLink Ferries</h3>
            <p className="text-sm text-gray-600">Ferry timetables</p>
          </a>
          <a href="http://www.bom.gov.au/marine/" target="_blank" rel="noopener noreferrer"
            className="p-4 border rounded hover:border-blue-500 hover:shadow-md transition-all">
            <h3 className="font-semibold mb-1">Marine Weather</h3>
            <p className="text-sm text-gray-600">BOM forecasts</p>
          </a>
        </div>
      </section>
    </main>
  );
}
