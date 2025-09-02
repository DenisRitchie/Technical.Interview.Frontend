import React, { useMemo, useState } from 'react'

type Props = {
  src?: string
  alt: string
  size?: number
}

// Simple inline SVG placeholder (data URI) with first letter
function placeholderDataURI(letter: string, size: number) {
  const bg = '#1f2937'
  const fg = '#e6eef8'
  const fontSize = Math.floor(size * 0.5)
  const svg = encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}'>
      <rect width='100%' height='100%' rx='${size/2}' fill='${bg}'/>
      <text x='50%' y='54%' dominant-baseline='middle' text-anchor='middle'
        font-family='Segoe UI, Roboto, Arial' font-size='${fontSize}' fill='${fg}'>${letter}</text>
    </svg>`
  )
  return `data:image/svg+xml;charset=utf-8,${svg}`
}

export default function AvatarImg({ src, alt, size = 40 }: Props) {
  const letter = (alt || '?').trim().charAt(0).toUpperCase() || '?'
  const fallback = useMemo(() => placeholderDataURI(letter, size), [letter, size])
  const [errored, setErrored] = useState(false)

  const showSrc = !errored && src ? src : fallback

  return (
    <img
      src={showSrc}
      alt={alt}
      width={size}
      height={size}
      referrerPolicy="no-referrer"
      loading="lazy"
      decoding="async"
      onError={() => setErrored(true)}
      style={{ borderRadius: '50%', objectFit: 'cover', border: '1px solid #334155' }}
    />
  )
}
