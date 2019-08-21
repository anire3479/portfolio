import React, {Component} from 'react'
import Card from '../../Components/CardComponent/Card'
import driftOnboarding from '../../Assets/drift_onboarding.png'
import emotionProject from '../../Assets/emotion_project.png'

import './style.css'

const DRIFT_DESCRIPTION = "Drift Chat/Video Onboarding"
const EMOTION_DESCRIPTION = "e-Motion 112 Term Project"
const DRIFT_DESCRIPTION_VIDEO = "https://youtu.be/VjrM9s5cKos"
const EMOTION_DESCRIPTION_VIDEO = "https://youtu.be/nrJjACS6eC8"

class ProjectsPage extends Component {
  render() {
    return(
      <div className="pageComponents">
        <Card img={driftOnboarding} description={DRIFT_DESCRIPTION} link={DRIFT_DESCRIPTION_VIDEO}/>
        <Card img={emotionProject} description={EMOTION_DESCRIPTION} link={EMOTION_DESCRIPTION_VIDEO}/>
      </div>
    )
  }
}

export default ProjectsPage;