import React from 'react'
import ContactCarousal from './carousal copy'
import { useState } from 'react'
import { useRef } from 'react'
import ErrorModal from './errorModal'
import { useNavigate } from 'react-router-dom'
import MetaDecorator from './metadecorator'
import SeoContact from './seocontact'
import SeoResults from './seoresults'
import { Navigate } from 'react-router-dom'
import SeoServies from './seoservices'
import VideoCarousal from './carousal copy 2'
import WebsiteSerivces from './websiteservices'
import ShowcaseProjects from './projects copy'
import WebsiteResults from './websiteresults'
import AppCard from './appCard'
import gymLogo from './gymLogo.jpeg'
import SplitHero from './splitHero'
import zestyLogo from './zestyLogo.jpeg'
import AIApp from './aiApp.png'
import todoistIcon from './todoistIcon.png'
import flashLogo from './flashLogo.jpeg'
import boltManager from './boltManager.webp'
import ecoinLogo from './ecoin.jpeg'
import petcareLogo from './petcare.jpeg'
import AppServices from './appServices'
const AppDevelopment = ({ title, description, showBrand }) => {
    const navigate = useNavigate();
    const [specs, setSpecs] = useState({})

    const changeClass = (element) => {
        const buttons = document.getElementsByClassName(`${element}`)
        for (let index = 0; index < buttons.length; index++) {
            const e = buttons[index];
            if (specs) {

                if (specs[element].value == e.innerHTML) {
                    e.className = `${e.className} selectedbutton`
                }
                else {
                    e.className = `${element} btn btn-outline-light rounded-3 mx-2`
                }

            }
        }
    }
    const changeTheClass = () => {

        if (specs) {
            Object.keys(specs).map((e) => { changeClass(e) })

        }

    }


    const [toggleModal, settoggleModal] = useState(false)
    const modalref = useRef(null);

    const totalCost = () => {

        const nums = Object.values(specs).map((e) => { return e.price })
        if (nums.length == 8) {
            const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue);
            localStorage.setItem('specs', JSON.stringify(specs))
            localStorage.setItem('subtotal', sum)
            window.scrollTo({ behavior: 'smooth', top: 0, left: 0 })
            navigate("/estimated-cost")

        } else {
            settoggleModal(true)

            modalref.current.click()
        }


    }
    changeTheClass()






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
            <div>
                <MetaDecorator showBrand={showBrand} title={title} description={description} imageUrl={"https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60/https://res.cloudinary.com/dextrzp2q/image/upload/v1720097625/ob14j2kfdbjqq5te5tbn.png"} />
                {/* <ContactCarousal pageTitle={title} /> */}
                <VideoCarousal imageURL={"https://res.cloudinary.com/dextrzp2q/image/upload/v1763036949/img_d2w5td.png"} pageTitle={title} videoURL={`https://res.cloudinary.com/dextrzp2q/video/fetch/c_scale/f_auto/q_60/https://res.cloudinary.com/dextrzp2q/video/upload/v1763032154/androiddev_fnlblt.mp4`} />

                <div style={{ backgroundColor: '#151619' }}>
                    <div className="container-fluid py-5">
                        <div className="container">
                            {/* <h1 className='pb-3 h5' style={{ textDecoration: 'underline', textUnderlineOffset: "6px", color: '#6565ff' }}>SEO Solutions To Solve Your Problems</h1>
                         */}
                            <h3 style={{ color: "white" }} className="display-4 fw-bold">Empower Your Business with Expert App Development Solutions                            </h3>
                            <p style={{ color: "white" }} className="lead">As a leading Mobile App Development Company in Pakistan, we have spent over a decade developing mobile applications that are powerful and user-focused. Our app development company delivers solutions that help businesses strengthen their digital presence, boost engagement, and drive higher conversions—all at competitive prices. With our expertise in app development, we build scalable, secure, and high-performance applications that empower clients to achieve long-lasting success in the digital landscape.</p>


                            <form onSubmit={(e) => { e.preventDefault(); navigate('/seo-contact'); window.scrollTo({ behavior: 'smooth', top: 0, left: 0 }) }}>
                                <div className='d-flex py-3 mt-3'>
                                    <div className="container mx-lg-5">
                                        <div className="mx-lg-5">
                                            <div className="mx-lg-5">
                                                <div className='py-3 rounded-3' style={{ backgroundColor: '#20222d' }}>
                                                    <div className="d-flex container-lg flex-wrap flex-md-nowrap">

                                                        <input style={{ flex: window.innerWidth > 768 ? 8 : "none" }} required name='Name' type="text" class={`${window.innerWidth > 768 ? "" : "flex-fill"} form-control rounded-2 p-2 px-3 m-2`} id="exampleFormControlInput1" placeholder="Enter Website Address" />
                                                        <button style={{ flex: window.innerWidth > 768 ? 2 : "none" }} className={`${window.innerWidth > 768 ? "" : "flex-fill"} btn btn-primary rounded-2 m-2`}>Get My Proposal</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>
                        {/* <div className="container">
                        <h2 style={{ color: "white" }}>Why Choose Metatech For Your Business Website Development?</h2>
                        <p style={{ color: "white" }} className="lead">For 100% results, we improve your search engine listing using organic SEO. Naturally, achieve better ranks to generate traffic and exposure for long-lasting success. Just proven SEO with assured results; no shortcuts! We focus on optimizing your search engine listing using natural SEO methods for assured results. Get better rankings and generate consistent traffic for development and long-lasting presence. Depend on tried-and-true techniques for long-term success without resorting to short cuts; only successful plans with actual results.</p>
                            </div> */}
                        <WebsiteResults />


                        <SplitHero />


                        <div className="text-center">
                            <h2 className='pb-3 h5' style={{ textDecoration: 'underline', textUnderlineOffset: "6px", color: '#6565ff' }}>RECENT PROJECTS</h2>
                        </div>
                        <div className="container my-4">
                            <div className="row">
                                <div className="col-md-3 col-6 my-2">
                                    <AppCard
                                        apkFile={"https://drive.google.com/file/d/1e5hDwK-Pv9TbnJYDp-2lUV1H7BQ81Nzn/view?usp=drive_link"}
                                        logo={zestyLogo}
                                        title={"Zesty"}
                                        type={"Food Delivery"}
                                    />
                                </div>
                                <div className="col-md-3 col-6 my-2">
                                    <AppCard
                                        apkFile={"https://drive.google.com/file/d/1CR_Qm8Yg9PRuk01TIVuBhkyt8gYS9SNM/view?usp=sharing"}
                                        logo={todoistIcon}
                                        title={"Todoist"}
                                        type={"Note Taking"}
                                    />
                                </div>
                                <div className="col-md-3 col-6 my-2">
                                    <AppCard
                                        apkFile={"https://drive.google.com/file/d/1yTyNDsJeq08a29FUsDBCcaZ0Dqhy0t35/view?usp=sharing"}
                                        logo={AIApp}
                                        title={"복지야"}
                                        type={"Conversational AI Welfare"}
                                    />
                                </div>
                                <div className="col-md-3 col-6 my-2">
                                    <AppCard
                                        apkFile={"https://play.google.com/store/apps/details?id=com.gymlife.nicolaeusebi.gymlife&hl=en"}
                                        logo={gymLogo}
                                        title={"Gym Life"}
                                        type={"Workout Planner"}
                                    />
                                </div>
                                <div className="col-md-3 col-6 my-2">
                                    <AppCard
                                        apkFile={"https://play.google.com/store/apps/details?id=com.mjsdelivery.customer"}
                                        logo={flashLogo}
                                        title={"Flash"}
                                        type={"Drinks & Groceries"}
                                    />
                                </div>
                                <div className="col-md-3 col-6 my-2">
                                    <AppCard
                                        apkFile={"https://play.google.com/store/apps/details?id=com.flashdelivery.manager"}
                                        logo={boltManager}
                                        title={"Bolt Manager"}
                                        type={"Flash Management"}
                                    />
                                </div>
                                <div className="col-md-3 col-6 my-2">
                                    <AppCard
                                        apkFile={"https://play.google.com/store/apps/details?id=io.notepet"}
                                        logo={petcareLogo}
                                        title={"Notepet"}
                                        type={"Pet Care & Medication"}
                                    />
                                </div>
                                <div className="col-md-3 col-6 my-2">
                                    <AppCard
                                        apkFile={"https://play.google.com/store/apps/details?id=org.ecoinwallet"}
                                        logo={ecoinLogo}
                                        title={"ECOIN"}
                                        type={"Crypto Multichain Wallet"}
                                    />
                                </div>

                            </div>
                        </div>
                        {/* <ShowcaseProjects /> */}



                        <AppServices />

                        <h5 className='text-center' style={{ textDecoration: 'underline', textUnderlineOffset: "6px", color: '#6565ff' }}>SEND YOUR</h5>

                        <div className="row justify-content-center">
                            <div className="col-12 col-md-6">
                                <div className="d-flex justify-content-center">
                                    <h4 style={{ color: "white" }} className="display-4 my-4 ">Free App Development Proposal</h4>
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
                                    {formSubmitted && <h4 className="display-6 text-success">Thanks for sending us a proposal, our subordinate will get back to you shortly for your further queries!</h4>}

                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AppDevelopment