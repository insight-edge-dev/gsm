'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState } from "react"

export default function ContactPage() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message
      })
    })

    const data = await res.json()

    if (res.ok) {
      alert("Message sent successfully")
      console.log(data)
    } else {
      alert("Email failed")
      console.log(data)
    }
  }
  return (
    <>
      {/* Page header */}
      <div className="bg-slate-50 px-6 py-16 md:px-20">
        <motion.div
          className="mx-auto max-w-7xl text-center md:text-left"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-4 text-5xl font-black leading-tight tracking-tight text-slate-900">Contact Us</h1>
          <p className="max-w-2xl text-xl text-slate-600">
            We&apos;re here to help and answer any question you might have. We look forward to hearing from you.
          </p>
        </motion.div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-20">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-slate-700">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full rounded-lg border border-slate-200 bg-white p-4 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-[#1a3b5b] focus:ring-2 focus:ring-[#1a3b5b]/20"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-slate-700">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full rounded-lg border border-slate-200 bg-white p-4 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-[#1a3b5b] focus:ring-2 focus:ring-[#1a3b5b]/20"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-wider text-slate-700">Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 00000 00000"
                  className="w-full rounded-lg border border-slate-200 bg-white p-4 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-[#1a3b5b] focus:ring-2 focus:ring-[#1a3b5b]/20"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-wider text-slate-700">Message</label>
                <textarea
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can we help you?"
                  className="w-full resize-none rounded-lg border border-slate-200 bg-white p-4 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-[#1a3b5b] focus:ring-2 focus:ring-[#1a3b5b]/20"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex min-w-[200px] items-center justify-center gap-2 rounded-lg bg-[#1a3b5b] px-8 py-4 font-bold text-white transition-all hover:shadow-lg hover:shadow-[#1a3b5b]/20 md:w-auto"
              >
                <span>Send Message</span>
                <Send className="h-4 w-4" aria-hidden="true" />
              </motion.button>
            </form>
          </motion.div>

          {/* Info side */}
          <motion.div
            className="space-y-12 lg:col-span-5"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Contact details */}
            <div className="space-y-8">
              {[
                {
                  icon: MapPin,
                  title: 'Our Location',
                  content: 'GSM Tower, Police Bazar,\nShillong, Meghalaya 793001\nIndia',
                },
                {
                  icon: Phone,
                  title: 'Phone Number',
                  content: '+91 (364) 222-4567\n+91 98765 43210',
                },
                {
                  icon: Mail,
                  title: 'Email Address',
                  content: 'contact@gsmgroup.com\nsupport@gsmgroup.in',
                },
              ].map((d) => (
                <div key={d.title} className="flex gap-5">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 text-[#1a3b5b]">
                    <d.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-bold text-slate-900">{d.title}</h4>
                    <p className="whitespace-pre-line leading-relaxed text-slate-600">{d.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="group relative h-80 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRpHI0-4JZNTs1CnDALlCVwCMsgq5ZBlHF1enbUDWI8dWVynQYXAYJkcQd5WyriFgYs3K2DC5MkSF_hN1hLRhNW036hyGIDZIKK2NyYmG2lv74Us10jnsIDzE3CHGdTUgbQ-6J7gDNPixbw3j6ptx8OlZLtAfC_3xXofAlGi3ls3BXnrGjfYKEcC89Ub9sX12aUqcc1U1_5dA9KBaOuTzpc-mEy5yVqU-Gq4ZQab_KUbsz1rHGh2sg7i99wk0O9FjOdIKnS_2TbEg6"
                alt="Map showing Meghalaya region"
                fill
                className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
              />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="animate-bounce rounded-full bg-[#1a3b5b] p-3 text-white shadow-2xl">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 rounded-lg border border-slate-100 bg-white/95 px-4 py-2 shadow-sm backdrop-blur-md">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Headquarters</span>
                <p className="text-sm font-bold text-slate-900">Shillong, Meghalaya</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
