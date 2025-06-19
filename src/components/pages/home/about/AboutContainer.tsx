import { AboutPresentation } from '.'
import videoThumbnail from '@/../public/images/video-thumbnail.png'

const AboutContainer = () => {
  return (
    <AboutPresentation
      title="Designed for your creativity"
      copy=" This is a dynamic space where minds meet, ideas collide, and
      innovation thrives, empowering you to turn your boldest visions into
      reality through the power of collective creativity and shared
      passion."
      videoUrl="https://creativehub.et/wp-content/uploads/2021/12/CH-intro.m4v?_=1"
      videoThumbnailUrl={videoThumbnail.src}
    />
  )
}

export default AboutContainer
