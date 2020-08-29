import React, { Component } from "react"
import M from "materialize-css"

class Sidenav extends Component {
  componentDidMount() {
    const options = {
      inDuration: 250,
      outDuration: 200,
      draggable: true,
    }
    M.Sidenav.init(this.Sidenav)
  }
  render() {
    return (
      <ul
        ref={Sidenav => {
          this.Sidenav = Sidenav
        }}
        id="slide-out"
        className="sidenav"
      >
        <li>
          <a className="waves-effect" href="#!">
            Services
          </a>
        </li>
        <li>
          <a className="waves-effect" href="#!">
            About Us
          </a>
        </li>
      </ul>
    )
  }
}

export default Sidenav
