'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useRef } from 'react'
import { twJoin } from 'tailwind-merge'

type Image = {
  id: string
  url: string
  alt: string
}

interface GalleryProps {
  images: Image[][]
}

const Gallery = ({ images }: GalleryProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const col1Ref = useRef<HTMLDivElement>(null)
  const col2Ref = useRef<HTMLDivElement>(null)
  const col3Ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    const cols = [col1Ref.current, col2Ref.current, col3Ref.current]
    if (!containerRef.current || cols.some((col) => !col)) return

    const heights = cols.map((col) => col!.offsetHeight)
    const maxHeight = Math.max(...heights)

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${maxHeight}px`,
        pin: true,
        anticipatePin: 1,
        scrub: true,
      },
    })

    cols.forEach((col, index) => {
      if (!col) return

      const height = heights[index]
      if (height === undefined) return

      timeline.to(
        col,
        {
          y: window.innerHeight - height,
          ease: 'none',
          duration: 1,
        },
        0,
      )
    })
  })

  return (
    <div
      className="grid h-screen grid-cols-12 gap-2 overflow-hidden px-4 will-change-transform md:gap-4 md:px-8"
      ref={containerRef}
    >
      {[col1Ref, col2Ref, col3Ref].map((colRef, colIndex) => (
        <div
          key={colIndex}
          className={twJoin(
            'col-span-full flex h-fit flex-col gap-4 will-change-transform md:col-span-4',
            colIndex === 2 ? 'hidden md:flex' : '',
            colIndex === 1 ? 'hidden md:flex' : '',
          )}
          ref={colRef}
        >
          {images[colIndex]?.slice(0, 5).map((image, index) => (
            <div
              className={twJoin(
                'w-full overflow-hidden rounded-2xl bg-muted',
                colIndex === 1
                  ? index % 2 !== 0
                    ? 'aspect-square'
                    : 'aspect-video'
                  : index % 2 !== 0
                    ? 'aspect-video'
                    : 'aspect-square',
              )}
              key={image.url}
            >
              <Image
                width={300}
                height={300}
                src={image.url}
                alt={image.alt}
                className="h-full w-full object-cover"
                loading="eager"
                priority={index < 2}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Gallery
