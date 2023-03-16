import { useState } from 'react'
import '../styles/Joke.css'

function Joke(props) {

  return (
    <div className="Joke">
        <b><p id={props.id}>{props.children}</p></b>
    </div>
  )
}

export default Joke