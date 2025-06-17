import { getPayload } from 'payload'
import PartnersInsightListPresentation from './PartnersInsightListPresentation'
import configPromise from '@payload-config'
import { unstable_cache } from 'next/cache'
import { REVALIDATION_TIME_MS } from '@/constants'
import { InsightsListPresentation } from '../../insights'
import { Pagination } from '@/components/Pagination'

const sampleBlogs = [
  {
    id: '1',
    imageUrl:
      'https://images.unsplash.com/photo-1604646357333-ecb1f24b2d21?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfEJKSk10dGVESkE0fHxlbnwwfHx8fHw%3D',
    title: 'Creative Spaces: Redefining Work Environments',
    description:
      'Explore how innovative coworking spaces are transforming traditional work environments.',
    dateTime: '2025-02-15T10:00:00',
  },
  {
    id: '2',
    imageUrl:
      'https://images.unsplash.com/photo-1725610588070-ad71868a9928?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU4fEJKSk10dGVESkE0fHxlbnwwfHx8fHw%3D',
    title: 'Spotlight on Local Artists',
    description:
      'A feature on the emerging artists in our community and how they are shaping the local art scene.',
    dateTime: '2025-02-16T12:00:00',
  },
  {
    id: '3',
    imageUrl:
      'https://images.unsplash.com/photo-1734200468967-8d515e2c788f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fEJKSk10dGVESkE0fHxlbnwwfHx8fHw%3D',
    title: 'Networking Events at Creative Hub',
    description:
      'Highlights from our recent networking events and tips for making the most out of them.',
    dateTime: '2025-02-17T09:30:00',
  },
]

const PartnersInsightListContainer = async () => {
  const payload = await getPayload({ config: configPromise })

  const category = await payload.find({
    collection: 'categories',
    depth: 1,
    limit: 1,
    pagination: false,
    overrideAccess: false,
    select: {
      title: true,
    },
    where: {
      slug: {
        equals: 'partners',
      },
    },
  })

  // const cachedCategories = unstable_cache(
  //   async () => {
  //     const category = await payload.find({
  //       collection: 'categories',
  //       depth: 1,
  //       limit: 1,
  //       pagination: false,
  //       overrideAccess: false,
  //       select: {
  //         title: true,
  //       },
  //       where: {
  //         slug: {
  //           equals: 'partners',
  //         },
  //       },
  //     })
  //     return category
  //   },
  //   ['partners-category'],
  //   {
  //     revalidate: REVALIDATION_TIME_MS,
  //     tags: ['partners-category'],
  //   },
  // )

  // const category = await cachedCategories()
  const partnersBlog = await payload.find({
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
    where: {
      categories: {
        in: [category.docs[0]?.id],
      },
    },
  })

  // const cachedBlogs = unstable_cache(
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
  //       where: {
  //         categories: {
  //           in: [category.docs[0]?.id],
  //         },
  //       },
  //     })
  //     return posts
  //   },
  //   ['partners-blogs'],
  //   {
  //     revalidate: REVALIDATION_TIME_MS,
  //     tags: ['partners-blogs'],
  //   },
  // )

  // TODO: inefficient query
  // const partnersBlog = await cachedBlogs()

  const blogs = partnersBlog.docs.map((post) => ({
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
    <div>
      {/* Insights List */}
      <InsightsListPresentation
        blogs={blogs}
        currentPage={partnersBlog.page}
        totalDocs={partnersBlog.totalDocs}
      />

      <div className="container">
        {partnersBlog.totalPages > 1 && partnersBlog.page && (
          <Pagination page={partnersBlog.page} totalPages={partnersBlog.totalPages} />
        )}
      </div>
    </div>
  )
}

export default PartnersInsightListContainer
