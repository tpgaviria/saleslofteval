import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PersonData(props) {
    return (
        <div>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey={props.eventKey}>
             
                    <Row>
                        <Col>{props.firstname} {props.lastname}</Col>
                        <Col>{props.title}</Col>
                        <Col>{props.email}</Col>
                    </Row>
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