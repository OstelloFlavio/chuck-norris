import { useState } from 'react'
import '../styles/Button.css'

function Button() {

  return (
    <div className="Button">
      <p><button href="https://api.chucknorris.io/jokes/random">Carica un joke random</button></p>
    </div>
  )
}

export default Button