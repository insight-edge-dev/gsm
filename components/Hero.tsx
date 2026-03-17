'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'

interface HeroImage {
  src: string
  alt: string
}

interface HeroProps {
  badge?: string
  title: string
  titleHighlight?: string
  subtitle: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  images?: HeroImage[]
  imageSrc?: string
  imageAlt?: string
  stats?: { label: string; value: string }[]
}

export default function Hero({
  badge,
  title,
  titleHighlight,
  subtitle,
  primaryCta,
  secondaryCta,
  images,
  imageSrc,
  imageAlt,
  stats,
}: HeroProps) {

  // ✅ ALWAYS return at least 1 image
  const carouselImages = useMemo<HeroImage[]>(() => {
    if (images && images.length > 0) return images
    if (imageSrc) return [{ src: imageSrc, alt: imageAlt ?? '' }]

    // 🔥 fallback image (put this in /public/images/fallback.jpg)
    return [
      {
        src: '/images/fallback.jpg',
        alt: 'Fallback image',
      },
    ]
  }, [images, imageSrc, imageAlt])

  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // ✅ Prevent index overflow
  useEffect(() => {
    if (activeIndex >= carouselImages.length) {
      setActiveIndex(0)
    }
  }, [carouselImages.length])

  // ✅ Auto slider
  useEffect(() => {
    if (carouselImages.length <= 1) return

    const interval = setInterval(() => {
      if (!isPaused) {
        setActiveIndex((prev) => (prev + 1) % carouselImages.length)
      }
    }, 4500)

    return () => clearInterval(interval)
  }, [carouselImages.length, isPaused])

  const activeImage = carouselImages[activeIndex]

  return (
    <section className="relative px-6 py-16 md:py-24 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">

          {/* TEXT */}
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

              <p className="max-w-xl text-lg leading-relaxed text-slate-600">
                {subtitle}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="flex items-center gap-2 rounded-xl bg-[#1a3b5b] px-8 py-4 font-bold text-white shadow-lg transition hover:bg-[#1a3b5b]/90"
                >
                  {primaryCta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}

              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="rounded-xl border border-slate-200 bg-white px-8 py-4 font-bold text-slate-900 hover:bg-slate-50"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>

            {/* STATS */}
            {stats && (
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-xl bg-slate-50 p-6">
                    <p className="text-sm text-slate-500">{s.label}</p>
                    <p className="text-3xl font-black">{s.value}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* IMAGE */}
          <motion.div
            className="group relative w-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative h-[260px] sm:h-[320px] md:h-[420px] overflow-hidden rounded-2xl shadow-xl">

              <AnimatePresence>
                <motion.div
                  key={activeImage.src} // ✅ FIXED KEY
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={activeImage.src}
                    alt={activeImage.alt}
                    fill
                    priority={activeIndex === 0}
                    sizes="(max-width:768px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </motion.div>
              </AnimatePresence>

              {/* 🔥 Premium overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}