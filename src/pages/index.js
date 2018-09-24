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
       <div className="Logos">
        <img src={require('../images/logo-sketch.png')} width="50" />
        <img src={require('../images/logo-figma.png')} width="50" />
        <img src={require('../images/logo-studio.png')} width="50" />
        <img src={require('../images/logo-framer.png')} width="50" />
        <img src={require('../images/logo-react.png')} width="50" />
        <img src={require('../images/logo-swift.png')} width="50" />
       </div>
      <svg width="100%" height="270px" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <path d="" id="Rectangle" fill="#FFFFFF" fill-rule="nonzero">
              <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" values="M0.00254131519,44.2303712 C209.794771,154.066379 444.204517,164.517135 703.231778,75.5826413 C962.259039,-13.3518527 1207.84929,-23.8026094 1440.00254,44.2303712 L1440.00254,269.230371 L0,269.230371 L0.00254131519,44.2303712 Z;
              
              M0,0.230371234 C180.69564,101.246919 420.696063,132.014105 720.001271,92.5319286 C1019.30648,53.049752 1259.3069,22.2825662 1440.00254,0.230371234 L1440.00254,270.230371 L0,270.230371 L0,0.230371234 Z;

              M0.00254131519,101.851206 C245.932329,-32.6322907 485.931905,-32.6322907 720.001271,101.851206 C954.070636,236.334703 1194.07106,236.334703 1440.00254,101.851206 L1440.00254,270.988583 L0,270.988583 L0.00254131519,101.851206 Z;

              M0.00254131519,44.2303712 C209.794771,154.066379 444.204517,164.517135 703.231778,75.5826413 C962.259039,-13.3518527 1207.84929,-23.8026094 1440.00254,44.2303712 L1440.00254,269.230371 L0,269.230371 L0.00254131519,44.2303712 Z
              "
              />
            </path> 
          </g>
        </svg>
      </div>
    </div>
  </Layout>
)

export default IndexPage
