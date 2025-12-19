import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AppContext from '../context/appContext'

export default function AdminLogin() {
    const navigate = useNavigate()
    const { loginAdmin, authToken } = useContext(AppContext)
    const [credentials, setCredentials] = useState({ username: '', password: '' })
    const color = "#6565ff"

    useEffect(() => {
        if (authToken) navigate('/dashboard', { replace: true })
    }, [authToken, navigate])

    const onSubmit = async (e) => {
        e.preventDefault()
        const ok = await loginAdmin(credentials)
        if (ok) navigate('/dashboard', { replace: true })
    }

    return (
        <div className='my-5' style={{ backgroundColor: '#151619', minHeight: '60vh' }}>
            <div className="pt-5">
                <div className="d-flex justify-content-center">
                    <div className="d-flex flex-column pt-5">
                        <div className="card shadow-sm" style={{ width: '400px', backgroundColor: "#000", border: `1px solid ${color}` }}>
                            <h1 className="text-center my-3 text-light" style={{ fontFamily: 'Montserret', color: color }}>Admin Panel</h1>
                            <form onSubmit={onSubmit}>
                                <div className="mb-3 mx-3">
                                    <input value={credentials.username} onChange={(e) => { setCredentials({ ...credentials, username: e.target.value }) }} style={{ color: '#000', backgroundColor: '#fff', borderColor: color }} type="text" className="form-control my-2" placeholder="Username" />
                                    <input value={credentials.password} onChange={(e) => { setCredentials({ ...credentials, password: e.target.value }) }} style={{ color: '#000', backgroundColor: '#fff', borderColor: color }} type="password" className="form-control" placeholder="Password" />
                                </div>
                                <div className="d-flex justify-content-center mt-2 mb-4">
                                    <button type='submit' className="btn" style={{ color: color, borderColor: color, backgroundColor: '#fff' }}>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


