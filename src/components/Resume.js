import React from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMore from '../assets/ExpandMore'
import resumeImage from '../assets/resumeImage.jpg'
import './FlexCss.css'

const style = {
  panel: {
    width: '75%'
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 20
  }
}

class Resume extends React.Component {
  render() {
    return (
      <div id="resume" style={style.panel}>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMore />}>
            <p style={style.heading}>
              View Resume or{' '}
              <a
                href="https://drive.google.com/file/d/1ZH6tNfHd_k1QpSWuDEsf2-i9ITTv2a7L/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here{' '}
              </a>{' '}
              to View and Download
            </p>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <img src={resumeImage} alt="resume" />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    )
  }
}

export default Resume
