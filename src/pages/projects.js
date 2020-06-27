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
        color:`black`,
      }} class="blog">
      <h1>What I've Done.</h1>
      <h1>What I've Done.</h1>
        <br/>
        <div style={{marginTop:`13vh`}}>
        {addProjects()}
        </div>
        </div>
    </Layout>
  )
}


export default Projects
