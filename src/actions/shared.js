import { getInitialData, saveQuestionAnswer } from '../utils/api'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { setauthenticatedAgent } from './authenticatedAgent'
import { showLoading, hideLoading } from 'react-redux-loading'
export const VOTE_ON_QUESTION = 'VOTE_ON_QUESTION'
export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({users, questions}) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(setauthenticatedAgent(null))
        dispatch(hideLoading())
      })
  }
}

function QuestionValidVote({ qid, answer, authenticatedAgent }) {
  return {
    type: VOTE_ON_QUESTION,
    qid,
    answer,
    authenticatedAgent
  }
}

export function handleQuestionValidVote(questionID, answer) {
  return (dispatch, getState) => {
    const { authenticatedAgent } = getState()
    const voteInfo = {
      authenticatedAgent,
      qid: questionID,
      answer
    }

    dispatch(QuestionValidVote(voteInfo))

    return saveQuestionAnswer(voteInfo)
  }
}
