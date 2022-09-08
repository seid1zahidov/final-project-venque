import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import './cartdetail.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Sidebar from '../../Admin/sidebar/Sidebar';

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

    console.log(slider);
    return (

       <div className="cartddetails">
        <div className="col-lg-2">
        <Sidebar />
        </div>
         <div className="col-lg-10 cartdetail">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Image</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Update</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {slider.map((row, __id) => (
                                <TableRow
                                    key={row._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        <img className='cartdetailimg' src={row.image} alt={row.name} />
                                    </TableCell>
                                    <TableCell align="right">{row.name}</TableCell>
                                    <TableCell align="right">{row.price}</TableCell>
                                    <TableCell align="right">
                                        <NavLink to={`/cartupdate/${slider_arr[__id]}`} onClick={async() => {
                                            await axios.put(`http://localhost:3002/cart/${slider_arr[__id]}`)
                                                .then(res => res.data.cart)
                                        }} className=" btn btn-warning" >Update</NavLink>
                                    </TableCell>
                                    <TableCell align="right">
                                    <NavLink to={`/Admin/${slider_arr[__id]}`} onClick={async() => {
                                            await axios.delete(`http://localhost:3002/cart/${slider_arr[__id]}`)
                                                .then(res => history('/cartdetails'))
                                        }} className=" btn btn-danger" >Delete</NavLink>
                                    </TableCell>
                                </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
       </div>

    )
}

export default Cartdetails