import React, { useContext } from 'react'
import './style.css'
import './Home'
import { Cart } from '../../pages/Context'
const SingleProduct = ({prod}) => {
  

  const {cart,setCart} = useContext(Cart)




  return (
    <div className='products'>
        <img src={prod.images} alt={prod.name} />
        <div className="productsDesc">
        <span style={{fontWeight: 700}}>{prod.name}</span>
        </div>
        {cart.includes(prod) ? (
          <button className='add' onClick={() => {setCart(cart.filter(c => c._id !== prod._id))}}>Remove to Carts</button>
        ) : (
          <button className='add' onClick={() => {setCart([...cart, prod])}}>Add to Carts</button>
        )}
       
    </div>
  )
}

export default SingleProduct