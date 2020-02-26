import React from "react";
import {Card, CardBody, CardImg} from 'reactstrap';
import './contentcard.css';

const ContentCard = ({title, content, url})=>(
    <Card className="neucard">
    <h2 style={{
        fontWeight:`400`,
        marginBottom:`1.5rem`,
    }}>
    {title}
    </h2>
    <img top width="500vh" style={{
        margin:`auto`,
        marginBottom:`1.5rem`,
    }} src={url} alt="projectimg"/>
    <CardBody>
    {content}
    </CardBody>
    </Card>
)

ContentCard.defaultProps = {
    title: ``,
    content:``,
    url:``,
  }

export default ContentCard;