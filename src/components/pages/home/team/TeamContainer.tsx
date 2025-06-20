import { TeamPresentation } from '.'

import team01 from '@/../public/images/home/team/Robel_Samson.jpeg'

const TeamContainer = () => {
  const sampleTeam = [
    {
      id: '01',
      name: 'Robel Samson Zewdie',
      position: 'Creative Hub Ethiopia Director',
      avatarUrl: team01.src,
    },
    {
      id: '02',
      name: 'Abenezer Seife',
      position: 'Hub Manager, Addis Ababa',
      avatarUrl:
        'https://images.unsplash.com/photo-1730061598797-4f5f9909de87?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI0NHx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8',
    },
    {
      id: '03',
      name: 'Tigist Mezmur',
      position: 'Hub Manager, Jimma',
      avatarUrl:
        'https://images.unsplash.com/photo-1731505183738-4987ea65caa5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1OXx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8',
    },
    {
      id: '04',
      name: 'Amanuel S. Getahun',
      position: 'Comms Lead',
      avatarUrl:
        'https://images.unsplash.com/photo-1731505183738-4987ea65caa5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1OXx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8',
    },
    {
      id: '05',
      name: 'Helina Tesfaye',
      position: 'Host & Events',
      avatarUrl:
        'https://images.unsplash.com/photo-1601317106123-d6c7b7f8e1a7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzNXx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8',
    },

    {
      id: '06',
      name: 'Yafet Girum',
      position: 'FabLab Expert',
      avatarUrl:
        'https://images.unsplash.com/photo-1731505183738-4987ea65caa5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1OXx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8',
    },
  ]

  return <TeamPresentation team={sampleTeam} />
}

export default TeamContainer
