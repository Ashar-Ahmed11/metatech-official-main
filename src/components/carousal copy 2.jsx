import React, { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import machinelearningimg from './coverOne.jpg'
import machinelearningimgTwo from './coverTwo.jpg'
// "https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60,w_1700,h_900/https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg"
const VideoCarousal = ({ pageTitle,videoURL }) => {
    const cdn = `https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60,w_${window.innerWidth > 750 ? '1700' : '900'},h_${window.innerWidth > 750 ? '900' : '1200'}/`
    const images = [{ img: `${cdn}https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg`, offer: 'MACHINE LEARNING', icon: 'fa-brain' },
    { icon: 'fa-android', iconTwo: 'fa-apple', img: `${cdn}https://images.alphacoders.com/102/1026345.jpg`, offer: 'APP DEVELOPMENT' },
    { offer: 'WEBSITE DEVELOPMENT', icon: 'fa-code', img: `${cdn}https://img.freepik.com/premium-vector/abstract-gradient-background-with-grainy-texture-background-wallpaper_753333-65.jpg` },
    { offer: 'SEARCH ENGINE OPTIMIZATION', icon: 'fa-earth-americas', img: `${cdn}https://img.freepik.com/free-vector/blurred-background-design_1107-219.jpg?w=740&t=st=1688421268~exp=1688421868~hmac=13b1d6e2247bc9f334ec09aa1ffd1e95e00864d84e47b7beea2ed4ee8c4105b4` }
    ]
    const [counter, setcounter] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            if (counter < images.length - 1) {
                setcounter(counter + 1)
            }
            else {
                setcounter(0)
            }
        }, 2000);
    }, [counter])

    const [videoLoaded, setVideoLoaded] = useState(false)

    return (
        <>
            <div id="carouselExampleCaptions" class="carousel slide">
                {/* https://res.cloudinary.com/dextrzp2q/video/fetch/c_scale/q_60/https://res.cloudinary.com/dextrzp2q/video/upload/v1738362738/xp7pv4rw6tjhlosxnysq.mp4 */}
                <div class="carousel-inner">
                    <div  class="carousel-item active">
                    <div style={{ zIndex: '20' }} className='shade'></div>
                        {/* {images.map((e, i) => {

                            return <img src={e.img} class={`d-block w-100 position-${i == counter ? 'relative' : 'absolute'}`} style={{ opacity: i == counter ? '1' : '0', transition: 'all 1s ease' }} alt="..." />

                        })}
                        <img src={window.innerWidth > 750 ? machinelearningimg : machinelearningimgTwo} style={{ top: '0px', opacity: '0.2' }} class="d-block w-100 position-absolute" alt="..." />
                        <div style={{ top: '0px', bottom: '0px', right: '0px', left: '0px' }} class="carousel-caption h-100 w-100 justify-content-center d-flex align-items-center flex-column"> */}
                        <div style={{ backgroundColor: "#000000", paddingBottom: window.innerWidth > 750 ? "52.941%" : "133.3%" }} class="d-block w-100 h-100 position-relative" >


                            <video onPlay={()=>setVideoLoaded(true)
                            } loop autoPlay muted style={{ top: 0, objectFit: 'cover', height: "100%" }} className={`card-img-top position-absolute`} src={videoURL} alt="" />
                            <img style={{transition:"1s all ease",top: 0, objectFit: 'cover', height: "100%",opacity:videoLoaded?0:1 }} className={`card-img-top position-absolute`} src={"https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60/https://res.cloudinary.com/dextrzp2q/image/upload/v1738884168/dhghu9cke1tqwxnzbut4.png"} alt="" />


                        </div>

                        <div style={{ top: '0px', bottom: '0px', right: '0px', left: '0px',zIndex:'30' }} class="carousel-caption h-100 w-100 justify-content-center d-flex align-items-center flex-column">

                            <h1 className='display-1 h1 pb-5' style={{ fontFamily: "Barranco" }} >{pageTitle}</h1>
                            <div className="d-flex">
                                {/* {images[counter].iconTwo&&<h1 className='display-1 mx-2' ><i class={`fa-brands ${images[counter].iconTwo} fa-2xl`}></i></h1>} */}

                                {/* <h1 className='display-1 mx-2' ><i class={`${images[counter].icon=='fa-android'?'fa-brands':'fa-solid'} ${images[counter].icon} fa-2xl`}></i></h1> */}
                            </div>
                            {/* <p  style={{fontFamily:"Barranco"}}  className='display-5 pt-5'>{images[counter].offer}</p> */}
                        </div>
                    </div>

                </div>

            </div >
        </>
    )
}

export default VideoCarousal