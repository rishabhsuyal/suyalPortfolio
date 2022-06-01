import React from 'react';
import "./card.css";
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub
  } from '@fortawesome/free-brands-svg-icons'

function CardBlock({cardTitle,cardContent,cardUrl,CardImage}) {
    return (
        <Card className='card-container'>
            <Card.Img variant="top" src={CardImage} />
            <Card.Body>
                <h1>{cardTitle}</h1>
                <h2>
                    {cardContent}
                </h2>
            </Card.Body>
            <Card.Body>
                <a
                    href={cardUrl}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon className='card-icon'  icon={faGithub} color="#4d4d4e" />
                </a>
            </Card.Body>
        </Card>
    )
}

export default CardBlock