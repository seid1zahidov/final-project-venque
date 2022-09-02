import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Addslider = () => {

    const history = useNavigate()

    const [inputs, setInputs] = useState({
        name: '',
        price: '',
        image: ''
    })

    const sendRequest = async () => {
        await axios.post('http://localhost:3002/cart', {
            name: String(inputs.name),
            price: Number(inputs.price),
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
            </div>
            <div className="col-lg-4 addslider container mt-5">
                <form onSubmit={handleSubmit}>
                    <p>Name</p>
                    <input value={inputs.name} onChange={handleChange} name='name' type='text' />
                    <p>Price</p>
                    <input value={inputs.price} onChange={handleChange} name='price' type='text' />
                    <p>Image</p>
                    <input type="text" value={inputs.image} onChange={handleChange} name='image' /> <br /> <br />
                    <input type="submit" value="Add Slider" />
                </form>
            </div>
        </div>
    )
}

export default Addslider