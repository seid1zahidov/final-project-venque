import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SideBarDropDown from '../../Admin/sidebar/Sidebaar/SideBarDropDown '

const SupporAdd = () => {

    const history = useNavigate()

    const [inputs, setInputs] = useState({
        idi: '',
        author: '',
        text: ''
    })

    const sendRequest = async () => {
        await axios.post('http://localhost:3002/support', {
            idi: String(inputs.idi),
            author: String(inputs.author),
            text: String(inputs.text)
        }).then(res => console.log(res.data))
    }

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(() => history('/Admin'));
    }

  return (
    <div className='Addsliderrow justify-content-center'>
    <div className='col-lg-2'>
        <SideBarDropDown />
    </div>
    <div className="col-lg-4 addslider container mt-5">
        <form onSubmit={handleSubmit}>
            <p>id</p>
            <input type="text" value={inputs.idi} onChange={handleChange} name='idi' /> <br /> <br />
            <p>author</p>
            <input type="text" value={inputs.author} onChange={handleChange} name='author' /> <br /> <br />
            <p>Text</p>
            <input type="text" value={inputs.text} onChange={handleChange} name='text' /> <br /> <br />
            <input type="submit" value="Add Faq" />
        </form>
    </div>
</div>
  )
}

export default SupporAdd