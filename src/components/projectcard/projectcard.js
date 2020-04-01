import React from "react";
import {Card, Row, Col} from 'reactstrap';
import {Link} from "gatsby";
import './projectcard.css';

const ProjectCard = ({title, summary, url, year, tech, hack, slug})=>{
    const link = '/projects/' + slug +'/';
    //console.log("link " + link);
    return(
        <Link className="contain" style={{
            marginTop:`10vh`,
        }}
        to={link}>

        <Card className="projcard">
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
                fontSize:`2rem`,
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


        </Col>
        <Col lg="8" style={{
            paddingTop:`3%`,
            paddingBottom:`3%`,
        }}>
            <img src={url} height="400vh" alt="projimg" style={{marginTop:`auto`,}}/>
        </Col>
        </Row>
        </Card>
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
  }

export default ProjectCard;