import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import '../assets/page/Help.css'
import { chat } from '../assets/page/img/chat.png'
import { GrPersonalComputer } from 'react-icons/gr';
import { AiFillWechat } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TextareaAutosize from '@mui/base/TextareaAutosize';

const Help = () => {

  const [helpimg, Sethelpimg] = useState()

  useEffect(() => {
    const Helpimages = () => {
      axios.get('http://localhost:3002/Help')
        .then(res => res.data)
        .then(r => Sethelpimg(r.help))
        .catch(error => console.log(error))
    }
    Helpimages()
  }, [])
  console.log(helpimg);
  return (
    <section>
      <section id='Help_main_top'>
        <div>
          {
            helpimg && helpimg.map((x => (
              <img src={x.image} alt="" />
            )))
          }
          <div className="help_main_top_img_text">
            <h1>WE'RE HERE TO HELP</h1>
            <p>Let us know how we can help you by completing the form. We typically respond in 1-2 business days.</p>
            <button>DROP US A LINE</button>
          </div>
          <div className="help_main_top_left">
            <AiFillWechat className='help_main_icon' />
            <h4>info@venque.com</h4>
            <p>Drop us a line at your convenience. We’ll get back to you as soon as possible.</p>
          </div>
          <div className="help_main_top_right">
            <AiFillWechat className='help_main_icon' />
            <h4>Get in touch</h4>
            <p>Drop us a line at your convenience. We’ll get back to you as soon as possible.</p>
          </div>
        </div>
      </section>

      <section id='help_text'>
        <div className="help_text_main">
          <h1>Frequently Asked Questions</h1>
          <p>Most of the questions relate to orders, shipping, returns, warranty can be found on our FAQ page, check them out!</p>
          <h6>FAQS</h6>
        </div>
      </section>



      <section id='input'>
        <div className="input_top">
          <span>CONTACT US - WE WILL RESPOND IN 24-48 HOURS</span>
        </div>
        <div className="input_main_group">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label></Form.Label>
              <Form.Control className='input_main' type="text" placeholder="Full Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control className='input_main' type="email" placeholder="Email" />
            </Form.Group>
            <TextareaAutosize
              aria-label="empty textarea"
              placeholder="Empty"
              style={{ width: 500 }}
            /> <br /> <br />
          </Form>
          
          <button>Send</button>

        </div>
      </section>
    </section>
  )
}

export default Help