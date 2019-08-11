import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import CharacterCount from '../CharacterCount/CharacterCount';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class PersonData extends React.Component {

    getCharacterCount(string) {
        let freq = {};
        for (let i = 0; i < string.length; i++) {
            let character = string.charAt(i);
            if (freq[character]) {
                freq[character]++;
            } else {
                freq[character] = 1;
            }
        }
        return freq;
    }

    render() {
        return (
            <div>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey={this.props.eventKey}>

                        <Row>
                            <Col xs={4}>{this.props.firstname} {this.props.lastname}</Col>
                            <Col xs={4}>{this.props.title}</Col>
                            <Col xs={4}>{this.props.email}</Col>
                        </Row>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={this.props.eventKey}>
                        <Card.Body>
                            <CharacterCount characters={this.getCharacterCount(this.props.email)} />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </div>
        );
    }
}

export default PersonData;