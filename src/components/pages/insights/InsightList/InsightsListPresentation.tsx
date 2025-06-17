'use client'

import { InsightCard } from '@/components/ui'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { PageRange } from '@/components/PageRange'

type Blog = {
  id: string
  title: string
  description: string
  dateTime: string
  imageUrl: string
  slug: string
  categories?: string[]
}

interface InsightsListPresentationProps {
  blogs?: Blog[]
  latestBlog?: Blog
  currentPage?: number
  totalDocs?: number
  limit?: number
  showCount?: boolean
}

const DEFAULT_FEATURED_BLOG: Blog = {
  id: 'default',
  title: 'No featured post',
  description: 'Check back later for new articles',
  dateTime: new Date().toISOString(),
  imageUrl: '/default-blog.jpg',
  slug: 'default',
  categories: ['General'],
}

const InsightsListPresentation = ({
  blogs = [],
  latestBlog,
  currentPage = 1,
  totalDocs = 1,
  limit = 12,
  showCount = true,
}: InsightsListPresentationProps) => {
  const featuredBlog = latestBlog // ?? DEFAULT_FEATURED_BLOG

  return (
    <div className="px-4 md:px-8">
      {/* Featured Blog */}
      {featuredBlog && (
        <div className="relative col-span-12 mt-8 aspect-[7/10] overflow-hidden rounded-2xl md:aspect-[4/3] lg:aspect-[8/3] inline-block w-full">
          <Image
            src={featuredBlog.imageUrl}
            alt={featuredBlog.title}
            className="z-0 h-full w-full object-cover"
            priority
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 z-10 flex flex-col justify-end bg-gradient-to-bl from-black/40 to-black/80 px-4 py-6 md:p-8">
            <div className="w-full space-y-3 md:w-10/12 lg:w-1/2">
              <div className="flex items-center gap-3">
                {featuredBlog.id !== 'default' && (
                  <span className="rounded-md bg-background/90 p-2 text-xs leading-none text-foreground">
                    {new Intl.DateTimeFormat('en-US', {
                      dateStyle: 'medium',
                    }).format(new Date(featuredBlog.dateTime))}
                  </span>
                )}
              </div>
              <h2 className="font-display text-xl font-medium leading-none tracking-tight text-background md:text-3xl">
                {featuredBlog.title}
              </h2>
              <div className="flex gap-2 items-center justify-start mt- flex-wrap">
                {featuredBlog.categories?.length
                  ? featuredBlog.categories.map((category) => (
                      <span
                        className="rounded-md bg-muted p-1.5 text-sm  text-foreground font-medium leading-none"
                        key={category}
                      >
                        {category}
                      </span>
                    ))
                  : undefined}
              </div>
              <p className="line-clamp-2 text-background/80">{featuredBlog.description}</p>
            </div>
            {featuredBlog.id !== 'default' && (
              <Link
                href={`/posts/${featuredBlog.slug}`}
                className="mt-4 w-fit rounded-full bg-background px-4 py-2 text-sm font-medium transition hover:bg-background/90"
              >
                Read Article
              </Link>
            )}
          </div>
        </div>
      )}
      {showCount && (
        <div className="mt-6">
          <PageRange
            collection="posts"
            currentPage={currentPage}
            totalDocs={totalDocs}
            limit={limit}
          />
        </div>
      )}
      <div className="mt-6 grid w-full grid-cols-12 gap-4 gap-y-6 mb-6">
        {blogs.map((blog) => (
          <InsightCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  )
}

export default InsightsListPresentation
