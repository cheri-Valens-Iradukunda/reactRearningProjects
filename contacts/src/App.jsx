import { imag4, image1, image2, image3 } from "./assets/ImagesExport"
import { Card } from "./Card"

function App() {

  let CardDatas = [
    {phone:"250-781 234 567",name: "Mr. Whiskerson", email: "abcd@gmail.com",img:image1},
    {phone:"250-781 234 567",name: "Fluffykins", email: "fluffykins@gmail.com",img:image2},
    {phone:"250-781 234 567",name: "Felix", email: "felix@gmail.com",img:image3},
    {phone:"250-781 234 567",name: "Pumpkin", email: "pumpkin@gmail.com",img:imag4},
  ]

  return (
    <div className="grid md:grid-cols-3 grid-cols-2 gap-5 mt-10 mx-15">
      {
        CardDatas.map((elem,index)=>(
          <Card key={index} {...elem}/>
        ))
      }
    </div>
  )
}

export default App
