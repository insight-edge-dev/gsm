'use client'

import { motion } from 'framer-motion'
import { School, Users } from 'lucide-react'
import Image from 'next/image'

interface ImpactItem {
  icon: string
  heading: string
  body: string
}

interface ImpactSectionProps {
  eyebrow?: string
  heading: string
  description: string
  image1Src: string
  image2Src: string
  items: ImpactItem[]
}

export default function ImpactSection({
  eyebrow = 'Beyond Business',
  heading,
  description,
  image1Src,
  image2Src,
  items,
}: ImpactSectionProps) {
  return (
    <section className="bg-slate-50/50 px-6 py-24 lg:px-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Images */}
        <motion.div
          className="order-2 grid grid-cols-2 gap-4 lg:order-1"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative h-64 w-full overflow-hidden rounded-xl shadow-lg">
            <Image src={image1Src} alt="Community Impact" fill className="object-fill" />
          </div>
          <div className="relative mt-8 h-64 w-full overflow-hidden rounded-xl shadow-lg">
            <Image src={image2Src} alt="Education Impact" fill className="object-fill" />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          className="order-1 flex flex-col gap-6 lg:order-2"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#1a3b5b]">{eyebrow}</span>
          <h2 className="text-4xl font-bold text-slate-900">{heading}</h2>
          <p className="text-lg leading-relaxed text-slate-600">{description}</p>

          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.heading} className="flex items-start gap-4">
                <div className="mt-1 text-[#1a3b5b]">
                  {item.icon === 'school' ? (
                    <School className="h-8 w-8" aria-hidden="true" />
                  ) : (
                    <Users className="h-8 w-8" aria-hidden="true" />
                  )}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">{item.heading}</h4>
                  <p className="text-sm text-slate-500">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
