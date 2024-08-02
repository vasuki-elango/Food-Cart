import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Header } from "./Components/Header";
import {Home} from './Components/Home'
import {Cart} from './Components/Cart'
import { useState } from "react";

function App() {
  const  [cart,setCart] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Header cart={cart}/>
        <div className="container"></div>
          <Routes>
            <Route path="/" element={<Home cart={cart} setCart={setCart} />}/>
            <Route path="/Cart" element={<Cart cart={cart} setCart={setCart}/>}/>
          </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
