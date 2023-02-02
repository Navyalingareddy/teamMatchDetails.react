// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {isLoading: true, blogsData: []}

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch(`https://apis.ccbp.in/ipl`)
    const statusCode = await response.statusCode
    const data = await response.json()

    const formattedData = data.map(eachData => ({
      name: eachData.name,
      id: eachData.id,
      teamImageUrl: eachData.team_image_url,
    }))
    console.log(formattedData)
    this.setState({blogsData: formattedData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state
    return (
      <div className="home-container">
        <div className="image-container">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <div className="blog-list-container">
          {isLoading ? (
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          ) : (
            blogsData.map(eachData => (
              <TeamCard TeamsData={eachData} key={eachData.id} />
            ))
          )}
        </div>
      </div>
    )
  }
}

export default Home
