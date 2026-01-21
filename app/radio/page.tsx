'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

// Radio Station Data
const radioStations = [
  {
    id: 'bay-islands-radio',
    name: 'Bay Islands Radio',
    callsign: 'Island FM',
    frequency: 88.0,
    frequencyUnit: 'MHz FM',
    format: 'Community Variety',
    type: 'Local Community',
    coverage: ['Russell Island', 'Macleay Island', 'Lamb Island'],
    yearsEstablished: 1980,
    featured: true,
    history:
      'Bay Islands Radio has been the voice of the Southern Moreton Bay Islands community since its establishment in 1980. Serving the residents of Russell Island, Macleay Island, and Lamb Island, the station has built a strong reputation for local content, community news, and variety music from the 70s through 90s. The station represents the spirit of island independence and local connection that defines the Bay Islands community.',
    location: 'Bay Islands',
    website: '#',
    streaming: {
      available: true,
      url: '#',
      format: 'MP3 128kbps',
    },
  },
  {
    id: 'bay-fm',
    name: 'Bay FM',
    callsign: '4BAY',
    frequency: 100.3,
    frequencyUnit: 'MHz FM',
    format: 'Community Radio',
    type: 'Regional Community',
    coverage: ['Redland City', 'Eastern Brisbane'],
    yearsEstablished: 1995,
    history:
      'Bay FM has served the Redland City and eastern Brisbane communities with quality community radio programming. Operating on 100.3 MHz, it provides an important connection between the mainland and island communities of the Bay.',
    location: 'Redland City (~15-20 km)',
    website: 'https://bayfm.com.au',
    streaming: {
      available: true,
      url: '#',
      format: 'Stream available',
    },
  },
  {
    id: '96five',
    name: '96five',
    frequency: 96.5,
    frequencyUnit: 'MHz FM',
    format: 'Christian Community',
    type: 'Community',
    coverage: ['Brisbane', 'Accessible from Bay Islands'],
    yearsEstablished: 2006,
    history:
      '96five operates from Brisbane as a faith-based community broadcaster providing Christian-focused programming, music, and values-driven content to the broader Brisbane region including accessible areas of Moreton Bay.',
    location: 'Brisbane (~30-40 km)',
    website: 'https://96five.com.au',
    streaming: {
      available: true,
      format: 'Stream available',
    },
  },
  {
    id: '4aaa',
    name: '4AAA',
    callsign: 'Murri Country',
    frequency: 98.9,
    frequencyUnit: 'MHz FM',
    format: 'Indigenous Community',
    type: 'Community',
    coverage: ['Brisbane', 'South East Queensland'],
    yearsEstablished: 1995,
    history:
      '4AAA represents Indigenous Australian voices through community radio, focusing on Aboriginal and Torres Strait Islander culture, music, news, and community engagement across the region.',
    location: 'Brisbane (~35-45 km)',
    website: 'https://www.4aaa.org.au',
    streaming: {
      available: true,
      format: 'Stream available',
    },
  },
  {
    id: '4eb',
    name: '4EB',
    frequency: 98.1,
    frequencyUnit: 'MHz FM',
    format: 'Multilingual Community',
    type: 'Community',
    coverage: ['Brisbane', 'Multicultural communities'],
    yearsEstablished: 1985,
    history:
      '4EB provides multilingual broadcasting to Brisbane\'s diverse communities, offering programming in 20+ languages and fostering cultural exchange and community connection across the region.',
    location: 'Brisbane (~35-45 km)',
    website: 'https://4eb.org.au',
    streaming: {
      available: true,
      format: 'Stream available',
    },
  },
  {
    id: 'rebel-fm',
    name: 'Rebel FM',
    callsign: '4RBL',
    frequency: 99.4,
    frequencyUnit: 'MHz FM',
    format: 'Active Rock',
    type: 'Commercial',
    coverage: ['Gold Coast', 'Brisbane', 'South East Queensland'],
    yearsEstablished: 2000,
    history:
      'Rebel FM has established itself as the premier rock music station for the Gold Coast and Brisbane regions with active rock format and strong listener engagement. The station broadcasts from multiple regional transmitters including 99.4 MHz main frequency and 90.5 MHz Logan repeater.',
    location: 'Gold Coast/Brisbane (~50-60 km)',
    website: 'https://rebelfm.com.au',
    streaming: {
      available: true,
      format: 'Stream available',
    },
  },
  {
    id: '4mbs',
    name: '4MBS Classic FM',
    frequency: 103.7,
    frequencyUnit: 'MHz FM',
    format: 'Classical Music',
    type: 'Commercial',
    coverage: ['Brisbane', 'Accessible from Bay Islands'],
    yearsEstablished: 1975,
    history:
      'Australia\'s premier classical music broadcaster, 4MBS brings world-class classical music and fine arts programming to Brisbane and surrounding regions with high-fidelity audio quality.',
    location: 'Brisbane (~40-50 km)',
    website: 'https://www.4mbs.com.au',
    streaming: {
      available: true,
      format: 'Stream available',
    },
  },
  {
    id: '4zzz',
    name: '4ZZZ',
    frequency: 102.1,
    frequencyUnit: 'MHz FM',
    format: 'Independent Community',
    type: 'Community',
    coverage: ['Brisbane', 'Alternative programming'],
    yearsEstablished: 1975,
    history:
      '4ZZZ represents independent, community-driven broadcasting with eclectic music, alternative programming, and grassroots communication representing the diverse Brisbane community.',
    location: 'Brisbane (~35-45 km)',
    website: 'https://www.4zzz.org.au',
    streaming: {
      available: true,
      format: 'Stream available',
    },
  },
  {
    id: 'triple-j',
    name: 'Triple J',
    frequency: 107.7,
    frequencyUnit: 'MHz FM',
    format: 'Youth Music & Entertainment',
    type: 'National',
    coverage: ['Australia (Brisbane: 107.7)'],
    yearsEstablished: 1975,
    history:
      'Australia\'s premier youth broadcaster, Triple J provides music discovery, entertainment, and cultural commentary to young Australians nationwide with strong FM coverage across Brisbane.',
    location: 'National Network',
    website: 'https://www.triplej.com.au',
    streaming: {
      available: true,
      format: 'Stream available',
    },
  },
  {
    id: 'nova-fm',
    name: 'Nova',
    frequency: 106.9,
    frequencyUnit: 'MHz FM',
    format: 'Commercial Pop',
    type: 'Commercial',
    coverage: ['Brisbane', 'Accessible from Bay Islands'],
    yearsEstablished: 1999,
    history:
      'Nova represents mainstream commercial radio in Brisbane with pop-focused programming, entertainment, and wide listener appeal serving the greater Brisbane region.',
    location: 'Brisbane (~40-50 km)',
    website: 'https://nova.com.au',
    streaming: {
      available: true,
      format: 'Stream available',
    },
  },
  {
    id: 'kiis-fm',
    name: 'KIIS',
    frequency: 97.3,
    frequencyUnit: 'MHz FM',
    format: 'Mainstream Pop',
    type: 'Commercial',
    coverage: ['Brisbane', 'Accessible from Bay Islands'],
    yearsEstablished: 1995,
    history:
      'KIIS is a well-established commercial radio station with mainstream pop programming serving the Brisbane metropolitan area and surrounding regions.',
    location: 'Brisbane (~40-50 km)',
    website: 'https://kiis.com.au',
    streaming: {
      available: true,
      format: 'Stream available',
    },
  },
];

