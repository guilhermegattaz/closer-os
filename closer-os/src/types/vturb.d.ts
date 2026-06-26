import 'react'

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'vturb-smartplayer': React.HTMLAttributes<HTMLElement> & { id?: string }
    }
  }
}
