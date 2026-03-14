'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const products = [
  {
    title: 'Trapezoidal Profile',
    description: 'High-strength sheets ideal for industrial roofing and wall cladding with superior load-bearing capacity.',
    features: ['Multiple Color Options', 'Corrosion Resistant'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFmb78ilZI87ILoo-avzMwqL1ZKqSBCCGqC4QIwSusrna8lh0J-svD5V-Sca7lJSS8ZHB19qZNn1GVDZg0G8eYnH10ivEqIzglrDlGpWw4FjAfWgwpRNzhzZ5cXlNG_y0HoBLtKItYMg2wexISMKAwtrnq6jcFF8mCUKdLRxnDPRhN8mxAjEmNSAwHiLfcV_mH7KfABl2FSVuMKx-NfeXMDUdGwfaj-syRrOHH2iMqA9piqMJB3NLCqpgK-AzawSzbnNjagRS_u3yt',
  },
  {
    title: 'Tile Profile',
    description: 'Combines the classic aesthetic of traditional tiles with the durability and lightweight nature of steel.',
    features: ['Premium Aesthetic Finish', 'Low Maintenance'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgmpGv19ghkMycBhBu4Fa-p4AfPAkz7vGn-eLR5s_fEBwVTLvllCzvADW_zGghbcXZZ6H6DjtX96TdwCJizkbssyY2t4ivYM0H0pl9w_x307EoM4Zm7u7aQVyJQCmBeYXhMj4mELHIwXWRKzHM0i9ne6a9W29XIeqnpqr62l7c0J0QFoAu5Ck-_CdrXDoy_9kNUHxKaRWgaQAsKekppmw2ghPHmga9nqj6zUhzcZJAKSwLNUXQjQQPtlaQE9oMGHWwMiczi7losgoh',
  },
  {
    title: 'Deck Sheets',
    description: 'Structural composite decking sheets designed for floor slabs in multi-story industrial and commercial buildings.',
    features: ['Structural Reinforcement', 'Fire Resistant'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBr7MHl682n7QkVFoe-GOmAiyr-Ss2JN0G35wzmc-mP75ScG8OriYfSoVuOcMj-gSTVU2z4ts_UDRV0RlxnUhGFLb9R17QTQcXoDpaCjcu3G8jQ8TVgIXiwA42aO6AmqYZ04M38BrzuE85fS1t4C5wArl-WzzmG2DrJwE4VS8v_411YeCnxNfPUWI9VXp0dsS7YzwEHZ5P5TeCJP253bhkFrCZBBKt2ERwLUJEFrdxd45AL29EpJ1jgiwqvKX2geJTPb9AndED3pt5M',
  },
]

export default function RoofingsPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 py-6 md:px-10">
        <motion.div
          className="relative flex min-h-[450px] flex-col justify-end overflow-hidden rounded-xl"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCWHWWLhdKIQCLy8dyOeJ7yVijDbO0ZgG-l-yljHbhVzPB52iUipGNuOgbPwqwGEFeg6dgjCQGutJP6EwDmUUTylpY7oO-myFGeNkpDjmHxCzKjmADebGtwEyi2KAdMt6tsJAOYKADKaA2pY4m9R3h-NgYCaw_5la-n9PyZaon3aVP2lAJ68Fzsi-V0uGVnMRZIJgdOkbK5aPCnLmTn8KvZbUf8j1lKeHFTJ3tuLherjOf3Npxj48d9fhQOC2R-OLoNL0Hj3hvVUIOm')",
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
              <Link href="/contact" className="rounded-xl bg-[#1a3b5b] px-8 py-4 font-bold text-white shadow-lg transition-all hover:bg-[#1a3b5b]/90">
                Download Catalog
              </Link>
              <button className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-md transition-all hover:bg-white/20">
                Our Projects
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Trust Badges */}
      <section className="mx-auto max-w-7xl px-4 py-6 md:px-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            { icon: 'verified_user', label: 'Accreditation', value: 'MES Approved', sub: 'Military Engineer Services Certified', color: 'text-emerald-600' },
            { icon: 'gavel', label: 'Recognition', value: 'CPWD Recognized', sub: 'Central Public Works Department', color: 'text-slate-500' },
          ].map((b) => (
            <div key={b.value} className="flex items-center gap-6 rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-[#1a3b5b]/10 text-[#1a3b5b]">
                <span className="material-symbols-outlined text-4xl">{b.icon}</span>
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-slate-500">{b.label}</p>
                <p className="text-2xl font-bold leading-tight text-slate-900">{b.value}</p>
                <p className={`mt-1 flex items-center gap-1 text-sm font-medium ${b.color}`}>
                  <span className="material-symbols-outlined text-sm">check_circle</span>{b.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-4 py-6 md:px-10">
        <div className="mb-8 flex items-end justify-between px-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900">Our Product Range</h2>
            <div className="h-1 w-20 rounded-full bg-[#1a3b5b]" />
          </div>
        </div>
        <div className="mb-20 grid grid-cols-1 gap-6 p-4 md:grid-cols-3">
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image src={p.img} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-slate-900">{p.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-slate-600">{p.description}</p>
                <ul className="mb-6 space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="material-symbols-outlined text-sm text-[#1a3b5b]">check</span>{f}
                    </li>
                  ))}
                </ul>
                <button className="w-full rounded-lg border-2 border-[#1a3b5b] py-3 font-bold text-[#1a3b5b] transition-all hover:bg-[#1a3b5b] hover:text-white">
                  Specifications
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical banner */}
        <div className="mb-20 flex flex-col items-center justify-between gap-8 rounded-xl bg-[#1a3b5b] p-8 text-white shadow-xl md:flex-row md:p-12">
          <div className="flex-1">
            <h2 className="mb-4 text-3xl font-black">Technical Excellence</h2>
            <p className="mb-6 text-slate-200">Our sheets are manufactured using high-grade PPGI and PPGL ensuring decades of protection.</p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: 'bolt', label: 'High Tensile Strength' },
                { icon: 'water_drop', label: '100% Leak Proof' },
                { icon: 'thermostat', label: 'Heat Reflective' },
                { icon: 'eco', label: 'Recyclable Material' },
              ].map((f) => (
                <div key={f.label} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-white/80">{f.icon}</span>
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
