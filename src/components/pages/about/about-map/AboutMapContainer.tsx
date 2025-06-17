import { AboutMapPresentation } from '.'

type Branch = { id: string; position: [number, number]; description: string }

const AboutMapContainer = () => {
  const branches: Branch[] = [
    {
      id: '1',
      position: [9.03333, 38.7],
      description: 'Creative Hub Mexico',
    },
  ]
  return <AboutMapPresentation branches={branches} />
}

export default AboutMapContainer
