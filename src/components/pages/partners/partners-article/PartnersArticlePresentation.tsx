import Image from 'next/image'

const PartnersArticlePresentation = () => {
  return (
    <section className="grid grid-cols-12 gap-6 px-4 pb-12 md:px-8 lg:gap-4">
      <div className="col-span-12 aspect-square overflow-hidden rounded-2xl bg-black md:aspect-[5/3] lg:col-span-6 lg:aspect-square">
        <Image
          width={500}
          height={500}
          alt=""
          src="/images/partner/partner-2.png"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="col-span-12 flex flex-col gap-4 lg:col-span-6">
        <h2 className="font-display text-xl font-medium leading-none tracking-tighter lg:text-3xl">
          Celebrating Notable Guests
        </h2>
        <p className=" ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et beatae nihil possimus. Harum
          rerum et quas, aliquid deleniti possimus assumenda nihil laboriosam aspernatur aperiam
          perferendis distinctio mollitia laborum sit nulla. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Doloribus minus expedita nam tenetur voluptas. Cum, in accusantium nisi
          ipsa quis, doloremque nemo necessitatibus consequuntur rerum quae enim, neque veritatis
          ducimus.
        </p>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptate autem nulla! Ad
          deserunt saepe iure possimus, libero, fuga repellat similique dolores consectetur tenetur
          doloremque cumque, aliquam a soluta eius!
        </p>
      </div>
    </section>
  )
}

export default PartnersArticlePresentation
