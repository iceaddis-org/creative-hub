import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  siteName: 'Creative Hub Ethiopia',
  title: 'Creative Hub Ethiopia | Design, Innovation & SME Support in Addis Ababa',
  description:
    'Creative Hub Ethiopia empowers designers, innovators, and SMEs with global design & industrial training, state-of-the-art tools, and partnerships with industries and government. Join us to transform your ideas.',
  url: getServerSideURL(),
  images: [
    {
      url: `${getServerSideURL()}/og.png`,
      type: 'image/png',
      width: 1600,
      height: 840,
      alt: 'Creative Hub Ethiopia workspace with innovators collaborating',
    },
  ],
  locale: 'en-US',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
