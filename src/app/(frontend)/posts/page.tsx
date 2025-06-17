import type { Metadata } from 'next/types'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Nav } from '@/components/layout'
import { InsightsListPresentation } from '@/components/pages/insights'

import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { mergeTwitterCard } from '@/utilities/mergeTwitterCard'
import { unstable_cache } from 'next/cache'
import { REVALIDATION_TIME_MS } from '@/constants'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'

export const dynamic = 'force-static'

export const revalidate = 86400 // 24 hours

export default async function Page() {
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    select: {
      title: true,
      slug: true, // Ensure slug is selected
      categories: true,
      meta: true,
      createdAt: true, // Ensure createdAt is selected
    },
    sort: '-updatedAt',
  })
  // const cachedPosts = unstable_cache(
  //   async () => {
  //     const posts = await payload.find({
  //       collection: 'posts',
  //       depth: 1,
  //       limit: 12,
  //       overrideAccess: false,
  //       select: {
  //         title: true,
  //         slug: true, // Ensure slug is selected
  //         categories: true,
  //         meta: true,
  //         createdAt: true, // Ensure createdAt is selected
  //       },
  //       sort: '-updatedAt',
  //     })
  //     return posts
  //   },
  //   ['posts'],
  //   { revalidate: REVALIDATION_TIME_MS, tags: ['posts'] },
  // )
  // const cachedFeaturedPost = unstable_cache(
  //   async () => {
  //     const post = await payload.find({
  //       collection: 'posts',
  //       depth: 1,
  //       limit: 1,
  //       overrideAccess: false,
  //       select: {
  //         title: true,
  //         slug: true,
  //         categories: true,
  //         meta: true,
  //         createdAt: true, // Ensure createdAt is selected
  //       },
  //       sort: '-updatedAt',
  //     })
  //     return post
  //   },
  //   ['featured-post'],
  //   { revalidate: REVALIDATION_TIME_MS, tags: ['featured-posts'] },
  // )

  //const [posts, featuredPostData] = await Promise.all([cachedPosts(), cachedFeaturedPost()])
  // const posts = await cachedPosts()

  // Transform the posts data into the format expected by InsightsListPresentation
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

  const featuredPost = posts.docs[0] // featuredPostData.docs[0]
  let featuredBlog = undefined

  if (featuredPost !== undefined) {
    featuredBlog = {
      id: featuredPost.id,
      title: featuredPost.title,
      description: featuredPost.meta?.description || '',
      dateTime: featuredPost.createdAt || new Date().toISOString(),
      imageUrl:
        typeof featuredPost.meta?.image === 'string'
          ? featuredPost.meta?.image
          : featuredPost.meta?.image?.url || 'https://via.placeholder.com/800x600',
      slug: featuredPost.slug,
      categories:
        featuredPost.categories?.map((cat) => (typeof cat === 'string' ? cat : cat.title)) || [], // Extract category titles
    }
  }

  return (
    <div>
      <Nav />
      <main className="pt-8">
        {/* Header Section */}
        <header className="grid grid-cols-12 gap-4 px-8">
          <h1 className="col-span-full font-display text-xl font-medium uppercase leading-none tracking-tighter md:col-span-9 md:text-3xl">
            What You Want to Know About Creative Hub
          </h1>
        </header>

        {/* Insights List */}
        <InsightsListPresentation
          blogs={blogs}
          latestBlog={featuredBlog}
          currentPage={posts.page}
          totalDocs={posts.totalDocs}
        />

        <div className="container">
          {posts.totalPages > 1 && posts.page && (
            <Pagination page={posts.page} totalPages={posts.totalPages} />
          )}
        </div>
      </main>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Posts',
  openGraph: mergeOpenGraph({ title: 'Posts | Creative Hub Ethiopia' }),
  twitter: mergeTwitterCard({
    title: 'Posts | Creative Hub Ethiopia',
  }),
}
