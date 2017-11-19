import React, { Component } from 'react';
import Quote from './Quote.js';
import 'bootstrap/dist/css/bootstrap.css';

class Content extends Component {
    constructor() {
        super();
        this.state = {
          quotes: []
        };
    }
    render() {
        return  (
            <div>
                <Quote quotes={this.state.quotes} />
            </div>
        );
    }
}

export default Content;
