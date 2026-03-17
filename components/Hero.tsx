'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface HeroProps {
  badge?: string
  title: string
  titleHighlight?: string
  subtitle: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  imageSrc: string
  imageAlt: string
  stats?: { label: string; value: string }[]
}

export default function Hero({
  badge,
  title,
  titleHighlight,
  subtitle,
  primaryCta,
  secondaryCta,
  imageSrc,
  imageAlt,
  stats,
}: HeroProps) {
  return (
    <section className="relative px-6 py-16 md:py-24 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Text Side */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col gap-4">
              {badge && (
                <span className="inline-flex w-fit items-center rounded-full bg-[#1a3b5b]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#1a3b5b]">
                  {badge}
                </span>
              )}
              <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-6xl">
                {title}{' '}
                {titleHighlight && (
                  <span className="text-[#1a3b5b]">{titleHighlight}</span>
                )}
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-slate-600">{subtitle}</p>
            </div>

            <div className="flex flex-wrap gap-4">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="flex items-center gap-2 rounded-xl bg-[#1a3b5b] px-8 py-4 font-bold text-white shadow-lg shadow-[#1a3b5b]/20 transition-all hover:bg-[#1a3b5b]/90"
                >
                  {primaryCta.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="rounded-xl border border-slate-200 bg-white px-8 py-4 font-bold text-slate-900 transition-all hover:bg-slate-50"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>

            {/* Stats */}
            {stats && stats.length > 0 && (
              <div className="mt-4 grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-xl border border-slate-100 bg-slate-50 p-6">
                    <p className="text-sm font-medium text-slate-500">{s.label}</p>
                    <p className="text-3xl font-black text-slate-900">{s.value}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Image Side */}
          <motion.div
            className="group relative"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="absolute -inset-1 rounded-2xl bg-[#1a3b5b]/20 opacity-25 blur transition duration-1000 group-hover:opacity-40 group-hover:duration-200" />
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover grayscale-[0.2] transition-all duration-700 hover:grayscale-0"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
