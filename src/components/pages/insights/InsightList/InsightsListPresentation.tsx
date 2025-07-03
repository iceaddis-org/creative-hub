'use client'

import { PageRange } from '@/components/PageRange'
import { InsightCard } from '@/components/ui'
import { Events } from '../../home/events/EventsPresentation'

interface InsightsListPresentationProps {
  blogs?: Events[]
  currentPage?: number
  totalDocs?: number
  limit?: number
  showCount?: boolean
}

const InsightsListPresentation = ({
  blogs = [],
  currentPage = 1,
  totalDocs = 1,
  limit = 12,
  showCount = true,
}: InsightsListPresentationProps) => {
  return (
    <div className="px-4 md:px-8">
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
