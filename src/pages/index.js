import React, { useEffect } from "react"
import { Link } from "gatsby"
import AOS from "aos"
import "aos/dist/aos.css"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Jumbotron from "../components/jumbotron"

const IndexPage = () => {
  useEffect(() => {
    AOS.init()
  })

  return (
    <Layout>
      <SEO title="Home" />
      {/* <h1
        data-aos="fade-right"
        data-aos-duration="3000"
        data-aos-easing="ease-in-sine"
      >
        Hi people
      </h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div
        style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}
        data-aos="zoom-in-left"
        data-aos-duration="2000"
        data-aos-easing="ease-in-sine"
      >
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
      <Jumbotron />
    </Layout>
  )
}

export default IndexPage
