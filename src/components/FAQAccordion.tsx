'use client'

import { useEffect } from 'react'

export default function FAQAccordion() {
  useEffect(() => {
    const handleFAQClick = (event: Event) => {
      const target = event.target as HTMLElement
      const faqQuestion = target.closest('.faq-question')
      
      if (faqQuestion) {
        const faqItem = faqQuestion.closest('.faq-item')
        if (faqItem) {
          faqItem.classList.toggle('active')
        }
      }
    }

    // Add click listeners to all FAQ questions
    const faqQuestions = document.querySelectorAll('.faq-question')
    faqQuestions.forEach(question => {
      question.addEventListener('click', handleFAQClick)
    })

    // Cleanup function
    return () => {
      faqQuestions.forEach(question => {
        question.removeEventListener('click', handleFAQClick)
      })
    }
  }, [])

  return null // This component doesn't render anything
}
