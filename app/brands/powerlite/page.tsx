'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const valueCards = [
  {
    icon: 'weight',
    title: 'Ultra Lightweight',
    body: 'At 1/3 the weight of traditional bricks, Powerlite blocks reduce the structural dead load by up to 66%.',
    stat: '-66% Load',
  },
  {
    icon: 'thermostat',
    title: 'Thermal Insulation',
    body: 'Achieve superior energy efficiency with 0.16 W/mK thermal conductivity, reducing HVAC costs by 25%.',
    stat: '0.16 W/mK',
  },
  {
    icon: 'local_fire_department',
    title: 'Fire Resistance',
    body: 'Class A1 fire rating ensures safety with over 4 hours of fire endurance for critical wall sections.',
    stat: '4+ Hours',
  },
]

const badges = [
  { abbr: 'AAI', label: 'Airports Authority' },
  { abbr: 'MES', label: 'Military Engineer Services' },
  { abbr: 'CPWD', label: 'Central PWD' },
  { abbr: 'BEE', label: 'Energy Efficiency' },
]

const features = [
  { icon: 'eco', title: 'Eco-Friendly Manufacturing', body: 'Made from 70% industrial fly-ash, reducing environmental footprint and earning LEED green building points.' },
  { icon: 'speed', title: 'Speed of Construction', body: 'Larger size and lighter weight allows for 3x faster masonry work compared to traditional clay bricks.' },
  { icon: 'shutter_speed', title: 'Acoustic Insulation', body: 'Advanced cell structure provides sound reduction index (SRI) of 45–50 dB for quieter interiors.' },
]

const gallery = [
  { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBf3SSuAKKorhpDqjL08C_QBI3ZHAVanNusUiaO1i6okLwMdWU59cQz--Ex4x2FcbJCNZUULBaJXglyawjURn63Ah7YgAKASgMfWbaUIcKlOF16S6fskyu5I6aKnSvHLN1C2Cu7p6YhIQHiRCu1fRc_e9z3yn7B9EBD75WmJcRa2vz85Dlo2e3hHccrIM9GI2spBzL5kjA-MZhV0f29UpabEbTUY5h95I8p8NWZQE8fYF5897lI_bd5yx_V6cSBw_qYuwL0BrMIhPZT', title: 'Horizon IT Park', sub: 'Structural Masonry Solution' },
  { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYtVHYjg7ugExnodtXnMOsLjSsZtdapj5fdrV-soy9530DRqtM7n66tw7esNs6clls28Jet4YPNMpbitnW_1LBgKkl_A1nqt42uigZNJtTrIES-Y5049MqDFHC05LXcEekK0tDZF0UA9kQ2H1MYYinjr3rUTLqg-UMZD1SICJv2kGhr7aJQ_PWvU-Mk-ZJJPCRNqDODM8ovE3vNfpBhvhdfi9Dnignc5Xkxld-Cz1Bt-NfUuDttIvff26AtD4AgbACBCJZAfuZhxv3', title: 'The Crest Estates', sub: 'Premium Thermal Walls' },
  { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAb7s8wtnavO4kzBpOD1FmTTenIuEcxkS1Zq9DUrewTpS337LAnpkJ8X2Q-2sGBdEnSzp5ovguSMXT0E6_21aOvTcGMeb4g9FJfj_tu4_BR3Fcqdap-tymKcCqw0sIo-XjBJk032hANGuZUcCCfMo4LbOyl_WzkJa97ClJGHdysKDShVZk6jG5o1hbAVywXyglfDWy4GPZ4_i0Os0UcYFIaeMfsKWLnWz67Yoj9SCOTlFXAW5tmzrxuYxOfuEufX5-hx3st_x6O5Rhz', title: 'Apex Medical Care', sub: 'Fire Resistant Partitioning', offset: true },
  { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDstB_4ABD6C1PKvaIlEow2ofLPJ-JTEsxLd9ONImWzG7grKiTXSFeUgKsMQW3xdb-ojUrjuJqLWBQaRNsrrjH0KD0h7XFERc0IUqdeWxYV9DYd00Pm6QcjFR0MyKvRHv_O_uV4TtsGetKpK0ix9xTS36fSGsV9y3TguiaK8F1HaLTKh1U71FVEc_FFJO1n8b6c4bThUoVZ2AaIIqfAF3ce2GLBgbEn7eQac0k0YGDgE2Pfe0lDrgR85hrChAhtmap8S_QfsSRagsS5', title: 'Terminal 4 Expansion', sub: 'AAI Approved Project', offset: true },
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
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="flex items-center gap-2 rounded bg-[#1a3b5b] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#1a3b5b]/90">
              <span className="material-symbols-outlined text-lg">download</span>Download Brochure
            </Link>
            <button className="rounded border border-white/30 bg-white/10 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md transition-all hover:bg-white/20">
              View Technical Specs
            </button>
          </div>
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
              <span className="material-symbols-outlined text-4xl text-[#1a3b5b]">{v.icon}</span>
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
                <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-slate-200 bg-white text-xl font-bold text-[#1a3b5b] shadow-sm">{b.abbr}</div>
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
                    <span className="material-symbols-outlined">{f.icon}</span>
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
      <section className="border-t border-slate-100 bg-slate-50 px-6 py-24 md:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col items-end justify-between gap-4 md:flex-row">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#1a3b5b]">Portfolio</span>
              <h2 className="mt-2 text-4xl font-black text-slate-900">Signature Projects</h2>
            </div>
            <Link href="/portfolio" className="flex items-center gap-2 text-sm font-bold text-[#1a3b5b] underline underline-offset-8 decoration-2 transition-opacity hover:opacity-80">
              View All Case Studies <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {gallery.map((g, i) => (
              <motion.div
                key={g.title}
                className={`group relative h-80 cursor-pointer overflow-hidden rounded-xl shadow-md ${g.offset ? 'lg:mt-8' : ''}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Image src={g.src} alt={g.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-lg font-bold text-white">{g.title}</p>
                  <p className="text-xs text-slate-300">{g.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
