import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css';
import ThemeSwitcher from './components/theme/themeSwitcher';
import Providers from './components/theme/providers';
import Header from './components/Header';
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Focus Creative',
  description: 'Focus creative is your one stop shop for all your digital marketing needs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ThemeSwitcher />
          <Header />
          {children}
          <Analytics/>
        </Providers>        
      </body>
    </html>
  )
}
