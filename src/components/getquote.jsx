import React from 'react'
import { Link } from 'react-router-dom'
const Getquote = () => {
    return (
        <>
            <div style={{ background: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1))" }}>
                <div className='container py-5'>
                    <div className="row">
                        <div className={`col-md-6 col-12 d-flex justify-content-center my-2 py-2`}>
                            <div>
                                <h2 className='pb-3 h5' style={{ textDecoration: 'underline', textUnderlineOffset: "6px", color: '#6565ff' }}>LET’S TALK</h2>
                                <p className='display-5 h1' style={{ color: "white" }}>ABOUT YOUR NEXT</p><p className='display-5 h1' style={{ fontFamily: 'Barranco', color: "#6565ff" }}>PROJECT</p>
                            </div>
                        </div>
                        <div className={`col-md-6 col-12 d-flex justify-content-center align-items-center my-2 py-2`}>
                            <Link onClick={()=>window.scrollTo({top:0,left:0,behavior:'smooth'})} to={'/contact'}>
                            <button className="btn btn-primary rounded-4 " style={{ width: "max-content", height: 'max-content' }}>

                                <span style={{ fontFamily: 'Barranco' }} className="h2">     Get In Touch</span>
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Getquote