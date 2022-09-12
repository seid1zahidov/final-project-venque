import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import './Helpcrud.css'
import SideBarDropDown from '../../Admin/sidebar/Sidebaar/SideBarDropDown ';

const Helpupdate = () => {
    const history = useNavigate();


    const [inputs, Setinputs] = useState({});

    const id = useParams().id


    useEffect(() => {
        const fetcHandler = async () => {
            await axios.get(`http://localhost:3002/Help/${id}`)
                .then(res => res.data)
                .then(data => Setinputs(data.help))
                .catch(err => console.log(err))
        }
        fetcHandler()
    }, [id])


    const handleSubmit = (e) => {
        sendRequest();
        sendRequest().then(() => history('/Helpdetails'));
    }

    const sendRequest = async () => {
        await axios.put(`http://localhost:3002/Help/${id}`, {
            image: String(inputs.image),
        }).then(res => res.data.help)
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
        <SideBarDropDown/>

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

export default Helpupdate