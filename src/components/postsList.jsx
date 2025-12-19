import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../context/appContext'

const PostsList = () => {
  const { posts, fetchPosts } = useContext(AppContext)
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [onlyRecent, setOnlyRecent] = useState(false)

  useEffect(() => {
    (async () => {
      setLoading(true)
      await fetchPosts()
      setLoading(false)
    })()
  }, [fetchPosts])

  const filtered = useMemo(() => {
    let list = posts || []
    if (searchQuery) list = list.filter(p => (p.title || '').toLowerCase().includes(searchQuery.toLowerCase()))
    if (onlyRecent) list = list.slice(0, 10)
    return list
  }, [posts, searchQuery, onlyRecent])

  return (
    <div className="container-fluid">
      <h1 data-aos="fade-up" data-aos-duration="1000" className="display-6 text-light">Posts</h1>
      <div className="py-2">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="d-flex align-items-center">
              <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{ borderColor: "black", color: 'black', backgroundColor: "#ffffff" }} type="text" className="form-control" placeholder="Search by title" />
            </div>
          </form>
          <div>
            <Link to='/dashboard/create-post'> <button style={{ borderColor: "#6565ff", color: '#6565ff' }} className="btn rounded-circle"><i className="fa fa-plus "></i></button></Link>
          </div>
        </div>
        <div className='mb-3' style={{ color: "#6565ff" }}>
          <div className="d-flex align-items-center">
            <div className="form-check form-switch">
              <input onChange={(e) => setOnlyRecent(e.target.checked)} style={{ backgroundColor: "#6565ff" }} className="form-check-input" type="checkbox" role="switch" id="recentSwitch" />
            </div>
            <span>Show Recent 10</span>
          </div>
        </div>
        <div>
          {loading ? (
            <div className="py-5 text-center"><div style={{ width: '60px', height: '60px' }} className="spinner-border text-light " role="status"><span className="visually-hidden">Loading...</span></div></div>
          ) : (
            <div className="row g-3">
              {(filtered || []).map((e) => (
                <div key={e._id} className="col-12">
                  <div className="card border-0 shadow-sm p-2">
                    <div className="d-flex align-items-center gap-3 flex-nowrap">
                      <div className="flex-shrink-0">
                        {e.image ? <img src={e.image} alt={e.title} className="rounded" style={{ width: '72px', height: '72px', objectFit: 'cover' }} /> : <div style={{ width: '72px', height: '72px', background: '#eee' }} className='rounded' />}
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex align-items-center justify-content-between">
                          <h6 className="mb-1">{e.title}</h6>
                          <span className="badge" style={{ backgroundColor: '#6565ff', color: '#fff' }}>{e.category || 'General'}</span>
                        </div>
                        <div className="text-muted small">{new Date(e.date || Date.now()).toLocaleString()}</div>
                      </div>
                      <div className="text-end" style={{ minWidth: '110px' }}>
                        <Link to={`/dashboard/edit-post/${e._id}`} className="btn btn-outline-dark btn-sm">Edit</Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PostsList


