import React, { useContext } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import AppContext from '../context/appContext'

const RequireAuth = () => {
  const { authToken } = useContext(AppContext)
  const loc = useLocation()
  if (!authToken) return <Navigate to="/admin" replace state={{ from: loc }} />
  return <Outlet />
}

export default RequireAuth


