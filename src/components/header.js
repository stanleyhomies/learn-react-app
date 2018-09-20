import React from 'react'
import { Link } from 'gatsby'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src={require('../images/logo-designcode.svg')} width="30"></img></Link>
      <Link to="/courses">Courses</Link>
      <Link to="/downloadw">Downloads</Link>
      <Link to="/workshops">Workshops</Link>
      <Link to="/buy"><button>buy</button></Link>
    </div>
  </div>
)

export default Header
