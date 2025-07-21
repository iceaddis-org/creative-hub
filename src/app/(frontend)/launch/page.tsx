import { Nav } from '@/components/layout'
import { AboutHeaderPresentation } from '@/components/pages/hubs'
import CountdownTimer from '@/components/ui/CountDown'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { mergeTwitterCard } from '@/utilities/mergeTwitterCard'
import type { Metadata } from 'next'
import Image from 'next/image'

const About = () => {
  return (
    <>
      <Nav />
      <AboutHeaderPresentation
        imageUrl="/images/launch/hero.png"
        className=""
        rounded={false}
        darkenBg={false}
        copyClassName="mt-4 p-4 bg-white/80 text-black rounded-lg"
        title={'A New Era of Innovation, Heritage, and Entrepreneurship'}
        copy="We are excited to announce the official launch of Creative Hub Ethiopia, a dynamic space dedicated to empowering Ethiopia’s creative economy through innovation, design, and entrepreneurship."
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
          This milestone event will bring together leaders from government, international
          development, the creative industries, and civil society. The half-day program will include
        </p>
        <div className="flex gap-8 col-span-10 col-start-2 my-8">
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
        <div className="flex gap-4 col-span-12 col-start-2 mt-4 border-b-orange-500 border-solid border-b pb-8">
          <div className="flex flex-col gap-4 relative">
            <Image width={300} height={400} src="/images/launch/gate-grey.png" alt="" />
            <p className="absolute top-1/2 left-1/2 flex flex-col justify-center items-center -translate-x-1/2 -translate-y-1/3">
              <span>July</span>
              <span className="text-2xl font-semibold">28</span>
              <Image width={100} height={100} src="/images/launch/heritage.png" alt="" />
            </p>
            <p className="text-lg">Echoes of heritage</p>
          </div>
          <div className="flex flex-col gap-4 relative">
            <Image width={300} height={400} src="/images/launch/gate-grey.png" alt="" />
            <p className="absolute top-1/2 left-1/2 flex flex-col justify-center items-center -translate-x-1/2 -translate-y-1/3">
              <span>July</span>
              <span className="text-2xl font-semibold">29</span>
              <Image width={100} height={100} src="/images/launch/style.png" alt="" />
            </p>
            <p className="text-lg">Style in Motion</p>
          </div>
          <div className="flex flex-col gap-4 relative">
            <Image width={300} height={400} src="/images/launch/gate-grey.png" alt="" />
            <p className="absolute top-1/2 left-1/2 flex flex-col justify-center items-center -translate-x-1/2 -translate-y-1/3">
              <span>July</span>
              <span className="text-2xl font-semibold">30</span>
              <Image width={100} height={100} src="/images/launch/tomorrow.png" alt="" />
            </p>
            <p className="text-lg">Designing tomorrow</p>
          </div>
          <div className="flex flex-col gap-4 relative">
            <Image width={300} height={400} src="/images/launch/gate-orange.png" alt="" />
            <p className="absolute top-1/2 left-1/2 flex flex-col justify-center items-center -translate-x-1/2 -translate-y-1/3">
              <span>July</span>
              <span className="text-2xl font-semibold">31</span>
              <Image width={100} height={100} src="/images/launch/scissors-2.png" alt="" />
              <span className="text-orange-500">* Invite only</span>
            </p>
            <p className="text-lg">A Creative Era Begins</p>
          </div>
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
        <div className="flex gap-4 col-span-10 col-start-2 my-8">
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
        <div className="font-medium text-gray-800 col-span-6 col-start-6">
          <h1 className="text-2xl font-light text-right mb-4">
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
            className="absolute top-0 left-0"
          />
          <div className="w-1/3 flex justify-end flex-col gap-4 text-white leading-tight my-4">
            <h1 className="text-3xl font-medium text-right flex items-center justify-between  gap-4 w-full">
              <span>Join Us</span>
              <span className="w-1/3  border-t-white border-solid border-t inline-flex"></span>
            </h1>
            <p>
              We invite you to explore the weeklong program and be part of Ethiopia’s creative
              future.
            </p>
            <button className="bg-orange-500 text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              RSVP here
            </button>
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
  title: 'Hubs',
  openGraph: mergeOpenGraph({
    title: 'About | Creative Hub Ethiopia',
  }),
  twitter: mergeTwitterCard({
    title: 'About | Creative Hub Ethiopia',
  }),
}
