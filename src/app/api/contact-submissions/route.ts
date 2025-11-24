import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { verifyRecaptcha } from '@/utils/recaptcha'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { recaptchaToken, ...formData } = body

    // Verify reCAPTCHA token
    if (recaptchaToken) {
      const verification = await verifyRecaptcha(recaptchaToken, 'contact_form')

      if (!verification.success) {
        return NextResponse.json(
          {
            error: 'Security validation failed. Please try again.',
            details: verification.error,
          },
          { status: 400 },
        )
      }

      console.log(`reCAPTCHA verified successfully. Score: ${verification.score}`)
    } else {
      console.warn('No reCAPTCHA token provided for contact form submission')
      // Uncomment the lines below to make reCAPTCHA required:
      // return NextResponse.json(
      //   { error: 'Security validation is required.' },
      //   { status: 400 }
      // )
    }

    // Get Payload instance
    const payload = await getPayload({ config })

    // Create the contact submission in Payload
    const result = await payload.create({
      collection: 'contact-submissions',
      data: formData,
    })

    return NextResponse.json({
      success: true,
      id: result.id,
      message: 'Form submitted successfully',
    })
  } catch (error) {
    console.error('Contact form submission error:', error)

    return NextResponse.json(
      {
        error: 'Failed to submit form. Please try again or call us directly.',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    )
  }
}
