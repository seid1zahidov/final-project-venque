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



  return (
    <div>
      {cart && cart.map((prod => (
        <SingleProduct  prod={prod} key={prod._id} />
      )))}
    </div>
    
  )
}

export default Home