import React, { Component } from 'react';
var data_request = require('./util.js').get_data;

class Movie extends Component {
    /**
     * Sets states to movie id and title.
     * @param {number} id
     * @param {title} String
     */
    constructor() {
        super();
        this.state = {
          id: '',
          title:'',
          movies:[]
        };

    }
    /**
    * Connects the movie title and the quote by movie id.
    * Maps through JSON and sets state for title.
    * If movieID and obj.id are the same, then obj.title is the movie name.
    * @param {Number} movieID
    * @param {Object} moviesJSON
    * @param {Object} obj
    */
    movie_n_Quote(){
        var moviesJSON = this.state.movies;
        var movieID = this.state.id;
        var that = this;
        console.log('aa', moviesJSON);
        moviesJSON.map(function(obj){
            if(movieID===obj.id){
                that.setState({
                    title: obj.title
                });
            }
        });
    }
    gotData(data){
        this.setState({
            movies:data
        });
        this.movie_n_Quote();
    }
    getMovieData(){

        var request = 'https://mediasignal-quotes.herokuapp.com/movies';
        var data = data_request(request, this);
        //var data = this.getData(request);
    }

    /**
     * Sets state value for id by prop.id which is movie id.
     * Calls for the movie_n_Quote function to set the title name right.
     * @param {Number} props.id reference to movie id from Content module
     * @param {Number} state.id
     * @param {Number} movieID variable name for props.id
     */
     componentWillMount(){
         this.getMovieData();
         let movieID = this.props.id;
         this.setState({
             id:movieID
         });
     }
    render() {
        return (
            <div>
            {this.state.title}
            </div>
        );
    }
}

export default Movie;
