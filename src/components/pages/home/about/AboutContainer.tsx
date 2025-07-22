import videoThumbnail from '@/../public/images/launch/hero.png'
import { AboutPresentation } from '.'

const AboutContainer = () => {
  return (
    <AboutPresentation
      title="Designed for your creativity"
      copy=" This is a dynamic space where minds meet, ideas collide, and
      innovation thrives, empowering you to turn your boldest visions into
      reality through the power of collective creativity and shared
      passion."
      videoUrl="/images/launch/hero.webm"
      videoThumbnailUrl={videoThumbnail.src}
    />
  )
}

export default AboutContainer
