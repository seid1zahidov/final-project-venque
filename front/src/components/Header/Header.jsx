import React, { useContext, useState } from 'react'
import './Header.css'
import {GiHamburgerMenu} from 'react-icons/gi';
import {BsPerson} from 'react-icons/bs';
import {BsBasketFill} from 'react-icons/bs';
import {AiOutlineSearch} from 'react-icons/ai';
import Burger from '../../Modal/Burger';
import { Link } from 'react-router-dom';
import { Cart } from '../../pages/Context';


const Header = () => {
  const [show , setShow] = useState(false)
  const {cart} = useContext(Cart)

  return (
    <header id='header'>
          <div className='containers '>
         <div className="row align-items-center">
            <div className="col-lg-2 col-4 text-start">
            <GiHamburgerMenu className='menu' onClick={() => setShow((s) => !s)}/>
                   <Burger  show={show} closeModal ={() => setShow(false)} />
                <AiOutlineSearch className='search'/>
            </div>
            <div className="col-lg-8 col-4 text-center headercenter">
              <Link to="/" >
                <img className='text-center' src="https://cdn.shopify.com/s/files/1/1592/8017/files/logo_file_160x.png?v=1540930515" alt="sekil" />

              </Link>
            </div>
            <div className="col-lg-2 col-4 text-end">
                <BsPerson className='person' />
                <Link to="/basket">
                  <BsBasketFill className='righticon' />
                  ({cart.length})
                </Link>
            </div>
         </div>
    </div>
    </header>
  )
}

export default Header