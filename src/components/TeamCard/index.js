// Write your code here

import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamsData} = props
  const {teamImageUrl, id, name} = teamsData

  return (
    <Link to={`/teams-matches/${id}`} className="item-link">
      <div className="teamcard-container">
        <img className="item-image" src={teamImageUrl} alt={`names${id}`} />
        <p className="item-topic">{name}</p>
      </div>
    </Link>
  )
}
export default TeamCard
