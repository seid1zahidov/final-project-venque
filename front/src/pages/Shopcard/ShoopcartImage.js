import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Card } from '../../components/Cart/Context'
import Shop from './Shop'
import Shophome from './Shophome'

const ShoopcartImage = () => {


  const [cart, setCart] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3002/card')
      .then(cart => setCart(cart.data.card))
      .catch(e => console.log(e))
  }, [])


  return (
    <div>
      {cart && cart.map((prod => (
          <Shophome prod={prod} key={prod._id} />
      )))}
    </div>
  )
}

export default ShoopcartImage