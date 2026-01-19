"use client";

export default function ConfirmEmailPage() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
      <div style={{ maxWidth: '520px', background: '#f5f5f5', padding: '32px', borderRadius: '10px' }}>
        <h1 style={{ marginTop: 0, marginBottom: '16px' }}>Check your email</h1>
        <p style={{ margin: '0 0 12px 0', lineHeight: 1.6 }}>
          We’ve sent you a verification link. Open it to confirm your email, then return to the site and log in.
        </p>
        <p style={{ margin: 0, color: '#555' }}>
          If you don’t see the email, check spam or request another link from the signup form.
        </p>
      </div>
    </div>
  );
}
