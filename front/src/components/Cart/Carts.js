import React, { useContext, useEffect, useState } from 'react'
import SingleProduct from './SingleProduct'
import {Cart} from './Context'

const Carts = () => {
    const [total, setTotal] = useState()

    const {cart} = useContext(Cart)
  
    useEffect(() => {
      setTotal(cart.reduce((acc,curr) => acc + Number(curr.price), 0))
    }, [cart])


  return (
    <div>
        <div>
      <span>My Cart</span>
      <br />
      <span>Total: USD.{total}</span>
      <div className='productContainer'>{cart.map(prod => (
        <SingleProduct prod={prod} key={prod.id}/>
      ))}</div>
    </div>
    </div>
  )
}

export default Carts