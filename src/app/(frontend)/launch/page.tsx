import { Nav } from '@/components/layout'
import { AboutHeaderPresentation } from '@/components/pages/hubs'
import CountdownTimer from '@/components/ui/CountDown'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { mergeTwitterCard } from '@/utilities/mergeTwitterCard'
import type { Metadata } from 'next'
import Image from 'next/image'

type timeSlot = {
  time: string
  description: string
}

interface calendarImage {
  title: string
  date: string
  month: string
  // Center thumbnail
  imageUrl: string
  active?: boolean
  events: timeSlot[]
}

const launchCalendar: calendarImage[] = [
  {
    title: 'Echoes of Heritage',
    date: '28',
    month: 'July',
    imageUrl: '/images/launch/heritage.png',
    active: false,
    events: [
      { time: '10.00 –19.00', description: 'Exhibition: CHE Alumni Collections' },
      {
        time: '16.00 - 17.00',
        description: 'Fire Side Chat: Traditional Ethiopian Art Industry',
      },
      {
        time: '17.30 - 19.30',

        description:
          'Live Performance: Accordi & Disaccordi -Italian Jazz Band Live Perfomance: Rozel Dawit and Mashela Boys',
      },
    ],
  },
  {
    title: 'Style in Motion',
    date: '29',
    month: 'July',
    imageUrl: '/images/launch/fashion.png',
    active: false,
    events: [
      {
        time: '10.00 – 19.00',
        description: 'Exhibition: CHE Alumni Collections',
      },
      {
        time: '10.00 – 11.00',
        description: 'Empowering Women and Youth: Open Dialogue on Gender & Entrepreneurship',
      },
      {
        time: '11.30 – 12.30',
        description: 'Mafi Fashion Academy & Lab (MFAL) - Fashion Education in Ethiopia',
      },
      {
        time: '17.30 – 18.30',
        description:
          'Panel Discussion: "Ethiopia’s Fashion Future" and "Sustainable Fashion Techniques"',
      },
      {
        time: '18.30 – 19.30',
        description: 'Fashion Show',
      },
    ],
  },
  {
    title: 'Designing tomorrow',
    date: '30',
    month: 'July',
    imageUrl: '/images/launch/tomorrow.png',
    active: false,
    events: [
      {
        time: '10.00 – 19.00',
        description: 'Exhibition: CHE Alumni Collections',
      },
      {
        time: '15.00 – 17.00',
        description: 'Interior design networking event with Salome Dagnachew',
      },

      {
        time: '17.30 – 19.00',
        description:
          'Panel discussion on the photo exhibition “Italian Architecture in Jimma, featuring the photographer, the director of the Italian Cultural Institute, and an architect.”',
      },
    ],
  },
  {
    title: 'A Creative Era Begins',
    date: '31',
    month: 'July',
    imageUrl: '/images/launch/scissors-2.png',
    active: true,
    events: [
      {
        time: '13.00 - 20.00',
        description: 'Official Inauguration Ceremony (INVITE ONLY)',
      },
    ],
  },
  {
    title: 'Tech, Visual and Digital Arts',
    date: '1',
    month: 'August',
    imageUrl: '/images/launch/tech.png',
    active: false,
    events: [
      {
        time: '10.00 – 19.00',
        description: 'Exhibition: CHE Alumni Collections',
      },
      {
        time: '16.30 – 17.30',
        description: 'VR Games by Efuye Gela',
      },

      {
        time: '17.30 – 18.30',
        description: 'Panel session: Cinema Production in Focus',
      },
      {
        time: '18.30 – 19.30',
        description: 'Film Screening: Ethiopian Short Films',
      },
    ],
  },
  {
    title: 'Community Day & Closing',
    date: '2',
    month: 'August',
    imageUrl: '/images/launch/closing.png',
    active: false,
    events: [
      {
        time: '10.00 – 19.00',
        description: 'Exhibition: CHE Alumni Collections',
      },
      {
        time: '09.00 – 12.00',
        description: 'Paint on canvas and pottery by Mihret Dawit Art Studio',
      },

      {
        time: '10.00 – 11.00',
        description: 'Open Mic: Stories from Creative Hub Ethiopia Members',
      },
      {
        time: '12.30',
        description: 'Closing Ceremony & Remarks',
      },
    ],
  },
]

