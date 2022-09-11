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
                    <Link to='./Shop'>
                        <li>Shop_All</li>
                    </Link>
                    <li>COLLECTIONS</li>
                    <li>SUSTAINABILITY</li>
                    <li>SALE</li>
                    <Link to="/Technology">
                        <li>TECNOLOGY</li>
                    </Link>
                    <Link to='/Community'>
                    <li>VENQUE COMMUNITY</li>
                    </Link>
                    <Link to='/About'>
                        <li>ABOUT</li>
                    </Link>
                   <Link to='/Help'>
                    <li>HELP</li>
                   </Link>
                </ul>
                <AiOutlineClose className='burgers' onClick={closeModal} />
            </div>
        </div>
    )
}

export default Burger