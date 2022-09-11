import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Sidebars from  '../../Admin/sidebar/Sidebar'

const Addslider = () => {

    const history = useNavigate()

    const [inputs, setInputs] = useState({
        name: '',
        price: '',
        image: '',
        rate: ''
    })
    // http://localhost:3002/card
    const sendRequest = async () => {
        await axios.post('http://localhost:3002/card', {
            name: String(inputs.name),
            price: Number(inputs.price),
            image: String(inputs.image),
            rate: String(inputs.rate)
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
            <Sidebars />

            </div>
            <div className="col-lg-4 addslider container mt-5">
                <form onSubmit={handleSubmit}>
                    <p>Name</p>
                    <input value={inputs.name} onChange={handleChange} name='name' type='text' />
                    <p>Price</p>
                    <input value={inputs.price} onChange={handleChange} name='price' type='text' />
                    <p>Image</p>
                    <input type="text" value={inputs.image} onChange={handleChange} name='image' />
                    <p>Rate</p>
                    <input type="text" value={inputs.rate} onChange={handleChange} name='rate' /> <br /><br />
                    <input type="submit" value="Add Cart" />
                </form>
            </div>
        </div>
    )
}

export default Addslider