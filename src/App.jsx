import React from 'react'
import Navbar from './components/navbar'
import './App.css'
import Home from './components/home'
import { Routes, Route } from 'react-router-dom'
import ContactUs from './components/contactus'
import Footer from './components/footer'
import { BrowserRouter } from 'react-router-dom'
import CostCalculator from './components/costCalculator'
import EstimatedCost from './components/estimatedcost'
import Seo from './components/seo'
import SeoContact from './components/seocontact'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import Ppc from './components/ppc'
import BlogPost from './components/blogpost'
import HotelSeo from './components/hotelseo'
import TheHotelSeo from './components/thehotelseo'
import FashionSEO from './components/fashionseo'
import BerkshireSEO from './components/seo copy'
import BerkshireSEOB1 from './components/seo copy 2'
import BerkshireSEOB2 from './components/seo copy 3'
import BerkshireSEOB3 from './components/seo copy 4'
import StockholmSEO from './components/seo copy 5'
import WebsiteDevelopment from './components/websiteDevelopment'
import Blogs from './components/blogs'
import AgenticAIBlog from './components/agneticAIBLOG'
import AppDevelopment from './components/appDevelopment'

const App = () => {
  console.clear()
  return (
    <div>
      <BrowserRouter>
        <TawkMessengerReact
          propertyId="66c37357146b7af4a43c1508"
          widgetId="1i5lnl3hs" />
        <div className='whatsapp'>
          {/* +92-314-5167255 */}

          <a target="_blank" aria-label="Chat on WhatsApp" href="https://wa.me/923472698189?text="> <i style={{ color: '#0dc143' }} className="fa fa-whatsapp" aria-hidden="true"></i> </a>
        </div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home title={"Software Development Agency - Metatech Official"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path="/website-development-company" element={<Home title={"Website Development Company"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />

          <Route path="/contact" element={<ContactUs />} />
          <Route path='/website-cost-calculator' element={<CostCalculator title={"Web Page Cost Calculator"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/website-design-price-calculator' element={<CostCalculator title={"Website Design Price Calculator"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/ecommerce-website-cost-calculator' element={<CostCalculator title={"Ecommerce Website Cost Calculator"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/web-design-calculator' element={<CostCalculator title={"Web Design Calculator"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/calculate-cost-of-website' element={<CostCalculator title={"Calculate Cost Of Website"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/website-pricing-calculator' element={<CostCalculator title={"Website Pricing Calculator"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/website-building-cost-calculator' element={<CostCalculator title={"Website Building Cost Calculator"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/website-cost-estimator' element={<CostCalculator title={"Website Cost Estimator"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/website-packages' element={<CostCalculator title={"Website Packages"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/web-design-packages' element={<CostCalculator title={"Web Design Packages"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/website-design-packages' element={<CostCalculator title={"Website Design Packages"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/small-business-website-design-packages' element={<CostCalculator title={"Small Business Website Design Packages"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/small-business-website-packages' element={<CostCalculator title={"Small Business Website Packages"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/small-business-web-design-packages' element={<CostCalculator title={"Small Business Web Design Packages"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/website-pricing-packages' element={<CostCalculator title={"Website Pricing Packages"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/website-development-packages' element={<CostCalculator title={"Website Development Packages"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/web-development-packages' element={<CostCalculator title={"Web Development Packages"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/website-creation-packages' element={<CostCalculator title={"Website Creation Packages"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/affordable-web-design-packages' element={<CostCalculator title={"Affordable Web Design Packages"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/business-website-packages' element={<CostCalculator title={"Business Website Packages"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/packages-for-website-design' element={<CostCalculator title={"Packages For Website Design"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/web-site-package' element={<CostCalculator title={"Web Site Package"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/ecommerce-website-creation-service-pricing-calculator' element={<CostCalculator title={"Ecommerce Website Creation Service Pricing Calculator"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />

          <Route path='/free-ecommerce-website-cost-calculator' element={<CostCalculator title={"Free Ecommerce Website Cost Calculator"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/ecommerce-website-cost-calculator-for-free' element={<CostCalculator title={"Ecommerce Website Cost Calculator for Free"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />




          <Route path='/website-design-pricing-packages' element={<CostCalculator title={"Website Design Pricing Packages"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/web-design-package-pricing' element={<CostCalculator title={"Web Design Package Pricing"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/ecommerce-site-cost-calculator' element={<CostCalculator title={"Ecommerce Site Cost Calculator"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/estimation-site-internet' element={<CostCalculator title={"Estimation Site Internet"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/website-design-cost-calculator-UK' element={<CostCalculator title={"Website Design Cost Calculator UK"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/web-value-estimator' element={<CostCalculator title={"Web Value Estimator"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/seo' element={<Seo title={"SEO Services"} description={"Invest in Your Future with an SEO Company that Gets Results"} />} />
          <Route path='/website-development' element={<WebsiteDevelopment title={"Website Development"} description={"Invest in Your Future with an SEO Company that Gets Results"} />} />

          <Route path='/app-development' element={<AppDevelopment title={"App Development"} description={"At Metatech We build scalable, secure, and high‑speed mobile apps using modern stacks and best practices."} />} />
         
         
         
          <Route path='/affordable-search-engine-ranking' element={<Seo title={"Affordable Search Engine Ranking"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/wordpress-seo-services' element={<Seo title={"WordPress SEO Services"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />

          <Route path='/travel-agency-seo' element={<HotelSeo title={"SEO For Travel Agency"} description={"SEO services for travel agencies, websites, and the travel industry. Businesses and travel agents can maximize SEO with our customized travel SEO tools. At Metatech, our travel industry SEO services ensure growth and visibility."} />} />
          <Route path='/seo-for-travel-company' element={<HotelSeo title={"SEO For Travel Company"} description={"SEO services for travel agencies, websites, and the travel industry. Businesses and travel agents can maximize SEO with our customized travel SEO tools. At Metatech, our travel industry SEO services ensure growth and visibility."} />} />
          <Route path='/seo-services-for-travel-industry' element={<HotelSeo title={"SEO Services For Travel Industry"} description={"SEO services for travel agencies, websites, and the travel industry. Businesses and travel agents can maximize SEO with our customized travel SEO tools. At Metatech, our travel industry SEO services ensure growth and visibility."} />} />
          <Route path='/seo-for-travel-website' element={<HotelSeo title={"SEO For Travel Website"} description={"SEO services for travel agencies, websites, and the travel industry. Businesses and travel agents can maximize SEO with our customized travel SEO tools. At Metatech, our travel industry SEO services ensure growth and visibility."} />} />
          <Route path='/seo-for-travel-agents' element={<HotelSeo title={"SEO For Travel Agents"} description={"SEO services for travel agencies, websites, and the travel industry. Businesses and travel agents can maximize SEO with our customized travel SEO tools. At Metatech, our travel industry SEO services ensure growth and visibility."} />} />

          <Route path='/fashion-seo-services' element={<FashionSEO title={"Fashion SEO Services"} description={"SEO services for the fashion business, websites, and fashion brands. Using our customised fashion SEO tools will help companies and fashion stores maximise SEO. Our fashion industry SEO offerings at Metatech promise expansion and more exposure."} />} />
          <Route path='/fashion-seo-agency' element={<FashionSEO title={"Fashion SEO Agency"} description={"SEO agency for the fashion business, websites, and fashion brands. Using our customised fashion SEO tools will help companies and fashion stores maximise SEO. Our fashion industry SEO offerings at Metatech promise expansion and more exposure."} />} />
          <Route path='/fashion-seo-company' element={<FashionSEO title={"Fashion SEO Company"} description={"SEO company for the fashion business, websites, and fashion brands. Using our customised fashion SEO tools will help companies and fashion stores maximise SEO. Our fashion industry SEO offerings at Metatech promise expansion and more exposure."} />} />
          <Route path='/boutique-seo-company' element={<FashionSEO title={"Boutique SEO Company"} description={"SEO company for the boutique business, websites, and fashion brands. Using our customised fashion SEO tools will help companies and fashion stores maximise SEO. Our fashion industry SEO offerings at Metatech promise expansion and more exposure."} />} />


          <Route path='/hotels-seo-agency' element={<TheHotelSeo title={"SEO Agency For Hotels"} description={"We offer hotel SEO services and specialize in search engine optimization for the hotel industry. Our specialty is developing customized hotel SEO strategies to improve your hotel's online presence."} />} />
          {/* <Route path='/seo-services-for-hotels' element={<TheHotelSeo title={"SEO Services For Hotels"} description={"We offer hotel SEO services and specialize in search engine optimization for the hotel industry. Our specialty is developing customized hotel SEO strategies to improve your hotel's online presence."}/>} />
        <Route path='/hotels-seo-services' element={<TheHotelSeo title={"Hotels SEO Services"} description={"We offer hotel SEO services and specialize in search engine optimization for the hotel industry. Our specialty is developing customized hotel SEO strategies to improve your hotel's online presence."}/>} />
        <Route path='/seo-hospitality' element={<TheHotelSeo title={"SEO Hospitality"} description={"We offer hotel SEO services and specialize in search engine optimization for the hotel industry. Our specialty is developing customized hotel SEO strategies to improve your hotel's online presence."}/>} />
        <Route path='/seo-hotel-industry' element={<TheHotelSeo title={"SEO Hotel Industry"} description={"We offer hotel SEO services and specialize in search engine optimization for the hotel industry. Our specialty is developing customized hotel SEO strategies to improve your hotel's online presence."}/>} />
     */}
          <Route path='/hotel-seo-strategy' element={<TheHotelSeo title={"Hotel SEO Strategy"} description={"We offer hotel SEO services and specialize in search engine optimization for the hotel industry. Our specialty is developing customized hotel SEO strategies to improve your hotel's online presence."} />} />
          <Route path='/seo-for-hotel-industry' element={<TheHotelSeo title={"SEO For Hotel Industry"} description={"We offer hotel SEO services and specialize in search engine optimization for the hotel industry. Our specialty is developing customized hotel SEO strategies to improve your hotel's online presence."} />} />
          <Route path='/hospitality-seo-agency' element={<TheHotelSeo title={"Hospitality SEO Agency"} description={"We offer hotel SEO services and specialize in search engine optimization for the hotel industry. Our specialty is developing customized hotel SEO strategies to improve your hotel's online presence."} />} />
          <Route path='/hotel-seo-company' element={<TheHotelSeo title={"Hotel SEO Company"} description={"We offer hotel SEO services and specialize in search engine optimization for the hotel industry. Our company specialty is developing customized hotel SEO strategies to improve your hotel's online presence."} />} />

          <Route path='/hotel-search-engine-optimization' element={<TheHotelSeo title={"Hotel Search Engine Optimization"} description={"We offer hotel SEO services and specialize in search engine optimization for the hotel industry. Our specialty is developing customized hotel SEO strategies to improve your hotel's online presence."} />} />
          <Route path='/local-seo-for-hotels' element={<TheHotelSeo title={"Local SEO For Hotels"} description={"We offer local hotel SEO services and specialize in search engine optimization for the hotel industry. Our specialty is developing customized hotel SEO strategies to improve your hotel's online presence."} />} />
          <Route path='/seo-for-hospitality-industry' element={<TheHotelSeo title={"SEO For Hospitality Industry"} description={"We offer hospitality SEO services and specialize in search engine optimization for the hotel industry. Our specialty is developing customized hotel SEO strategies to improve your hotel's online presence."} />} />
          <Route path='/hospitality-seo-services' element={<TheHotelSeo title={"Hospitality SEO Services"} description={"We offer hospitality SEO services and specialize in search engine optimization for the hotel industry. Our specialty is developing customized hotel SEO strategies to improve your hotel's online presence."} />} />

          <Route path='/wordpress-seo-expert' element={<Seo title={"WordPress SEO Expert"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/wordpress-seo-agency' element={<Seo title={"WordPress SEO Agency"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/seo-agentur-wordpress' element={<Seo title={"SEO Agentur Wordpress"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/wordpress-seo-expert-services' element={<Seo title={"WordPress SEO Expert Services"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/seo-services-for-wordpress' element={<Seo title={"SEO Services For Wordpress"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/wordpress-seo-optimization-service' element={<Seo title={"WordPress SEO Optimization Service"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/wordpress-seo-specialist' element={<Seo title={"WordPress SEO Specialist"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/seo-packages-for-small-business' element={<Seo title={"Seo Packages For Small Business"} description={"At Metatech Official, we offer the best SEO Services for small businesses to rank their website for particular keywords"} />} />
          <Route path='/search-engine-listing' element={<Seo title={"Search Engine Lisitng"} description={"We maximize your search engine listing using organic SEO so that you will get assured results. See improvement and visibility from better ranks and consistent traffic. For long-term success, only apply sensible plans that produce actual outcomes."} />} />
          <Route path='/affordable-local-seo-solution' element={<Seo title={"Affordable Local SEO Solution"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/off-page-seo-company' element={<Seo title={"Off Page SEO Company"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/affordable-wordpress-seo-agency' element={<Seo title={"Affordable WordPress SEO Agency"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />

          <Route path='/cheap-wordpress-seo-agency-for-small-business' element={<Seo title={"Cheap WordPress SEO Agency For Small Business"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />

          <Route path='/affordable-wordpress-seo-agency-us' element={<Seo title={"Affordable WordPress SEO Agency in United States"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/affordable-wordpress-seo-agency-uk' element={<Seo title={"Affordable WordPress SEO Agency in United Kingdom"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />

          <Route path='/inexpensive-seo-lead-generation-services' element={<Seo title={"Inexpensive SEO Lead Generation Services"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/wordpress-seo-consulting' element={<Seo title={"WordPress SEO Consulting"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/wordpress-seo-without-plugin' element={<Seo title={"WordPress SEO Without Plugin"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/hire-wordpress-seo-expert' element={<Seo title={"Hire WordPress SEO Expert"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/affordable-seo-strategies-near-me' element={<Seo title={"Affordable SEO Strategies Near Me"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/affordable-monthly-seo' element={<Seo title={"Affordable Monthly SEO"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/affordable-seo-audit' element={<Seo title={"Affordable SEO Audit"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/wordpress-website-audit-service' element={<Seo title={"WordPress Website Audit Service"} description={"Complete WordPress website audit service to increase performance, resolve issues, and enhance SEO for best site health and ranking."} />} />
          <Route path='/wordpress-seo-consultant' element={<Seo title={"WordPress SEO Consultant"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />

          <Route path='/affordable-ecommerce-seo' element={<Seo title={"Affordable Ecommerce SEO Services in US"} description={"For your company, is SEO within budget? Find out how cheap SEO services in US could benefit your business as well as how to build a reasonable SEO budget."} />} />
          <Route path='/small-business-seo' element={<Seo title={"Small Business SEO"} description={"Search engine optimisation, or small business SEO, keeps your website competitive and generates more traffic and opportunities."} />} />

          <Route path='/wordpress-affordable-monthly-seo' element={<Seo title={"WordPress Affordable Monthly SEO"} description={"Seeking a reliable digital marketing company for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/seo-startup-companies' element={<Seo title={"SEO Startup Companies"} description={"Seeking a reliable digital marketing company for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />

          <Route path='/affordable-wordpress-seo-company' element={<Seo title={"Affordable WordPress SEO Company"} description={"Seeking a reliable digital marketing company for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />

          <Route path='/international-seo-services' element={<Seo title={"International SEO Services"} description={"Seeking a reliable digital marketing company for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />

          <Route path='/expert-seo-international' element={<Seo title={"Expert SEO International"} description={"Seeking a reliable expert international seo company for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/local-seo-birmingham' element={<Seo title={"Local SEO Birmingham"} description={"Seeking a reliable local SEO company in Birmingham for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/seo-services-beverly-hills' element={<Seo title={"SEO Services Beverly Hills"} description={"Seeking a reliable SEO company in Beverly Hills for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/san-francisco-local-seo' element={<Seo title={"San Francisco Local SEO"} description={"Seeking a reliable local SEO company in San Francisco for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/seo-services-austria' element={<Seo title={"SEO Services Austria"} description={"Seeking a reliable local SEO company in Austria for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE, Austria."} />} />
          <Route path='/seo-madagascar' element={<Seo title={"SEO Madagascar"} description={"Seeking a reliable local Madagascar SEO company for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/seo-company-bournemouth' element={<Seo title={"SEO Company Bournemouth"} description={"Seeking a reliable local SEO company in Bournemouth for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />

          <Route path='/seo-expert-stockholm' element={<StockholmSEO title={"SEO Expert Stockholm"} description={"Seeking a reliable SEO company in Stockholm for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/seo-agency-stockholm' element={<StockholmSEO title={"SEO Agency Stockholm"} description={"Seeking a reliable SEO company in Stockholm for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/seo-company-in-stockholm' element={<StockholmSEO title={"SEO Company in Stockholm"} description={"Seeking a reliable SEO company in Stockholm for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/stockholm-seo-services-company' element={<StockholmSEO title={"Stockholm SEO Services Company"} description={"Seeking a reliable SEO company in Stockholm for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/seo-stockholm' element={<StockholmSEO title={"SEO Stockholm"} description={"Seeking a reliable SEO company in Stockholm for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/expert-stockholm-seo' element={<StockholmSEO title={"Expert Stockholm SEO "} description={"Seeking a reliable SEO company in Stockholm for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/seo-expert-company-stockholm' element={<StockholmSEO title={"SEO Expert Company Stockholm"} description={"Seeking a reliable SEO company in Stockholm for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/stockholm-seo' element={<StockholmSEO title={"Stockholm SEO"} description={"Seeking a reliable SEO company in Stockholm for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/stockholm-seo-agency' element={<StockholmSEO title={"Stockholm SEO Agency"} description={"Seeking a reliable SEO agency in Stockholm for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/stockholm-expert-seo' element={<StockholmSEO title={"Stockholm Expert SEO"} description={"Seeking a reliable SEO company in Stockholm for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />

          <Route path='/seo-kaatsheuvel' element={<Seo title={"SEO Kaatsheuvel"} description={"Reliable SEO company in Kaatsheuvel for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/seo-uppsala' element={<Seo title={"SEO Uppsala"} description={"Reliable SEO company in Uppsala for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/seo-optimization-zanzibar' element={<Seo title={"SEO Optimization Zanzibar"} description={"Reliable SEO company in Zanzibar for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/smb-business-seo-consultant' element={<Seo title={"SMB Business SEO Consultant"} description={"Reliable SMB Business SEO Consultant company in US for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/affordable-seo-london' element={<Seo title={"Affordable SEO London"} description={"Affordable SEO company in London for SEO optimization, online marketing, website design, Google Ads management, Social Media, UK, USA, Australia, UAE."} />} />
          <Route path='/london-affordable-seo' element={<Seo title={"London Affordable Seo"} description={"Affordable SEO company in London for SEO optimization, online marketing, website design, Google Ads management, Social Media, UK, USA, Australia, UAE."} />} />
          <Route path='/affordable-seo-services-london' element={<Seo title={"Affordable SEO Services London"} description={"Affordable SEO company in London for SEO optimization, online marketing, website design, Google Ads management, Social Media, UK, USA, Australia, UAE."} />} />
          <Route path='/affordable-seo-company-london' element={<Seo title={"Affordable SEO Company London"} description={"Affordable SEO company in London for SEO optimization, online marketing, website design, Google Ads management, Social Media, UK, USA, Australia, UAE."} />} />
          <Route path='/seo-maidstone' element={<Seo title={"SEO Maidstone"} description={"Reliable SEO company in Maidstone for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/seo-companies-in-kent' element={<Seo title={"SEO Companies in Kent"} description={"Reliable SEO company in Kent for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/seo-agency-in-derby' element={<Seo title={"SEO Agency in Derby"} description={"Reliable SEO company in Derby for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/seo-agency-nottingham' element={<Seo title={"SEO Agency Nottingham"} description={"Reliable SEO company in Nottingham for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/seo-sunshine-coast' element={<Seo title={"SEO Sunshine Coast"} description={"Reliable SEO company in Sunshine Coast for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/local-seo-dubai' element={<Seo title={"Local SEO Dubai"} description={"Local SEO company in Dubai for SEO optimization, online marketing, website design, Google Ads management, Social Media, UAE, USA, UK, Australia."} />} />
          <Route path='/seo-oxfordshire' element={<Seo title={"SEO Oxfordshire"} description={"Reliable SEO company in Oxfordshire for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/seo-for-shopify-bradford' element={<Seo title={"SEO For Shopify Bradford"} description={"Reliable SEO company in Bradford for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/dublin-marketing-and-seo-agency' element={<Seo title={"Dublin Marketing & SEO Agency"} description={"Reliable SEO company in Dublin for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/consultant-seo-rennes' element={<Seo title={"Consultant SEO Rennes"} description={"Reliable SEO company in Rennes for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/seo-bristol' element={<Seo title={"SEO Bristol"} description={"Reliable SEO company in Birstol for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />

          <Route path='/seo-berkshire' element={<BerkshireSEO title={"SEO Berkshire"} description={"Seeking a reliable local SEO company in Berkshire for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/seo-agency-berkshire' element={<BerkshireSEOB1 title={"SEO Agency Berkshire"} description={"Seeking a reliable local SEO company in Berkshire for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/seo-company-in-berkshire' element={<BerkshireSEOB1 title={"SEO Company in Berkshire"} description={"Seeking a reliable local SEO company in Berkshire for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/seo-in-berkshire' element={<BerkshireSEOB1 title={"SEO in Berkshire"} description={"Searching for a reliable local SEO company in Berkshire for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/seo-company-berkshire' element={<BerkshireSEOB2 title={"SEO Company Berkshire"} description={"Searching for a reliable local SEO company in Berkshire for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/seo-services-berkshire' element={<BerkshireSEOB3 title={"SEO Services Berkshire"} description={"Searching for a reliable local SEO company in Berkshire for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />

          <Route path='/berkshire-seo-agency' element={<BerkshireSEOB3 title={"Berkshire SEO Agency"} description={"Searching for a reliable local SEO company in Berkshire for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/seo-for-berkshire-companies' element={<BerkshireSEOB3 title={"SEO For Berkshire Companies"} description={"Searching for a reliable local SEO company in Berkshire for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/berkshire-seo-company' element={<BerkshireSEOB3 title={"Berkshire SEO Company"} description={"Searching for a reliable local SEO company in Berkshire for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/berkshire-search-engine-optimization' element={<BerkshireSEOB3 title={"Berkshire Search Engine Optimization"} description={"Searching for a reliable Berkshire Search Engine Optimization(SEO) company in Berkshire for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/berkshire-website-seo-company' element={<BerkshireSEOB3 title={"Berkshire Website SEO Company"} description={"Searching for a reliable Berkshire Website SEO company in Berkshire for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />

          <Route path='/seo-consultant-berkshire' element={<BerkshireSEOB3 title={"SEO Consultant Berkshire"} description={"Searching for a reliable local SEO company in Berkshire for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/seo-consultancy-berkshire' element={<BerkshireSEOB3 title={"SEO Consultancy Berkshire"} description={"Searching for a reliable local SEO company in Berkshire for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/seo-audit-berkshire' element={<BerkshireSEOB3 title={"SEO Audit Berkshire"} description={"Searching for a reliable local SEO company in Berkshire for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/local-seo-berkshire' element={<BerkshireSEOB3 title={"Local SEO Berkshire"} description={"Searching for a reliable local SEO company in Berkshire for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/local-seo-company-berkshire' element={<BerkshireSEOB3 title={"Local SEO Company Berkshire"} description={"Searching for a reliable local SEO company in Berkshire for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/local-seo-company-in-berkshire' element={<BerkshireSEOB3 title={"Local SEO Company in Berkshire"} description={"Searching for a reliable local SEO company in Berkshire for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/berkshire-local-seo-company' element={<BerkshireSEOB3 title={"Berkshire Local SEO Company"} description={"Searching for a reliable local SEO company in Berkshire for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/seo-agency-in-berkshire' element={<BerkshireSEOB3 title={"SEO Agency in Berkshire"} description={"Searching for a reliable SEO agency in Berkshire for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />


          <Route path='/berkshire-seo-for-local-companies' element={<BerkshireSEOB3 title={"Berkshire SEO For Local Companies"} description={"Searching for a reliable Berkshire local SEO company for your business for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />

          <Route path='/seo-consultant-in-berkshire' element={<BerkshireSEOB3 title={"SEO Consultant in Berkshire"} description={"Searching for a reliable local SEO company in Berkshire for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/berkshire-seo-tips-for-your-comapny' element={<BerkshireSEOB3 title={"Berkshire SEO Tips for Your Comapny"} description={"Searching for a reliable local SEO tips for your company in Berkshire for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />

          <Route path='/technical-seo-services' element={<Seo title={"Technical SEO Services"} description={"Seeking a reliable digital marketing company for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />

          <Route path='/white-label-seo-service' element={<Seo title={"White Label SEO Service"} description={"Seeking a reliable digital marketing company for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/white-label-seo-services-us' element={<Seo title={"White Label SEO Services in US"} description={"Seeking a reliable digital marketing company for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/wordpress-white-label-seo-services' element={<Seo title={"Wordpress White Label SEO Services"} description={"Seeking a reliable digital marketing company for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/affordable-monthly-search-engine-optimization-service' element={<Seo title={"Affordable Monthly Search Engine Optimization Service"} description={"Seeking a reliable digital marketing company for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />

          <Route path='/blogs' element={<Blogs title={"Blogs"} description={"Seeking a reliable digital marketing company for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />

            

          <Route path='/ppc-management-packages' element={<Ppc title={"PPC Management Packages"} description={"At Metatech We have experts in Google Ads PPC who can help you with your paid search marketing."} />} />

          <Route path='/affordable-ppc-packages' element={<Ppc title={"Affordable PPC Packages"} description={"Seeking a reliable digital marketing company for SEO optimization, online marketing, website design, PPC management, Social Media, USA, UK, Australia, UAE."} />} />

          <Route path='/ppc-packages-for-startup-companies' element={<Ppc title={"PPC Packages for Startup Companies in US"} description={"Seeking a reliable digital marketing company for SEO optimization, online marketing, website design, PPC management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/pay-per-click-packages' element={<Ppc title={"Pay Per Click Packages"} description={"Seeking a reliable digital marketing company for SEO optimization, online marketing, website design, PPC management, Social Media, USA, UK, Australia, UAE."} />} />



          <Route path='/google-ads-management-services' element={<Ppc title={"Google Ads Management Services"} description={"Seeking a reliable digital marketing company for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/google-ads-ppc-management-services' element={<Ppc title={"Google Ads PPC Management Services"} description={"Seeking a reliable digital marketing company for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/google-ads-management-service-for-small-businesses' element={<Ppc title={"Google Ads Management Service For Small Businesses"} description={"Seeking a reliable digital marketing company for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/hire-ppc-management-team-for-your-startup-company' element={<Ppc title={"Hire PPC Management Team For Your Startup Company"} description={"Seeking a reliable digital marketing company for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />

          <Route path='/blog/white-label-seo' element={<BlogPost title={"Hire PPC Management Team For Your Startup Company"} description={"Seeking a reliable digital marketing company for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />
          <Route path='/blog/role-of-agenticai-in-making-money' element={<AgenticAIBlog title={"Hire PPC Management Team For Your Startup Company"} description={"Seeking a reliable digital marketing company for SEO optimization, online marketing, website design, Google Ads management, Social Media, USA, UK, Australia, UAE."} />} />




          <Route path='/seo-contact' element={<SeoContact title={"Contact Us"} description={"Leading SEO and Web Development company Metatech Official helps businesses rank successfully in the world of digital technology."} />} />
          <Route path='/estimated-cost' element={<EstimatedCost />} />
        </Routes>
        <Footer />

      </BrowserRouter>
    </div>
  )
}

export default App  