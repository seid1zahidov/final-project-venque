import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import Carts from '../components/Cart/Carts'
import { Cart } from '../components/Cart/Context'
import './modal.css'

const Card = ({ show, closeModal }) => {

    const [total, setTotal] = useState()

    const { cart } = useContext(Cart)

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0))
    }, [cart])


    if (!show) return null


    return (
        <div className='card'>
            <div className="card__header">
                <div className="col-lg-6 card__headear_left">
                    <h3>CART</h3>
                    <AiOutlineClose className='card__header_right_icon' onClick={closeModal} />
                </div>
            </div>
            <div className="card__body">
                <hr />
                <div className="card_body_text">
                    <input type="radio" />
                    <h6>Congratulations! Your order qualifies for free shipping</h6>
                </div>
                <hr />
                <Carts />
            </div>
            <div className="card__footer">
                <div className="card_footer_flex">
                    <h5>SUBTOTAL</h5>
                    <p>Shipping, taxes, and discount codes are calculat</p>
                    <span>${total}.00</span>
                </div>
                <button>Checkout</button>
            </div>
        </div>
    )
}

export default Card