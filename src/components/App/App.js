import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
// import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link} from 'react-router-dom'
import Feeling from './../Feeling/Feeling.js'
import Understanding from './../Understanding/Understanding.js'
import Support from './../Support/Support.js'
import Comments from './../Comments/Comments.js'
import Review from './../Review/Review.js'
import Completed from './../Completed/Completed.js'

class App extends Component {
  
 
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <ul>
          <li><Link to="/feeling">Home</Link></li>
        </ul>

      <Route exact path="/feeling" component={Feeling}/>
      <Route path="/understanding" component={Understanding}/>
      <Route path="/support" component={Support}/>
      <Route path="/comments" component={Comments}/>
      <Route path="/review" component={Review}/>
      <Route exact path="/completed" component={Completed}/>
        <br/>
      </div>
      </Router>
    );
  }
}

export default App;
