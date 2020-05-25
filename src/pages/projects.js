import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ProjectCard from '../components/projectcard/projectcard';
import Particles from 'react-particles-js';
import JSONData from "../content/projdata.json"
import 'bootstrap/dist/css/bootstrap.min.css'


const Projects = () => {
  let items = [];

  const addProjects = () =>{
    //console.log(JSONData);
     items = JSONData.map((element) => 
      <ProjectCard title={element.name} summary={element.role} slug = {element.slug} url={element.image[0]} tech = {element.tech} year={element.year} hack={element.hackathon} /> )
      items.reverse();
      return items;
    }

  return(
      <Layout>
      <SEO title="Projects" />
      <div style={{
        paddingTop:`10vh`,
        paddingBottom:`5vh`,
        background:`white`,
        color:`black`,
      }}>
      <h1 style={{
            fontWeight:`500`,
            textAlign:`left`,
            marginLeft:`4.3rem`,
            fontSize:`3rem`,
        }}>What I've Done.<hr width="5%"/></h1>
        <br/>
        {addProjects()}
        </div>
        
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


export default Projects
