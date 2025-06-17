'use client'
import { ReactLenis } from 'lenis/react'

interface SmoothScrollingProps {
  children: React.ReactNode
}

const SmoothScrolling: React.FC<SmoothScrollingProps> = ({ children }) => {
  return (
    <ReactLenis
      root
      options={{
        duration: 1,
        smoothWheel: true,
        wheelMultiplier: 0.7,
      }}
    >
      {children}
    </ReactLenis>
  )
}

export default SmoothScrolling
