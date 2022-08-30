import React, { useContext, useState } from 'react'
import './Header.css'
import {GiHamburgerMenu} from 'react-icons/gi';
import {BsPerson} from 'react-icons/bs';
import {BsBasketFill} from 'react-icons/bs';
import {AiOutlineSearch} from 'react-icons/ai';
import Burger from '../../Modal/Burger';
import { Link } from 'react-router-dom';
import { Cart } from '../Cart/Context';
import Card from '../../Modal/Card';


const Header = () => {
  const [show , setShow] = useState(false)
  const [carts , CartShow] = useState(false)
  const {cart} = useContext(Cart)

  return (
    <header id='header'>
          <div className='containers '>
         <div className="row headerss align-items-center">
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
            <div className="col-lg-2 col-4 headerright text-end">
                <BsPerson className='person' />
                <BsBasketFill className='righticon' onClick={() => CartShow((s) => !s)}/>
                   <Card  show={carts} closeModal ={() => CartShow(false)} />
                  ({cart.length})
            </div>
         </div>
    </div>
    </header>
  )
}

export default Header