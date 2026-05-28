import { useEffect, useRef } from 'react'

export function useFadeUp<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    el.classList.add('fade-up')
    obs.observe(el)

    return () => obs.disconnect()
  }, [])

  return ref
}
