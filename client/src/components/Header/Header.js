import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container';

class Header extends Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h1>SalesLoft People Data</h1>
                    <p>Using SalesLoft's API, we have provided data about all the people on your team.<br/>
                        For detailed email address character stats, click a person's row.
                    </p>
                </Jumbotron>
            </Container>
        );
    }
}

export default Header;