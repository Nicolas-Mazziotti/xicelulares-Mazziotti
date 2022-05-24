import React from 'react';
import './App.css';

//Componentes
import  NavBar  from './Components/NavBar/NavBar';
import  ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
//Views
import { Cart } from './Views/Home/Cart/Cart';
//Dependencias
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';


const App = () => {
  return (
    <Router>
      <div className="App">
      <NavBar/>
      <Routes>
          <Route path="/" element ={<ItemListContainer/>}/>
          <Route path="/category/:categoryId" element ={<ItemListContainer/>}/>
          <Route path="/item/:id" element ={<ItemDetailContainer/>}/>  {/* Ruta dinamica */}  
          <Route path="/cart" element = {<Cart/>}/>   
      </Routes>
      </div>
    </Router>

  );
}

export default App;
