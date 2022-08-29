import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import '../assets/page/About.css'

const About = () => {
  const [about1 , AboutSetimage1] = useState([])
  const [about2 , AboutSetimage2] = useState([])
  const [about3 , AboutSetimage3] = useState([])
  const [about4 , AboutSetimage4] = useState([])
  const [about5 , AboutSetimage5] = useState([])
  const [about6 , AboutSetimage6] = useState([])
  const [about7 , AboutSetimage7] = useState([])
  const [about8 , AboutSetimage8] = useState([])
  const [about9 , AboutSetimage9] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/image')
    .then(ab => {
      AboutSetimage1(ab.data.images[6].about1)
      AboutSetimage2(ab.data.images[7].about2)
      AboutSetimage3(ab.data.images[8].about3)
      AboutSetimage4(ab.data.images[9].about4)
      AboutSetimage5(ab.data.images[10].about5)
      AboutSetimage6(ab.data.images[11].about6)
      AboutSetimage7(ab.data.images[12].about7)
      AboutSetimage8(ab.data.images[13].about8)
      AboutSetimage9(ab.data.images[14].about9)
    })
    .catch(er => console.log(er))
  })

  console.log(about1);
  return (
    <section>
      <section id='about1'>
        <div className="rows">
          <div className="col-lg-6 left">
            <img src={about1} alt="ilkin" />
            <button className='aboutbutton'>WELCOME TO VENQUE</button>
          </div>
          <div className="col-lg-6 right">
            <div className="abouttext">
              <h6>WELCOME TO VENQUE</h6>
              <h1 className='ilkin'>THE JOURNEY BEGINS</h1>
              <p>Our eco-friendly bags, and organizers are crafted so you can make better choices for your adventures, without sacrificing <br /> <br /> design, price, or quality. We have upcycled over 500K plastic water bottles to date, offset 2,247 tonnes of CO2 through our <br /> <br /> design, price, or quality. We have upcycled over 500K plastic water bottles to date, offset 2,247 tonnes of CO2 through our carbon-neutral shipping program, and planted over 30,000 trees through Eden Reforestation Projects and Ecologi <br /> <br /> Partnership. <br /> <br /> We have set out to manufacture the highest-quality, handcrafted travel goods available. We only works with partners that <br /> <br /> pass our rigorous selection process. Our partnerships with the best fabric and bag manufacturers, allow us to deliver an <br />  unparalleled carrying experience. <br />It is our mission to find that blend of sustainability and quality that all our customers love. <br />Everything you see at our stores is handmade by real people. Artisans who have spent their professional lives learning the <br />art of making beautiful and functional products. <br />Every product is made with the utmost attention to detail and respect with sustainability, modernism, minimalism and <br /> function in mind. <br /> Our manufacturing is conducted with the highest ethical and environmental standards in North America and Asia. </p>
            </div>
          </div>
        </div>
      </section>
      <section id='about2'>
        <div className="rows">
          <div className="col-lg-6 left form order-2">
            <img src={about2} alt="ilkin" />
          </div>
          <div className="col-lg-6 right">
            <div className="abouttext">
              <h6>BORN IN CANADA</h6>
              <h1 className='ilkin'>DESIGNED FOR THE WORLD</h1>
              <p>Our eco-friendly bags, and organizers are crafted so you can make better choices for your adventures, without sacrificing <br /> <br /> design, price, or quality. We have upcycled over 500K plastic water bottles to date, offset 2,247 tonnes of CO2 through our <br /> <br /> design, price, or quality. We have upcycled over 500K plastic water bottles to date, offset 2,247 tonnes of CO2 through our carbon-neutral shipping program, and planted over 30,000 trees through Eden Reforestation Projects and Ecologi <br /> <br /> Partnership. <br /> <br /></p>
            </div>
          </div>
        </div>
      </section>

      <section id='about3'>
        <div className="alls">
          <h1>^^</h1>
          <p>We spent years comparing travel hacks and notes on bags, but could never <br /> find a brand that checked all the boxes...so we created one ourselves.</p>
          <h6>SIMON & VIKTOR CUI</h6>
        </div>
      </section>

      <section id='about3'>
        <div className="all">
          <img src={about3} alt="sekil" />
          <div className="aabouttext">
            <h2>OUR PHILOSOPHY</h2>
            <p>We believe the more we travel, the better we all become.it’s a chance to grow and learn. To explore places near and far with wonder and <br /> curiosity, with gratitude and graciousness. To greet the world with open eyes and arms, and an open mind and heart.</p>
          </div>
        </div>
      </section>

      <section id='about4'>
        <div className="rows">
          <div className="col-lg-6 lefts">
            <img src={about4} alt="ilkin" />
            <button className='aboutbutton'>WELCOME TO VENQUE</button>
          </div>
          <div className="col-lg-6 right">
            <div className="abouttext">
              <h1 className='ilkin'>OUR DESIGN</h1>
              <p>Our eco-friendly bags, and organizers are crafted so you can make better choices for your adventures, without sacrificing <br /> <br /> design, price, or quality. We have upcycled over 500K plastic water bottles to date, offset 2,247 tonnes of CO2 through our <br /> <br /> design, price, or quality. We have upcycled over 500K plastic water bottles to date, offset 2,247 tonnes of CO2 through our carbon-neutral shipping program, and planted over 30,000 trees through Eden Reforestation Projects and Ecologi <br /> <br /> </p>
            </div>
          </div>
        </div>
      </section>

      <section id='about5'>
        <div className="rows">
          <div className="col-lg-6 lefts form order-2">
            <img src={about5} alt="ilkin" />
            <button className='aboutbutton'>WELCOME TO VENQUE</button>
          </div>
          <div className="col-lg-6 right">
            <div className="abouttext col-lg-6">
              <h1 className='ilkin'>MADE TO LAST</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo obcaecati saepe aliquid soluta facilis architecto eaque veritatis, dolor, nostrum ab esse quaerat sed dignissimos voluptatum perspiciatis, modi quibusdam nam eos?</p>
            </div>
            <div className="col-lg-6 right-right">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ducimus officiis temporibus</p>
            </div>
          </div>
        </div>
      </section>
      <section id='about6 '>
        <div className="text mt-5">
          <h1>ETHICAL AND TRANSPARENT IN MANUFACTURING</h1>
          <p>We strive for responsible and transparent partnerships throughout our supply chain and work with third-party auditors to evaluate factors like fair wages, labor conditions, reasonable working hours, and a safe <br /> working environment.Throughout our supply chain, we aim to foster long-term working relationships rooted in honesty, shared values, and continuous improvement. We seek out and select suppliers that align <br />with our business and sourcing needs, quality and performance standards, and are committed to doing right by their workers and the environment. </p>
        </div>
      </section>

      <section id='about7'>
        <div className="rows mt-5">
          <div className="col-lg-6 lefts">
            <img src={about6} alt="ilkin" />
            <button className='aboutbutton'>WELCOME TO VENQUE</button>
          </div>
          <div className="col-lg-6 right">
            <div className="abouttext">
              <h6>OUR MODEL</h6>
              <h1 className='ilkin'>ACCESSIBLY PRICED</h1>
              <p>Our eco-friendly bags, and organizers are crafted so you can make better choices for your adventures, without sacrificing <br /> <br /> design, price, or quality. We have upcycled over 500K plastic water bottles to date, offset 2,247 tonnes of CO2 through our <br /> <br /> design, price, or quality. We have upcycled over 500K plastic water bottles to date, offset 2,247 tonnes of CO2 through our carbon-neutral shipping program, and planted over 30,000 trees through Eden Reforestation Projects and Ecologi <br /> <br /> </p>
            </div>
          </div>
        </div>
      </section>

      <section id='about8'>
          <div className="text8 ">
            <h2>OUR COMMUNITY</h2>
            <p>We share our passion and love with like-minded customers(friends), and we've built a community for them(and us).</p>
          </div>
      </section>

      <section id='about8'>
            <div className="rows8">
              <div className="col-lg-4">
                <img src={about7} alt="sekil" />
                <h5>Yu_graph_</h5>
                <p>INSTAGRAM</p>
              </div>
              <div className="col-lg-4">
                <img src={about8} alt="sekil" />
                <h5>Yu_graph_</h5>
                <p>INSTAGRAM</p>
              </div>
              <div className="col-lg-4">
                <img src={about9} alt="sekil" />
                <h5>Yu_graph_</h5>
                <p>INSTAGRAM</p>
              </div>
            </div>
      </section>


      <section id='about8'>
          <div className="about8">
            <h3>Our story is just beginning.</h3>
            <p>Sign up and let’s stay in touch.</p>
            <input type="text" placeholder='email@newsletter.com' />
            <button>Join</button>
          </div>
      </section>

    </section>
  )
}

export default About