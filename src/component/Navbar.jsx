import React from 'react'
import {NavLink } from 'react-router-dom'

const Nav = () => {
  return (
   
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">IGP Resume Maker</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        {/* <h5 className="offcanvas-title" id="offcanvasNavbarLabel">IGP Resume Maker</h5> */}
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <NavLink className="nav-link"  to="/">
            Home </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/resume">
            Resume </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/cv">
            CV </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/cover">
            Cover </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/motivation">
            Motivation </NavLink>
          </li>
         
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Registration or Sign In??
            </a>
            <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
              {/* <li><a className="dropdown-item" to="/register">Registration</a></li> */}
              <li className="nav-item">
            <NavLink className="nav-link dropdown-item" aria-current="page" to="/register">
            Register </NavLink>
          </li>
              <li className="nav-item">
            <NavLink className="nav-link dropdown-item" aria-current="page" to="/sign">
            Sign in </NavLink>
          </li>
              {/* <li><a className="dropdown-item" to="/sign">Sign in</a></li> */}
            
            </ul>
          </li>
        </ul>
       
      </div>
    </div>
  </div>
</nav>
  
  )
}

export default Nav