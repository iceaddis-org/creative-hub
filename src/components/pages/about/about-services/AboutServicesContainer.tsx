import { AboutServicesPresentation } from '.'

const sampleServices = [
  {
    id: '1',
    title: 'Collaborate and Create',
    description: [
      'Start your day by immersing yourself in a vibrant co-working space designed to foster creativity and collaboration. Join forces with like-minded individuals and turn ideas into reality.',
      'Our open and modular workspace is tailored for freelancers, startups, and creative professionals from diverse industries—whether you’re a fashion designer, app developer, visual artist, or craft maker. With high-speed internet, collaborative zones, and meeting rooms, the environment encourages teamwork, idea exchange, and interdisciplinary innovation.',
    ],
    imageUrl: '/images/about/1.png',
  },
  {
    id: '2',
    title: 'Fuel Your Day',
    description: [
      "Take a break and recharge with a cup of expertly brewed coffee. Whether you're brainstorming or just need a moment of tranquility, our cozy coffee shop is the perfect spot.",

      'More than just caffeine—our café is a social anchor. It serves as a casual networking hub where creative minds can meet, pitch ideas, and forge partnerships in a relaxed setting. Locally sourced snacks and ethically produced beans add a touch of sustainability to your daily routine.',
    ],
    imageUrl: '/images/about/2.png',
  },
  {
    id: '3',
    title: 'Build Your Vision',
    description: [
      'Bring your concepts to life in our state-of-the-art Fab-Lab. With access to cutting-edge tools and technology, you can prototype, create, and innovate without limits.',

      "From 3D printers and laser cutters to woodworking tools and textile machinery, the Fab-Lab empowers users to turn sketches into functional models or final products. Whether you're developing a fashion line, designing furniture, or creating hardware prototypes, our expert technicians and safety protocols ensure you have the guidance and environment to succeed.",
    ],
    imageUrl: '/images/about/3.png',
  },
  {
    id: '4',
    title: 'Inspire Your Senses',
    description: [
      'Wander through our gallery and let the art spark your imagination. Discover local talent and find inspiration in every brushstroke and sculpture.',

      'The gallery showcases rotating exhibitions of emerging and established Ethiopian artists, designers, and photographers. It’s not only a source of inspiration but also a platform for creative expression, cultural dialogue, and community engagement. Events like artist talks, open studios, and pop-up showcases bring the space to life.',
    ],
    imageUrl: '/images/about/4.png',
  },
  {
    id: '5',
    title: 'Explore Knowledge',
    description: [
      'Dive into a world of information at our digital library. Whether you’re researching or seeking inspiration, an extensive collection of resources is at your fingertips.',

      'With curated e-books, journals, industry reports, design catalogs, and market trend databases, our digital library supports both academic research and practical project development. Access is available onsite and remotely, and regular info sessions or research consultations help you make the most of our growing collection.',
    ],
    imageUrl: '/images/about/5.png',
  },
  {
    id: '6',
    title: 'Showcase Your Work',
    description: [
      'End your day by exploring dynamic exhibitions or presenting your own. The exhibition hall is where ideas meet the world, providing a platform to share and celebrate achievements.',

      'Whether launching a product, hosting a fashion show, or curating a multimedia installation, our exhibition space is designed for impact. It is fully equipped with lighting, audio-visual systems, and display panels to professionally showcase your work to investors, peers, and the public. Regular showcase events and demo days amplify visibility and open doors to new opportunities.',
    ],
    imageUrl: '/images/about/6.png',
  },
]

const AboutServicesContainer = () => {
  return <AboutServicesPresentation services={sampleServices} />
}

export default AboutServicesContainer
