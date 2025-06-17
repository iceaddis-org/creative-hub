import type { Metadata } from 'next'

import { RelatedPosts } from '@/blocks/RelatedPosts/Component'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import RichText from '@/components/RichText'
import { Nav } from '@/components/layout'

import type { Media, Post } from '@/payload-types'

import { PostHero } from '@/heros/PostHero'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { articleSchema, imageSchema } from '@/components/Schema'
import Script from 'next/script'
import { unstable_cache } from 'next/cache'
import { REVALIDATION_TIME_MS } from '@/constants'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'posts',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = posts.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Post({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const url = '/posts/' + slug
  const post = await queryPostBySlug({ slug })

  if (!post) return <PayloadRedirects url={url} />

  const schemaImage = imageSchema(post.meta?.image as Media)
  const blogSchema = articleSchema(post)

  return (
    <div>
      <Script id="image-schema" type="application/ld+json" strategy="lazyOnload">
        {JSON.stringify(schemaImage)}
      </Script>
      <Script id="blog-schema" type="application/ld+json" strategy="lazyOnload">
        {JSON.stringify(blogSchema)}
      </Script>
      <Nav />

      <article className="pt-32 pb-16">
        <PageClient />
        {/* Allows redirects for valid pages too */}
        <PayloadRedirects disableNotFound url={url} />
        {draft && <LivePreviewListener />}
        <PostHero post={post} />
        <div className="flex flex-col items-center gap-4 pt-8">
          <div className="">
            <RichText className="max-w-[48rem] mx-auto" data={post.content} enableGutter={false} />
            {post.relatedPosts && post.relatedPosts.length > 0 && (
              <RelatedPosts
                className="mt-12 max-w-[52rem] lg:grid lg:grid-cols-subgrid col-start-1 col-span-3 grid-rows-[2fr]"
                docs={post.relatedPosts.filter((post) => typeof post === 'object')}
              />
            )}
          </div>
        </div>
      </article>
    </div>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const post = await queryPostBySlug({ slug })

  return generateMeta({ doc: post })
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const post = await payload.find({
    collection: 'posts',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })
  // const result = unstable_cache(
  //   async () => {
  //     const post = await payload.find({
  //       collection: 'posts',
  //       draft,
  //       limit: 1,
  //       overrideAccess: draft,
  //       pagination: false,
  //       where: {
  //         slug: {
  //           equals: slug,
  //         },
  //       },
  //     })
  //     return post
  //   },
  //   [`post ${slug}`],
  //   { revalidate: REVALIDATION_TIME_MS, tags: [`post ${slug}`] },
  // )
  // const post = await result()

  return post.docs?.[0] || null
})
