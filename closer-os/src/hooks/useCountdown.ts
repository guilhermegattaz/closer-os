import { useState, useEffect } from 'react'

interface CountdownValues {
  days: number
  hours: number
  minutes: number
  seconds: number
  expired: boolean
}

export function useCountdown(targetDate: Date): CountdownValues {
  const calc = () => {
    const diff = targetDate.getTime() - Date.now()
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true }
    return {
      days:    Math.floor(diff / 86400000),
      hours:   Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
      expired: false,
    }
  }

  const [values, setValues] = useState<CountdownValues>(calc)

  useEffect(() => {
    if (values.expired) return
    const id = setInterval(() => setValues(calc()), 1000)
    return () => clearInterval(id)
  }, [values.expired])

  return values
}
