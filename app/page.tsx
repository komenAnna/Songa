import Services from '@/components/Services'
import Cards from '@/components/Cards'
import Image from 'next/image'
import RiderRegistration from '@/app/components/Landing/RiderRegistration'
import { Hero } from './components'
import AboutUs from './components/Landing/AboutUs'

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Services />
      <Cards />
      {/* <AboutUs /> */}
      <RiderRegistration />
    </div>
  )
}
