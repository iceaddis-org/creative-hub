import Image from 'next/image'

const AboutPassagePresentation = () => {
  return (
    <section className="grid grid-cols-12 gap-6 px-4 py-16 pb-12 md:px-8 lg:gap-4">
      <div className="col-span-12 aspect-square overflow-hidden rounded-2xl bg-black md:aspect-[5/3] lg:col-span-6 lg:aspect-square">
        <Image
          width={500}
          height={500}
          alt=""
          src="/images/about/about-9.png"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="col-span-12 flex flex-col gap-4 lg:col-span-6">
        <h2 className="font-display text-xl font-medium leading-none tracking-tighter lg:text-3xl">
          Ignite Creative Potential
        </h2>
        <p>
          Whether you&apos;re designing cutting-edge products, coding immersive games, building
          innovative apps, weaving beautiful textiles, or crafting unique jewelry, Creative Hub
          Ethiopia welcomes you. We provide all-in-one facilities including vibrant co-working
          zones, advanced prototyping labs, and state-of-the-art digital production tools to help
          bring your ideas to life. Our hands-on programs—ranging from bootcamps and design sprints
          to focused training sessions—are designed to sharpen your skills and accelerate your
          growth.
        </p>
        <p>
          Beyond resources, we connect you to a powerful network of government stakeholders,
          industry leaders, and international partners, opening doors to new opportunities. Located
          across key creative districts in Addis Ababa, including Ras Abebe Aregay, Piassa, and
          Arada, Creative Hub Ethiopia is more than just a workspace—it’s the vibrant pulse driving
          the country’s thriving creative economy.
        </p>
      </div>
    </section>
  )
}

export default AboutPassagePresentation
