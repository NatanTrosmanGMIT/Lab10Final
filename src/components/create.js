import React, { Component } from 'react';
// Basic create class
class Create extends Component {

    // Making sure to bind everything together
    constructor() {
        super();
        this.handelSubmit = this.handelSubmit.bind(this);
        this.onChangeMovieName = this.onChangeMovieName.bind(this);
        this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
        this.onChangeMoviePoster = this.onChangeMoviePoster.bind(this);
        this.state = {
            Tiltle: '',
            Year: '',
            Poster: ''
        }
    }
    // this is what handles the submission and shows that it went through
    handelSubmit(event) {
        event.preventDefault();
        console.log("button clicked! Name: " + this.state.Tiltle +
                    " Year: " + this.state.Year +
                    " Poster: " + this.state.Poster);
    }
    // changes Title, Year and Poster respectively
    onChangeMovieName(event) {
        this.setState({
            Tiltle: event.target.value
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
                <h1>This is my Create Component.</h1>

                <form onSubmit={this.handelSubmit}>

                    <div className="form-group">
                        <label>Add Movie Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Title}
                            onChange={this.onChangeMovieName}
                        />

                        <label>Add Movie Year: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Year}
                            onChange={this.onChangeMovieYear}
                        />

                        <label>Add Movie Poster URL: </label>
                        <textarea type="text"
                            className="form-control"
                            value={this.state.Poster}
                            onChange={this.onChangeMoviePoster}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-primary"></input>
                    </div>
                </form>

            </div>
        );
    }
}
export default Create;