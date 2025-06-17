'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'

import logo from '@/../public/Creative-Hub.svg'
import { AnimatedButton, useJoinDialog } from '../ui'
import { usePathname } from 'next/navigation'
import { links } from '../pages/home/nav/NavPresentation'

export default function Nav() {
  const pathname = usePathname()

  const toolbarRef = useRef<HTMLDivElement | null>(null)
  const { Dialog, showDialog } = useJoinDialog()

  gsap.registerPlugin(useGSAP, ScrollTrigger)

  useGSAP(() => {
    const showAnim = gsap
      .from(toolbarRef.current, {
        yPercent: -200,
        opacity: 0,
        paused: true,
        duration: 0.3,
        scrollTrigger: {
          start: 'top top',
          end: 'max',
          onUpdate: (self) => {
            return self.direction === -1 ? showAnim.play() : showAnim.reverse()
          },
        },
      })
      .progress(1)
  })

  return (
    <>
      <nav
        ref={toolbarRef}
        className={`main-tool-bar sticky top-0 z-50 col-span-12 flex h-fit w-full items-center justify-between border-b border-border bg-background px-4 py-3 leading-none md:px-8`}
      >
        <div className={`flex w-full flex-1 items-center justify-between`}>
          <Link href="/">
            <div className="z-50 flex items-center gap-2 md:h-14">
              <Image
                src={logo}
                alt="Ras Tech Logo"
                width={120}
                height={120}
                className="block h-full w-10/12 md:w-full md:object-cover"
              />
            </div>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {links.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={` font-medium tracking-wider text-foreground hover:text-primary ${isActive && 'text-primary'}`}
                >
                  {link.name}
                </Link>
              )
            })}

            <AnimatedButton title="Join now" onClick={showDialog} />
          </div>
        </div>
      </nav>
      <Dialog />
    </>
  )
}
