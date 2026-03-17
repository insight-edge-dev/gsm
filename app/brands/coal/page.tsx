'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, Clock, Globe, TrendingUp, Users } from 'lucide-react'

export default function CoalPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 py-12 lg:px-20 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div className="flex flex-col gap-8" initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="space-y-4">
              <span className="inline-block rounded border border-[#1a3b5b]/20 bg-[#1a3b5b]/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#1a3b5b]">Industrial Excellence</span>
              <h1 className="text-4xl font-black leading-tight tracking-tighter text-slate-900 md:text-6xl">
                Powering Progress Through Strategic <span className="text-[#1a3b5b]">Coal Trade</span>
              </h1>
              <p className="max-w-xl text-lg text-slate-600">
                GSM Group&apos;s Coal Trade Division leverages a decades-long mining legacy to power manufacturing plants and energy sectors across the region.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1a3b5b] px-8 py-4 font-bold text-white transition-all hover:shadow-lg hover:shadow-[#1a3b5b]/20">
                Explore Operations
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
             <Link
                href="/about"
                 className="rounded-xl border border-slate-300 px-8 py-4 font-bold text-slate-700 transition-all hover:bg-slate-50">
                Our Story
              </Link>
            </div>
          </motion.div>
          <div className="relative">
            <div
              className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-100 shadow-2xl"
              style={{
                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCsn-ZktdX05S2R9b3xjfuvO0xGtI-I61hvzfs2zIBuHiJJqEeUkBcfrQBPwtLVfDR1IZhvW7TxlAOuTqaYTsuuX7hKKHhljA4vCWJSqyxLVoXei8xv4bk9PNRCzJ6Pwm7PzUypUp_h1kcam4KUKEiw-bGAxMWKZqU4d5iX_7HB_eq0YoPe_1xBKEw-AOVnmQHAFPFap6qSu7H4Eir2dojmnL8ouc8jUe2UW1dRslUsBzjpnyvDMIOZRFXz1NaW-mYqT34qCGhw5UWW')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-slate-100 bg-white p-6 shadow-xl md:block">
              <p className="text-3xl font-black text-[#1a3b5b]">2M+</p>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Annual Export Tons</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-slate-200 bg-slate-50 px-6 py-10 md:px-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 lg:grid-cols-4">
          {[
            { icon: Globe, label: 'Market Reach', value: 'Regional Hub' },
            { icon: TrendingUp, label: 'Reliability', value: '99.8% On-Time' },
            { icon: Users, label: 'Client Base', value: '500+ Industrial Units' },
            { icon: Clock, label: 'Legacy', value: 'Est. 2000' },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <s.icon className="h-5 w-5 text-[#1a3b5b]" aria-hidden="true" />
                <p className="text-sm font-semibold text-slate-500">{s.label}</p>
              </div>
              <p className="text-2xl font-bold text-slate-900">{s.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industry Focus */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-20">
        <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Fueling Essential Industries</h2>
            <p className="text-slate-600">Our high-calorific value coal is specifically processed to meet the rigorous thermal requirements of large-scale manufacturing.</p>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              title: 'Cement Production',
              body: 'Low-ash coal solutions optimized for high-temperature kilns and continuous production cycles.',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuv86YNzKFu4fl_-rT_qHIpMmlI5O_gEVLtlvj4Ftc1rDKkMGSdBioNg0nOSZ1Si_FfGqZUpfH22c9zJO2LvjmX0Zsw8urJnLZBxFMghpcfUszUxyIK7Vhr81s3ga2moUvnQy2bf4nffGamQnDmo9pB55DluBm7qWvTlF73wjz-I5ed7ZfsBjlvoUUCTN7KtROv709VsWnmlWqU_pWYdZC0MWBLkcc-w3yYarZLNZ3Iq9bHD1BhV4hrd3Aj-IisSsItwbVT2Gzbk10',
            },
            {
              title: 'Brick Manufacturing',
              body: 'Providing consistent thermal energy to hundreds of manufacturing clusters across the region.',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmTmKpYCdGJPAJ1CeAqA1Fhkaw6-1QbMXMdWN2hsuN-EeJF5WNMe1XD1ogehUtA59uJmNjBICrDuNJc3iYPvzlzfdz41KjSuBKeHNvJpY1oMmHNLmZkecrx5pFSOnJx8yus07XxRiOC3a4xycwnV2HcW5B_wQK25BORr2RhI1y081HEcGJ5lzZVSsx8OjwZ2cVq2X-JzzWVXGUKHibPtT1I7pTonnbmgis1JJeyCs2VG0sOE8r_lovZMg5d8vI_4UNlDm-RzGmuTy9',
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
                <h3 className="mb-2 text-2xl font-bold text-white">{ind.title}</h3>
                <p className="mb-4 text-sm text-slate-200">{ind.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sustainability */}
      <section className="border-t border-slate-200 bg-slate-50 px-6 py-20 md:px-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row">
          <div className="space-y-6 lg:w-1/2">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Environmental Compliance &amp; Ethical Mining</h2>
            <p className="leading-relaxed text-slate-600">
              At GSM Group, we believe that mining legacy comes with immense responsibility. Our operations adhere to strict environmental standards, incorporating dust suppression systems and responsible logistics.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {['ISO 14001 Certified', 'Clean Extraction Tech', 'Community Restoration', 'Emission Monitoring'].map((c) => (
                <div key={c} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-[#1a3b5b]" aria-hidden="true" />
                  <span className="text-sm font-semibold text-slate-700">{c}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div
                className="aspect-square overflow-hidden rounded-lg shadow-md"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD6biZ094NSV34Plnn_ePAF5fTc3DYPldZanMn2yr2IT4X_eUGiPgn1UKtVJ5Ln6esGCF457UW9UfWcaDN83uzzNdc0PTLNL_0AI9mjwkJenhGFNugoifPu6InWsZTGlGam-GylmR8n9UJmnGAzXqvuY5wQYgr5wxfxmPwdOZGO-jhb2vNyrlUOPNne26HEMTU7PM7peciF4ZPd4aXqdOvBc4dOps09IHNVx8OTdKiEFtc8j02bh8POmvBLiRH_ncOBbColsS-XXVEN')", backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
              <div
                className="aspect-square translate-y-8 overflow-hidden rounded-lg shadow-md"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDQTwd39BhG9lUhnsVqzYoA7aoBkG8SSX_ZkiQ8DwYxsxyIkRb4spi0MciLibyaFAQehrjCHfxgkmXcu_nDKsWutjWDaWFzbN-Xb3a9JD8ZdQgr_jB5m1MrBSrZ255ogahSg-psA3JgDpTViXXva7XDnBqfD4Zj20xlfYTs3ofeDoJrUZtxTyDuL5KAMphG_lVXDIoOW9BdUmWDQThOjXCxVP4Ygt9ZCV7D9eXsILGSu3GtCuU0LeJBYEr3oLdPRTWq4N4nuoKichaZ')", backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
