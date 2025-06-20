import { AboutHeaderPresentation } from '.'

const AboutHeaderContainer = ({ Jimma = false }: { Jimma?: boolean }) => {
  const title = Jimma
    ? 'About and services of Creative Hub in Jimma'
    : 'Home to Creatives in the Heart of Addis Ababa'

  return (
    <AboutHeaderPresentation
      imageUrl="/images/about/about-8.png"
      title={title}
      copy="An effort towards growing and utilizing young talent"
    />
  )
}

export default AboutHeaderContainer
