'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { useGSAP } from '@gsap/react'

// Register plugins
gsap.registerPlugin(ScrollToPlugin, useGSAP)

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollPercentage =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      setIsVisible(scrollPercentage > 20)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    gsap.to(window, {
      duration: 1.2,
      scrollTo: {
        y: 0,
        autoKill: false,
      },
      ease: 'power3.out',
    })
  }

  useGSAP(() => {
    gsap.set('#scroll-to-top', { y: 20, opacity: 0 })

    gsap.to('#scroll-to-top', {
      y: 0,
      opacity: 1,
      duration: 0.3,
      ease: 'power2.out',
      paused: true,
    })
  })

  useEffect(() => {
    if (isVisible) {
      gsap.to('#scroll-to-top', {
        y: 0,
        opacity: 0.7,
        duration: 0.3,
        pointerEvents: 'auto',
      })
    } else {
      gsap.to('#scroll-to-top', {
        y: 20,
        opacity: 0,
        duration: 0.3,
        pointerEvents: 'none',
      })
    }
  }, [isVisible])

  return (
    <button
      id="scroll-to-top"
      onClick={scrollToTop}
      className=" fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background transition-all hover:bg-primary"
      aria-label="Scroll to top"
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
    >
      <ArrowUp size={20} />
    </button>
  )
}
