# Web Vitals Monitoring Guide

## 🎯 How It Works

The Web Vitals monitoring system automatically tracks real user performance metrics and provides multiple ways to view and analyze the data.

## 📊 Metrics Tracked

### Core Web Vitals

- **FCP** (First Contentful Paint) - When first content appears
- **LCP** (Largest Contentful Paint) - When main content is loaded
- **FID** (First Input Delay) - How quickly page responds to interaction
- **CLS** (Cumulative Layout Shift) - How much content shifts during load
- **TTFB** (Time to First Byte) - Server response time
- **INP** (Interaction to Next Paint) - Input responsiveness

### Rating System

- 🟢 **Good** - Excellent performance
- 🟡 **Needs Improvement** - Acceptable but could be better
- 🔴 **Poor** - Needs optimization

## 🔧 How to Use

### 1. Development Mode

When running `pnpm dev`, you get:

**Console Logging:**

```bash
🟢 [Web Vitals] FCP
  Value: 1200ms
  Rating: good
  Delta: 1200
  Navigation: navigate
  ID: v3-1694...
```

**Visual Dashboard:**

- Press `Ctrl+Shift+P` to toggle the floating dashboard
- Shows real-time metrics with color-coded ratings
- Displays thresholds and progress bars

### 2. Production Mode

In production, metrics are sent to:

**Google Analytics 4** (if configured):

```javascript
gtag('event', 'LCP', {
  value: 2100,
  event_label: 'v3-1694...',
  rating: 'good',
})
```

**Custom API Endpoint:**

```javascript
POST /api/web-vitals
{
  "name": "LCP",
  "value": 2100,
  "rating": "good",
  "url": "https://yourdomain.com/",
  "viewport": { "width": 1920, "height": 1080 },
  "connection": "4g"
}
```

## 📈 Setting Up Analytics

### Google Analytics 4

1. Add GA4 tracking code to your site
2. The WebVitals component will automatically send events
3. View in GA4 under Events > Web Vitals

### Custom Analytics

The API endpoint (`/api/web-vitals`) receives all metric data. You can:

1. **Store in Database:**

```typescript
// In /api/web-vitals/route.ts
await prisma.webVital.create({
  data: {
    metric: name,
    value,
    rating,
    url,
    timestamp: new Date(),
  },
})
```

2. **Send to External Service:**

```typescript
// Send to DataDog, New Relic, etc.
await fetch('https://api.datadoghq.com/api/v1/events', {
  method: 'POST',
  headers: { 'DD-API-KEY': process.env.DATADOG_API_KEY },
  body: JSON.stringify({
    title: `Web Vital: ${name}`,
    text: `${value}ms (${rating})`,
    tags: [`metric:${name}`, `rating:${rating}`],
  }),
})
```

### Vercel Analytics

If you're using Vercel, the component automatically integrates:

```bash
npm install @vercel/analytics
```

## 🚦 Monitoring Thresholds

### Good Performance Targets

- **FCP**: < 1.8 seconds
- **LCP**: < 2.5 seconds
- **FID**: < 100 milliseconds
- **CLS**: < 0.1
- **TTFB**: < 800 milliseconds
- **INP**: < 200 milliseconds

### Poor Performance Alerts

- **FCP**: > 3.0 seconds
- **LCP**: > 4.0 seconds
- **FID**: > 300 milliseconds
- **CLS**: > 0.25
- **TTFB**: > 1.8 seconds
- **INP**: > 500 milliseconds

## 🔍 Development Workflow

### 1. Start Development Server

```bash
pnpm dev
```

### 2. Open Developer Tools

- Check console for detailed Web Vitals logs
- Press `Ctrl+Shift+P` for visual dashboard

### 3. Test Different Scenarios

- Navigate between pages
- Test on different devices (DevTools device emulation)
- Throttle network/CPU to simulate slower devices

### 4. Monitor Real-Time

The dashboard updates as you interact with the site, showing:

- Current metric values
- Performance ratings
- Progress against thresholds

## 📊 Production Monitoring

### 1. Deploy with Analytics

```bash
npm run build
npm start
```

### 2. View Data

- **Console**: Check server logs for `/api/web-vitals` requests
- **GA4**: Events > Web Vitals in your Google Analytics
- **Custom Dashboard**: Build using the API data

### 3. Set Up Alerts

```typescript
// Example: Alert if LCP > 4 seconds
if (metric.name === 'LCP' && metric.value > 4000) {
  await sendSlackAlert(`⚠️ Poor LCP detected: ${metric.value}ms on ${url}`)
}
```

## 🛠️ Configuration Options

### WebVitals Component

```tsx
<WebVitals
  enableConsoleLogging={true} // Log to console in dev
  enableAnalytics={true} // Send to GA4
  enableCustomEndpoint={true} // Send to /api/web-vitals
  debug={false} // Enable debug mode
/>
```

### Environment Variables

```bash
# .env.local
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
WEB_VITALS_ENDPOINT=https://your-analytics.com/metrics
```

## 📱 Mobile Testing

Web Vitals vary significantly on mobile devices:

1. **Test on Real Devices** when possible
2. **Use DevTools Device Emulation**
3. **Throttle Network** to simulate 3G/4G
4. **Monitor Mobile-Specific Metrics**

## 🔄 Continuous Monitoring

### 1. Automated Checks

```bash
# Add to CI/CD pipeline
npm run lighthouse
npm run build:analyze
```

### 2. Regular Audits

- Weekly PageSpeed Insights checks
- Monthly performance reviews
- Quarterly goal assessments

### 3. User Feedback

- Monitor real user metrics (RUM)
- Track performance complaints
- A/B test performance improvements

## 🎯 Quick Start

1. **Development**: Run `pnpm dev` and press `Ctrl+Shift+P`
2. **Production**: Deploy and check `/api/web-vitals` logs
3. **Analytics**: Connect to GA4 or your preferred service
4. **Alerts**: Set up monitoring for poor performance

The system is now ready to help you monitor and improve your website's performance! 🚀
