interface RecaptchaResponse {
  success: boolean
  score: number
  action: string
  challenge_ts: string
  hostname: string
  'error-codes'?: string[]
}

export async function verifyRecaptcha(
  token: string,
  expectedAction?: string,
): Promise<{
  success: boolean
  score: number
  error?: string
}> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY

  if (!secretKey) {
    return {
      success: false,
      score: 0,
      error: 'reCAPTCHA secret key not configured',
    }
  }

  if (!token) {
    return {
      success: false,
      score: 0,
      error: 'No reCAPTCHA token provided',
    }
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
      }),
    })

    if (!response.ok) {
      return {
        success: false,
        score: 0,
        error: 'Failed to verify reCAPTCHA',
      }
    }

    const data: RecaptchaResponse = await response.json()

    if (!data.success) {
      return {
        success: false,
        score: 0,
        error: `reCAPTCHA verification failed: ${data['error-codes']?.join(', ') || 'Unknown error'}`,
      }
    }

    // Check if action matches (for v3)
    if (expectedAction && data.action !== expectedAction) {
      return {
        success: false,
        score: data.score || 0,
        error: `Action mismatch. Expected: ${expectedAction}, Got: ${data.action}`,
      }
    }

    // For v3, check score threshold (0.5 is a good default)
    const scoreThreshold = 0.5
    if (data.score < scoreThreshold) {
      return {
        success: false,
        score: data.score,
        error: `Score too low: ${data.score}. Threshold: ${scoreThreshold}`,
      }
    }

    return {
      success: true,
      score: data.score,
    }
  } catch (error) {
    console.error('reCAPTCHA verification error:', error)
    return {
      success: false,
      score: 0,
      error: 'Failed to verify reCAPTCHA',
    }
  }
}
