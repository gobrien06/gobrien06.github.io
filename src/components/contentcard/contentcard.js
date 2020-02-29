import React from "react";
import {Link} from 'gatsby';
import {Card, CardBody} from 'reactstrap';
import Particles from 'react-particles-js';
import './contentcard.css';

const ContentCard = ()=>(
            <Card className="neucard">
            <Particles  className="mobilesupport"params={{
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
                "value": "#F3CA3E"
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
	    }}}
		style={{
			zIndex:`10`,
		}}/>
            <CardBody style={{
                fontSize:`1.1rem`,
                fontWeight:`400`,
            }}>
            As a student I study data structures, algorithms, and mathematics in my computer science curriculum, utilizing C++ and Python.<br/><br/> 
            Outside of my coursework I create modern web platforms with JavaScript frameworks, such as React and Express. 
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


export default ContentCard;