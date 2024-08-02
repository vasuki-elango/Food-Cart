import React from 'react'
import {Link} from 'react-router-dom'
import '../Components/Header.css'

export const Header = ({cart}) => {
  return (
    <header>
        <div className="logo">FoodCart</div>
        <div className='navbar'>
          <Link to={"/"} className='navitem'>Home</Link>
          {
            cart.length===0?<Link to={"/Cart"} className='navitem item-cart'><i className='bx bxs-cart-alt' style={{color:'#fff'}}></i></Link>:
            <Link to={"/Cart"} className='navitem item-cart'><span>{cart.length}</span>
          <i className='bx bxs-cart-alt' style={{color:'#fff'}}></i></Link>
          }
      </div>
    </header>
  )
}
