import React, { useContext } from 'react'
import './style.css'
import './Home'
import { Cart } from './Context'
import './Cart.css'
import "swiper/css/free-mode";


const SingleProduct = ({ prod }) => {


  const { cart, setCart } = useContext(Cart)


  // ffcc6a

  return (
    <div className='products'>
      <img src={prod.image} alt={prod.name} />
      <div className="productsDesc">
        <span>{prod.name}</span>
        <p>${prod.price}.00</p>
        <p className='rate'>{prod.rate}</p>
      </div>
      {cart.includes(prod) ? (
        <button className='add' onClick={() => { setCart(cart.filter(c => c._id !== prod._id)) }}>Remove to Carts</button>
      ) : (
        <button className='add' onClick={() => { setCart([...cart, prod]) }}>Add to Carts</button>
      )}
    </div>
  )
}

export default SingleProduct