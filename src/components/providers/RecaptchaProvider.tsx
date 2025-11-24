'use client'

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

interface RecaptchaProviderProps {
  children: React.ReactNode
}

export default function RecaptchaProvider({ children }: RecaptchaProviderProps) {
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

  if (!recaptchaSiteKey) {
    console.warn('reCAPTCHA site key not found. reCAPTCHA will not be available.')
    return <>{children}</>
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={recaptchaSiteKey}
      language="en"
      useRecaptchaNet={false}
      useEnterprise={false}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: 'head',
        nonce: undefined,
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  )
}
