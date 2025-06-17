import EventsListPresentation from './EventsListPresentation'

const sampleEvents = [
  {
    id: '1',
    imageUrl: '/images/event/event-1.png',
    title: 'Creative Spaces: Redefining Work Environments',
    description:
      'Explore how innovative coworking spaces are transforming traditional work environments.',
    dateTime: '2025-02-15T10:00:00',
  },
  {
    id: '2',
    imageUrl: '/images/event/event-2.png',
    title: 'Spotlight on Local Artists',
    description:
      'A feature on the emerging artists in our community and how they are shaping the local art scene.',
    dateTime: '2025-02-16T12:00:00',
  },
  {
    id: '3',
    imageUrl: '/images/event/event-3.png',
    title: 'Networking Events at Creative Hub',
    description:
      'Highlights from our recent networking events and tips for making the most out of them.',
    dateTime: '2025-02-17T09:30:00',
  },
  {
    id: '4',
    imageUrl: '/images/event/event-4.png',
    title: 'Design Trends for Modern Workspaces',
    description:
      'Discover the latest trends in workspace design that enhance creativity and productivity.',
    dateTime: '2025-02-18T15:00:00',
  },
  {
    id: '5',
    imageUrl: '/images/event/event-5.png',
    title: 'Community Collaboration Projects',
    description: 'An overview of our latest community projects and how you can get involved.',
    dateTime: '2025-02-19T11:00:00',
  },
  {
    id: '6',
    imageUrl: '/images/event/event-6.png',
    title: 'Boosting Creativity Through Collaboration',
    description:
      'Learn how collaborative efforts at Creative Hub are driving innovation and inspiring new ideas.',
    dateTime: '2025-02-20T10:00:00',
  },
]

const EventsListContainer = () => {
  return <EventsListPresentation events={sampleEvents} />
}

export default EventsListContainer
