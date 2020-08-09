import React from "react";
import {Row, Col} from 'reactstrap';
import {Link} from "gatsby";
import './projectcard.css';
import AniLink from "gatsby-plugin-transition-link/AniLink";


//add winners star here
const ProjectCard = ({title, summary, url, year, tech, hack, slug, winner, index})=>{
    const link = '/projects/' + slug +'/';
    //console.log("link " + link);
   
    return(
        <AniLink className="contain"
        swipe 
        direction={"left"}
        duration={1.3}
        to={link}>

        <div className="projcard" style={{marginTop:`-3h`, marginLeft:`auto`,}}>
        {index%2 == 0 ? 
         <Row>
         <Col lg="7" className = "textproj" style={{
                paddingLeft:`5vh`,
                paddingRight:`5vh`,
                zIndex:`0`,
         }}>
            <div className="text">
             <h3 style={{
             fontWeight:`400`,
             textAlign:`left`,
             fontSize:`1em`,
             color:`white`,
             }}>{year}</h3>
 
             <h2 style={{
                 fontWeight:`600`,
                 margin:`0`,
                 marginLeft:`3`,
                 fontSize:`2.5em`,
                 color:`white`,
             }}>
             {title}
             </h2>
             <br/><br/>
             <h3 style={{
             fontWeight:`500`,
             textAlign:`left`,
             fontSize:`1.3em`,
             color:`white`,
             }}>{summary}</h3>
 
         <h3 style={{
             fontWeight:`400`,
             textAlign:`left`,
             fontSize:`0.9em`,
             color:`#8BDDBD`,
             }}>{tech}</h3>
 
             <h3 style={{
             fontWeight:`500`,
             textAlign:`left`,
             fontSize:`0.9em`,
             marginTop:`5vh`,
             color:`#A3D7E8`,
             }}>{hack}</h3>
 
             {winner 
             ?
             <h3 style = {{
             fontWeight:`500`,
             textAlign:`left`,
             fontSize:`0.9em`,
             marginTop:`5vh`,
             color:`white`,}}>
             ★ First Place
             </h3> 
             : null }
             </div>
         </Col>
         <Col lg="5" className="mobiletree" style={{
             paddingTop:`3%`,
             paddingBottom:`3%`,
             zIndex:`100`,
         }}>
             <img src={url}  alt="projimg" style={{marginTop:`auto`, maxHeight:`52vh` ,marginLeft:`-5vh`, position:`absolute`}}/>
         </Col>
         </Row>
        :
        <Row>
        <Col lg="5" className="mobiletree" 
            style={{
                paddingTop:`3%`,
                paddingBottom:`3%`,
                zIndex:`100`,
                alignContent:`right`,
            }}>
            <img src={url}  alt="projimg" style={{marginTop:`auto`, zIndex:`100`, maxHeight:`52vh`, position:`absolute`, right:`-5vh`,}}/>
        </Col>
        <Col lg="7" className = "textproj" style={{
                paddingLeft:`10vh`,
                paddingRight:`5vh`,
                zIndex:`0`
        }}>
         <div className="text">
            <h3 style={{
            fontWeight:`400`,
            textAlign:`left`,
            fontSize:`1em`,
            color:`white`,
            }}>{year}</h3>

            <h2 style={{
                fontWeight:`600`,
                margin:`0`,
                marginLeft:`3`,
                fontSize:`3em`,
                color:`white`,
            }}>
            {title}
            </h2>
            <br/><br/>
            <h3 style={{
            fontWeight:`500`,
            textAlign:`left`,
            fontSize:`1.3em`,
            color:`white`,
            }}>{summary}</h3>

        <h3 style={{
            fontWeight:`400`,
            textAlign:`left`,
            fontSize:`0.9em`,
            color:`#8BDDBD`,
            }}>{tech}</h3>

            <h3 style={{
            fontWeight:`500`,
            textAlign:`left`,
            fontSize:`0.9em`,
            marginTop:`5vh`,
            color:`#A3D7E8`,
            }}>{hack}</h3>

            {winner 
            ?
            <h3 style = {{
            fontWeight:`500`,
            textAlign:`left`,
            fontSize:`0.9em`,
            marginTop:`5vh`,
            color:`white`,}}>
            ★ First Place
            </h3> : null }
            </div>
           
        </Col>
        </Row>
        }
       
        </div>
        </AniLink>
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