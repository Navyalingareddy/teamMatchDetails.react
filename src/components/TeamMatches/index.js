import {Component} from 'react'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

const TeamMatches = () => {
  ;<div className="app-container">
    <img
      className="image_size"
      src="https://assets.ccbp.in/frontend/react-js/kkr-team-img.png"
      alt="team banner"
    />
    <MatchCard />
    <LatestMatch />
  </div>
}

export default TeamMatches
