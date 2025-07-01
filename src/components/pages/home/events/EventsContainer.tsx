import event3Img from '@/../public/images/home/event-3.png'
import { EventsPresentation } from './'

const EventsContainer = () => {
  const sampleEvents = [
    {
      id: '1',
      title: 'Opening of Arada Space',
      copy: 'Mark your calendars! Creative Hub Ethiopia is eagerly preparing for the exciting launch of its brand-new Arada space. Situated in the very heart of Addis Ababa, this dynamic hub will officially open its doors by the end of July 2025, ready to welcome and empower the creative community.',
      imageUrl: '/api/media/file/Arada Space-900x600.webp',
      shortDate: true,
      dateTime: '2025-07-01',
    },
    {
      id: '2',
      title: 'Creative Hub Ethiopia monthly popup series with Women entrepreneurs',
      copy: 'Creative Hub Ethiopia monthly popup series with Women entrepreneurs. August 2025 edition',
      imageUrl: '/api/media/file/Monthly Popup-900x600.webp',
      dateTime: '2025-08-10T18:30:00',
      shortDate: true,
    },
    {
      id: '3',
      title: 'Creative DNA : Ethiopia 3.0',
      copy: 'The Creative DNA Ethiopia program will offer business incubation support to 10 Ethiopian based early-stage fashion enterprises. Attend the info session.',
      imageUrl: event3Img.src,
      dateTime: '2025-08-15T14:00:00',
      shortDate: true,
    },
  ]

  return <EventsPresentation services={sampleEvents} />
}

export default EventsContainer
