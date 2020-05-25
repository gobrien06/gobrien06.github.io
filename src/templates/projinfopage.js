import React from "react";
import Layout from "../components/layout";
import {Row, Col, Button} from 'reactstrap';
import SEO from "../components/seo";
import Particles from 'react-particles-js';
import ImageCarousel from '../components/imagecarousel';



const ProjInfoPage = ({pageContext}) => {
    const secondHeader = pageContext.year + ' · ' + pageContext.devtime;
    return(
        <Layout>
        <SEO title={pageContext.name} />
        <Row className="mobilescale" style={{
            padding:`15vh`,
            backgroundColor:`#FFF`,
            paddingBottom:0,
            paddingRight:`28vh`,
        }}>
        <Col lg="6">
        <h1 style={{
            fontWeight:`600`,
            fontSize:`5rem`,
            marginLeft: `1.55vh`, 
        }}>
            {pageContext.name}
        </h1>
        <h4 style={{
         marginLeft: `3vh`, 
         fontSize:`2rem`,
         fontWeight:`400`,
         color:`grey`,
        }}>
            {pageContext.hackathon}
        </h4>
        <h5 style={{
         marginLeft: `3vh`, 
  
         fontWeight:`400`,
         color:`grey`,
        }}>
        {secondHeader}
        </h5>

        <div>
        <a href={pageContext.link} style={{ display: `inline`,}}>
        <div style={{backgroundColor:`#F3CA3E`, marginLeft:`3vh`, padding:`0.5vh`, width:`15vh`, borderRadius:50, textAlign:`center`, marginTop:`1.5vh`, display:`inline-block`}}>

        <h5 style={{
        fontWeight:'400 ',
        display:`inline`,
     
         color:`white`,
        }}>
            Link
        </h5>
 
        </div>
        </a>
        <a
          href={pageContext.git}
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          <img src="/images/GitHub-Mark-64px.png" height="28vh" style={{ 
                marginTop:`2vh`,
                marginLeft:`2vh`,
         }} alt="githubicon"/>
        </a>
        </div>
        </Col>
        <Col lg="6">
        <h5 style={{
            color:`gray`,
            fontWeight:`300`,
        }}><br/><br/>
            {pageContext.description}
        </h5>
        </Col>
        </Row>
        <Row className="mobilescale" style={{margin:`auto`,padding:`10vh`, paddingTop:`13vh`,backgroundColor:"#FFF",   paddingRight:`28vh`,}}>
        <Col lg="6" style={{margin:`auto`, paddingBottom:`4.5vh`,}}>
        <ImageCarousel images={pageContext.image}  />
        </Col>
        <Col lg="6">
        <iframe width="100%" height="450vh !important" frameBorder="0"
        src={pageContext.demo}>
        </iframe>
        </Col>
        </Row>

        <Row className="mobilescale" style={{backgroundColor:`#FFF`,padding:`15vh`, paddingTop:0,  paddingRight:`28vh`,}}>
        <Col lg="6">
        <h2 style={{
            fontWeight:`600`,
        }}>
            Contributions
        </h2>

        <h4 style={{fontWeight:300}}>
            {pageContext.role}
            <br/>
            {pageContext.tech}
            <br/>
            
        </h4>
        </Col>
        <Col lg="6">
    

        <h5 style={{   color:`gray`,
            fontWeight:`300`,}}>
        {pageContext.duties}
        </h5>
        </Col>
        </Row>
        <Particles height="15vh" style={{position:`absolute`, maxWidth:'85%', float:`left`,}}
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
        </Layout>
    )
}

export default ProjInfoPage;

