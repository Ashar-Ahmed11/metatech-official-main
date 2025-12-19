import React, { useCallback, useMemo, useState } from 'react'
import AppContext from './appContext'
import { toast } from 'react-toastify'

const API_BASE = process.env.REACT_APP_API_BASE || 'https://metatechbeex-dot-arched-gear-433017-u9.de.r.appspot.com'

const AppState = ({ children }) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem('auth-token') || '')
  const [posts, setPosts] = useState([])

  const setToken = useCallback((token) => {
    setAuthToken(token)
    if (token) localStorage.setItem('auth-token', token)
    else localStorage.removeItem('auth-token')
  }, [])

  // Auth
  const loginAdmin = useCallback(async ({ username, password }) => {
    try {
      const res = await fetch(`${API_BASE}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })
      if (!res.ok) throw new Error(await res.text())
      const data = await res.json()
      setToken(data?.authToken || '')
      toast.success('Logged in successfully')
      return true
    } catch (e) {
      toast.error(e?.message || 'Login failed')
      return false
    }
  }, [setToken])

  // Cloudinary single image upload
  const uploadImage = useCallback(async (file) => {
    if (!file) return ''
    try {
      const form = new FormData()
      form.append('file', file)
      form.append('upload_preset', 'for_mobile')
      const res = await fetch('https://api.cloudinary.com/v1_1/dqu8eh3hz/image/upload', { method: 'POST', body: form })
      const data = await res.json()
      if (!data?.secure_url) throw new Error('Upload failed')
      toast.success('Image uploaded')
      return data.secure_url
    } catch (e) {
      toast.error(e?.message || 'Image upload failed')
      return ''
    }
  }, [])

  // Posts APIs
  const fetchPosts = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/api/posts`)
      const data = await res.json()
      setPosts(Array.isArray(data) ? data : [])
    } catch {
      toast.error('Failed to load posts')
    }
  }, [])

  const fetchPostById = useCallback(async (id) => {
    const res = await fetch(`${API_BASE}/api/posts/${id}`)
    if (!res.ok) throw new Error('Failed to load post')
    return await res.json()
  }, [])
  const fetchPostBySlug = useCallback(async (slug) => {
    const res = await fetch(`${API_BASE}/api/posts/slug/${encodeURIComponent(slug)}`)
    if (!res.ok) throw new Error('Failed to load post')
    return await res.json()
  }, [])

  const createPost = useCallback(async (payload) => {
    const res = await fetch(`${API_BASE}/api/posts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'auth-token': authToken },
      body: JSON.stringify(payload)
    })
    if (!res.ok) throw new Error('Failed to create post')
    const created = await res.json()
    toast.success('Post created')
    setPosts((p) => [created, ...p])
    return created
  }, [authToken])

  const updatePost = useCallback(async (id, payload) => {
    const res = await fetch(`${API_BASE}/api/posts/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'auth-token': authToken },
      body: JSON.stringify(payload)
    })
    if (!res.ok) throw new Error('Failed to update post')
    const updated = await res.json()
    toast.success('Post updated')
    setPosts((p) => p.map((x) => (x._id === id ? updated : x)))
    return updated
  }, [authToken])

  const deletePost = useCallback(async (id) => {
    const res = await fetch(`${API_BASE}/api/posts/${id}`, {
      method: 'DELETE',
      headers: { 'auth-token': authToken }
    })
    if (!res.ok) throw new Error('Failed to delete post')
    toast.success('Post deleted')
    setPosts((p) => p.filter((x) => x._id !== id))
    return true
  }, [authToken])

  const value = useMemo(() => ({
    authToken,
    setToken,
    loginAdmin,
    uploadImage,
    posts,
    fetchPosts,
    fetchPostById,
    fetchPostBySlug,
    createPost,
    updatePost,
    deletePost
  }), [authToken, setToken, loginAdmin, uploadImage, posts, fetchPosts, fetchPostById, fetchPostBySlug, createPost, updatePost, deletePost])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppState


