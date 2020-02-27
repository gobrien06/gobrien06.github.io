import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: '#2C2F33',
      //boxShadow: `0.5vh 0.5vh 0.8vh #000`,
      //boxShadow: '0 0 2vh #5555',
    }}
  >
    <hr style={{ 
      background: '#5B53B9',
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
      <h1 style={{ marginLeft: `1.55vh`, display:`inline`, fontWeight:`600`,}}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        </h1>
        <a
          href="https://github.com/gobrien06"
          style={{
            color: `white`,
            textDecoration: `none`,
            marginLeft:`1.5vh`,
          }}
        >
          <img src="/images/GitHub-Mark-Light-64px.png" height="20vh" style={{ marginTop:`1rem`,}}/>
        </a>
        <a
          href="https://www.linkedin.com/in/gabrielle-o-580986174/"
          style={{
            color: `white`,
            textDecoration: `none`,
            marginLeft:`1.5vh`,
          }}
        >
          <img src="/images/210-2103667_linkedin-transparent-tiny-linkedin-icon-white-png.png" height="21.5vh" style={{ marginTop:`1rem`,}}/>
        </a>

        <h4 style={{ float:`right`, marginRight:`1.5vh`, display:`inline`, fontWeight:`300`,}}>
        <Link
          to="/projects"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Projects
        </Link>
        <Link
          to="/designs"
          style={{
            color: `white`,
            textDecoration: `none`,
            marginLeft:`1.5vh`,
          }}
        >
          Designs
        </Link>
        <Link
          to="/contact"
          style={{
            color: `white`,
            textDecoration: `none`,
            marginLeft:`1.5vh`,
          }}
        >
          Contact
        </Link>
        <hr style={{
         background: '#737982',
          textDecoration: `none`,
        }} />
      </h4>
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
