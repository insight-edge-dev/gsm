'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Check, CheckCircle, Droplet, Gavel, Leaf, ShieldCheck, Thermometer, Zap } from 'lucide-react'


export default function RoofingsPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 py-6 md:px-10">
        <motion.div
          className="relative flex min-h-[450px] flex-col justify-end overflow-hidden rounded-xl"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0)), url('/images/powerroof/hero1.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col gap-4 p-8">
            <span className="w-fit rounded-full bg-[#1a3b5b] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">GSM Group Enterprise</span>
            <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
              Premium PPGI &amp; PPGL Roofing Sheets
            </h1>
            <p className="max-w-xl text-lg font-normal leading-normal text-slate-200 md:text-xl">
              Engineering durable, weather-resistant roofing solutions for industrial, commercial, and residential excellence.
            </p>
            <div className="mt-4 flex gap-4">
              <Link href="https://powerroofings.com/" className="rounded-xl bg-[#1a3b5b] px-8 py-4 font-bold text-white shadow-lg transition-all hover:bg-[#1a3b5b]/90">
                Visit Website
              </Link>
              <Link href="https://powerroofings.com/contact" className="rounded-xl bg-[#b3b7bc] px-8 py-4 font-bold text-white shadow-lg transition-all hover:bg-[#1a3b5b]/90">
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Trust Badges */}
      <section className="mx-auto max-w-7xl px-4 py-6 md:px-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            { icon: ShieldCheck, label: 'Accreditation', value: 'MES Approved', sub: 'Military Engineer Services Certified', color: 'text-emerald-600' },
            { icon: Gavel, label: 'Recognition', value: 'CPWD Recognized', sub: 'Central Public Works Department', color: 'text-slate-500' },
          ].map((b) => (
            <div key={b.value} className="flex items-center gap-6 rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-[#1a3b5b]/10 text-[#1a3b5b]">
                <b.icon className="h-10 w-10" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-slate-500">{b.label}</p>
                <p className="text-2xl font-bold leading-tight text-slate-900">{b.value}</p>
                <p className={`mt-1 flex items-center gap-1 text-sm font-medium ${b.color}`}>
                  <CheckCircle className="h-4 w-4" aria-hidden="true" />{b.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-4 py-6 md:px-10">
       
        {/* Technical banner */}
        <div className="mb-20 flex flex-col items-center justify-between gap-8 rounded-xl bg-[#1a3b5b] p-8 text-white shadow-xl md:flex-row md:p-12">
          <div className="flex-1">
            <h2 className="mb-4 text-3xl font-black">Technical Excellence</h2>
            <p className="mb-6 text-slate-200">Our sheets are manufactured using high-grade PPGI and PPGL ensuring decades of protection.</p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Zap, label: 'High Tensile Strength' },
                { icon: Droplet, label: '100% Leak Proof' },
                { icon: Thermometer, label: 'Heat Reflective' },
                { icon: Leaf, label: 'Recyclable Material' },
              ].map((f) => (
                <div key={f.label} className="flex items-center gap-3">
                  <f.icon className="h-5 w-5 text-white/80" aria-hidden="true" />
                  <span className="text-sm">{f.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="rounded-xl border border-white/20 bg-white/10 p-6 text-center backdrop-blur-sm">
              <p className="text-4xl font-black">25+</p>
              <p className="text-xs uppercase tracking-widest opacity-80">Years Warranty</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
