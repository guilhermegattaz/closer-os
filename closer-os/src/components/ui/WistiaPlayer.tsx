import { useEffect } from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wistia-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'media-id': string
        aspect?: string
      }
    }
  }
}

const MEDIA_ID = '2l92zhr9wx'

export function WistiaPlayer() {
  useEffect(() => {
    const addScript = (src: string, type?: string) => {
      if (document.querySelector(`script[src="${src}"]`)) return
      const s = document.createElement('script')
      s.src = src
      s.async = true
      if (type) s.type = type
      document.head.appendChild(s)
    }
    addScript('https://fast.wistia.com/player.js')
    addScript(`https://fast.wistia.com/embed/${MEDIA_ID}.js`, 'module')
  }, [])

  return (
    <>
      <style>{`
        wistia-player[media-id='${MEDIA_ID}']:not(:defined) {
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${MEDIA_ID}/swatch');
          display: block;
          filter: blur(5px);
          padding-top: 177.78%;
        }
      `}</style>
      <wistia-player media-id={MEDIA_ID} aspect="0.5625" />
    </>
  )
}
