'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'

import logo from '@/../public/Creative-Hub-Ethiopia.svg'
import { usePathname } from 'next/navigation'
import { AnimatedButton, useJoinDialog } from '../ui'

export const links = [
  { name: 'Home', href: '/' },
  { name: 'Media', href: '/posts' },
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
  const [menuOpen, setMenuOpen] = useState(false)

  gsap.registerPlugin(useGSAP, ScrollTrigger)

  useGSAP(() => {
    let showAnim: gsap.core.Tween | null = null
    showAnim = gsap
      .from(toolbarRef.current, {
        yPercent: -200,
        opacity: 0,
        paused: true,
        duration: 0.3,
        scrollTrigger: {
          start: 'top top',
          end: 'max',
          onUpdate: function (self) {
            if (showAnim) {
              if (self.direction === -1) {
                showAnim.play()
              } else {
                showAnim.reverse()
              }
            }
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
        <div className="flex w-full flex-1 items-center justify-between flex-col md:flex-row">
          <div className="flex justify-between w-full">
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
            {/* Hamburger menu button for mobile */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
                aria-label="Open main menu"
                onClick={() => setMenuOpen((open) => !open)}
              >
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path
                    className="inline-flex"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Desktop menu */}
          <div
            className={`md:h-auto overflow-hidden md:overflow-visible items-end md:items-center gap-6 flex-col md:flex-row text-right md:text-left w-full md:w-auto ${!menuOpen ? 'hidden' : 'flex'} md:flex`}
          >
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
                        {subItems.map((sub) => {
                          const isActive =
                            pathname === sub.href || pathname.startsWith(`${sub.href}/`)
                          return (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className={`block px-2 py-2 text-sm text-inherit hover:text-primary hover:bg-gray-100 rounded transition-colors ${isActive && 'text-primary'}`}
                            >
                              {sub.name}
                            </Link>
                          )
                        })}
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
