import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import Login from './Login'
import Dashboard from './Dashboard'
import Question from './Question'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import ErrorPage from './ErrorPage'
import LoadingBar from 'react-redux-loading'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(handleInitialData())
  }

  render() {
    // const questionID = "8xf0y6ziyjabvozdd253nd"

    return (
      <Router basename="/would-you-rather-app">
        <Fragment>
          <LoadingBar />
            <div className="App">
              { this.props.loading === true
                ? null
                : <Switch>
                    <Route path='/' exact component={ Dashboard } />
                    <Route path='/login' component={ Login } />
                    <Route path='/question/:id' component={ Question }/>
                    <Route path='/add' component={ NewQuestion } />
                    <Route path='/leaderboard' component={ Leaderboard } />
                    <Route component={ ErrorPage } />
                  </Switch>
              }
            </div>
        </Fragment>
      </Router>

    );
  }
}

function mapStateToProps({ authenticatedAgent, questions }) {
  return {
    // loading: authenticatedAgent === null
    loading: Object.keys(questions).length === 0
  }
}

export default connect(mapStateToProps)(App)
