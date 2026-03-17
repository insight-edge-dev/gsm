'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Leaf, School, ShieldCheck, Users } from 'lucide-react'
import { link } from 'fs'

const products = [
  {
    title: 'Concrete Pavers',
    description: 'Durable, interlocking paving blocks available in various patterns and colors. Engineered for heavy-duty traffic and aesthetic appeal.',
    features: ['High Load Bearing', 'Weather Resistant'],
    cta: 'Enquire Now',
    link: '/contact',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQJF5pxbmpEOfEwMs72zthK70xg4KjIal5-D0LiB-Zog0fwatJSPf4QchEyVEf9Wgo8jdMxyhRzTFMDmThsAjS_WLrCXnKKZ9CC71Iegc3BLDn4cwI_TFi9IlXIGeTXNPGxzgNutERmdtwAoBVvowAM93ZmK-7_zInJRHxQAJW7XU5IKFx4JSUitEOatKlYPOb8RYMD6ZsH5clp5GrtnO0Z9qsLKav7g7nddOMa53x2WOWmJ5_bS2JZbj8Z66ZXgChyR6lSvTjom7i',
  },
  {
    title: 'Stone Chips',
    description: 'Precisely crushed aggregates for concrete mixing and road construction. Available in all standard sizes (10mm, 20mm, 40mm).',
    features: ['Uniform Gradation', 'Premium Basalt Source'],
    cta: 'Get Quote',
    link: '/contact',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAR8xXyxENNjuGnfaNB5QH1oDZ6dTysgnF2NPyCX8ysqy64NtLsPI-tzM0w4591GDCrbPWulafwCaYx3ibTgjhQ-CBILmkHF2yLbpBa_mkcEkORbMAOQB9GnxnnfbbtGGeltdAz_-9QfLAGy5OQ0jVWv9TpLAdR426pp050vKPxaoBwqByaO4K3kCz8TT2GoVW-9_LDnm6NvYjhU4E4TOFtqNUAzPWtinGj4i5iyEbbHBGl3SlReAhyMntywDxdec7pTa5hBh0bGBi7',
  },
  {
    title: 'Stone Dust',
    description: 'Premium quality stone dust for leveling, sub-base material, and as a superior alternative to river sand in various mixtures.',
    features: ['Optimal Compaction', 'Silt-Free Quality'],
    cta: 'Order Info',
    link: '/contact',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAH6onGqm57WqqL4QwTICnCLuuTXBZJ7xg67YwYeizp9BOJpNvFxf50A3i5xdsxR-9mA8VyaJsf4YobVAafXTO0qLBLZobe79kb6XX4Ml6XyXuvhav1J1TzXp9-cGwXsgJAUDDO8_q0BDrAPtfMWJe5fkihlS3fTS_yospthN54teFt0cRsSgFrDoyaKSVi5leIH9ric-vlP9jAoqMzl2xdpPANXSvKu7ztOyyfKwbORJUwL_jdJrqGDOwCT2WhMNdSkkeXVNe4y-PS',
  },
]

const impactCards = [
  { icon: Users, title: 'Local Employment', body: 'Prioritizing hiring from surrounding villages to foster local economic stability.' },
  { icon: School, title: 'Skill Development', body: 'Continuous training programs for technical skills in stone processing and logistics.' },
  { icon: Leaf, title: 'Sustainable Mining', body: 'Following strict environmental protocols to minimize ecological footprint.' },
  { icon: ShieldCheck, title: 'Community Welfare', body: 'Supporting local health initiatives and educational infrastructure.' },
]

