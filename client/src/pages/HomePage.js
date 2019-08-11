import React, { Component } from 'react';
import DataContainer from '../components/DataContainer/DataContainer';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';


class HomePage extends Component {

    render() {
        return (
            <div>
                <Header />
                <DataContainer />
                <Footer />
            </div>
        );
    }
}

export default HomePage;