'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface PortfolioCard {
  title: string
  description: string
  imageSrc: string
  href: string
}

interface PortfolioCardsProps {
  heading?: string
  subheading?: string
  cards: PortfolioCard[]
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
}

export default function PortfolioCards({ heading, subheading, cards }: PortfolioCardsProps) {
  return (
    <section className="border-y border-slate-100 bg-slate-50 px-6 py-24 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {(heading || subheading) && (
          <div className="mb-16 text-center">
            {heading && (
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                {heading}
              </h2>
            )}
            {subheading && <p className="mt-4 text-slate-600">{subheading}</p>}
          </div>
        )}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:border-[#1a3b5b]/20 hover:shadow-xl"
            >
              <div className="h-48 w-full overflow-hidden">
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  width={480}
                  height={192}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-slate-900">{card.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{card.description}</p>
                <Link
                  href={card.href}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#1a3b5b] transition-colors hover:text-[#1a3b5b]/80"
                >
                  <span>Learn more</span>
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
