import React, { useContext } from 'react'
import './style.css'
import './Home'
import { Cart } from './Context'
import './Cart.css'
const SingleProduct = ({ prod }) => {


  const { cart, setCart } = useContext(Cart)




  return (
      <div className='products'>
        <img src={prod.image} alt={prod.name} />
        <div className="productsDesc">
          <h1 style={{ fontWeight: 700 }}>{prod.name}</h1>
          <p style={{ fontWeight: 700 }}>{prod.price}</p>
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