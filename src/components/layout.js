/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div style={{
      background: `#E8D2A3`,
    }}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          padding: `0 0rem 0.5rem`,
        }}
      >
        <main>{children}</main>
        <footer style={{
          color:`white`,
          textAlign:`right`,
          margin:`0`,
          paddingRight:`4vh`,
        }}>
     
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
         }} alt="githubicon"/>
        </a>
        <a
          href="https://www.linkedin.com/in/gabrielle-o-580986174/"
          style={{
            color: `white`,
            textDecoration: `none`,
            marginLeft:`1.5vh`,
            zIndex:`20`,
          }}
        >
          <img src="/images/210-2103667_linkedin-transparent-tiny-linkedin-icon-white-png.png" height="27.4vh" style={{ marginTop:`1rem`,}} alt="linkedinicon"/>
        </a>
        </footer>
      </div>
    </div>
  )
}


  

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
