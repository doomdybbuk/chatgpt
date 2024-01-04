import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/global.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChatGPT',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          {/* Sidebar */}
          {/* Client Provider-Notification */}



        <div className='bg-[#343541] flex-1'>{children}</div>
        </div>
      </body>
    </html>
  )
}
