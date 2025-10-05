import React, { useRef } from 'react'
import { Link } from 'react-router-dom'


const Services = () => {
    const quoteRef = useRef()
    return (
        <>
            <div id='services' className='black-theme' style={{ background: "linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0))" }}>
                <div className="py-5 text-center">
                    <h2 className='h5' style={{ textDecoration: 'underline', textUnderlineOffset: "6px", color: '#6565ff' }}>SERVICES</h2>
                    <h2 className='py-2 h4'>Services We Offer</h2>
                    <h2 className='px-2 blockquote display-6 h1'> We provide a complete package of innovative services covering </h2>
                    <div className="container-fluid my-3 py-3">
                        <div className="row">
                            <div className="col-sm-6 col-lg-3 col-12 my-2">
                                <div class="card rounded-4 h-100 overflow-hidden" style={{ borderColor: "#6565ff" }}>
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <div className='pb-3 pt-4' style={{ borderRadius: '100%' }}>
                                        <p className='display-1 h1' ><i style={{ color: '#6565ff' }} class={`fa fa-code fa-lg`}></i></p>
                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h2 class="card-title h5">Website Development</h2>
                                        <p class="card-text">turning your ideas into interesting websites with strong functionality, elegant design, and easy interface.</p>
                                        <div className='d-flex justify-content-center align-items-end' style={{ flex: 1 }}>
                                            <Link ref={quoteRef} style={{ borderColor: '#6565ff' }} to={'/contact'} onClick={()=>window.scrollTo({top:0,bottom:0,behavior:'smooth'})} class="btn btn-primary">Get A Quote</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 col-12 my-2">
                                <div class="card rounded-4 h-100 overflow-hidden" style={{ borderColor: "#6565ff" }}>
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <div className='pb-3 pt-4' style={{ borderRadius: '100%' }}>
                                        <p className='display-1 h1' ><i style={{ color: '#6565ff' }} class={`fa fa-globe fa-lg`}></i></p>
                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h2 class="card-title h5">Search Engine Optimization</h2>
                                        <p class="card-text">Using strategic SEO methods will help you to unlock your digital potential by improving your online presence and natural rankings.</p>
                                        <div className='d-flex justify-content-center align-items-end' style={{ flex: 1 }}>
                                            <span style={{ borderColor: '#6565ff' }} onClick={()=>quoteRef.current.click()} class="btn btn-primary">Get A Quote</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 col-12 my-2">
                                <div class="card rounded-4 h-100 overflow-hidden" style={{ borderColor: "#6565ff" }}>
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <div className='pb-3 pt-4' style={{ borderRadius: '100%' }}>
                                        <div className="d-flex justify-content-center">
                                            <p className='display-1 h1 px-2' ><i style={{ color: '#6565ff' }} class={`fa fa-apple fa-lg`}></i></p>
                                            <p className='display-1 h1 px-2' ><i style={{ color: '#6565ff' }} class={`fa fa-android fa-lg`}></i></p>
                                        </div>
                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h2 class="card-title h5">App Development</h2>
                                        <p class="card-text">Creating hybrid apps with React Native that effortlessly mix cross-platform compatibility with native performance will help you to reach more.</p>

                                        <div className='d-flex justify-content-center align-items-end' style={{ flex: 1 }}>
                                            <span style={{ borderColor: '#6565ff' }} onClick={()=>quoteRef.current.click()} class="btn btn-primary">Get A Quote</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 col-12 my-2">
                                <div class="card rounded-4 h-100 overflow-hidden" style={{ borderColor: "#6565ff" }}>
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <div className='pb-3 pt-4' style={{ borderRadius: '100%' }}>

                                        <p className='display-1 h1 px-2' ><i style={{ color: '#6565ff' }} class={`fa fa-line-chart fa-lg`}></i></p>


                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h2 class="card-title h5">Digital Marketing</h2>
                                        <p class="card-text">Increasing your online presence with precise digital marketing solutions that boost brand awareness and optimize conversion rate.</p>
                                        <div className='d-flex justify-content-center align-items-end' style={{ flex: 1 }}>
                                            <span style={{ borderColor: '#6565ff' }} onClick={()=>quoteRef.current.click()} class="btn btn-primary">Get A Quote</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 col-12 my-2">
                                <div class="card rounded-4 h-100 overflow-hidden" style={{ borderColor: "#6565ff" }}>
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <div className='pb-3 pt-4' style={{ borderRadius: '100%' }}>

                                        <p className='display-1 h1 px-2' ><i style={{ color: '#6565ff' }} class={`fa fa-gears fa-lg`}></i></p>


                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h2 class="card-title h5">Custom Web Design</h2>
                                        <p class="card-text">We focus in the development of custom web designs that are user-centric and distinctive, combining functionality with creativity to deliver a visually spectacular, responsive, and seamless experience that is customized to your business objectives and brand.</p>
                                        <div className='d-flex justify-content-center align-items-end' style={{ flex: 1 }}>
                                            <span style={{ borderColor: '#6565ff' }} onClick={()=>quoteRef.current.click()} class="btn btn-primary">Get A Quote</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 col-12 my-2">
                                <div class="card rounded-4 h-100 overflow-hidden" style={{ borderColor: "#6565ff" }}>
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <div className='pb-3 pt-4' style={{ borderRadius: '100%' }}>

                                        <p className='display-1 h1 px-2' ><i style={{ color: '#6565ff' }} class={`fa fa-btc fa-lg`}></i></p>


                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h2 class="card-title h5">Web 3.0 Solutions                                        </h2>
                                        <p class="card-text">We offer advanced Web 3.0 solutions, including blockchain integration, decentralized apps (dApps), and AI-powered platforms. Our smart contract development services ensure secure, transparent, and automated processes that are designed to meet the specific requirements of your business.</p>
                                        <div className='d-flex justify-content-center align-items-end' style={{ flex: 1 }}>
                                            <span style={{ borderColor: '#6565ff' }} onClick={()=>quoteRef.current.click()} class="btn btn-primary">Get A Quote</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 col-12 my-2">
                                <div class="card rounded-4 h-100 overflow-hidden" style={{ borderColor: "#6565ff" }}>
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <div className='pb-3 pt-4' style={{ borderRadius: '100%' }}>

                                        <p className='display-1 h1 px-2' ><i style={{ color: '#6565ff' }} class={`fa fa-shopping-bag fa-lg`}></i></p>


                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h2 class="card-title h5">E-Commerce Solutions</h2>
                                        <p class="card-text">We are experts in the development of personalized e-commerce solutions that are designed with user-friendly interfaces, secure payment gateways, and scalable features to improve the performance, conversions, and customer experience of your online store.</p>
                                        <div className='d-flex justify-content-center align-items-end' style={{ flex: 1 }}>
                                            <span style={{ borderColor: '#6565ff' }} onClick={()=>quoteRef.current.click()} class="btn btn-primary">Get A Quote</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 col-12 my-2">
                                <div class="card rounded-4 h-100 overflow-hidden" style={{ borderColor: "#6565ff" }}>
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <div className='pb-3 pt-4' style={{ borderRadius: '100%' }}>

                                        <p className='display-1 h1 px-2' ><i style={{ color: '#6565ff' }} class={`fa fa-hotel fa-lg`}></i></p>


                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h2 class="card-title h5">Hotel Management Solutions</h2>
                                        <p class="card-text">
                                        We offer customized hotel management solutions that include automation features, visitor management, and booking systems to optimize operations, improve the guest experience, and increase revenue for your hotel business.
                                        </p>
                                        <div className='d-flex justify-content-center align-items-end' style={{ flex: 1 }}>
                                            <span style={{ borderColor: '#6565ff' }} onClick={()=>quoteRef.current.click()} class="btn btn-primary">Get A Quote</span>
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

export default Services