import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
       <h1>Learn to<br />design and code React apps</h1>
       <p>Trying out react and design. <br />Prototype using Framer X later on</p>
       <Link to="/page-2/">Watch the video</Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
