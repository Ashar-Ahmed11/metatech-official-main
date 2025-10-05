import React from 'react'
import MetaDecorator from './metadecorator'
import ContactCarousal from './carousal copy'
import { Link } from 'react-router-dom'
const Blogs = ({ title, description, showBrand }) => {
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
                            <Link onClick={() => window.scrollTo({ behavior: 'smooth', top: 0, left: 0 })} to="/blog/white-label-seo" style={{textDecoration:"none"}}><div
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
                        {/* <div
                            className="col-sm-6 col-lg-4 col-12 my-2 " data-aos="zoom-in-up" data-aos-duration="1000"

                        >
                            <div
                                className="card text-light rounded-4 h-100 overflow-hidden"
                                style={{
                                    borderColor: "rgb(101, 101, 255)",
                                    backgroundColor: "rgba(0, 0, 0, 0)"
                                }}
                            >
                                <img
                                    src="https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60,w_740,h_605,c_fill/https://i.pinimg.com/736x/53/8b/68/538b6866f3b44e1c28006a72e7da7880.jpg"
                                    className="card-img-top"
                                    alt="An interactive poster of Metatech Facebook marketing service"
                                />
                                <div className="card-body justify-content-start d-flex flex-column">
                                    <h2 className="card-title h5">
                                        Improve Your Facebook Profile: Release Social Media Marketing Power
                                    </h2>
                                    <p className="card-text">
                                        Move across Facebook with grace. Our staff will run focused ad campaigns, create shareable posts, and maximize your page to make sure the message of your brand reaches the correct audience at the correct moment.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-sm-6 col-lg-4 col-12 my-2 " data-aos="zoom-in-up" data-aos-duration="1000"

                        >
                            <div
                                className="card text-light rounded-4 h-100 overflow-hidden"
                                style={{
                                    borderColor: "rgb(101, 101, 255)",
                                    backgroundColor: "rgba(0, 0, 0, 0)"
                                }}
                            >
                                <img
                                    src="https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60,w_740,h_605,c_fill/https://img.freepik.com/premium-vector/twitter-icons-social-media-with-smartphone_112255-2054.jpg?w=740"
                                    className="card-img-top"
                                    alt="An interactive poster of Metatech Twitter marketing service"
                                />
                                <div className="card-body justify-content-start d-flex flex-column">
                                    <h2 className="card-title h5">
                                        Plan for Twitter success by improving your online profile with our agency.
                                    </h2>
                                    <p className="card-text">
                                        By creating concise, powerful tweets, encouraging real-time conversations, and assembling a follower base as active as it is passionate, we will help you become master of Twitter's fast-paced environment.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-sm-6 col-lg-4 col-12 my-2 " data-aos="zoom-in-up" data-aos-duration="1000"

                        >
                            <div
                                className="card text-light rounded-4 h-100 overflow-hidden"
                                style={{
                                    borderColor: "rgb(101, 101, 255)",
                                    backgroundColor: "rgba(0, 0, 0, 0)"
                                }}
                            >
                                <img
                                    src="https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60,w_740,h_605,c_fill/https://images.ctfassets.net/00i767ygo3tc/bts2I3OTBsnpwqB1vsLag/baaea1a8b94de757cb24219cd039e709/complete-guide-linkedin-video.png?w=1800&q=50"
                                    className="card-img-top"
                                    alt="An interactive poster of Metatech LinkedIn marketing service"
                                />
                                <div className=" card-body  d-flex flex-column">
                                    <h2 className="card-title h5">
                                        LinkedIn Presence Development: Expert Strategies for Professional Branding
                                    </h2>
                                    <p className="card-text">
                                        Create great relationships on the leading professional network worldwide. Our approaches cover industry-specific engagement, thought leadership material, and network development, so enhancing the reputation and impact of your brand.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-sm-6 col-lg-4 col-12 my-2 " data-aos="zoom-in-up" data-aos-duration="1000"

                        >
                            <div
                                className="card text-light rounded-4 h-100 overflow-hidden"
                                style={{
                                    borderColor: "rgb(101, 101, 255)",
                                    backgroundColor: "rgba(0, 0, 0, 0)"
                                }}
                            >
                                <img
                                    src="https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60,w_740,h_605,c_fill/https://img.freepik.com/free-vector/seo-analysis-isometric-composition-with-web-optimization-symbols_1284-32010.jpg?w=740&t=st=1691520660~exp=1691521260~hmac=bc76ad025dd5f278df64ad5de44b0013d88be19b036f8a5fa4c137dc6a6a9934"
                                    className="card-img-top"
                                    alt="An interactive poster of Metatech Search Engine Optimization Services"
                                />
                                <div className="card-body justify-content-start d-flex flex-column">
                                    <h2 className="card-title h5">
                                        Improve the presence of your website using our tested strategies.
                                    </h2>
                                    <p className="card-text">
                                        Your website is the digital front door to your company in the modern era. With our complete website presence enhancing techniques, make a lasting impression and stand out among the large internet terrain.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-sm-6 col-lg-4 col-12 my-2 " data-aos="zoom-in-up" data-aos-duration="1000"

                        >
                            <div
                                className="card text-light rounded-4 h-100 overflow-hidden"
                                style={{
                                    borderColor: "rgb(101, 101, 255)",
                                    backgroundColor: "rgba(0, 0, 0, 0)"
                                }}
                            >
                                <img
                                    src="https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60,w_740,h_605,c_fill/https://img.freepik.com/premium-photo/whatsapp-icon-screen-smartphone-mobile-whatsapp-reactions_41204-5039.jpg?w=740"
                                    className="card-img-top"
                                    alt="An interactive poster of Metatech Whatsapp marketing service"
                                />
                                <div className=" card-body  d-flex flex-column">
                                    <h2 className="card-title h5">
                                        Increase Your Business Reach: Improve Your WhatsApp Profile using Our Strategic Approach
                                    </h2>
                                    <p className="card-text">
                                        WhatsApp has become a great tool for reaching consumers and encouraging meaningful interactions in the age of fast communication. Using our all-encompassing presence boosting techniques will help you to fully utilize WhatsApp.
                                    </p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Blogs