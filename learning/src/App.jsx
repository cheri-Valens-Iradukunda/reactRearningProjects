import { useEffect } from 'react'
import './App.css'
import { Input } from './Components/input'
import { useState } from 'react'

function App() {

  const [name,setName] = useState()
  useEffect(()=>{
    console.log(name)
  },[name])
  return (
    <>
      <Input setName = {setName} />
    </>
  )
}

export default App
