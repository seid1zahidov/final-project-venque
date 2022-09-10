import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './style.css'
import SingleProduct from './SingleProduct'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper'
import 'swiper/css'
import "swiper/css/free-mode";

const Home = () => {
  const [cart, setCart] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/card')
      .then(cart => setCart(cart.data.card))
      .catch(e => console.log(e))
  }, [])
  return (
    <div className='cartflex '>
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          }
        }}
      >
        {cart && cart.slice(0, 7).map((prod => (
          <SwiperSlide>
            <SingleProduct prod={prod} key={prod._id} />

          </SwiperSlide>
        )))}

      </Swiper>

    </div>


  )
}
export default Home