import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../assets/page/Community.css'

const Community = () => {
  const [top , Settop] = useState()
  useEffect(() => {
    const com1 = () => {
      axios.get('http://localhost:3002/Community1')
      .then(res => Settop(res.data.com1))
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
          )) )
        }
      </section>
    </section>
  )
}

export default Community