export default function PaversPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAmNmx7lmymJhhAPhThUuAItYiLLaWCUr2wJvOM0K-FMS2PCrbOCqQZ9HquC2EgvR23UuyDb-SBSBet19okdWZIpfpgrM3HloevSz3J0bNAqHTPmidDF4vxNB6rnsfzoOCYrE6-COsqHHqWfSCjg3FMg7Hw0yvM_fZbAFkqV1vX0D52EJdBkEEodCphfplCUFrxp2XHTs6mi1kkNR9-OZaoFSO2DZ3dFajISIqHvbrLe7dO-TjmPiqoyDjzwsQYcatQqtw9p19HVlFc')" }} >
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
        </div>
        <div className="relative flex h-full max-w-7xl flex-col justify-end px-6 pb-16 mx-auto">
          <motion.div className="max-w-3xl" initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block rounded-full bg-[#1a3b5b] px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
              Inaugurated by Hon&apos;ble CM Conrad K. Sangma
            </span>
            <h1 className="mb-6 text-5xl font-black leading-tight text-white md:text-7xl">
              Marak Pavers &amp; <br /><span className="text-blue-400">Stone Industries</span>
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-slate-200 md:text-xl">
              Setting the benchmark in high-quality infrastructure solutions. Leading the way in sustainable stone processing and paving excellence for Northeast India.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="flex items-center gap-2 rounded-xl bg-[#1a3b5b] px-8 py-4 font-bold text-white transition-all hover:-translate-y-0.5">
                Get In Touch <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/portfolio" className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-md transition-all hover:bg-white/20">
                Our Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-20" id="products">
        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold text-slate-900">Our Core Products</h2>
          <div className="h-1 w-20 bg-[#1a3b5b]" />
          <p className="mt-6 max-w-2xl text-slate-600">
            We manufacture high-grade materials that form the foundation of modern architecture and public infrastructure projects across the region.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:border-[#1a3b5b]/20 hover:shadow-xl"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="h-64 overflow-hidden">
                <Image src={p.img} alt={p.title} width={480} height={256} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-8">
                <h3 className="mb-3 text-xl font-bold text-slate-900">{p.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-600">{p.description}</p>
                <ul className="mb-8 space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                      <CheckCircle className="h-4 w-4 text-[#1a3b5b]" aria-hidden="true" />{f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={p.link}
                  className="block w-full rounded-lg border border-[#1a3b5b] py-3 text-center font-bold text-[#1a3b5b] transition-all hover:bg-[#1a3b5b] hover:text-white">
                  {p.cta}
                </Link>
                </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Impact */}
      <section className="overflow-hidden bg-slate-50 py-24" id="impact">
        <div className="mx-auto max-w-7xl px-6 md:px-20">
          <div className="flex flex-col items-center gap-16 lg:flex-row">
            <motion.div
              className="relative lg:w-1/2"
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#1a3b5b]/10 blur-3xl" />
              <div className="relative z-10 overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjbwva0KtZc2UCnW0Ixq7ESXaVfDCmp4Uwond_WgeDFm-6jxuUBDXhL5vNv-QtLy7ipC3XTH0ZmYdTrfSdfJmRTLfNGsFxJ8yMxbFpUNu8H3O05HSOzHgP43-5wjCy9GvGL7lSn7OyIVxa_M5wxUIuWr00MYt3UGMspPBxHoIpHJf_a9ymfX8eqWU16O3bB7Gs57s1qLt9R4g4HgaQCvzOlWGyQSPJtU0Pxsm2EXU4kAR3KkwUv38JwBPAOWDPq8yIhd265RuAk5Dx"
                  alt="Community impact"
                  width={600}
                  height={400}
                  className="h-auto w-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 z-20 rounded-2xl border border-slate-100 bg-white p-8 shadow-xl">
                <p className="text-4xl font-black text-[#1a3b5b]">250+</p>
                <p className="text-sm font-bold uppercase tracking-tighter text-slate-500">Local Jobs Created</p>
              </div>
            </motion.div>
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-4xl font-bold text-slate-900">Building More Than Just Roads</h2>
              <p className="mb-8 text-lg leading-relaxed text-slate-600">
                Marak Pavers &amp; Stone Industries is deeply rooted in the community. Our commitment goes beyond manufacturing; we are an engine for local economic growth and social empowerment.
              </p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {impactCards.map((c) => (
                  <div key={c.title} className="rounded-xl border border-slate-200 bg-white p-6">
                    <c.icon className="mb-4 h-10 w-10 text-[#1a3b5b]" aria-hidden="true" />
                    <h4 className="mb-2 font-bold text-slate-900">{c.title}</h4>
                    <p className="text-sm text-slate-500">{c.body}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-20">
        <div className="relative overflow-hidden rounded-3xl bg-[#1a3b5b] p-12 text-center md:p-20 md:text-left">
          <div className="absolute right-0 top-0 h-full w-1/3 -skew-x-12 translate-x-12 bg-white/5" />
          <div className="relative z-10 flex flex-col items-center justify-between gap-12 md:flex-row">
            <div className="md:w-2/3">
              <h2 className="mb-6 text-3xl font-black text-white md:text-5xl">Partner With the Region&apos;s Best</h2>
              <p className="text-lg text-white/80">Whether it&apos;s a large-scale highway project or custom architectural landscaping, our team is ready to deliver.</p>
            </div>
            <div>
              <Link href="/contact" className="inline-block rounded-xl bg-white px-10 py-5 text-lg font-black text-[#1a3b5b] shadow-xl transition-transform hover:scale-105">
                Request a Proposal
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
