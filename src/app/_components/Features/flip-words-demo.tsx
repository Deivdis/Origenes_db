import React from 'react'

import { FlipWords } from '../ui/flip-words'

export function FlipWordsDemo() {
  const words = ['Brillar', 'Crecer', 'Prosperar', 'Jugar']

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-neutral-600 text-xs sm:text-base">
        Está en tu naturaleza
        <FlipWords words={words} /> <br />
      </div>
    </div>
  )
}
