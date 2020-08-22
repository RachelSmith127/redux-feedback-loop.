import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route} from 'react-router-dom'
import Feeling from './../Feeling/Feeling.js'
import Understanding from './../Understanding/Understanding.js'
import Support from './../Support/Support.js'



class App extends Component {
  componentDidMount() {
    
  }
  //GET will go here

  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>

      <Route exact path="/feeling" component={Feeling}/>
      {/* <Route exact path="/understanding" component={Understanding}/>
      <Route exact path="/support" component={Support}/>
      <Route exact path="/comments" component={Comments}/>
      <Route exact path="/review" component={Review}/>
      <Route exact path="/thankyou" component={Thankyou}/> */}
        <br/>
      </div>
      </Router>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return{ 
    reduxState
  }
}

export default connect(mapStateToProps)(App);
