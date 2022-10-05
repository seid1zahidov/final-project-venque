import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Cart } from '../../components/Cart/Context'
import './Shops.css'
const Shophome = ({ prod }) => {
  const navigate = useNavigate()

  const { cart, setCart } = useContext(Cart)

  console.log(prod);
  return (
    <div className="col-lg-3">
      <div className='Shopprod'>
        <img src={prod.image} alt={prod.name} />
        <div className="Shopdescription">

          <span onClick={() => navigate(`/product/${prod._id}`)}>{prod.name}</span>

          <span>{prod.rate}</span>
          <p>${prod.price}.00</p>
        </div>
        {cart.includes(prod) ? (
          <button type='button' className='btn btn-secondary btn-sm ms-4' onClick={() => { setCart(cart.filter(c => c._id !== prod._id)) }}>Remove to Carts</button>
        ) : (
          <button type='button' className='btn btn-secondary btn-sm ms-4' onClick={() => { setCart([...cart, prod]) }}>Add to Carts</button>
        )}
      </div>
    </div>
  )
}

export default Shophome