import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleProdmap from './Singleprodmap'

const Produtsdetailsmap = () => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3002/card')
            .then(cart => setCart(cart.data.card))
            .catch(e => console.log(e))
    }, [])

    return (
        <div>
            {/* {cart && cart.map((prod => (
                <SingleProdmap prod={prod} key={prod._id} />
            )))} */}
        </div>
    )
}

export default Produtsdetailsmap