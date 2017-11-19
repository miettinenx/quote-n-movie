import React, { Component } from 'react';
import Movie from './Movie.js';
//import QuotesJSON from './json/quotes.json';
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
        var sortQuotesArr = this.state.quotes;
        console.log(sortQuotesArr);
        sortQuotesArr.sort(function(a, b){
            return b.score - a.score;
        });
    //    console.log(QuotesJSON);
        this.setState({
            quotes:sortQuotesArr
        });
    }
    componentDidMount() {
        this.getQuoteData();
        ////////////////
         //this.setState({quotes: QuotesJSON});
    }


    getQuoteData(){
        var request = 'https://mediasignal-quotes.herokuapp.com/quotes';
        ////////////////
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        var that = this;
        fetch(proxyUrl + request)
        .then(
        function(response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                response.status);
                return;
            }
            // Examine the text in the response
            response.json().then(function(data) {
                //console.log('daa', data);
                that.setState({quotes: data});
                that.sortQuotes();
                //console.log('daa', that.state.quotes);
            });
        }).catch(function(err) {
            console.log('Fetch Error :-S', err);
        });

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
