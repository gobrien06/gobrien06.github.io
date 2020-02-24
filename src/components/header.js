import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: '#FFFF'      ,
      marginBottom: `1.3rem`,
      boxShadow: '0 0 2vh #5555',
    }}
  >
    <hr style={{ 
      background: '#2F78D5',
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
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        </h1>

        <h3 style={{ float:`right`, marginRight:`1.5vh`, display:`inline`, fontWeight:`400`,}}>
        <Link
          to="/goals"
          style={{
            color: `black`,
            textDecoration: `none`,
            marginLeft:`1.5vh`,
          }}
        >
          Goals
        </Link>
        <Link
          to="/projects"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          Projects
        </Link>
        <Link
          to="/designs"
          style={{
            color: `black`,
            textDecoration: `none`,
            marginLeft:`1.5vh`,
          }}
        >
          Designs
        </Link>
        <Link
          to="/github"
          style={{
            color: `black`,
            textDecoration: `none`,
            marginLeft:`1.5vh`,
          }}
        >
          GitHub
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
