import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Burger = ({ show, closeModal }) => {
    if (!show) return null

    return (
        <div className='Burgerss'>
            <div className="overlay" onClick={closeModal}></div>
            <div className="contend">
                <ul className='burgerul'>
                    <li>AMOO APPAREL</li>
                    <li>Shop_All</li>
                    <li>COLLECTIONS</li>
                    <li>SUSTAINABILITY</li>
                    <li>SALE</li>
                    <Link to="/Technology">
                        <li>TECNOLOGY</li>
                    </Link>
                    <li>VENQUE COMMUNITY</li>
                    <Link to='/About'>
                        <li>ABOUT</li>
                    </Link>
                    <li>HELP</li>
                </ul>
                <AiOutlineClose className='burgers' onClick={closeModal} />



                <BsInstagram className='instagram' />
            </div>
        </div>
    )
}

export default Burger