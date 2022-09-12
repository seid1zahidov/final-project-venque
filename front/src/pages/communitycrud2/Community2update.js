import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import SideBarDropDown from '../../Admin/sidebar/Sidebaar/SideBarDropDown ';
import './Community2.css'

const Community2update = () => {

    const history = useNavigate();


    const [inputs, Setinputs] = useState({});

    const id = useParams().id


    useEffect(() => {
        const fetcHandler = async () => {
            await axios.get(`http://localhost:3002/Community2/${id}`)
                .then(res => res.data)
                .then(data => Setinputs(data.com2))
                .catch(err => console.log(err))
        }
        fetcHandler()
    }, [id])


    const handleSubmit = (e) => {
        sendRequest();
        sendRequest().then(() => history('/Communitydetails1'));
    }

    const sendRequest = async () => {
        await axios.put(`http://localhost:3002/Community2/${id}`, {
            image: String(inputs.image),
        }).then(res => res.data.com2)
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
                        <input type="submit" value="Add Slider" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Community2update