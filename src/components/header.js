import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Sidenav from "./Sidenav"
import Contactnav from "./Contactnav"

const Header = ({ siteTitle }) => {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">
              THP team
            </a>

            <a href="#" data-target="slide-out" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="sass.html">Services</a>
              </li>
              <li>
                <a href="badges.html">About Us</a>
              </li>
              <li>
                <a
                  href="#"
                  data-target="contact-out"
                  className="sidenav-trigger show-on-large"
                >
                  <i className="material-icons">view_module</i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <Sidenav />
        <Contactnav />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
