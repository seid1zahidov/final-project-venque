import React, { useContext } from 'react'
import { useReducer } from 'react'
import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect } from 'react'
import Loader from "../components/Loader"
import { width } from '@mui/system'
import { Cart } from '../components/Cart/Context'
import './singleprods.css'
import Button from '@mui/material/Button';

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

const SingleProd = ( {prod}) => {
  const { cart, setCart } = useContext(Cart)


    const [{ loading, singleproduct }, dispatch] = useReducer(reducer, {
        loading: true,
        singleproduct: {}
    })

    const id = useParams().id


    useEffect(() => {

        const getProduct = async () => {
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
                        </select> <br />
                            <button class="glow-on-hover cart_single" onClick={() => { setCart([singleproduct]) }} type="button">Add to cart</button>
                            <button class="glow-on-hover cart_singles"  type="button">Buy it now</button>
                            <img className='detailsimg' src="https://cdn.shopify.com/s/files/1/1592/8017/files/website-icon-wiget_d7191648-b959-4125-9ce7-308d4b389425.jpg?v=1650296931" alt="" />
                    </div>
                </section>
                
            </section>
        </>
    )
}

export default SingleProd