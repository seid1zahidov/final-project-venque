import React, { useContext } from 'react'
import { Cart } from '../components/Cart/Context'
import Shop from './Shop'

const ShoopcartImage = () => {


  const { cart } = useContext(Cart)



  return (
    <div className='cartList'>
      <div className='col-lg-12'>
        <div className='productContainer'>{cart.map(prod => (
          <Shop prod={prod} key={prod.id} />
        ))}</div>
      </div>
      
    </div>
  )
}

export default ShoopcartImage