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

// handler = (data) => {
//     this.setState( prevState => {
//         return { ...prevState, ...data}
//     })
// }

callbackFunction = () => {
    fetch('/api/movies/')
    .then(res => res.json())
    .then(data => {
        this.setState({ moviesList: data })
        console.log(this.state);
    });
}

// componentDidUpdate = (prevState) => {
//     if (this.state !== prevState) {
//         fetch('/api/movies/')
//         .then(res => res.json())
//         .then(data => {
//             this.setState({ moviesList: data })
//             console.log(this.state);
//         });
//     }
//   }


  render() {
    //   const { moviesList } = this.state;
    console.log(this.state);
      return (
          <div className="wrapper">
              <div className="tags-container">
              {this.state.moviesList.map(movie => movie.Genre.split(', ')
              .map(g => {
                {
                return <span key={g} onClick={this.filerByGenre}>{g}</span>
              }}))}
                  </div>
              {this.state.moviesList.length > 0 ? (
                  this.state.moviesList.map(movie => (
                      <MovieCard movieID={movie.imdbID} key={movie.imdbID} parentCallback={this.callbackFunction} />
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