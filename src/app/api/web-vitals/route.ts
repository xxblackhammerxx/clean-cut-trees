import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the incoming data
    const { name, value, id, rating, delta, navigationType, timestamp, url, userAgent } = body

    if (!name || typeof value !== 'number') {
      return NextResponse.json({ error: 'Invalid metric data' }, { status: 400 })
    }

    // Log to console (in development you might want to store in database)
    console.log(`[Web Vitals API] ${name}: ${value} (${rating})`, {
      id,
      delta,
      navigationType,
      url,
      timestamp: new Date(timestamp).toISOString(),
      userAgent: userAgent?.substring(0, 100), // Truncate long user agents
    })

    // Here you could:
    // 1. Store in your database
    // 2. Send to external analytics service
    // 3. Send to logging service like DataDog, New Relic, etc.

    // Example: Store in database (you'd need to implement this)
    /*
    await database.webVitals.create({
      data: {
        metric: name,
        value,
        rating,
        url,
        userAgent,
        timestamp: new Date(timestamp),
      }
    })
    */

    // Example: Send to external service
    /*
    await fetch('https://your-analytics-service.com/metrics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
    */

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error processing web vital:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
