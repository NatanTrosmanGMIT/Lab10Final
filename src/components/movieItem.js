import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

class MovieItem extends Component {

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
                                <br/>
                                {this.props.movie.Year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={"/edit/"+this.props.movie._id} className="btn btn-primary">Edit</Link>
                    <br/>
                </Card>
            </div>
        );
    }
}
export default MovieItem;