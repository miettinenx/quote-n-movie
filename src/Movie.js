import React, { Component } from 'react';

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
    * Connects the movie title by quotes movie id number.
    * Maps through JSON and sets state for title by  movieID.
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
                    __this.setState({
                        movies:data
                    });
                    console.log('moviesss', __this.state.movies);
                    __this.movie_n_Quote();
                return data;
            });
        }).catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
    }
    getMovieData(){
        var request = 'https://mediasignal-quotes.herokuapp.com/movies';
        var data = this.getData(request);
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
