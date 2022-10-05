import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../assets/page/Community.css'

const Community = () => {
  const [top, Settop] = useState()
  const [img1, Setim1] = useState()
  const [img2, Setim2] = useState()
  const [img3, Setim3] = useState()
  const [img4, Setim4] = useState()
  const [img5, Setim5] = useState()
  const [img6, Setim6] = useState()
  const [img7, Setim7] = useState()
  const [img8, Setim8] = useState()
  const [img9, Setim9] = useState()


  useEffect(() => {
    const com1 = () => {
      axios.get('http://localhost:3002/Community1')
        .then(res => Settop(res.data.com1))
        .catch(e => console.log(e))
    }
    com1()
  }, [])
  useEffect(() => {
    const com1 = () => {
      axios.get('http://localhost:3002/Community2')
        .then(res => Setim1(res.data.com2))
        .catch(e => console.log(e))
    }
    com1()
  }, [])
  useEffect(() => {
    const com1 = () => {
      axios.get('http://localhost:3002/Community3')
        .then(res => Setim2(res.data.com3))
        .catch(e => console.log(e))
    }
    com1()
  }, [])
  useEffect(() => {
    const com1 = () => {
      axios.get('http://localhost:3002/Community4')
        .then(res => Setim3(res.data.com4))
        .catch(e => console.log(e))
    }
    com1()
  }, [])
  useEffect(() => {
    const com1 = () => {
      axios.get('http://localhost:3002/Community5')
        .then(res => Setim4(res.data.com5))
        .catch(e => console.log(e))
    }
    com1()
  }, [])
  useEffect(() => {
    const com1 = () => {
      axios.get('http://localhost:3002/Community6')
        .then(res => Setim5(res.data.com6))
        .catch(e => console.log(e))
    }
    com1()
  }, [])
  useEffect(() => {
    const com1 = () => {
      axios.get('http://localhost:3002/Community7')
        .then(res => Setim6(res.data.com7))
        .catch(e => console.log(e))
    }
    com1()
  }, [])

  useEffect(() => {
    const com1 = () => {
      axios.get('http://localhost:3002/Community9')
        .then(res => Setim7(res.data.com8))
        .catch(e => console.log(e))
    }
    com1()
  }, [])
  useEffect(() => {
    const com1 = () => {
      axios.get('http://localhost:3002/Community10')
        .then(res => Setim8(res.data.com9))
        .catch(e => console.log(e))
    }
    com1()
  }, [])
  useEffect(() => {
    const com1 = () => {
      axios.get('http://localhost:3002/Community12')
        .then(res => Setim9(res.data.com11))
        .catch(e => console.log(e))
    }
    com1()
  }, [])
  return (
    <section id='Community_main'>
      <p>10% OFF ON FIRST ORDER</p>
      <section id='Cominity_main_top_phot  '>
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
          <div className="col-lg-6 Community_img1_left ">
            {
              img1 && img1.map((x => (
                <div className='com_main_top_first_img '>
                  <img src={x.image} alt="" />
                </div>
              )))
            }
          </div>
          <div className="col-lg-6 Community_img1_right ">
            <h1>ANDY</h1>
            <span>Andy is a Los Angeles, USA-based photographer specializing in travel and landscape photography. He has traveled to many  </span>
            <span>locations with our backpacks (Transit Travel Pro, Metro Classic, Campus Classic, and Alpine Rucksack).</span> <br />
            <button>@ANDYHVU</button>
          </div>
        </div>
      </section>
      <section>
        <div className='Community_img2'>
          <div className="col-lg-6 Community_img1_left form order-2">
            {
              img2 && img2.map((x => (
                <div className='com_main_top_first_img2 '>
                  <img src={x.image} alt="" />
                </div>
              )))
            }
          </div>
          <div className="col-lg-6 Community_img1_right2">
            <h1>ANDY</h1>
            <span>Andy is a Los Angeles, USA-based photographer specializing in travel and landscape photography. He has traveled to many  </span>
            <span>locations with our backpacks (Transit Travel Pro, Metro Classic, Campus Classic, and Alpine Rucksack).</span> <br />
            <button>@ANDYHVU</button>
          </div>
        </div>
      </section>
      <section>
        <div className='Community_img2'>
          <div className="col-lg-6 Community_img1_left ">
            {
              img3 && img3.map((x => (
                <div className='com_main_top_first_img2 '>
                  <img src={x.image} alt="" />
                </div>
              )))
            }
          </div>
          <div className="col-lg-6 Community_img1_right3">
            <h1>ANDY</h1>
            <span>Andy is a Los Angeles, USA-based photographer specializing in travel and landscape photography. He has traveled to many  </span>
            <span>locations with our backpacks (Transit Travel Pro, Metro Classic, Campus Classic, and Alpine Rucksack).</span> <br />
            <button>@ANDYHVU</button>
          </div>
        </div>
      </section>

      <section>
        <div className='Community_img2'>
          <div className="col-lg-6 Community_img1_left form order-2 ">
            {
              img4 && img4.map((x => (
                <div className='com_main_top_first_img2 '>
                  <img src={x.image} alt="" />
                </div>
              )))
            }
          </div>
          <div className="col-lg-6 Community_img1_right4">
            <h1>ANDY</h1>
            <span>Andy is a Los Angeles, USA-based photographer specializing in travel and landscape photography. He has traveled to many  </span>
            <span>locations with our backpacks (Transit Travel Pro, Metro Classic, Campus Classic, and Alpine Rucksack).</span> <br />
            <button>@ANDYHVU</button>
          </div>
        </div>
      </section>
      <section>
        <div className='Community_img2'>
          <div className="col-lg-6 Community_img1_left  ">
            {
              img5 && img5.map((x => (
                <div className='com_main_top_first_img2 '>
                  <img src={x.image} alt="" />
                </div>
              )))
            }
          </div>
          <div className="col-lg-6 Community_img1_right5">
            <h1>ANDY</h1>
            <span>Andy is a Los Angeles, USA-based photographer specializing in travel and landscape photography. He has traveled to many  </span>
            <span>locations with our backpacks (Transit Travel Pro, Metro Classic, Campus Classic, and Alpine Rucksack).</span> <br />
            <button>@ANDYHVU</button>
          </div>
        </div>
      </section>
      <section>
        <div className='Community_img2'>
          <div className="col-lg-6 Community_img1_left form order-2 ">
            {
              img6 && img6.map((x => (
                <div className='com_main_top_first_img2 '>
                  <img src={x.image} alt="" />
                </div>
              )))
            }
          </div>
          <div className="col-lg-6 Community_img1_right6">
            <h1>ANDY</h1>
            <span>Andy is a Los Angeles, USA-based photographer specializing in travel and landscape photography. He has traveled to many  </span>
            <span>locations with our backpacks (Transit Travel Pro, Metro Classic, Campus Classic, and Alpine Rucksack).</span> <br />
            <button>@ANDYHVU</button>
          </div>
        </div>
      </section>

      <section id='Cominity_main_top_phot  '>
        {
          img7 && img7.map((x => (
            <div className='com_main_top_first1_son1'>
              <img src={x.image} alt="" />
            </div>
          )))
        }
        <div className="community_photo_text">
          <h2>JOIN US</h2>
          <span>For collaboration, please contact to @venque on Instagram</span> <br /> <br />
          <button>@VENQUE</button>
        </div>

      </section>
      <section id='Cominity_main_top_phot  '>
        {
          img8 && img8.map((x => (
            <div className='com_main_bottom_first1_son1'>
              <img src={x.image} alt="" />
            </div>
          )))
        }
        <div className="community_photo_text_bottom">
          <h2>VENQUE Influencer / Affiliate Program</h2>
          <span>Check out two ways to get involved</span> <br /> <br />
          <button>LEARN MORE</button>
        </div>
      </section>

      <section id='com_bottom_card'>
        <div className="Blog_post">
          <h4>Blog posts</h4>
        </div>
        <div className='Communiy_card'>
          {
            img9 && img9.map((x => (
                <div className="col-lg-4 Community_card_fininsh">
                  <img src={x.image} alt={x.title} />
                  <span className='mt-1'>{x.title}</span>
                  <h6 className='mt-3'>{x.text}</h6>
                </div>
            )))
          }
        </div>
      </section>

    </section>
  )
}

export default Community