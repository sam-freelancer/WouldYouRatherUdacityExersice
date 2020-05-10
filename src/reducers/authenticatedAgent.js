import { SET_AUTHED_USER } from '../actions/authenticatedAgent'
export default function authenticatedAgent(state = null, action) {
  switch(action.type) {
    case SET_AUTHED_USER:
      return action.id
    default:
      return state
  }
}