const faqItems = [
  {
    question: 'What is Bay Islands Radio?',
    answer:
      'Bay Islands Radio (88.0 FM) is the primary community radio station serving the residents of Russell Island, Macleay Island, and Lamb Island. It provides local news, community announcements, and variety music from the 70s through 90s, representing the heart of island community broadcasting.',
  },
  {
    question: 'How do I tune into Bay Islands Radio?',
    answer:
      'Simply tune your FM radio to 88.0 MHz. From the Bay Islands, you should get clear reception. If you\'re having trouble, try adjusting your antenna or checking your radio settings.',
  },
  {
    question: 'Can I stream Bay Islands Radio online?',
    answer:
      'Yes! You can stream Bay Islands Radio through our player on this page. We also provide access to other local and regional stations through the dropdown selector.',
  },
  {
    question: 'Why are there so many stations available?',
    answer:
      'While Bay Islands Radio is your primary local station, the Bay Islands are close to Brisbane and can receive signals from many Brisbane-based community, commercial, and national stations. Our directory helps you explore options based on your music and programming preferences.',
  },
  {
    question: 'Can I submit content or announcements to Bay Islands Radio?',
    answer:
      'Absolutely! Bay Islands Radio welcomes community content, local news tips, and announcements. Contact the station directly through their website or visit their studios on the islands.',
  },
  {
    question: 'Do these stations broadcast 24/7?',
    answer:
      'Most Bay Islands Radio programming runs during extended hours. Other Brisbane stations typically broadcast 24 hours. Check individual station websites for their specific broadcast schedules.',
  },
  {
    question: 'Is there a schedule for local programming?',
    answer:
      'Yes! Bay Islands Radio maintains a program guide. Visit their website or contact them directly for the latest schedule of local shows, news broadcasts, and special programming.',
  },
];

