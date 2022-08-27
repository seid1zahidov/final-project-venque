import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const Home = () => {
  const [cart  , Setcart] = useState([])

  useEffect(() => {
   axios.get('http://localhost:3005/Cart')
    .then(cart => Setcart(cart.data.cart))
   .catch(e => console.log(e))
  },[])

   console.log(cart.images);
  // const productsArray = [...cart(20)].map(() => ({
  //   id: faker.datatype.uuid(),
  //   name: faker.commerce.productName(),
  //   price: faker.commerce.price(),
  //   image: faker.random.image(),
  // }))

  return (
      
    <div>dfsafgvdfg</div>
    
  )
}

export default Home