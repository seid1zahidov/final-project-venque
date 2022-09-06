import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import './ModalCart.css'
import { Cart } from './Context'
import { AiOutlineClose } from 'react-icons/ai'
import 'swiper/css'
import "swiper/css/free-mode";


const Modalcard = ({ prod }) => {

    const [count, setCount] = useState(0);

    const { cart, setCart } = useContext(Cart)

    return (
        <div>
            <div className='Modalcart'>
                <div className="col-lg-5">
                    <img src={prod.image} alt={prod.name} />
                </div>
                <div className="col-lg-7">
                    <span>{prod.name}</span>
                    <p>${prod.price}</p>
                    <AiOutlineClose className='adds' onClick={() => { setCart(cart.filter(c => c._id !== prod._id)) }} />
                </div>
            </div>
        </div>
    )
}

export default Modalcard