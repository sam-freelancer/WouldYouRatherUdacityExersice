import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setauthenticatedAgent } from '../actions/authenticatedAgent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { faCrown } from '@fortawesome/free-solid-svg-icons'
class Navbar extends Component {
  handleLogout = (e) => {
    const { dispatch } = this.props

    dispatch(setauthenticatedAgent(null))
  }

  render() {
    const { name } = this.props

    return(
      <nav className='nav'>
        <div className='nav-links'>
          <ul>
            <li>
              <NavLink to='/' exact activeClassName='active-nav'>
              <FontAwesomeIcon icon={faCoffee} /> Home sweet home
              </NavLink>
            </li>
            <li>
              <NavLink to='/add' activeClassName='active-nav'>
              <FontAwesomeIcon icon={faQuestion} />    Create Question
              </NavLink>
            </li>
            <li>
              <NavLink to='/leaderboard' activeClassName='active-nav'>
              <FontAwesomeIcon icon={faCrown} />        Leaderboard
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='login-logout'>
          <div className='welcome-message'>Welcome, { name }</div>
          <button
            className='btn logout-btn'
            onClick={ this.handleLogout }>
            Logout
          </button>
        </div>
      </nav>
    )
  }
}

function mapStateToProps({ authenticatedAgent, users }) {
  const { name } = users[authenticatedAgent]

  return {
    name
  }
}

export default connect(mapStateToProps)(Navbar)
