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
      </div>
    </div>
  )
}

export default Shophome