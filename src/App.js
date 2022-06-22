import React from 'react';
import './App.css';

//Firebase - FireStore
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from './firebase/firebaseConfig';

//Componentes
import  NavBar  from './Components/NavBar/NavBar';
import  ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import  PurchaseDetail  from './Components/PurchaseDetail/PurchaseDetail';
//Views
import  Cart  from './Views/Cart/Cart';
//Dependencias
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// 4 Importo mi hoc provider para que envuelva a la app
import { CartProvider } from './Context/CartContext';
import Home from './Views/Home/Home';



const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="App">
        <NavBar/>
        <Routes>
            <Route path="/" element ={<Home/>}/>
            <Route path="/category/:categoryId" element ={<ItemListContainer/>}/>
            <Route path="/item/:id" element ={<ItemDetailContainer/>}/>  {/* Ruta dinamica */}  
            <Route path="/cart" element = {<Cart/>}/>
            <Route path="/cart/purchase" element= {<PurchaseDetail/>}/>   
        </Routes>
        </div>
      </Router>
    </CartProvider>

  );
}

export default App;
