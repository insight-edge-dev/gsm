'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Cpu, Eye, Globe2, History, Rocket, ShieldCheck, Wallet } from 'lucide-react'

const timelineItems = [
  {
    year: '2000',
    title: 'Founding & Coal Trading Genesis',
    body: 'Established as a premier regional energy resource partner with a focus on bulk coal supply chains.',
    icon: History,
    side: 'left',
  },
  {
    year: '2008',
    title: 'Strategic Diversification',
    body: 'Expanding into logistics infrastructure and warehouse management systems to support growing trade volumes.',
    icon: Wallet,
    side: 'right',
  },
  {
    year: '2014',
    title: 'Technological Integration',
    body: 'First phase of digital transformation. Implementing SAP systems and IoT monitoring across fleet operations.',
    icon: Cpu,
    side: 'left',
  },
  {
    year: '2018',
    title: 'Regional Expansion',
    body: 'Established new branches across the region, pioneering AAC block manufacturing and premium roofing solutions.',
    icon: Globe2,
    side: 'right',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex h-[500px] w-full items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(26,59,91,0.8), rgba(26,59,91,0.95)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBqmg8dfmAtWlCLNroR3DCKbg9K4V4ZejW2nC6jnKnoo4CD_Thb5eRw4Aa9ifbpSTIKcpaGx5Baw02v11SEhj7ZbZ2EHGoZ-5dlhK2pSNWUCGu1qvGgXPeR3p8BmIe9aUVf0W1mHpljHE8ePk8ssLQNCMm76sKnIbbkcUcbMfhTX91uAAz6guY-aAs_im5wYClDYo3FcWPKbuRHM3HLL-y-GtBiHoOq1vRCMpgT8dleQNA_AXOBNAyLY1otFfRf5RPpP4YRAEmoyJet')",
        }}
      >
        <motion.div
          className="z-10 max-w-3xl px-6 text-center"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-6 text-5xl font-black leading-tight tracking-tight text-white md:text-7xl">
            The Intersection of <br />Tradition &amp; Technology
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl">
            Honoring our roots in global trade while driving the development of industrial energy and infrastructure across Northeast India.
          </p>
        </motion.div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-slate-50 px-6 py-20 md:px-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-3">
          {[
            {
              icon: Rocket,
              title: 'Our Mission',
              body: 'To empower regional industries by providing sustainable infrastructure solutions and cutting-edge construction technology that bridges legacy operations with future efficiency.',
            },
            {
              icon: Eye,
              title: 'Our Vision',
              body: 'To be the benchmark for diversified industrial groups in Northeast India, recognized for integrating ethical resource management with high-quality construction.',
            },
            {
              icon: ShieldCheck,
              title: 'Our Values',
              body: 'Integrity in every deal, innovation in every process, and excellence in every partnership. We value our heritage as much as our progress.',
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <card.icon className="h-10 w-10 text-[#1a3b5b]" aria-hidden="true" />
              <h3 className="text-2xl font-bold text-slate-900">{card.title}</h3>
              <p className="leading-relaxed text-slate-600">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Legacy */}
      <section className="bg-white px-6 py-20 md:px-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">Our Legacy in Meghalaya</h2>
            <p className="mb-6 text-lg leading-relaxed text-slate-600">
              GSM Group was born from the rugged terrains of Meghalaya. Starting as a specialized coal trading and civil construction enterprise, we mastered the complexities of regional supply chains and large-scale infrastructure.
            </p>
            <p className="text-lg leading-relaxed text-slate-600">
              This foundational experience taught us the value of reliability, precise execution, and community first principles — values that continue to guide us as we venture into advanced building materials and industrial manufacturing.
            </p>
          </div>
          <div
            className="relative h-[400px] overflow-hidden rounded-xl shadow-xl"
            style={{
              backgroundImage:
                "url('/images/home/about.jpeg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-[#1a3b5b]/10" />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-slate-50 px-6 py-24 md:px-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Evolutionary Milestones</h2>
            <p className="mt-4 text-slate-600">A journey from traditional trading to multi-sector industrial leadership.</p>
          </div>

          <div className="relative space-y-12">
            {/* Vertical line */}
            <div className="absolute bottom-0 left-4 top-0 w-px -translate-x-1/2 bg-slate-300 md:left-1/2" />

            {timelineItems.map((item, i) => (
              <motion.div
                key={item.year}
                className="relative flex flex-col items-start md:flex-row md:items-center md:justify-between"
                initial={{ opacity: 0, x: item.side === 'left' ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                {/* Left content */}
                <div className={`md:w-5/12 ${item.side === 'left' ? 'order-2 md:order-1 md:text-right mt-4 md:mt-0' : 'order-1 pl-12 md:pl-0 md:text-right'}`}>
                  {item.side === 'left' ? (
                    <>
                      <h4 className="text-xl font-bold text-[#1a3b5b]">{item.title}</h4>
                      <p className="mt-2 text-slate-600">{item.body}</p>
                    </>
                  ) : (
                    <span className="text-3xl font-black text-slate-200">{item.year}</span>
                  )}
                </div>

                {/* Dot */}
                <div className="absolute left-4 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-slate-50 bg-[#1a3b5b] z-10 md:left-1/2">
                  <item.icon className="h-3.5 w-3.5 text-white" aria-hidden="true" />
                </div>

                {/* Right content */}
                <div className={`md:w-5/12 ${item.side === 'left' ? 'order-1 pl-12 md:pl-0' : 'order-2 mt-4 md:mt-0'}`}>
                  {item.side === 'left' ? (
                    <span className="text-3xl font-black text-slate-200">{item.year}</span>
                  ) : (
                    <>
                      <h4 className="text-xl font-bold text-[#1a3b5b]">{item.title}</h4>
                      <p className="mt-2 text-slate-600">{item.body}</p>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 py-20 md:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-xl bg-[#1a3b5b] p-12 text-center text-white shadow-2xl">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white,_transparent)]" />
            <h2 className="relative mb-6 text-3xl font-bold md:text-4xl">Ready to work with us?</h2>
            <p className="relative mx-auto mb-8 max-w-xl text-lg text-slate-200">
              Discover how our unique blend of tradition and technology can propel your project forward.
            </p>
            <div className="relative flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="rounded-lg bg-white px-8 py-3 font-bold text-[#1a3b5b] transition-colors hover:bg-slate-100">
                Contact Our Team
              </Link>
              <Link href="/portfolio" className="rounded-lg border border-white/30 bg-[#1a3b5b]/20 px-8 py-3 font-bold text-white transition-colors hover:bg-[#1a3b5b]/40">
                View Our Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
