import React, { useRef } from 'react'
import { Link } from 'react-router-dom'


const PpcServices = () => {
    const quoteRef = useRef()
    return (
        <>
            <div id='services' className='black-themetwo' style={{ background: "linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0))" }}>
                <div className=" text-center">
                    <h2 className='h5' style={{ textDecoration: 'underline', textUnderlineOffset: "6px", color: '#6565ff' }}>SERVICES</h2>
                    <h2 className='py-2 h4'>Google Ads Management Services We Offer</h2>
                    <h2 className='px-2 blockquote display-6 h1'> We provide a complete package of innovative services covering</h2>
               
                    <div className="container-fluid my-3 py-3">
                        <div className="row">
                            <div className="col-md-4 col-12 my-2">
                                <div class="card rounded-4 h-100 overflow-hidden" style={{ borderColor: "#6565ff" }}>
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <div className='pb-3 pt-4' style={{ borderRadius: '100%' }}>
                                        <p className='display-1 h1' ><i style={{ color: '#6565ff' }} class={`fa fa-keyboard-o fa-lg`}></i></p>
                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h2 class="card-title h5">Keyword Research & Strategy</h2>
                                        <p class="card-text">The basis of success is selecting appropriate keywords for bidding on. We will look into keywords and the competition in US to design a Google Ads campaign producing a good return on investment and increasing sales.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 my-2">
                                <div class="card rounded-4 h-100 overflow-hidden" style={{ borderColor: "#6565ff" }}>
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <div className='pb-3 pt-4' style={{ borderRadius: '100%' }}>
                                        <p className='display-1 h1' ><i style={{ color: '#6565ff' }} class={`fa fa-file-text-o fa-lg`}></i></p>
                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h2 class="card-title h5">Development of Campaigns and Ad Copy Production</h2>
                                        <p class="card-text">We will build your ads campaign, draft ad copy, and adjust all settings. Many ad variants will be developed and altered to reach the best conversion rates available.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 my-2">
                                <div class="card rounded-4 h-100 overflow-hidden" style={{ borderColor: "#6565ff" }}>
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <div className='pb-3 pt-4' style={{ borderRadius: '100%' }}>
                                        <p className='display-1 h1' ><i style={{ color: '#6565ff' }} class={`fa fa-gears fa-lg`}></i></p>
                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h2 class="card-title h5">Technical Reporting and Team Meetings</h2>
                                        <p class="card-text">Every month we will send you a thorough report including what was done with Ads Manager together with a projection for the next month. We will also set up a review call for our team and yours.</p>


                                    </div>
                                </div>
                            </div>
                          
                            <div className="col-md-4 col-12 my-2">
                                <div class="card rounded-4 h-100 overflow-hidden" style={{ borderColor: "#6565ff" }}>
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <div className='pb-3 pt-4' style={{ borderRadius: '100%' }}>

                                        <p className='display-1 h1 px-2' ><i style={{ color: '#6565ff' }} class={`fa fa-map fa-lg`}></i></p>


                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h2 class="card-title h5">Local Google Ads PPC </h2>
                                        <p class="card-text">
                                        Data show that 64% of consumers in the US search online for nearby companies. By means of tweaks to your Google ads campaign, enhance the local Google ads for your business and draw customers more likely to buy. We maximize your Google ads ppc campaign account and track your digital reputation to raise your following in the surrounding area.
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 my-2">
                                <div class="card rounded-4 h-100 overflow-hidden" style={{ borderColor: "#6565ff" }}>
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <div className='pb-3 pt-4' style={{ borderRadius: '100%' }}>

                                        <p className='display-1 h1 px-2' ><i style={{ color: '#6565ff' }} class={`fa fa-map-marker fa-lg`}></i></p>


                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h2 class="card-title h5">Franchise Google Ads PPC </h2>
                                        <p class="card-text">
                                        For multiple-location businesses, use Metatech Official's Google Ads Management services to augment your efforts at franchise marketing. We create original website designs, run Nextdoor advertising, and distribute geo-specific content. The Google Ads Management company Metatech will help your brand's visibility increase and generate leads and income in United States.
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 my-2">
                                <div class="card rounded-4 h-100 overflow-hidden" style={{ borderColor: "#6565ff" }}>
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <div className='pb-3 pt-4' style={{ borderRadius: '100%' }}>

                                        <p className='display-1 h1 px-2' ><i style={{ color: '#6565ff' }} aria-hidden="true" class={`fa fa-desktop fa-lg`}></i></p>


                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h2 class="card-title h5">Shopify Google Ads PPC </h2>
                                        <p class="card-text">
                                        To draw more customers, raise the web presence of your online store. For any urgent issues, our Google Ads specialists provide continuous customer service. To best maximize your customers' Shopify experience, we offer Google Shopify Ads, SEO audits, Shopify web design, paid advertising, and review response publishing services.
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 my-2">
                                <div class="card rounded-4 h-100 overflow-hidden" style={{ borderColor: "#6565ff" }}>
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <div className='pb-3 pt-4' style={{ borderRadius: '100%' }}>

                                        <p className='display-1 h1 px-2' ><i style={{ color: '#6565ff' }} class={`fa fa-amazon fa-lg`}></i></p>


                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h2 class="card-title h5">Amazon Google Ads PPC </h2>
                                        <p class="card-text">
                                        Make your brand unique on Amazon to attract millions of ready-made buyers. We maximize your Amazon product listings, maximize ad positions, and apply goal-oriented Amazon marketing solutions (AMS) Google Ads solutions to sell your products to the correct target market.
                                            </p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 my-2">
                                <div class="card rounded-4 h-100 overflow-hidden" style={{ borderColor: "#6565ff" }}>
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <div className='pb-3 pt-4' style={{ borderRadius: '100%' }}>

                                        <p className='display-1 h1 px-2' ><i style={{ color: '#6565ff' }} class={`fa fa-shopping-bag fa-lg`}></i></p>


                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h2 class="card-title h5">Ecommerce Google Ads PPC </h2>
                                        <p class="card-text">
                                        Give your customers simple, round-the-clock shopping experiences to increase retention. To provide unique brand experiences, we start targeted Google ads campaigns, streamline your website for mobile devices and voice search. Another tool at our disposal to increase your sales volume is integration with Walmart Marketplace. 
                                            </p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 my-2">
                                <div class="card rounded-4 h-100 overflow-hidden" style={{ borderColor: "#6565ff" }}>
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <div className='pb-3 pt-4' style={{ borderRadius: '100%' }}>

                                        <p className='display-1 h1 px-2' ><i style={{ color: '#6565ff' }} class={`fa fa-wordpress fa-lg`}></i></p>


                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h2 class="card-title h5">WordPress Google Ads PPC </h2>
                                        <p class="card-text">
                                        Looking for cheap US Google Ads PPC management? Our Google Ad campaigns increase website traffic while lowering costs. We offer complete PPC (pay per click) solutions because we have a WordPress Google Ads expert. Our WordPress expert will boost your search engine rankings, increase website traffic, and boost your ROI.
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

export default PpcServices