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
    <Row style={{
      padding:`10vh`,
      paddingTop:`15vh`,
      paddingBottom:`3%`,
      overflowX: `hidden`,
    }}>
       <Particles height="65vh" style={{position:`absolute`, maxWidth:'99%', }}
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
          fontSize:`6rem`,
          marginTop:`10vh`,
          color:`white`,
          marginLeft:`4vh`,
          zIndex:`1`,
        }}>
          Gabrielle O'Brien
        </h1>
        <h4 style={{
          color:`white`,
          zIndex:`1`,
          fontWeight:`200`,
          fontSize:`2rem`,
          marginLeft:`6vh`,
        }}>
       Software Engineer. Computer Science Student.
        </h4>
        <h4 style={{
          color:`#A3D7E8`,
          fontWeight:`300`,
          fontSize:`1.1rem`,
          marginLeft:`6vh`,
          zIndex:`1`,

        }}>
      JavaScript, ReactJS, React Native, NodeJS, ExpressJS, PostgreSQL, HTML5, CSS3, Git, Gatsby
        </h4>
        
        <img className="mobiletree" style={{position:`absolute`, margin:`0`, zIndex: `0`, right:`0`, bottom:`0`, maxWidth:`38%`, height:`auto`}}
        src = "/images/islandimg.png"
      />
  

      
    </Row>

    <section>
        <div className="wave wave1"/>
        <div className="wave wave2"/>
        <div className="wave wave3"/>
        </section>
        
    
  </Layout>

)


export default IndexPage
