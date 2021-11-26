import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class MovieItem extends Component {

    constructor() {
        super();

        this.DeleteMovie = this.DeleteMovie.bind(this);
    }
    
    // refreshes the page and deletes the chosen movie
    DeleteMovie(e) {
        e.preventDefault();
        console.log("Delete: " + this.props.movie._id)

        axios.delete("http://localhost:4000/api/movies/" + this.props.movie._id)
        .then(()=>{
            this.props.ReloadData();
        })
        .catch();
    }

    // this lays out everything correctly so we can display it
    render() {
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.movie.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.Poster} width="216" height="320"></img>
                            <footer className="blockquote-footer">
                                <br />
                                {this.props.movie.Year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={"/edit/" + this.props.movie._id} className="btn btn-primary">Edit</Link>
                    <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
                </Card>
            </div>
        );
    }
}
export default MovieItem;