const About = () => {
  return (
    <>
      <Nav />

      <AboutHeaderPresentation
        imageUrl="/images/launch/hero.png"
        className=""
        rounded={false}
        darkenBg={false}
        videoUrl="/images/launch/hero.webm"
        copyClassName="mt-4 p-4 bg-white/80 text-black rounded-lg"
        title={'A New Era of Innovation, Creativity, and Entrepreneurship'}
        copy="We are excited to announce the official re-launch of Creative Hub Ethiopia with a new location, a dynamic space dedicated to empowering Ethiopia’s creative economy through innovation, design, and entrepreneurship."
      />
      {/* Grey card */}
      <div className="grid justify-center gap-4 w-full grid-cols-12 z-10 relative  text-gray-600">
        <div className=" bg-gray-200 col-span-10 col-start-2 rounded p-8 -mt-[5%] flex flex-wrap justify-between items-center gap-2">
          <div>
            <h1 className="text-xl mb-2 font-semibold flex justify-between items-center leading-tight">
              Inauguration Day!
              <span className="w-1/3  border-t-orange-500 border-solid border-t inline-flex"></span>
            </h1>
            <div>The highlight of this initiative is the official inauguration ceremony.</div>
          </div>
          <div>
            <CountdownTimer />
          </div>
        </div>
      </div>
      {/* Description */}
      <div className="grid justify-center gap-4 w-full my-32 grid-cols-12 z-10 relative  text-gray-600">
        <p className="col-span-8 col-start-2">
          This milestone event will bring together leaders from business, government, international
          development, the creative industries, and civil society. The half-day program will include
        </p>
        <div className="gap-4 col-span-10 col-start-2 my-8 grid sm:grid-cols-2 md:grid-cols-4">
          <div className="flex gap-2 items-center">
            <Image width={100} height={400} src="/images/launch/keynote.svg" alt="" />
            <p>Keynote remarks from national and international figures </p>
          </div>
          <div className="flex gap-2 items-center">
            <Image width={100} height={400} src="/images/launch/guided.svg" alt="" />
            <p>Guided tours of the renovated Arada Post Office</p>
          </div>
          <div className="flex gap-2 items-center">
            <Image width={100} height={400} src="/images/launch/showcase.svg" alt="" />
            <p> Innovation showcases across design, tech, and art</p>
          </div>
          <div className="flex gap-2 items-center">
            <Image width={100} height={400} src="/images/launch/networking.svg" alt="" />
            <p>High-level networking opportunities</p>
          </div>
        </div>
      </div>

      {/* Highlights one */}

      <div className="grid justify-center gap-4 w-full grid-cols-12 z-10 my-32 relative  text-gray-600 leading-tight ">
        <h1 className="text-xl font-medium text-gray-800 col-span-10 col-start-2">
          Schedule Highlights
        </h1>
        <p className="col-span-8 col-start-2">
          While the inauguration is by invitation only, the celebration extends throughout the week
          with a series of public events, open to all. These activities highlight the diverse fields
          that the Creative Hub aims to support and foster.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 col-span-12 mt-4 border-b-orange-500 border-solid border-b p-8">
          {launchCalendar.map((item) => (
            <div key={item.title} className="flex flex-col gap-4 items-center">
              <div className="flex flex-col gap-4 relative items-start max-w-[400px]">
                <Image
                  width={400}
                  height={500}
                  src={
                    item.active ? '/images/launch/gate-orange.png' : '/images/launch/gate-grey.png'
                  }
                  alt=""
                />
                <p className="absolute top-1/2 left-1/2 flex flex-col justify-center items-center -translate-x-1/2 -translate-y-1/3">
                  <span>{item.month}</span>
                  <span className="text-2xl font-semibold">{item.date}</span>
                  {item.imageUrl && <Image width={100} height={100} src={item.imageUrl} alt="" />}
                </p>
              </div>
              <div className="flex flex-col gap-2 max-w-[400px] self-center md:self-start">
                <p className="text-lg">{item.title}</p>
                <table>
                  <tbody>
                    {item.events.length > 0 ? (
                      item.events.map((event, idx) => (
                        <tr
                          key={idx}
                          className=" gap-4 justify-between border-b border-orange-500 border-opacity-50 "
                        >
                          <td>{event.time}</td>
                          <td className="text-right py-2">{event.description}</td>
                        </tr>
                      ))
                    ) : (
                      <div className="flex gap-4 justify-between">
                        <p className="text-gray-400 italic">No events scheduled</p>
                      </div>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Highlights two */}
      <div className="grid justify-center gap-4 w-full grid-cols-12 z-10 my-32 relative  text-gray-600 leading-tight ">
        <h1 className="text-xl font-medium text-gray-800 col-span-10 col-start-2">
          Schedule Highlights
        </h1>
        <p className="col-span-10 col-start-2">
          Creative Hub Ethiopia is more than a space, it s a platform for talent, transformation,
          and collaboration. By blending Ethiopia’s rich cultural heritage with cuttingedge
          innovation and entrepreneurship, the hub will serve as a catalyst for
        </p>
        <div className="gap-4 col-span-10 col-start-2 my-8 grid sm:grid-cols-2 md:grid-cols-4">
          <div className="flex gap-4 items-center">
            <Image width={50} height={100} src="/images/launch/job-creation.svg" alt="" />
            <p>Job creation and skills development </p>
          </div>
          <div className="flex gap-4 items-center">
            <Image width={50} height={60} src="/images/launch/startup.svg" alt="" />
            <p>Startup and small business support</p>
          </div>
          <div className="flex gap-4 items-center">
            <Image width={50} height={100} src="/images/launch/preservation.svg" alt="" />
            <p>Cultural preservation and digital storytelling</p>
          </div>
          <div className="flex gap-4 items-center">
            <Image width={50} height={100} src="/images/launch/tools.svg" alt="" />
            <p>Inclusive access to design and technology tools</p>
          </div>
        </div>
      </div>

      {/* RSVP */}
      <div className="grid justify-center gap-4 w-full grid-cols-12 z-10 my-32 relative leading-tight ">
        <div className="font-medium text-gray-800 col-span-10 col-start-2 md:col-span-6 md:col-start-6">
          <h1 className="text-2xl font-light md:text-right mb-4">
            Whether you&apos;re an artist, designer, tech enthusiast, or creative entrepreneur,
            Creative Hub Ethiopia welcomes you to be part of this exciting journey.
          </h1>
        </div>
        <div className="col-span-10 col-start-2 bg-gradient-to-r from-orange-800 to-black rounded-lg p-8 flex justify-end">
          <Image
            width={600}
            height={600}
            src="/images/launch/gate-perspective.png"
            alt=""
            className="absolute -top-12 left-0 hidden md:block"
          />
          <div className="md:w-1/2 flex justify-end flex-col gap-4 text-white leading-tight my-4">
            <h1 className="text-3xl font-medium text-right flex items-center justify-between  gap-4 w-full">
              <span>Join Us</span>
              <span className="w-1/3  border-t-white border-solid border-t inline-flex"></span>
            </h1>
            <p>
              We invite you to explore the weeklong program and be part of Ethiopia’s creative
              future.
            </p>
            <a
              href="https://forms.gle/iiwQv4Md7yU1HtKm8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors inline-block text-center"
            >
              RSVP here
            </a>
          </div>
        </div>
        <p className="col-span-10 col-start-2 text-right mt-3 text-gray-600">
          Follow us on social media for updates,and event highlights throughout the week.
        </p>
      </div>

      {/* <Footer /> */}
    </>
  )
}

export default About

export const metadata: Metadata = {
  title: 'Re-Opening',
  openGraph: mergeOpenGraph({
    title: 'Re-Opening | Creative Hub Ethiopia',
  }),
  twitter: mergeTwitterCard({
    title: 'Re-Opening  | Creative Hub Ethiopia',
  }),
}
