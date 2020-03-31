import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './iconstyles.css';
const Header = ({ siteTitle }) => (

  <header
    style={{
      //boxShadow: `0.5vh 0.5vh 0.8vh #000`,
      //boxShadow: '0 0 2vh #5555',
  
      width:`100%`,
      position:`fixed`,
      zIndex:`10`,
      height:`10vh`,
  
  
    }}
  >
    <hr style={{ 
      background: '#F3CA3E',
      height:'.3rem',
      position:'relative',
      marginTop: `0`,
    }} />
    <div
      style={{
        margin: `0`,
        padding: `0.5rem`,
      }}
    >
        <Link
          to="/"
        >
          <img src="/images/websiteicon.svg" height="45vh" alt="siteicon" className="topicon"/>
        </Link>

        <h5 style={{ float:`right`, marginRight:`1.8vh`, display:`inline`, fontWeight:`300`,}}>
        <Link
          to="/projects/projects"
          style={{
            color: `gray`,
            textDecoration: `none`,
          }}
        >
          Projects
        </Link>
        <Link
          to="/contact"
          style={{
            color: `gray`,
            textDecoration: `none`,
            marginLeft:`1.8vh`,
          }}
        >
          Contact
        </Link>
    
      </h5>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

