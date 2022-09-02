import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './cartdetail.css'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

const Cartdetails = () => {

    const [details, Setdetails] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3002/cart')
            .then(s => Setdetails(s.data.cart))
            .catch(e => console.log(e))
    }, [])

    return (
        <div className='cartdetails'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Imgae</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Update</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {details.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <img src={row.image} alt="" />
                                </TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right">
                                    <Link to={`/cartupdate/${row._id}`}>
                                        <Button variant="secondary" size="md" active>
                                            Update
                                        </Button>
                                    </Link>
                                </TableCell>
                                <TableCell align="right">
                                    <Button variant="secondary" size="md" active>
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Cartdetails