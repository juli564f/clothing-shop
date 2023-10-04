import "../components/carousel.css"


//Dette er billederne til de forskellige kort som er importeret. 
import Hoodie from "./hoodie-png-4-3601372402.png"
import Pants from "./bukser.png"
import Shirt from "./shirt.png"

//import af componentet Carditem 
import Carditem from "./Carditem";
import { useState } from "react";

// cardDummyData. indholdet bliver sat ind Carditem formen. 
//i cardDummyData er der forskellige objekter, hver objekt indeholder img, title, text, size og price.
// setIsOpen, isOpen gør at kortene (objekterne) er åbne fra start af
// cart, setCart linker den sammen med setIsOpen, isOpen

export default function Carousel({setIsOpen, isOpen, cart, setCart}){
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

  const addToCart = (item) => {
    setCart([...cart, item]); // Add the item to the cart
  };
// fjerner item (objekter) fra listen
// setClothing(updatedClothing) updatere listen
  const removeFromList = (item) => {
    const updatedClothing = clothing.filter((clothingItem) => clothingItem !== item);
    setClothing(updatedClothing);
  };
// kortet med dens indhold, og funktioner der gør at den fjernes fra main til cart
  return(
    <div className="cards">
      {clothing.map(item =>{
        return <Carditem 
        item={item} 
        setIsOpen={setIsOpen} 
        isOpen={isOpen}
        addToCart={addToCart}
        removeFromList={removeFromList} />
      })}
    </div>
  )
}


  

