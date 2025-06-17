import { Nav } from '@/components/layout'
import {
  AboutContainer,
  AboutHeaderContainer,
  AboutMapContainer,
  AboutPassageContainer,
  AboutServicesContainer,
  AboutStatsContainer,
  AboutCollaboratorsContainer,
} from '@/components/pages/about'
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
  title: 'About',
  openGraph: mergeOpenGraph({
    title: 'About | Creative Hub Ethiopia',
  }),
  twitter: mergeTwitterCard({
    title: 'About | Creative Hub Ethiopia',
  }),
}
