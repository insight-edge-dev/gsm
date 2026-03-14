'use client'

import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/brands/powerlite', label: 'Powerlite AAC' },
  { href: '/brands/coal', label: 'Coal Division' },
  { href: '/brands/pavers', label: 'Marak Pavers' },
  { href: '/brands/roofings', label: 'Power Roofings' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex items-center justify-center ">
            <Image src="/images/logo.png" alt="GSM Group logo" width={80} height={80} className="block" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.slice(0, 5).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition-colors ${
                pathname === link.href
                  ? 'text-[#1a3b5b]'
                  : 'text-slate-500 hover:text-[#1a3b5b]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-lg bg-[#1a3b5b] px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#1a3b5b]/10 transition-all hover:bg-[#1a3b5b]/90 md:block"
          >
            Get in Touch
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="flex items-center justify-center rounded-lg p-2 text-slate-600 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                    pathname === link.href
                      ? 'bg-[#1a3b5b]/10 text-[#1a3b5b]'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-[#1a3b5b]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
