'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import creativeHubLogo from '@/../public/icon-background.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

interface SplashScreenProps {
  children: React.ReactNode
  minimumDisplayTime?: number // in milliseconds
}
const messages = ['Connecting creatives across Ethiopia', 'Fueling the creative revolution']

const SplashScreen: React.FC<SplashScreenProps> = ({ children, minimumDisplayTime = 1000 }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const dotsRef = useRef<HTMLSpanElement[]>([])
  const progressRef = useRef<HTMLDivElement>(null)
  const loadingTimeout = useRef<NodeJS.Timeout>(undefined)
  const fallbackTimeout = useRef<NodeJS.Timeout>(undefined)
  const startTime = useRef(Date.now())
  const progressTween = useRef<gsap.core.Tween>(undefined)
  const allResourcesLoaded = useRef(false)

  const [messageIndex, setMessageIndex] = useState(0)

  useEffect(() => {
    if (progress >= 99) {
      setMessageIndex(1)
    }
  }, [progress])

  useEffect(() => {
    if (!isLoading) return
    if (textRef.current) {
      const textElements = textRef.current.querySelectorAll('.letter')
      gsap.from(textElements, {
        y: 50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: 'back.out(1.7)',
      })
    }
    // Separate repeating animation just for the dots
    gsap.killTweensOf(dotsRef.current)
    gsap.from(dotsRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: 'back.out(1.7)',
      repeat: -1,
      yoyo: true,
      delay: messageIndex === 0 ? 2 : 1.7,
    })
  }, [messageIndex])

  // Register the GSAP context
  useGSAP(() => {
    if (!isLoading) return

    // Initial animations
    gsap.from(logoRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      ease: 'elastic.out(1, 0.5)',
    })

    // Animation for main text characters ("Selam")

    // Initialize progress bar animation
    progressTween.current = gsap.fromTo(
      progressRef.current,
      { width: '0%' },
      {
        width: `${progress}%`,
        duration: 0.5,
        ease: 'power2.out',
      },
    )
  }, [isLoading])

  // Update progress bar animation when progress changes
  useEffect(() => {
    if (progressTween.current) {
      progressTween.current.kill()
      progressTween.current = gsap.to(progressRef.current, {
        width: `${progress}%`,
        duration: 0.3,
        ease: 'power2.out',
      })
    }
  }, [progress])

  const completeLoading = () => {
    // Jump to 100% just before hiding
    setProgress(100)

    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.inOut',
      onComplete: () => {
        setIsLoading(false)
        clearTimeout(fallbackTimeout.current)
      },
    })
  }

  useEffect(() => {
    startTime.current = Date.now()

    // Fallback in case we get stuck
    fallbackTimeout.current = setTimeout(() => {
      if (!allResourcesLoaded.current) {
        console.warn('Fallback triggered - forcing splash screen completion')
        completeLoading()
      }
    }, 8000)

    const checkResourcesLoaded = () => {
      try {
        const elements = [
          ...Array.from(document.images),
          ...Array.from(document.querySelectorAll('video')),
          ...Array.from(document.querySelectorAll('audio')),
          ...Array.from(document.querySelectorAll('link[rel="stylesheet"]')),
          ...Array.from(document.querySelectorAll('script[src]')),
          ...Array.from(document.styleSheets).filter(
            (sheet) => !sheet.href || sheet.href.startsWith(window.location.origin),
          ),
          ...Array.from(document.fonts?.values() || []),
        ]

        let loadedCount = 0
        const totalCount = Math.max(1, elements.length)

        elements.forEach((el) => {
          try {
            if (el instanceof HTMLImageElement) {
              if (el.complete && el.naturalWidth !== 0 && !el.dataset.failed) loadedCount++
            } else if (el instanceof HTMLMediaElement) {
              if (el.readyState >= 2) loadedCount++
            } else if (el instanceof HTMLLinkElement) {
              if (el.sheet && el.sheet.rules && el.sheet.rules.length > 0) loadedCount++
            } else if (el instanceof CSSStyleSheet) {
              if (el.rules.length > 0) loadedCount++
            } else if (el instanceof HTMLScriptElement) {
              loadedCount++
            } else if (el instanceof FontFace) {
              if (el.status === 'loaded') loadedCount++
            } else {
              loadedCount++
            }
          } catch (e) {
            console.error('Error checking element:', el, e)
            loadedCount++
          }
        })

        let fontsLoaded = true
        if (document.fonts?.size > 0) {
          fontsLoaded = Array.from(document.fonts.values()).every(
            (font) => font.status === 'loaded',
          )
        }

        const allElementsLoaded = loadedCount >= totalCount && fontsLoaded
        const calculatedProgress = Math.min(99, Math.floor((loadedCount / totalCount) * 100))

        setProgress((prev) => {
          const newProgress = calculatedProgress > prev + 5 ? calculatedProgress : prev + 1
          return Math.min(newProgress, 99) // Cap at 99% until we're ready to complete
        })

        if (allElementsLoaded) {
          allResourcesLoaded.current = true
          const elapsed = Date.now() - startTime.current
          const remainingTime = Math.max(0, minimumDisplayTime - elapsed)

          // Wait for minimum display time before completing
          loadingTimeout.current = setTimeout(() => {
            completeLoading()
          }, remainingTime)
        } else {
          setTimeout(checkResourcesLoaded, 100)
        }
      } catch (error) {
        console.error('Error in resource check:', error)
        completeLoading()
      }
    }

    // Add error handlers for images
    document.querySelectorAll('img').forEach((img) => {
      img.addEventListener('error', () => {
        img.dataset.failed = 'true'
      })
    })

    const initialTimeout = setTimeout(checkResourcesLoaded, 50)

    return () => {
      clearTimeout(initialTimeout)
      if (loadingTimeout.current) clearTimeout(loadingTimeout.current)
      if (fallbackTimeout.current) clearTimeout(fallbackTimeout.current)
      if (progressTween.current) progressTween.current.kill()
      gsap.killTweensOf(containerRef.current)
    }
  }, [minimumDisplayTime])

  const setDotRef = (el: HTMLSpanElement | null, index: number) => {
    if (el) {
      dotsRef.current[index] = el
    }
  }

  return (
    <>
      {isLoading && (
        <div
          ref={containerRef}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-primary"
        >
          <div ref={logoRef}>
            <Image
              priority
              src={creativeHubLogo}
              alt="Creative Hub"
              width={500}
              height={500}
              className="h-auto w-full max-w-[200px]"
            />
          </div>

          <div
            ref={textRef}
            className="mt-8 flex overflow-hidden font-display text-3xl font-medium uppercase leading-none tracking-tighter text-foreground"
          >
            {messages[messageIndex]?.split('').map((char, index) => {
              if (char === ' ') return <span key={`char-${index}`}>&nbsp;</span>
              else
                return (
                  <span key={`char-${index}`} className="letter inline-block">
                    {char}
                  </span>
                )
            })}
            {[1, 2, 3].map((dot, index) => (
              <span
                key={`dot-${index}`}
                ref={(el) => setDotRef(el, index)}
                className="inline-block"
              >
                .
              </span>
            ))}
          </div>

          <div className="mt-8 w-full max-w-[300px] overflow-hidden rounded-full bg-foreground/20">
            <div
              ref={progressRef}
              className="h-3 bg-foreground transition-[width] duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-3 text-sm font-medium text-foreground transition-all duration-300">
            {progress}%
          </div>
        </div>
      )}

      {!isLoading && children}
    </>
  )
}

export default SplashScreen
