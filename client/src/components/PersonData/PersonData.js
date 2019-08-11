import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

function PersonData(props) {
        return (
            <div>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey={props.eventKey}>
                        <p>{props.firstname} {props.lastname}</p>
                        <p>{props.title}</p>
                        <p>{props.email}</p>
                        </Accordion.Toggle>
                    <Accordion.Collapse eventKey={props.eventKey}>
                        <Card.Body>
                            <p>More data here</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </div>
        );
    }

export default PersonData;