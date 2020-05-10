import { RECEIVE_USERS } from '../actions/users'
import { ADD_QUESTION } from '../actions/questions'
import { VOTE_ON_QUESTION } from '../actions/shared'
export default function users(state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
    case ADD_QUESTION:
      const { id, author } = action.question

      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat([id])
        }
      }
    case VOTE_ON_QUESTION:
      const { qid, answer, authenticatedAgent } = action

      return {
        ...state,
        [authenticatedAgent]: {
          ...state[authenticatedAgent],
          answers: {
            ...state[authenticatedAgent].answers,
            [qid]: answer
          }
        }
      }
    default:
      return state
  }
}
