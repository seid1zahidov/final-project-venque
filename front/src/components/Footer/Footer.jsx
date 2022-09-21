import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className='Footermain'>
                <div className="Footerrows mt-5">
                    <div className="col-lg-2  footerleft ">
                        <img src="https://cdn.shopify.com/s/files/1/1592/8017/files/venque_logo_png_130x.png?v=1563480147" alt="sekill" />
                        <h4>INSTAGAM</h4>
                    </div>
                    <div className="col-lg-3  mt-5">
                        <ul>
                            <li className='footerh4'>more</li>
                            <li>Contact</li>
                            <li>Affiliate</li>
                            <li>Wholesale</li>
                            <li>FAQ</li>
                            <li>What is RFID protection?</li>
                            <li>What fits in my bag?</li>
                            <li>Backpack Traveller Community Blog</li>
                        </ul>
                    </div>
                    <div className="col-lg-3  footerright">
                        <h6>Partners</h6>
                        <img src="https://cdn.shopify.com/s/files/1/1592/8017/files/Untitled_1920_x_1380_px_3_480x480.jpg?v=1648152011" alt="" />
                    </div>
                    <div className="co-lg-4  footerrightt">
                        <div className="footerss">
                            <h6>Newsletter</h6>
                            <p>Subscribe to get special offers, free giveaways, and once-in-a <br /> -lifetime deals.</p>
                            <input type="text" placeholder='email@newsletter.com' />
                            <button>Join</button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer