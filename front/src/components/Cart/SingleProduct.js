import React from 'react'
import './style.css'
import { useContext } from 'react'
import {Cart} from '../../pages/Context'
const SingleProduct = ({prod}) => {


  const [cart , setCart] = useContext(Cart)



  return (
    <div className='products'>
        <img src={prod.image} alt={prod.name} />
        <div className="productsDesc">
        <span style={{fontWeight: 700}}>salam</span>
            <span>$ {prod.price.substring(0,3)}</span>
        </div>
        {cart.includes(prod) ? (
          <button className='add' onClick={() => {setCart(cart.filter(c => c.id !== prod._id))}}>Remove to Cart</button>
        ) : (
          <button className='add' onClick={() => {setCart([...cart, prod])}}>Add to Cart</button>
        )}
    </div>
  )
}

export default SingleProduct