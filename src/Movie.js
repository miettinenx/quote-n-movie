import React, { Component } from 'react';
import moviesJSON from './json/movies.json';

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
          title:''
        };
    }
    /**
     * Connects movie title by quotes movie id number.
     * Maps throu JSON and set state for title by  movieID.
     * If movieID and obj.id are the same, then obj.title is the movie name.
     * Set state to title.
     * @param {Number} movieID
     * @param {Object} moviesJSON
     * @param {Object} obj
     */
    movie_n_Quote(movieID){
        var that = this;
        moviesJSON.map(function(obj){
            if(movieID===obj.id){
                that.setState({
                    title: obj.title
                });
            }
        });
    }
    /**
     * Sets state value for id by prop.id which is movie id.
     * Calls for movie_n_Quote function to set the title name right.
     * @param {Number} props.id reference to movie id from Content module
     * @param {Number} state.id
     * @param {Number} movieID variable name for props.id
     */
    componentDidMount() {
        let movieID = this.props.id;
        this.setState({
            id:movieID
        });
        this.movie_n_Quote(movieID);
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
