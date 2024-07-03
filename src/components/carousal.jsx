import React, { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import machinelearningimg from './coverOne.jpg'
import machinelearningimgTwo from './coverTwo.jpg'
// "https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60,w_1700,h_900/https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg"
const Carousal = () => {
    const cdn = `https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60,w_${window.innerWidth > 750 ? '1700' : '900'},h_${window.innerWidth > 750 ? '900' : '1200'}/`
    const images = [{img:`${cdn}https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg`,offer:'MACHINE LEARNING',icon:'fa-brain'},
    {icon:'fa-android',iconTwo:'fa-apple',img: `${cdn}https://images.alphacoders.com/102/1026345.jpg`,offer:'APP DEVELOPMENT'},
     {offer:'WEBSITE DEVELOPMENT',icon:'fa-code',img:`${cdn}https://img.freepik.com/premium-vector/abstract-gradient-background-with-grainy-texture-background-wallpaper_753333-65.jpg`},
    {offer:'SEARCH ENGINE OPTIMIZATION',icon:'fa-earth-americas',img:`${cdn}https://img.freepik.com/free-vector/blurred-background-design_1107-219.jpg?w=740&t=st=1688421268~exp=1688421868~hmac=13b1d6e2247bc9f334ec09aa1ffd1e95e00864d84e47b7beea2ed4ee8c4105b4`}
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

    return (
        <>
            <div id="carouselExampleCaptions" class="carousel slide">

                <div style={{paddingBottom:window.innerWidth>992?"52.941%":"133%"}} class="carousel-inner position-reltive">
                    <div style={{backgroundImage:`url(${images[0].img})`,top:"0"}} class="carousel-item active position-absolute">
                        {images.map((e,i)=>{
                           
                        return <img src={e.img} class={`d-block w-100 position-${i==counter?'relative':'absolute'}`} style={{opacity:i==counter?'1':'0',transition:'all 1s ease'}} alt="An extra image to match the theme of the website" />
                            
                        })}
                        <img src={window.innerWidth>750?machinelearningimg:machinelearningimgTwo} style={{top:'0px',opacity:'0.2'}} class="d-block w-100 position-absolute" alt="This interactive picture describes our office environment" />
                        <div style={{ top: '0px', bottom: '0px', right: '0px', left: '0px' }} class="carousel-caption h-100 w-100 justify-content-center d-flex align-items-center flex-column">
                         
                            <p className='display-1 p pb-5' style={{fontFamily:"Barranco"}} >WE OFFER</p>
                            <div className="d-flex">
                            {images[counter].iconTwo&&<p className=' h1 display-1 mx-2' ><i class={`fa-brands ${images[counter].iconTwo} fa-2xl`}></i></p>}
                            
                            <p className='h1 display-1 mx-2' ><i class={`${images[counter].icon=='fa-android'?'fa-brands':'fa-solid'} ${images[counter].icon} fa-2xl`}></i></p>
                            </div>
                            <p  style={{fontFamily:"Barranco"}}  className='display-5 pt-5'>{images[counter].offer}</p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Carousal