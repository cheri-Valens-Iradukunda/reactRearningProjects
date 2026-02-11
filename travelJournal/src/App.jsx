import './App.css'
import { Header } from './Components/Header'
import { Card } from './Components/Card'
import { image1, image2, image3 } from './assets/Images'

function App() {

  const JournalData = [
    {location:"Japan",place: "Mount Fuji",img:image1},
    {location:"Australia",place: "Sydney Opera House",img:image2},
    {location:"Norway",place: "Geirangerfjord",img:image3},
  ]

  return (
    <>
      <Header />
      {
      JournalData.map((elem,index)=><Card key={index} image={elem.img} location={elem.location} placeName={elem.place} />)
      }

    </>
  )
}

export default App
