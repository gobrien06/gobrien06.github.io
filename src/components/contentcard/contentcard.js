import React from "react";
import {Link} from 'gatsby';
import {Card, CardBody, Button} from 'reactstrap';
import Particles from 'react-particles-js';
import './contentcard.css';

const ContentCard = ({title, content, type, url})=>{
    if(type=='content'){
        return(
            <Card className="neucard">
            <h2 style={{
                fontWeight:`500`,
                marginBottom:`1.5rem`,
                fontSize:`2.3rem`,
            }}>
            {title}
            </h2>
            <img top width="550vh" style={{
                margin:`auto`,
                marginBottom:`1.5rem`,
            }} src={url} alt="projectimg"/>
            <CardBody>
            {content}
            </CardBody>
            </Card>
        )
    }
    else if(type=='project'){
        return(
            <Card className="neucard">
            <h2 style={{
                fontWeight:`500`,
                marginBottom:`1.5rem`,
                fontSize:`2.3rem`,
            }}>
            {title}
            </h2>
            <img top width="550vh" style={{
                margin:`auto`,
                marginBottom:`1.5rem`,
            }} src={url} alt="projectimg"/>
            <CardBody>
            </CardBody>
            <Button />
            </Card>
        )
    }
    else{
        return(
            <Card className="neucard">
            <h2 style={{
                fontWeight:`500`,
                marginBottom:`1.5rem`,
                fontSize:`2.3rem`,
            }}>
            {title}
            </h2>
            <Particles  params={{
	    "fps_limit": 30,
	    "particles": {
	        "number": {
	            "value": 350,
	            "density": {
	                "enable": false
	            }
	        },
	        "line_linked": {
	            "enable": true,
	            "distance": 25,
	            "opacity": 0.4,
	        },
	        "move": {
	            "speed": 1
	        },
	        "opacity": {
	            "anim": {
	                "enable": true,
	                "opacity_min": 0.05,
	                "speed": 1,
	                "sync": false
	            },
	            "value": 0.4
            },
            "color": {
                "value": "#5B53B9"
              },
	    },
	    "polygon": {
	        "enable": true,
	        "scale": 0.7,
	        "type": "inline",
	        "move": {
	            "radius": 10
	        },
	        "url": "/images/deer.svg",
	        "inline": {
	            "arrangement": "equidistant"
	        },
	     
	    },
	    "retina_detect": false,
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "size": 6,
	                "distance": 40
	            }
	        }
	    }}}/>
            <CardBody>
            As a student I study data structures, algorithms, and mathematics in my computer science curriculum, utilizing C++ and Python.<br/><br/> 
            Outside of my coursework, I create modern web platforms with JavaScript frameworks, such as React and Express. 
            These projects allow me to not only gain experience working with new technologies, but also have fun creating web applications I love.
             If you have a chance, <Link to="/projects" style= {{
                 color: `white`,
                textDecoration: `none`,
                fontWeight:`600`,
                }}> check them out!</Link> <br/><br/>
            I'm always looking for opportunities to learn, so 
            <Link to="/contact" style= {{
                 color: `white`,
                textDecoration: `none`,
                fontWeight:`600`,
            }}> please contact me</Link> if you'd like to collaborate.
            </CardBody>
            </Card> 
        )
    }
}

ContentCard.defaultProps = {
    title: ``,
    content:``,
    url:``,
  }

export default ContentCard;