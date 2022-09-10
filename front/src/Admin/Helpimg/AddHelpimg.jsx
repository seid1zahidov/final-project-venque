import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'


const AddHelpimg = () => {


    const history = useNavigate()

    const [inputs, setInputs] = useState({
        image: ''
    })

    const sendRequest = async () => {
        await axios.post('http://localhost:3002/Help', {
            image: String(inputs.image)
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
    <Sidebar />

    </div>
    <div className="col-lg-4 addslider container mt-5">
        <form onSubmit={handleSubmit}>
            <p>Image</p>
            <input type="text" value={inputs.image} onChange={handleChange} name='image' /> <br /> <br />
            <input type="submit" value="Add IMAGE" />
        </form>
    </div>
</div>
  )
}

export default AddHelpimg