import event1Img from '@/../public/images/home/event-1.webp'
import event2Img from '@/../public/images/home/event-2.png'
import event3Img from '@/../public/images/home/event-3.png'
import { EventsPresentation } from './'

const EventsContainer = () => {
  const sampleEvents = [
    {
      id: '1',
      title: 'Opening of Arada Space',
      copy: 'Through thought-provoking discussions and real-world case studies, we will dive into how startups, cooperatives, and innovators are reshaping the agriculture sector in Ethiopia.',
      imageUrl: event1Img.src,
      shortDate: true,
      dateTime: '2025-07-01',
    },
    {
      id: '2',
      title: 'Masterclass: Italian Design Day',
      copy: 'A free session with Italian Design Ambassador Giulio Vinaccia on how quality-driven design can positively impact people and the environment.',
      imageUrl: event2Img.src,
      dateTime: '2025-07-10T18:30:00',
      shortDate: false,
    },
    {
      id: '3',
      title: 'Fashion Friday',
      copy: 'A hybrid event connecting fashion leaders from Ethiopia and the UK to explore sustainable fashion, e-commerce, and building resilient creative businesses.',
      imageUrl: event3Img.src,
      dateTime: '2025-07-15T14:00:00',
      shortDate: false,
    },
  ]

  return <EventsPresentation services={sampleEvents} />
}

export default EventsContainer
