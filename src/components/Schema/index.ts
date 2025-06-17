import type { Media, Post, User } from '@/payload-types'
import { getServerSideURL } from '@/utilities/getURL'

export const organizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Creative Hub Ethiopia',
    url: 'https://creativehub.et/',
    logo: {
      '@type': 'ImageObject',
      url: 'https://creativehub.et/favicon-32x32.png',
      width: '600',
      height: '400',
    },
    description:
      'Creative Hub Ethiopia empowers designers, SMEs, and innovators with global design & industrial training, state-of-the-art tools, and partnerships with industries and government. Join us to transform your ideas.',
    foundingDate: '2021',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bole Road',
      addressLocality: 'Addis Ababa',
      addressRegion: 'Addis Ababa',
      postalCode: '1000',
      addressCountry: 'ET',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+251-912-615-214',
      contactType: 'Customer Support',
      email: 'Dev@iceaddis.com',
      areaServed: 'ET',
    },
    serviceArea: 'Ethiopia',
    // TODO: add socials
    sameAs: [
      'https://twitter.com/CreativeHubET',
      'https://linkedin.com/company/creative-hub-ethiopia',
      'https://facebook.com/CreativeHubET',
    ],
    keywords: [
      'Creative Hub Ethiopia',
      'innovation Ethiopia',
      'SME support Addis Ababa',
      'design training Ethiopia',
      'government partnerships Ethiopia',
      'prototyping resources',
      'creative entrepreneurship Ethiopia',
    ],
    memberOf: [
      {
        '@type': 'Organization',
        name: 'United Nations Industrial Development Organization',
        '@id': 'https://www.unido.org/',
      },
      {
        '@type': 'Organization',
        name: 'ITALIAN AGENCY FOR DEVELOPMENT COOPERATION',
        '@id': 'https://addisabeba.aics.gov.it/',
      },
      {
        '@type': 'Organization',
        name: 'Ethiopian Enterprises Development',
        '@id': 'https://manuf-sme.gov.et/',
      },
      {
        '@type': 'Organization',
        name: 'iceaddis',
        '@id': 'https://www.iceaddis.com/',
      },
    ],
  }
}

export const articleSchema = (props: Post) => {
  const image = props.meta?.image as Media
  const authors = props.authors as User[]

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${getServerSideURL()}/posts/${props.slug}`,
    },
    headline: props.title,
    description: props.meta?.description,
    image: [
      {
        '@type': 'ImageObject',
        url: `${process.env.NEXT_PUBLIC_SERVER_URL}/${process.env.UPLOADTHING_ENDPOINT}/${image?.filename}`,
      },
    ],
    author: authors.map((author) => ({
      '@type': 'Person',
      name: author.name,
    })),
    publisher: {
      '@type': 'Organization',
      name: 'Creative Hub Ethiopia',
      logo: {
        '@type': 'ImageObject',
        url: 'https://creativehub.et/favicon-32x32.png',
        width: '32',
        height: '32',
      },
    },
    datePublished: new Date(props.createdAt),
    dateModified: new Date(props.updatedAt),
  }
}

export const imageSchema = (props: Media) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: `${process.env.NEXT_PUBLIC_SERVER_URL}/${process.env.UPLOADTHING_ENDPOINT}/${props?.filename}`,
    creditText: props?.creditText,
  }
}
