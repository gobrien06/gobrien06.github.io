import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {Link} from 'gatsby';
import {Row, Col, Button, Media} from 'reactstrap';
import ContentCard from '../components/contentcard/contentcard';
import Particles from 'react-particles-js';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Row className="textmobileshift">
       <Particles height="65vh" style={{position:`absolute`, maxWidth:'98%', }}
     params={{
      "particles": {
        "number": {
            "value": 10
        },
        "size": {
            "value": 2
        },
    },
      }
      }
      />
        <h1 style={{
          fontWeight:`700`,
          fontSize:`6em`,
          marginTop:`10vh`,
          marginBottom:`0vh`,
          color:`white`,
          zIndex:`1`,
        }}>
          Gabrielle O'Brien
        </h1>
        <h4 style={{
          color:`white`,
          zIndex:`1`,
          fontWeight:`300`,
          fontSize:`2em`,
          left:`0`,
  
        }}>
       Software Engineer. Computer Science Student.
        </h4>
        <h4 style={{
          color:`#A3D7E8`,
          fontWeight:`300`,
          fontSize:`1.1em`,
          zIndex:`10`,
        }}>
      JavaScript, ReactJS, React Native, NodeJS, ExpressJS, PostgreSQL, HTML5, CSS3, Git, Gatsby
        </h4>
    </Row>

    <section>
      <img className="mobiletree" style={{position:`absolute`, margin:`0`, zIndex: `0`, right:`0`, bottom:`0`, maxWidth:`38%`, height:`auto`,}}
          src = "/images/islandimg.png"
        />
        <div className="wave wave1"/>
        <div className="wave wave2"/>
        <div className="wave wave3"/>
    </section>
        
    
  </Layout>

)


export default IndexPage
