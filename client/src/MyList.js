import React, { Component } from 'react';
import MovieCard from './MovieCard';
import bodyParser from 'body-parser';

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

filerByGenre = (event) => {
    const genre = event.target.innerText;
    console.log(this.state.moviesList);
    this.setState( prevState => {
        return {
            moviesList: prevState.moviesList.filter(movie => movie.Genre.split(', ').includes(genre))
        };
    });
    console.log(this.state.moviesList);
}

  render() {
    //   const { moviesList } = this.state;
      return (
          <div className="wrapper">
              <div className="tags-container">
              {this.state.moviesList.map(movie => movie.Genre.split(', ')
              .map(g => <span key={g} onClick={this.filerByGenre}>{g}</span>))}
                  </div>
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