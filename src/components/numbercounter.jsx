import React from 'react'
import ScrollTrigger from 'react-scroll-trigger'
import CountUp from 'react-countup';
import { useState } from 'react';
const NumberCounter = ({count}) => {
    const [counter, setcounter] = useState(false)

    return (
        <>
            <ScrollTrigger onExit={()=>setcounter(counter?false:true)} onEnter={() => setcounter(true)}>
                {counter && <CountUp end={count} delay={0} duration={5}/>}
            </ScrollTrigger>
        </>

    )
}

export default NumberCounter