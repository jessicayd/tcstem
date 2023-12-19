import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next'
import '../../styles/styles.css'


export const metadata: Metadata = {
  title: 'Teach Children STEM',
  description: 'A nonprofit dedicated to teaching.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/icon.ico" sizes="any" />
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
