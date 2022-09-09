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

const Shop = ({ prod }) => {
  const [img, Setimg] = useState()
  const { cart, setCart } = useContext(Cart)

  useEffect(() => {
    const Shopimage = async () => {
      axios.get('http://localhost:3002/shopimg')
        .then(r => r.data)
        .then(d => Setimg(d.shopimg))
        .catch(e => console.log(e))
    }
    Shopimage()
  }, [])

  const [show, setShow] = useState(false)


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
          <BsSortDown />
        </div>
      </section>

      <section id='Shop'>

      </section>

    </section>
  )
}

export default Shop