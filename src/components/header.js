import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: '#2C2F33',
      marginBottom: `1.3rem`,
      //boxShadow: '0 0 2vh #5555',
    }}
  >
    <hr style={{ 
      background: '#5B53B9',
      height:'.4rem',
    }} />
    <div
      style={{
        margin: `0`,
        padding: `0.5rem`,
      }}
    >
      <h1 style={{ marginLeft: `1.55vh`, display:`inline`, fontWeight:`500`,}}>
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
          <img src="../src/images/GitHub-Mark-Light-64px.png" />
        </a>

        <h3 style={{ float:`right`, marginRight:`1.5vh`, display:`inline`, fontWeight:`300`,}}>
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
          to="/goals"
          style={{
            color: `white`,
            textDecoration: `none`,
            marginLeft:`1.5vh`,
          }}
        >
          Goals
        </Link>
      </h3>
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
