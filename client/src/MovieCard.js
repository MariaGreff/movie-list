import React, { Component } from 'react';
require('dotenv').config()

class MovieCard extends Component {
  state = {
      movieData: {}
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
            this.setState({ movieData: data });
        });
}


  render() {
      const {
          Title,
          Released,
          Genre,
          Plot,
          Poster,
          imdbRating
      } = this.state.movieData;

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
                  <button>Add to My List</button>
              </div>
          </div>
      );
  }
}

export default MovieCard;