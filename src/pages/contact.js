import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ContactCard from '../components/contactcard/contactcard';
import Particles from 'react-particles-js';
import 'bootstrap/dist/css/bootstrap.min.css'


const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="contain" className="blog" style={{
      paddingTop:`10vh`,
      
    }}>
     <h1>Contact Me.</h1>
  </div>  
    <Particles height="50vh" style={{position:`absolute`, maxWidth:'99%', }}
     params={{
      "particles": {
        "number": {
            "value": 15
        },
        "size": {
            "value": 2
        },
    },
      }
      }
      />
     <ContactCard />
     <section style={{height:`10vh`,marginTop:`-15vh`, zIndex:`0`,}}>
        <div className="wave wave1"/>
        <div className="wave wave2"/>
        <div className="wave wave3"/>
        </section>
  </Layout>

)

export default ContactPage
