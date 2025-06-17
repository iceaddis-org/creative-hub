import { Nav } from '@/components/layout'
import { PartnersGalleryContainer, PartnersHeaderContainer } from '@/components/pages/partners'
import { PartnersArticleContainer } from '@/components/pages/partners/partners-article'
import PartnersInsightListContainer from '@/components/pages/partners/partners-insight-list/PartnersInsightListContainer'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { mergeTwitterCard } from '@/utilities/mergeTwitterCard'
import type { Metadata } from 'next'

const Partners = () => {
  return (
    <>
      <Nav />
      <PartnersHeaderContainer />
      <PartnersArticleContainer />
      <PartnersGalleryContainer />
      <PartnersInsightListContainer />
    </>
  )
}

export default Partners

export const metadata: Metadata = {
  title: 'Partners',
  openGraph: mergeOpenGraph({
    title: 'Partners | Creative Hub Ethiopia',
  }),
  twitter: mergeTwitterCard({
    title: 'Partners | Creative Hub Ethiopia',
  }),
}
