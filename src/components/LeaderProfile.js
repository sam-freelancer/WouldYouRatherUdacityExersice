import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatProfile } from '../utils/helpers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { faCrown } from '@fortawesome/free-solid-svg-icons'
class LeaderProfile extends Component {
  render() {
    const { user } = this.props
    const {
      avatarURL, name, questionsAnswered, questionsCreated, score
    } = user

    return(
      <div className='panel'>
        <div className='panel-header teal-panel'>
          <h3 className='user-rank'><FontAwesomeIcon icon={faStar} /></h3>
          <h3 className='panel-title'>{ name }</h3>
        </div>
        <div className='panel-body leader-panel'>
          <div className='avatar-container'>
            <img
              src={ avatarURL }
              alt={ `Avatar of ${name}`}
              className='avatar avatar-large'/>
          </div>
          <div className='leader-total'>
            <div className='question-total'>
              <p>Questions answered: </p>
              <p>{ questionsAnswered }</p>
            </div>
            <hr></hr>
            <div className='question-total'>
              <p>Questions created:</p>
              <p>{ questionsCreated }</p>
            </div>
          </div>
          <div className='score-container'>
            <div className='score-circle'>
              <svg viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">
                <g>
                  <circle r="40%" cx="50%" cy="50%" fill="rgb(255,179,39)"/>
                  <text x="50%" y="50%" className="score" textAnchor="middle" dy="0.3em">{ score }</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authenticatedAgent, users }, { uid }) {
  const user = users[uid]

  return {
    authenticatedAgent,
    user: user
    ? formatProfile(user)
    : null
  }
}

export default connect(mapStateToProps)(LeaderProfile)
