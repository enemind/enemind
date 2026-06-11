'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function JokeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 bg-white/5 backdrop-blur-md border-b border-white/10 z-40 p-4">
        <div className="max-w-7xl mx-auto flex items-center">
          <Link href="/" className="inline-flex items-center gap-2 text-white hover:text-white/80 transition">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
        </div>
      </nav>
      <div className="pt-0">
        {children}
      </div>
    </div>
  )
}
