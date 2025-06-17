import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { InsightsPresentation } from './'
import { unstable_cache } from 'next/cache'
import { REVALIDATION_TIME_MS } from '@/constants'
import { InsightsListPresentation } from '../../insights'
import { Pagination } from '@/components/Pagination'
import { SectionTitle } from '@/components/ui'

const InsightsContainer = async () => {
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 6,
    overrideAccess: false,
    select: {
      title: true,
      slug: true, // Ensure slug is selected
      categories: true,
      meta: true,
      createdAt: true,
    },
    sort: '-updatedAt',
  })

  // const cachedPosts = unstable_cache(
  //   async () => {
  //     const posts = await payload.find({
  //       collection: 'posts',
  //       depth: 1,
  //       limit: 6,
  //       overrideAccess: false,
  //       select: {
  //         title: true,
  //         slug: true, // Ensure slug is selected
  //         categories: true,
  //         meta: true,
  //         createdAt: true,
  //       },
  //       sort: '-updatedAt',
  //     })
  //     return posts
  //   },
  //   ['posts-home'],
  //   { revalidate: REVALIDATION_TIME_MS, tags: ['posts-home'] },
  // )

  // const posts = await cachedPosts()

  // Transform the fetched posts into the format expected by InsightsPresentation
  const blogs = posts.docs.map((post) => ({
    id: post.id,
    slug: post.slug, // Include the slug
    title: post.title,
    categories:
      post.categories?.map((category) =>
        typeof category === 'string' ? category : category.title,
      ) || [],
    description: post.meta?.description || '',
    dateTime: post.createdAt,
    imageUrl:
      typeof post.meta?.image === 'string'
        ? post.meta?.image
        : post.meta?.image?.url || 'https://via.placeholder.com/800x600',
  }))

  return (
    <section className="py-8 md:py-16">
      <SectionTitle sectionName="Insights" sectionTitle="Stay Informed, Stay Inspired" />
      <InsightsListPresentation
        blogs={blogs}
        currentPage={posts.page}
        totalDocs={posts.totalDocs}
        limit={6}
        showCount={false}
      />

      {/* <div className="container">
        {posts.totalPages > 1 && posts.page && (
          <Pagination page={posts.page} totalPages={posts.totalPages} />
        )}
      </div> */}
    </section>
  )
}

export default InsightsContainer
