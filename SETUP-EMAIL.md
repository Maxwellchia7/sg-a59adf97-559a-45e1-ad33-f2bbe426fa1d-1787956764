# Email Configuration Setup Guide

This document explains how to configure email functionality for the Maison Caldor contact form.

## Overview

The contact form sends submissions to **support@maisoncaldor.com** via SMTP using Hostinger's email service with environment variables for secure credential storage.

## Required Environment Variables

Create a `.env.local` file in the root directory (same level as `package.json`) with these variables:

### Primary Configuration (Port 465/SSL)

```env
EMAIL_HOST=smtp.hostinger.com
EMAIL_PORT=465
EMAIL_SECURE=true
EMAIL_USER=support@maisoncaldor.com
EMAIL_PASSWORD=your-actual-mailbox-password
```

### Alternative Configuration (Port 587/TLS)

If you encounter SSL/TLS errors with port 465, use this configuration instead:

```env
EMAIL_HOST=smtp.hostinger.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=support@maisoncaldor.com
EMAIL_PASSWORD=your-actual-mailbox-password
```

## Setup Instructions

### Local Development

1. **Copy the example file**:
   ```bash
   cp .env.example .env.local
   ```

2. **Get your Hostinger email password**:
   - Log into your Hostinger control panel (hpanel)
   - Go to "Emails" section
   - Find support@maisoncaldor.com
   - Use the mailbox password (the password you use to log into webmail)

3. **Update .env.local** with your actual password:
   ```env
   EMAIL_HOST=smtp.hostinger.com
   EMAIL_PORT=465
   EMAIL_SECURE=true
   EMAIL_USER=support@maisoncaldor.com
   EMAIL_PASSWORD=YourActualPassword123
   ```

4. **Restart the development server**:
   ```bash
   npm run dev
   ```

### Production Deployment (Vercel)

1. **Go to your Vercel project dashboard**
2. **Navigate to Settings → Environment Variables**
3. **Add each variable**:
   - Name: `EMAIL_HOST`, Value: `smtp.hostinger.com`
   - Name: `EMAIL_PORT`, Value: `465`
   - Name: `EMAIL_SECURE`, Value: `true`
   - Name: `EMAIL_USER`, Value: `support@maisoncaldor.com`
   - Name: `EMAIL_PASSWORD`, Value: `[your actual mailbox password]`
4. **Redeploy the application** for changes to take effect

### Hostinger SMTP Settings Reference

| Setting | Primary (SSL) | Alternative (TLS) |
|---------|--------------|-------------------|
| Host | smtp.hostinger.com | smtp.hostinger.com |
| Port | 465 | 587 |
| Secure | true | false |
| Authentication | Required | Required |
| Username | support@maisoncaldor.com | support@maisoncaldor.com |
| Password | Mailbox password | Mailbox password |

## How It Works

1. **Customer fills out contact form** on /contact page
2. **Form submits to API endpoint** `/api/contact`
3. **Server sends email via Hostinger SMTP**:
   - **From**: support@maisoncaldor.com
   - **To**: support@maisoncaldor.com
   - **Reply-To**: Customer's email (so you can reply directly)
   - **Subject**: Customer's subject or "New Contact Form Submission from [Name]"
4. **Email arrives in support@maisoncaldor.com inbox**
5. **You can reply directly** to customer using the Reply button

## Testing

### Local Testing

1. Start development server: `npm run dev`
2. Navigate to: `http://localhost:3000/contact`
3. Fill out the contact form with test data
4. Submit the form
5. Check support@maisoncaldor.com inbox (or spam folder)
6. Look for email with subject "New Contact Form Submission from [Your Test Name]"

### Production Testing

1. Deploy to Vercel with environment variables configured
2. Visit your production URL: `https://yourdomain.com/contact`
3. Submit a test message
4. Verify email delivery to support@maisoncaldor.com

## Security Notes

- ✅ **NEVER** commit `.env.local` to git (already in `.gitignore`)
- ✅ **NEVER** hardcode passwords in source code
- ✅ Environment variables are only accessible server-side
- ✅ Passwords are never exposed to the frontend
- ✅ Email password is stored securely in Vercel environment variables
- ✅ Use the actual Hostinger mailbox password (not an app-specific password)

## Troubleshooting

### "ECONNREFUSED" or "Connection timeout"
**Solution**: Check your internet connection and verify Hostinger SMTP server is accessible. Try alternative port 587.

### "Invalid login" or "Authentication failed"
**Solution**: 
- Verify EMAIL_USER is exactly `support@maisoncaldor.com`
- Double-check EMAIL_PASSWORD matches your Hostinger mailbox password
- Log into Hostinger webmail to confirm credentials work
- Try resetting the mailbox password in Hostinger control panel

### SSL/TLS errors with port 465
**Solution**: Switch to port 587 configuration:
```env
EMAIL_HOST=smtp.hostinger.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=support@maisoncaldor.com
EMAIL_PASSWORD=your-password
```

### Messages not arriving
**Solution**:
- Check spam/junk folder in support@maisoncaldor.com
- Verify Hostinger email account is active and not suspended
- Check Hostinger email quota (make sure inbox isn't full)
- Look at server logs for specific error messages

### Testing in development
**Solution**: 
- Ensure `.env.local` file exists in project root
- Restart dev server after creating/updating `.env.local`
- Check console for detailed error messages
- Verify all environment variables are loaded correctly

### Production deployment not working
**Solution**:
- Verify all environment variables are added in Vercel settings
- Redeploy after adding environment variables
- Check Vercel function logs for error details
- Ensure no typos in environment variable names

## Environment Variable Checklist

Before deploying, verify you have:

- [ ] `.env.local` created locally (for development)
- [ ] All 5 variables configured (EMAIL_HOST, EMAIL_PORT, EMAIL_SECURE, EMAIL_USER, EMAIL_PASSWORD)
- [ ] Correct Hostinger SMTP settings
- [ ] Actual mailbox password (not a placeholder)
- [ ] Same variables added to Vercel production environment
- [ ] Tested contact form locally
- [ ] Redeployed Vercel after adding environment variables
- [ ] Tested contact form in production

## Support

- **Hostinger SMTP Issues**: Contact Hostinger support or check their email documentation
- **Website/Code Issues**: Check the API response in browser developer tools (Network tab)
- **Email Delivery**: Check support@maisoncaldor.com inbox and spam folder

## Email Template Preview

When a customer submits the contact form, you'll receive an email that looks like this:

**Subject**: New Contact Form Submission from [Customer Name]

**From**: support@maisoncaldor.com

**Reply-To**: customer@example.com

**Body**:
```
New Contact Form Submission

Name: John Smith
Email: john@example.com
Phone: +1 (555) 123-4567
Subject: Inquiry about Rolex GMT-Master II

Message:
I'm interested in learning more about the GMT-Master II Pepsi...

---
This email was sent from the Maison Caldor contact form
```

You can click "Reply" in your email client and it will automatically reply to the customer's email address.