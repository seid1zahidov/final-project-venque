import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './shopfilter.css'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Filterstart from '../components/Filter/Filterstart';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';




const Shopfilter = ({ show, closeModal }) => {

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
      <div className="Shopcontend">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Availability
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label class="form-check-label" for="flexCheckDefault">
                    In stock
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                  <label class="form-check-label" for="flexCheckChecked">
                    Out of stock
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Price
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <Box className='mt-5' sx={{ width: 200 }}>
                  <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                  />
                </Box>
                <Box
                  sx={{
                    '& > legend': { mt: 2 },
                  }}
                >
                  <Typography component="legend">Controlled</Typography>
                  <Rating
                    name="simple-controlled"
                    onChange={(event, newValue) => {
                    }}
                  />
                </Box>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Shopfilter