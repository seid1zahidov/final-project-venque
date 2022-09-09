import React, {  useEffect, useState } from 'react'
import './Cart.css'
import Modalcard from './Modalcard'
import axios from 'axios'

const Carts = () => {
  const [cart, setCart] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/cart')
      .then(cart => setCart(cart.data.cart))
      .catch(e => console.log(e))
  }, [])


  return (
    <div className='cartList'>
      <div className='col-lg-12'>
        <div className='productContainer'>{cart.map(prod => (
          <Modalcard prod={prod} key={prod.id} />
        ))}</div>
      </div>

    </div>
  )
}

export default Carts