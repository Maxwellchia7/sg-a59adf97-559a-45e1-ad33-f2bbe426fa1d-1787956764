# Email Configuration Setup Guide

This document explains how to configure email functionality for the Maison Caldor contact form.

## Overview

The contact form sends submissions to **support@maisoncaldor.com** via SMTP using environment variables for secure credential storage.

## Required Environment Variables

Create a `.env.local` file in the root directory (same level as `package.json`) with these variables:

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=support@maisoncaldor.com
EMAIL_PASSWORD=your-actual-password-here
```

## Setup Instructions

### Option 1: Gmail (Recommended)

If using Gmail for support@maisoncaldor.com:

1. **Enable 2-Factor Authentication** on the Gmail account
2. **Generate an App Password**:
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Name it "Maison Caldor Website"
   - Copy the 16-character password
3. **Update .env.local**:
   ```env
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_SECURE=false
   EMAIL_USER=support@maisoncaldor.com
   EMAIL_PASSWORD=abcd efgh ijkl mnop
   ```

### Option 2: Other Email Providers

For other SMTP providers (e.g., Outlook, custom domain):

1. **Find SMTP settings** from your email provider
2. **Update .env.local** with correct values:
   - `EMAIL_HOST`: Your provider's SMTP server
   - `EMAIL_PORT`: Usually 587 (TLS) or 465 (SSL)
   - `EMAIL_SECURE`: Set to `true` if using port 465
   - `EMAIL_USER`: support@maisoncaldor.com
   - `EMAIL_PASSWORD`: Your email password or app password

### Common SMTP Settings

| Provider | Host | Port | Secure |
|----------|------|------|--------|
| Gmail | smtp.gmail.com | 587 | false |
| Outlook | smtp-mail.outlook.com | 587 | false |
| Yahoo | smtp.mail.yahoo.com | 587 | false |
| Custom Domain | Check with host | Usually 587 | false |

## Deployment Configuration

### Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings → Environment Variables**
3. Add each variable:
   - `EMAIL_HOST`
   - `EMAIL_PORT`
   - `EMAIL_SECURE`
   - `EMAIL_USER`
   - `EMAIL_PASSWORD`
4. Redeploy the application

### Other Platforms

Add the same environment variables through your hosting platform's dashboard or CLI.

## Testing

1. Start the development server: `npm run dev`
2. Navigate to: `http://localhost:3000/contact`
3. Fill out and submit the contact form
4. Check support@maisoncaldor.com inbox for the test message

## Security Notes

- ✅ **NEVER** commit `.env.local` to git (already in `.gitignore`)
- ✅ **NEVER** share your email password or app password
- ✅ Use App Passwords instead of actual email passwords when possible
- ✅ Environment variables are only accessible server-side
- ✅ Passwords are never exposed to the frontend or in API responses

## Troubleshooting

### "Authentication failed" error
- Verify EMAIL_USER and EMAIL_PASSWORD are correct
- For Gmail: Ensure 2FA is enabled and you're using an App Password
- Check if "Less secure app access" needs to be enabled (not recommended)

### "Connection timeout" error
- Verify EMAIL_HOST and EMAIL_PORT are correct
- Check firewall settings
- Try switching between port 587 (TLS) and 465 (SSL)

### Messages not arriving
- Check spam/junk folder
- Verify support@maisoncaldor.com is the correct receiving address
- Test with different email providers (Gmail, Outlook, etc.)

## Support

For issues with email configuration, contact your hosting provider or email service administrator.