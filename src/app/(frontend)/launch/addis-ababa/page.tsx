import { Nav } from '@/components/layout'
import {
  AboutCollaboratorsContainer,
  AboutContainer,
  AboutHeaderContainer,
  AboutMapContainer,
  AboutPassageContainer,
  AboutServicesContainer,
  AboutStatsContainer,
} from '@/components/pages/hubs'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { mergeTwitterCard } from '@/utilities/mergeTwitterCard'
import type { Metadata } from 'next'

const About = () => {
  return (
    <>
      <Nav />
      <AboutHeaderContainer />
      <AboutContainer />
      <AboutStatsContainer />
      <AboutPassageContainer />
      <AboutCollaboratorsContainer />
      <AboutServicesContainer />
      <AboutMapContainer />
      {/* <Footer /> */}
    </>
  )
}

export default About

export const metadata: Metadata = {
  title: 'Hubs',
  openGraph: mergeOpenGraph({
    title: 'About | Creative Hub Ethiopia',
  }),
  twitter: mergeTwitterCard({
    title: 'About | Creative Hub Ethiopia',
  }),
}
