import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import SideBarDropDown from '../../Admin/sidebar/Sidebaar/SideBarDropDown ';

const Supportupdate = () => {

    const history = useNavigate();


    const [inputs, Setinputs] = useState({});
  
    const id = useParams().id
  
  
    useEffect(() => {
      const fetcHandler = async () => {
        await axios.get(`http://localhost:3002/support/${id}`)
          .then(res => res.data)
          .then(data => Setinputs(data.support))
          .catch(err => console.log(err))
      }
      fetcHandler()
    }, [id])
  
  
    const handleSubmit = (e) => {
      sendRequest();
      sendRequest().then(() => history('/Admin'));
    }
    const sendRequest = async () => {
      await axios.put(`http://localhost:3002/support/${id}`, {
        idi: String(inputs.idi),
        author: String(inputs.author),
        text: String(inputs.text)
      }).then(res => res.data.support)
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
          <p>id</p>
          <input type="text" value={inputs.idi} onChange={handleChange} name='idi' />
          <p>Title</p>
          <input type="text" value={inputs.author} onChange={handleChange} name='author' />
          <p>Text</p>
          <input type="text" value={inputs.text} onChange={handleChange} name='text' />
          <input type="submit" value="Add Slider" />
        </form>
      </div>
    </div>
  </div>
  )
}

export default Supportupdate