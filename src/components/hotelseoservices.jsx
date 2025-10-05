import React, { useRef } from 'react'
import { Link } from 'react-router-dom'


const HotelSeoServices = () => {
    const quoteRef = useRef()
    return (
        <>
            <div id='services' className='black-themetwo' style={{ background: "linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0))" }}>
                <div className=" text-center">
                    <h2 className='h5' style={{ textDecoration: 'underline', textUnderlineOffset: "6px", color: '#6565ff' }}>SERVICES</h2>
                    <h2 className='py-2 h4'>SEO Services We Offer</h2>
                    <h2 className='px-2 blockquote display-6 h1'>We provide a complete package of innovative services covering</h2>
               
                    <div className="container-fluid my-3 py-3">
                        <div className="row">
                            <div className="col-md-4 col-12 my-2">
                                <div class="card rounded-4 h-100 overflow-hidden" style={{ borderColor: "#6565ff" }}>
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <div className='pb-3 pt-4' style={{ borderRadius: '100%' }}>
                                        <p className='display-1 h1' ><i style={{ color: '#6565ff' }} class={`fa-plane fa fa-xl`}></i></p>
                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h2 class="card-title h5">SEO for Travel Agency</h2>
                                        <p class="card-text">Metatech Official is a professional travel SEO agency offering expert SEO for travel agencies, travel websites, and the entire travel industry. We provide tailored travel SEO services, optimizing SEO for travel agents and companies. Our SEO services for the travel industry ensure visibility and growth.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 my-2">
                                <div class="card rounded-4 h-100 overflow-hidden" style={{ borderColor: "#6565ff" }}>
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <div className='pb-3 pt-4' style={{ borderRadius: '100%' }}>
                                        <p className='display-1 h1' ><i style={{ color: '#6565ff' }} class={`fa-solid fa-keyboard-o fa-xl`}></i></p>
                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h2 class="card-title h5">Keyword Research & Strategy</h2>
                                        <p class="card-text">Metatech is the only SEO firm aware of your niche that can help you rank better for specific search terms. Our experienced SEO consultant will investigate the terms you have chosen and review the keywords your website is now ranking for to produce a list of keywords that most fit your website and the competitive environment.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 my-2">
                                <div class="card rounded-4 h-100 overflow-hidden" style={{ borderColor: "#6565ff" }}>
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <div className='pb-3 pt-4' style={{ borderRadius: '100%' }}>
                                        <p className='display-1 h1' ><i style={{ color: '#6565ff' }} class={`fa-solid fa-link fa-xl`}></i></p>
                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h2 class="card-title h5">Link Building</h2>
                                        <p class="card-text">You need backlinks, but not any link to rank higher in search results! This is the reason you should collaborate with a search engine optimization company such as Metatech Official, which has a staff committed to link building and connections to many pertinent and high-quality websites.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 my-2">
                                <div class="card rounded-4 h-100 overflow-hidden" style={{ borderColor: "#6565ff" }}>
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <div className='pb-3 pt-4' style={{ borderRadius: '100%' }}>
                                        <p className='display-1 h1' ><i style={{ color: '#6565ff' }} class={`fa-solid fa-gears fa-xl`}></i></p>
                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h2 class="card-title h5">Technical SEO</h2>
                                        <p class="card-text">Faster pages and back-end optimisations for your website can improve rankings. Fixing these problems will help search engines index your website more easily. And your ranks could bring you even more gratification!</p>


                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 my-2">
                                <div class="card rounded-4 h-100 overflow-hidden" style={{ borderColor: "#6565ff" }}>
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <div className='pb-3 pt-4' style={{ borderRadius: '100%' }}>
                                        <p className='display-1 h1' ><i style={{ color: '#6565ff' }} class={`fa fa-file-text-o fa-xl`}></i></p>
                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h2 class="card-title h5">On-Page SEO</h2>
                                        <p class="card-text">
                                        Improve your web presence to draw great traffic. At Metatech, we ensure that our SEO services follow best practices of search engines so as to boost the credibility of your website. Our SEO experts optimise your HTML elements and create original, worthwhile material using high-resolution images.
                                        </p>


                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 my-2">
                                <div class="card rounded-4 h-100 overflow-hidden" style={{ borderColor: "#6565ff" }}>
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <div className='pb-3 pt-4' style={{ borderRadius: '100%' }}>
                                        <p className='display-1 h1' ><i style={{ color: '#6565ff' }} class={`fa fa-file-text fa-xl`}></i></p>
                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h2 class="card-title h5">Off-Page SEO</h2>
                                        <p class="card-text">
                                        The primary goals are improving your web presence and developing brand trust. Work with our SEO company and let us help you to present your field of expertise. To generate worthwhile backlinks and positive reviews, we employ social media marketing, backlink creation, and influencer working with techniques.
                                        </p>


                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 my-2">
                                <div class="card rounded-4 h-100 overflow-hidden" style={{ borderColor: "#6565ff" }}>
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <div className='pb-3 pt-4' style={{ borderRadius: '100%' }}>

                                        <p className='display-1 h1 px-2' ><i style={{ color: '#6565ff' }} class={`fa-solid fa-map fa-xl`}></i></p>


                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h2 class="card-title h5">Local SEO</h2>
                                        <p class="card-text">
                                        According to data, 64% of customers search online for local businesses. With changes to your Google Business Profile or Google My Business (GMB) account, improve the local search results for your company on Google with white label seo and attract clients more likely to make a purchase. To increase your following in the nearby area, we update your GMB account and monitor your digital reputation.
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 my-2">
                                <div class="card rounded-4 h-100 overflow-hidden" style={{ borderColor: "#6565ff" }}>
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <div className='pb-3 pt-4' style={{ borderRadius: '100%' }}>

                                        <p className='display-1 h1 px-2' ><i style={{ color: '#6565ff' }} class={`fa fa-map-marker fa-xl`}></i></p>


                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h2 class="card-title h5">Franchise SEO</h2>
                                        <p class="card-text">
                                        Use Metatech's SEO services for multiple-location companies to strengthen your efforts at franchise marketing. We produce original website designs, run Nextdoor ads, and publish geo-specific material. Metatech is the SEO firm going to improve the visibility of your brand and increase leads and income.
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 my-2">
                                <div class="card rounded-4 h-100 overflow-hidden" style={{ borderColor: "#6565ff" }}>
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <div className='pb-3 pt-4' style={{ borderRadius: '100%' }}>

                                        <p className='display-1 h1 px-2' ><i style={{ color: '#6565ff' }} aria-hidden="true" class={`fa fa-desktop fa-xl`}></i></p>


                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h2 class="card-title h5">Shopify SEO</h2>
                                        <p class="card-text">
                                        Increase the web presence of your online store to attract a larger audience. Our SEO experts offer constant customer service for any urgent problems. We provide Shopify SEO audits, Shopify web design, paid advertising, and review response publishing services to best maximise your customers' Shopify experience.
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 my-2">
                                <div class="card rounded-4 h-100 overflow-hidden" style={{ borderColor: "#6565ff" }}>
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <div className='pb-3 pt-4' style={{ borderRadius: '100%' }}>

                                        <p className='display-1 h1 px-2' ><i style={{ color: '#6565ff' }} class={`fa fa-amazon fa-xl`}></i></p>


                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h2 class="card-title h5">Amazon SEO</h2>
                                        <p class="card-text">
                                        On Amazon, make your brand stand out to draw millions of ready-to-buy consumers. We maximise your Amazon product listings, make the most of ad positions, and apply goal-oriented Amazon marketing solutions (AMS) SEO solutions to sell your products to the right consumers.
                                            </p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 my-2">
                                <div class="card rounded-4 h-100 overflow-hidden" style={{ borderColor: "#6565ff" }}>
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <div className='pb-3 pt-4' style={{ borderRadius: '100%' }}>

                                        <p className='display-1 h1 px-2' ><i style={{ color: '#6565ff' }} class={`fa fa-shopping-bag fa-xl`}></i></p>


                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h2 class="card-title h5">Ecommerce SEO</h2>
                                        <p class="card-text">
                                        Give your clients easy, round-the-clock shopping experience to boost retention. We start focused email campaigns and simplify your website for mobile devices and voice search to offer distinctive brand experiences. Integrations with Walmart Marketplace are another tool we have available to boost your sales volume. 
                                            </p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 my-2">
                                <div class="card rounded-4 h-100 overflow-hidden" style={{ borderColor: "#6565ff" }}>
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <div className='pb-3 pt-4' style={{ borderRadius: '100%' }}>

                                        <p className='display-1 h1 px-2' ><i style={{ color: '#6565ff' }} class={`fa fa-wordpress fa-xl`}></i></p>


                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h2 class="card-title h5">Wordpress SEO</h2>
                                        <p class="card-text">
                                        Looking for cost-effective search engine ranking corrections? Our Wordpress SEO methods are supposed to raise your website's visibility without sacrificing its budget. Having a Wordpress SEO expert on our staff, we offer whole SEO solutions fit for your needs. Our Wordpress specialist will help your search engine results to improve and boost website traffic.
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

export default HotelSeoServices