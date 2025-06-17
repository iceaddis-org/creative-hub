import type { Metadata } from 'next'

import { getServerSideURL } from './getURL'

const defaultTwitterCard: Metadata['twitter'] = {
  card: 'summary_large_image',
  title: 'Creative Hub Ethiopia | Design, Innovation & SME Support in Addis Ababa',
  description:
    'Creative Hub Ethiopia empowers designers, innovators, and SMEs with global design & industrial training, state-of-the-art tools, and partnerships with industries and government. Join us to transform your ideas.',
  images: [
    {
      url: `${getServerSideURL()}/og.png`,
      type: 'image/png',
      width: 1600,
      height: 840,
      alt: 'Creative Hub Ethiopia workspace with innovators collaborating',
    },
  ],
}

export const mergeTwitterCard = (twitter?: Metadata['twitter']): Metadata['twitter'] => {
  return {
    ...defaultTwitterCard,
    ...twitter,
    images: twitter?.images ? twitter.images : defaultTwitterCard.images,
  }
}
