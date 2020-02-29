import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ProjectCard from '../components/projectcard/projectcard';
import Particles from 'react-particles-js';
import 'bootstrap/dist/css/bootstrap.min.css'

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <div style={{
      paddingTop:`15vh`,
      paddingBottom:`5vh`,
      background:`white`,
      color:`black`,
    }}>
    <h1 style={{
          fontWeight:`500`,
          textAlign:`left`,
          marginLeft:`4.3rem`,
          fontSize:`3rem`,
      }}>What I've Done.</h1>
      <br/><br/>
      <ProjectCard  title="IVC Computer Science Club" link="https://www.ivccsc.com" summary="Front-end development. UI/UX design." url="/images/Screen Shot 2020-02-27 at 10.52.15 PM.png" tech="ReactJS, CSS3, HTML5"/>
      <ProjectCard  title="LifeCost" link="https://devpost.com/software/lifecost-2pidzr" summary="Front-end development. UI/UX design." url="/images/gallery.jpg" tech="ReactJS, CSS3, HTML5" hack="Made For HackUCI"/>
      </div>
      
      <Particles height="15vh" style={{position:`absolute`, maxWidth:'90%', float:`left`,}}
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

export default ProjectsPage
