import React, { useEffect, useState } from 'react'
import './Main.css'
import axios from 'axios';

const Main = () => {

    const [image1, Setimage1] = useState([]);
    const [image2,setimage2] = useState([]); 
    const [image3,setimage3] = useState([]); 
    const [image4,setimage4] = useState([]); 
    const [image5,setimage5] = useState([]); 
    const [image6,setimage6] = useState([]); 

    useEffect(() => {
        axios.get('http://localhost:3001/image')
            .then(res => {
                console.log(res.data.images);
                Setimage1(res.data.images[0].image)
                setimage2(res.data.images[1].image1)
                setimage3(res.data.images[2].image2)
                setimage4(res.data.images[3].image3)
                setimage5(res.data.images[4].image4)
                setimage6(res.data.images[5].image5)
                
            })
            .catch(error => console.log(error))
    }, [])
    return (
        <section>
            <div id='main1'>
                <div>
                    {
                        image1 && <img className='image1' src={image1} alt="" />
                    }
                    <div className='main1read'>
                        <h2>LEAGACY-GRADE BAGS</h2>
                        <p>For Urban Outdoors</p>
                        <button>SHOP ALL</button>
                    </div>
                </div>
            </div>
            <section>
                <div id="main2">
                    <div className="container">
                        <div className="mainall">
                            <div className="top text-center mt-4">
                                <p>AS SEEN ON</p>
                            </div>
                            <div className="m2row">
                                <div className="col-2">
                                    <img src="https://cdn.shopify.com/s/files/1/1592/8017/files/yd_logomark_retina-1_1_180x.jpg?v=1647536904" alt="img1" />
                                </div>
                                <div className="col-2">
                                    <img src="https://cdn.shopify.com/s/files/1/1592/8017/files/images_180x.png?v=1647536932" alt="sekil2" />
                                </div>
                                <div className="col-2 ">
                                    <img src="https://cdn.shopify.com/s/files/1/1592/8017/files/Hypebeast-Logo-512-2_180x.png?v=1647536958" alt="sekil2" />
                                </div>
                                <div className="col-2">
                                    <img src="https://cdn.shopify.com/s/files/1/1592/8017/files/techcrunch-vector-logo_180x.png?v=1647536987" alt="sekil2" />
                                </div>
                                <div className="col-2 p2img">
                                    <img src="https://cdn.shopify.com/s/files/1/1592/8017/files/download_2_180x.png?v=1647537009" alt="sekil2" />
                                </div>
                                <div className="col-2 p2img">
                                    <img src="https://cdn.shopify.com/s/files/1/1592/8017/files/download_3_180x.png?v=1647537043" alt="sekil2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="p3rows mt-5 ">
                    <div className="col-lg-6  col-12   form order-2   p3right">
                        <div className='p3img'>
                            <img src={image2} alt="sekil" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 p3left">
                        <div className="p3leftin">
                            <p>From Recycled Ocean Waste to Fabric</p>
                            <h4>We introduced new sustainable materials into our <br /> collections</h4>
                            <p>With an enormous amount of energy, resources, and dedication, we continue to innovate with new technologies and <br /> solutions.</p>
                            <button>LEARN MORE</button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="p4row mt-5 text-start">
                    <div className="col-lg-3 col-12 p4leftmedia">
                        <img src="https://cdn.shopify.com/s/files/1/1592/8017/products/Transit02_540x.jpg?v=1631027605" alt="sekil" />
                        <h5 className='p4lefts'>Transit Travel Pro</h5>
                        <span className='p4lefts'>$249.00</span>
                    </div>
                    <div className="col-lg-3 p4left">
                        <img src="https://cdn.shopify.com/s/files/1/1592/8017/products/Transit02_540x.jpg?v=1631027605" alt="sekil" />
                        <h5 className='p4lefts'>Transit Travel Pro</h5>
                        <span className='p4lefts'>$249.00</span>
                    </div>
                    <div className="col-lg-3 p4left">
                        <img src="https://cdn.shopify.com/s/files/1/1592/8017/products/Transit02_540x.jpg?v=1631027605" alt="sekil" />
                        <h5 className='p4lefts'>Transit Travel Pro</h5>
                        <span className='p4lefts'>$249.00</span>
                    </div>
                    <div className="col-lg-3 p4left">
                        <img src="https://cdn.shopify.com/s/files/1/1592/8017/products/Transit02_540x.jpg?v=1631027605" alt="sekil" />
                        <h5 className='p4lefts'>Transit Travel Pro</h5>
                        <span className='p4lefts'>$249.00</span>
                    </div>
                </div>
            </section>

            <section id='mainp5'>
                <div className="container">
                    <div className="p5all">
                        <div className="col-lg-6 col-12  p5left ">
                            <h6>An Earth Positive Brand</h6>
                            <h1>Sustainable Goods For Modern & Green Travellers</h1>
                            <p>We all leave an impact on the planet, so we should all play a part in cleaning up our footprint. At <br /> VENQUE, we are working to do our part by building an ethical supply chain that creates high-quality,</p>
                            <h5>SEE HOW WE DO</h5>
                        </div>
                        <div className="col-lg-6 p5right">
                            <p>low-impact, long-lasting products. We carefully consider our materials and work with our production <br /> partners to reduce waste, chemicals, and plastics that endanger our planet’s people and ecosystems.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id='mainp6'>
                <div className='mt-5'>
                    <div className="p6row">
                        <div>
                            <img className='p6left' src={image3} alt="sekil" />
                        </div>
                        <div className="col-lg-6    ">
                            <div className="p6position">
                                <h3>FROM ARCTIC TO ANTARCTICA</h3>
                                <p>WE CREATE RELIABLE TOOLS</p>
                                <button>VIEW PRODUCTS</button>
                            </div>
                            <div>
                                <img className='p6lefts' src={image3} alt="sekil" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='mainp7'>
                <div className='mt-5'>
                    <div className="p7row">
                        <div>
                            <img className='p6left' src={image3} alt="sekil" />
                        </div>
                        <div className="col-lg-6">
                            <div className="p7position">
                                <h3>COAST TO COAST</h3>
                            </div>
                            <div>
                                <img className='p7left' src={image3} alt="sekil" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='mainp8'>
                <div className='mt-5'>
                    <div className="p8row">
                        <div className="col-lg-6">
                            <div>
                                <img className='p8left' src={image3} alt="sekil" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="p8position">
                                <h3>FROM ARCTIC TO ANTARCTICA</h3>
                                <button>VIEW PRODUCTS</button>
                            </div>
                            <img className='p8left' src={image3} alt="sekil" />
                        </div>
                    </div>
                </div>
            </section>

            <section id='mainp9'>
                <div className="p9rows">
                    <div className="col-lg-6 p9left">
                        <div className="p9leftin">
                            <p>From Recycled Ocean Waste to Fabric</p>
                            <h4>We introduced new sustainable materials into our <br /> collections</h4>
                            <p>With an enormous amount of energy, resources, and dedication, we continue to innovate with new technologies and <br /> solutions.</p>
                            <button>LEARN MORE</button>
                        </div>
                    </div>
                    <div className="col-lg-6 p9right">
                        <div>
                            <img src={image4} alt="sekil" /> 
                        </div>
                    </div>
                </div>
            </section>

            <section id='mainp10'>
                <div className="p10rows">
                    <div className="col-lg-6 p10left">
                        <div>
                            <img src={image5} alt="sekil" />
                        </div>
                    </div>
                    <div className="col-lg-6 p10right">
                        <div className="p10rights">
                            <p>From Recycled Ocean Waste to Fabric</p>
                            <h4>We introduced new sustainable materials into our <br /> collections</h4>
                            <p>With an enormous amount of energy, resources, and dedication, we continue to innovate with new technologies and <br /> solutions.</p>
                            <button>LEARN MORE</button>
                        </div>
                    </div>
                </div>
            </section>

            <section id='mainp11'>
                <div className="container">
                    <div className="p10rows ">
                        <div className="col-lg-6 p11left form order-2">
                            <div>
                                <img src={image6} alt="sekil" />
                            </div>
                        </div>
                        <div className="col-lg-6 p10right">
                            <div className="p11rights">
                                <p>From Recycled Ocean Waste to Fabric</p>
                                <h4>We introduced new sustainable materials into our <br /> collections</h4>
                                <p>With an enormous amount of energy, resources, and dedication, we continue to innovate with new technologies and <br /> solutions.</p>
                                <button>LEARN MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Main