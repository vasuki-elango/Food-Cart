import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Header } from "./Components/Header";
import {Home} from './Components/Home'
import {Cart} from './Components/ViewCart'
import { createContext, useState } from "react";

export const CardContext = createContext();

function App() {
  const  [cart,setCart] = useState([]);

  return (
    <CardContext.Provider value={{cart,setCart}}>
      <BrowserRouter>
        <Header cart={cart}/>
        <div className="container"></div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Cart" element={<Cart/>}/>
          </Routes>
      </BrowserRouter>
      
    </CardContext.Provider>
  );
}

export default App;
