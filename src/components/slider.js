import React, { useEffect } from "react"
import M from "materialize-css"

const Slider = () => {
  useEffect(() => {
    var elem = document.querySelector(".carousel")
    var instance = M.Carousel.init(elem, {
      fullWidth: true,
    })
    setInterval(() => {
      instance.next()
    }, 8000)
  })
  return (
    <div className="carousel carousel-slider center">
      <div className="carousel-item red white-text" href="#one!">
        <h2>First Panel</h2>
        <p className="white-text">This is your first panel</p>
      </div>
      <div className="carousel-item amber white-text" href="#two!">
        <h2>Second Panel</h2>
        <p className="white-text">This is your second panel</p>
      </div>
      <div className="carousel-item green white-text" href="#three!">
        <h2>Third Panel</h2>
        <p className="white-text">This is your third panel</p>
      </div>
      <div className="carousel-item blue white-text" href="#four!">
        <h2>Fourth Panel</h2>
        <p className="white-text">This is your fourth panel</p>
      </div>
    </div>
  )
}

export default Slider
