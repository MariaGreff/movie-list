import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MoviesList from './MoviesList';


class Home extends Component {
  render() {
    return (
    <div className="App">
      <h1>Movie List</h1>
      {/* Link to List.js */}
      <Link to={'./MoviesList'}>
        <button variant="raised">
            <MoviesList />
        </button>
      </Link>
    </div>
    );
  }
}
export default Home;