import React, { Component } from 'react';
require('dotenv').config()

class MovieCard extends Component {
  state = {
      myMovieData: { 
        isWatched: false,
        isFavourite: false
      }
  };

  componentDidMount() {
      fetch(
            '/api/getList'
        )
        .then(res => res.json())
        // .then(data => console.log(data));
   
        // .then(res => {
        //     this.setState({ movieData: res });
        // });
    // fetch(
    //         `https://www.omdbapi.com/?apikey=${your_API}&i=${
    //             this.props.movieID
    //         }&plot=full`
    //     )
    //     .then(res => res.json())
        .then(data => {
            this.setState({ ...this.state, ...data })
            console.log(this.state);;
        });
}

// add movie to my list
handleChange = event => {
  this.setState({

});
console.log(this.state);
}

// mark movie as watched

// delete movie from my list

  render() {
      const {
          Title,
          Released,
          Genre,
          Plot,
          Poster,
          imdbRating
      } = this.state;

      if (!Poster || Poster === 'N/A') {
          return null;
      }

      return (
          <div className="movie-card-container">
            {/* <div>Placeholder</div> */}
              <div className="image-container">
                  <div
                      className="bg-image"
                      style={{ backgroundImage: `url(${Poster})` }}
                  />
              </div>
              <div className="movie-info">
                  <h2>Movie Details</h2>
                  <div>
                      <h1>{Title}</h1>
                      <small>Released Date: {Released}</small>
                  </div>
                  <h4>Rating: {imdbRating} / 10</h4>
                  <p>{Plot && Plot.substr(0, 350)}</p>
                  <div className="tags-container">
                      {Genre &&
                          Genre.split(', ').map(g => (
                              <span key={g}>{g}</span>
                          ))}
                  </div>
                  <div className="buttons-container">
                  <button onClick={this.handleChange}>Add to My List</button>
                  <button onClick={this.handleChange}>Mark as watched</button>
                  <button onClick={this.handleChange}>Delete From My List</button>
                  </div>
              </div>
          </div>
      );
  }
}

export default MovieCard;