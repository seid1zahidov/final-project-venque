import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import './cartdetail.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';

const Cartdetails = () => {

    const history = useNavigate();

    const [slider, Setslider] = useState([])

    const slider_arr = slider && slider.map(item => {
        return item._id
    })


    useEffect(() => {
        axios.get('http://localhost:3002/cart')
            .then(res => Setslider(res.data.cart))
            .catch(error => console.log(error))
    }, [])


    return (
        <div className='cartdetails'>
            <div className="col-lg-3">
            </div>
            <div className="col-lg-9">
                {slider && slider.map((sliderss, __id) => (
                    <tbody>
                        <tr key={sliderss._id}>
                            <td className='w-25'>
                                <td>{sliderss.name}</td>

                            </td>
                            <td>{sliderss.price}</td>
                            <img src={sliderss.image} className="img-fluid img-thumbnail" alt={sliderss.name} />

                            <NavLink to={`/cartupdate/${slider_arr[__id]}`} onClick={async() => {
                                await axios.put(`http://localhost:3002/cart/${slider_arr[__id]}`)
                                    .then(res => res.data.cart)
                            }} className="me-1 btn btn1 btndel">Update</NavLink>
                        </tr>
                    </tbody>
                ))
                }
            </div>
        </div>
    )
}

export default Cartdetails