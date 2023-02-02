import {Component} from 'react'

import './index.css'

class MatchCard extends Component {
  state = {blogData: {}}
  componentDidMount() {
    this.getMatchDetails()
  }
  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch('https://apis.ccbp.in/ipl/:id')
    const data = await response.json()
    const updatetedData = {
      competingTeamLogo: competing_Team_Logo,
      result: result,
      matchStatus: match_status,
    }
    this.setState({blogData: updatetedData})
  }

  renderMatchCard = () => {
    const {blogData} = this.state

    const {competingTeamLogo, competingTeam, result, matchStatus} = blogData

    return (
      <div className="match_card_container">
        <img className="match_logo" src={competingTeamLogo} />
        <h1 className="competing_team">{competingTeam}</h1>
        <p className="runs">{result}</p>
        <p className="status">{matchStatus}</p>
      </div>
    )
  }
}

export default MatchCard
