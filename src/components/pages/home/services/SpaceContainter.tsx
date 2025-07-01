import spaceImage from '@/../public/images/home/event-1.webp'
import amenitiesImg from '@/../public/images/home/service-1.png'

import { getClientSideURL } from '@/utilities/getURL'
import { ServicesPresentation } from './'

const SpaceContainter = () => {
  getClientSideURL()
  const sampleServices = [
    {
      id: '1',
      title: "Built in 1920's : Reimagined",
      copy: "The Ethiopian creative industry has a new home, fostering the growth of the nation's orange economy",
      // Goes to "Hubs -> Addis Ababa"
      imageUrl: spaceImage.src,
    },
    {
      id: '2',
      title: 'Facilities',
      copy: 'Quos odio, tempora voluptatem consectetur alias magni fugit sit rerum itaque corrupti saepe facere aut reprehenderit architecto repellat porro quasi esse necessitatibus nobis sint dolorum dolorem consequatur.',
      imageUrl: `${getClientSideURL()}/api/media/file/FABLAB-1200x630.webp}`,
    },
    {
      // http://localhost:3000/c
      id: '3',
      title: 'Membership',
      copy: 'Optio exercitationem fugit blanditiis vero dolor inventore ipsa placeat, aut maiores laborum, labore modi veritatis esse sequi, ratione provident dolore ea autem alias! Molestiae beatae voluptatum temporibus voluptatibus! Est libero, amet fuga eaque adipisci neque. ',
      imageUrl: amenitiesImg.src,
    },
  ]

  return (
    <ServicesPresentation
      services={sampleServices}
      subtitle="Creative Hub Ethiopia"
      title="Let your creativity flow"
    />
  )
}

export default SpaceContainter
