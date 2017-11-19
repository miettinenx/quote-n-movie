import React, { Component } from 'react';
import Movie from './Movie.js';
import QuotesJSON from './json/quotes.json';
import { Table } from 'react-bootstrap'

class Quote extends Component {
    constructor() {
        super();
        this.state = {
          quotes: []
        };
    }
    /**
     * Sorts quoteJSON to descending order
     * @param {Number} a
     * @param {Number} b
     */
    sortQuotes() {
        QuotesJSON.sort(function(a, b){
            return b.score - a.score;
        });
    }
    componentDidMount() {
         this.sortQuotes();
         this.setState({quotes: QuotesJSON});
    }
    render() {
        let quotes = this.state.quotes;
        return (
            <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>Score</th>
                <th>Quote</th>
                <th>Movie</th>
              </tr>
            </thead>
            {quotes.map(function(obj){
                return (
                    <tr key={obj.id}>
                        <td>{obj.score}</td>
                        <td>{obj.content}</td>
                        <td><Movie id={obj.movie}/></td>
                    </tr>
                );
            })}
        </Table>
        );
    }
}

export default Quote;
