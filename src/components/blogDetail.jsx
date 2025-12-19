import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AppContext from '../context/appContext'
import MetaTags from 'react-meta-tags'

const BlogDetail = () => {
    const { slug } = useParams()
    const { fetchPostBySlug } = useContext(AppContext)
    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            try { const data = await fetchPostBySlug(slug); setPost(data) } finally { setLoading(false) }
        })()
    }, [slug, fetchPostBySlug])

    if (loading) return (
        <div style={{ backgroundColor: '#151619', minHeight: '60vh' }} className="d-flex align-items-center justify-content-center">
            <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
    if (!post) return <div className="text-center text-light py-5" style={{ backgroundColor: '#151619', minHeight: '50vh' }}>Not found</div>

    return (
        <div style={{ backgroundColor: '#151619', minHeight: '100vh' }}>
            <MetaTags>
                <title>{post.metaTitle || post.title || 'Blog'}</title>
                <meta name="description" content={post.metaDescription || 'Blog article'} />
            </MetaTags>
            <div className="container text-light">
                <div className="py-5">
                    <div className="pt-5">
                        <div className={`${window.innerWidth < 992 ? "" : "pt-5"}`}>
                            <h1 className="">{post.title}</h1>
                            <div className="text-secondary mb-3">{new Date(post.date || Date.now()).toLocaleString()} • {post.category || 'General'}</div>
                            {post.image && <img src={post.image} alt={post.title} className="img-fluid rounded-4 mb-4" />}
                            <div className="card bg-transparent border-0">
                                <div className="card-body px-0" dangerouslySetInnerHTML={{ __html: post.description || '' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetail


