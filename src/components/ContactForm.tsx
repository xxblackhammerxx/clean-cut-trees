'use client'

import { useState } from 'react'

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
}

const ContactForm = () => {
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
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      console.log('Submitting form data:', formData)

      const response = await fetch('/api/contact-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

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
      })
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Failed to submit form. Please try again or call us directly.')
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
            * Required fields. We typically respond within 24 hours. For emergencies, call{' '}
            <a href="tel:+18014737548">(801) 473-7548</a>
          </p>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
