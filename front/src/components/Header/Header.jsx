import React, { useContext, useEffect, useState } from 'react'
import './Header.css'
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsPerson } from 'react-icons/bs';
import { BsBasketFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import Burger from '../../Modal/Burger';
import { Link } from 'react-router-dom';
import { Cart } from '../Cart/Context';
import Card from '../../Modal/Card';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import axios from 'axios';
import SingleProduct from '../Cart/SingleProduct';


const Header = () => {
  const [showe, setShowe] = useState(false)
  const [carts, CartShow] = useState(false)
  const { cart } = useContext(Cart)

  const [search, setSearch] = useState("")


  const SearcHandler = (e) => {
    setSearch(e.target.value)
  }

  const filteredProducst = cart.filter(card => card.name.toLowerCase().includes(search.toLowerCase()))

  // <AiOutlineSearch className='search  ms-5' />`  
  const [cartt, setCart] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/card')
      .then(cart => setCart(cart.data.card))
      .catch(e => console.log(e))
  }, [])
  const [visible, setVisible] = useState(12)


  return (
    <header id='header'>
      <div className='containers '>
        <div className="row headerss align-items-center">
          <div className="col-lg-2 col-4 text-start d-flex">
            <Burger />
            <AiOutlineSearch class="search ms-5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" />
            <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
              <div class="offcanvas-header">
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                {filteredProducst && filteredProducst.slice(0, visible).map((cardss) => ((
                  <SingleProduct prod={cardss} key={cardss._id} />
                )))}
                <input onChange={SearcHandler} className="search" type="text" placeholder="search" />

              </div>
            </div>
          </div>
          <div className="col-lg-8 col-4 text-center headercenter">
            <Link to="/" >
              <img className='text-center' src="https://cdn.shopify.com/s/files/1/1592/8017/files/logo_file_160x.png?v=1540930515" alt="sekil" />
            </Link>
          </div>
          <div className="col-lg-2 col-4 headerright text-end">
            <Link to='/login'>
              <BsPerson className='person' />
            </Link>
            <BsBasketFill className='righticon' onClick={() => CartShow((s) => !s)} />
            <Card show={carts} closeModal={() => CartShow(false)} />
            ({cart.length})
          </div>
        </div>
      </div>
    </header>
  )
}



export default Header