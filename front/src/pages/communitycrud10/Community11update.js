import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import SideBarDropDown from '../../Admin/sidebar/Sidebaar/SideBarDropDown ';

const Community11update = () => {

    const history = useNavigate();


    const [inputs, Setinputs] = useState({});
  
    const id = useParams().id
  
  
    useEffect(() => {
      const fetcHandler = async () => {
        await axios.get(`http://localhost:3002/Community12/${id}`)
          .then(res => res.data)
          .then(data => Setinputs(data.com11))
          .catch(err => console.log(err))
      }
      fetcHandler()
    }, [id])
  
  
    const handleSubmit = (e) => {
      sendRequest();
      sendRequest().then(() => history('/Admin'));
    }
    const sendRequest = async () => {
      await axios.put(`http://localhost:3002/Community12/${id}`, {
        image: String(inputs.image),
        title: String(inputs.title),
        text: String(inputs.text)
      }).then(res => res.data.com11)
    }
    const handleChange = (e) => {
      Setinputs((prevstate) => ({
        ...prevstate,
        [e.target.name]: e.target.value
      }))
    }

  return (
    <div>
    <div className="col-lg-2">
      <SideBarDropDown />
    </div>
    <div className="col-lg-10">
      <div className='seid'>
        <form onSubmit={handleSubmit}>
          <h1 className="heading">Update Slider</h1>
          <p>Image</p>
          <input type="text" value={inputs.image} onChange={handleChange} name='image' />
          <p>Title</p>
          <input type="text" value={inputs.title} onChange={handleChange} name='title' />
          <p>Text</p>
          <input type="text" value={inputs.text} onChange={handleChange} name='text' />
          <input type="submit" value="Add Slider" />
        </form>
      </div>
    </div>
  </div>
  )
}

export default Community11update