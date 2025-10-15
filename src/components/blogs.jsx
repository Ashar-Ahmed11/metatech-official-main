import React from 'react'
import MetaDecorator from './metadecorator'
import ContactCarousal from './carousal copy'
import blogcover from './agenticAI.png'
import { Link } from 'react-router-dom'
const Blogs = ({ title, description, showBrand }) => {
    const { location: { hostname } } = window

    return (
        <div>
            <MetaDecorator showBrand={showBrand} title={title} description={description} imageUrl={"https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60/https://res.cloudinary.com/dextrzp2q/image/upload/v1720097625/ob14j2kfdbjqq5te5tbn.png"} />
            <ContactCarousal pageTitle={title} />
            <div style={{ backgroundColor: '#151619' }}>
                <div className="container py-5 text-center text-light">
                    <h2 className='h5' style={{ textDecoration: 'underline', textUnderlineOffset: "6px", color: '#6565ff' }}>OUR BLOGS</h2>
                    <h2 className='py-2 h4'>Resources & Insights</h2>
                    <h2 className='px-2 blockquote display-6 h1'>The latest industry news, interviews, technologies, and resources</h2>
                    <div className="row" >
                        <div
                            className="col-sm-6 col-lg-4 col-12 my-2 " data-aos="zoom-in-up" data-aos-duration="1000"

                        >
                            <Link onClick={() => window.scrollTo({ behavior: 'smooth', top: 0, left: 0 })} to="/blog/role-of-agenticai-in-making-money" style={{ textDecoration: "none" }}><div
                                className="card text-light rounded-4 h-100 overflow-hidden"
                                style={{
                                    borderColor: "rgb(101, 101, 255)",
                                    backgroundColor: "rgba(0, 0, 0, 0)"
                                }}
                            >
                                <img
                                    src={hostname == "localhost" ? blogcover : `https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60/https://${hostname}/${blogcover}`}
                                    className="card-img-top"
                                    alt="An interactive poster of Metatech Instagram marketing service"
                                />

                                <div className="card-body justify-content-end d-flex flex-column text-start">
                                    <h2 className="card-title text-light text-opacity-75 h6">
                                        Search Engine Optimization
                                    </h2>
                                    <h2 className="card-title h5">
                                        Why Consider Metatech Official for White Label SEO Services?

                                    </h2>
                                    <p className="card-text">
                                        Businesses of all kinds in the modern digital scene need SEO to improve their online presence. Not all SEO services, meanwhile, are created equally
                                    </p>
                                </div>
                                <div style={{ borderTopColor: "rgb(101, 101, 255)" }} className="card-footer">
                                    <div className='d-flex align-items-center'>
                                        <i class="fa fa-user fa-2x"></i>
                                        <div className='d-flex flex-column px-3'>
                                            <span className="text-light text-start">Metatech Official</span>
                                            <span className="text-light text-opacity-75 text-start">16 Oct 2025</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div
                            className="col-sm-6 col-lg-4 col-12 my-2 " data-aos="zoom-in-up" data-aos-duration="1000"

                        >
                            <Link onClick={() => window.scrollTo({ behavior: 'smooth', top: 0, left: 0 })} to="/blog/white-label-seo" style={{ textDecoration: "none" }}><div
                                className="card text-light rounded-4 h-100 overflow-hidden"
                                style={{
                                    borderColor: "rgb(101, 101, 255)",
                                    backgroundColor: "rgba(0, 0, 0, 0)"
                                }}
                            >
                                <img
                                    src="https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60/https://metatech-official.co/static/media/whiteseo.c6fd979360074549e022.png"
                                    className="card-img-top"
                                    alt="An interactive poster of Metatech Instagram marketing service"
                                />

                                <div className="card-body justify-content-end d-flex flex-column text-start">
                                    <h2 className="card-title text-light text-opacity-75 h6">
                                        Search Engine Optimization
                                    </h2>
                                    <h2 className="card-title h5">
                                        Why Consider Metatech Official for White Label SEO Services?

                                    </h2>
                                    <p className="card-text">
                                        Businesses of all kinds in the modern digital scene need SEO to improve their online presence. Not all SEO services, meanwhile, are created equally
                                    </p>
                                </div>
                                <div style={{ borderTopColor: "rgb(101, 101, 255)" }} className="card-footer">
                                    <div className='d-flex align-items-center'>
                                        <i class="fa fa-user fa-2x"></i>
                                        <div className='d-flex flex-column px-3'>
                                            <span className="text-light text-start">Metatech Official</span>
                                            <span className="text-light text-opacity-75 text-start">20 Jan 2025</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>


                    </div>
                </div>
            </div>
        </div >
    )
}

export default Blogs