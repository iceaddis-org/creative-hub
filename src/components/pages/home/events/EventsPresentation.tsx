'use client'
import { AnimatedButton, SectionTitle } from '@/components/ui'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useRef } from 'react'

interface Events {
  id: string
  title: string
  copy: string
  imageUrl: string
  dateTime: string
}

interface EventsPresentationProps {
  services: Events[]
}

const EventsPresentation = ({ services }: EventsPresentationProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    if (!cardsRef.current) return

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: true,
        start: 'top top',
        end: `+=${cardsRef.current.scrollWidth - cardsRef.current.offsetWidth}`,
        pin: true,
        immediateRender: false,
        anticipatePin: 1,
      },
    })

    timeline.to(cardsRef.current, {
      ease: 'none',
      x: () => {
        if (cardsRef.current) {
          const totalWidth = cardsRef.current.scrollWidth - cardsRef.current.offsetWidth
          return -totalWidth
        }
        return 0
      },
    })
  })

  return (
    <section className="pb-16 pt-20">
      <SectionTitle sectionName="Upcoming Events" sectionTitle="Shaping the Future" />
      <div className="pt-4">
        <div className="h-screen w-full overflow-hidden py-6" ref={containerRef}>
          <div className="relative h-full w-full px-4 md:px-8">
            <div ref={cardsRef} className="absolute inset-x-4 flex h-full gap-4 md:inset-x-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="card-item flex h-full w-full flex-shrink-0 items-end rounded-2xl bg-foreground bg-cover bg-center p-6 md:p-12"
                  style={{
                    backgroundImage: `linear-gradient(rgba(39, 21, 3, 0.5), rgba(39, 21, 3, 0.5)), url('${service.imageUrl}')`,
                    // filter: 'brightness(0.5) contrast(1.2)',
                  }}
                >
                  <div className="flex flex-col text-background">
                    <span className="inline-block w-fit rounded bg-background p-2 text-sm font-semibold leading-none text-foreground">
                      {new Intl.DateTimeFormat('en-US', {
                        dateStyle: 'medium',
                        timeStyle: 'short',
                      }).format(new Date(service.dateTime))}
                    </span>
                    <span className="text-display mt-4 text-xl font-medium leading-none md:w-1/2 md:text-2xl">
                      {service.title}
                    </span>
                    <div className="md:flex-0 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                      <span className="-mb-1 mt-3 w-11/12 opacity-60 md:w-1/2 2xl:leading-normal">
                        {service.copy}
                      </span>
                      <AnimatedButton title="Register" onClick={() => {}} variant="primary" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsPresentation
