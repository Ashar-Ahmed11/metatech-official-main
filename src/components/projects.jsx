import React from 'react'
import NukhbaPreview from './nukhbapreview.png'
import MoabPreview from './moabpreview.PNG'
import TripPreview from './tripagain.PNG'
import EstellasPreview from './estellaspreview.PNG'
import MetachatPreview from './metachatpreview.PNG'
import CloudbookPreview from './cloudbook.png'
import { useKeenSlider } from "keen-slider/react"

import "keen-slider/keen-slider.min.css"
import { useState } from 'react'
import ResizePlugin from './ResizePlugin'
import MutationPlugin from './mutationPlugin'
const Projects = () => {

  const images = [
    {url:MetachatPreview,link:'https://metachatt.web.app/'},
    {url:MoabPreview,link:'https://moab-386be.web.app/'},
    {url:NukhbaPreview,link:'https://nukhba.shop/'},
    {url:TripPreview,link:'https://trip-00.web.app/'},
    {url:EstellasPreview,link:'https://estellas-v1.web.app/'},
    {url:CloudbookPreview,link:'https://cloudbo0k.web.app/'},
    // "https://images.unsplash.com/photo-1590005176489-db2e714711fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  ]

  const [details, setDetails] = React.useState(null)
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    detailsChanged(s) {
      setDetails(s.track.details)
    },
    initial: 2,
    slides: {
      origin: 'center',
      perView: window.innerWidth < 750 ? 1 : 2,


    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  },[ResizePlugin,MutationPlugin])



  function scaleStyle(idx) {
    if (!details) return {}
    const slide = details.slides[idx]
    const scale_size = 0.7
    const scale = 1 - (scale_size - scale_size * slide.portion)
    return {
      transform: `scale(${scale})`,
      WebkitTransform: `scale(${scale})`,
    }


  }

  const [containerHeight, setcontainerHeight] = useState(null)

  return (
    <>
      <div id='portfolio' className=''>
        <div className="text-center">
          <h2 className='pb-3 h5' style={{ textDecoration: 'underline', textUnderlineOffset: "6px", color: '#6565ff' }}>RECENT PROJECTS</h2>
        </div>
        {/* <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <div class="card my-2"style={{border:'1px solid #F4B92D'}}  >
                            
                                <img alt="Failed to Load !" src={NukhbaPreview} class="card-img-top rounded-0" alt="..."/>
                                    
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div class="card my-2" style={{borderColor:"#a10302"}}  >
                             
                                <img alt="Failed to Load !" src={MoabPreview} class="card-img-top rounded-0" alt="..."/>
                                    
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div class="card my-2"  >
                               
                                <img alt="Failed to Load !" src={TripPreview} class="card-img-top rounded-0" alt="..."/>
                                    
                            </div>
                        </div>
                    </div>
                </div> */}
        <div ref={sliderRef} className="keen-slider zoom-out">
          {images.map((src, idx) => (
            <div key={idx} style={{ height: containerHeight ? containerHeight : 'auto' }} className="keen-slider__slide zoom-out__slide">
              <div style={scaleStyle(idx)}>
                <img alt="An interactive image for the preview of our one of the most recent portfolio website." onLoad={(e) => setcontainerHeight(e.target.clientHeight)} src={src.url} />
              </div>
            </div>
          ))}
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </>
          )}
        </div>
        <div className="d-flex justify-content-center">
          <a href={images[currentSlide].link} target='_blank' className="btn btn-primary my-2">Preview</a>
        </div>

      </div>
    </>
  )
}



function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${props.left ? "arrow--left" : "arrow--right"
        } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}

export default Projects