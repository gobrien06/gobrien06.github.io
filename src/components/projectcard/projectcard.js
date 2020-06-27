import React from "react";
import {Row, Col} from 'reactstrap';
import {Link} from "gatsby";
import './projectcard.css';

//add winners star here
const ProjectCard = ({title, summary, url, year, tech, hack, slug, winner, index})=>{
    const link = '/projects/' + slug +'/';
    //console.log("link " + link);

    return(
        <Link className="contain"
        to={link}>

        <div className="projcard" style={{marginTop:`-3h`, marginLeft:`auto`,}}>
        {index%2 == 0 ? 
         <Row>
         <Col lg="7" className = "textproj" style={{
                 padding:`10vh`,
                 paddingRight:`15vh`,
                 paddingBottom:`5vh`,
                 zIndex:`0`,
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
             color:`#8BDDBD`,
             }}>{tech}</h3>
 
             <h3 style={{
             fontWeight:`500`,
             textAlign:`left`,
             fontSize:`0.9rem`,
             marginTop:`5vh`,
             color:`#A3D7E8`,
             }}>{hack}</h3>
 
             {winner 
             ?
             <h3 style = {{
             fontWeight:`500`,
             textAlign:`left`,
             fontSize:`0.9rem`,
             marginTop:`5vh`,
             color:`white`,}}>
             ★ First Place
             </h3> : null }
             <img height="45%" src="/images/nodetailpalmside.png" style={{position:`absolute`, right:`0`, top:`0`}} alt="palmleaves"/>
         </Col>
         <Col lg="5" style={{
             paddingTop:`3%`,
             paddingBottom:`3%`,
             zIndex:`100`,
         }}>
             <img src={url}  alt="projimg" style={{marginTop:`auto`, maxHeight:`70vh` ,marginLeft:`-9vh`,}}/>
         </Col>
         </Row>
        :
        <Row>
        <Col lg="5" style={{
            paddingTop:`3%`,
            paddingBottom:`3%`,
            zIndex:`100`,
        }}>
            <img src={url}  alt="projimg" style={{marginTop:`auto`, zIndex:`100`, maxHeight:`70vh`, marginLeft:`25vh`,}}/>
        </Col>
        <Col lg="7" className = "textproj" style={{
                padding:`10vh`,
                paddingLeft:`30vh`,
                paddingBottom:`5vh`,
                zIndex:`0`
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
            color:`#8BDDBD`,
            }}>{tech}</h3>

            <h3 style={{
            fontWeight:`500`,
            textAlign:`left`,
            fontSize:`0.9rem`,
            marginTop:`5vh`,
            color:`#A3D7E8`,
            }}>{hack}</h3>

            {winner 
            ?
            <h3 style = {{
            fontWeight:`500`,
            textAlign:`left`,
            fontSize:`0.9rem`,
            marginTop:`5vh`,
            color:`white`,}}>
            ★ First Place
            </h3> : null }
            <img height="45%" src="/images/nodetailpalmside.png" style={{position:`absolute`, left:`0`, top:`0`, transform:`scaleX(-1)`, zIndex:`-1`}} alt="palmleaves"/>
        </Col>
        </Row>
        }
       
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