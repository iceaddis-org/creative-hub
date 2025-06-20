'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

import logo from '@/../public/Creative-Hub.svg'
import { AnimatedButton, useJoinDialog } from '@/components/ui'
import { usePathname } from 'next/navigation'

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

const NavPresentation = () => {
  const pathname = usePathname()

  const toolbarRef = useRef<HTMLDivElement | null>(null)
  const { Dialog, showDialog } = useJoinDialog()

  useGSAP(() => {
    if (!toolbarRef.current) return

    gsap.registerPlugin(ScrollTrigger)

    // Hide/show animation
    const showAnim = gsap
      .from(toolbarRef.current, {
        yPercent: -100,
        opacity: 0,
        paused: true,
        duration: 0.3,
      })
      .progress(1)

    // Background/text color change animation
    gsap.to(toolbarRef.current, {
      backgroundColor: '#fdfaf5',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: '+=200vh',
        scrub: true,
      },
    })

    // Change text color for all text elements
    gsap.to(toolbarRef.current.querySelectorAll('a:not(.text-primary), span, button'), {
      color: 'rgb(var(--foreground))',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: '+=200vh',
        scrub: true,
      },
    })

    ScrollTrigger.create({
      start: 'top top',
      end: 'max',
      onUpdate: (self) => {
        if (self.direction === -1) {
          showAnim.play()
        } else {
          showAnim.reverse()
        }
      },
    })
  })

  return (
    <>
      <nav
        ref={toolbarRef}
        className="fixed top-0 left-0 right-0 z-50 flex h-fit w-full items-center justify-between px-4 py-4 leading-none md:px-8 bg-transparent text-background"
      >
        <div className="flex w-full flex-1 items-center justify-between">
          <Link href="/">
            <div className="z-50 flex h-14 items-center gap-2">
              <Image
                src={logo}
                alt="Creative Hub Logo"
                width={172}
                height={172}
                className="block h-full w-10/12 md:w-full md:object-cover"
              />
            </div>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {links.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`)
              const subItems = link.sublinks || []
              return (
                <div key={link.name}>
                  {(subItems.length > 0 && (
                    <div
                      className={`font-medium tracking-wider text-inherit hover:text-primary transition-colors ${isActive && 'text-primary'}`}
                    >
                      {link.name}
                      <div className="absolute mt-2 rounded bg-white text-black shadow-lg py-2 px-4 min-w-[160px]">
                        {subItems.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block px-2 py-1 text-sm text-inherit hover:text-primary hover:bg-gray-100 rounded transition-colors"
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

          {/* <Sidebar /> */}
        </div>
      </nav>
      <Dialog />
    </>
  )
}

export default NavPresentation
