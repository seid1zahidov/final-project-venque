import { React, useState, useEffect } from 'react'
import Axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
const Cartupdate = () => {
    const history = useNavigate()

    const [inputs, setInputs] = useState({})
    let {id} = useParams();
    useEffect(() => {   
        const fetchHandler = async () => {
            await Axios.get(`http://localhost:3002/cart/${id}`)
                .then(res => res.data)
                .then(res => setInputs(res.cart))
                .catch(e => console.log(e))
        }
        fetchHandler();
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest();
        sendRequest().then(() => history('/Admin'));
    }

    const sendRequest = async () => {
        await Axios.put(`http://localhost:3002/cart`, {
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

    return (
        <div>

            <div className="col-lg-4 addslider container mt-5">
                <form onSubmit={handleSubmit}>
                    <h1 className="heading">Update Slider</h1>
                    <p>Title</p>
                    <input value={inputs.name} onChange={handleChange} name='title' type='text' />
                    <p>Description</p>
                    <input value={inputs.price} onChange={handleChange} name='description' type='text' />
                    <p>Image</p>
                    <input type="text" value={inputs.image} onChange={handleChange} name='image' />
                    <input type="submit" value="Add Slider" />
                </form>
            </div>
        </div>
    )
}


export default Cartupdate