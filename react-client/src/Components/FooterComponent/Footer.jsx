import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css'
class Footer extends Component {
  render() {
    return (
      <footer>
        <div>
          <a href="https://www.linkedin.com/in/anire-bowman-9b635072/">LinkedIn</a>
          <a href="https://github.com/anire3479">Github</a>
          <a href="https://medium.com/@anire3479">Medium</a>
          <a href="https://twitter.com/anire_bowman">Twitter</a>
        </div>
      </footer>
    )
  }
}
export default Footer;