import React, { Component } from 'react';
import Movies from './movies';
import axios from 'axios';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';

class Read extends Component {

    componentDidMount() {
        axios.get('https://jsonblob.com/api/jsonblob/894944504570986496')
            .then((response) => {
                this.setState({ mymovies: response.data.movies })
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