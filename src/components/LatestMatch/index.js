// Write your code here
import {Component} from 'react'

import './index.css'

class LatestMatch extends Component {

  state={latestMatchDetails:{}}

  componentDidMount(){
      this.getTeamDetails()
  }
  getTeamDetails=async()=>{
      const {match}=this.props
      const {params}=match
      const {id}=params
      const response=await fetch(`https://apis.ccbp.in/ipl/:id`)
      const data=await response.json()
      const updatedData={
          const {umpires}=umpires
          const {result}=result
          const{manOFTheMatch}=man_of_the_match
          const{id}=id
          const{date}=date
          const{venue}=venue
          const{competing_team}=competing_team
          const{competingTeamLogo}=competing_team_logo
          const{firstInnings}=first_innings
          const{secondInnings}=second_innings
          const{matchStatus}=match_status

      }
      this.setState({latestMatchDetails:updatedDat})
  }

  renderTeamcardDetails=()=>{
  const {latestMatchDetails}=this.state
  const {
    umpires,
    result,
    man_of_the_match,
    id,
    date,
    venue,
    competing_team,
    competing_team_logo,
    first_innings,
    second_innings,
    match_status,
  } = latestMatchDetails

  return (
    <div className="latest_match_container">
      <div className="capital_details_container">
        <h1 className="capital_heading">{competingTeam}</h1>
        <p className="date_item">{date}</p>
        <p className="paragraph">{venue}</p>
        <img className="image_item" src={competingTeamLogo} />
        <div className="innings_container">
          <h1 className="innings">firstInnings</h1>
          <p className="paragraph_1">{firstInnings}</p>
          <h1 className="innings">secondInnings</h1>
          <p className="paragraph_2">{secondInnings}</p>
          <p className="paragraph_3">Man of the matches</p>
          <p className="paragraph_4">{manOfTheMatch}</p>
          <h1 className="innings">Umpires</h1>
          <p className="paragraph_5">{umpires}</p>
          <p className="paragraph_6">{result}</p>
        </div>
      </div>
    </div>
  )
}
}
export default LatestMatch
