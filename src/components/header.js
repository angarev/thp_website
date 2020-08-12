import React, { useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import M from "materialize-css/dist/js/materialize.min.js"
import MaterialIcon from "@material/react-material-icon"
import Logo from "../images/logo.png"

const Header = ({ siteTitle }) => {
  useEffect(() => {
    let sidenav = document.querySelector("#slide-out")
    M.Sidenav.init(sidenav, {
      edge: "right",
    })
  })

  return (
    <header>
      <nav>
        <div className="container">
          <Link to="/" className="brand-logo">
            <img src={Logo} alt={siteTitle} style={{ width: "40px" }} />
          </Link>
          <ul id="nav-mobile" className="right">
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a
                href="#"
                data-target="slide-out"
                className="sidenav-trigger show-on-large"
              >
                <MaterialIcon icon="apps" title="Contact" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div id="slide-out" className="sidenav">
        <h5 className="text-center">Contact Details</h5>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
