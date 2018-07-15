import React, { Component } from 'react';
import Spinner from '../spinner/spinner';

import Navigation from '../navigation/navigation';

import './home.css';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            showSpinner: 'show'
        };
    }

    componentDidMount() {
        this.setState({
            showSpinner: 'hide'
        });
    }

    renderSpinner() {
        return(
            <Spinner></Spinner>
        );
    }

    renderHeader() {
        return(<Navigation></Navigation>);
      }

    render() {
        return (
            <div className="home-card">
                 { this.renderHeader() }
                <div className={this.state.showSpinner}>
                    {this.renderSpinner()}
                </div>
                <div className="author">
                    <div className="author-fname">Vineet</div>
                    <div className="author-lname">Kumar</div>
                </div>

                <div className="intro">
                    <div className="intro-description">
                        Software | UI developer
                    </div>
                </div>
                <div className="decorator"></div>
            </div>
        );
    }
}

export default Home;