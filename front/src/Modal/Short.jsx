import React from 'react'
import './short.css'


const Short = ({ show, closeModal }) => {

    function valuetext(value) {
        return `${value}°C`;
      }
      const [value, setValue] = React.useState([20, 37]);
    
      const handleChange = (event, newValue) =>
        setValue(newValue);
    
      if (!show) return null

  return (
    <div className='Burgerss'>
    <div className="Shopoverlay" onClick={closeModal}></div>
    <div className="Shortcontend">
        <ul>
          <li>FEATURED</li>
          <li>BEST SELLING</li>
          <li>ALPHABETICALLY, A-Z </li>
          <li>ALPHABETICALLY, Z-A </li>
          <li>PRICE, LOW TO HIGH </li>
          <li>PRICE, HIGH TO LOW </li>
          <li>DATE, OLD TO NEW </li>
        </ul>
    </div>
  </div>
  )
}

export default Short