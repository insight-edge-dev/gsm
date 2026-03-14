'use client'

import { motion } from 'framer-motion'

interface Badge {
  abbr: string
  label: string
}

interface CertificationSectionProps {
  heading?: string
  description?: string
  badges: Badge[]
}

export default function CertificationSection({
  heading = 'Certified for Excellence',
  description = 'GSM Group is an empanelled contractor for India\'s major governing bodies, maintaining the highest standards of safety, quality, and compliance.',
  badges,
}: CertificationSectionProps) {
  return (
    <section className="px-6 py-20 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-[#1a3b5b]/10 bg-[#1a3b5b]/5 p-12"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative z-10 flex flex-col gap-12 lg:flex-row lg:items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900">{heading}</h2>
              <p className="mt-4 text-slate-600">{description}</p>
            </div>
            <div className="grid grid-cols-2 items-center gap-8 md:grid-cols-3 lg:w-1/2">
              {badges.map((b) => (
                <div key={b.abbr} className="flex flex-col items-center gap-3">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
                    <span className="text-xs font-black text-[#1a3b5b]">{b.abbr}</span>
                  </div>
                  <span className="text-center text-xs font-semibold text-slate-500">{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
