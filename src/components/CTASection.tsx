import BookingButton from '@/components/BookingButton'
import Link from 'next/link'

interface CTASectionProps {
  title: string
  description: string
  primaryButtonText?: string
  primaryButtonVariant?: 'primary' | 'secondary' | 'outline'
  showPhoneButton?: boolean
  phoneNumber?: string
  phoneDisplayText?: string
  className?: string
  containerClassName?: string
}

export default function CTASection({
  title,
description,
  primaryButtonText = 'Schedule Tree Service',
  primaryButtonVariant = 'primary',
  showPhoneButton = true,
  phoneNumber = '+18014737548',
  phoneDisplayText = '📞 (801) 473-7548',
  className = '',
  containerClassName = '',
}: CTASectionProps) {
  return (
    <section className={`partners-cta ${className}`.trim()}>
      <div className={`container ${containerClassName}`.trim()}>
        <div className="cta-box">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="cta-buttons">
            <BookingButton variant={primaryButtonVariant} size="large">
              {primaryButtonText}
            </BookingButton>
            {showPhoneButton && (
              <Link href={`tel:${phoneNumber}`} className="btn btn-phone btn-large">
                {phoneDisplayText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
