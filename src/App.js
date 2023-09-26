import React from 'react';

import './App.css';

import "./components/header.css"
import Header from './components/Header';



//Sidebar import
import'./components/sidebar.css';
import Sidebar from './components/Sidebar';



function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <div className='bigFlex'>
        <Sidebar/> 
        <main>
          <card/>
        </main>
      </div>
    </div>
  );
}


export default App;
