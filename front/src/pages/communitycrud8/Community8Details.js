import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SideBarDropDown from '../../Admin/sidebar/Sidebaar/SideBarDropDown ';

const Community8Details = () => {

  const history = useNavigate();

  const [slider, Setslider] = useState([])

  const slider_arr = slider && slider.map(item => {
    return item._id
  })

  useEffect(() => {
    axios.get('http://localhost:3002/Community9')
      .then(res => Setslider(res.data.com8))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="cartddetails">
      <div className="col-lg-2">
        <SideBarDropDown />

      </div>
      <div className="col-lg-10 cartdetail">

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
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
                  <TableCell align="right">
                    <Link to={`/Com9update/${slider_arr[__id]}`} onClick={async () => {
                      await axios.put(`http://localhost:3002/Community9/${slider_arr[__id]}`)
                        .then(res => res.data)
                    }} className=" btn detailsbutton btn-warning" >Update</Link>
                  </TableCell>
                  <TableCell align="right">
                    <Link to={`/Admin/${slider_arr[__id]}`} onClick={async () => {
                      await axios.delete(`http://localhost:3002/Community9/${slider_arr[__id]}`)
                        .then(res => history('/Admin'))
                    }} className="btn detailsbutton btn-danger">Delete</Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Link to='/Com9Add' className=" btn btn-success Detailscom2 " >Add img</Link>
      </div>
    </div>
  )
}

export default Community8Details