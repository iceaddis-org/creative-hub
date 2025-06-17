// import clsx from 'clsx'
import React from 'react'
import RichText from '@/components/RichText'
import { SectionTitle, InsightCard } from '@/components/ui'
import type { Post } from '@/payload-types'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

export type RelatedPostsProps = {
  className?: string
  docs?: Post[]
  introContent?: SerializedEditorState
}

export const RelatedPosts: React.FC<RelatedPostsProps> = (props) => {
  const { docs, introContent } = props

  return (
    <div className="mt-16">
      {/* Section Title */}
      <SectionTitle sectionName="Related Posts" sectionTitle="Explore More Insights" />

      {/* Intro Content */}
      {introContent && <RichText data={introContent} enableGutter={false} />}

      {/* Grid Layout */}
      <div className="mt-10 grid grid-cols-12 gap-x-4 gap-y-6  md:px-8">
        {docs?.map((doc, index) => {
          if (typeof doc === 'string') return null

          // Transform the Post object into the format expected by InsightCard
          const blog = {
            id: doc.id,
            categories:
              doc.categories?.map((category) =>
                typeof category === 'string' ? category : category.title,
              ) || [],
            slug: doc.slug,
            title: doc.title,
            description: doc.meta?.description || '',
            dateTime: doc.createdAt || new Date().toISOString(), // Fallback to current date if createdAt is missing
            imageUrl:
              typeof doc.meta?.image === 'string'
                ? doc.meta?.image
                : doc.meta?.image?.url || 'https://via.placeholder.com/800x600',
          }

          return (
            <InsightCard
              key={index}
              blog={blog}
              clickable={true} // Make cards clickable
              grayscale={false} // Disable grayscale
            />
          )
        })}
      </div>
    </div>
  )
}
