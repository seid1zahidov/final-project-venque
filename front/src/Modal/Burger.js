import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { GiHamburgerMenu } from 'react-icons/gi';


const Burger = () => {
    // if (!show) return null
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <GiHamburgerMenu className='menu' variant="primary" onClick={handleShow} />

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className='ms-5'><AiOutlineSearch className='search' /></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
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
                            <Link to='/Faqpage'>
                                <li>Faq</li>
                            </Link>
                        </ul>
                </Offcanvas.Body>
            </Offcanvas>

        </div>
    )
}



export default Burger