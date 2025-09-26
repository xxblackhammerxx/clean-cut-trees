import type { CollectionConfig } from 'payload'

export const ContactSubmissions: CollectionConfig = {
  slug: 'contact-submissions',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'phone', 'createdAt'],
    group: 'Forms',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => false,
    delete: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Full Name',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'Email Address',
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone Number',
    },
    {
      name: 'service',
      type: 'select',
      label: 'Service Interested In',
      hasMany: false,
      defaultValue: 'general',
      options: [
        { label: 'Tree Removal', value: 'tree-removal' },
        { label: 'Tree Trimming', value: 'tree-trimming' },
        { label: 'Emergency Tree Service', value: 'emergency' },
        { label: 'Storm Cleanup', value: 'storm-cleanup' },
        { label: 'Land Clearing', value: 'land-clearing' },
        { label: 'Municipal Service', value: 'municipal' },
        { label: 'General Inquiry', value: 'general' },
      ],
    },
    {
      name: 'propertyType',
      type: 'select',
      label: 'Property Type',
      hasMany: false,
      defaultValue: 'residential',
      options: [
        { label: 'Residential', value: 'residential' },
        { label: 'Commercial', value: 'commercial' },
        { label: 'Municipal', value: 'municipal' },
      ],
    },
    {
      name: 'urgency',
      type: 'select',
      label: 'Urgency',
      hasMany: false,
      defaultValue: 'standard',
      options: [
        { label: 'Emergency (24 hours)', value: 'emergency' },
        { label: 'Urgent (2-3 days)', value: 'urgent' },
        { label: 'Standard (1-2 weeks)', value: 'standard' },
        { label: 'Planning ahead', value: 'planning' },
      ],
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Message / Project Details',
    },
    {
      name: 'address',
      type: 'text',
      label: 'Property Address',
    },
    {
      name: 'preferredContact',
      type: 'select',
      label: 'Preferred Contact Method',
      hasMany: false,
      defaultValue: 'email',
      options: [
        { label: 'Phone', value: 'phone' },
        { label: 'Email', value: 'email' },
        { label: 'Text', value: 'text' },
      ],
    },
    {
      name: 'bestTimeToCall',
      type: 'text',
      label: 'Best Time to Call',
    },
    {
      name: 'status',
      type: 'select',
      label: 'Status',
      defaultValue: 'new',
      admin: {
        position: 'sidebar',
      },
      options: [
        { label: 'New', value: 'new' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'Quote Sent', value: 'quote-sent' },
        { label: 'Scheduled', value: 'scheduled' },
        { label: 'Completed', value: 'completed' },
        { label: 'Declined', value: 'declined' },
      ],
    },
    {
      name: 'notes',
      type: 'textarea',
      label: 'Internal Notes',
      admin: {
        position: 'sidebar',
      },
    },
  ],
  hooks: {
    afterChange: [
      async ({ doc, operation, req }) => {
        // Only send email on create (new submissions)
        if (operation === 'create') {
          try {
            // Format urgency label
            const urgencyLabels = {
              emergency: 'Emergency (24 hours)',
              urgent: 'Urgent (2-3 days)',
              standard: 'Standard (1-2 weeks)',
              planning: 'Planning ahead',
            }

            // Format service label
            const serviceLabels = {
              'tree-removal': 'Tree Removal',
              'tree-trimming': 'Tree Trimming',
              emergency: 'Emergency Tree Service',
              'storm-cleanup': 'Storm Cleanup',
              'land-clearing': 'Land Clearing',
              municipal: 'Municipal Service',
              general: 'General Inquiry',
            }

            const urgencyLabel =
              urgencyLabels[doc.urgency as keyof typeof urgencyLabels] || doc.urgency
            const serviceLabel =
              serviceLabels[doc.service as keyof typeof serviceLabels] || doc.service

            // Use Payload's built-in email functionality
            await req.payload.sendEmail({
              to: ['receptionist@cleancutstrees.com'], // Add multiple emails as needed
              bcc: 'eric@gainzmarketing.com',
              subject: `New Contact Form Submission - ${urgencyLabel}`,
              html: `
                <h2>New Contact Form Submission</h2>
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <h3 style="color: #2c5530; margin-top: 0;">Contact Information</h3>
                  <p><strong>Name:</strong> ${doc.name}</p>
                  <p><strong>Email:</strong> <a href="mailto:${doc.email}">${doc.email}</a></p>
                  ${doc.phone ? `<p><strong>Phone:</strong> <a href="tel:${doc.phone}">${doc.phone}</a></p>` : ''}
                  ${doc.address ? `<p><strong>Property Address:</strong> ${doc.address}</p>` : ''}
                </div>

                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <h3 style="color: #2c5530; margin-top: 0;">Service Details</h3>
                  <p><strong>Service:</strong> ${serviceLabel}</p>
                  ${doc.propertyType ? `<p><strong>Property Type:</strong> ${doc.propertyType}</p>` : ''}
                  <p><strong>Urgency:</strong> <span style="color: ${doc.urgency === 'emergency' ? '#dc3545' : doc.urgency === 'urgent' ? '#fd7e14' : '#28a745'}; font-weight: bold;">${urgencyLabel}</span></p>
                  ${doc.preferredContact ? `<p><strong>Preferred Contact:</strong> ${doc.preferredContact}</p>` : ''}
                  ${doc.bestTimeToCall ? `<p><strong>Best Time to Call:</strong> ${doc.bestTimeToCall}</p>` : ''}
                </div>

                ${
                  doc.message
                    ? `
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <h3 style="color: #2c5530; margin-top: 0;">Message</h3>
                  <p style="white-space: pre-wrap;">${doc.message}</p>
                </div>
                `
                    : ''
                }

                <div style="background: #2c5530; color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <h3 style="color: white; margin-top: 0;">Quick Actions</h3>
                  <p>
                    ${doc.phone ? `<a href="tel:${doc.phone}" style="color: #ffd700; text-decoration: none; margin-right: 20px;">📞 Call ${doc.phone}</a>` : ''}
                    <a href="mailto:${doc.email}" style="color: #ffd700; text-decoration: none; margin-right: 20px;">📧 Reply via Email</a>
                  </p>
                  <p style="margin: 0; font-size: 14px; opacity: 0.9;">
                    Submitted: ${new Date().toLocaleString('en-US', {
                      timeZone: 'America/Denver',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: 'numeric',
                      minute: '2-digit',
                      hour12: true,
                    })} (Mountain Time)
                  </p>
                </div>
              `,
            })

            console.log('Contact form email sent successfully')
          } catch (error) {
            console.error('Error sending contact form email:', error)
            // Don't throw error to prevent form submission failure
          }
        }
      },
    ],
  },
}
