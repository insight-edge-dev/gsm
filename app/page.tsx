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
      '/images/home/card1.jpeg',
    href: '/brands/coal',
  },
  {
    title: 'Marak Pavers & Bricks',
    description:
      'High-quality manufacturing of interlocking pavers and fly-ash bricks for sustainable urban infrastructure projects.',
    imageSrc:
      '/images/home/card2.webp',
    href: '/brands/pavers',
  },
  {
    title: 'GSM Civil Construction',
    description:
      'Specializing in large-scale government and private civil projects, bridging communities through better connectivity.',
    imageSrc:
      '/images/home/card3.png',
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
        subtitle="From coal mining to modern infrastructure, the GSM Group delivers high-quality, cost-effective products and services driven by innovation and integrity."
        primaryCta={{ label: 'View Portfolio', href: '/portfolio' }}
        secondaryCta={{ label: 'Contact Us', href: '/contact' }}
        imageSrc="/images/home/hero.jpeg"
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
        image1Src="/images/home/foot1.png"
        image2Src="/images/home/foot2.png"
        items={impactItems}
      />
    </>
  )
}
