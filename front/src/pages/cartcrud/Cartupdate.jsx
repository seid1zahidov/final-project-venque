import { React, useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import './Cartupdate.css'
const Cartupdate = () => {


    const history = useNavigate();


    const [inputs, Setinputs] = useState({});

    const id = useParams().id
    

    useEffect(() => {
        const fetcHandler = async () => {
            await axios.get(`http://localhost:3002/card/${id}`)
                .then(res => res.data)
                .then(data => Setinputs(data.card))
                .catch(err => console.log(err))
        }
        fetcHandler()
    }, [id])


    const handleSubmit = (e) => {
        sendRequest();
        sendRequest().then(() => history('/cartdetails'));
    }

    const sendRequest = async () => {   
        await axios.put(`http://localhost:3002/card/${id}`, {
            name: String(inputs.name),
            price: Number(inputs.price),
            image: String(inputs.image),
            rate: String(inputs.rate)
        }).then(res => res.data.card)
    }

    // http://localhost:3002/card
    const handleChange = (e) => {
        Setinputs((prevstate) => ({
            ...prevstate,
            [e.target.name]: e.target.value
        }))
    }

    return (

        <div className='seid'>
            <form onSubmit={handleSubmit}>
                <h1 className="heading">Update Slider</h1>
                <p>Name</p>
                <input value={inputs.name} onChange={handleChange} name='name' type='text' />
                <p>Price</p>
                <input value={inputs.price} onChange={handleChange} name='price' type='text' />
                <p>Image</p>
                <input type="text" value={inputs.image} onChange={handleChange} name='image' />
                <p>Rate</p>
                <input type="text" value={inputs.rate} onChange={handleChange} name='rate' />
                <input type="submit" value="Add Slider" />
            </form>
        </div>
    )
}


export default Cartupdate