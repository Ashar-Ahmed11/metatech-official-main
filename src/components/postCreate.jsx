import React, { useContext } from 'react'
import AppContext from '../context/appContext'
import PostForm from './PostForm'
import { useNavigate } from 'react-router-dom'

const PostCreate = () => {
  const { createPost, uploadImage } = useContext(AppContext)
  const navigate = useNavigate()
  const onSubmit = async (payload) => {
    const data = { ...payload, date: payload.date?.toISOString?.() || payload.date }
    try {
      await createPost(data)
      navigate('/dashboard/posts')
    } catch {}
  }
  return (
    <div style={{ backgroundColor: '#151619', minHeight: '100vh' }}>
      <div className="container py-4">
        <h2 className="text-light">Create Post</h2>
        <PostForm onSubmit={onSubmit} onUpload={uploadImage} />
      </div>
    </div>
  )
}

export default PostCreate


