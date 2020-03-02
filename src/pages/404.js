import React from "react";
import {Link} from 'gatsby';

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 style={{
      paddingLeft:`10vh`,
      paddingTop:`20vh`,
      color:`white`,

    }}>404: PAGE NOT FOUND</h1>
    <p style={{
      color:`gray`,
      paddingLeft:`10vh`,
    }}><b> How'd you get here?</b><br/>You just hit a route that doesn&#39;t exist. Return to <Link to="/" style={{color:`white`,}}>home</Link>?</p>
     <img src="/images/ux6at2ls49qz.png" height="100vh" style={{marginLeft:`15vh`,marginTop:`2vh`,}}/>

  </Layout>
)

export default NotFoundPage
