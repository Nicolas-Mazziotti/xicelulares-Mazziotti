import React from 'react';
import './App.css';
import  NavBar  from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
     <NavBar/>
     <ItemListContainer greeting="Tienda Virtual Xi Celulares"/>

    </div>
  );
}

export default App;
