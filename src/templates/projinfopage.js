import React from "react";
import Layout from "../components/layout";
import {Row, Col, Button} from 'reactstrap';
import SEO from "../components/seo";



const ProjInfoPage = ({pageContext}) => {
    const imgUrl=pageContext.image;
    console.log(imgUrl);
    return(
        <Layout>
        <SEO title={pageContext.name} />
        <Row style={{
            paddingTop:`15vh`,
            backgroundColor:`#FFF`,
            paddingBottom:`10vh`,
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
        </Col>
        <Col lg="6">
        <h4 style={{
            color:`gray`,
            fontWeight:`300`,
        }}>
            {pageContext.description}
        </h4>
        </Col>
        </Row>
        <Row style={{margin:`auto`,padding:`10vh`}}>
        <Col lg="6" style={{margin:`auto`,}}>
        <img src={imgUrl} height="450vh" style={{borderRadius:0,}}/>
        </Col>
        <Col lg="6">
        <iframe width="100%" height="450vh" frameBorder="0"
        src={pageContext.demo}>
        </iframe>
        </Col>
        </Row>
        </Layout>
    )
}

export default ProjInfoPage;

