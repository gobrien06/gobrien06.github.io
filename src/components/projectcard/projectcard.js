import React from "react";
import {Row, Col} from 'reactstrap';
import {Link} from "gatsby";
import './projectcard.css';

//add winners star here
const ProjectCard = ({title, summary, url, year, tech, hack, slug, winner})=>{
    const link = '/projects/' + slug +'/';
    //console.log("link " + link);
    return(
        <Link className="contain"
        to={link}>

        <div className="projcard" style={{marginTop:`-3h`, marginLeft:`auto`,}}>
        <Row>
        <Col lg="4" style={{
                paddingTop:`10vh`,
                paddingLeft:`5vh`,
        }}>

            <h3 style={{
            fontWeight:`400`,
            textAlign:`left`,
            fontSize:`1rem`,
            color:`white`,
            }}>{year}</h3>

            <h2 style={{
                fontWeight:`600`,
                margin:`0`,
                marginLeft:`3`,
                fontSize:`2.5rem`,
                color:`white`,
            }}>
            {title}
            </h2>
            <br/><br/>
            <h3 style={{
            fontWeight:`500`,
            textAlign:`left`,
            fontSize:`1.3rem`,
            color:`white`,
            }}>{summary}</h3>

        <h3 style={{
            fontWeight:`400`,
            textAlign:`left`,
            fontSize:`0.9rem`,
            color:`white`,
            }}>{tech}</h3>

            <h3 style={{
            fontWeight:`500`,
            textAlign:`left`,
            fontSize:`0.9rem`,
            marginTop:`5vh`,
            color:`white`,
            }}>{hack}</h3>

            {winner 
            ?
            <h3 style = {{
            fontWeight:`500`,
            textAlign:`left`,
            fontSize:`0.9rem`,
            marginTop:`5vh`,
            color:`white`,}}>
            ★ Winner!
            </h3> : null }

        </Col>
        <Col lg="8" style={{
            paddingTop:`3%`,
            paddingBottom:`3%`,
        }}>
            <img src={url} height="400vh" alt="projimg" style={{marginTop:`auto`,}}/>
        </Col>
        </Row>
        </div>
        </Link>
    )
}

ProjectCard.defaultProps = {
    title: ``,
    summary:``,
    url:``,
    year:`Winter 2020`,
    tech:``,
    hack:``,
    link:``,
    winner:``,
  }

export default ProjectCard;