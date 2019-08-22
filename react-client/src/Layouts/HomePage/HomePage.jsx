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
          <span>A software engineer learning something new every day. A big proponent of extreme ownership and becoming stronger from your mistakes. Focused on cultivating knowledge in order to pave a path for generations to come.</span>
        </div>
        <div>
          <span>I see this website as not only a personal portfolio but a gateway to my thoughts and learnings. Can’t wait to see what lies ahead next. Can’t wait to show you.</span>
          <img src={artPicture}></img>
        </div>
        <span className="quote">"My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style." - Maya Angelou</span>
      </div>
    )
  }
}
export default HomePage;