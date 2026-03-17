'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Award,Airplay, Satellite, FlameIcon,SolarPanel, Leaf, Scale, SlidersHorizontal, Thermometer, Zap } from 'lucide-react'

const valueCards = [
  {
    icon: Scale,
    title: 'Ultra Lightweight',
    body: 'At 1/3 the weight of traditional bricks, Powerlite blocks reduce the structural dead load by up to 66%.',
    stat: '-66% Load',
  },
  {
    icon: Thermometer,
    title: 'Thermal Insulation',
    body: 'Achieve superior energy efficiency with 0.16 W/mK thermal conductivity, reducing HVAC costs by 25%.',
    stat: '0.16 W/mK',
  },
  {
    icon: FlameIcon,
    title: 'Fire Resistance',
    body: 'Class A1 fire rating ensures safety with over 4 hours of fire endurance for critical wall sections.',
    stat: '4+ Hours',
  },
]

const badges = [
  { icon: Airplay, abbr: 'AAI', label: 'Airports Authority' },
  { icon: Satellite, abbr: 'MES', label: 'Military Engineer Services' },
  { icon: Award, abbr: 'CPWD', label: 'Central PWD' },
  { icon: SolarPanel, abbr: 'BEE', label: 'Energy Efficiency' },
]

const features = [
  { icon: Leaf, title: 'Eco-Friendly Manufacturing', body: 'Made from 70% industrial fly-ash, reducing environmental footprint and earning LEED green building points.' },
  { icon: Zap, title: 'Speed of Construction', body: 'Larger size and lighter weight allows for 3x faster masonry work compared to traditional clay bricks.' },
  { icon: SlidersHorizontal, title: 'Acoustic Insulation', body: 'Advanced cell structure provides sound reduction index (SRI) of 45–50 dB for quieter interiors.' },
]

export default function PowerlitePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[75vh] w-full flex-col justify-end overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-70">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD-tqyeX1NYc5D-R4JUt3oHWqsU2pZkEhTeVwzlkDSzRIYFrgOtne1_WAiaMeI3fQyRV6aEt-jaLohn1PUuMxexKJ0d38ApEAZCE2SdnHMUxsuQDV291V2d2Av_EBzxcAml_UDTzoftk4wAnGQ-BthK8cfImZnGsLGHZrI7b-bC_0A24oiEYZ6Jft7YsGnsNQnPm2UY7zoG7g_B8dHKtr5SiN0EJBH0ulvSOi-hN2TnxfSNhOvsc-Rv5t9DbA6y29wIkGq8gFtNIrjQ')" }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
        <motion.div
          className="relative max-w-5xl px-6 pb-16 md:px-20"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block rounded bg-[#1a3b5b] px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white">Premium Masonry Solutions</span>
          <h1 className="mb-6 text-4xl font-black leading-[1.1] tracking-tighter text-white md:text-6xl lg:text-7xl">
            Building the Future with <span className="text-white/90">Powerlite AAC.</span>
          </h1>
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl">
            Engineered for high-performance sustainable construction. The ultimate lightweight solution for superior thermal insulation and fire safety.
          </p>
        </motion.div>
      </section>

      {/* Value Props */}
      <section className="bg-white px-6 py-24 md:px-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
          {valueCards.map((v, i) => (
            <motion.div
              key={v.title}
              className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-slate-50 p-8 transition-shadow hover:shadow-lg"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <v.icon className="h-10 w-10 text-[#1a3b5b]" aria-hidden="true" />
              <h3 className="text-xl font-bold text-slate-900">{v.title}</h3>
              <p className="text-slate-600">{v.body}</p>
              <p className="mt-auto text-3xl font-black text-[#1a3b5b]">{v.stat}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Approvals */}
      <section className="border-y border-slate-100 bg-slate-50 px-6 py-16 md:px-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 md:flex-row">
          <div className="max-w-xs">
            <h4 className="mb-2 text-sm font-black uppercase tracking-widest text-[#1a3b5b]">Government Approved</h4>
            <p className="text-xs font-medium text-slate-500">Powerlite AAC is trusted and certified by leading national engineering bodies.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-12 opacity-60 transition-all duration-300 hover:opacity-100">
            {badges.map((b) => (
              <div key={b.abbr} className="flex flex-col items-center gap-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-slate-200 bg-white text-[#1a3b5b] shadow-sm">
                  <b.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <span className="text-[10px] font-bold text-slate-700">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical */}
      <section className="bg-white px-6 py-24 md:px-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuib28PVBMWyxl9OUwZlKmtuS8GfnJigAPc-tLlbaIGK8FrczGmVH2ph0SztVFVoiOI31EwSqb1DMIQnFMcYPu75wl-nvYG1tRQ-pfTkZfoMH6f6LNDkVzkQol42wjNKNZLzTK6sskvGP5wBurJ1HVFf67Z-6Zio2OYoQUqqRD6d9mU3h6yU4v08-AOHnDkAeFXTJhe7gLsVCLrKj5yD9CUjz1Yc0JP7s21UhSj1Z9cFtr7mhCIaqtOwJeYpyBbb5IBzjUOlSYh_YA"
              alt="Powerlite Block Texture"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white bg-white/80 p-6 shadow-lg backdrop-blur-md">
              <p className="text-sm font-bold text-slate-800">Precision engineered micro-cellular structure for maximum strength and minimum density.</p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="mb-4 text-4xl font-black text-slate-900">Technical Superiority</h2>
              <p className="mb-8 leading-relaxed text-slate-600">
                Powerlite AAC blocks are produced using a high-pressure steam-curing process that results in a stable, crystalline structure with exceptional dimensional stability.
              </p>
            </div>
            <div className="space-y-8">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="mt-1 rounded bg-slate-100 p-2.5 text-[#1a3b5b]">
                    <f.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{f.title}</h4>
                    <p className="text-sm font-medium text-slate-500">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
    </>
  )
}
