import type { Metadata } from 'next'

import type { Media, /*Page,  */ Post, Config } from '../payload-types'

import { mergeOpenGraph } from './mergeOpenGraph'
import { getServerSideURL } from './getURL'
import { mergeTwitterCard } from './mergeTwitterCard'

const getImageURL = (image?: Media | Config['db']['defaultIDType'] | null) => {
  const serverUrl = getServerSideURL()

  let url = serverUrl + '/og.png'

  if (image && typeof image === 'object' && 'url' in image) {
    const ogUrl = image.sizes?.og?.url

    url = ogUrl ? serverUrl + ogUrl : serverUrl + image.url
  }

  return url
}

export const generateMeta = async (args: {
  doc: /* Partial<Page> | */ Partial<Post> | null
}): Promise<Metadata> => {
  const { doc } = args

  const image = getImageURL(doc?.meta?.image)

  const title = doc?.meta?.title
    ? doc?.meta?.title + ' | Creative Hub Ethiopia'
    : 'Creative Hub Ethiopia | Design, Innovation & SME Support in Addis Ababa'

  return {
    title: {
      absolute: title,
    },
    description: doc?.meta?.description,
    openGraph: mergeOpenGraph({
      description: doc?.meta?.description,
      images: image
        ? [
            {
              url: image,
            },
          ]
        : undefined,
      title,
      url: Array.isArray(doc?.slug) ? doc?.slug.join('/') : '/',
    }),
    twitter: mergeTwitterCard({
      title,
      description: doc?.meta?.description,
      images: image
        ? [
            {
              url: image,
            },
          ]
        : undefined,
    }),
  }
}
