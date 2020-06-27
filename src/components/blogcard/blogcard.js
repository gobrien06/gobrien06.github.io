import React from "react";
import {Col, Row} from 'reactstrap';
import './blogcard.css';

const BlogCard = ({title, image, date, tags, url})=>{
    const trimParams = () =>{
       date = date.split(" ");
        date = date[0];  
        date = date.split('-');
        date = date[1] + '/' + date[2] + '/' + date[0]
    }

    trimParams();


    return(
        <a href={url}>
        <div className="blogcard">
            <Col lg="12">
            <Row style={{ height:`40vh`,overflow:`hidden`, background: `url(${image})`, marginBottom:`3vh`,}}/>

            <Row style={{
                padding:`5vh`,
                paddingTop:`0`,
                paddingBottom:`2vh`,
            }}>
                <h4 style={{
                    fontWeight:`500`,
                    margin:`0`,
                    fontSize:`1.5rem`,
                    color:`white`,
                }}>
                {title}
                </h4>

                <h2 style={{
                marginTop:`1.5vh`,
                fontWeight:`100`,
                textAlign:`left`,
                fontSize:`1rem`,
                color:`#A3D7E8`,
                }}>{date}</h2>
        </Row>
        </Col>
        </div>
        </a>
    )
}


export default BlogCard;