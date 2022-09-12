import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../assets/page/Community.css'

const Community = () => {
  const [top, Settop] = useState()
  const [img1, Setim1] = useState()
  const [img2, Setim2] = useState()
  useEffect(() => {
    const com1 = () => {
      axios.get('http://localhost:3002/Community1')
        .then(res => Settop(res.data.com1))
        .catch(e => console.log(e))
    }
    com1()
  })
  useEffect(() => {
    const com1 = () => {
      axios.get('http://localhost:3002/Community2')
        .then(res => Setim1(res.data.com2))
        .catch(e => console.log(e))
    }
    com1()
  })
  useEffect(() => {
    const com1 = () => {
      axios.get('http://localhost:3002/Community3')
        .then(res => Setim2(res.data.com3))
        .catch(e => console.log(e))
    }
    com1()
  })
  return (
    <section id='Community_main'>
      <p>10% OFF ON FIRST ORDER</p>
      <section id='Cominity_main_top_phot'>
        {
          top && top.map((x => (
            <div className='com_main_top_first'>
              <img src={x.image} alt="" />
            </div>
          )))
        }
      </section>

      <section>
        <div className='Community_img1'>
          <div className="col-lg-6 Community_img1_left">
            {
              img1 && img1.map((x => (
                <div className='com_main_top_first_img '>
                  <img src={x.image} alt="" />
                </div>
              )))
            }
          </div>
          <div className="col-lg-6 Community_img1_right">
            <h1>ANDY</h1>
            <span>Andy is a Los Angeles, USA-based photographer specializing in travel and landscape photography. He has traveled to many  </span>
            <span>locations with our backpacks (Transit Travel Pro, Metro Classic, Campus Classic, and Alpine Rucksack).</span> <br />
            <button>@ANDYHVU</button>
          </div>
        </div>
      </section>
      <section>
        <div className='Community_img2'>
          <div className="col-lg-6 Community_img1_left">
            {
              img2 && img2.map((x => (
                <div className='com_main_top_first_img2 '>
                  <img src={x.image} alt="" />
                </div>
              )))
            }
          </div>
          <div className="col-lg-6 Community_img1_right">
            <h1>ANDY</h1>
            <span>Andy is a Los Angeles, USA-based photographer specializing in travel and landscape photography. He has traveled to many  </span>
            <span>locations with our backpacks (Transit Travel Pro, Metro Classic, Campus Classic, and Alpine Rucksack).</span> <br />
            <button>@ANDYHVU</button>
          </div>
        </div>
      </section>

    </section>
  )
}

export default Community