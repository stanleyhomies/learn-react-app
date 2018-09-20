import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Learn to design and code React apps</h1>
    <p>Trying out react and design. Prototype using Framer X later on</p>
    <Link to="/page-2/">Watch the video</Link>
  </Layout>
)

export default IndexPage