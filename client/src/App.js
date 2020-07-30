import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import MoviesList from './MoviesList';
import MyList from './MyList';
import Header from './Header';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          {/* <Header /> */}
          <Route path='/MoviesList' component={MoviesList}/>
          <Route path='/MyList' component={MyList}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        {/* <Header /> */}
        <App/>
      </Switch>
    );
  }
}

export default App;