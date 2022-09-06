import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import Carts from '../components/Cart/Carts'

const Card = ({ show, closeModal }) => {

    if (!show) return null

    return (
        <div>
            <div className="overlay" onClick={closeModal}></div>
            <div className="cartcontend">
                <div className="col-lg-6 cartleft">
                    <h3>Cart</h3>
                </div>
                <div className="col-lg-6">
                    <AiOutlineClose className='cart' onClick={closeModal} />
                </div>

            </div>
            <div>
                <hr className='carthr' />
                <form className='cartfrom' action="">
                    <input type="radio"/>
                    <label>Congratulations! Your order qualifies for free shipping</label>

                </form>
                <hr className='carthrr' />

            </div>
            
            <Carts />
        </div>
    )
}

export default Card