import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './shopfilter.css'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Filterstart from '../components/Filter/Filterstart';






const Shopfilter = ({ show, closeModal }) => {



    if (!show) return null


  return (
    <div className='Burgerss'>
    <div className="Shopoverlay" onClick={closeModal}></div>
    <div className="Shopcontend">
      <Filterstart />
        <AiOutlineClose className='Shopburger' onClick={closeModal} />
    </div>
</div>
  )
}

export default Shopfilter