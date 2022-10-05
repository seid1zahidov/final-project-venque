import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Shop from './Shop'
import SingleProd from './SingleProd'

const Singleprodmap = () => {
    const [carts, setCart] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3002/card')
            .then(carte => setCart(carte.data.card))
            .catch(e => console.log(e))
    },[])

    return (
        <div>
            {carts && carts.map((prod => (
                <SingleProd prod={prod} key={prod._id}  />
            )))}

        </div>
    )
}

export default Singleprodmap