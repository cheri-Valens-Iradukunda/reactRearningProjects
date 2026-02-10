import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './Components/Header'
import { Card } from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Card image="imag1" location="Japan" placeName="Mount Fuji" />
      <Card image="image2" location="Australia" placeName="Sydney Opera House" />
      <Card image="image3" location="Norway" placeName="Geirangerfjord" />
    </>
  )
}

export default App
