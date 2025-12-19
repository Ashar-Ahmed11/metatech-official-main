import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Editor } from '@tinymce/tinymce-react'
import 'tinymce/tinymce'
import 'tinymce/icons/default'
import 'tinymce/themes/silver'
import 'tinymce/models/dom'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/link'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/advlist'
import 'tinymce/plugins/autolink'
import 'tinymce/plugins/charmap'
import 'tinymce/plugins/preview'
import 'tinymce/plugins/anchor'
import 'tinymce/plugins/searchreplace'
import 'tinymce/plugins/visualblocks'
import 'tinymce/plugins/code'
import 'tinymce/plugins/fullscreen'
import 'tinymce/plugins/insertdatetime'
import 'tinymce/plugins/media'
import 'tinymce/plugins/table'
// import 'tinymce/plugins/help'
import 'tinymce/plugins/image'
import 'tinymce/skins/ui/oxide/skin.min.css'
import 'tinymce/skins/content/default/content.min.css'

const PostForm = ({ initial = null, onSubmit, onUpload }) => {
  const [metaTitle, setMetaTitle] = useState(initial?.metaTitle || '')
  const [metaDescription, setMetaDescription] = useState(initial?.metaDescription || '')
  const [title, setTitle] = useState(initial?.title || '')
  const [category, setCategory] = useState(initial?.category || '')
  const [date, setDate] = useState(initial?.date ? new Date(initial.date) : new Date())
  const [image, setImage] = useState(initial?.image || '')
  const [description, setDescription] = useState(initial?.description || '')
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    // sync if switching to edit mode
    if (initial) {
      setMetaTitle(initial.metaTitle || '')
      setMetaDescription(initial.metaDescription || '')
      setTitle(initial.title || '')
      setCategory(initial.category || '')
      setDate(initial.date ? new Date(initial.date) : new Date())
      setImage(initial.image || '')
      setDescription(initial.description || '')
    }
  }, [initial])

  const handleImage = async (file) => {
    setUploading(true)
    const url = await onUpload(file)
    if (url) setImage(url)
    setUploading(false)
  }

  const submit = (e) => {
    e.preventDefault()
    onSubmit({ metaTitle, metaDescription, title, category, image, description, date })
  }

  return (
    <form onSubmit={submit}>
      <div className="mb-3">
        <label className="form-label text-light">Meta Title</label>
        <input value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} className="form-control rounded-4 p-3" placeholder="Meta Title" />
      </div>
      <div className="mb-3">
        <label className="form-label text-light">Meta Description</label>
        <textarea value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} className="form-control rounded-4 p-3" rows="3" placeholder="Meta Description" />
      </div>
      <div className="mb-3">
        <label className="form-label text-light">Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} className="form-control rounded-4 p-3" placeholder="Title" />
      </div>
      <div className="mb-3">
        <label className="form-label text-light">Category</label>
        <input value={category} onChange={(e) => setCategory(e.target.value)} className="form-control rounded-4 p-3" placeholder="Category" />
      </div>
      <div className="mb-3">
        <label className="form-label text-light">Date</label>
        <div><DatePicker selected={date} onChange={(d) => setDate(d)} className="form-control rounded-4 p-3" /></div>
      </div>
      <div className="mb-3">
        <label className="form-label text-light">Image</label>
        <input type="file" accept="image/*" className="form-control" disabled={uploading} onChange={(e) => handleImage(e.target.files?.[0])} />
        {uploading && (
          <div className="d-flex justify-content-center mt-2">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Uploading...</span>
            </div>
          </div>
        )}
        {image && <img src={image} alt="preview" className="img-fluid mt-2 rounded-4" />}
      </div>
      <div className="mb-3">
        <label className="form-label text-light">Description</label>
        <Editor
          value={description}
          onEditorChange={(v) => setDescription(v)}
          init={{
            height: 500,
            menubar: 'file edit view insert format tools table',
            toolbar_mode: 'wrap',
            plugins: 'advlist autolink lists link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table wordcount',
            toolbar: 'undo redo | formatselect | bold italic underline forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media table | code fullscreen | removeformat',
            license_key: 'gpl',
            branding: false,
            promotion: false
          }}
        />
      </div>
      <div className="py-3 d-flex justify-content-center">
        <button disabled={uploading} className="btn btn-primary rounded-4 p-3">Save</button>
      </div>
    </form>
  )
}

export default PostForm


