import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import MaterialIcon from "@material/react-material-icon"
import Logo from "../images/logo.png"
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import Button from "@material-ui/core/Button"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
})

const Header = ({ siteTitle }) => {
  const classes = useStyles()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = anchor => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ width: "300px" }}
    >
      {console.log(anchor)}
      Contact Details
    </div>
  )

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
            {["right"].map(anchor => (
              <li key={anchor}>
                <MaterialIcon
                  icon="apps"
                  title="Contact"
                  onClick={toggleDrawer(anchor, true)}
                  style={{
                    cursor: "pointer",
                    paddingTop: "0",
                    paddingLeft: "10px",
                  }}
                />
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </li>
            ))}
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