export default function RadioStationsPage() {
  const [selectedStation, setSelectedStation] = useState(radioStations[0]);
  const [expandedStation, setExpandedStation] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Radio Stations', href: '/radio' },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-4xl md:text-5xl">📻</div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">Local Radio Stations</h1>
              <p className="text-blue-100 text-lg mt-2">
                Tune in to the heartbeat of the Bay Islands and surrounding region
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Player Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Player */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">
                  {selectedStation.name}
                </h2>
                {selectedStation.callsign && (
                  <p className="text-slate-600 text-lg">{selectedStation.callsign}</p>
                )}
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-slate-600 text-sm">Now Streaming</p>
                    <p className="text-2xl font-bold text-blue-600">
                      {selectedStation.frequency} {selectedStation.frequencyUnit}
                    </p>
                  </div>
                  <div className="text-4xl">🎵</div>
                </div>

                {/* Player Controls */}
                <div className="bg-white rounded-lg p-4 space-y-4">
                  <div className="flex items-center justify-center gap-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 transition">
                      <span className="text-2xl">▶</span>
                    </button>
                    <button className="bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-full p-4 transition">
                      <span className="text-2xl">⏸</span>
                    </button>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700">
                      Volume
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      defaultValue="70"
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Station Selector */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Select a Station
                </label>
                <select
                  value={selectedStation.id}
                  onChange={(e) => {
                    const station = radioStations.find((s) => s.id === e.target.value);
                    if (station) setSelectedStation(station);
                  }}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {radioStations.map((station) => (
                    <option key={station.id} value={station.id}>
                      {station.frequency} - {station.name}{' '}
                      {station.featured ? '(Featured)' : ''}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex gap-3">
                <a
                  href={selectedStation.website}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg text-center transition"
                >
                  Visit Website
                </a>
              </div>
            </div>

            {/* Station Info */}
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Station Details</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Format</p>
                    <p className="text-slate-900 font-semibold">{selectedStation.format}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-600">Type</p>
                    <p className="text-slate-900 font-semibold">{selectedStation.type}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-600">Location</p>
                    <p className="text-slate-900 font-semibold">{selectedStation.location}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-600">Established</p>
                    <p className="text-slate-900 font-semibold">
                      {selectedStation.yearsEstablished || 'Unknown'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-600 mb-2">Coverage</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedStation.coverage.map((area) => (
                        <span
                          key={area}
                          className="bg-blue-200 text-blue-800 text-xs font-medium px-3 py-1 rounded-full"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-sm font-bold text-slate-900 mb-3">About This Station</h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {selectedStation.history}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Station Directory */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-6">
            <h2 className="text-2xl font-bold text-white">All Local Stations Directory</h2>
            <p className="text-slate-300 mt-2">
              Complete list of accessible FM stations by frequency
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-100 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 text-left font-bold text-slate-900">Frequency</th>
                  <th className="px-6 py-4 text-left font-bold text-slate-900">Station</th>
                  <th className="px-6 py-4 text-left font-bold text-slate-900">Format</th>
                  <th className="px-6 py-4 text-left font-bold text-slate-900">Type</th>
                  <th className="px-6 py-4 text-left font-bold text-slate-900">Location</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {radioStations
                  .sort((a, b) => a.frequency - b.frequency)
                  .map((station, idx) => (
                    <tr
                      key={station.id}
                      className={`hover:bg-blue-50 cursor-pointer transition ${
                        idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                      } ${station.featured ? 'bg-blue-100 font-semibold' : ''}`}
                      onClick={() =>
                        setExpandedStation(
                          expandedStation === station.id ? null : station.id
                        )
                      }
                    >
                      <td className="px-6 py-4 font-bold text-blue-600">
                        {station.frequency}
                        <br />
                        <span className="text-xs text-slate-600 font-normal">
                          {station.frequencyUnit}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-semibold text-slate-900">{station.name}</div>
                        {station.callsign && (
                          <div className="text-xs text-slate-600">{station.callsign}</div>
                        )}
                        {station.featured && (
                          <div className="inline-block mt-1 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                            Featured Local Station
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4">{station.format}</td>
                      <td className="px-6 py-4">
                        <span className="bg-slate-200 text-slate-800 px-3 py-1 rounded-full text-xs font-medium">
                          {station.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-600">{station.location}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          {/* Expanded Station Info */}
          {expandedStation && (
            <div className="bg-blue-50 border-t border-slate-200 p-6">
              {radioStations
                .filter((s) => s.id === expandedStation)
                .map((station) => (
                  <div key={station.id}>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">
                      {station.name} - {station.frequency} {station.frequencyUnit}
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-4">{station.history}</p>
                    <button
                      onClick={() => setExpandedStation(null)}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      ← Collapse
                    </button>
                  </div>
                ))}
            </div>
          )}
        </div>
      </section>

      {/* Local Radio History */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            📡 Local Radio History: Broadcasting in Moreton Bay
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              The history of radio broadcasting in the Southern Moreton Bay Islands reflects the
              community's commitment to local connection and cultural expression. Since the
              establishment of Bay Islands Radio in 1980, the station has served as the vital
              communication link for residents of Russell Island, Macleay Island, and Lamb Island.
            </p>
            <p>
              Radio in the Bay Islands represents more than entertainment—it's a lifeline for
              community news, safety announcements, and local events. The 88.0 FM frequency became
              synonymous with island life, providing weather updates, shipping forecasts, and the
              voices of neighbors discussing local matters.
            </p>
            <p>
              Today, while Bay Islands Radio remains the primary local broadcaster, residents enjoy
              access to a rich ecosystem of Brisbane and regional stations, from community-focused
              broadcasters like Bay FM to national services like Triple J. This diversity of
              programming reflects the Bay Islands' connection to both local and broader Australian
              culture.
            </p>
          </div>
        </div>
      </section>

      {/* How to Tune In */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🎯 How to Tune In</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">FM Radio Receiver</h3>
              <p className="text-slate-700 mb-3">For Bay Islands Radio:</p>
              <ol className="text-slate-700 space-y-2">
                <li>1. Turn on your FM radio</li>
                <li>2. Tune to 88.0 MHz</li>
                <li>3. Adjust antenna for clear reception</li>
                <li>4. Enjoy crystal-clear island broadcasting</li>
              </ol>
            </div>

            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Online Streaming</h3>
              <p className="text-slate-700 mb-3">Stream any station:</p>
              <ol className="text-slate-700 space-y-2">
                <li>1. Use the player on this page</li>
                <li>2. Select station from dropdown</li>
                <li>3. Click play button</li>
                <li>4. Enjoy world-class broadcast</li>
              </ol>
            </div>

            <div className="border-l-4 border-green-600 pl-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Mobile Apps</h3>
              <p className="text-slate-700 mb-3">Most stations offer apps:</p>
              <ol className="text-slate-700 space-y-2">
                <li>1. Search app store for station name</li>
                <li>2. Download official station app</li>
                <li>3. Search or tune to frequency</li>
                <li>4. Stream on-the-go</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-6">
            <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
            <p className="text-amber-100 mt-2">Everything you need to know about local radio</p>
          </div>

          <div className="p-8 space-y-6">
            {faqItems.map((item, idx) => (
              <details key={idx} className="border border-slate-200 rounded-lg">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-slate-900 hover:bg-slate-50 flex justify-between items-center">
                  {item.question}
                  <span className="text-blue-600">+</span>
                </summary>
                <div className="px-6 pb-4 text-slate-700">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 mb-8">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Connected to Bay Islands</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Radio is at the heart of Bay Islands community. Keep your radio tuned to 88.0 FM for
            local news, events, and the voices of your neighbors.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/directory"
              className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-lg transition"
            >
              Browse Local Directory
            </Link>
            <Link
              href="/events"
              className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-lg transition border border-white"
            >
              View Events & Announcements
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
