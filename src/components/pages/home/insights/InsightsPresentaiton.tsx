import { InsightCard, SectionTitle } from '@/components/ui'

type Blog = {
  id: string
  title: string
  description: string
  dateTime: string
  imageUrl: string
  categories: string[]
}

interface BlogPresentationProps {
  blogs: Blog[]
  showCategories: boolean
}

const InsightsPresentation = ({ blogs, showCategories }: BlogPresentationProps) => {
  return (
    <section className="py-8 md:py-16">
      <SectionTitle sectionName="Insights" sectionTitle="Stay Informed, Stay Inspired" />
      <div className="mt-10 grid grid-cols-12 gap-x-4 gap-y-6 px-4 md:px-8">
        {blogs.map((blog) => (
          <InsightCard blog={blog} key={blog.id} />
        ))}
      </div>
    </section>
  )
}

export default InsightsPresentation
