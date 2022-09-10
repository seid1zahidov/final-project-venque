import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import Sidebar from '../../Admin/sidebar/Sidebar.jsx'
import './Helpcrud.css'

const Helpdetails = () => {


    const history = useNavigate();

    const [slider, Setslider] = useState([])

    const slider_arr = slider && slider.map(item => {
        return item._id
    })

    useEffect(() => {
        axios.get('http://localhost:3002/Help')
            .then(res => Setslider(res.data.help))
            .catch(error => console.log(error))
    }, [])


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
                                    <TableCell align="right">{row.rate}</TableCell>
                                    <TableCell align="right">
                                        <NavLink to={`/Helpupdate/${slider_arr[__id]}`} onClick={async () => {
                                            await axios.put(`http://localhost:3002/Help/${slider_arr[__id]}`)
                                                .then(res => res.data.cart)
                                        }} className=" btn btn-warning" >Update</NavLink>
                                    </TableCell>
                                    <TableCell align="right">
                                        <NavLink to={`/Admin/${slider_arr[__id]}`} onClick={async () => {
                                            await axios.delete(`http://localhost:3002/Help/${slider_arr[__id]}`)
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

export default Helpdetails