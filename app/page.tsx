import Hero from '@/components/Hero'
import PortfolioCards from '@/components/PortfolioCards'
import CertificationSection from '@/components/CertificationSection'
import ImpactSection from '@/components/ImpactSection'

const portfolioCards = [
  {
    title: 'George S Marak Coal Syndicate',
    description:
      'Strategic resource management and logistics driving the regional energy and industrial sectors since the group\'s inception.',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAP49NCIJGDaEq9ZhyFwbK9tHojFiHbt-bkY0tNYZ2dxx1D9-1DS-c4c8r_c8PMCHBbnhfYmXJtMjAdP-B6nfMRkjG4eughnVPVPhDP3FQv4h9s92hd1-0JiOCETGt_hXKT6DifGgBjPGCgcInxhYjzojt8ykW4UxaiTW1XceBguATc4hPT2WRDCdEEnufnl-VUypVTF-2fpHV-L_J9dof-JkWEtWtbufVZph1uLs0bhO8tuw8dLbdBx3xnKx8EgazXL5IiGFbBbZN_',
    href: '/brands/coal',
  },
  {
    title: 'Marak Pavers & Bricks',
    description:
      'High-quality manufacturing of interlocking pavers and fly-ash bricks for sustainable urban infrastructure projects.',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDdWMb6nIRQTk_uBIxMDifPa0Zwtjqm-6vEpCH1yYUvcg8g6pqbvSnMy_tuoHXDE63-awwANe6zUVQzHahfDgNV7YBN1Iy6Hyd4OloGIDUo4mC_KU86H8TZ5QjXl3hvEWsp7hrbxHoLMP3pAKQBKxVG0qj4WVOxoBhKlxizpXrS8YA09MtubK6W6teocxy-DPPHvtuMV5wdSyRcoAmFnjNkQlQuDwr0i6J79aftz8Vrr7vcqKIIiw0pj5Eny3DxiHMgj699vtkxfAPU',
    href: '/brands/pavers',
  },
  {
    title: 'GSM Civil Construction',
    description:
      'Specializing in large-scale government and private civil projects, bridging communities through better connectivity.',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC05joIv5q8O2XO83UYJV1dvDHkGpEwVN4AqyMP68aeXqkDU91mcChjwmhxin5mWii0jvWw2HNkLszpm8Z_ijgHu5WLvmKR8KLGtPL7TU8z4R4bPAzKnMSIOijXDNGR4is7HAh0aEu0OincEby0wCmF5E_Eaf2pOYo_WpayZmewFUmshckRk4L_6jRq-RHsQCA_UU4KDIG2bE-eASe5sJFyWJ-VXKYCuEGW7AXynJMyBbdfTHrjqyEJc-XBmnMxaBobALouS6yKgpwB',
    href: '/portfolio',
  },
]

const certBadges = [
  { abbr: 'AAI', label: 'Airports Authority' },
  { abbr: 'MES', label: 'Military Engineer Services' },
  { abbr: 'CPWD', label: 'Central PWD' },
]

const impactItems = [
  {
    icon: 'diversity_3',
    heading: 'Local Employment',
    body: '90% of our workforce consists of skilled local artisans and workers from the region.',
  },
  {
    icon: 'school',
    heading: 'Youth Empowerment',
    body: 'Apprenticeship programs for local vocational school graduates in masonry and engineering.',
  },
]

export default function HomePage() {
  return (
    <>
      <Hero
        badge="Est. 2000 in Meghalaya"
        title="Building a Legacy of Excellence Across"
        titleHighlight="Meghalaya"
        subtitle="Dedicated to sustainable growth and infrastructural development through diverse industrial expertise, from heavy construction to strategic resource management."
        primaryCta={{ label: 'View Portfolio', href: '/portfolio' }}
        secondaryCta={{ label: 'Our Story', href: '/about' }}
        imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBr-isfUen84ZWfyH2RKI89_e_Z2fPjSODHADiO9FXQYXDQePzMaWpx2u0JoUAX7Hia4LYDbvBpVdhtpr5Zs7GoAZuX-dxlxOufVHPJjiERy2E1YCHgK2J4Ujy8wWvQhwgeg21P36WyENo_i72QxFYMgDJ7xKAUPz_IB-HBEwCXeBCpE1DH03AF2xzbThiWm97tjiWKWlilmi5S7gCiC8oww_ZiyYXotP2CrSlK2UQvFtbapjW0CpBhwCfj_Lhx1GT-EMAaLC8KUR4b"
        imageAlt="GSM Group Project Site"
        stats={[
          { label: 'Founded', value: '2000' },
          { label: 'Workforce', value: '96+' },
        ]}
      />

      <PortfolioCards
        heading="Our Industrial Ecosystem"
        subheading="Diverse expertise driving regional development"
        cards={portfolioCards}
      />

      <CertificationSection badges={certBadges} />

      <ImpactSection
        eyebrow="Beyond Business"
        heading="Growing with Meghalaya"
        description="For us, excellence isn't just about structures; it's about people. Our CSR initiatives focus on rural electrification, local employment, and supporting local education infrastructure in East and West Garo Hills."
        image1Src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnkfxgorj9Mol1SuqubPSrnX5dLfB3p5Eulu3DMr156BS4okOsexZwMlZe2_b2KQL9oFV_leUmvUuLknu2qp8WmQYFpn90syDtZBAFBH4GSryKI2xDuRBuHVG_GskoSH1uNM6iaMrbhK_QF8fbQv09utBv8etIypEM16U6g0Gx4a0JnxuSdKVKMHTDqScZj9Agqi0UxPQnVpNCZb1eVLe81zZQbd0bZJ3dg5JuoLn4hqrbER6-_55U-FCnOnDh4F3-yko7H6ShKVYC"
        image2Src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmxrL7uEjykLO20rcjXBcMQkTxTak55o7zy4XQWjRl7raRcNW0WRbh0RXJGNHVua1CFpUEf_daqz3Bcpgurn8PqfMmKc8QdVu212YXM13HTjg-6Byu4vUTjlvduGEciar0kl13EdkOmdOydK8TrFt41o-HYOyMmf-saiAU30AggnuxUrGXeWt_sFIfVpdS0-10bWMpruBTS7x6DHxdSxQPl7U1sgPjhp0zM-qvPKkDhg01ILSUyDNV0GQfriS3MEwUwrQcP3sv9Zld"
        items={impactItems}
      />
    </>
  )
}
