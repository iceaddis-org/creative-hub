'use client'

import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const DURATION = 4

// Register ScrollTrigger plugin

interface AboutStatsPresentationProps {
  stats: { title: string; count: number }[]
}

const AboutStatsPresentation = ({ stats }: AboutStatsPresentationProps) => {
  const [ref, inView] = useInView()

  return (
    <section ref={ref} className="px-4 py-16 md:px-8">
      <div className="grid w-full grid-cols-2 items-start justify-between gap-4 gap-x-8 border-b border-t border-border py-16 leading-none md:grid-cols-3 md:flex-row lg:grid-cols-5">
        {stats.map((stat, index) => (
          <div className="flex-1" key={stat.title}>
            <div className="font-display text-2xl font-medium tracking-tighter lg:text-5xl">
              {inView && <CountUp start={0} end={stat.count} duration={DURATION} />}+
            </div>
            <div className="2xl:leading-normal">{stat.title}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AboutStatsPresentation
