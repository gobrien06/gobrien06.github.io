import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import ProjectCard from '../../components/projectcard/projectcard';
import Particles from 'react-particles-js';
import './projectpage.css';

const ProjectPage = ({projName, projDate, projSummary}) =>{
    return(
        <Layout>
            <SEO title = {projName}/>
            

        </Layout>
    )
}  
 
export default ProjectPage;