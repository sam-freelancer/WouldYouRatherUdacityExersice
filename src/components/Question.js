import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import DetailedPoll from './DetailedPoll'
import PollResults from './PollResults'
import Navbar from './Navbar'
import Footer from './Footer'
import ErrorPage from './ErrorPage'
import { handleQuestionValidVote } from '../actions/shared'

class Question extends Component {
  state = {
    showResults: this.props.answeredPoll
  }

  handleVote = (e) => {
    const elementID = e.target.id
    const { questionID, dispatch } = this.props

    switch(elementID) {
      case 'option-1-detailed':
        this.setState({
          showResults: true
        })
        return dispatch(handleQuestionValidVote(questionID, 'optionOne'))
      case 'option-2-detailed':
        this.setState({
          showResults: true
        })
        return dispatch(handleQuestionValidVote(questionID, 'optionTwo'))
      default:
        alert('There was an error while voting. Try again')
    }
  }

  render() {
    const { authenticatedAgent, questionID, answeredPoll } = this.props
    const { showResults } = this.state

    if (answeredPoll === null) {
      return <ErrorPage />
    }

    if (authenticatedAgent === null) {
      return <Redirect to='/login' />
    }

    return(
      <Fragment>
        <Navbar/>
        
        <div>
          { showResults === true
            ? <PollResults questionID= { questionID }/>
            : <DetailedPoll questionID={ questionID } handleVote={ this.handleVote } />
          }
        </div>
        <Footer />
      </Fragment>
    )
  }
}

function mapStateToProps({ authenticatedAgent, questions }, props) {
  const { id } = props.match.params

  if (Object.keys(questions).includes(id)) {
    const { answeredPoll } = props.location.state

    return {
      authenticatedAgent,
      answeredPoll,
      questions,
      questionID: id
    }
  } else {
    return {
      authenticatedAgent,
      answeredPoll: null,
      questions: null,
      questionID: null
    }
  }
}

export default connect(mapStateToProps)(Question)
