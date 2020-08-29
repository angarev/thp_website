import React from "react"

import WebDeveloper from "../assets/web_developer.svg"

const Jumbotron = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m6">
          <div
            style={{
              width: "100px",
              height: "200px",
              backgroundColor: "#F6CD3E",
              position: "absolute",
              zIndex: "-1",
              left: "30%",
            }}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          ></div>
          <div
            style={{
              width: "629px",
              height: "62px",
              backgroundColor: "#F6CD3E",
              position: "absolute",
              zIndex: "-1",
              left: "45%",
              top: "80%",
            }}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          ></div>
          <h1
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            IF YOU ARE INTERESTED, <br />
            LET'S START A PROJECT!
          </h1>
        </div>
        <div className="col s12 m6">
          <WebDeveloper
            style={{ width: "100%" }}
            data-aos="zoom-in-left"
            data-aos-duration="2000"
            data-aos-easing="ease-in-sine"
          />
        </div>
      </div>
    </div>
  )
}

export default Jumbotron
