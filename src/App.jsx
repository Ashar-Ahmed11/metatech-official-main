import React from 'react'
import Navbar from './components/navbar'
import './App.css'
import Home from './components/home'
import { Routes, Route } from 'react-router-dom'
import ContactUs from './components/contactus'
import Footer from './components/footer'
import { BrowserRouter  } from 'react-router-dom'
import CostCalculator from './components/costCalculator'
import EstimatedCost from './components/estimatedcost'
const App = () => {
  console.clear()
  return (
    <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path='/website-cost-calculator' element={<CostCalculator title={"Web Page Cost Calculator"} description={"Free web page cost calculator, get the best estimate quotes for your website"}/>}/>
        <Route path='/website-design-price-calculator' element={<CostCalculator title={"Website Design Price Calculator"} description={"Free web page cost calculator, get the best estimate quotes for your website"}/>} />
        <Route path='/ecommerce-website-cost-calculator' element={<CostCalculator title={"Ecommerce Website Cost Calculator"} description={"Free web page cost calculator, get the best estimate quotes for your website"}/>} />
        <Route path='/web-design-calculator' element={<CostCalculator title={"Web Design Calculator"} description={"Free web page cost calculator, get the best estimate quotes for your website"}/>} />
        <Route path='/calculate-cost-of-website' element={<CostCalculator title={"Calculate Cost Of Website"} description={"Free web page cost calculator, get the best estimate quotes for your website"}/>} />
        <Route path='/website-pricing-calculator' element={<CostCalculator title={"Website Pricing Calculator"} description={"Free web page cost calculator, get the best estimate quotes for your website"}/>} />
        <Route path='/website-building-cost-calculator' element={<CostCalculator title={"Website Building Cost Calculator"} description={"Free web page cost calculator, get the best estimate quotes for your website"}/>} />
        <Route path='/website-cost-estimator' element={<CostCalculator title={"Website Cost Estimator"} description={"Free web page cost calculator, get the best estimate quotes for your website"}/>} />
        <Route path='/website-packages' element={<CostCalculator title={"Website Packages"} description={"Free web page cost calculator, get the best estimate quotes for your website"}/>} />
        <Route path='/web-design-packages' element={<CostCalculator title={"Web Design Packages"} description={"Free web page cost calculator, get the best estimate quotes for your website"}/>} />
        <Route path='/website-design-packages' element={<CostCalculator title={"Website Design Packages"} description={"Free web page cost calculator, get the best estimate quotes for your website"}/>} />
        <Route path='/small-business-website-design-packages' element={<CostCalculator title={"Small Business Website Design Packages"} description={"Free web page cost calculator, get the best estimate quotes for your website"}/>} />
        <Route path='/small-business-website-packages' element={<CostCalculator title={"Small Business Website Packages"} description={"Free web page cost calculator, get the best estimate quotes for your website"}/>} />
        <Route path='/small-business-web-design-packages' element={<CostCalculator title={"Small Business Web Design Packages"} description={"Free web page cost calculator, get the best estimate quotes for your website"}/>} />
        <Route path='/website-pricing-packages' element={<CostCalculator title={"Website Pricing Packages"} description={"Free web page cost calculator, get the best estimate quotes for your website"}/>} />
        <Route path='/website-development-packages' element={<CostCalculator title={"Website Development Packages"} description={"Free web page cost calculator, get the best estimate quotes for your website"}/>} />
        <Route path='/web-development-packages' element={<CostCalculator title={"Web Development Packages"} description={"Free web page cost calculator, get the best estimate quotes for your website"}/>} />
        <Route path='/website-creation-packages' element={<CostCalculator title={"Website Creation Packages"} description={"Free web page cost calculator, get the best estimate quotes for your website"}/>} />
        <Route path='/affordable-web-design-packages' element={<CostCalculator title={"Affordable Web Design Packages"} description={"Free web page cost calculator, get the best estimate quotes for your website"}/>} />
        <Route path='/business-website-packages' element={<CostCalculator title={"Business Website Packages"} description={"Free web page cost calculator, get the best estimate quotes for your website"}/>} />
        <Route path='/packages-for-website-design' element={<CostCalculator title={"Packages For Website Design"} description={"Free web page cost calculator, get the best estimate quotes for your website"}/>} />
        <Route path='/web-site-package' element={<CostCalculator title={"Web Site Package"} description={"Free web page cost calculator, get the best estimate quotes for your website"}/>} />
        <Route path='/estimated-cost' element={<EstimatedCost/>}/>
      </Routes>
      <Footer/>

      </BrowserRouter>
    </div>
  )
}

export default App  