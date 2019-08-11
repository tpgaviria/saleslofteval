import React, { Component } from 'react';
import DataContainer from '../components/DataContainer/DataContainer';
import Header from '../components/Header/Header';


class HomePage extends Component {
    state = {

    }

    render() {
        return (
            <div>
                <Header />
                <DataContainer />
            </div>
        );
    }
}

export default HomePage;