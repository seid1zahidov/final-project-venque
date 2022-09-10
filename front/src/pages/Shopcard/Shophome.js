import React, { useContext } from 'react'
import { Cart } from '../../components/Cart/Context'
import './Shops.css'

const Shophome = ({ prod }) => {
  const { cart, setCart } = useContext(Cart)

    console.log(prod);
  return (
    <div className="col-lg-3">
      <div className='Shopprod'>
    <img src={prod.image} alt={prod.name} />
    <div className="Shopdescription">
      <span>{prod.name}</span>
      <span>{prod.rate}</span>
      <p>${prod.price}.00</p>
    </div>
    {cart.includes(prod) ? (
      <button className='Shopadd' onClick={() => { setCart(cart.filter(c => c._id !== prod._id)) }}>Remove to Carts</button>
    ) : (
      <button className='Shopadd' onClick={() => { setCart([...cart, prod]) }}>Add to Carts</button>
    )}
  </div>
    </div>
  )
}

export default Shophome