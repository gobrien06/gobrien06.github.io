import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ContactCard from '../components/contactcard/contactcard';
import Particles from 'react-particles-js';
import 'bootstrap/dist/css/bootstrap.min.css'


const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="contain" style={{
      paddingTop:`20vh`,
    }}>
     <h2 style={{
      fontWeight:`500`,
      textAlign:`left`,
      marginLeft:`4.3rem`,
      fontSize:`3rem`,
      color:`white`,
      marginBottom:`2rem`,
      }}>Contact Me.</h2>
  </div>  
    <Particles height="50vh" style={{position:`absolute`, maxWidth:'99%', }}
     params={{
      "particles": {
        "number": {
            "value": 30
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
     <ContactCard />
  </Layout>

)

export default ContactPage
