import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css'

class Header extends Component {
  render() {
    return (
      <header>
        <div className="name">
          <span>Anire Bowman</span>
          <p>Software Engineer, Sneakerhead, Curious Learning Machine</p>
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
export default Header;