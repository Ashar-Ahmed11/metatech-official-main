import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const EstimatedCost = () => {
    const navigator = useNavigate()
    const [formSubmitted, setformSubmitted] = useState(false)
    const [FormLoader, setFormLoader] = useState(false)
    const specs = JSON.parse(localStorage.getItem('specs'))
    const sum = JSON.parse(localStorage.getItem('subtotal'))
      useEffect(() => {
        
        if(!specs){
            navigator("/website-cost-calculator")
      
        }
    }, [])
    

    
    const [formData, setformData] = useState({ name: '', email: '', subject: '', phone: '', message:  `QUOTE DETAILS:\nNumber Of Pages: ${specs&&specs.pages.value} \nStyle Of Design: ${specs&&specs.design.value}\nResponsive Design: ${specs&&specs.responsive.value}\nBackend Integration: ${specs&&specs.backend.value}\nCMS Integration: ${specs&&specs.cms.value}\nContent Quality: ${specs&&specs.content.value}\nDomain: ${specs&&specs.domain.value}\nHosting: ${specs&&specs.hosting.value}\nEstimate Cost: $${sum} to $${sum+1000}`, country: '' })
   
    const submitMessage = async (e) => {
        e.preventDefault()
        setFormLoader(true)
        const response = await fetch("https://formsubmit.co/ajax/metatech674@gmail.com", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                _subject: "You have a new query from Metatech!",
                Name: formData.name,
                Email: formData.email,
                Contact: formData.phone,
                Country: formData.country,
                Subject: formData.subject,
                Message: formData.message,
                _template: 'box'

            })
        })
        const data = await response.json()
  
        setFormLoader(false)
        setformSubmitted(true)
        const formElements = document.getElementsByClassName('form-control')
        for (let index = 0; index < formElements.length; index++) {
            const element = formElements[index];
            element.setAttribute('disabled', 'true')

        }




    }




    return (
        <div>
            <div style={{ backgroundColor: '#151619' }}>
                <div className="container py-5">
                    <div className=" py-5">
                        <div className=" py-5">
                    <h4 className='pb-3' style={{ textDecoration: 'underline', textUnderlineOffset: "6px", color: '#6565ff' }}>Project Quotation Calculator</h4>

                            <h4 style={{ color: "white" }} className="display-5">We estimate that your project will cost between <b>${sum} </b>and <b>${sum+1000}</b>.</h4>
                            <h1 style={{ color: "white" }} className="h3">
                            To receive an exact quote from Metatech website design strategist, please complete the web form below.


                            </h1>

                        </div>
                      
                        <form onSubmit={(e) => submitMessage(e)}>
                            <div class="">
                                <input required onChange={(e) => setformData({ ...formData, name: e.target.value })} value={formData.name} name='Name' type="text" class="form-control rounded-4 p-3" id="exampleFormControlInput1" placeholder="Enter your name" />
                                <div className="d-flex">
                                    <input required onChange={(e) => setformData({ ...formData, email: e.target.value })} value={formData.email} name='email' type="email" class="form-control rounded-4 p-3 my-2 " style={{ marginRight: '0.5rem' }} id="exampleFormControlInput1" placeholder="Enter Your Email" />
                                    <input required onChange={(e) => setformData({ ...formData, phone: e.target.value })} value={formData.phone} name='number' type="number" class="form-control rounded-4 p-3 my-2" id="exampleFormControlInput1" placeholder="Phone Number" />

                                </div>
                                <div className="d-flex">
                                    <input required onChange={(e) => setformData({ ...formData, country: e.target.value })} value={formData.country} name='country' type="text" class="form-control rounded-4 p-3 my-2 " style={{ marginRight: '0.5rem' }} id="exampleFormControlInput1" placeholder="Country" />
                                    <input required onChange={(e) => setformData({ ...formData, subject: e.target.value })} value={formData.subject} name='subject' type="text" class="form-control rounded-4 p-3 my-2" id="exampleFormControlInput1" placeholder="Subject" />

                                </div>
                            </div>
                            <div class="mb-3">

                                <textarea required onChange={(e) => setformData({ ...formData, message: e.target.value })} value={formData.message} name='Message' placeholder='Your Question' class="form-control rounded-4 p-3 my-2" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className="d-flex justify-content-center py-3">
                                <button disabled={FormLoader || formSubmitted ? true : false} style={{ transition: 'all 1s ease' }} className={`btn btn-${formSubmitted ? 'success' : 'primary'} rounded-4 p-3 d-flex align-items-center`}>{formSubmitted ? 'Submitted' : 'Send us a proposal'}
                                    {FormLoader && <div class="spinner-border text-light mx-2" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>}
                                </button>

                            </div>
                          {formSubmitted&&<h4 className="display-6 text-success">Thanks for sending us a proposal, our subordinate will get back to you shortly for your further queries!</h4>}
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default EstimatedCost