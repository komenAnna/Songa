import AboutUs from '@/components/AboutUs'
import { Hero } from '@/components'
import Services from '@/components/Services'
import Cards from '@/components/Cards'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Services />
      <Cards />
    </div>
  )
}
