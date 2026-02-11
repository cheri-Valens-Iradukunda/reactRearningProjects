import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { FunFact } from './components/FunFacts'
import { Fragment } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Header />
      <main className='ml-5'>
        <h2 className='text-3xl my-10 text-white font-semibold'>Fun facts about React</h2>
        <ul>
          <FunFact fact="was first released in 2013" />
          <FunFact fact="was originary created by jordan walke" />
          <FunFact fact="was first released in 2013" />
          <FunFact fact="was originary created by jordan walke" />
        </ul>
      </main>
    </>
  )
}

export default App
