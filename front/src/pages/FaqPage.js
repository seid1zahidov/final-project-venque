import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FaqPage = () => {

    const [faq, setFaq] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3002/support')
            .then(res => setFaq(res.data.support))
            .catch(error => console.log(error))
    }, [])

    return (

        <section className="FAQs">
            <div className="container">
                <div className="row">
                    <div className="subject">
                        <h1 id='return'>Frequently Asked Questions</h1>
                        <h4 className='second'>Questions</h4>
                        <ol>
                            {faq && faq.map((faqs) => (
                                <li>
                                    <a href={`#${faqs.idi}`}>
                                        {faqs.subject}
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </div>
                    <hr />
                    <div className="answer">
                        <h4 className='second mb-3 mt-3'>Answers</h4>
                        {faq && faq.map((faqs) => (
                            <div>
                                <h4 id={`${faqs.id}`} className='question ms-3 mt-3'><span className='me-3 a'>Q:</span>{faqs.author}</h4>
                                <p className='ms-3'><span className='me-3 a'>A:</span>{faqs.text}</p>
                                <a href="#return" className='rtrn mt-3 mb-3'>Return to top</a>
                                <hr />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default FaqPage