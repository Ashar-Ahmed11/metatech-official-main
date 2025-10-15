import React from 'react'
import blogcover from './whiteseo.png'
import { useState } from 'react'
import { useEffect } from 'react'
import MetaDecorator from './metadecorator'
const BlogPost = () => {
    const [comments, setComments] = useState([])
    const [commentBody, setCommentBody] = useState({ name: "", email: "", website: "", description: "" })
    const [commentLoader, setCommentLoader] = useState(false)
    const [commentSubmitted, setCommentSubmitted] = useState(false)
    const [fetchLoader, setFetchLoader] = useState(true)
    // useEffect(() => {
    //     fetchComments()
    // // console.log(comments)
    // }, [])
    // const fetchComments = async () => {
    //     const response = await fetch("https://metatechcomments.vercel.app/api/v1/comment/getcomments", {
    //         method: "GET",
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         }
    //     })
    //     const allcomments = await response.json()
    //     setFetchLoader(false)
    //     setComments(allcomments)

    // }
    // const postComment = async (e) => {
    //     e.preventDefault()
    //     setCommentLoader(true)
    //     const response = await fetch("https://metatechcomments.vercel.app/api/v1/comment/postcomment", {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         },
    //         body: JSON.stringify(commentBody)
    //     })
    //     const thecomment = await response.json()
    //     setCommentLoader(false)

    //     if (thecomment.error) {
    //         alert(thecomment.error)
    //     }
    //     else {
    //         setComments([...comments, thecomment])
    //         setCommentSubmitted(true)
    //     }
    // }

    // const dateConverter = (isoDate) => {

    //     const date = new Date(isoDate);
    //     const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear().toString().slice(-2)}`;
    //     return formattedDate
    // }

    return (

        <div style={{ backgroundColor: '#151619' }}>
            <MetaDecorator showBrand={false} title={'Why Consider Metatech Official for White Label SEO Services?'} description={'Seeking a reliable digital marketing company for SEO optimization, online marketing, website design, PPC management, Social Media, USA, UK, Australia, UAE.'} imageUrl={"https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60/https://res.cloudinary.com/dextrzp2q/image/upload/v1720097625/ob14j2kfdbjqq5te5tbn.png"} />

            <div className="container">
                <div className="py-5">
                    <div className="pt-5">
                        <div className={`${window.innerWidth < 992 ? "" : "pt-5"}`}>
                            <h1 className='text-light py-2'>Why Consider Metatech Official for White Label SEO Services?</h1>
                            <div className="text-center">
                                <div className="py-3">
                                    <img src='https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60/https://metatech-official.co/static/media/whiteseo.c6fd979360074549e022.png' class="img-fluid rounded-4 " alt="..."></img>
                                </div>
                            </div>
                            <p className='text-light'>Businesses of all kinds in the modern digital scene need SEO to improve their online presence. Not all SEO services, meanwhile, are created equally. Our specialty at Metatech Official is offering white label SEO solutions catered to the particular requirements of companies in many sectors, especially in Linux. Emphasizing results and cost, here's why you should give our team some thought for your SEO needs.</p>
                            <h2 className="text-light">
                                Proficiency in WordPress SEO
                            </h2>
                            <p className='text-light'>
                                We at Metatech Official take great satisfaction in being a team of WordPress SEO experts. Our complete Wordpress SEO services will help improve the ranking of your website, so increasing traffic and conversions. Whether your search is for a Wordpress SEO Agency or an SEO Agentur Wordpress, our method combines modern ideas with thorough knowledge of PHP capabilities.
                            </p>
                            <p className="text-light">
                                For companies seeking simplified solutions, our services span Wordpress SEO Optimization Service to Wordpress seo without plugin. We also offer a wordpress website audit service to find and fix SEO problems, so strengthening the basis for future expansion of your website. We thus have the answers whether you require a Wordpress SEO Consultant or you want to engage a Wordpress SEO expert.
                            </p>
                            <h2 className="text-light">
                                Affordable SEO Services for Small Businesses
                            </h2>
                            <p className="text-light">
                                If you run a small business or startup, affordable SEO solutions are absolutely vital. For small companies trying to fit within your budget, Metatech Official offers reasonably priced local SEO solutions and seo-packs. Our reasonably priced monthly SEO services guarantee that your site will show better without going over budget.
                            </p>
                            <p className="text-light">
                                With our affordable monthly search engine optimization services that emphasize on producing consistent results over time, our SEO startup companies program is meant to help growing businesses. To make sure your online store can draw in and convert more users, we also provide reasonably priced e-commerce seo services in the US and WordPress monthly SEO.
                            </p>
                            <h2 className="text-light">
                                Inexpensive Lead Generation & Off-Page SEO
                            </h2>
                            <p className="text-light">Any business needs lead generation. Metatech Official offers cheap SEO lead generating services as an off-page SEO company that, via backlinks, social media mentions, and online reputation management, help draw in fresh clients. Our main goal is to make your brand's strong, commanding presence online clear-cut.</p>
                            <p className="text-light">We also provide reasonably priced SEO solutions tailored to your local market that guarantee your company shows up in front of the correct audience at the correct moment.</p>
                            <h2 className="text-light">All Size Business Comprehensive SEO Packages</h2>
                            <p className="text-light">Our reasonably priced seo audit, technical SEO services, and international SEO services are meant to fit your particular requirements regardless of size—small business or expanding company. Beyond the minimum, we provide SEO services for WordPress that guarantee your website performs best in search results.</p>
                            <p className="text-light">Our team of reasonably priced WordPress SEO company recognizes the need of both on-page and off-page SEO. From Wordpress SEO consulting to Wordpress SEO expert services, we offer complete-service solutions to help your website rank higher and increase traffic drive.</p>
                            <h2 className="text-light">Why Choose Metatech Official?</h2>
                            <p className="text-light">Every company is unique, thus we provide <b>tailored SEO solutions</b> including small business SEO solutions and WordPress SEO Specialist services.</p>
                            <p className="text-light">Our staff consists of committed <b> SEO professionals</b> with years of industry experience, so guaranteeing the best possible outcomes.</p>
                            <p className="text-light">Affordability: We take great satisfaction in being a reasonably priced WordPress <b>SEO firm offering premium services</b> free from a heavy cost tag.</p>
                            <p className="text-light">Our <b>white label SEO service</b> lets you present expert SEO under your brand, so enabling you to grow your company and wow your customers.</p>
                            <h2 className="text-light">Conclusion
                            </h2>
                            <p className="text-light">Businesses looking to improve their online presence with smart SEO techniques will find the ideal partner in Metatech Official. We are here to assist whether your needs are for reasonably priced e-commerce SEO services in the US, technical SEO services, or just a partnership with a reasonably priced WordPress SEO agency. For businesses of all kinds, our mix of cost, knowledge, and commitment to outcomes makes us a first choice.</p>
                            <p className="text-light">Contact Metatech Official now to discuss how our white label SEO services and tailored SEO strategies could help improve your SEO game!</p>
                            {/* <div>
                                <h1 className="text-light py-2">Comments</h1>
                                <hr />
                                <div className='container'>
                                    {comments.map((e) => {
                                        return <div>
                                            <a target='_blank' href={e.website} className='text-light h6' rel="nofollow">{e.name}</a>
                                            <br />
                                            <span className="text-light">{dateConverter(e.date)}</span>
                                            <p className='text-light w-75'>{e.description}</p>
                                            <hr />
                                        </div>
                                    })}
                                {fetchLoader&&<div className="d-flex justify-content-center py-4">
                                    <div style={{height:"3rem",width:"3rem"}} class="spinner-border text-light" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                </div>}

                                </div>
                                <form
                                    onSubmit={(e) => postComment(e)}
                                >

                                    <div className={`${window.innerWidth < 768 ? 'w-100' : 'w-50'} pb-3`}>
                                        <h2 className="text-light py-2">Leave a Comment</h2>

                                        <div>
                                            <div class="">
                                                <input required value={commentBody.name} onChange={(e) => { setCommentBody({ ...commentBody, name: e.target.value }) }} name='Name' type="text" class="form-control rounded-3 p-3" id="exampleFormControlInput1" placeholder="Enter Your Name" />
                                                <div className="d-flex">
                                                    <input required value={commentBody.email} onChange={(e) => { setCommentBody({ ...commentBody, email: e.target.value }) }} name='email' type="email" class="form-control rounded-3 p-3 my-2 " id="exampleFormControlInput1" placeholder="Enter Your Email" />


                                                </div>
                                                <div className="d-flex">
                                                    <input required value={commentBody.website} onChange={(e) => { setCommentBody({ ...commentBody, website: e.target.value }) }} name='subject' type="text" class="form-control rounded-3 p-3 my-2" id="exampleFormControlInput1" placeholder="Website" />

                                                </div>
                                            </div>
                                            <div class="mb-3">

                                                <textarea required value={commentBody.description} onChange={(e) => { setCommentBody({ ...commentBody, description: e.target.value }) }} name='Message' placeholder='Description' class="form-control rounded-3 p-3 my-2" id="exampleFormControlTextarea1" rows="4" ></textarea>
                                            </div>

                                            <div className="py-3 d-flex justify-content-center">
                                                <button disabled={commentLoader || commentSubmitted ? true : false} style={{ transition: 'all 1s ease' }} className={`btn btn-${commentSubmitted ? 'success' : 'primary'} rounded-3 p-3 d-flex w-100 justify-content-center align-items-center`}>{commentSubmitted ? 'Submitted' : 'Send Comment'}
                                                    {commentLoader && <div class="spinner-border text-light mx-2" role="status">
                                                        <span class="visually-hidden">Loading...</span>
                                                    </div>}
                                                </button>
                                            </div>
                                            {formSubmitted && <h4 className="display-6 text-success">Thanks for sending us a proposal, our subordinate will get back to you shortly for your further queries!</h4>}
                                        </div>
                                    </div>
                                </form>

                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BlogPost