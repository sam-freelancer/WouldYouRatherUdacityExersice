import moment from 'moment'

export function formatQuestion(question, user) {
  const { id, author, timestamp, optionOne, optionTwo} = question
  const { name, avatarURL } = user

  return {
    id,
    name,
    avatarURL,
    author,
    timestamp,
    optionOne,
    optionTwo
  }
}

export function formatProfile(user) {
  const { id, name, avatarURL } = user
  const questionsAnswered = Object.keys(user.answers).length
  const questionsCreated = Object.keys(user.questions).length
  const score = questionsAnswered + questionsCreated

  return {
    id,
    name,
    avatarURL,
    questionsAnswered,
    questionsCreated,
    score
  }
}

export function formatPollResults(question, authenticatedAgent) {
  const { optionOne, optionTwo } = question
  const optionOneVotes = optionOne.votes
  const optionTwoVotes = optionTwo.votes
  const totalVotes = optionOneVotes.length + optionTwoVotes.length
  const optionOnePercent = Math.round((optionOneVotes.length / totalVotes) * 100)
  const optionTwoPercent = Math.round((optionTwoVotes.length / totalVotes) * 100)
  const chosenOption = optionOneVotes.filter((user) => user === authenticatedAgent).length === 1
    ? 'optionOne'
    : 'optionTwo'

  return {
    optionOne,
    optionTwo,
    totalVotes,
    optionOnePercent,
    optionTwoPercent,
    chosenOption
  }
}
// Try to format date
export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toString()
  return time.substr(4, 6) + ', ' + time.substr(11, 4)
}