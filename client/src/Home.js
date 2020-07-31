import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
    <div className="App">
      <Link to={'./MoviesList'}>
      <button>SEARCH</button>
      </Link>
      <Link to={'./MyList'}>
      <button>MY LIST</button>
      </Link>
      <h1>Movie List App</h1>
      <div>Create your own movie list!</div>
      <p>P.S. Start with the "Search" Button</p>
    </div>
    );
  }
}
export default Home;