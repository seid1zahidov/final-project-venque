import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import '../../assets/page/shop.css'
import { BsFilter } from 'react-icons/bs';
import { BsSortDown } from 'react-icons/bs';
import Shopfilter from '../../Modal/Shopfilter';
import { AiOutlineClose } from 'react-icons/ai';
import { Cart } from '../../components/Cart/Context';
import SingleProduct from '../../components/Cart/SingleProduct'
import ShoopcartImage from './ShoopcartImage';
import '../../components/Cart/Cart.css'
import Shopmap from './Shopmap';
import Shophome from './Shophome';
import Short from '../../Modal/Short';

const Shop = () => {
  const [img, Setimg] = useState()

  useEffect(() => {
    const Shopimage = async () => {
      axios.get('http://localhost:3002/shopimg')
        .then(r => r.data)
        .then(d => Setimg(d.shopimg))
        .catch(e => console.log(e))
    }
    Shopimage()
  }, [])


  const [cart, setCart] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/card')
      .then(cart => setCart(cart.data.card))
      .catch(e => console.log(e))
  }, [])

  const [show, setShow] = useState(false)
  const [showe, setShowe] = useState(false)


  return (
    <section id='shop'>
      <section className="shop_header_top">
        <div className="col-lg-6 shop_header_top_left">
          {
            img && img.map((x => (
              <img src={x.image} alt="" />
            )))
          }
        </div>
        <div className="col-lg-6 shop_header_top_right">
          <span>VENQUE</span>
          <h1>FOR URBAN LIFESTYLE</h1>
          <p>VENQUE Bags are made from 80% recycled materials, diverting resources from landfill. Because durability is key to <br /> sustainability, each bag features aluminium hardware and the world's most trusted YKK zips. 10 trees are planted for every <br />backpack purchased.</p>
        </div>
      </section>


      <section className='shop_modal'>
        <div className="shop_modal_left col-lg-6">
          <span>FILTER</span>
          <BsFilter className='menu' onClick={() => setShow((s) => !s)} />
          <Shopfilter show={show} closeModal={() => setShow(false)} />
        </div>
        <div className="shop_modal_right col-lg-6 text-end">
          <span>SORT BY</span>
          <BsSortDown onClick={() => setShowe((s) => !s)} />
          <Short show={showe} closeModal={() => setShowe(false)} />
        </div>
      </section>

      <section id='Shopcart'>
        {cart && cart.map((prod => (
          <Shophome prod={prod} key={prod._id} />
        )))}

      </section>
    </section>
  )
}

export default Shop