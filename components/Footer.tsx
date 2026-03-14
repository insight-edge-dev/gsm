import Link from 'next/link'

const divisions = [
  { label: 'Coal Syndicate', href: '/brands/coal' },
  { label: 'Civil Construction', href: '/portfolio' },
  { label: 'Marak Pavers', href: '/brands/pavers' },
  { label: 'Power Roofings', href: '/brands/roofings' },
  { label: 'Powerlite AAC', href: '/brands/powerlite' },
]

const company = [
  { label: 'Our Story', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Sustainability', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 px-6 py-16 text-white lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="rounded bg-[#1a3b5b] p-1.5 text-white">
                <span className="material-symbols-outlined text-base">architecture</span>
              </div>
              <span className="text-xl font-bold text-white">GSM Group</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Meghalaya&apos;s leading diversified industrial group since 2000. Building the foundation of tomorrow&apos;s infrastructure.
            </p>
          </div>

          {/* Divisions */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Divisions</h4>
            <ul className="mt-6 space-y-3 text-sm text-slate-400">
              {divisions.map((d) => (
                <li key={d.href}>
                  <Link href={d.href} className="transition-colors hover:text-[#1a3b5b]">
                    {d.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Company</h4>
            <ul className="mt-6 space-y-3 text-sm text-slate-400">
              {company.map((c) => (
                <li key={c.label}>
                  <Link href={c.href} className="transition-colors hover:text-[#1a3b5b]">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Connect</h4>
            <p className="mt-6 text-sm text-slate-400">
              GSM Tower, Police Bazar,<br />
              Shillong, Meghalaya 793001<br />
              India
            </p>
            <div className="mt-6 flex gap-3">
              <Link
                href="/contact"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-slate-300 transition-all hover:border-[#1a3b5b] hover:text-[#1a3b5b]"
                aria-label="Email"
              >
                <span className="material-symbols-outlined text-lg">mail</span>
              </Link>
              <Link
                href="/contact"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-slate-300 transition-all hover:border-[#1a3b5b] hover:text-[#1a3b5b]"
                aria-label="Phone"
              >
                <span className="material-symbols-outlined text-lg">call</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 md:flex-row">
          <p className="text-xs text-slate-500">© 2024 GSM Group. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-slate-500">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
