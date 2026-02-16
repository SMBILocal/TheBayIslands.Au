import '../styles/globals.css'
import { ReactNode } from 'react'
import HeaderWrapper from '../components/HeaderWrapper'
import Footer from '../components/Footer'
import { AuthProvider } from '../lib/AuthContext'
import { RadioProvider } from '../lib/RadioContext'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'thebayislands.au – Local hub for SMBI',
  description: 'Articles, jobs, events, business directory and classifieds for the Bay Islands region.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  }
}

export default function RootLayout({children}: {children: ReactNode}){
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{__html: `
          (function() {
            var isPortrait = window.matchMedia('(orientation: portrait)').matches;
            document.documentElement.classList.toggle('is-portrait', isPortrait);
            document.documentElement.classList.toggle('is-landscape', !isPortrait);
          })();
        `}} />
      </head>
      <body>
        <AuthProvider>
          <RadioProvider>
            <HeaderWrapper />
            <main className="container" style={{paddingTop:0, paddingLeft:0, paddingRight:0}}>
              {children}
            </main>
            <Footer />
          </RadioProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
