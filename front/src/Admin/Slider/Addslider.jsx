import React from 'react'
import {Box} from '@mui/system';
import {Button  , FormLabel , TextField , FormControlLabel, Checkbox} from '@mui/material';
import {useNavigate} from 'react-router-dom';    
import { useState } from 'react';
const Addslider = () => {

    const history = useNavigate()

    const [inputs , Setinputs] = useState({
        name : '',
        price: '',
        images : '' 
    })

    const [checked , setChecked] = useState(false)

    const handleSubmit =() => {
        console.log("salam");
    }

  return (
    <div>
        <form onSubmit={handleSubmit} action="">
            <Box
                display='flex'
                flexDirection='column'
                justifyContent='center'
                maxWidth={500}
                marginX = 'auto'
                marginTop={10}
            >

            <FormLabel>name</FormLabel>
            <TextField value={inputs.name}  name = 'name'/>
            <FormLabel>price</FormLabel>
            <TextField value={inputs.price} name = 'price'/>
            <FormLabel>images</FormLabel>
            <TextField value={inputs.images} name = 'images' />
            <FormControlLabel control={<Checkbox checked = {checked} />} />

            <Button color='red' variant='contained' type='submit' >Add image</Button>
            </Box>
        </form>
    </div>
  )
}

export default Addslider