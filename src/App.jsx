import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'

import Fooder from './components/Fooder/Fooder'
import Conteiner from './components/Contents/Conteiner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Conteiner />
       
     
     <Fooder />
    </>
  )
}

export default App
