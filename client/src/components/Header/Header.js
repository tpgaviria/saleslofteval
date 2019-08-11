import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container';

class Header extends Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h1>Hello, world!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
  </p>
                </Jumbotron>
            </Container>
        );
    }
}

export default Header;