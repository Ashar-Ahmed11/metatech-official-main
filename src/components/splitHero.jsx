import React from 'react'
import { Link } from 'react-router-dom'
import appDevHero from './appDevHero.png'
const SplitHero = () => {
    const { location: { hostname } } = window
    const heroSrc = hostname == "localhost" ? appDevHero : `https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60/https://${hostname}/${appDevHero}`
    return (
        <div className="my-2">
            <div className="container rounded-3 py-5">
                <div className="row">

                    {/* Left Image */}
                    <div data-aos="fade-right" data-aos-duration="1000" style={{ height: "max-content" }} className="col-md-6 col-12">
                        <img
                            style={{ height: "90%", width: "100%" }}
                            className="card-img rounded-4 scale-pulse"
                            src={heroSrc}
                            alt="Split hero visual"
                        />
                    </div>

                    {/* Right Content */}
                    <div data-aos="fade-left" data-aos-duration="1000" className="col-md-6 col-12">
                        <div className="card border-0 shadow-0 pt-5 px-3 bg-transparent">

                            <p className="mb-2 text-light">Transforming Your Business Ideas into Reality: </p>

                            <p className="h1 mb-4 text-light" style={{ fontFamily: "Barranco" }}>
                            Mobile App Development Services
                            </p>

                            <p className="mb-4 text-light">Our Mobile App Development Company specializes in developing innovative mobile applications. We offer comprehensive App Development Services, including Android and iOS App Development. As a top App Development Company in Pakistan, we help businesses succeed in the digital landscape.Trust our App Development Company to transform your ideas into reality and take your business to the next level.</p>

                            <div className="d-flex justify-content-start">
                                <Link onClick={()=>window.scrollTo({top:0,bottom:0,behavior:'instant'})} to="/contact" className="btn btn-primary rounded-pill px-4">
                                    Get A Quote
                                </Link>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default SplitHero