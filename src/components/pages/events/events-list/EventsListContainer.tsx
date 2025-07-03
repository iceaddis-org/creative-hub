import { sampleEvents } from '../../home/events/EventsContainer'
import EventsListPresentation from './EventsListPresentation'

const EventsListContainer = () => {
  return <EventsListPresentation events={sampleEvents} />
}

export default EventsListContainer
