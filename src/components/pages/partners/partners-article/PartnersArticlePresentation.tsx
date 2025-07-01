import Image from 'next/image'

const PartnersArticlePresentation = () => {
  return (
    <section className="grid grid-cols-12 gap-6 px-4 pb-12 md:px-8 lg:gap-4">
      <div className="col-span-12 aspect-square overflow-hidden rounded-2xl bg-black md:aspect-[5/3] lg:col-span-6 lg:aspect-square">
        <Image
          width={500}
          height={500}
          alt=""
          src="/api/media/file/Partner-1400x933.webp"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="col-span-12 flex flex-col gap-4 lg:col-span-6">
        <h2 className="font-display text-xl font-medium leading-none tracking-tighter lg:text-3xl">
          Fostering a Collaborative Ecosystem
        </h2>
        <p className=" ">
          {`Creative Hub Ethiopia's commitment to "partnering with forward-looking organizations and individuals" is absolutely crucial to its success and impact. This isn't just a marketing slogan; it's a strategic approach that amplifies its reach, resources, and relevance within Ethiopia's creative ecosystem.`}
        </p>
        <p className="">
          {`
    Knowledge Sharing: Partnerships facilitate the exchange of knowledge, insights, and trends, keeping the hub and its members at the forefront of global and local creative developments. `}
        </p>
        <p>
          Networking Opportunities: The hub actively creates platforms for its members to connect
          with these diverse partners, opening doors to collaborations, client relationships, and
          investment opportunities that would otherwise be difficult to access.
        </p>
        <p>{`Program Development: Many of the hub's programs, such as the "Creative DNA Fashion Programme" (with the British Council and iceaddis), are direct outcomes of these partnerships, combining the strengths of multiple organizations to offer comprehensive support.`}</p>
        <p>
          Resource Optimization: By pooling resources, expertise, and networks, the hub and its
          partners can achieve more than they could individually, leading to more impactful
          initiatives and greater sustainability.
        </p>
        <p>
          Advocacy and Policy Influence: A unified front of various stakeholders can more
          effectively advocate for policies that support the growth of the creative industry in
          Ethiopia, addressing challenges like intellectual property rights, access to finance, and
          market development.
        </p>
      </div>
    </section>
  )
}

export default PartnersArticlePresentation
