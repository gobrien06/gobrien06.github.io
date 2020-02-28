import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ProjectCard from '../components/projectcard/projectcard';
import {Row,Col} from 'reactstrap';
import Particles from 'react-particles-js';
import 'bootstrap/dist/css/bootstrap.min.css'


const DesignsPage = () => (
  <Layout>
    <SEO title="Designs" />
    <Particles height="210vh" style={{position:`absolute`, maxWidth:'99%',}}
     params={{
      "particles": {
        "number": {
            "value": 130
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
      <h2 style={{
          color:`white`,
          fontWeight:`600`,
          textAlign:`left`,
          marginLeft:`1.45rem`,

      }}>Projects</h2>
    
  </Layout>

)

export default DesignsPage;
