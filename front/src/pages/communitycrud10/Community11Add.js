import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SideBarDropDown from '../../Admin/sidebar/Sidebaar/SideBarDropDown '

const Community11Add = () => {

    const history = useNavigate()

    const [inputs, setInputs] = useState({
        image: ''
    })

    const sendRequest = async () => {
        await axios.post('http://localhost:3002/Community12', {
            image: String(inputs.image),
            title: String(inputs.title),
            text: String(inputs.text)
        }).then(res => res.data)
    }

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(() => history('/Admin'));
    }


  return (
    <div className='Addsliderrow justify-content-center'>
    <div className='col-lg-2'>
        <SideBarDropDown />
    </div>
    <div className="col-lg-4 addslider container mt-5">
        <form onSubmit={handleSubmit}>
            <p>Image</p>
            <input type="text" value={inputs.image} onChange={handleChange} name='image' /> <br /> <br />
            <p>Title</p>
            <input type="text" value={inputs.title} onChange={handleChange} name='title' /> <br /> <br />
            <p>Text</p>
            <input type="text" value={inputs.text} onChange={handleChange} name='text' /> <br /> <br />
            <input type="submit" value="Add IMAGE" />
        </form>
    </div>
</div>
  )
}

export default Community11Add