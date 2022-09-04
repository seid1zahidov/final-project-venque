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
            await axios.get(`http://localhost:3002/cart/${id}`)
                .then(res => res.data)
                .then(data => Setinputs(data.cart))
                .catch(err => console.log(err))
        }
        fetcHandler()
    }, [id])


    const handleSubmit = (e) => {
        sendRequest();
        sendRequest().then(() => history('/cartdetails'));
    }

    const sendRequest = async () => {
        await axios.put(`http://localhost:3002/cart/${id}`, {
            name: String(inputs.name),
            price: Number(inputs.price),
            image: String(inputs.image)
        }).then(res => res.data.cart)
    }


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
                <input type="submit" value="Add Slider" />
            </form>
        </div>
    )
}


export default Cartupdate