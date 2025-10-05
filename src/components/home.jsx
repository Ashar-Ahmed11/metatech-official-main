import React from 'react'
import Carousal from './carousal'
import Services from './services'
import Achievements from './achievments'
import Projects from './projects'
import Getquote from './getquote'
import Footer from './footer'
import BrandDevelopment from './brandevelopment'
import MetaDecorator from './metadecorator'
const Home = ({title,description,showBrand}) => {
  return (
    <>
    <MetaDecorator showBrand={showBrand} title={title} imageUrl={"https://res.cloudinary.com/dextrzp2q/image/upload/v1720099375/silhlgsrj9ehcuq3gm4h.png"} description={description} />
      <Carousal />
      <Services />
      <div style={{ backgroundImage: `url(https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60,w_${window.innerWidth},h_${window.innerHeight}/https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg)`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
        <Achievements />
        <Projects />
<BrandDevelopment/>
        <Getquote />
      </div>
    </>
  )
}

export default Home