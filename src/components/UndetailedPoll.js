import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { formatQuestion, formatDate } from '../utils/helpers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'


class UndetailedPoll extends Component {
  render() {
    const { question, answer, answeredPoll } = this.props
    const {
      id, name, avatarURL, timestamp, optionOne, optionTwo
    } = question

    return (
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
          <h4 className='would-you-rather'>Would You Rather...</h4>
          { /* Gotta be a better/shorter way of doing this */}
          { answer === null && (
            <div className='options'>
              <div className='option option-1'>{ optionOne.text }</div>
              <div className='option-divider'>OR</div>
              <div className='option option-2'>{ optionTwo.text }</div>
            </div>
          )}
          { (answer !== null && answer === 'optionOne') && (
            <div className='options'>
              <div className='option option-1 option-voted'>
                <div>{ optionOne.text }</div>
                {/* <span ><FaCheckSquare className='voted-icon' x='0' /></span> */}
              </div>
              <div className='option-divider'>OR</div>
              <div className='option option-2 option-not-voted'>{ optionTwo.text }</div>
            </div>
          )}
          { (answer !== null && answer === 'optionTwo') && (
            <div className='options'>
              <div className='option option-1 option-not-voted'>{ optionOne.text }</div>
              <div className='option-divider'>OR</div>
              <div className='option option-2 option-voted'>{ optionTwo.text }</div>
            </div>
          )}
          <Link to={{
              pathname: `/question/${id}`,
              state: { answeredPoll }
            }} className='link-btn'>
            <button className='btn view-poll-btn'> <FontAwesomeIcon icon={faEye} />View Poll</button>
          </Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authenticatedAgent, questions, users }, props) {
  const { questionID, answeredPoll } = props
  const question = questions[questionID]
  const user = users[question.author]
  const answer = answeredPoll === true
    ? users[authenticatedAgent].answers[questionID]
    : null

  return {
    authenticatedAgent,
    answeredPoll,
    answer,
    question: question
      ? formatQuestion(question, user)
      : null
  }
}

export default connect(mapStateToProps)(UndetailedPoll)
