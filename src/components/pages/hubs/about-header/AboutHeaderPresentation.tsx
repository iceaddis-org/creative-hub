import Image from 'next/image'

interface AboutHeaderPresentation {
  title: string
  copy: string
  imageUrl: string
  className?: string
  copyClassName?: string
  titleClassName?: string
  rounded?: boolean
  darkenBg?: boolean
  videoUrl?: string
}

const AboutHeaderPresentation = ({
  title,
  copy,
  imageUrl,
  className,
  videoUrl,
  copyClassName,
  titleClassName,
  rounded = true,
  darkenBg = true,
}: AboutHeaderPresentation) => {
  return (
    <header className={className ?? 'px-4 pb-16 pt-8 md:px-8'}>
      <div
        className={
          'relative aspect-[51/100] overflow-hidden bg-black md:aspect-[4/3] lg:aspect-[7/3]' +
          (rounded ? ' rounded-lg' : '')
        }
      >
        {videoUrl ? (
          <video
            src={videoUrl}
            autoPlay
            loop
            muted
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <Image
            src={imageUrl}
            alt=""
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
        )}

        <div
          className={
            'absolute left-0 top-0 z-10 grid h-full w-full grid-cols-12 items-center gap-x-4' +
            (darkenBg ? ' bg-foreground/70 text-background' : '')
          }
        >
          <div className="col-span-10 col-start-2">
            <h1
              className={
                titleClassName ??
                'font-display text-2xl font-medium leading-none tracking-tighter md:text-4xl'
              }
            >
              {title}
            </h1>
            <p className={copyClassName ?? 'mt-4 2xl:leading-normal'}>{copy} </p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AboutHeaderPresentation
