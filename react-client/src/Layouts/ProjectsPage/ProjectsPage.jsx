import React, {Component} from 'react'
import Card from '../../Components/CardComponent/Card'
import driftOnboarding from '../../Assets/drift_onboarding.png'
import emotionProject from '../../Assets/emotion_project.png'

import './style.css'

const DRIFT_DESCRIPTION = "Drift Chat/Video Onboarding"
const EMOTION_DESCRIPTION = "e-Motion 112 Term Project"


class ProjectsPage extends Component {
  render() {
    return(
      <div className="pageComponents">
        <Card img={driftOnboarding} description={DRIFT_DESCRIPTION} link="https://youtu.be/VjrM9s5cKos"/>
        <Card img={emotionProject} description={EMOTION_DESCRIPTION} link="https://www.youtube.com/watch?v=nrJjACS6eC8"/>
      </div>
    )
  }
}

export default ProjectsPage;