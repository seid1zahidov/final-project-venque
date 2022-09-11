import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../Admin/sidebar/Sidebar.jsx';


const Helpcomplaint = () => {

    const history = useNavigate();

    const [slider, Setslider] = useState([])

    const slider_arr = slider && slider.map(item => {
        return item._id
    })
    // http://localhost:3002/card

    useEffect(() => {
        axios.get('http://localhost:3002/Helpinput')
            .then(res => Setslider(res.data.input))
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
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Email</TableCell>
                                <TableCell align="right">Complaint</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {slider.map((row, __id) => (
                                <TableRow
                                    key={row._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        <TableCell align="right">{row.name}</TableCell>
                                    </TableCell>
                                    <TableCell align="right">{row.email}</TableCell>
                                    <TableCell align="right">{row.text}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>

    )
}

export default Helpcomplaint