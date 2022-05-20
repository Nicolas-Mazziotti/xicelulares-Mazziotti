import React from 'react';
import './App.css';

//Componentes
import  NavBar  from './Components/NavBar/NavBar';
import  ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Home from './Views/Home/Home'
//Dependencias
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Celulares from './Views/Home/Celulares/Celulares';
import Accesorios from './Views/Home/Accesorios/Accesorios';


const App = () => {
  return (
    <Router>
      <div className="App">
      <NavBar/>
      <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path="/celulares" element ={<Celulares/>}/>
          <Route path="/accesorios" element ={<Accesorios/>}/>
          {/* Ruta dinamica */}
          <Route path="/detail/:id" element ={<ItemDetailContainer/>}/>  

          
      </Routes>
      </div>
    </Router>

  );
}

export default App;
