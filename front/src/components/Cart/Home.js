import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './style.css'
import SingleProduct from './SingleProduct'
const Home = () => {
  const [cart  , setCart] = useState([])
  useEffect(() => {
   axios.get('http://localhost:3005/Cart')
    .then(cart => setCart(cart.data.cart))
    .catch(e => console.log(e))
  },[])
  return (
    <div>
      {cart && cart.map((prod => (
        <SingleProduct  prod={prod} key={prod._id} />
      )))}
    </div>
    
  )
}
export default Home