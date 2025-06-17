import Image from 'next/image'

interface PartnersHeaderPresentation {
  title: string
  copy: string
  imageUrl: string
}

const PartnersHeaderPresentation = ({ title, copy, imageUrl }: PartnersHeaderPresentation) => {
  return (
    <header className="px-4 pb-12 pt-6 md:px-8">
      <div className="relative aspect-[51/100] overflow-hidden rounded-2xl bg-black md:aspect-[4/3] lg:aspect-[7/3]">
        <Image
          width={1920}
          height={1080}
          alt=""
          src={imageUrl}
          className="h-full w-full object-cover"
        />

        <div className="absolute left-0 top-0 z-10 grid h-full w-full grid-cols-12 items-center gap-x-4 rounded-2xl bg-foreground/70 text-background">
          <div className="col-span-10 col-start-2 md:col-span-8 md:col-start-3">
            <h1 className="font-display text-2xl font-medium leading-none tracking-tighter md:text-4xl">
              {title}
            </h1>
            <p className="mt-4 2xl:leading-normal">{copy} </p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default PartnersHeaderPresentation
