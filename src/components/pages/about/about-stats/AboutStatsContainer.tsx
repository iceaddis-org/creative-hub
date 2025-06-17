import { AboutStatsPresentation } from '.'

const AboutStatsContainer = () => {
  const stats = [
    {
      title: 'Members',
      count: 300,
    },
    {
      title: 'Trainings & Masterclasses',
      count: 30,
    },
    {
      title: 'International Guests',
      count: 20,
    },
    {
      title: 'Industry Collaborators',
      count: 48,
    },
    {
      title: 'Featured on',
      count: 30,
    },
  ]

  return <AboutStatsPresentation stats={stats} />
}

export default AboutStatsContainer
