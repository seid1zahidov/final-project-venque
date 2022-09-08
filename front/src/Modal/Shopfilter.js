import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './shopfilter.css'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';




function valuetext(value) {
    return `${value}°C`;
  }


const Shopfilter = ({ show, closeModal }) => {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


    if (!show) return null


  return (
    <div className='Burgerss'>
    <div className="overlay" onClick={closeModal}></div>
    <div className="contend">
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
        </Box>
        <AiOutlineClose className='burgers' onClick={closeModal} />
    </div>
</div>
  )
}

export default Shopfilter