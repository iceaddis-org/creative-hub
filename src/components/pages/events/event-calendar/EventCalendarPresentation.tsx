'use client'

import { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'
import { SectionTitle } from '@/components/ui'
import { twMerge } from 'tailwind-merge'

interface Event {
  id: string
  dateTime: string
  duration: number
  title: string
  description: string
  imageUrl: string
}

interface EventCalendarPresentationProps {
  events: Event[]
}

const EventCalendarPresentation: React.FC<EventCalendarPresentationProps> = ({ events = [] }) => {
  const currentMonthIndex = new Date().getMonth()
  const [selectedMonth, setSelectedMonth] = useState(currentMonthIndex)
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const filteredEvents = useMemo(
    () =>
      events
        .filter((event): event is Event => {
          return Boolean(
            event &&
              event.id &&
              event.title &&
              event.dateTime &&
              event.imageUrl &&
              !isNaN(new Date(event.dateTime).getTime()),
          )
        })
        .filter((event) => {
          const eventDate = new Date(event.dateTime)
          return eventDate.getMonth() === selectedMonth
        }),
    [events, selectedMonth],
  )

  useEffect(() => {
    if (filteredEvents.length > 0 && filteredEvents[0]) {
      setSelectedEvent(filteredEvents[0])
    } else {
      setSelectedEvent(null)
    }
  }, [filteredEvents, selectedMonth])

  return (
    <div className="py-12">
      <SectionTitle sectionName="Event Calendar" sectionTitle="Timeline of Great Happenings" />
      <div className="mt-10 grid grid-cols-1 gap-4 px-4 md:px-8 lg:grid-cols-12">
        <div className="relative order-2 col-span-12 overflow-hidden lg:order-1 lg:col-span-6">
          <div className="flex h-full w-full flex-col gap-2 overflow-hidden lg:absolute">
            <form>
              <select
                id="months"
                className="block w-full rounded-lg bg-muted p-7 pr-10 leading-none appearance-none focus:border-2 focus:border-primary focus:outline-none focus:ring-primary bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+')] bg-no-repeat bg-[center_right_0.75rem]"
                value={months[selectedMonth]}
                onChange={(e) => setSelectedMonth(months.indexOf(e.target.value))}
              >
                {months.map((month, index) => (
                  <option key={index} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </form>

            {filteredEvents.length > 0 ? (
              <ul className="h-full space-y-3 overflow-y-auto">
                {filteredEvents.map((event) => {
                  const eventDate = new Date(event.dateTime)
                  const formattedDate = eventDate.toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })
                  const startTime = eventDate.toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })
                  const endTime = new Date(
                    eventDate.getTime() + event.duration * 60000,
                  ).toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })

                  return (
                    <li
                      key={event.id}
                      className={twMerge(
                        'cursor-pointer space-y-2 rounded-2xl p-4 leading-none transition-colors',
                        selectedEvent?.id === event.id ? 'bg-primary' : 'bg-muted text-foreground',
                      )}
                      onClick={() => setSelectedEvent(event)}
                    >
                      <div className="font-semibold">
                        <span className="text-lg">{formattedDate}</span>
                        <span className="text-base">
                          {' '}
                          {startTime} - {endTime}
                        </span>
                      </div>
                      <div className="text-base">{event.title}</div>
                    </li>
                  )
                })}
              </ul>
            ) : (
              <div className="flex h-full items-center justify-center text-muted-foreground">
                No events found for {months[selectedMonth]}
              </div>
            )}
          </div>
        </div>

        <div className="order-1 col-span-12 lg:order-2 lg:col-span-6">
          {selectedEvent ? (
            <div className="relative col-span-12 aspect-[3/5] overflow-hidden rounded-2xl md:aspect-[5/3] lg:aspect-[11/10]">
              <Image
                src="/images/event/event-5.png"
                alt="Event background"
                className="z-0 h-full w-full object-cover"
                priority
                width={500}
                height={500}
              />
              <div className="absolute inset-0 z-10 flex flex-col justify-end bg-gradient-to-bl from-black/40 to-black/80 p-8">
                <div className="space-y-3">
                  <div className="w-fit rounded-md bg-background p-2 text-sm font-medium leading-none">
                    {new Intl.DateTimeFormat('en-US', {
                      dateStyle: 'medium',
                      timeStyle: 'short',
                    }).format(new Date(selectedEvent.dateTime))}
                  </div>
                  <div className="font-display text-xl font-medium leading-none tracking-tighter text-background md:text-3xl">
                    {selectedEvent.title}
                  </div>
                  <div className="line-clamp-2 text-background opacity-60 2xl:leading-normal">
                    {selectedEvent.description}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex aspect-square w-full items-center justify-center rounded-2xl bg-muted text-muted-foreground">
              Select an event to view details
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default EventCalendarPresentation
