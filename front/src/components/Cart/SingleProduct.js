import React, { useContext } from 'react'
import './style.css'
import './Home'
import { Cart } from './Context'
import './Cart.css'
import "swiper/css/free-mode";
// s
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'

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
      <Stack direction="row" spacing={2}>
        {cart.includes(prod) ? (
          <button type='button' className='btn btn-secondary btn-sm' onClick={() => { setCart(cart.filter(c => c._id !== prod._id)) }}>
            Remove to cart
          </button>
        ) : (
          <button type='button' className='btn btn-secondary btn-sm' onClick={() => { setCart([prod]) }}>
            Add to cart
          </button>
        )}

      </Stack>

    </div>
  )
}
// 
// 
export default SingleProduct