import React from 'react'
import ContactCarousal from './carousal copy'
import { useState } from 'react'
import { useEffect } from 'react'
import MetaDecorator from './metadecorator'
const SeoContact = () => {

    const [formData, setformData] = useState({ name: '', email: '', subject: '', phone: '', message: '', country: '' })
    const [formSubmitted, setformSubmitted] = useState(false)
    const [FormLoader, setFormLoader] = useState(false)
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
        console.log(data)
        setFormLoader(false)
        setformSubmitted(true)
        const formElements = document.getElementsByClassName('form-control')
        for (let index = 0; index < formElements.length; index++) {
            const element = formElements[index];
            element.setAttribute('disabled', 'true')

        }




    }


    return (
        <>
    <MetaDecorator title={"Contact Us"} imageUrl={"https://res.cloudinary.com/dextrzp2q/image/upload/v1720099375/silhlgsrj9ehcuq3gm4h.png"} description={'Metatech is Leading Web & App development company that empowers businesses to thrive in the digital world'} />
<div  style={{ backgroundColor: '#151619' }}>
            {/* <ContactCarousal pageTitle={"Contact Us"} /> */}
            <div className="container pt-5" >
                    <div className="pt-2">
                        <div className=" py-5">
                            
            <div>
                <div className="container py-5">
                    <h5 className='' style={{ textDecoration: 'underline', textUnderlineOffset: "6px", color: '#6565ff' }}>GET IN TOUCH</h5>
                   
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="d-flex justify-content-center">
                                <h4 style={{ color: "white" }} className="display-4 my-5 ">Experience Real Results</h4>
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
                                <div className="py-3 d-flex justify-content-center">
                                    <button disabled={FormLoader || formSubmitted ? true : false} style={{ transition: 'all 1s ease' }} className={`btn btn-${formSubmitted ? 'success' : 'primary'} rounded-4 p-3 d-flex align-items-center`}>{formSubmitted ? 'Submitted' : 'Send Message'}
                                        {FormLoader && <div class="spinner-border text-light mx-2" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>}
                                    </button>
                                </div>
                          {formSubmitted&&  <h4 className="display-6 text-success">Thanks for sending us a proposal, our subordinate will get back to you shortly for your further queries!</h4>}

                            </form>
                        </div>
                        <div className="col-12 col-md-6 mt-3 ">
                        <div className="row my-4">
                        <div className="col-12 col-md-6 my-2">
                            <div class="card h-100 text-center py-4" style={{ backgroundColor: 'rgba(0,0,0,0)', borderColor: '#6565ff' }}>
                                <p className="h1 display-5 py-4">
                                    <i style={{ color: "#6565ff" }} class="fa fa-map-marker fa-lg"></i>
                                </p>
                                <div class="card-body d-flex flex-column">
                                    <h5 style={{ color: "#6565ff" }} class="card-title display-6 fw-normal">LOCATION</h5>
                                    <div style={{ flex: 1 }} className='d-flex flex-column justify-content-center'>

                                        <h6 style={{ color: "#ffffff" }} class="card-text fw-normal"><a href="https://goo.gl/maps/xMkhm1ZaFNRf6CpG6" target='_blank'>Karachi, <br /> Sindh, Pakistan, Asia</a></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 my-2">
                            <div class="card h-100 text-center py-4" style={{ backgroundColor: 'rgba(0,0,0,0)', borderColor: '#6565ff' }}>
                                <p className="h1 display-5 py-4">

                                    <i style={{ color: "#6565ff" }} class="fa fa-phone fa-lg"></i>
                                </p>
                                <div class="card-body d-flex flex-column">
                                    <h5 style={{ color: "#6565ff" }} class="card-title display-6 fw-normal">PHONE</h5>
                                    <div style={{ flex: 1 }} className='d-flex flex-column justify-content-center'>

                                        <h6 style={{ color: "#ffffff" }} class="card-text fw-normal"><a href="tel:+92-347-269-8189">+92-347-2698189</a></h6>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 my-2">
                            <div class="card h-100 text-center py-4" style={{ backgroundColor: 'rgba(0,0,0,0)', borderColor: '#6565ff' }}>
                                <p className="h1 display-5 py-4">
                                    <i style={{ color: "#6565ff" }} class="fa fa-envelope-o fa-lg"></i>
                                </p>
                                <div class="card-body d-flex flex-column">
                                    <h5 style={{ color: "#6565ff" }} class="card-title display-6 fw-normal">EMAIL</h5>
                                    <div style={{ flex: 1 }} className='d-flex flex-column justify-content-center'>
                                        <h6 style={{ color: "#ffffff" }} class="card-text fw-normal"><a href="mailto:info@metatech-official.co" target='_blank'> info@metatech-official.co</a></h6>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        </div>
                    </div>

                </div>
            </div>
            </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default SeoContact