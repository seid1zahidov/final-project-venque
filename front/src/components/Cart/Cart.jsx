import React, { useContext, useEffect, useState } from 'react'
import SingleProduct from './SingleProduct'
import '../../pages/Context'

const Cart = () => {
  const [total, setTotal] = useState()

  const {cart} = useContext(Cart)

  useEffect(() => {
    setTotal(cart.reduce((acc,curr) => acc + Number(curr.price), 0))
  }, [cart])


  return (
    <div>
      <span style={{ fontSize:30 }}>My Cart</span>
      <br />
      <span style={{ fontSize:30 }}>Total: USD.{total}</span>
      <div className='productContainer'>{cart.map(prod => (
        <SingleProduct prod={prod} key={prod.id}/>
      ))}</div>
    </div>
  )
}

export default Cart