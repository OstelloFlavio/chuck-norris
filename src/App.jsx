import { useState } from 'react'
import '../styles/App.css'
import title from './components/title.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <title></title>
    </div>
  )
}

export default App
