import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RedotPay - Best USD to BDT Exchange Service in Bangladesh | Instant Exchange',
  description: 'Exchange USD to BDT instantly with RedotPay. Get the best exchange rate with secure transactions and 24/7 support. Fast, reliable, and trusted by thousands in Bangladesh.',
  keywords: 'USD to BDT, dollar exchange, taka exchange, currency exchange Bangladesh, best exchange rate, instant exchange, secure exchange, RedotPay, dollar to taka, USD exchange rate, BDT exchange rate, Bangladesh currency exchange, online exchange service',
  openGraph: {
    title: 'RedotPay - Best USD to BDT Exchange Service in Bangladesh',
    description: 'Exchange USD to BDT instantly with RedotPay. Get the best exchange rate (140 BDT) with secure transactions and 24/7 support.',
    type: 'website',
    locale: 'bn_BD',
    siteName: 'RedotPay',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RedotPay - USD to BDT Exchange Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RedotPay - Best USD to BDT Exchange Service in Bangladesh',
    description: 'Exchange USD to BDT instantly with RedotPay. Get the best exchange rate (140 BDT) with secure transactions and 24/7 support.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://redotpay.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'S7ZvfajEy_awycVeB0scdpA3_aeP3kBdxrWIRpnAAz0',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "RedotPay",
    "description": "Instant USD to BDT exchange service in Bangladesh. Get the best exchange rate of 140 BDT with secure transactions and 24/7 support.",
    "url": "https://redotpay-exchanger.vercel.app",
    "telephone": "+880 1234567890",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Bangladesh",
      "addressRegion": "Dhaka"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "23.8103",
      "longitude": "90.4125"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "sameAs": [
      "https://facebook.com/redotpay",
      "https://twitter.com/redotpay",
      "https://linkedin.com/company/redotpay"
    ],
    "priceRange": "$$",
    "areaServed": "Bangladesh",
    "serviceType": "Currency Exchange",
    "currenciesAccepted": "USD, BDT"
  };

  return (
    <html lang="bn">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="geo.region" content="BD" />
        <meta name="geo.placename" content="Bangladesh" />
        <meta name="geo.position" content="23.6850;90.3563" />
        <meta name="ICBM" content="23.6850, 90.3563" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
} 