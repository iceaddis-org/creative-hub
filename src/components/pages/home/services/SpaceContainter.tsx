import spaceImage from '@/../public/images/home/event-1.webp'

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
      copy: 'Ethiopian creative businesses can thrive at this hub, which features state-of-the-art facilities like a fab lab, design labs, and a coworking space.',
      imageUrl: `/api/media/file/FABLAB-900x598.webp`,
    },
    {
      id: '3',
      title: 'Membership',
      copy: "Ready to thrive? At Creative Hub Ethiopia, you'll enjoy full access to all our services, including seamless space booking and event scheduling. You'll also connect with a dynamic network of seasoned business and creative industry experts and get a jumpstart on upcoming trainings and exclusive opportunities.",
      imageUrl: '/api/media/file/black_white_membership-900x900.webp',
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
