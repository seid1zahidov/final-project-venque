import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import './style.css'
import SingleProduct from './SingleProduct'
const Home = () => {
  const [cart  , setCart] = useState([])

  useEffect(() => {
   axios.get('http://localhost:3005/Cart')
    .then(cart => setCart(cart.data.cart))
    .catch(e => console.log(e))
  },[])


  console.log(cart);

  return (
    <div>
      {
        cart && cart.map((e) => {
          <SingleProduct prod={e} key = {e._id} />
        })
      }
    </div>
    
  )
}

export default Home