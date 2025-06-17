import { PartnersGalleryPresentation } from './'

import gallery3Img from '@/../public/images/gallery3.jpg'
import gallery4Img from '@/../public/images/gallery4.jpg'
import gallery5Img from '@/../public/images/gallery5.jpg'
import gallery6Img from '@/../public/images/gallery6.jpg'
import gallery8Img from '@/../public/images/gallery8.jpg'
import gallery9Img from '@/../public/images/gallery9.jpg'
import gallery10Img from '@/../public/images/gallery10.jpg'
import gallery11Img from '@/../public/images/gallery11.jpg'

// TODO: alt text
const PartnersGalleryContainer = () => {
  const images = [
    {
      id: 'img8',
      url: gallery8Img.src,
      alt: 'A serene beach view with waves crashing on the shore',
    },

    {
      id: 'img3',
      url: gallery3Img.src,
      alt: 'A serene beach view with waves crashing on the shore',
    },
    {
      id: 'img9',
      url: gallery9Img.src,
      alt: 'A serene beach view with waves crashing on the shore',
    },

    {
      id: 'img4',
      url: gallery4Img.src,
      alt: 'A serene beach view with waves crashing on the shore',
    },
    {
      id: 'img5',
      url: gallery5Img.src,
      alt: 'A serene beach view with waves crashing on the shore',
    },
    {
      id: 'img6',
      url: gallery6Img.src,
      alt: 'A serene beach view with waves crashing on the shore',
    },
    {
      id: 'img10',
      url: gallery10Img.src,
      alt: 'A serene beach view with waves crashing on the shore',
    },
    {
      id: 'img11',
      url: gallery11Img.src,
      alt: 'A serene beach view with waves crashing on the shore',
    },
  ]

  return <PartnersGalleryPresentation images={images} />
}

export default PartnersGalleryContainer
