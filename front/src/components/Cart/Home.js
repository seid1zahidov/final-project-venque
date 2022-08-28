import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import './style.css'
import SingleProduct from './SingleProduct'
const Home = () => {
  const [cartt  , Setcart] = useState([])

  useEffect(() => {
   axios.get('http://localhost:3005/Cart')
    .then(cart => Setcart(cart.data.cart))
    .catch(e => console.log(e))
  },[])

  console.log(cartt);




  return (
      
    <div>
      {
        cartt && cartt.slice(0,20).map((prod => (
          <SingleProduct prod = {prod} key = {prod._id} />
        )))
      }
    </div>
    
  )
}

export default Home