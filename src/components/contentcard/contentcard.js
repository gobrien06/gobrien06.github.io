import React from "react";
import {Card, CardBody, CardImg} from 'reactstrap';
import './contentcard.css';

const ContentCard = ({title, content, url})=>(
    <Card className="neucard">
    <h3>
    {title}
    </h3>
    <CardImg top width="50%" src={url} alt="projectimg"/>
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