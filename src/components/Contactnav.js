import React, { useEffect } from "react"
import M from "materialize-css"

const Contactnav = () => {
  useEffect(() => {
    const options = {
      inDuration: 250,
      outDuration: 200,
      draggable: true,
      edge: "right",
    }
    let sidenav = document.querySelector("#contact-out")
    M.Sidenav.init(sidenav, options)
  })
  return (
    <ul id="contact-out" className="sidenav">
      <li>
        <div className="user-view">
          <div className="background">{/* <img src={image2} /> */}</div>
          <a href="#user">{/* <img className="circle" src={image1} /> */}</a>
          <a href="#name">
            <span className="white-text name">John Doe</span>
          </a>
          <a href="#email">
            <span className="white-text email">jdandturk@gmail.com</span>
          </a>
        </div>
      </li>
      <li>
        <a href="#!">
          <i className="material-icons">cloud</i>First Link With Icon
        </a>
      </li>
      <li>
        <a href="#!">Second Link</a>
      </li>
      <li>
        <div className="divider" />
      </li>
      <li>
        <a className="subheader">Subheader</a>
      </li>
      <li>
        <a className="waves-effect" href="#!">
          Third Link With Waves
        </a>
      </li>
    </ul>
  )
}

export default Contactnav
