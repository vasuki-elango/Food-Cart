import React, { useContext } from 'react'
import './Product.css'
import { CardContext } from '../App';


export const Product = ({product}) => {
  const {cart,setCart} = useContext(CardContext);
  const name = product.name.length > 21?product.name.substring(0,20)+"..":product.name;
  const addCart=()=>{
    setCart([...cart,product]);
  }
  const RemoveCart=()=>{
    setCart(cart.filter((c)=>c.id!==product.id));
  }
  return (
    <>
      <div className='product'>
        <div className="product-img">
          <img src={product.pic} alt="" />
        </div>
        <div className="product-details">
          <h3>{name}</h3>
            <p className="price">Rs:{product.amt}</p>
            {
              cart.includes(product) ?
              <button className='removebtn' onClick={RemoveCart}>Reomove Cart</button>:
              <button onClick={addCart}>Add Cart</button>
            }
          </div>
      </div>
    </>
  )
}
