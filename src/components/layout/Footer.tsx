'use client'

import {
  FacebookIcon,
  Instagram,
  Linkedin,
  Mail,
  Send,
  Smartphone,
  Twitter,
  Youtube,
} from 'lucide-react'
import Link from 'next/link'

import { AnimatedButton, useJoinDialog } from '../ui'

const Footer = ({ serverYear }: { serverYear: number }) => {
  const { Dialog, showDialog } = useJoinDialog()

  return (
    <>
      <footer className="">
        <div className="flex flex-col gap-12 px-4 py-16 md:flex-row md:gap-4 md:px-8">
          <div className="flex-1">
            <span className="font-display text-2xl font-medium uppercase leading-none tracking-tighter lg:text-3xl">
              Join the Creative Community
            </span>
            <p className="2xl:-lg mt-4 text-muted-foreground">
              Unlock full access to Creative Hub Ethiopia—book spaces, schedule events, connect with
              industry experts, and stay ahead with exclusive trainings and opportunities.
            </p>

            <div className="mt-5">
              <AnimatedButton onClick={showDialog} title="Join the community" />
            </div>
          </div>
          <div className="grid flex-1 grid-cols-6 gap-4">
            <div className="col-span-4 lg:col-span-3">
              <span className="font-semibold uppercase">Contact</span>
              <ul className="-4 mt-3 space-y-2">
                <li>
                  <Link
                    href="/"
                    className="flex items-center md:gap-2 gap-1 hover:underline hover:underline-offset-4"
                  >
                    <Smartphone />
                    <span>+251 965067723</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="flex items-center md:gap-2 gap-1 hover:underline hover:underline-offset-4"
                  >
                    <Mail />
                    <span>info@creativehub.et</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="flex items-center md:gap-2 gap-1 hover:underline hover:underline-offset-4"
                  >
                    <Send />
                    <span>Get in touch</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-2">
              <span className="font-semibold uppercase">Sitemap</span>
              <ul className="-4 mt-3 grid grid-cols-1 gap-2">
                <li>
                  <Link href="/" className="hover:underline hover:underline-offset-4">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/posts" className="hover:underline hover:underline-offset-4">
                    Insights
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="hover:underline hover:underline-offset-4">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/partners" className="hover:underline hover:underline-offset-4">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:underline hover:underline-offset-4">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-full lg:col-span-1">
              <ul className="flex lg:gap-4 gap-4 md:gap-6 lg:flex-col ">
                <li>
                  <Link href="/">
                    <FacebookIcon />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <Twitter />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <Linkedin />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <Instagram />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <Youtube />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t px-4 py-6">
          <div className="text-left lg:text-center">
            Copyright &copy; {serverYear} Creative Hub Ethiopia | All rights reserved
          </div>
          <div className="text-left lg:text-center">
            Designed and developed by{' '}
            <Link
              href="https://rasinnovate.com"
              target="_blank"
              className="underline underline-offset-4"
            >
              Ras Innovate
            </Link>
          </div>
        </div>
      </footer>
      <Dialog />
    </>
  )
}

export default Footer
