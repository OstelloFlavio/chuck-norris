import { useState } from 'react'
import './styles/App.css'
import Title from './components/Title.jsx'
import Button from './components/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Title></Title>
      <Button></Button>
    </div>
  )
}

export default App
