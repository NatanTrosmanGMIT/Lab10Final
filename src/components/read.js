import React, { Component } from 'react';
import Movies from './movies';
import axios from 'axios';

class Read extends Component {

    // get info from host 4000
    componentDidMount() {
        axios.get('http://localhost:4000/api/movies')
            .then((response) => {
                this.setState({ mymovies: response.data })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    // this is all the info we'll be displaying
    state = {
        mymovies: []
    };
    // this is where we display all the info thats read
    render() {
        return (
            <div>
                <h1>This is my Read Component.</h1>
                <Movies movies={this.state.mymovies}></Movies>
            </div>
        );
    }
}
export default Read;