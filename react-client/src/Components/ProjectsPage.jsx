import React, {Component} from 'react'
import Card from './CardComponent/Card'

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