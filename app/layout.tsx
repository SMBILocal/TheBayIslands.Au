import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { AuthProvider } from '../lib/AuthContext'

export const metadata = {
  title: 'thebayislands.au – Local hub for SMBI',
  description: 'Articles, jobs, events, business directory and classifieds for the Bay Islands region.'
}

export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
          <main className="container" style={{paddingTop:20}}>
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
