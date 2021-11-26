import React, {Component} from 'react';
import MovieItem from './movieItem';

class Movies extends Component {
// this gets passed to read.js for displaying
    render(){
        return this.props.movies.map( (movie)=>{
            return <MovieItem movie={movie}ReloadData={this.props.ReloadData}></MovieItem>
        })
    }
}
export default Movies;