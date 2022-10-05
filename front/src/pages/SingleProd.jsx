import React, { useContext } from 'react'
import { useReducer } from 'react'
import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect } from 'react'
import Loader from "../components/Loader"
import { width } from '@mui/system'
import { Cart } from '../components/Cart/Context'

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

const SingleProd = ({ prod }) => {

    const { cart, setCart } = useContext(Cart)

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
                    <div className="col-lg-6 products_details">
                        <div className='cartdetails_'>{singleproduct.rate}</div>
                        <p>Home Transit Travel Pro Backpack</p>
                        <h2>{singleproduct.name}</h2>
                        <span> ${singleproduct.price}.00</span> <br />
                        <select className='details-selec-option' name="" id="">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                            <option value="">6</option>
                            <option value="">7</option>
                            <option value="">8</option>
                            <option value="">9</option>
                            <option value="">10</option>
                        </select>


                    </div>
                </section>
            </section>
        </>
    )
}

export default SingleProd