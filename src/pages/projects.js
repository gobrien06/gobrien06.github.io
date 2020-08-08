import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ProjectCard from '../components/projectcard/projectcard';
import Particles from 'react-particles-js';
import JSONData from "../content/projdata.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./projects.css";

const Projects = () => {
  let items = [];

  const addProjects = () =>{
    //console.log(JSONData);
     items = JSONData.map((element,index) => 
      <ProjectCard title={element.name} summary={element.role} slug = {element.slug} url={element.image[0]} tech = {element.tech} year={element.year} hack={element.hackathon} index={index} winner={element.winner}/> )
      items.reverse();
      return items;
    }

  return(
      <Layout>
      <SEO title="Projects" />
      <div style={{
        paddingTop:`10vh`,
       paddingBottom:`10vh`, 
        color:`black`,
      }} class="blog">
      <h1>What I've Done.</h1>
        <br/>
        <div style={{marginTop:`0vh`}}>
        <div className="vertical"/>
        <Particles height="90%" style={{position:`absolute`, maxWidth:'99%', }}
     params={{
      "particles": {
        "number": {
            "value": 40
        },
        "size": {
            "value": 2
        },
    },
      }
      }
      />
        {addProjects()}
        </div>
        </div>
        
    </Layout>
  )
}


export default Projects
