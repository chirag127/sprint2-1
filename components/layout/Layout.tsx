'use client'

import React from 'react'
import { SessionProvider } from 'next-auth/react'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
  session?: any
}

const Layout: React.FC<LayoutProps> = ({ children, session }) => {
  return (
    <SessionProvider session={session}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 bg-gray-50">
          {children}
        </main>
        <Footer />
      </div>
    </SessionProvider>
  )
}

export default Layout
