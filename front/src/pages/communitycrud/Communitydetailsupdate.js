import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Communitydetailsupdate = () => {

    const history = useNavigate();


    const [inputs, Setinputs] = useState({});

    const id = useParams().id


    useEffect(() => {
        const fetcHandler = async () => {
            await axios.get(`http://localhost:3002/Community1/${id}`)
                .then(res => res.data)
                .then(data => Setinputs(data.com1))
                .catch(err => console.log(err))
        }
        fetcHandler()
    }, [id])


    const handleSubmit = (e) => {
        sendRequest();
        sendRequest().then(() => history('/Communitydetails'));
    }

    const sendRequest = async () => {
        await axios.put(`http://localhost:3002/Community1/${id}`, {
            image: String(inputs.image),
        }).then(res => res.data.com1)
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
                <p>Image</p>
                <input type="text" value={inputs.image} onChange={handleChange} name='image' />
                <input type="submit" value="Add Slider" />
            </form>
        </div>
    )
}

export default Communitydetailsupdate