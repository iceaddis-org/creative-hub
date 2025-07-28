'use client'
const targetDate = new Date('2025-07-31T11:00:00Z').getTime()
const getTimeLeft = () => {
  const now = Date.now()
  const diff = targetDate - now
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)
  return { days, hours, minutes, seconds }
}
import { useEffect, useState } from 'react'

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="grid gap-4 xl:grid-cols-12">
      <span className="flex flex-col items-start gap-4 xl:col-start-4 col-span-2">
        <span>Days</span>
        <span className="text-2xl font-semibold">
          {(timeLeft.days < 10 ? '0' : '') + timeLeft.days}
        </span>
      </span>
      <span className="flex flex-col items-start gap-4 col-span-2">
        <span>Hrs</span>
        <span className="text-2xl font-semibold">
          {(timeLeft.hours < 10 ? '0' : '') + timeLeft.hours}
        </span>
      </span>
      <span className="flex flex-col items-start gap-4 col-span-2">
        <span>Min</span>
        <span className="text-2xl font-semibold">
          {(timeLeft.minutes < 10 ? '0' : '') + timeLeft.minutes}
        </span>
      </span>
      <span className="hidden sm:flex flex-col items-end gap-4 col-span-3 col-end-13">
        <span>Sec</span>
        <span className="text-2xl font-semibold">
          {(timeLeft.seconds < 10 ? '0' : '') + timeLeft.seconds}
        </span>
      </span>
    </div>
  )
}

export default CountdownTimer
