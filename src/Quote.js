import React, { Component } from 'react';
import Movie from './Movie.js';
import { Table } from 'react-bootstrap'

var data_request = require('./util.js').get_data;

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
     // sorting quotes
     sortQuotes() {
         var sortQuotesArr = this.state.quotes;
         sortQuotesArr.sort(function(a, b){
             return b.score - a.score;
         });
         this.setState({
             quotes:sortQuotesArr
         });
     }
     componentWillMount(){
         this.getQuoteData();
     }
     // when data is fetched then set the state for quotes and sort
     gotData(data){
         this.setState({
             quotes:data
         });
         this.sortQuotes();
     }
     // fetch data from util.js
     getQuoteData(){
         var request = 'https://mediasignal-quotes.herokuapp.com/quotes';
         data_request(request, this);
     }
    render() {
        var quotes = this.state.quotes;
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
