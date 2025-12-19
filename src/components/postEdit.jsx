import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AppContext from '../context/appContext'
import PostForm from './PostForm'
import { toast } from 'react-toastify'

const PostEdit = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { fetchPostById, updatePost, deletePost, uploadImage } = useContext(AppContext)
  const [initial, setInitial] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchPostById(id)
        setInitial(data)
      } catch {
        toast.error('Failed to load post')
      } finally {
        setLoading(false)
      }
    })()
  }, [id, fetchPostById])

  const onSubmit = async (payload) => {
    const data = { ...payload, date: payload.date?.toISOString?.() || payload.date }
    try {
      await updatePost(id, data)
      navigate('/dashboard/posts')
    } catch {}
  }

  const onDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this post?')) return
    try {
      await deletePost(id)
      navigate('/dashboard/posts')
    } catch {}
  }

  if (loading) return <div className="text-center text-light py-5" style={{ backgroundColor: '#151619', minHeight: '50vh' }}>Loading...</div>
  if (!initial) return null

  return (
    <div style={{ backgroundColor: '#151619', minHeight: '100vh' }}>
      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="text-light">Edit Post</h2>
          <button className="btn btn-outline-danger" onClick={onDelete}>Delete</button>
        </div>
        <PostForm initial={initial} onSubmit={onSubmit} onUpload={uploadImage} />
      </div>
    </div>
  )
}

export default PostEdit


