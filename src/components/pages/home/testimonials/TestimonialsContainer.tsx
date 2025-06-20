import { TestimonialsPresentation } from './'

import testimonial3 from '@/../public/images/home/Markos-Lemma.jpg'

import testimonial2 from '@/../public/images/home/Anna-Getaneh.jpeg'
import testimonial1 from '@/../public/images/home/Giulio Vinaccia.jpg'

const TestimonialsContainer = () => {
  const sampleTestimonials = [
    {
      id: '1',
      testimonial: 'Creative Hub Ethiopia is a key enabler of Ethiopian Creative Industry.',
      profileName: 'Giulio Vinaccia​',
      profileAvatarUrl: testimonial1.src,
      profilePosition: 'Senior Consultant, Creative Hub',
    },
    {
      id: '2',
      testimonial:
        'Creative Hub Ethiopia is a great addition to the growing creative landscape of the country, providing the much needed platform and resources that will attract a broad range of creatives.',
      profileName: 'Anna Getaneh',
      profileAvatarUrl: testimonial2.src,
      profilePosition: 'Designer and Social Entrepreneur, African Mosaique',
    },
    {
      id: '3',
      testimonial:
        'Creative Hub Ethiopia is a pioneer space in focusing on the creative economy. Here, the new ventures will bloom.',
      profileName: 'Markos Lemma',
      profileAvatarUrl: testimonial3.src,
      profilePosition: 'CEO and Founder, iceaddis',
    },
  ]

  return <TestimonialsPresentation testimonials={sampleTestimonials} />
}

export default TestimonialsContainer
