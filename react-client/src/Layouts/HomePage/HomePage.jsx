import React, { Component } from 'react';
import studentPicture from '../../Assets/student_picture.jpeg'
import artPicture from '../../Assets/art_picture.jpg'

import './style.css'


class HomePage extends Component {
  render() {
    return (
      <div className="homePageComponents">
        <div>
          <img src={studentPicture}></img>
          <span>"Education is the passport to the future, for tomorrow belongs to those who prepare for it today." - Malcolm X</span>
        </div>
        <div>
          <span>"You wanna fly, you got to give up the shit that weighs you down." - Toni Morrison</span>
          <img src={artPicture}></img>
        </div>
      </div>
    )
  }
}
export default HomePage;