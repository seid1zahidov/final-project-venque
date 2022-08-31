import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './style.css'
import SingleProduct from './SingleProduct'
const Home = () => {
  const [cart  , setCart] = useState([])
  useEffect(() => {
   axios.get('http://localhost:3002/cart')
    .then(cart => setCart(cart.data.cart))
    .catch(e => console.log(e))
  },[])
  return (
    <div   className='cartflex '>
      {cart && cart.slice(0,4).map((prod => (
        <SingleProduct  prod={prod} key={prod._id} />
      )))}
    </div>
    
  )
}
export default Home