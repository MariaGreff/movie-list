import React, { Component } from 'react';
require('dotenv').config()

class MovieCard extends Component {
  state = {
   search: ''
  };

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_SECRET_KEY}&i=${this.props.movieID}&plot=full`)
    .then(res => res.json())
    .then(data => {
      this.setState( prevState => {
        return {
          ...prevState, ...data
        };
      });
    });
  }

// add movie to the list
  addMovie = () => {
    console.log('added to my list');
    fetch('/api/movies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...this.state }),
    });
  }

// delete movie from my list
  deleteMovie = async () => {
    console.log('deleted from my list');
    await fetch(`/api/movies/${this.state.imdbID}`, {
      method: 'delete'
    })
    .then(data => {
      this.setState( prevState => {
        return {...prevState, ...data}
      })
    });
    window.location.reload();
  }

  render() {
    const {
      Title,
      Released,
      Genre,
      Plot,
      Poster,
      imdbRating,
    } = this.state;

  if (!Poster || Poster === 'N/A') {
    return null;
  }

  return (
  <div className={`movie-card-container `}>
    <div className="image-container">
      <div
      className="bg-image"
      style={{ backgroundImage: `url(${Poster})` }}
      />
    </div>
    <div className="movie-info">
      <div>
        <h3>{Title}</h3>
        <small>Released Date: {Released}</small>
      </div>
      <h4>Rating: {imdbRating} / 10</h4>
      <p>{Plot && Plot.substr(0, 350)}</p>
      <div className="tags-container">
        {Genre && Genre.split(', ').map(g => (
        <span key={g}>{g}</span>
        ))
        }
      </div>
      <div className="buttons-container">
      <button onClick={this.addMovie}>Add to My List</button>
      <button onClick={this.deleteMovie}>Delete From My List</button>
      </div>
    </div>
  </div>
    );
  }
}

export default MovieCard;