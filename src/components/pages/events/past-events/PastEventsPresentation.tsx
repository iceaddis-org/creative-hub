import { InsightCard, SectionTitle } from '@/components/ui'
import { Events } from '../../home/events/EventsPresentation'

interface PastEventsPresentationProps {
  events: Events[]
}

const PastEventsPresentation = ({ events }: PastEventsPresentationProps) => {
  return (
    <section className="py-12">
      <SectionTitle sectionName="Past Events" sectionTitle="Our Past Events" />
      <div className="mt-10 grid grid-cols-12 gap-4 md:px-8 px-4">
        {events.map((event) => (
          <InsightCard blog={event} key={event.id} grayscale clickable={false} />
        ))}
      </div>
    </section>
  )
}

export default PastEventsPresentation
