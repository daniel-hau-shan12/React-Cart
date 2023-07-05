import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';
import Fruits from './Components/Fruits';
import Vegetables from './Components/Vegetables';
import Help from './Components/Help';
import Navbar from './Components/navbar';
import Produced from './Components/Produced';
import './index.css';
import Cart from "./Cart";
import {CartProvider} from 'react-use-cart';



class  App extends React.Component{
  render(){
    return (
        <>  
        <CartProvider>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fruits" element={<Fruits />} />
            <Route path="/vegetables" element={<Vegetables />} />
            <Route path="/help" element={<Help />} />
            <Route path="/products" element={<Produced />} />
          </Routes>

         <Cart />
         </CartProvider>
        </>
        
    );
  };
}




export default App;
