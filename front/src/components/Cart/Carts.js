import React, { useContext, useEffect, useState } from 'react'
import { Cart } from './Context'
import './Cart.css'
import SingleProduct from './SingleProduct'
import Card from '../../Modal/Card'
import Home from './Home'
import Modalcard from './Modalcard'

const Carts = () => {
  const [total, setTotal] = useState()

  const { cart } = useContext(Cart)

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0))
  }, [cart])


  return (
    <div className='seidd'>
      <div>

        <div className='productContainer'>{cart.map(prod => (
          <Modalcard prod={prod} key={prod.id} />
        ))}</div>

        
      </div>
      <div className="cardmodalbottom">
          <span>My Cart</span>
          <br />
          <span>Total: USD.{total} $</span>
        </div>
    </div>
  )
}

export default Carts