import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { setauthenticatedAgent } from '../actions/authenticatedAgent'
import { Card, Icon, Image } from 'semantic-ui-react'
import Footer from './Footer'
class Login extends Component {
  state = {
    uid: this.props.userIDs[0]
  }



  handleSubmit = (e) => {
    e.preventDefault()

    const { uid } = this.state
    const { dispatch } = this.props

    dispatch(setauthenticatedAgent(uid))
  }
  handleChange = (e) => {
    this.setState({
      uid: e.target.value
    })
  }
  render() {
    const { userIDs, authenticatedAgent } = this.props

    if (authenticatedAgent !== null) {
      return <Redirect to='/' />
    }

    return(
      <div className='login container card'>
        <div className='login-container'>
          <div className='login-header'>
            <h3 className='text-center'>Please login</h3>
          </div>
          <hr></hr>
          <div className='login-body'>
            <p>Select your username to proceed</p>
            <form className='login-form' onSubmit={ this.handleSubmit }>
              <select value={ this.state.uid } onChange={ this.handleChange }>
                { userIDs.map((userID) =>(
                  <option value={ userID } key={ userID }>{ userID }</option>
                )) }
              </select>
              <button className='btn login-btn' type='submit'>Submit</button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    
    )
  }
}
function mapStateToProps({ users, authenticatedAgent }) {
  return {
    userIDs: Object.keys(users).sort(),
    authenticatedAgent
  }
}
export default connect(mapStateToProps)(Login)
