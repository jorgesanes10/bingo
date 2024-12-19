import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BingoBoard from './components/BingoBoard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BingoBoard />
    </>
  )
}

export default App
