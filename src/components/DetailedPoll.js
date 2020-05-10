import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'

class DetailedPoll extends Component {
  render() {
    const { question, handleVote } = this.props
    const {
      name, avatarURL, timestamp, optionOne, optionTwo
    } = question

    return(
      <div className='dashboard-container'>
        <div className='panel'>
          <div className='panel-header space-between'>
            <div className='panel-user-info'>
              <img src={ avatarURL } alt={ `Avatar of ${name}`} className='avatar'/>
              <p><strong>{ name }</strong> asks:</p>
            </div>
            <div className='panel-time-info'>
              <p>{ formatDate(timestamp) }</p>
            </div>
          </div>
          <div className='panel-body'>
            <h3 className='would-you-rather-detailed'>Would You Rather...</h3>
            <div className='options'>
              <div
                id='option-1-detailed'
                className='option detailed-option'
                onClick={ handleVote }>{ optionOne.text }
              </div>
              <div className='option-divider'>OR</div>
              <div
                id='option-2-detailed'
                className='option detailed-option'
                onClick={ handleVote }>{ optionTwo.text }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authenticatedAgent, questions, users }, props) {
  // Get ID from URL
  const { questionID, handleVote } = props
  // console.log(questionID)
  const question = questions[questionID]
  const user = users[question.author]

  return {
    authenticatedAgent,
    handleVote,
    question: question
      ? formatQuestion(question, user)
      : null
  }
}

export default connect(mapStateToProps)(DetailedPoll)
