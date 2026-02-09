import { useEffect } from 'react'
import './App.css'
import { Input } from './Components/input'
import { useState } from 'react'
import Default1 from './Components/Component/ExportDefault'
import { SecondExport, SingleExport } from './Components/Component/Export'

function App() {

  const [name,setName] = useState()
  // useEffect(()=>{
  //   console.log(name)
  // },[name])
  return (
    <>
      <Input/>
      <div className='components'>
        {/* <button>click here</button> */}
      </div>
    </>
  )
}

export default App
