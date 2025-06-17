'use client'

import { useCallback, useEffect, useRef } from 'react'

import Image from 'next/image'
import { X } from 'lucide-react'

const useJoinDialog = () => {
  const dialogRef = useRef<HTMLDialogElement>(null)

  const showDialog = useCallback(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal()
    }
  }, [])

  const hideDialog = useCallback(() => {
    if (dialogRef.current) {
      dialogRef.current.close()
    }
  }, [])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    dialog.addEventListener('click', (e) => {
      if (!dialogRef.current) return

      const dialogDimensions = dialog.getBoundingClientRect()
      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        dialogRef.current.close()
      }
    })

    return () => dialog.removeEventListener('click', () => {})
  })

  const Dialog = () => (
    <dialog
      ref={dialogRef}
      className="w-11/12 rounded-2xl backdrop:bg-foreground/40 backdrop:backdrop-blur-sm md:w-10/12 z-50"
    >
      <div className="grid grid-cols-12 gap-6 p-4">
        <div className="relative col-span-6 hidden aspect-video overflow-hidden rounded-2xl bg-muted lg:block lg:aspect-square">
          <Image
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="People working at Creative Hub Ethiopia"
            fill
          />
        </div>
        <div className="col-start-0 md:col-start-0 col-span-12 md:col-span-12 lg:col-span-6">
          <div className="flex flex-row-reverse">
            <button onClick={hideDialog}>
              <X />
            </button>
          </div>
          <h2 className="mt-6 font-display text-2xl font-medium uppercase leading-none tracking-tighter md:text-3xl">
            Join the creative community
          </h2>
          <form className="mt-4 text-[14px] md:text-base">
            <div className="flex flex-col gap-3 md:flex-row">
              <label className="flex flex-1 flex-col gap-1">
                <span>Name</span>
                <input
                  required
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-border px-4 py-2 focus:border-0 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                />
              </label>
              <label className="flex flex-1 flex-col gap-1">
                <span>Email</span>
                <input
                  required
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-border px-4 py-2 focus:border-0 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                />
              </label>
            </div>
            <label className="mt-3 flex flex-col gap-1">
              <span>Interests</span>
              <textarea
                placeholder="Let us know what you're passionate about"
                className="w-full rounded-lg border border-border px-4 py-2 focus:border-0 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                rows={3}
              />
            </label>
            <div className="mt-3 flex justify-end gap-2">
              <button
                onClick={hideDialog}
                className="rounded-full bg-muted px-6 py-3 leading-none md:px-6 md:py-3"
              >
                Close
              </button>
              <button
                type="button"
                className="rounded-full bg-primary px-6 py-3 leading-none md:px-6 md:py-3"
              >
                Join now
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  )

  return { Dialog, showDialog, hideDialog }
}

export default useJoinDialog
