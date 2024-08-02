import React, { useEffect, useState } from 'react'
import './Cart.css'

export const Cart = ({product,cart,setCart}) => {
  const [total,setTotal] = useState(0);
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc+parseInt(curr.amt),0))
  },[cart])
  return (
    <>
    <h1 className='title'>Cart Products</h1>
      <div className='cart-container'>
        {
          cart.map((product)=>(
          <div className="card-product" key={product.id}>
          <div className="card-product-img">
            <img src={product.pic} alt="img" />
          </div>
          <div className="card-product-details">
              <h3>{product.name}</h3>
              <p className="price">Rs:{product.amt}</p>
          </div>
        </div>
          ))
        }
      </div>
      {
        total===0?<h2 className='total'> </h2>:
        <div  className='total'>
          <h3>Total Amount</h3>
          <h2 >Rs:{total}</h2>
        </div>
      }
      </>
  )
}
