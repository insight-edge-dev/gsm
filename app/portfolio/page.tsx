'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const companies = [
  {
    name: 'George S Marak Coal Syndicate',
    category: 'Resources',
    icon: 'manufacturing',
    description:
      'Strategic resource management and supply chain excellence. We are the region\'s leading providers of industrial coal, powering manufacturing plants and energy sectors with reliability.',
    cta: 'View Operations',
    href: '/brands/coal',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB1tmuurQQX6orrmgEP8eU-VrBtf0H1ajHsWY_wkzvDE0YZCCXuR78UCSoaavUj5gQUBAfl2Z0wOZ8_YeY1Oq33kxaX5VxFcxvPoqD6NbiNlN6cVSW0F10rfszUAjhHlYgdK3MgvDH3t1mM6lOUXmrhX1vrl8eSM4-JIR8_PGzGpYwR3XuFicCh5UqhPF7rUYLjfQmDKPt-8y4Pr3GRPVVARFk1ySHlnLKzmQlgZLSrm25j2um5pEj7oaQVLpTjkRtBIbykrOFASWrm',
    reverse: false,
  },
  {
    name: 'Marak Pavers & Stone Industries',
    category: 'Manufacturing',
    icon: 'layers',
    description:
      'Precision-engineered stone products and high-durability interlocking pavers. Our crushing and casting plants produce materials for civil landscaping and urban infrastructure.',
    cta: 'Explore Products',
    href: '/brands/pavers',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBuVGqS1Qu_kHbUCZaFdX5IVig7aUZkraihgQzRbp2yYDRPjUcMrFw0Z8DyzeMVXt2qfTr2SVXKkDpLbjNlYbC1W15amFvn1ZBuCJjwGFYvVkfWJ85MlAE6MO3K5wQUbj6NWrg9aQe-Efy3GFUlKfBC8joq2AdBBKVZMQ5jvv9ejP5F2z2svsWSWjrvZcNW_xSfPkzl_KcOSFXuC7vi2cUatV7Q9JlP014CaUD8quKS_xLnfZO9oxPr0bsaxANVRp3KVudHIkNU8uRe',
    reverse: true,
  },
  {
    name: 'George S Marak Construction',
    category: 'Infrastructure',
    icon: 'architecture',
    description:
      'Pioneering civil engineering and large-scale road construction. With a fleet of modern heavy machinery and a commitment to quality, we deliver critical infrastructure projects.',
    cta: 'Recent Projects',
    href: '/portfolio',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBHvzlB-cqtlD3bLbIs-AmmYUF2e0V_1IetiCOY5hIPWMU9Ik4nQJ5KqSmxP9H-k8-X8e3ANUdTzfen-x-MqnS2-Uo2CKudKvVfEPmfK5dR-yRzMTwtDCDUQ8gtq-pLwno_3zHzgQh36kwX7J5zlmUhjik5mXjCa55Me6v272JkloywbB7dpoKtFATKm_pbOYCELKy42hQdH3zhdtWNmPF0aDLF9a0saNpIGsnhVfpiw4Z2YNGsv76oErhjN4Aqv_q52CD-FF9kiVjo',
    reverse: false,
  },
  {
    name: 'Power Roofings',
    category: 'Manufacturing',
    icon: 'roofing',
    description:
      'Premium PPGI & PPGL roofing sheets engineered for durable, weather-resistant roofing solutions for industrial, commercial, and residential applications. MES & CPWD approved.',
    cta: 'View Products',
    href: '/brands/roofings',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCWHWWLhdKIQCLy8dyOeJ7yVijDbO0ZgG-l-yljHbhVzPB52iUipGNuOgbPwqwGEFeg6dgjCQGutJP6EwDmUUTylpY7oO-myFGeNkpDjmHxCzKjmADebGtwEyi2KAdMt6tsJAOYKADKaA2pY4m9R3h-NgYCaw_5la-n9PyZaon3aVP2lAJ68Fzsi-V0uGVnMRZIJgdOkbK5aPCnLmTn8KvZbUf8j1lKeHFTJ3tuLherjOf3Npxj48d9fhQOC2R-OLoNL0Hj3hvVUIOm',
    reverse: true,
  },
  {
    name: 'Powerlite AAC',
    category: 'Advanced Materials',
    icon: 'construction',
    description:
      'Engineered for high-performance sustainable construction. Lightweight AAC blocks with superior thermal insulation, fire resistance, and government approvals from AAI, MES, and CPWD.',
    cta: 'Technical Specs',
    href: '/brands/powerlite',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD-tqyeX1NYc5D-R4JUt3oHWqsU2pZkEhTeVwzlkDSzRIYFrgOtne1_WAiaMeI3fQyRV6aEt-jaLohn1PUuMxexKJ0d38ApEAZCE2SdnHMUxsuQDV291V2d2Av_EBzxcAml_UDTzoftk4wAnGQ-BthK8cfImZnGsLGHZrI7b-bC_0A24oiEYZ6Jft7YsGnsNQnPm2UY7zoG7g_B8dHKtr5SiN0EJBH0ulvSOi-hN2TnxfSNhOvsc-Rv5t9DbA6y29wIkGq8gFtNIrjQ',
    reverse: false,
  },
]

export default function PortfolioPage() {
  return (
    <>
      {/* Intro */}
      <section className="border-b border-slate-100 bg-white px-6 py-12 md:px-20 md:py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-[#1a3b5b]">Our Industrial Legacy</span>
            <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-6xl">
              Group Portfolio
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
              A diversified conglomerate driving industrial growth across multiple sectors. From resource management to construction and logistics, we build the foundations of tomorrow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Companies */}
      <section className="bg-slate-50 px-6 py-16 md:px-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-12">
          {companies.map((c, i) => (
            <motion.div
              key={c.name}
              className={`group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-[#1a3b5b]/50 hover:shadow-lg md:flex-row ${c.reverse ? 'md:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              {/* Image */}
              <div
                className="aspect-video w-full overflow-hidden bg-cover bg-center md:aspect-auto md:w-1/2"
                style={{ backgroundImage: `url("${c.image}")` }}
              >
                <div className="h-full w-full bg-[#1a3b5b]/5 transition-all duration-500 group-hover:bg-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-center gap-4 p-8 md:p-12">
                <div className="mb-2 flex items-center gap-2 text-[#1a3b5b]/70">
                  <span className="material-symbols-outlined text-sm">{c.icon}</span>
                  <span className="text-xs font-bold uppercase tracking-widest">{c.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">{c.name}</h3>
                <p className="text-base leading-relaxed text-slate-600">{c.description}</p>
                <div className="pt-4">
                  <Link
                    href={c.href}
                    className="inline-flex items-center gap-2 font-bold text-[#1a3b5b] transition-transform group-hover:translate-x-2"
                  >
                    {c.cta}
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a3b5b] px-6 py-16 text-center text-white md:px-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-8">
          <h2 className="text-3xl font-bold md:text-4xl">Partner with the Leaders in Industry</h2>
          <p className="text-lg text-slate-200">
            Whether it&apos;s raw materials, construction services, or manufactured products, the GSM Group is ready to deliver excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="rounded-lg bg-white px-8 py-3 font-bold text-[#1a3b5b] shadow-lg transition-colors hover:bg-slate-100">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
