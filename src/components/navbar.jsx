import React from 'react'
import NavbarLogo from './navbar-logo.png'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [showdesc, setshowdesc] = useState('nav-desc')
  useEffect(() => {
    const link = document.getElementsByClassName('nav-link')
    const links = [...link]
    links.map((e) => {
      e.addEventListener('click', () => {
        setshowdesc('nav-desc')
      })
    })
  }, [])

  return (
    <nav style={{ backgroundColor: "rgba(0,0,0,0)" }} class="px-2 navbar fixed-top navbar-expand-lg d-flex flex-column">

      <div style={{ backgroundColor: 'rgb(101 101 255 / 25%)', backdropFilter: 'blur(25px)', borderTopLeftRadius: "0.375rem", borderTopRightRadius: '0.375rem' }} class="container p-2 d-flex justify-content-between ">

        <div className='d-lg-block d-none'></div>
        <Link onClick={() => window.scrollTo({ behavior: 'smooth', top: 0, left: 0 })} class="navbar-brand text-center" style={{ color: "white" }} to="/">
          <img width={'40px'} src={NavbarLogo} alt="Metatech Official Logo" />
          Metatech
        </Link>
        <div>
          <a className='d-lg-none d-block' onClick={() => showdesc == 'nav-desc' ? setshowdesc('nav-desc active') : setshowdesc('nav-desc')} >
            <i class="fa-solid fa-bars-staggered fa-2xl" style={{ color: "white" }}></i>
          </a>
        </div>



      </div>
      <div style={{
        borderBottomLeftRadius: '0.375rem',
        borderBottomRightRadius: '0.375rem',
        backgroundColor: 'rgb(101 101 255 / 25%)',
        backdropFilter: 'blur(25px)',
        opacity: window.innerWidth < 992 && showdesc == 'nav-desc' ? '0' : '1',
        transition: '1s all ease'
      }} className={`${window.innerWidth < 992 && showdesc} container my-2`}>
        <div style={{ flexGrow: 'unset' }} class="show collapse navbar-collapse w-100" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-center">
            <li class="nav-item">
              <Link class="nav-link" onClick={() => window.scrollTo({ behavior: 'smooth', top: 0, left: 0 })} aria-current="page" to="/">HOME</Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#services">SERVICES</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#portfolio">PORTFOLIO</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#achievements">ACHIEVEMENTS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#brand-development">BRAND DEVELOPMENT</a>
            </li>
            <li class="nav-item">
              <Link class="nav-link" onClick={() => window.scrollTo({ behavior: 'smooth', top: 0, left: 0 })} to="/website-cost-calculator">WEBSITE COST CALCULATOR</Link>
           
            </li>
            <li class="nav-item">
              <Link class="nav-link" onClick={() => window.scrollTo({ behavior: 'smooth', top: 0, left: 0 })} to="/contact">CONTACT US</Link>
            </li>
            {/* <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li> */}

          </ul>

        </div>
      </div>

    </nav>
  )
}

export default Navbar