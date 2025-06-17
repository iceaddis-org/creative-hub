'use client'

import { NextButton, PrevButton, usePrevNextButtons } from '@/components/ui/CarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback } from 'react'
import Image from 'next/image'

interface Testimonial {
  id: string
  testimonial: string
  profileName: string
  profilePosition: string
  profileAvatarUrl: string
}

interface TestimonialPresentationProps {
  testimonials: Testimonial[]
}

const TestimonialsPresentation = ({ testimonials }: TestimonialPresentationProps) => {
  const autoplayOptions = {
    delay: 6000,
    rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement,
    stopOnInteraction: true,
    stopOnMouseEnter: false,
    playOnInit: true,
  }

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)])

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi)

  const onButtonClick = useCallback(
    (callback: () => void) => {
      callback()
      emblaApi?.plugins()?.autoplay?.reset()
    },
    [emblaApi],
  )

  return (
    <section className="relative mx-auto h-screen">
      <div className="h-full overflow-hidden px-8" ref={emblaRef}>
        <div className="-ml-4 flex h-full touch-pan-y py-6">
          {testimonials.map((testimonial) => (
            <div
              className="flex h-full min-w-0 flex-[0_0_100%] translate-x-0 transform flex-col py-16 pl-4"
              key={testimonial.id}
            >
              <p className="relative font-display text-lg font-medium leading-tight tracking-tighter md:text-3xl lg:text-3xl lg:leading-none">
                &quot;{testimonial.testimonial}&quot;
              </p>
              <div className="mt-12 flex items-end gap-4 md:mt-24 md:w-3/4">
                <div className="aspect-square w-24 overflow-hidden rounded-2xl md:w-28">
                  <Image
                    src={testimonial.profileAvatarUrl}
                    width={100}
                    height={100}
                    alt={testimonial.profileName}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex w-1/2 flex-col gap-2">
                  <span className="text-[14px] font-semibold leading-none md:text-lg md:tracking-tight">
                    {testimonial.profileName}
                  </span>
                  <span className="text-[14px] leading-tight text-muted-foreground md:text-lg md:tracking-tight xl:leading-tight">
                    {testimonial.profilePosition}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 hidden w-full justify-end px-8 py-16 md:flex md:-bottom-28 xl:bottom-0">
        <div className="grid grid-cols-2 items-center gap-3">
          <PrevButton
            onClick={() => onButtonClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-foreground transition-colors duration-200 hover:bg-muted disabled:text-gray-400 md:h-12 md:w-12"
          />
          <NextButton
            onClick={() => onButtonClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-foreground transition-colors duration-200 hover:bg-muted disabled:text-gray-400 md:h-12 md:w-12"
          />
        </div>
      </div>
    </section>
  )
}

export default TestimonialsPresentation
