import React, { Component } from 'react';
import DataContainer from '../components/DataContainer/DataContainer';

class HomePage extends Component {
    state = {

    }

    render() {
        return (
            <div>
                <h1>Hi, main page</h1>
                <DataContainer />
            </div>
        );
    }
}

export default HomePage;