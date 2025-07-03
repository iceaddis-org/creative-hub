import { InsightCard, SectionTitle } from '@/components/ui'
import { Events } from '../../home/events/EventsPresentation'

interface BlogPresentationProps {
  blogs: Events[]
  showCategories: boolean
}

const InsightsPresentation = ({ blogs }: BlogPresentationProps) => {
  return blogs.length > 0 ? (
    <section className="py-8 md:py-16">
      <SectionTitle sectionName="Media" sectionTitle="Stay Informed, Stay Inspired" />
      <div className="mt-10 grid grid-cols-12 gap-x-4 gap-y-6 px-4 md:px-8">
        {blogs.map((blog) => (
          <InsightCard blog={blog} key={blog.id} />
        ))}
      </div>
    </section>
  ) : null
}

export default InsightsPresentation
