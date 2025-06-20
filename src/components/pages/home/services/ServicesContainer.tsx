import amenitiesImg from '@/../public/images/home/service-1.png'
import flexibleWorkspaceImg from '@/../public/images/home/service-2.jpeg'
import communityImg from '@/../public/images/home/service-3.png'
import { ServicesPresentation } from './'

const ServicesContainer = () => {
  const sampleServices = [
    {
      id: '1',
      title: 'Flexible Workspace',
      copy: "Find your perfect spot in our open-plan areas, dedicated desks, or private offices. Whether you're a solo creator or a growing team, we adapt to how you work best.",
      imageUrl: flexibleWorkspaceImg.src,
    },
    {
      id: '2',
      title: 'Community Events',
      copy: 'Connect with like-minded professionals through our weekly workshops, networking sessions, and social gatherings. Build relationships that go beyond just sharing a space.',
      imageUrl: communityImg.src,
    },
    {
      id: '3',
      title: 'Premium Amenities',
      copy: 'Enjoy barista-quality coffee, high-speed internet, fully equipped meeting rooms, and 24/7 access. We take care of the details so you can focus on what matters.',
      imageUrl: amenitiesImg.src,
    },
  ]

  return <ServicesPresentation services={sampleServices} />
}

export default ServicesContainer
