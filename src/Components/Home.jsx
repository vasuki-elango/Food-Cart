import React, { useState } from 'react'
import data from '../assests/food.json'
import { Product } from './Product'
import './Home.css'

export const Home = ({cart,setCart}) => {
  const [products] = useState(data);
  return (
    <>
      <h1 className='title'>Products</h1>
       <div className='product-container'>
        {products.map((product)=>(
          <Product key={product.id} product={product} cart={cart} setCart={setCart}/>
        ))}
      </div>
    </>
  )
}
