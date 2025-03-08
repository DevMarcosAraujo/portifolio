import { useState } from 'react'
import './App.css'  // Certifique-se de que a fonte é importada corretamente no CSS
import Header from './components/Header/Header'
import Fooder from './components/Fooder/Fooder'
import Conteiner from './components/Conteiner/Conteiner'
import { useSpring, animated } from "@react-spring/web";

function App() {
  const [count, setCount] = useState(0)
  const styles = useSpring({
  });
  return (
    <>
     
      <Header />
      < Conteiner />
      <Fooder />
    </>
  )
}

export default App
