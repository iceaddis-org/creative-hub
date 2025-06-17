import type { Metadata } from 'next/types'

import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'
import { notFound } from 'next/navigation'
import { mergeTwitterCard } from '@/utilities/mergeTwitterCard'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { REVALIDATION_TIME_MS } from '@/constants'
import { unstable_cache } from 'next/cache'
import { InsightsListPresentation } from '@/components/pages/insights'

import { Nav } from '@/components/layout'

export const revalidate = 600

type Args = {
  params: Promise<{
    pageNumber: string
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { pageNumber } = await paramsPromise
  const payload = await getPayload({ config: configPromise })

  const sanitizedPageNumber = Number(pageNumber)

  if (!Number.isInteger(sanitizedPageNumber)) notFound()
  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 12,
    page: sanitizedPageNumber,
    overrideAccess: false,
    sort: '-updatedAt',
  })

  // const cachedPosts = unstable_cache(
  //   async () => {
  //     const posts = await payload.find({
  //       collection: 'posts',
  //       depth: 1,
  //       limit: 12,
  //       page: sanitizedPageNumber,
  //       overrideAccess: false,
  //       sort: '-updatedAt',
  //     })
  //     return posts
  //   },
  //   [`posts ${sanitizedPageNumber}`],
  //   {
  //     revalidate: REVALIDATION_TIME_MS,
  //     tags: [`posts ${sanitizedPageNumber}`],
  //   },
  // )

  // const posts = await cachedPosts()

  const blogs = posts.docs.map((post) => ({
    id: post.id,
    title: post.title,
    description: post.meta?.description || '',
    dateTime: post.createdAt || new Date().toISOString(),
    imageUrl:
      typeof post.meta?.image === 'string'
        ? post.meta?.image
        : post.meta?.image?.url || 'https://via.placeholder.com/800x600',
    slug: post.slug,
    categories: post.categories?.map((cat) => (typeof cat === 'string' ? cat : cat.title)) || [], // Extract category titles
  }))

  return (
    <div className="pb-24">
      <Nav />
      <PageClient />
      <div className="px-4 md:px-8 my-8">
        <div className="prose max-w-none">
          <h1>Insights</h1>
        </div>
      </div>

      {/* Insights List */}
      <InsightsListPresentation
        blogs={blogs}
        currentPage={posts.page}
        totalDocs={posts.totalDocs}
      />

      <div className="container">
        {posts?.page && posts?.totalPages > 1 && (
          <Pagination page={posts.page} totalPages={posts.totalPages} />
        )}
      </div>
    </div>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { pageNumber } = await paramsPromise
  return {
    title: `Posts Page ${pageNumber || ''}`,
    openGraph: mergeOpenGraph({ title: `Posts Page ${pageNumber || ''} | Creative Hub Ethiopia` }),
    twitter: mergeTwitterCard({
      title: `Posts Page ${pageNumber || ''} | Creative Hub Ethiopia`,
    }),
  }
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const { totalDocs } = await payload.count({
    collection: 'posts',
    overrideAccess: false,
  })

  const totalPages = Math.ceil(totalDocs / 10)

  const pages: { pageNumber: string }[] = []

  for (let i = 1; i <= totalPages; i++) {
    pages.push({ pageNumber: String(i) })
  }

  return pages
}
