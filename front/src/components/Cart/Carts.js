import React, { useContext, useEffect, useState } from 'react'
import { Cart } from './Context'
import './Cart.css'
import SingleProduct from './SingleProduct'
import Card from '../../Modal/Card'
import Home from './Home'
import { AiOutlineClose } from 'react-icons/ai'
import Modalcard from './Modalcard'

const Carts = () => {
  const [total, setTotal] = useState()

  const { cart } = useContext(Cart)


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