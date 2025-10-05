import React, { useState } from 'react'

import NumberCounter from './numbercounter'

const PpcResult = () => {

    return (
        <>

            <div>

                <div id='achievements' className="container-fluid py-5 text-center position-relative">

                    <h2 className='pb-3 h5' style={{ textDecoration: 'underline', textUnderlineOffset: "6px", color: '#6565ff' }}>Historic Google Ads Management Performance</h2>

                    <div className="row px-2">
                        <div className="col-md-4 col-12 text-center rounded-3 my-2" >
                            <div className='rounded-3' style={{ border: '1px solid  #6565ff', borderTop: '7px solid #6565ff' }}>
                                <p className='h1 display-1 py-5'><i style={{ color: '#6565ff' }} class="fa fa-line-chart fa-lg"></i></p>
                            <div className="d-flex justify-content-center">
                                    <p className='h1 display-5' style={{ fontWeight: '800', color: '#6565ff' }}>
                                        <NumberCounter count={1000000} />
                                    </p>
                               <p className='h1 display-5' style={{ fontWeight: '900', color: '#6565ff' }}><i class="fa fa-plus"></i></p>

                            </div>
                                <h2 className='h4' style={{color:"white"}} >Total Website Traffic</h2>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 text-center rounded-3 my-2"  >
                            <div className='rounded-3' style={{ border: '1px solid  #6565ff', borderTop: '7px solid #6565ff' }}>
                                <p className='h1 display-1 py-5'><i style={{ color: '#6565ff' }} class="fa fa-users fa-lg"></i></p>
                                <div className="d-flex justify-content-center">
                                    <p className='h1 display-5' style={{ fontWeight: '800', color: '#6565ff' }}>
                                        <NumberCounter count={45000} />
                                    </p>
                                    <p className='h1 display-5' style={{ fontWeight: '900', color: '#6565ff' }}><i class="fa fa-plus"></i></p>

                                </div>
                                <h2 className='h4' style={{color:"white"}} >Total Leads</h2>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 text-center rounded-3 my-2"  >
                            <div className='rounded-3' style={{ border: '1px solid  #6565ff', borderTop: '7px solid #6565ff' }}>
                                <p className='h1 display-1 py-5'><i style={{ color: '#6565ff' }} class="fa fa-search fa-lg"></i></p>
                                <div className="d-flex justify-content-center">
                                    <p className='h1 display-5' style={{ fontWeight: '800', color: '#6565ff' }}>
                                        <NumberCounter count={12000} />
                                    </p>
                                  <p className='h1 display-5' style={{ fontWeight: '900', color: '#6565ff' }}><i class="fa fa-plus"></i></p>

                          </div>
                                <h2 className='h4' style={{color:"white"}} >Top 5 Keywords</h2>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </>
    )
}

export default PpcResult