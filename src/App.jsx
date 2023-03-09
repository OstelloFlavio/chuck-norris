import { useState } from 'react'
import './styles/App.css'
import Title from './components/Title.jsx'
import Button from './components/Button.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Title></Title>
      <Button callback={clickHandler}></Button>
    </div>
  )
}

export default App
