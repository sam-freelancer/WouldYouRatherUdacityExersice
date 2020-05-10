import { combineReducers } from 'redux'
import authenticatedAgent from './authenticatedAgent'
import questions from './questions'
import users from './users'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  authenticatedAgent,
  questions,
  users,
  loadingBar: loadingBarReducer
})
