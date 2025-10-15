'use client'

interface GoogleTagManagerNoScriptProps {
  gtmId: string
}

export default function GoogleTagManagerNoScript({ gtmId }: GoogleTagManagerNoScriptProps) {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  )
}
