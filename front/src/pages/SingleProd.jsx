import React from 'react'
import { useReducer } from 'react'
import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect } from 'react'
import Loader from "../components/Loader"
import { width } from '@mui/system'
import './singleprods.css'
function reducer(state, action) {
    switch (action.type) {
        case 'fetch_request':
            return { ...state, loading: true }
        case 'fetch_success':
            return { ...state, loading: false, singleproduct: action.payload }
        default:
            return state
    }
}

const SingleProd = () => {

    const [{ loading, singleproduct }, dispatch] = useReducer(reducer, {
        loading: true,
        singleproduct: {}
    })

    const id = useParams().id


    useEffect(() => {

        const getProduct = async () => {
            console.log(id);
            dispatch({ type: 'fetch_request' })


            try {
                const resp = await axios.get(`http://localhost:3002/Card/product/${id}`);
                dispatch({ type: 'fetch_success', payload: resp.data })
                console.log(resp.data);

            } catch (error) {
                alert("ishlemir")
            }

        }
        getProduct()
    }, [id])



    return loading ? (<Loader></Loader>) : (
        <>
            <section>
                <section id='details_photo'>
                    <div className="col-lg-6">
                    <img className='elo' src={singleproduct.image} alt="" />
                    </div>
                    <div className="col-lg-6">
                        
                    </div>
                </section>
            </section>
        </>
    )
}

export default SingleProd