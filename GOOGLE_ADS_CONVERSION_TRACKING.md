# Google Ads Conversion Tracking Implementation

This implementation adds Google Ads conversion tracking for Clean Cuts Trees website to track when visitors click on buttons that lead to booking forms or estimates.

## What Was Added

### 1. Google Ads Conversion Tracking Script
Added to `/src/app/(frontend)/layout.tsx` in the head section:
- Conversion ID: `AW-10810466317`
- Conversion Label: `XjtiCMyRhJwYEI3A6qIo`

### 2. Utility Functions
Created `/src/utils/googleAdsConversion.ts` with:
- `gtag_report_conversion()` - The main conversion tracking function from Google Ads
- `trackBookingConversion()` - For BookingButton clicks
- `trackPhoneConversion()` - For phone number clicks
- `trackContactFormConversion()` - For contact form submissions

### 3. Enhanced Components

#### BookingButton (`/src/components/BookingButton.tsx`)
- Now tracks conversions when clicked
- Automatically fires conversion tracking before opening HouseCall Pro modal

#### PhoneButton (`/src/components/PhoneButton.tsx`)
- New component for phone links with conversion tracking
- Replaces regular phone links to track estimate requests
- Supports optional onClick handlers

#### HouseCallProLink (`/src/components/HouseCallProLink.tsx`)
- New component for direct HouseCall Pro booking links
- Tracks conversions before redirecting to booking form

#### ContactForm (`/src/components/ContactForm.tsx`)
- Tracks conversions on successful form submissions
- Fires after form is successfully submitted

## Updated Components/Pages

The following components and pages have been updated to use the new tracking:

1. **Navbar** - Phone links now use PhoneButton
2. **HeroSection** - Phone button with conversion tracking
3. **ContactSection** - Phone link with conversion tracking
4. **ContactForm** - Form submissions now tracked
5. **St. George Tree Removal page** - All booking and phone links updated
6. **Contact page** - Hero phone button updated

## How It Works

### Booking Buttons
When someone clicks any "Get Free Estimate" or "Book Now" button:
1. Conversion is tracked via `trackBookingConversion()`
2. Button proceeds with normal functionality (opens booking form or navigates)

### Phone Number Clicks
When someone clicks a phone number that leads to estimates:
1. Conversion is tracked via `trackPhoneConversion()`
2. Phone call proceeds normally

### Contact Form Submissions
When someone submits the contact form:
1. Form is processed normally
2. On successful submission, `trackContactFormConversion()` is called
3. Conversion is recorded

## Conversion Tracking Events

All events send to Google Ads conversion endpoint: `AW-10810466317/XjtiCMyRhJwYEI3A6qIo`

The tracking captures:
- Button clicks leading to HouseCall Pro booking
- Phone number clicks for estimates
- Contact form submissions
- Direct HouseCall Pro link clicks

## Future Usage

### To add tracking to new buttons:
```tsx
// For booking buttons, use existing BookingButton component
<BookingButton variant="primary" size="large">
  Get Free Estimate
</BookingButton>

// For phone links
<PhoneButton phoneNumber="+18014737548" className="btn btn-phone">
  Call for Estimate
</PhoneButton>

// For direct HouseCall Pro links
<HouseCallProLink className="btn btn-primary">
  Schedule Service Online
</HouseCallProLink>
```

### To manually track conversions:
```tsx
import { trackBookingConversion, trackPhoneConversion } from '@/utils/googleAdsConversion'

// Track any custom booking action
trackBookingConversion()

// Track phone clicks
trackPhoneConversion('801-473-7548')
```

## Testing

To test conversion tracking:
1. Open browser developer tools
2. Go to Network tab
3. Click any booking or estimate button
4. Look for network request to `googletagmanager.com` with conversion data
5. Check Google Ads dashboard for conversion recordings (may take a few hours to appear)

## Notes

- Conversions are only tracked when `gtag` is available (Google Analytics/Tag Manager loaded)
- Fallback behavior ensures buttons work even if tracking fails
- All existing functionality remains unchanged
- No impact on page performance or user experience
