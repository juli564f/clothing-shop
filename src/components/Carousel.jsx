import "../components/carousel.css"


//Dette er billederne til de forskellige kort som er importeret. 
import Hoodie from "./hoodie-png-4-3601372402.png"
import Pants from "./bukser.png"
import Shirt from "./shirt.png"


import Carditem from "./Carditem";
import { useState } from "react";



export default function Carousel(){
  //Dette er vores datapunkt
  const cardDummyData = [
    {
      img: Hoodie,
      title: 'Hoodie',
      text: 'Rød bomulds hættetrøje',
      size:'Medium',
      price: 450, 
    },
    {
      img: Pants,
      title:'Pants',
      text: 'Jeans',
      size: 'Medium',
      price: 350,
      
    },
    {
      img: Shirt,
      title:'T-shirt',
      text: 'Orange t shirt',
      size: 'Medium',
      price: 150,
    },

  ]

  const [clothing, setClothing] = useState(cardDummyData);


  return(
    <div className="cards">
      {clothing.map(item =>{
        return <Carditem item={item} />
      })}
    </div>
  )
}
