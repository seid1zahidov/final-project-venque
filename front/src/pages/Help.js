import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import '../assets/page/Help.css'

const Help = () => {

  const [helpimg, Sethelpimg] = useState()

  useEffect(() => {
    const Helpimages = () => {
      axios.get('http://localhost:3002/Help')
        .then(res => res.data)
        .then(r => Sethelpimg(r.help))
        .catch(error => console.log(error))
    }
    Helpimages()
  }, [])
  console.log(helpimg);
  return (
    <section>
      <section id='Help_main_top'>
        <div>
          {
            helpimg && helpimg.map((x => (
              <img src={x.image} alt="" />
            )))
          }
          <div className="help_main_top_img_text">
            <h1>WE'RE HERE TO HELP</h1>
            <p>Let us know how we can help you by completing the form. We typically respond in 1-2 business days.</p>
            <button>DROP US A LINE</button>
          </div>
          
        </div>
      </section>
    </section>
  )
}

export default Help