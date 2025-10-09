import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page Not Found - Clean Cut Trees',
  description:
    'The page you are looking for could not be found. Visit our homepage or contact us for tree services in Utah.',
  robots: 'noindex, nofollow',
}

export default function NotFound() {
  return (
    <div className="bg-white py-8 pt-48 px-4 shadow " style={{ paddingTop: '12rem' }}>
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <h2 className="mt-4 text-2xl font-bold text-gray-900">Page Not Found</h2>
        <p className="mt-2 text-sm text-gray-600">
          The page you are looking for could not be found. It may have been moved, deleted, or you
          entered an incorrect URL.
        </p>
      </div>

      <div
        className="mt-8 space-y-4 w-[300px]flex flex-col mx-auto"
        style={{ maxWidth: '300px', margin: '0 auto' }}
      >
        <Link
          href="/"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Go to Homepage
        </Link>
        <Link
          href="/services"
          className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          View Our Services
        </Link>

        <Link
          href="/contact-us"
          className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Contact Us
        </Link>

        <Link
          href="/blog"
          className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Read Our Blog
        </Link>
      </div>

      <div className="mt-8 text-center">
        <p className="text-xs text-gray-500">
          Need help?
          <Link href="/contact-us" className="text-green-600 hover:text-green-500">
            Contact us
          </Link>
          for assistance.
        </p>
      </div>
    </div>
  )
}
