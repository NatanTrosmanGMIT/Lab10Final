import React, { Component } from 'react';
import axios from 'axios';

// Basic edit class
class Edit extends Component {

    // Making sure to bind everything together
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeMovieName = this.onChangeMovieName.bind(this);
        this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
        this.onChangeMoviePoster = this.onChangeMoviePoster.bind(this);
        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }
    // this is what handles the submission and shows that it went through
    handleSubmit(event) {
        console.log("Name: " + this.state.Title +
            " Year: " + this.state.Year +
            "Poster: " + this.state.Poster);

        const NewMovie = {
            Title: this.state.Title,
            Year: this.state.Year,
            Poster: this.state.Poster,
            _id: this.state._id
        }

        // Displays the movie info to be edited
        axios.put('http://localhost:4000/api/movies/'+this.state._id, NewMovie)
        .then(res =>{
            console.log(res.data);

        })
        .catch();

        // axios.post('http://localhost:4000/api/movies', NewMovie)
        //     .then((response) => {
        //         console.log(response)
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     })

        event.preventDefault();
        this.setState({
            Title: '',
            Year: '',
            Poster: ''
        });
    }
    
    // Puts together the movie info
    componentDidMount() {
        console.log(this.props.match.params.id);
        axios.get('http://localhost:4000/api/movies/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    _id: response.data._id,
                    Title: response.data.Title,
                    Year: response.data.Year,
                    Poster: response.data.Poster
                })

            })
            .catch((error) => {
                console.log(error);
            })
    }

    // changes Title, Year and Poster respectively
    onChangeMovieName(event) {
        this.setState({
            Title: event.target.value
        })
    }
    onChangeMovieYear(event) {
        this.setState({
            Year: event.target.value
        })
    }
    onChangeMoviePoster(event) {
        this.setState({
            Poster: event.target.value
        })
    }

    // 3 seperate parts for Title, Year and Poster respectively and a submission button
    render() {
        return (
            <div>
                <h1>This is my Edit Component!</h1>
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label>Add Movie Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Title}
                            onChange={this.onChangeMovieName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Movie Year: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Year}
                            onChange={this.onChangeMovieYear}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Movie Poster: </label>
                        <textarea type="text"
                            className="form-control"
                            value={this.state.Poster}
                            onChange={this.onChangeMoviePoster}
                        />
                    </div>
                    <div>
                        <input type="submit" value="Edit Movie"
                            className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        );
    }
}
export default Edit;