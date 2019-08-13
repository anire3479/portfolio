import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import ProjectsPage from './ProjectsPage'
import ResumePage from './ResumePage'
import NavBar from './HeaderComponent/NavBar';
import Footer from './FooterComponent/Footer';

import './style.css'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="website">
          <NavBar />
          <Route name="home" exact path="/" component={HomePage} />
          <Route name="projects" exact path="/projects" component={ProjectsPage} />
          <Route name="resume" exact path="/resume" component={ResumePage} />
          <Footer />
        </div>
      </Router>
    )
  }
}
export default App;