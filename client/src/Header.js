import React, { Component } from 'react';
import { Link, } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
    <div className="App">
      <h1>Movie List</h1>
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
    </div>
    );
  }
}
export default Header;