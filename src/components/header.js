import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './iconstyles.css';
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Header = ({ siteTitle }) => (
  <header
    style={{
      //boxShadow: `0.5vh 0.5vh 0.8vh #000`,
      //boxShadow: '0 0 2vh #5555',
  
      width:`100%`,
      position:`fixed`,
      zIndex:`1001`,
      height:`10vh`,
  
  
    }}
  >
    <hr style={{ 
      background: '#8BDDBD',
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
        <AniLink
          paintDrip 
          hex="#8BDDBD"
          duration={1}
          to="/"
        >
          <img src="/images/palmcion.png" height="50vh" alt="siteicon" className="topicon"/>
        </AniLink>

        <h5 style={{ float:`right`, marginRight:`1.8vh`, display:`inline`, fontWeight:`300`,  marginTop:`-1.3rem`,}}>
        <AniLink
          swipe 
          direction="left"
          duration={1.3}
          to="/projects"
          style={{
            color: `white`,
            textDecoration: `none`,
            marginLeft:`1.8vh`,
          }}
        >
          Projects
        </AniLink>
        <AniLink
          swipe 
          direction="left"
          duration={1.3}
          to="/blog"
          style={{
            color: `white`,
            textDecoration: `none`,
            marginLeft:`1.8vh`,
          }}
        >
          Blog
        </AniLink>
        <AniLink
          swipe 
          direction="left"
          duration={1.3}
          to="/contact"
          style={{
            color: `white`,
            textDecoration: `none`,
            marginLeft:`1.8vh`,
          }}
        >
          Contact
        </AniLink>
        <a
          href="https://github.com/gobrien06"
          style={{
            color: `white`,
            textDecoration: `none`,
            marginLeft:`1.5vh`,
          }}
        >
          <img src="/images/GitHub-Mark-Light-64px.png" height="25vh" style={{ 
          marginTop:`1rem`,
          zIndex:`10`,
          marginLeft:`1.3vh`,
         }} alt="githubicon"/>
        </a>
        <a
          href="https://www.linkedin.com/in/gabrielle-o-580986174/"
          style={{
            color: `white`,
            textDecoration: `none`,
            marginLeft:`2vh`,
            zIndex:`20`,
          }}
        >
          <img src="/images/210-2103667_linkedin-transparent-tiny-linkedin-icon-white-png.png" height="27.4vh" style={{ marginTop:`1rem`,}} alt="linkedinicon"/>
        </a>
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

