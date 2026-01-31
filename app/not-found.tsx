import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)'
    }}>
      <div style={{
        maxWidth: '600px',
        textAlign: 'center',
        background: 'white',
        padding: 'clamp(40px, 8vw, 60px)',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
      }}>
        <div style={{
          fontSize: 'clamp(4em, 15vw, 8em)',
          fontWeight: 800,
          background: 'linear-gradient(135deg, #0066b3 0%, #c85a17 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '20px'
        }}>
          404
        </div>
        
        <h1 style={{
          fontSize: 'clamp(1.5em, 5vw, 2.5em)',
          fontWeight: 700,
          marginBottom: '16px',
          color: '#0f1729'
        }}>
          Page Not Found
        </h1>
        
        <p style={{
          fontSize: 'clamp(1em, 2.5vw, 1.2em)',
          color: '#666',
          marginBottom: '32px',
          lineHeight: 1.6
        }}>
          Sorry, we couldn't find the page you're looking for. It may have been moved or deleted.
        </p>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          marginBottom: '32px'
        }}>
          <Link
            href="/"
            style={{
              display: 'inline-block',
              padding: '14px 32px',
              background: '#0066b3',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '1.1em',
              transition: 'all 0.3s',
              boxShadow: '0 4px 12px rgba(0,102,179,0.3)'
            }}
          >
            🏠 Go to Homepage
          </Link>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '12px'
          }}>
            <Link
              href="/directory"
              style={{
                padding: '12px 16px',
                background: '#f8f9fa',
                color: '#333',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: 500,
                fontSize: '0.95em',
                transition: 'all 0.3s',
                border: '1px solid #e5e7eb'
              }}
            >
              📍 Directory
            </Link>
            <Link
              href="/jobs"
              style={{
                padding: '12px 16px',
                background: '#f8f9fa',
                color: '#333',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: 500,
                fontSize: '0.95em',
                transition: 'all 0.3s',
                border: '1px solid #e5e7eb'
              }}
            >
              💼 Jobs
            </Link>
            <Link
              href="/classifieds"
              style={{
                padding: '12px 16px',
                background: '#f8f9fa',
                color: '#333',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: 500,
                fontSize: '0.95em',
                transition: 'all 0.3s',
                border: '1px solid #e5e7eb'
              }}
            >
              🛒 Classifieds
            </Link>
          </div>
        </div>

        <div style={{
          padding: '24px',
          background: '#f8f9fa',
          borderRadius: '8px',
          border: '1px solid #e5e7eb'
        }}>
          <h3 style={{
            fontSize: '1.1em',
            fontWeight: 600,
            marginBottom: '12px',
            color: '#0f1729'
          }}>
            Need Help?
          </h3>
          <p style={{
            fontSize: '0.95em',
            color: '#666',
            marginBottom: '16px',
            lineHeight: 1.5
          }}>
            If you believe this page should exist or need assistance, please contact us:
          </p>
          <div style={{
            fontSize: '0.9em',
            color: '#666',
            lineHeight: 1.8
          }}>
            <div>📧 Email: <a href="mailto:support@thebayislands.au" style={{ color: '#0066b3', textDecoration: 'none', fontWeight: 500 }}>support@thebayislands.au</a></div>
            <div>🌐 Website: <a href="https://thebayislands.au" style={{ color: '#0066b3', textDecoration: 'none', fontWeight: 500 }}>thebayislands.au</a></div>
            <div style={{ marginTop: '8px', fontSize: '0.85em', opacity: 0.8 }}>
              Your local hub for Southern Moreton Bay Islands
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
