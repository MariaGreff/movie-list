import React, { Component } from 'react';
import MovieCard from './MovieCard';
require('dotenv').config()

class MoviesList extends Component {
  state = {
      moviesList: [],
      searchTerm: ''
  };

  search = event => {
      event.preventDefault();
      fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_SECRET_KEY}&s=${this.state.searchTerm}&plot=full`)
      .then(res => res.json())
      .then(data => {
          if (!data.Search) {
              this.setState({ moviesList: [] });
              return;
            }
            
            const moviesList = data.Search.map(movie => movie.imdbID);
            this.setState({
                moviesList
            });
        });
    };

  handleChange = event => {
      this.setState({
          searchTerm: event.target.value
        });
    };

  render() {
      const { moviesList } = this.state;
      return (
      <div className="wrapper">
          <form onSubmit={this.search}>
              <input
              placeholder="Search for a movie"
              onChange={this.handleChange}
              />
          </form>
          {moviesList.length > 0 ? (
              moviesList.map(movie => (
              <MovieCard movieID={movie} key={movie} />
              ))) : (
              <p>
                  Please search for a movie.
              </p>
              )}
      </div>
      );
    }
}

export default MoviesList;