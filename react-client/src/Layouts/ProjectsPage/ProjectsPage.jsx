import React, {Component} from 'react'
import Card from '../../Components/CardComponent/Card'

import './style.css'

class ProjectsPage extends Component {
  render() {
    return(
      <div className="pageComponents">
        <Card />
        <Card />
      </div>
    )
  }
}

export default ProjectsPage;