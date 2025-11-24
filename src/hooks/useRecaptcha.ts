import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { useCallback } from 'react'

export const useRecaptcha = () => {
  const { executeRecaptcha } = useGoogleReCaptcha()

  const executeRecaptchaAction = useCallback(
    async (action: string): Promise<string | null> => {
      if (!executeRecaptcha) {
        console.log('Execute recaptcha not yet available')
        return null
      }

      try {
        const token = await executeRecaptcha(action)
        return token
      } catch (error) {
        console.error('reCAPTCHA execution failed:', error)
        return null
      }
    },
    [executeRecaptcha],
  )

  return {
    executeRecaptcha: executeRecaptchaAction,
    isReady: !!executeRecaptcha,
  }
}
