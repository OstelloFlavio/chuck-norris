import { useState } from 'react'
import './styles/App.css'
import Title from './components/Title.jsx'
import Button from './components/Button.jsx'

function App() {
  const [joke, setJoke] = useState("")

  let loadJokeCallback = function (){
    console.log("carica joke");
    setJoke("testo joke");
  }

  let copyTextCallback = function (){
    console.log("copiato")
  }

  return (
    <div className="App">
      {joke}
      <Title />
      <Button text='Carica il joke' callback={loadJokeCallback}/>
      <Button text='Copia il joke' variant={ joke === "" ? "disabled" : undefined}callback={copyTextCallback}/>
    </div>
  )
}

export default App
