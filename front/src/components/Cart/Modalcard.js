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
        <div className="rowss">
            <div className="col-12 modal_card_main">
                <div className="modal__card__main_left col-lg-3">
                    <img src={prod.image} alt={prod.name} />
                </div>
                <div className="modal__card__main_right col-lg-9">
                    <div className="modal_card_main_right_text">
                        <span>{prod.name}</span>
                        <p> ${prod.price}.00</p>
                        <p> {prod.rate}</p>
                    </div>
                    <AiOutlineClose className='adds' onClick={() => { setCart(cart.filter(c => c._id !== prod._id)) }} />
                </div>
            </div>
        </div>

    )
}

export default Modalcard