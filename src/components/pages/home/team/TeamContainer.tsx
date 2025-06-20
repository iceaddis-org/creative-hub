import { TeamPresentation } from '.'

import team02 from '@/../public/images/home/team/abenezer.jpeg'
import team01 from '@/../public/images/home/team/Robel_Samson.jpeg'
import team03 from '@/../public/images/home/team/tigist.jpeg'

import team04 from '@/../public/images/home/team/amanuel.jpeg'
import team05 from '@/../public/images/home/team/helina.jpeg'
import team06 from '@/../public/images/home/team/Yafet-Girum-Tesfaye.jpg'

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
      avatarUrl: team02.src,
    },
    {
      id: '03',
      name: 'Tigist Mezmur',
      position: 'Hub Manager, Jimma',
      avatarUrl: team03.src,
    },
    {
      id: '04',
      name: 'Amanuel S. Getahun',
      position: 'Comms Lead',
      avatarUrl: team04.src,
    },
    {
      id: '05',
      name: 'Helina Tesfaye',
      position: 'Host & Events',
      avatarUrl: team05.src,
    },

    {
      id: '06',
      name: 'Yafet Girum',
      position: 'FabLab Expert',
      avatarUrl: team06.src,
    },
  ]

  return <TeamPresentation team={sampleTeam} />
}

export default TeamContainer
