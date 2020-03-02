import React from "react";
import {Link} from 'gatsby';
import {Card, CardBody} from 'reactstrap';
import Particles from 'react-particles-js';
import './contentcard.css';

const ContentCard = ()=>(
            <Card className="neucard">
			<Particles 
			height="50vh"
			style={{
				zIndex:`10`,
			}}
			params={{
			"particles": {
				"number": {
					"value": 10,
					"density": {
						"enable": true,
						"value_area": 500
					}
				},
				"line_linked": {
					"enable": false
				},
				"move": {
					"speed": 4.5,
					"out_mode": "out"
				},
				"shape": {
					"type": [
						"images",
					],
					"images": [
						{
							"src": "/images/800px-React-icon.svg.png",
							"height": 20,
							"width": 30
						},
						{
							"src": "/images/5847f5bdcef1014c0b5e489c.png",
							"height": 20,
							"width": 23
						},
						{
							"src": "/images/css3-logo-png-transparent.png",
							"height": 20,
							"width": 23
						},
						{
							"src":"/images/node-js-512.png",
							"height": 19,
							"width": 19
						}
					]
				},
				"size": {
					"value": 50,
					"random": false,
				}
			},
			"retina_detect": false
		}}/>
            <CardBody style={{
				margin:`0`,
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

/*
	"color":{
					"value":"#F3CA3E",
				},
				*/