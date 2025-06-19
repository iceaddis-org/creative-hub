import event1Img from '@/../public/images/home/event-1.png'
import event2Img from '@/../public/images/home/event-2.png'
import event3Img from '@/../public/images/home/event-3.png'
import { EventsPresentation } from './'

const EventsContainer = () => {
  const sampleEvents = [
    {
      id: '1',
      title: 'Agriculture business in Ethiopia',
      copy: 'Through thought-provoking discussions and real-world case studies, we will dive into how startups, cooperatives, and innovators are reshaping the agriculture sector in Ethiopia.',
      imageUrl: event1Img.src,
      dateTime: '2025-02-15T10:00:00',
    },
    {
      id: '2',
      title: 'Masterclass: Italian Design Day',
      copy: 'A free session with Italian Design Ambassador Giulio Vinaccia on how quality-driven design can positively impact people and the environment.',
      imageUrl: event2Img.src,
      dateTime: '2025-03-10T18:30:00',
    },
    {
      id: '3',
      title: 'Fashion Friday',
      copy: 'A hybrid event connecting fashion leaders from Ethiopia and the UK to explore sustainable fashion, e-commerce, and building resilient creative businesses.',
      imageUrl: event3Img.src,
      dateTime: '2025-04-05T14:00:00',
    },
  ]

  return <EventsPresentation services={sampleEvents} />
}

export default EventsContainer
