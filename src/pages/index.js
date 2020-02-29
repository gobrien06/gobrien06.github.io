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
      height:`88vh`,
      background:`white`,
      padding:`10vh`,
      paddingTop:`20vh`,
      paddingBottom:`20vh`,
    
    }}>
      <Col lg='6'>
        <h1 style={{
          marginLeft: `1.55vh`, 
          fontWeight:`600`,
          fontSize:`5rem`,
          color:`black`,
        }}>
          Hey, my name's Gabby.
        </h1>
      </Col>
      <Col lg='6' className="mobilesupport">
        <h4 style={{
          color:`gray`,
          fontWeight:`300`,
        }}>
        I am a software engineer with a focus on frontend technologies in Irvine, California. I am experienced in <b>JS, React, Express, HTML5, CSS,</b> and <b>Gatsby</b>.
        <br/><br/>
       I'm also studying computer science as a sophomore at Irvine Valley College,
        planning to transfer Fall 2020 to University of California, Irvine.
        </h4>
        <Link
        to="/contact"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
        >
        <Button  style={{
          margin:`1.5rem`,
          background:`#F3CA3E`,
          marginLeft:`auto`,
          border:`#F3CA3E`,
        }} >
          <h5 
          style={{
            fontWeight:`400`,
          }}>
          Let's Talk
          </h5>
        </Button>
        </Link>
      </Col>
    </Row>
   
    <Particles height="139vh" style={{position:`absolute`, maxWidth:'99%',}}
     params={{
      "particles": {
        "number": {
            "value": 80
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
      <div style={{width:`100%`,height:`2vh`, position:`absolute`,textAlign:`center`,}}>
        <img src="/images/Screen Shot 2020-02-28 at 4.07.48 PM.png" height="160vh" alt="icon" style={{
          marginTop:`-10vh`,
          border:`1.05vh solid #2C2F33`,
          borderRadius:`50%`,
        }} />
      </div>
      <br/>
      <br/>
      
    <Row style={{paddingTop:`2rem`,}} >
    <ContentCard />
    <h3 style={{
      marginLeft: `15%`, 
      fontWeight:`500`,
      color:`white`,
      position:`absolute`,
      fontSize:`3rem`,
    }}>
      What I Do.
    </h3>
    </Row>
    
  </Layout>

)


export default IndexPage
