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
        //this.setState({quotes:this.props.quotes});
    }
    /**
     * Sorts quoteJSON to descending order
     * @param {Number} a
     * @param {Number} b
     */
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
     /***
      * Fetch data from json api. proxyurl is quite..
      *
      */
     getData(request, x){
         var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
         var _this = this;
         fetch(proxyUrl + request)
         .then(
         function(response) {
             if (response.status !== 200) {
                 console.log('Looks like there was a problem. Status Code: ' +
                 response.status);
                 return;
             }
             var __this = _this;
             // Examine the text in the response
             response.json().then(function(data) {
                 if(x==='q'){
                     __this.setState({
                         quotes:data
                     });
                     __this.sortQuotes();
                 } else {

                 }
                 return data;
             });
         }).catch(function(err) {
             console.log('Fetch Error :-S', err);
         });
     }
     getQuoteData(){
         var request = 'https://mediasignal-quotes.herokuapp.com/quotes';
         var data = this.getData(request, 'q');
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
