import React, { useState } from 'react'
import './siginincontainer.css'

import {
    InputGroup,
    Input,
    InputRightElement,
    Button
} from '@chakra-ui/react'
const SigininScreen = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    return (
        <section id='Login'>
            <section id='Login_input'>
                <div className='text-center mt-5'>
                    <h1>Login</h1>
                    <p>Don't have an account? Sign up here.</p>
                    <label>
                        <input placeholder=" " />
                        <span>Email</span>
                    </label>
                    <InputGroup size='md'>
                        <Input
                            className='login_input_password'
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Password'
                        />
                        <InputRightElement width='4.5rem'>
                            <Button className='login_password_login' h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>

                </div>
            </section>
            <section id='login_button'>
                <button className='login_button_first'>Sign In</button>
            </section>
        </section>
    )
}

export default SigininScreen