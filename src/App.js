import React from 'react';

import './App.css';

import "./components/header.css"
import Header from './components/Header';

//Sidebar import
import'./components/sidebar.css';
import Sidebar from './components/Sidebar';

import "./components/carousel.css"
import  Carousel from './components/Carousel';

import { useState } from 'react';



function App() {
  const [isOpen, setIsOpen] = useState (true);
  const [cart, setCart] = useState([]); // State to track items in the cart

  return (
    <div className="App">
      <header>
        <Header
        cart={cart}
        setCart={setCart}/>
      </header>
      <div className='bigFlex'>
        <main>
          <Carousel 
          setIsOpen={setIsOpen} 
          isOpen={isOpen}
          cart={cart}
          setCart={setCart}/>
        </main>
      </div>
    </div>
  );
}

export default App;
