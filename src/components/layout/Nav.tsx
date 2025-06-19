'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

import logo from '@/../public/Creative-Hub.svg'
import { usePathname } from 'next/navigation'
import { AnimatedButton, useJoinDialog } from '../ui'

export const links = [
  { name: 'Home', href: '/' },
  { name: 'Posts', href: '/posts' },
  { name: 'Events', href: '/events' },
  { name: 'Partners', href: '/partners' },
  {
    name: 'Hubs',
    href: '/hubs',
    sublinks: [
      { name: 'Addis Ababa', href: '/hubs/addis-ababa' },
      { name: 'Jimma', href: '/hubs/jimma' },
    ],
  },
]

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
                alt="Creative Hub Logo"
                width={120}
                height={120}
                className="block h-full w-10/12 md:w-full md:object-cover"
              />
            </div>
          </Link>

          <div className="md:h-auto overflow-hidden md:overflow-visible items-end md:items-center gap-6 flex flex-col md:flex-row text-right md:text-left w-full md:w-auto">
            {links.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`)
              const subItems = link.sublinks || []
              return (
                <div key={link.name}>
                  {(subItems.length > 0 && (
                    <div
                      className={`font-medium tracking-wider md:relative text-inherit hover:text-primary group transition-colors ${isActive && 'text-primary'}`}
                    >
                      {link.name}
                      <div className="z-10 -left-full pt-4 md:rounded md:absolute md:bg-white text-black md:shadow-lg md:pb-2 md:px-4 md:min-w-[160px] md:group-hover:block md:hidden">
                        {subItems.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block px-2 py-2 text-sm text-inherit hover:text-primary hover:bg-gray-100 rounded transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )) || (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`font-medium tracking-wider text-inherit hover:text-primary transition-colors ${isActive && 'text-primary'}`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
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
