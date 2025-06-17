'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import Image from 'next/image'

interface MainOverlayProps {
  ref: React.RefObject<HTMLDivElement | null>
  title: string
  highlightWord: string
}

interface SecondaryOverlayProps {
  ref: React.RefObject<HTMLDivElement | null>
  text: string
}

interface BackgroundImageProps {
  ref: React.RefObject<HTMLDivElement | null>
  imgUrl: string
}

interface HeaderPresentationProps {
  imgUrl: string
  copy: string
  title: string
  highlightWord: string
}

// Constants
const ANIMATION_CONFIG = {
  SCRUB_SPEED: 1,
  SCALE_AMOUNT: 1.2,
  IMAGE_QUALITY: 90,
}

const BackgroundImage = ({ ref, imgUrl }: BackgroundImageProps) => (
  <div className="absolute h-full w-full overflow-hidden" ref={ref}>
    <Image
      width={1920}
      height={1080}
      alt="creative hub hero"
      src={imgUrl}
      className="h-full w-full object-cover"
      priority
      quality={ANIMATION_CONFIG.IMAGE_QUALITY}
    />
  </div>
)

const MainOverlay = ({ ref, title, highlightWord }: MainOverlayProps) => (
  <div
    className="absolute flex h-full w-full flex-col items-center justify-center -space-y-2 text-center font-display text-5xl font-medium uppercase leading-none tracking-tighter opacity-100 md:text-4xl lg:-space-y-4 lg:text-6xl"
    ref={ref}
  >
    {title.split(' ').map((word, index) =>
      word === highlightWord ? (
        <span className="text-primary" key={index}>
          {word}
        </span>
      ) : (
        <span key={index} className="text-outline opacity-60">
          {word}
        </span>
      ),
    )}
  </div>
)

const SecondaryOverlay = ({ ref, text }: SecondaryOverlayProps) => (
  <div
    className="pointer-events-none absolute col-span-6 grid h-full w-full grid-cols-12 items-center gap-4 px-4 text-xl leading-tight tracking-tight opacity-0 md:px-8"
    ref={ref}
  >
    <span className="col-span-full text-background md:col-span-6 md:col-start-4">{text}</span>
  </div>
)

const useHeaderAnimation = (
  containerRef: React.RefObject<HTMLDivElement | null>,
  overlay1Ref: React.RefObject<HTMLDivElement | null>,
  overlay2Ref: React.RefObject<HTMLDivElement | null>,
  imageRef: React.RefObject<HTMLDivElement | null>,
): void => {
  useGSAP(() => {
    if (
      !containerRef?.current ||
      !overlay1Ref?.current ||
      !overlay2Ref?.current ||
      !imageRef?.current
    )
      return

    gsap.registerPlugin(ScrollTrigger)

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=100%',
        pin: true,
        scrub: ANIMATION_CONFIG.SCRUB_SPEED,
      },
    })

    timeline
      .to(overlay1Ref.current, {
        ease: 'none',
        opacity: 0,
        scale: ANIMATION_CONFIG.SCALE_AMOUNT,
        filter: 'blur(5px)',
      })
      .to(
        overlay2Ref.current,
        {
          ease: 'none',
          opacity: 1,
        },
        '<',
      )

      .to(
        imageRef.current,
        {
          scale: ANIMATION_CONFIG.SCALE_AMOUNT,
        },
        '<',
      )
      .to(
        overlay2Ref.current,
        {
          ease: 'none',
          scale: 1.05,
        },
        '>',
      )
  })
}

const HeaderPresentation = ({ imgUrl, copy, title, highlightWord }: HeaderPresentationProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const overlay1Ref = useRef<HTMLDivElement>(null)
  const overlay2Ref = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useHeaderAnimation(containerRef, overlay1Ref, overlay2Ref, imageRef)

  return (
    <header className="relative h-screen w-full overflow-hidden bg-foreground" ref={containerRef}>
      <BackgroundImage ref={imageRef} imgUrl={imgUrl} />
      <MainOverlay ref={overlay1Ref} title={title} highlightWord={highlightWord} />
      <SecondaryOverlay ref={overlay2Ref} text={copy} />
    </header>
  )
}

export default HeaderPresentation
