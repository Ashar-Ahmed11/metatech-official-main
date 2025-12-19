import React, { useContext, useEffect, useState } from 'react'
import MetaDecorator from './metadecorator'
import ContactCarousal from './carousal copy'
import { Link } from 'react-router-dom'
import AppContext from '../context/appContext'
const slugify = (s='') => s.toString().toLowerCase().trim().replace(/[_\s]+/g,'-').replace(/[^a-z0-9-]/g,'').replace(/-+/g,'-')
const Blogs = ({ title, description, showBrand }) => {
    const { posts, fetchPosts } = useContext(AppContext)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        (async () => { try { setLoading(true); await fetchPosts() } finally { setLoading(false) } })()
    }, [fetchPosts])

    return (
        <div>
            <MetaDecorator showBrand={showBrand} title={title} description={description} imageUrl={"https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60/https://res.cloudinary.com/dextrzp2q/image/upload/v1720097625/ob14j2kfdbjqq5te5tbn.png"} />
            <ContactCarousal pageTitle={title} />
            <div style={{ backgroundColor: '#151619' }}>
                <div className="container py-5 text-center text-light">
                    <h2 className='h5' style={{ textDecoration: 'underline', textUnderlineOffset: "6px", color: '#6565ff' }}>OUR BLOGS</h2>
                    <h2 className='py-2 h4'>Resources & Insights</h2>
                    <h2 className='px-2 blockquote display-6 h1'>The latest industry news, interviews, technologies, and resources</h2>
                    {loading ? (
                        <div className="d-flex justify-content-center py-5">
                            <div className="spinner-border text-light" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : (
                    <div className="row" >
                        {(posts || []).map((p) => {
                            const slug = (p.slug && p.slug.length) ? p.slug : slugify(p.metaTitle || p.title || '')
                            return (
                            <div key={p._id} className="col-sm-6 col-lg-4 col-12 my-2 " data-aos="zoom-in-up" data-aos-duration="1000">
                                <Link onClick={() => window.scrollTo({ behavior: 'smooth', top: 0, left: 0 })} to={`/blog/${slug}`} style={{ textDecoration: "none" }}>
                                    <div className="card text-light rounded-4 h-100 overflow-hidden" style={{ borderColor: "rgb(101, 101, 255)", backgroundColor: "rgba(0, 0, 0, 0)" }}>
                                        {p.image && <img src={p.image} className="card-img-top" alt={p.title || 'blog image'} />}
                                        <div className="card-body justify-content-end d-flex flex-column text-start">
                                            <h2 className="card-title text-light text-opacity-75 h6">
                                                {p.category || 'General'}
                                            </h2>
                                            <h2 className="card-title h5">
                                                {p.title || 'Untitled Post'}
                                            </h2>
                                            <p className="card-text">
                                                {new Date(p.date || Date.now()).toLocaleString()}
                                            </p>
                                        </div>
                                        <div style={{ borderTopColor: "rgb(101, 101, 255)" }} className="card-footer">
                                            <div className='d-flex align-items-center'>
                                                <i className="fa fa-user fa-2x"></i>
                                                <div className='d-flex flex-column px-3'>
                                                    <span className="text-light text-start">Metatech Official</span>
                                                    <span className="text-light text-opacity-75 text-start">{new Date(p.date || Date.now()).toDateString()}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )})}
                    </div>
                    )}
                </div>
            </div>
        </div >
    )
}

export default Blogs