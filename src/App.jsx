import { useState, Fragment } from 'react'
import './App.css'
import Monoalphabetic from './Components/Monoalphabetic/Monoalphabetic'
import CipherProvider from './Components/store/CipherProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <CipherProvider>
      <Monoalphabetic/>
    </CipherProvider>
  )
}

export default App
