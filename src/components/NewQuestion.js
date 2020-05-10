import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddQuestion } from '../actions/questions'
import Navbar from './Navbar'

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false
  }

  handleChange = (e) => {
    const elementId = e.target.id
    const text = e.target.value

    if (elementId === 'option-1-input') {
      this.setState(() => ({
        optionOneText: text
      }))
    } else {
      this.setState(() => ({
        optionTwoText: text
      }))
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { optionOneText, optionTwoText } = this.state
    const { dispatch } = this.props

    dispatch(handleAddQuestion(optionOneText, optionTwoText))

    this.setState(() => ({
      optionOneText: '',
      optionTwoText: '',
      toHome: true
    }))
  }

  render() {
    const { toHome } = this.state
    const { authenticatedAgent } = this.props

    if (authenticatedAgent === null) {
      return <Redirect to='/login' />
    }

    if (toHome === true) {
      return <Redirect to='/' />
    }

    return(
      <Fragment>
        <Navbar />
          <div className='container'>
            <div className='dashboard-container'>
              <div className='panel'>
                <div className='panel-header teal-panel'>
                  <h3 className='header-title'>Create a Question</h3>
                </div>
                <div className='panel-body'>
                  <h4 className='would-you-rather'>Would You Rather...</h4>
                  <form className='login-form' onSubmit={ this.handleSubmit }>
                    <input
                      id='option-1-input'
                      className='question-input'
                      type='text'
                      placeholder='Option 1'
                      onChange={ this.handleChange }/>
                    <div className='create-question-sep'>OR</div>
                    <input
                      id='option-2-input'
                      className='question-input'
                      type='text'
                      placeholder='Option 2'
                      onChange={ this.handleChange }/>
                    <button className='btn new-question-btn' type='submit'>Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
      </Fragment>
    )
  }
}

function mapStateToProps({ authenticatedAgent }) {
  return {
    authenticatedAgent
  }
}

export default connect(mapStateToProps)(NewQuestion)
