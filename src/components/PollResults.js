import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { formatPollResults } from '../utils/helpers'

class PollResults extends Component {
  render() {
    const { results } = this.props
    const {
      optionOne, optionTwo, totalVotes, optionOnePercent, optionTwoPercent, chosenOption
    } = results

    return(
      <div>
        <div className='dashboard-container'>
          <div className='panel'>
            <div className='panel-header teal-panel'>
              <h3 className='header-title'>Results</h3>
            </div>
            <div className='panel-body'>
              <h3 className='would-you-rather'>Would You Rather...</h3>
              <table className='results'>
                <tbody>
                  <tr>
                    <td className='option-results'>{ optionOne.text }</td>
                    <td className='option-votes'>
                      { chosenOption === 'optionOne'
                        ? <div className='percent-bar option-voted' style={ {width: optionOnePercent + '%'} }>
                            <div className='percent-text-label'>{ optionOnePercent + '%' }</div>
                          </div>
                        : <div className='percent-bar' style={ {width: optionOnePercent + '%'} }>
                            <div className='percent-text-label'>{ optionOnePercent + '%' }</div>
                          </div>
                      }
                      <div className='vote-details'>{ optionOne.votes.length + ' of ' + totalVotes + ' votes'}</div>
                    </td>
                  </tr>
                  <tr>
                    <td className='option-results'>{ optionTwo.text }</td>
                    <td className='option-votes'>
                      { chosenOption === 'optionTwo'
                        ? <div className='percent-bar option-voted' style={ {width: optionTwoPercent + '%'} }>
                            <div className='percent-text-label'>{ optionTwoPercent + '%' }</div>
                          </div>
                        : <div className='percent-bar' style={ {width: optionTwoPercent + '%'} }>
                            <div className='percent-text-label'>{ optionTwoPercent + '%' }</div>
                          </div>
                      }
                      <div className='vote-details'>{ optionTwo.votes.length + ' of ' + totalVotes + ' votes'}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Link className='btn view-poll-btn' to='/'>Back to Questions</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authenticatedAgent, questions }, props) {
  const { questionID } = props
  const question = questions[questionID]

  return {
    results: formatPollResults(question, authenticatedAgent)
  }
}

export default connect(mapStateToProps)(PollResults)
