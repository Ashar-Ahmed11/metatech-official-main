import React, { useState } from 'react'

import NumberCounter from './numbercounter'

const Achievements = () => {

    return (
        <>

            <div>

                <div id='achievements' className="container-fluid py-5 text-center position-relative">

                    <h2 className='pb-3 h5' style={{ textDecoration: 'underline', textUnderlineOffset: "6px", color: '#6565ff' }}>OUR ACHIEVEMENTS</h2>

                    <div className="row px-2">
                        <div className="col-md-3 col-12 text-center rounded-3 my-2" >
                            <div className='rounded-3' style={{ border: '1px solid  #6565ff', borderTop: '7px solid #6565ff' }}>
                                <p className='h1 display-1 py-5'><i style={{ color: '#6565ff' }} class="fas fa-handshake fa-2xl"></i></p>
                            <div className="d-flex justify-content-center">
                                    <p className='h1 display-5' style={{ fontWeight: '800', color: '#6565ff' }}>
                                        <NumberCounter count={250} />
                                    </p>
                               <p className='h1 display-5' style={{ fontWeight: '900', color: '#6565ff' }}><i class="fas fa-plus"></i></p>

                            </div>
                                <h2 className='h4' style={{color:"white"}} >Projects Completed</h2>
                            </div>
                        </div>
                        <div className="col-md-3 col-12 text-center rounded-3 my-2"  >
                            <div className='rounded-3' style={{ border: '1px solid  #6565ff', borderTop: '7px solid #6565ff' }}>
                                <p className='h1 display-1 py-5'><i style={{ color: '#6565ff' }} class="fas fa-users fa-2xl"></i></p>
                                <div className="d-flex justify-content-center">
                                    <p className='h1 display-5' style={{ fontWeight: '800', color: '#6565ff' }}>
                                        <NumberCounter count={250} />
                                    </p>
                                    <p className='h1 display-5' style={{ fontWeight: '900', color: '#6565ff' }}><i class="fas fa-plus"></i></p>

                                </div>
                                <h2 className='h4' style={{color:"white"}} >Satisfied Clients</h2>
                            </div>
                        </div>
                        <div className="col-md-3 col-12 text-center rounded-3 my-2"  >
                            <div className='rounded-3' style={{ border: '1px solid  #6565ff', borderTop: '7px solid #6565ff' }}>
                                <p className='h1 display-1 py-5'><i style={{ color: '#6565ff' }} class="fas fa-headset fa-2xl"></i></p>
                                <div className="d-flex justify-content-center">
                                    <p className='h1 display-5' style={{ fontWeight: '800', color: '#6565ff' }}>
                                        <NumberCounter count={150} />
                                    </p>
                                  <p className='h1 display-5' style={{ fontWeight: '900', color: '#6565ff' }}><i class="fas fa-plus"></i></p>

                          </div>
                                <h2 className='h4' style={{color:"white"}} >Expert Teams</h2>
                            </div>
                        </div>
                        <div className="col-md-3 col-12 text-center rounded-3 my-2"  >
                            <div className='rounded-3' style={{ border: '1px solid  #6565ff', borderTop: '7px solid #6565ff' }}>
                                <p className='h1 display-1 py-5'><i style={{ color: '#6565ff' }} class="fas fa-briefcase fa-2xl"></i></p>
                              <div className="d-flex justify-content-center">
                                    <p className='h1 display-5' style={{ fontWeight: '800', color: '#6565ff' }}>
                                        <NumberCounter count={5} />
                                    </p>
                                <p className='h1 display-5' style={{ fontWeight: '900', color: '#6565ff' }}><i class="fas fa-plus"></i></p>

                            </div>
                                <h2 className='h4' style={{color:"white"}} >Years Of Experience</h2>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Achievements