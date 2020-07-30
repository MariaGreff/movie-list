import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MyList extends Component {
  state = {
      moviesList: [],
      searchTerm: ''
  };

  async componentDidMount() {
    await fetch('/api/movies/')
      .then(res => res.json())
      .then(data => {
          this.setState({ moviesList: data })
          console.log(this.state);
      });
    }


  render() {
      // const { moviesList } = this.state;
      // console.log(moviesList);
      console.log(this.state.moviesList);
      return (
          <div className="wrapper">
              {this.state.moviesList.length > 0 ? (
                  this.state.moviesList.map(movie => (
                      <MovieCard movieID={movie.imdbID} key={movie.imdbID} />
                  ))
              ) : (
                  <p>
                      Your Movie List is now empty, add a Movie to begin!
                  </p> )}
          </div>
      );
  }
}

export default MyList;