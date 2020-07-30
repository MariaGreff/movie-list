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

    //   fetch(
    //           `https://www.omdbapi.com/?apikey=${your_API}&s=${
    //               this.state.searchTerm
    //           }&plot=full`
    //       )
        //   .then(res => res.json())
        //   .then(data => {
        //       if (!data.Search) {
        //           this.setState({ moviesList: [] });
        //           return;
        //       }

            //   const moviesList = data.Search.map(movie => movie.imdbID);
            //   console.log(moviesList);
            //   this.setState({
            //       moviesList
            //   });
            // });
          
  };

  handleChange = event => {
      this.setState({
          searchTerm: event.target.value
      });
  };

  render() {
      const { moviesList } = this.state;
      console.log(moviesList);

      return (
          <div>
              <MovieCard />
              {/* <form onSubmit={this.search}>
                  <input
                      placeholder="Search for a movie"
                      onChange={this.handleChange}
                  />
              </form>
              {moviesList.length > 0 ? (
                  moviesList.map(movie => (
                      <MovieCard movieID={movie} key={movie} />
                  ))
              ) : (
                  <p>
                      Couldn't find any movie. Please search again using
                      another search criteria.
                  </p>
              )} */}
          </div>
      );
  }
}

export default MoviesList;