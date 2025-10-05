import React, { useRef } from 'react'
import { Link } from 'react-router-dom'


const WebsiteSerivces = () => {
    const quoteRef = useRef()
    return (
        <>
            <div id='services' className='black-themetwo' style={{ background: "linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0))" }}>
                <div className=" text-center">
                    <h2 className='h5' style={{ textDecoration: 'underline', textUnderlineOffset: "6px", color: '#6565ff' }}>SERVICES</h2>
                    <h2 className='py-2 h4'>Website Services We Offer</h2>
                    <h2 className='px-2 blockquote display-6 h1'> We provide a complete package of innovative services covering</h2>
               
                    <div className="container-fluid my-3 py-3">
                        <div className="row">
                            <div className="col-md-4 col-12 my-2"  data-aos="zoom-in-up" data-aos-duration="1000">
                                <div class="card rounded-4 h-100 overflow-hidden" style={{ borderColor: "#6565ff" }}>
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <div className='pb-3 pt-4' style={{ borderRadius: '100%' }}>
                                        <p className='display-1 h1' ><i style={{ color: '#6565ff' }} class={`fa fa-gears fa-lg`}></i></p>
                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h2 class="card-title h5">Custom Web Design                                        </h2>
                                        <p class="card-text">We focus in the development of custom web designs that are user-centric and distinctive, combining functionality with creativity to deliver a visually spectacular, responsive, and seamless experience that is customized to your business objectives and brand.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 my-2"  data-aos="zoom-in-up" data-aos-duration="1000">
                                <div class="card rounded-4 h-100 overflow-hidden" style={{ borderColor: "#6565ff" }}>
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <div className='pb-3 pt-4' style={{ borderRadius: '100%' }}>
                                        <p className='display-1 h1' ><i style={{ color: '#6565ff' }} class={`fa fa-link fa-lg`}></i></p>
                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h2 class="card-title h5">Website Development</h2>
                                        <p class="card-text">We develop websites that are responsive, scalable, and high-performance, customized to the specific requirements of your business. We employ the most recent technologies to guarantee a user-friendly experience and robust functionality.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 my-2"  data-aos="zoom-in-up" data-aos-duration="1000">
                                <div class="card rounded-4 h-100 overflow-hidden" style={{ borderColor: "#6565ff" }}>
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <div className='pb-3 pt-4' style={{ borderRadius: '100%' }}>
                                        <p className='display-1 h1' ><i style={{ color: '#6565ff' }} class={`fa fa-keyboard-o fa-lg`}></i></p>
                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h2 class="card-title h5">Website Programming</h2>
                                        <p class="card-text">We specialize in the development of scalable, secure, and rapid web solutions that are customized to the specific requirements of your business. Our services are based on the most recent technologies and the most effective coding practices.</p>


                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 my-2"  data-aos="zoom-in-up" data-aos-duration="1000">
                                <div class="card rounded-4 h-100 overflow-hidden" style={{ borderColor: "#6565ff" }}>
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <div className='pb-3 pt-4' style={{ borderRadius: '100%' }}>
                                        <p className='display-1 h1' ><i style={{ color: '#6565ff' }} class={`fa fa-btc fa-lg`}></i></p>
                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h2 class="card-title h5">Web 3.0 Solutions                                        </h2>
                                        <p class="card-text">
                                        We offer advanced Web 3.0 solutions, including blockchain integration, decentralized apps (dApps), and AI-powered platforms. Our smart contract development services ensure secure, transparent, and automated processes that are designed to meet the specific requirements of your business.
                                        </p>


                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 my-2"  data-aos="zoom-in-up" data-aos-duration="1000">
                                <div class="card rounded-4 h-100 overflow-hidden" style={{ borderColor: "#6565ff" }}>
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <div className='pb-3 pt-4' style={{ borderRadius: '100%' }}>
                                        <p className='display-1 h1' ><i style={{ color: '#6565ff' }} class={`fa fa-shopping-bag fa-lg`}></i></p>
                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h2 class="card-title h5">E-Commerce Solutions                                        </h2>
                                        <p class="card-text">
                                        We are experts in the development of personalized e-commerce solutions that are designed with user-friendly interfaces, secure payment gateways, and scalable features to improve the performance, conversions, and customer experience of your online store.
                                        </p>


                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 my-2"  data-aos="zoom-in-up" data-aos-duration="1000">
                                <div class="card rounded-4 h-100 overflow-hidden" style={{ borderColor: "#6565ff" }}>
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <div className='pb-3 pt-4' style={{ borderRadius: '100%' }}>
                                        <p className='display-1 h1' ><i style={{ color: '#6565ff' }} class={`fa fa-hotel fa-lg`}></i></p>
                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h2 class="card-title h5">Hotel Management Solutions</h2>
                                        <p class="card-text">
                                        We offer customized hotel management solutions that include automation features, visitor management, and booking systems to optimize operations, improve the guest experience, and increase revenue for your hotel business.
                                        </p>


                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 my-2"  data-aos="zoom-in-up" data-aos-duration="1000">
                                <div class="card rounded-4 h-100 overflow-hidden" style={{ borderColor: "#6565ff" }}>
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <div className='pb-3 pt-4' style={{ borderRadius: '100%' }}>

                                        <p className='display-1 h1 px-2' ><i style={{ color: '#6565ff' }} class={`fa fa-file-text-o fa-lg`}></i></p>


                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h2 class="card-title h5">Content Management Systems                                        </h2>
                                        <p class="card-text">
                                        Custom content management systems (CMS) are created by us to facilitate the efficient creation, editing, and administration of website content, thereby guaranteeing a seamless user experience, scalability, and flexible setup.
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 my-2"  data-aos="zoom-in-up" data-aos-duration="1000">
                                <div class="card rounded-4 h-100 overflow-hidden" style={{ borderColor: "#6565ff" }}>
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <div className='pb-3 pt-4' style={{ borderRadius: '100%' }}>

                                        <p className='display-1 h1 px-2' ><i style={{ color: '#6565ff' }} class={`fa fa-mobile fa-lg`}></i></p>


                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h2 class="card-title h5">Mobile-Responsive Design                                        </h2>
                                        <p class="card-text">
                                        We create websites that are fully responsive and mobile-friendly, adapting seamlessly to all screen sizes to ensure a seamless user experience, rapid loading times, and optimal performance on any device.
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 my-2"  data-aos="zoom-in-up" data-aos-duration="1000">
                                <div class="card rounded-4 h-100 overflow-hidden" style={{ borderColor: "#6565ff" }}>
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <div className='pb-3 pt-4' style={{ borderRadius: '100%' }}>

                                        <p className='display-1 h1 px-2' ><i style={{ color: '#6565ff' }} aria-hidden="true" class={`fa fa-user-circle-o fa-lg`}></i></p>


                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h2 class="card-title h5">Lifetime Customer Support</h2>
                                        <p class="card-text">
                                        We provide technical assistance, updates, and troubleshooting whenever you require it to guarantee the long-term reliability and peace of mind of your website. Our everlasting customer support guarantees that your website operates seamlessly.
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 my-2"  data-aos="zoom-in-up" data-aos-duration="1000">
                                <div class="card rounded-4 h-100 overflow-hidden" style={{ borderColor: "#6565ff" }}>
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <div className='pb-3 pt-4' style={{ borderRadius: '100%' }}>

                                        <p className='display-1 h1 px-2' ><i style={{ color: '#6565ff' }} class={`fa fa-globe fa-lg`}></i></p>


                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h2 class="card-title h5">Cutting-Edge Technology                                        </h2>
                                        <p class="card-text">
                                        We utilize state-of-the-art technology to develop websites that are both innovative and high-performing, while also providing advanced features. This guarantees scalability, security, and a digital presence that is future-proof for your business.
                                            </p>

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

export default WebsiteSerivces