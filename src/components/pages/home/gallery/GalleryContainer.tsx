import { GalleryPresentation } from './'
import gallery1Img from '@/../public/images/gallery1.jpg'
import gallery2Img from '@/../public/images/gallery2.jpg'
import gallery3Img from '@/../public/images/gallery3.jpg'
import gallery4Img from '@/../public/images/gallery4.jpg'
import gallery5Img from '@/../public/images/gallery5.jpg'
import gallery6Img from '@/../public/images/gallery6.jpg'
import gallery7Img from '@/../public/images/gallery7.jpg'
import gallery8Img from '@/../public/images/gallery8.jpg'
import gallery9Img from '@/../public/images/gallery9.jpg'
import gallery10Img from '@/../public/images/gallery10.jpg'
import gallery11Img from '@/../public/images/gallery11.jpg'
import gallery12Img from '@/../public/images/gallery12.jpg'
import gallery13Img from '@/../public/images/gallery13.jpg'
import gallery14Img from '@/../public/images/gallery14.jpg'
import gallery15Img from '@/../public/images/gallery15.jpg'

// TODO: alt text
const GalleryContainer = () => {
  const images = [
    [
      {
        id: 'img1',
        url: gallery1Img.src,
        alt: 'A beautiful landscape with mountains in the background',
      },
      {
        id: 'img2',
        url: gallery2Img.src,
        alt: 'A close-up of a colorful flower in a garden',
      },
      {
        id: 'img3',
        url: gallery3Img.src,
        alt: 'A serene beach view with waves crashing on the shore',
      },
      {
        id: 'img12',
        url: gallery12Img.src,
        alt: 'A serene beach view with waves crashing on the shore',
      },
      {
        id: 'img13',
        url: gallery13Img.src,
        alt: 'A serene beach view with waves crashing on the shore',
      },
    ],
    [
      {
        id: 'img4',
        url: gallery4Img.src,
        alt: 'A sunset view over a calm lake',
      },
      {
        id: 'img5',
        url: gallery5Img.src,
        alt: 'A bustling city street at night with bright lights',
      },
      {
        id: 'img6',
        url: gallery6Img.src,
        alt: 'A tranquil forest with tall trees and a walking path',
      },
      {
        id: 'img11',
        url: gallery11Img.src,
        alt: 'A tranquil forest with tall trees and a walking path',
      },
      {
        id: 'img14',
        url: gallery14Img.src,
        alt: 'A tranquil forest with tall trees and a walking path',
      },
    ],
    [
      {
        id: 'img7',
        url: gallery7Img.src,
        alt: 'A snowy mountain peak under a clear blue sky',
      },
      {
        id: 'img8',
        url: gallery8Img.src,
        alt: 'A vibrant cityscape during sunrise',
      },
      {
        id: 'img9',
        url: gallery9Img.src,
        alt: 'A quiet village road with charming houses on both sides',
      },
      {
        id: 'img10',
        url: gallery10Img.src,
        alt: 'A quiet village road with charming houses on both sides',
      },
      {
        id: 'img15',
        url: gallery15Img.src,
        alt: 'A quiet village road with charming houses on both sides',
      },
    ],
  ]

  return <GalleryPresentation images={images} />
}

export default GalleryContainer
