import { marked } from 'marked'
import { getPayload } from 'payload'

import ContactForm from '@/components/ContactForm'
import BookingButton from '@/components/BookingButton'
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

  const _renderContent = (content: any) => {
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
        '<a href="https://www.facebook.com/CleanCutsTrees/" target="_blank" rel="noopener noreferrer" class="social-link-inline facebook" aria-label="Follow us on Facebook"><i class="fab fa-facebook-f"></i></a>',
      )

      fixedContent = fixedContent.replace(
        /-\s*\[Follow\]\(https:\/\/www\.youtube\.com\/channel\/UCSMH2M8_eCp3TM7lxs7HC1w\/videos[^)]*\)/g,
        '<a href="https://www.youtube.com/channel/UCSMH2M8_eCp3TM7lxs7HC1w/videos" target="_blank" rel="noopener noreferrer" class="social-link-inline youtube" aria-label="Follow us on YouTube"><i class="fab fa-youtube"></i></a>',
      )

      fixedContent = fixedContent.replace(
        /-\s*\[Follow\]\(https:\/\/www\.instagram\.com\/clean_cuts_trees\/[^)]*\)/g,
        '<a href="https://www.instagram.com/clean_cuts_trees/" target="_blank" rel="noopener noreferrer" class="social-link-inline instagram" aria-label="Follow us on Instagram"><i class="fab fa-instagram"></i></a>',
      )

      // Also handle non-list format
      // Facebook
      fixedContent = fixedContent.replace(
        /\[Follow\]\(https:\/\/www\.facebook\.com\/CleanCutsTrees\/[^)]*\)/g,
        '<a href="https://www.facebook.com/CleanCutsTrees/" target="_blank" rel="noopener noreferrer" class="social-link-inline facebook" aria-label="Follow us on Facebook"><i class="fab fa-facebook-f"></i></a>',
      )

      // YouTube
      fixedContent = fixedContent.replace(
        /\[Follow\]\(https:\/\/www\.youtube\.com\/channel\/UCSMH2M8_eCp3TM7lxs7HC1w\/videos[^)]*\)/g,
        '<a href="https://www.youtube.com/channel/UCSMH2M8_eCp3TM7lxs7HC1w/videos" target="_blank" rel="noopener noreferrer" class="social-link-inline youtube" aria-label="Follow us on YouTube"><i class="fab fa-youtube"></i></a>',
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
      return content.root.children.map((node: any, index: number) => {
        if (node.type === 'paragraph') {
          return (
            <p key={index} className="content-paragraph">
              {node.children?.map((child: any) => child.text || '').join('')}
            </p>
          )
        }
        if (node.type === 'heading') {
          const headingLevel = node.tag || 'h2'
          if (headingLevel === 'h1') {
            return (
              <h1 key={index} className="content-heading">
                {node.children?.map((child: any) => child.text || '').join('')}
              </h1>
            )
          }
          if (headingLevel === 'h2') {
            return (
              <h2 key={index} className="content-heading">
                {node.children?.map((child: any) => child.text || '').join('')}
              </h2>
            )
          }
          if (headingLevel === 'h3') {
            return (
              <h3 key={index} className="content-heading">
                {node.children?.map((child: any) => child.text || '').join('')}
              </h3>
            )
          }
          return (
            <h2 key={index} className="content-heading">
              {node.children?.map((child: any) => child.text || '').join('')}
            </h2>
          )
        }
        return null
      })
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
