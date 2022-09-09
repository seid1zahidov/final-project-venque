import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Cart } from '../../components/Cart/Context'
import Shop from './Shop'

const ShoopcartImage = () => {


  const [cart, setCart] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/cart')
      .then(cart => setCart(cart.data.cart))
      .catch(e => console.log(e))
  }, [])



  return (
    <div>
      {cart && cart.slice(0, 7).map((prod => (
          <Shop prod={prod} key={prod._id} />

      )))}
    </div>
  )
}

export default ShoopcartImage