import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import './Shopimgdetails.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Sidebars from  '../../Admin/sidebar/Sidebar'
import SideBarDropDown from '../../Admin/sidebar/Sidebaar/SideBarDropDown ';

const Cartdetails = () => {

    const history = useNavigate();

    const [slider, Setslider] = useState([])

    const slider_arr = slider && slider.map(item => {
        return item._id
    })


    useEffect(() => {
        axios.get('http://localhost:3002/shopimg')
            .then(res => Setslider(res.data.shopimg))
            .catch(error => console.log(error))
    }, [])

    console.log(slider);
    return (
        <section id='Shopimgdetails'>
            <div className="col-lg-2">
            <SideBarDropDown/>

            </div>
            <div className="col-lg-10">
                <div className="col-lg-10 cartdetail">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Image</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {slider.map((row, __id) => (
                                    <TableRow
                                        key={row._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            <img className='cartdetailimg' src={row.image} alt='' />
                                        </TableCell>
                                        <TableCell align="right">
                                            <NavLink to={`/Shopimgupdate/${slider_arr[__id]}`} onClick={async () => {
                                                await axios.put(`http://localhost:3002/shopimg/${slider_arr[__id]}`)
                                                    .then(res => res.data.shopimg)
                                            }} className=" btn btn-warning" >Update</NavLink>
                                        </TableCell>
                                        <TableCell align="right">
                                            <NavLink to={`/Admin/${slider_arr[__id]}`} onClick={async () => {
                                                await axios.delete(`http://localhost:3002/shopimg/${slider_arr[__id]}`)
                                                    .then(res => history('/Shopimgdetails'))
                                            }} className=" btn btn-danger" >Delete</NavLink>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </section>
    )
}

export default Cartdetails