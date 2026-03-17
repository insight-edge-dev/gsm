'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Award, Calendar, Check, Globe, Handshake } from 'lucide-react'

export default function ConstructionPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 py-12 lg:px-20 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <span className="inline-block rounded border border-[#1a3b5b]/20 bg-[#1a3b5b]/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#1a3b5b]">
                Infrastructure Development
              </span>

              <h1 className="text-4xl font-black leading-tight tracking-tighter text-slate-900 md:text-6xl">
                Building Strong Foundations for <span className="text-[#1a3b5b]">Rural Infrastructure</span>
              </h1>

              <p className="max-w-xl text-lg text-slate-600">
                Since 2002, GSM Group’s Construction Division has specialized in delivering high-impact rural infrastructure projects through strategic government partnerships.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-[#1a3b5b] px-8 py-4 font-bold text-white transition-all hover:shadow-lg hover:shadow-[#1a3b5b]/20"
              >
                Explore Projects
              </Link>

              <Link
                href="/portfolio"
                className="rounded-xl border border-slate-300 px-8 py-4 font-bold text-slate-700 transition-all hover:bg-slate-50">
                View Portfolio
              </Link>
            </div>
          </motion.div>

          <div className="relative">
            <div
              className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-100 shadow-2xl"
              style={{
                backgroundImage:
                  "url('/images/brands/hero1.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />

            <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-slate-100 bg-white p-6 shadow-xl md:block">
              <p className="text-3xl font-black text-[#1a3b5b]">20+ Years</p>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Construction Expertise
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-slate-200 bg-slate-50 px-6 py-10 md:px-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 lg:grid-cols-4">
          {[
            { icon: Award, label: 'Projects Delivered', value: '150+' },
            { icon: Calendar, label: 'Experience', value: 'Since 2002' },
            { icon: Globe, label: 'Operational Region', value: 'Meghalaya' },
            { icon: Handshake, label: 'Government Partnerships', value: 'Multiple' },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <s.icon className="h-5 w-5 text-[#1a3b5b]" aria-hidden="true" />
                <p className="text-sm font-semibold text-slate-500">{s.label}</p>
              </div>
              <p className="text-2xl font-bold text-slate-900">{s.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Infrastructure Focus */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-20">
        <div className="mb-12 max-w-2xl space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Strengthening Regional Infrastructure
          </h2>

          <p className="text-slate-600">
            Our construction division bridges the gap between technical expertise and functional knowledge, delivering infrastructure projects that stand the test of time.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              title: 'Rural Road Development',
              body: 'Building durable and reliable road networks that improve connectivity for villages and communities.',
              img: '/images/brands/main1.jpg',
            },
            {
              title: 'Government Infrastructure Projects',
              body: 'Executing government-backed projects with precision engineering, quality control, and long-term durability.',
              img: '/images/brands/main2.jpg',
            },
          ].map((ind) => (
            <motion.div
              key={ind.title}
              className="group relative h-[400px] overflow-hidden rounded-2xl bg-slate-100"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${ind.img}')` }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

              <div className="absolute bottom-0 p-8">
                <h3 className="mb-2 text-2xl font-bold text-white">
                  {ind.title}
                </h3>
                <p className="text-sm text-slate-200">{ind.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Strategic Approach */}
      <section className="border-t border-slate-200 bg-slate-50 px-6 py-20 md:px-20">
        <div className="mx-auto max-w-7xl space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">
            Strategic Construction Solutions
          </h2>

          <p className="max-w-3xl text-slate-600">
            At GSM Group Construction, we focus on delivering sustainable and high-quality infrastructure solutions. By combining engineering expertise with regional insights, we ensure that every project contributes to long-term development.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              'Government Infrastructure Expertise',
              'Durable Rural Connectivity',
              'Engineering Precision',
              'Long-Term Structural Reliability',
            ].map((c) => (
              <div key={c} className="flex items-center gap-3">
                <Check className="h-5 w-5 text-[#1a3b5b]" aria-hidden="true" />
                <span className="text-sm font-semibold text-slate-700">
                  {c}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}