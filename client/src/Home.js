import React, { Component } from 'react';
import { Link, Route, BrowserRouter } from 'react-router-dom';
import MoviesList from './MoviesList';
import MyList from './MyList';


class Home extends Component {
  render() {
    return (
    <div className="App">
      <Link to={'./MoviesList'}>
      <button>SEARCH</button>
        {/* <button variant="raised">
            <MoviesList />
        </button> */}
      </Link>
      <Link to={'./MyList'}>
      <button>MY LIST</button>
        {/* <button variant="raised">
            <MyList />
        </button> */}
      </Link>
      <h1>Movie List</h1>
    </div>
    );
  }
}
export default Home;