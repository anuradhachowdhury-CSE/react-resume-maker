import React from 'react'
import {NavLink ,Link} from 'react-router-dom'
import images from '../component/image'

const Navbar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link className='navbar-brand' to="/">
      <img className="spcl-img" src={images.img49}/>Resume Maker
      </Link>
      
     <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/resume">
              Resume
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/cv">
              CV
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/cover">
              Cover Letter
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/motivation">
              Motivation Letter
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/register">
              Register
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/sign">
              Sign in
            </NavLink>
          </li>
        </ul>
       
      </div>
    </div>
  </nav>
  

  
  )
}

export default Navbar