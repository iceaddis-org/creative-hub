import { Nav } from '@/components/layout'
import {
  EventsListContainer,
  EventCalendarContainer,
  PastEventsContainer,
} from '@/components/pages/events'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { mergeTwitterCard } from '@/utilities/mergeTwitterCard'
import type { Metadata } from 'next'

const Events = () => {
  return (
    <>
      <Nav />
      <EventsListContainer />
      <EventCalendarContainer />
      <PastEventsContainer />
    </>
  )
}

export default Events

export const metadata: Metadata = {
  title: 'Events',
  openGraph: mergeOpenGraph({
    title: 'Events | Creative Hub Ethiopia',
  }),
  twitter: mergeTwitterCard({
    title: 'Events | Creative Hub Ethiopia',
  }),
}
