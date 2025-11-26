'use client'

import { useState } from 'react'
import { trackContactFormConversion } from '@/utils/googleAdsConversion'
import { useRecaptcha } from '@/hooks/useRecaptcha'

interface ContactFormData {
  name: string
  email: string
  phone: string
  service: string
  propertyType: string
  urgency: string
  message: string
  address: string
  preferredContact: string
  bestTimeToCall: string
  consentToSms: boolean
  consentToPromotions: boolean
}

const ContactForm = () => {
  const { executeRecaptcha } = useRecaptcha()

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: 'general',
    propertyType: 'residential',
    urgency: 'standard',
    message: '',
    address: '',
    preferredContact: 'email',
    bestTimeToCall: '',
    consentToSms: false,
    consentToPromotions: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target
    const targetValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    setFormData((prev) => ({ ...prev, [name]: targetValue }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      console.log('Submitting form data:', formData)

      // Execute reCAPTCHA
      let recaptchaToken: string | null = null
      if (executeRecaptcha) {
        recaptchaToken = await executeRecaptcha('contact_form')
        if (!recaptchaToken) {
          throw new Error('reCAPTCHA verification failed')
        }
      }

      const response = await fetch('/api/contact-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form')
      }

      // Track conversion for Google Ads
      trackContactFormConversion()

      setSubmitStatus('success')
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'general',
        propertyType: 'residential',
        urgency: 'standard',
        message: '',
        address: '',
        preferredContact: 'email',
        bestTimeToCall: '',
        consentToSms: false,
        consentToPromotions: false,
      })
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Failed to submit form. Please try again or call us directly.',
      )
      console.error('Contact form error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="contact-form-container">
        <div className="contact-form success-message">
          <div className="success-icon">
            <span className="material-symbols-outlined">check_circle</span>
          </div>
          <h3>Thank You!</h3>
          <p>
            Your message has been sent successfully. We&apos;ll get back to you within 24 hours.
          </p>
          <p>
            For urgent matters, please call us at <a href="tel:+18014737548">(801) 473-7548</a>
          </p>
          <button onClick={() => setSubmitStatus('idle')} className="btn btn-primary">
            Send Another Message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-header">
          <h2>Get Your Free Estimate</h2>
          <p>Fill out the form below and we&apos;ll get back to you with a detailed quote.</p>
        </div>

        {submitStatus === 'error' && (
          <div className="error-message">
            <span className="material-symbols-outlined">error</span>
            <p>{errorMessage}</p>
          </div>
        )}

        <div className="form-grid">
          {/* Contact Information */}
          <div className="form-section">
            <h3>Contact Information</h3>

            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(801) 555-0123"
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Property Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="123 Main St, Kaysville, UT 84037"
              />
            </div>
          </div>

          {/* Service Details */}
          <div className="form-section">
            <h3>Service Details</h3>

            <div className="form-group">
              <label htmlFor="service">Service Needed</label>
              <select id="service" name="service" value={formData.service} onChange={handleChange}>
                <option value="">Select a service</option>
                <option value="tree-removal">Tree Removal</option>
                <option value="tree-trimming">Tree Trimming</option>
                <option value="emergency">Emergency Tree Service</option>
                <option value="storm-cleanup">Storm Cleanup</option>
                <option value="land-clearing">Land Clearing</option>
                <option value="municipal">Municipal Service</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="propertyType">Property Type</label>
              <select
                id="propertyType"
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
              >
                <option value="">Select property type</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="municipal">Municipal</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="urgency">Urgency</label>
              <select id="urgency" name="urgency" value={formData.urgency} onChange={handleChange}>
                <option value="">Select urgency</option>
                <option value="emergency">Emergency (24 hours)</option>
                <option value="urgent">Urgent (2-3 days)</option>
                <option value="standard">Standard (1-2 weeks)</option>
                <option value="planning">Planning ahead</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="preferredContact">Preferred Contact Method</label>
              <select
                id="preferredContact"
                name="preferredContact"
                value={formData.preferredContact}
                onChange={handleChange}
              >
                <option value="">Select contact method</option>
                <option value="phone">Phone</option>
                <option value="email">Email</option>
                <option value="text">Text</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="bestTimeToCall">Best Time to Call</label>
              <input
                type="text"
                id="bestTimeToCall"
                name="bestTimeToCall"
                value={formData.bestTimeToCall}
                onChange={handleChange}
                placeholder="e.g., Morning, Afternoon, Evening"
              />
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="form-group full-width">
          <label htmlFor="message">Project Details / Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Please describe your tree service needs, including details about the trees, property conditions, and any specific concerns..."
          />
        </div>

        {/* Consent Section */}
        <div className="form-section consent-section full-width">
          <h3>Communication Preferences</h3>
          
          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="consentToSms"
                checked={formData.consentToSms}
                onChange={handleChange}
              />
              <span className="checkbox-text">
                I consent to receive text messages from Clean Cut Trees regarding my inquiry and future services. 
                I understand that message and data rates may apply, and I can opt out at any time by replying STOP.
              </span>
            </label>
          </div>

          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="consentToPromotions"
                checked={formData.consentToPromotions}
                onChange={handleChange}
              />
              <span className="checkbox-text">
                I would like to receive promotional offers, seasonal tips, and updates about Clean Cut Trees services 
                via email and/or SMS. I can unsubscribe at any time.
              </span>
            </label>
          </div>

          <div className="a2p-compliance">
            <p className="compliance-text">
              <strong>SMS Terms & Conditions:</strong> By providing your phone number and checking the SMS consent box above, 
              you agree to receive text messages from Clean Cut Trees. Message frequency varies. Message and data rates may apply. 
              Reply STOP to opt out or HELP for help. Carriers are not liable for delayed or undelivered messages. 
              Your consent is not a condition of purchase.
            </p>
            <p className="compliance-text">
              For questions about our SMS program, email us or call <a href="tel:+13852022172">(385) 202-2172</a>.
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <div className="form-submit">
          <button type="submit" className="btn btn-primary btn-large" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <span className="loading-spinner"></span>
                Sending...
              </>
            ) : (
              'Get Free Estimate'
            )}
          </button>

          <p className="form-note">
            * Required fields. We typically respond within 24 hours. For emergencies, call
            <a href="tel:+18014737548">(801) 473-7548</a>
          </p>
          <p className="recaptcha-info">
            This site is protected by reCAPTCHA and the Google{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">
              Terms of Service
            </a>{' '}
            apply.
          </p>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
