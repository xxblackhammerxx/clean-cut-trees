import { marked } from 'marked'
import { getPayload } from 'payload'

import BookingButton from '@/components/BookingButton'
import ContactForm from '@/components/ContactForm'
import config from '@/payload.config'

export async function generateMetadata() {
  return {
    title: 'Contact Us - Clean Cuts Trees',
    description:
      'Get a free estimate for professional tree services in Davis, Weber, and Salt Lake Counties. Contact Clean Cuts Trees today!',
    keywords:
      'contact Clean Cuts Trees, tree service estimate, Kaysville tree service, Utah tree removal',
  }
}

export default async function ContactPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // Fetch contact page content
  const pages = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'contact-us',
      },
    },
    limit: 1,
  })

  const _page = pages.docs[0]

  const _renderContent = (
    content: string | { root?: { children?: { [k: string]: unknown }[] } } | null | undefined,
  ) => {
    if (typeof content === 'string') {
      // Configure marked for safe HTML rendering
      marked.setOptions({
        breaks: true,
        gfm: true,
      })

      // Fix broken external image URLs before parsing
      let fixedContent = content

      // Replace broken external image URLs with local fallbacks or remove them
      fixedContent = fixedContent.replace(
        /!\[([^\]]*)\]\(https:\/\/cleancutstrees\.com\/wp-content\/uploads\/[^)]*\)/g,
        '<!-- External image removed: $1 (original site no longer available) -->',
      )

      // Replace social media "Follow" links with proper icons
      // First, let's handle the list format and make them inline
      fixedContent = fixedContent.replace(
        /-\s*\[Follow\]\(https:\/\/www\.facebook\.com\/CleanCutsTrees\/[^)]*\)/g,
        '<a href="https://www.facebook.com/CleanCutsTrees/" target="_blank" rel="noopener noreferrer" class="social-link-inline facebook" aria-label="Follow us on Facebook"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>',
      )

      fixedContent = fixedContent.replace(
        /-\s*\[Follow\]\(https:\/\/www\.youtube\.com\/channel\/UCSMH2M8_eCp3TM7lxs7HC1w\/videos[^)]*\)/g,
        '<a href="https://www.youtube.com/channel/UCSMH2M8_eCp3TM7lxs7HC1w/videos" target="_blank" rel="noopener noreferrer" class="social-link-inline youtube" aria-label="Follow us on YouTube"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>',
      )

      fixedContent = fixedContent.replace(
        /-\s*\[Follow\]\(https:\/\/www\.instagram\.com\/clean_cuts_trees\/[^)]*\)/g,
        '<a href="https://www.instagram.com/clean_cuts_trees/" target="_blank" rel="noopener noreferrer" class="social-link-inline instagram" aria-label="Follow us on Instagram"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>',
      )

      // Also handle non-list format
      // Facebook
      fixedContent = fixedContent.replace(
        /\[Follow\]\(https:\/\/www\.facebook\.com\/CleanCutsTrees\/[^)]*\)/g,
        '<a href="https://www.facebook.com/CleanCutsTrees/" target="_blank" rel="noopener noreferrer" class="social-link-inline facebook" aria-label="Follow us on Facebook"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>',
      )

      // YouTube
      fixedContent = fixedContent.replace(
        /\[Follow\]\(https:\/\/www\.youtube\.com\/channel\/UCSMH2M8_eCp3TM7lxs7HC1w\/videos[^)]*\)/g,
        '<a href="https://www.youtube.com/channel/UCSMH2M8_eCp3TM7lxs7HC1w/videos" target="_blank" rel="noopener noreferrer" class="social-link-inline youtube" aria-label="Follow us on YouTube"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>',
      )

      // Instagram
      fixedContent = fixedContent.replace(
        /\[Follow\]\(https:\/\/www\.instagram\.com\/clean_cuts_trees\/[^)]*\)/g,
        '<a href="https://www.instagram.com/clean_cuts_trees/" target="_blank" rel="noopener noreferrer" class="social-link-inline instagram" aria-label="Follow us on Instagram"><i class="fab fa-instagram"></i></a>',
      )

      // Remove empty headings at the end of content (Our Services, Service Areas, Location with no content)
      fixedContent = fixedContent.replace(/###\s*(Our Services|Service Areas|Location)\s*$/gm, '')

      // Wrap consecutive social media links in a container
      fixedContent = fixedContent.replace(
        /((?:<a[^>]*class="social-link-inline[^>]*>.*?<\/a>\s*){2,})/g,
        '<div class="social-links-container">$1</div>',
      )

      // Parse markdown to HTML
      const htmlContent = marked(fixedContent)

      // Return HTML content with proper React rendering
      return <div className="markdown-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />
    }

    // Handle rich text content (Lexical format)
    if (content && content.root && content.root.children) {
      return content.root.children.map(
        (
          node: {
            type?: string
            tag?: string
            children?: { text?: string }[]
            [k: string]: unknown
          },
          index: number,
        ) => {
          if (node.type === 'paragraph') {
            return (
              <p key={index} className="content-paragraph">
                {node.children?.map((child: { text?: string }) => child.text || '').join('')}
              </p>
            )
          }
          if (node.type === 'heading') {
            const headingLevel = node.tag || 'h2'
            if (headingLevel === 'h1') {
              return (
                <h1 key={index} className="content-heading">
                  {node.children?.map((child: { text?: string }) => child.text || '').join('')}
                </h1>
              )
            }
            if (headingLevel === 'h2') {
              return (
                <h2 key={index} className="content-heading">
                  {node.children?.map((child: { text?: string }) => child.text || '').join('')}
                </h2>
              )
            }
            if (headingLevel === 'h3') {
              return (
                <h3 key={index} className="content-heading">
                  {node.children?.map((child: { text?: string }) => child.text || '').join('')}
                </h3>
              )
            }
            return (
              <h2 key={index} className="content-heading">
                {node.children?.map((child: { text?: string }) => child.text || '').join('')}
              </h2>
            )
          }
          return null
        },
      )
    }

    return <p>Content not available</p>
  }

  return (
    <div className="contact-page">
      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1>Contact Clean Cuts Trees</h1>
            <p>
              Get your free estimate today! We&apos;re here to help with all your tree service
              needs.
            </p>
            <div className="contact-hero-buttons">
              <BookingButton variant="primary" size="large">
                Book Service Online
              </BookingButton>
              <a href="tel:+18014737548" className="btn btn-phone btn-large">
                <span className="material-symbols-outlined">call</span>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <ContactForm />
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-header">
            <h2>Get In Touch</h2>
            <p>Multiple ways to reach our professional tree service team</p>
          </div>

          <div className="contact-info-list">
            <div className="contact-info-item">
              <div className="info-icon-inline">
                <span className="material-symbols-outlined">call</span>
              </div>
              <div className="info-content">
                <h3>Call Us</h3>
                <a href="tel:+18014737548" className="primary-link">
                  (801) 473-7548
                </a>
                <span className="info-note">24/7 Emergency Service Available</span>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="info-icon-inline">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div className="info-content">
                <h3>Email Us</h3>
                <a href="mailto:estimates@cleancutstrees.com" className="primary-link">
                  estimates@cleancutstrees.com
                </a>
                <span className="info-note">We respond within 24 hours</span>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="info-icon-inline">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div className="info-content">
                <h3>Service Area</h3>
                <span className="primary-text">Davis, Weber & Salt Lake Counties</span>
                <span className="info-note">Utah, United States</span>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="info-icon-inline">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <div className="info-content">
                <h3>Business Hours</h3>
                <span className="primary-text">Monday - Friday: 7AM - 6PM</span>
                <span className="info-note">Emergency services: 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Original Contact Content */}

      {/* Emergency CTA */}
      <section className="emergency-cta">
        <div className="container">
          <div className="emergency-box">
            <h2>Emergency Tree Service?</h2>
            <p>
              We&apos;re available 24/7 for emergency tree removal, storm damage cleanup, and urgent
              tree services.
            </p>
            <a href="tel:+18014737548" className="btn btn-emergency">
              <span className="material-symbols-outlined">emergency</span>
              Call Emergency Line: (801) 473-7548
            </a>
            <BookingButton variant="secondary" size="medium">
              Schedule Non-Emergency Service
            </BookingButton>
          </div>
        </div>
      </section>
    </div>
  )
}
