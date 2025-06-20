import { AboutMapPresentation } from '.'

export type Branch = { id: string; position: [number, number]; description: string }

const AboutMapContainer = () => {
  const branches: Branch[] = [
    // {
    //   id: '1',
    //   position: [9.03333, 38.7],
    //   description: 'Creative Hub Mexico',
    // },
    {
      id: '1',
      position: [9.032859419869673, 38.74998989472767],
      description: 'Creative Hub Addis Ababa',
    },
  ]

  return <AboutMapPresentation branches={branches} />
}

export default AboutMapContainer
