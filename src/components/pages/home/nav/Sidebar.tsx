'use client'
import { links } from '@/components/layout/Nav'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

const Sidebar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)

  // Handle dialog open/close
  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal()
      document.body.style.overflow = 'hidden' // Prevent background scrolling
    } else {
      dialogRef.current?.close()
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  // Close dialog on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 bg-primary text-white rounded-md"
        aria-label="Open menu"
      >
        <Menu />
      </button>

      {/* Mobile Dialog/Sidebar */}
      <dialog
        ref={dialogRef}
        className="w-full max-w-xs h-dvh m-0 p-0 bg-green-500 text-white shadow-lg backdrop:bg-black/50 backdrop:backdrop-blur-sm"
        onClick={(e) => e.target === dialogRef.current && setIsOpen(false)}
      >
        <div className="h-full w-64 bg-red-500">
          <div className="p-4 flex justify-between items-center border-b border-gray-700">
            <h2 className="text-xl font-bold">Navigation</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full hover:bg-gray-700"
              aria-label="Close menu"
            >
              <X />
            </button>
          </div>

          <div className="flex flex-col gap-6 p-4">
            {links.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`)
              return (
                <Link
                  onClick={() => setIsOpen(false)}
                  key={link.name}
                  href={link.href}
                  className={`font-medium tracking-wider text-inherit hover:text-primary transition-colors ${isActive && 'text-primary'}`}
                >
                  {link.name}
                </Link>
              )
            })}
          </div>
        </div>
      </dialog>
    </>
  )
}

export default Sidebar
