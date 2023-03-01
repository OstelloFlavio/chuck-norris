import { useState } from 'react'
import '../styles/button.css'

function button() {

  return (
    <div className="button">
      <p><button href="https://api.chucknorris.io/jokes/random">Carica un joke random</button></p>
    </div>
  )
}

export default button