import amenitiesImg from '@/../public/images/home/service-1.png'
import flexibleWorkspaceImg from '@/../public/images/home/service-2.jpeg'
import communityImg from '@/../public/images/home/service-3.png'
import { ServicesPresentation } from './'

const SpaceContainter = () => {
  const sampleServices = [
    {
      id: '1',
      title: 'Space',
      copy: 'Consectetur, possimus quas obcaecati accusantium excepturi provident quisquam eaque et numquam saepe autem similique libero vitae doloribus consequatur blanditiis consequuntur inventore perspiciatis totam eos dolores.',
      imageUrl: flexibleWorkspaceImg.src,
    },
    {
      id: '2',
      title: 'Facilities',
      copy: 'Quos odio, tempora voluptatem consectetur alias magni fugit sit rerum itaque corrupti saepe facere aut reprehenderit architecto repellat porro quasi esse necessitatibus nobis sint dolorum dolorem consequatur.',
      imageUrl: communityImg.src,
    },
    {
      id: '3',
      title: 'Membership',
      copy: 'Optio exercitationem fugit blanditiis vero dolor inventore ipsa placeat, aut maiores laborum, labore modi veritatis esse sequi, ratione provident dolore ea autem alias! Molestiae beatae voluptatum temporibus voluptatibus! Est libero, amet fuga eaque adipisci neque. ',
      imageUrl: amenitiesImg.src,
    },
  ]

  return (
    <ServicesPresentation
      services={sampleServices}
      subtitle="Creative Hub"
      title="Let your creativity flow"
    />
  )
}

export default SpaceContainter
