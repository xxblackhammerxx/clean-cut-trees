# reCAPTCHA Implementation Guide for Clean Cuts Trees

## Overview

This implementation adds Google reCAPTCHA v3 protection to your contact forms. reCAPTCHA v3 is invisible to users and provides a frictionless experience while protecting against spam and automated submissions.

## Setup Instructions

### 1. Get reCAPTCHA Keys

1. Go to the [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin/create)
2. Click "Create" to add a new site
3. Fill in the form:
   - **Label**: Clean Cuts Trees Contact Form
   - **reCAPTCHA type**: Choose "reCAPTCHA v3"
   - **Domains**: Add your domains:
     - `cleancutstrees.com`
     - `localhost` (for development)
     - Any other domains you use
4. Accept the terms and click "Submit"
5. Copy the **Site Key** and **Secret Key**

### 2. Configure Environment Variables

Add these variables to your `.env` file:

```bash
# reCAPTCHA Configuration
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

⚠️ **Important**:

- The `NEXT_PUBLIC_` prefix makes the site key available to the browser
- Keep the secret key private (no `NEXT_PUBLIC_` prefix)

### 3. Test the Implementation

1. **Development Testing**:

   ```bash
   npm run dev
   ```

   - Visit `/contact-us`
   - Fill out and submit the form
   - Check the browser console for reCAPTCHA logs
   - Check the server console for verification logs

2. **Production Testing**:
   - Deploy to your staging/production environment
   - Test form submissions
   - Monitor server logs for any errors

### 4. Configure reCAPTCHA Settings (Optional)

In the reCAPTCHA Admin Console, you can:

- **Set Score Threshold**: Adjust the minimum score (default: 0.5)
- **Monitor Traffic**: View submission statistics
- **Set up Alerts**: Get notified of suspicious activity
- **Whitelist/Blacklist IPs**: Configure specific IP rules

## How It Works

### User Experience

1. User fills out the contact form normally
2. When they click "Submit", reCAPTCHA v3 silently analyzes the interaction
3. reCAPTCHA assigns a score (0.0 = bot, 1.0 = human)
4. If the score is above the threshold (0.5), the form submits successfully
5. If the score is too low, the user gets an error message

### Technical Flow

1. **Frontend** (`ContactForm.tsx`):
   - Executes reCAPTCHA when form is submitted
   - Gets a token and includes it in the form data
   - Sends to custom API endpoint

2. **Backend** (`/api/contact-submissions/route.ts`):
   - Receives form data + reCAPTCHA token
   - Verifies token with Google's API
   - Checks score threshold
   - If valid, saves to Payload CMS
   - If invalid, returns error

3. **Payload CMS**:
   - Receives clean, verified form data
   - Sends email notifications as configured
   - Stores submission in database

## Customization Options

### Adjust Score Threshold

In `/src/utils/recaptcha.ts`, change the threshold:

```typescript
// For stricter filtering (fewer false positives)
const scoreThreshold = 0.7

// For more lenient filtering (fewer false negatives)
const scoreThreshold = 0.3
```

### Make reCAPTCHA Required

In `/src/app/api/contact-submissions/route.ts`, uncomment these lines:

```typescript
if (!recaptchaToken) {
  return NextResponse.json({ error: 'Security validation is required.' }, { status: 400 })
}
```

### Add reCAPTCHA to Other Forms

To protect additional forms:

1. Wrap the form component with `RecaptchaProvider` (already done in layout)
2. Use the `useRecaptcha` hook in the form component
3. Call `executeRecaptcha('form_action_name')` before submission
4. Include the token in your form data
5. Verify the token on the server side

## Monitoring and Maintenance

### Monitor reCAPTCHA Performance

1. **reCAPTCHA Admin Console**:
   - Check submission volume and scores
   - Look for unusual patterns
   - Adjust settings if needed

2. **Server Logs**:
   - Monitor verification success/failure rates
   - Watch for error patterns
   - Check score distributions

### Regular Maintenance

- **Weekly**: Check reCAPTCHA admin console for alerts
- **Monthly**: Review score thresholds and adjust if needed
- **Quarterly**: Test form submission flow end-to-end

## Troubleshooting

### Common Issues

1. **"reCAPTCHA verification failed"**
   - Check that environment variables are set correctly
   - Verify the domain is added in reCAPTCHA admin
   - Check network connectivity to Google APIs

2. **"No reCAPTCHA token provided"**
   - reCAPTCHA provider might not be loaded
   - Check browser console for JavaScript errors
   - Ensure proper React component wrapping

3. **Score too low errors**
   - Adjust the score threshold
   - Check if legitimate users are being blocked
   - Review reCAPTCHA admin console analytics

### Debug Mode

Add this to your form component for debugging:

```typescript
console.log('reCAPTCHA token:', recaptchaToken)
console.log('reCAPTCHA score:', result.score) // From API response
```

## Security Considerations

1. **Never expose the secret key** in client-side code
2. **Always verify tokens server-side** - never trust client-side validation
3. **Use HTTPS** in production for secure communication
4. **Monitor for false positives** - legitimate users being blocked
5. **Keep backup contact methods** - phone number for users who can't submit forms

## Files Modified

- ✅ `src/components/providers/RecaptchaProvider.tsx` - reCAPTCHA provider setup
- ✅ `src/hooks/useRecaptcha.ts` - Custom hook for reCAPTCHA
- ✅ `src/utils/recaptcha.ts` - Server-side verification utility
- ✅ `src/components/ContactForm.tsx` - Updated form with reCAPTCHA
- ✅ `src/app/api/contact-submissions/route.ts` - Custom API endpoint
- ✅ `src/app/(frontend)/layout.tsx` - Added reCAPTCHA provider
- ✅ `src/app/(frontend)/recaptcha.css` - reCAPTCHA styling
- ✅ `.env.example` - Updated with reCAPTCHA variables

## Next Steps

1. **Set up your reCAPTCHA keys** in the Google Admin Console
2. **Add the keys to your `.env` file**
3. **Test the implementation** in development
4. **Deploy and test in production**
5. **Monitor performance** and adjust as needed

The implementation is designed to be secure, user-friendly, and easily maintainable. It provides strong spam protection while maintaining a smooth user experience.
