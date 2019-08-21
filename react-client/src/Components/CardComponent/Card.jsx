import React, {Component} from 'react'

import './style.css'

class Card extends Component {
  render() {
    return(
      <a href={this.props.link}>
        <div className="card">
          <img src={this.props.img}/>
        </div>
        <span className="description">{this.props.description}</span>
      </a>
    )
  }
}

export default Card;