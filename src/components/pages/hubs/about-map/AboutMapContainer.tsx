import { AboutMapPresentation } from '.'

export type Branch = { id: string; position: [number, number]; description: string }

const AboutMapContainer = ({ Jimma = false }: { Jimma?: boolean }) => {
  return <AboutMapPresentation Jimma={Jimma} />
}

export default AboutMapContainer
