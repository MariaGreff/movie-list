import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MyList extends Component {
  state = {
      moviesList: [],
  };
  
  async componentDidMount() {
      await fetch('/api/movies/')
      .then(res => res.json())
      .then(data => {
          this.setState({ moviesList: data })
        });
    }

  filerByGenre = (event) => {
      const genre = event.target.innerText;
      this.setState( prevState => {
          return {
              moviesList: prevState.moviesList
              .filter(movie => movie.Genre
                .split(', ')
                .includes(genre))
            };
        });
    }

  getTags = () => {
      return this.state.moviesList
      .map(movie => movie.Genre
        .split(', ')
        .map(g => <span key={g} onClick={this.filerByGenre}>{g}</span>))
    // .forEach(g => console.log([...new Set(g.concat(g))]))
    // .filter((item, pos, self) => self.indexOf(item) == pos);
    }

  render() {
      return (
      <div className="wrapper">
        <div className="tags-container">
        {this.getTags()}
        </div>
        {this.state.moviesList.length > 0 ? (
            this.state.moviesList.map(movie => (
            <MovieCard movieID={movie.imdbID} key={movie.imdbID} />
            ))) : (
            <p>
            Your Movie List is now empty, add a Movie to begin!
            </p>
            )}
      </div>
    );
  }
}

export default MyList;