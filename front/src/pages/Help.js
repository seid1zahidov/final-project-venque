import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

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
    <div>
      {
        helpimg && helpimg.map((x => (
          <img src={x.image} alt="" />
        )))
      }
    </div>
  )
}

export default Help