import React, { Component } from 'react';
import Quote from './Quote.js';
import 'bootstrap/dist/css/bootstrap.css';

class Content extends Component {
    render() {
        return  (
            <div>
                Famous Samuel L. Jacksons quotes in movies:
                <Quote />
            </div>
        );
    }
}

export default Content;
