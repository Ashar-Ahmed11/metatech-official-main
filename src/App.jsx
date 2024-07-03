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
        <Route path='/website-cost-calculator' element={<CostCalculator/>}/>
        <Route path='/estimated-cost' element={<EstimatedCost/>}/>
      </Routes>
      <Footer/>

      </BrowserRouter>
    </div>
  )
}

export default App  