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
                    <h2 className='px-2 blockquote display-6 h1'> We offer a full spectrum of cutting-edge services which include</h2>
                    <h1 className='d-none'>Metatech - Website Development | Designing | SEO | Digital Marketing</h1>
                    <div className="container-fluid my-3 py-3">
                        <div className="row">
                            <div className="col-sm-6 col-lg-3 col-12 my-2">
                                <div class="card rounded-4 h-100 overflow-hidden" style={{ borderColor: "#6565ff" }}>
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <div className='pb-3 pt-4' style={{ borderRadius: '100%' }}>
                                        <p className='display-1 h1' ><i style={{ color: '#6565ff' }} class={`fa-solid fa-code fa-xl`}></i></p>
                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h2 class="card-title h5">Website Development</h2>
                                        <p class="card-text">Transforming your ideas into engaging websites with sleek designing, user-friendly interfaces, and robust functionality.</p>
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
                                        <p className='display-1 h1' ><i style={{ color: '#6565ff' }} class={`fa-solid fa-earth-americas fa-xl`}></i></p>
                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h2 class="card-title h5">Search Engine Optimization</h2>
                                        <p class="card-text">Unlocking your digital potential through strategic SEO techniques, elevating your online visibility and organic rankings.</p>
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
                                            <p className='display-1 h1 px-2' ><i style={{ color: '#6565ff' }} class={`fa-brands fa-apple fa-xl`}></i></p>
                                            <p className='display-1 h1 px-2' ><i style={{ color: '#6565ff' }} class={`fa-brands fa-android fa-xl`}></i></p>
                                        </div>
                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h2 class="card-title h5">App Development</h2>
                                        <p class="card-text">Building hybrid apps with React Native that seamlessly combine native performance and cross-platform compatibility, expanding your reach.</p>

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

                                        <p className='display-1 h1 px-2' ><i style={{ color: '#6565ff' }} class={`fa-solid fa-chart-line fa-xl`}></i></p>


                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h2 class="card-title h5">Digital Marketing</h2>
                                        <p class="card-text">Amplifying your online presence through strategic digital marketing solutions that drive brand awareness and maximize conversions.</p>
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