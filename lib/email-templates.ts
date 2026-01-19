import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);

interface EmailTemplates {
  verification: (email: string, confirmUrl: string) => { subject: string; html: string };
  passwordReset: (email: string, resetUrl: string) => { subject: string; html: string };
  listingApproved: (email: string, listingName: string) => { subject: string; html: string };
  listingRejected: (email: string, listingName: string, reason?: string) => { subject: string; html: string };
  listingExpiring: (email: string, listingName: string, days: number) => { subject: string; html: string };
}

export const emailTemplates: EmailTemplates = {
  verification: (email: string, confirmUrl: string) => ({
    subject: 'Verify your email - The Bay Islands',
    html: `
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h1 style="color: #0070f3;">Welcome to The Bay Islands</h1>
            <p>Hi,</p>
            <p>Please verify your email address by clicking the link below:</p>
            <div style="margin: 30px 0; text-align: center;">
              <a href="${confirmUrl}" style="background-color: #0070f3; color: white; padding: 12px 30px; text-decoration: none; border-radius: 4px; display: inline-block;">
                Verify Email
              </a>
            </div>
            <p style="color: #666; font-size: 12px;">
              Or copy this link: <br/>
              ${confirmUrl}
            </p>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />
            <p style="color: #999; font-size: 12px;">
              This link will expire in 24 hours. If you didn't create this account, please ignore this email.
            </p>
          </div>
        </body>
      </html>
    `
  }),

  passwordReset: (email: string, resetUrl: string) => ({
    subject: 'Reset your password - The Bay Islands',
    html: `
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h1 style="color: #0070f3;">Reset Your Password</h1>
            <p>Hi,</p>
            <p>We received a request to reset your password. Click the link below to create a new password:</p>
            <div style="margin: 30px 0; text-align: center;">
              <a href="${resetUrl}" style="background-color: #0070f3; color: white; padding: 12px 30px; text-decoration: none; border-radius: 4px; display: inline-block;">
                Reset Password
              </a>
            </div>
            <p style="color: #666; font-size: 12px;">
              Or copy this link: <br/>
              ${resetUrl}
            </p>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />
            <p style="color: #999; font-size: 12px;">
              This link will expire in 1 hour. If you didn't request a password reset, please ignore this email or contact support.
            </p>
          </div>
        </body>
      </html>
    `
  }),

  listingApproved: (email: string, listingName: string) => ({
    subject: `Your listing "${listingName}" is now live - The Bay Islands`,
    html: `
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h1 style="color: #0070f3;">Listing Approved!</h1>
            <p>Great news! Your listing <strong>"${listingName}"</strong> has been approved and is now live on The Bay Islands.</p>
            <p>Your listing is now visible to all users and can receive inquiries.</p>
            <div style="margin: 30px 0; text-align: center;">
              <a href="${process.env.NEXT_PUBLIC_SITE_URL}/dashboard" style="background-color: #0070f3; color: white; padding: 12px 30px; text-decoration: none; border-radius: 4px; display: inline-block;">
                View Dashboard
              </a>
            </div>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />
            <p style="color: #999; font-size: 12px;">
              Keep your listing updated and respond to inquiries promptly for better engagement.
            </p>
          </div>
        </body>
      </html>
    `
  }),

  listingRejected: (email: string, listingName: string, reason?: string) => ({
    subject: `Your listing "${listingName}" needs revision - The Bay Islands`,
    html: `
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h1 style="color: #d9534f;">Listing Needs Review</h1>
            <p>Hi,</p>
            <p>Thank you for submitting your listing <strong>"${listingName}"</strong>. Unfortunately, it didn't meet our guidelines and needs revision.</p>
            ${reason ? `
              <div style="background-color: #f5f5f5; padding: 15px; border-left: 3px solid #d9534f; margin: 20px 0;">
                <strong>Reason:</strong><br/>
                ${reason}
              </div>
            ` : ''}
            <p>Please review our guidelines and update your listing. You can:</p>
            <ul>
              <li>Edit your listing with the suggested improvements</li>
              <li>Contact our support team for clarification</li>
              <li>Resubmit once you've made the changes</li>
            </ul>
            <div style="margin: 30px 0; text-align: center;">
              <a href="${process.env.NEXT_PUBLIC_SITE_URL}/dashboard" style="background-color: #0070f3; color: white; padding: 12px 30px; text-decoration: none; border-radius: 4px; display: inline-block;">
                Edit Listing
              </a>
            </div>
          </div>
        </body>
      </html>
    `
  }),

  listingExpiring: (email: string, listingName: string, days: number) => ({
    subject: `Your listing "${listingName}" expires in ${days} days - The Bay Islands`,
    html: `
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h1 style="color: #ffc107;">Listing Expiring Soon</h1>
            <p>Hi,</p>
            <p>Your listing <strong>"${listingName}"</strong> will expire in <strong>${days} days</strong>.</p>
            <p>To keep your listing active and visible to potential customers, please renew it before the expiration date.</p>
            <div style="margin: 30px 0; text-align: center;">
              <a href="${process.env.NEXT_PUBLIC_SITE_URL}/dashboard" style="background-color: #0070f3; color: white; padding: 12px 30px; text-decoration: none; border-radius: 4px; display: inline-block;">
                Renew Listing
              </a>
            </div>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />
            <p style="color: #999; font-size: 12px;">
              Expired listings are archived but can be reactivated by renewing.
            </p>
          </div>
        </body>
      </html>
    `
  })
};

export async function sendEmail(
  to: string,
  templateName: keyof typeof emailTemplates,
  params: any[]
) {
  try {
    const template = emailTemplates[templateName] as any;
    const { subject, html } = template(...(params as [any, ...any[]]));

    // Use your email provider here (Resend, SendGrid, etc)
    // Example with Resend:
    // const response = await fetch('https://api.resend.com/emails', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
    //   },
    //   body: JSON.stringify({
    //     from: 'noreply@thebayislands.au',
    //     to,
    //     subject,
    //     html
    //   })
    // });

    console.log(`Email sent to ${to}: ${subject}`);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
}
