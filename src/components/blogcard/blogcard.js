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
            <hr style={{backgroundColor:`gray`,}}/>
            <Row style={{
                padding:`1vh`,
                paddingLeft:`3vh`,
            }}>
                <h4 style={{
                    fontWeight:`300`,
                    fontSize:`1.5rem`,
                    color:`white`,
                    marginRight:`3vh`,
                }}>
                {title}
                </h4>

                <h2 style={{
                marginTop:`1vh`,
                fontWeight:`300`,
                textAlign:`left`,
                fontSize:`1rem`,
                color:`#A3D7E8`,
                }}>{date}</h2>
        </Row>
        <hr style={{backgroundColor:`gray`,}}/>
        </div>
        </a>
    )
}


export default BlogCard;