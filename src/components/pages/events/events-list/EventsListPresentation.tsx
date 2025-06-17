import { InsightCard, SectionTitle } from '@/components/ui'
import Image from 'next/image'

type Events = {
  id: string
  imageUrl: string
  description: string
  title: string
  dateTime: string
}

interface EventsListPresentationProps {
  events: Events[]
}

const EventsListPresentation = ({ events }: EventsListPresentationProps) => {
  // Return early if no events
  if (events.length === 0) {
    return (
      <div className="px-4 py-12 text-center md:px-8">
        <p>No upcoming events</p>
      </div>
    )
  }

  const featuredEvent = events[0] ?? {
    id: 'default',
    imageUrl: '/default-event.jpg',
    title: 'No featured event',
    description: 'Check back later for upcoming events',
    dateTime: new Date().toISOString(),
  }

  return (
    <>
      <div className="px-4 pb-12 pt-0 md:px-8">
        <header className="relative col-span-12 mt-6 aspect-[51/100] overflow-hidden rounded-2xl md:aspect-[4/3] lg:aspect-[7/3]">
          <Image
            src={featuredEvent.imageUrl}
            alt={featuredEvent.title || 'Event image'}
            className="z-0 h-full w-full object-cover"
            priority
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 z-10 flex flex-col justify-end bg-gradient-to-bl from-black/40 to-black/80 p-6 md:p-8">
            <div className="w-full space-y-3 md:w-10/12 lg:w-1/2">
              <div className="w-fit rounded-md bg-background p-2 text-sm leading-none">
                {new Intl.DateTimeFormat('en-US', {
                  dateStyle: 'medium',
                  timeStyle: 'short',
                }).format(new Date(featuredEvent.dateTime))}
              </div>
              <div className="font-display text-xl font-medium leading-none tracking-tight text-background md:text-3xl">
                {featuredEvent.title}
              </div>
              <div className="line-clamp-2 text-background opacity-60">
                {featuredEvent.description}
              </div>
            </div>
          </div>
        </header>
      </div>

      {events.length > 1 && (
        <section className="py-12">
          <SectionTitle
            sectionTitle="Events You Don't Want to Miss"
            sectionName="Upcoming Events"
          />
          <div className="mt-10 grid grid-cols-12 gap-4 gap-y-6 px-4 md:px-8">
            {events.slice(1).map((event) => (
              <InsightCard blog={event} key={event.id} clickable={false} />
            ))}
          </div>
        </section>
      )}
    </>
  )
}

export default EventsListPresentation
