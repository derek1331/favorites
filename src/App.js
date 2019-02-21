import React, { Component } from 'react';
import './App.css';
import './reset.css'
import Header from './components/header';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Movies from './components/movies'
import TV from './components/tv'
import Music from './components/music'



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <Route exact path="/movies" component={Movies} />
          <Route exact path="/tv" component={TV} />
          <Route exact path="/music" component={Music} />

        </div>
      </Router>
    );
  }
}

export default App;
