import React, { useContext } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import AppContext from '../context/appContext'

const AdminDashboard = () => {
  const { setToken } = useContext(AppContext)
  const logout = () => setToken('')
  const location = useLocation()
  return (
    <div className="container-fluid" style={{ backgroundColor: '#151619', minHeight: '100vh' }}>
      <div className="row flex-nowrap">
        <div
          className="px-sm-2 px-0 bg-secondary"
          style={{ position: 'fixed', top: 0, left: 0, bottom: 0, width: '240px', overflowY: 'auto' }}
        >
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-3 text-white">
            <span className="fs-5 d-none d-sm-inline">Menu</span>
            <ul className="nav w-100 nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start">
              <li className="nav-item my-2"><Link className="nav-link text-white" to="/dashboard">Create Post</Link></li>
              <li className="nav-item my-2"><Link className="nav-link text-white" to="/dashboard/posts">View Posts</Link></li>
              <li className="nav-item my-2"><button className="btn btn-outline-light btn-sm" onClick={logout}>Logout</button></li>
            </ul>
          </div>
        </div>
        <div className="col py-3" style={{ marginLeft: '240px' }}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard


