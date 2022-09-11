import axios from 'axios'
import React, { useReducer } from 'react'
import { useState } from 'react'
import { useEffect, dispatch } from 'react'
import { prodReducer } from './Reducer'

const Contextd = ({ children }) => {


    const [state, Setstate] = useState()


    useEffect(() => {
        const reducers = () => {
            axios.get('http://localhost:3002/card')
                .then(res => Setstate(res.data.card))
                .catch(error => console.log(error))
        }
        reducers()
    }, [])
    
    const [states, dispatch] = useReducer(prodReducer, {
        rate: 0
    })


    return (
        <div>
            {
                state && state.map((x => (
                    console.log(x)
                )))
            }
        </div>
    )
}

export default Contextd