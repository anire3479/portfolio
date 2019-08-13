import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css'

class NavBar extends Component {
  render() {
    return (
      <header>
        <div className="name">
          <span>Anire Bowman</span>
          <p>Software Engineer, sneakerhead, curious learning machine</p>
        </div>
        <div className="nav">
          <Link to="">About</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/projects">Projects</Link>
        </div>
      </header>
    )
  }
}
export default NavBar;