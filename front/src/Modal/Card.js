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
                <Carts />
            </div>
            <div className="card__footer">
                <h1>{total}</h1>
            </div>
        </div>
    )
}

export default Card