import { JetBrains_Mono } from 'next/font/google'
import '../styles/globals.css'

const mono = JetBrains_Mono({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mono.className}>{children}</body>
    </html>
  )
}
