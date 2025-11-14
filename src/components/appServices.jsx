import React, { useRef } from 'react'
import { Link } from 'react-router-dom'


const AppServices = () => {
    const quoteRef = useRef()
    return (
        <>
            <div id='services' className='black-themetwo' style={{ background: "linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0))" }}>
                <div className=" text-center">
                    <h2 className='h5' style={{ textDecoration: 'underline', textUnderlineOffset: "6px", color: '#6565ff' }}>SERVICES</h2>
                    <h2 className='py-2 h4'>App Services We Offer</h2>
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
                                        <h2 class="card-title h5">Tailored App Design Solutions</h2>
                                        <p class="card-text">We create custom app designs that are user-centric and unique—blending functionality with creativity for visually stunning, responsive, and seamless experiences aligned to your goals and brand.</p>

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
                                        <h2 class="card-title h5">Mobile-Responsive UI/UX App Design</h2>
                                        <p class="card-text">We design apps that adapt effortlessly to all screen sizes—delivering smooth UX, fast loading times, and optimal performance on any device.</p>

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
                                        <h2 class="card-title h5">App Programming Excellence</h2>
                                        <p class="card-text">We build scalable, secure, and high‑speed mobile apps using modern stacks and best practices—ensuring exceptional performance and seamless functionality across platforms.</p>


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
                                        <h2 class="card-title h5">Web 3.0 App Solutions</h2>
                                        <p class="card-text">We build Web 3.0 apps with blockchain, dApps, and AI‑driven platforms. Our smart contract expertise ensures secure, transparent, and automated systems tailored to your needs.</p>


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
                                        <h2 class="card-title h5">E-Commerce App Solutions</h2>
                                        <p class="card-text">We build custom e‑commerce apps with intuitive UI, secure payments, and scalable features to elevate the shopping experience and increase conversions.</p>


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
                                        <h2 class="card-title h5">Hotel Management App Solutions</h2>
                                        <p class="card-text">We build hotel management apps with automation tools, guest management, and booking systems to streamline operations, enhance experiences, and grow revenue.</p>


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
                                        <h2 class="card-title h5">Content Management App Solutions</h2>
                                        <p class="card-text">We create CMS‑driven apps that simplify creating, editing, and managing content—delivering a seamless UX, scalability, and a flexible, easy‑to‑use system.</p>

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
                                        <h2 class="card-title h5">Bespoke App Development</h2>
                                        <p class="card-text">We deliver high‑performing Android and iOS apps tailored to your business goals. Our custom approach ensures smooth user experiences with robust functionality for diverse needs.</p>

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
                                        <p class="card-text">As a reliable App Development Company in Pakistan, we offer ongoing support, updates, and troubleshooting to ensure smooth performance and long‑term reliability for your app.</p>

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
                                        <h2 class="card-title h5">Cutting-Edge Technology</h2>
                                        <p class="card-text">We use the latest technologies to build innovative, high‑performing mobile applications with advanced features—ensuring scalability, robust security, and a future‑proof presence.</p>

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

export default AppServices