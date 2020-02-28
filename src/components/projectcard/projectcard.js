import React from "react";
import {Card, CardBody, Button} from 'reactstrap';
import Particles from 'react-particles-js';
import './projectcard.css';

const ProjectCard = ({title, content, url, color})=>{
    return(
        <>
        <Card className="neucard" style={{
            float:`left`,
            width:`100%`,
        }}>
        <h2 style={{
            fontWeight:`500`,
            marginBottom:`1.5rem`,
            fontSize:`2.3rem`,
        }}>
        {title}
        </h2>
        ooga booga
        </Card>
        </>
    )
}

ProjectCard.defaultProps = {
    title: ``,
    content:``,
    url:``,
  }

export default ProjectCard;