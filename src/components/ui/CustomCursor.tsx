'use client'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null)

  // Create portal container on mount
  useEffect(() => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    setPortalContainer(div)

    return () => {
      document.body.removeChild(div)
    }
  }, [])

  useGSAP(() => {
    if (!cursorRef.current) return

    const cursor = cursorRef.current
    const links = document.querySelectorAll('a, button')

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
    })

    const followMouse = (e: MouseEvent) => {
      gsap.to(cursor, {
        duration: 0.1,
        x: e.clientX,
        y: e.clientY,
        ease: 'power2.out',
      })
    }

    const expandCursor = () => {
      gsap.to(cursor, {
        duration: 0.3,
        scale: 2.5,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        border: '0.5px solid white',
        ease: 'power2.out',
      })
    }

    const shrinkCursor = () => {
      gsap.to(cursor, {
        duration: 0.3,
        scale: 1,
        backgroundColor: 'white',
        border: '0.5px solid rgba(255, 255, 255, 0.1)',
        ease: 'power2.out',
      })
    }

    const clickCursor = () => {
      gsap.to(cursor, {
        duration: 0.3,
        scale: 2,
        backgroundColor: 'white',
        border: '0.5px solid rgba(255, 255, 255, 0.1)',
        ease: 'power2.out',
      })
    }

    document.addEventListener('mousemove', followMouse)
    links.forEach((link) => {
      link.addEventListener('mouseenter', expandCursor)
      link.addEventListener('mouseleave', shrinkCursor)
      link.addEventListener('mousedown', clickCursor)
      link.addEventListener('mouseup', expandCursor)
    })

    return () => {
      document.removeEventListener('mousemove', followMouse)
      links.forEach((link) => {
        link.removeEventListener('mouseenter', expandCursor)
        link.removeEventListener('mouseleave', shrinkCursor)
        link.removeEventListener('mousedown', clickCursor)
        link.removeEventListener('mouseup', expandCursor)
      })
    }
  }, [portalContainer]) // Re-run when portal is ready

  if (!portalContainer) return null

  return ReactDOM.createPortal(
    <>
      <style>
        {`
          body { cursor: none; }
          a, button { cursor: pointer; }
        `}
      </style>

      <div
        className="pointer-events-none fixed left-0 top-0 z-[2147483647] hidden h-4 w-4 rounded-full bg-white mix-blend-difference lg:block"
        ref={cursorRef}
      />
    </>,
    portalContainer,
  )
}

export default CustomCursor
