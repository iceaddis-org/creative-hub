'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useRef, useEffect } from 'react'

type Team = {
  id: string
  name: string
  avatarUrl: string
  position: string
}

interface TeamPresentationProps {
  team: Team[]
}

const TeamPresentation = ({ team }: TeamPresentationProps) => {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const cardContainerRef = useRef<HTMLUListElement | null>(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!cardContainerRef.current || !sectionRef.current) return

    const totalMovement = -(cardContainerRef.current.scrollWidth - window.innerWidth)

    const scrollTween = gsap.to(cardContainerRef.current, {
      x: totalMovement,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'center center',
        end: () => `+=${Math.abs(totalMovement)}`,
        pin: true,
        scrub: true,
        anticipatePin: 1,
        markers: false,
        pinSpacing: true,
      },
    })

    document.querySelectorAll('.card').forEach((card) => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          containerAnimation: scrollTween,
          start: 'center right',
          end: 'center left',
          scrub: true,
        },
      })

      timeline
        .fromTo(
          card,
          {
            filter: 'contrast(0.3)',
            // opacity: 0.5,
            // rotate: 20,
            scale: 0.9,
            yPercent: 30,
            ease: 'power1.out',
          },
          {
            filter: 'contrast(1)',
            opacity: 1,
            // rotate: 0,
            scale: 1,
            yPercent: 0,
            ease: 'power1.out',
            duration: 1,
          },
        )
        .to(
          card,
          {
            filter: 'contrast(0.3)',
            // opacity: 0.5,
            // rotate: -20,
            scale: 0.9,
            yPercent: 30,
            ease: 'power1.in',
            duration: 1,
          },
          '>',
        )
    })
  })

  useEffect(() => {
    const handleLoad = () => {
      ScrollTrigger.refresh()
    }
    window.addEventListener('load', handleLoad)

    return () => {
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  return (
    <section className="py-8 md:py-16">
      <div className="grid grid-cols-12 gap-4">
        <h2 className="col-span-full text-balance text-center font-display text-2xl font-medium uppercase leading-none tracking-tighter md:col-span-8 md:col-start-3 md:text-3xl lg:col-span-6 lg:col-start-4">
          The Team Behind Creative Hub
        </h2>
      </div>
      <div ref={sectionRef} className="flex h-screen items-center overflow-hidden">
        <div className="relative">
          <ul
            className="flex gap-4 px-8 sm:px-20 md:px-8"
            ref={cardContainerRef}
            style={{
              width: 'fit-content',
            }}
          >
            <div className="card hidden w-[calc(100vw-4rem)] flex-shrink-0 rotate-12 scale-50 opacity-0 sm:w-[calc(100vw-8rem-32px)] md:block md:w-[calc((100vw-30rem)/2)] lg:w-[calc((100vw-4rem-32px)/3)]" />
            {team.map((person) => (
              <li
                key={person.id}
                className="card w-[calc(100vw-4rem)] flex-shrink-0  contrast-50 sm:w-[calc(100vw-8rem-32px)] md:w-[calc((100vw-4rem-16px)/2)] lg:w-[calc((100vw-4rem-32px)/3)]"
              >
                <div className="aspect-square overflow-hidden rounded-xl relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/50 z-10" />
                  <Image
                    src={person.avatarUrl}
                    width={250}
                    height={250}
                    alt={person.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 pt-4 leading-none">
                  <span className="text-lg font-semibold">{person.name}</span>
                  <span className="text-lg text-muted-foreground">{person.position}</span>
                </div>
              </li>
            ))}
            <div className="card hidden w-[calc(100vw-4rem)] flex-shrink-0 rotate-12 scale-50 opacity-0 sm:w-[calc(100vw-8rem-32px)] md:block md:w-[calc((100vw-30rem)/2)] lg:w-[calc((100vw-4rem-32px)/3)]" />
          </ul>
        </div>
      </div>
    </section>
  )
}

export default TeamPresentation
