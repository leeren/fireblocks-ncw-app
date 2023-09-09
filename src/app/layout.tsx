import { fonts } from './fonts';

import './globals.css'

export const metadata = {
  title: 'Fireblocks NCW App',
  description: 'Permissionless Fireblocks NCW Demo (author: @leeren)',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className={`${fonts.map(font => font.variable).join(' ')} `}>
      <body className="overflow-hidden">
				{children}
      </body>
    </html>
  )
}
