import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {Link} from 'gatsby';
import {Row, Col, Button} from 'reactstrap';
import ContentCard from '../components/contentcard/contentcard';
import Particles from 'react-particles-js';
import 'bootstrap/dist/css/bootstrap.min.css'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Row style={{
      padding:`10vh`,
      paddingTop:`20vh`,
      paddingBottom:`30vh`,
    }}>
      <Particles height="60%" style={{position:`absolute`,}}
     params={{
      "particles": {
        "number": {
            "value": 15
        },
        "size": {
            "value": 2
        },
    },
      "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse",
            }
        }
        }
      }
      }
      />
        <h1 style={{
          fontWeight:`600`,
          fontSize:`6rem`,
          marginTop:`10vh`,
          color:`white`,
          marginLeft:`10vh`,
        }}>
          Gabrielle O'Brien
        </h1>
        <h4 style={{
          color:`white`,
          fontWeight:`200`,
          fontSize:`2rem`,
          marginLeft:`12vh`,
        }}>
       Software Engineer. Designer. Student.
        </h4>
        <h4 style={{
          color:`#8BDDBD`,
          fontWeight:`300`,
          fontSize:`1.5rem`,
          marginLeft:`12vh`,
        }}>
      JavaScript, ReactJS, React Native, NodeJS, ExpressJS, PostgreSQL, HTML5, CSS3, Git, Gatsby
        </h4>
      
    </Row>

  
    
  </Layout>

)


export default IndexPage
