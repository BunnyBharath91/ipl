import {Component} from 'react'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      teamsList: [],
    }
  }

  componentDidMount() {
    this.fetchTeamsList()
  }

  fetchTeamsList = async () => {
    try {
      const fetchedData = await fetch('https://apis.ccbp.in/ipl')
      const data = await fetchedData.json()
      const array = data.teams
      const updatedData = array.map(eachItem => ({
        teamImageUrl: eachItem.team_image_url,
        name: eachItem.name,
        id: eachItem.id,
      }))

      this.setState({
        teamsList: updatedData,
      })
    } catch (error) {
      console.error('Error fetching teams:', error)
    }
  }

  render() {
    const {teamsList} = this.state

    return (
      <div className="home-container">
        <div className="logo-container">
          <img
            alt="ipl logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="ipl-logo"
          />
          <h1 className="main-heading">IPL Dashboard</h1>
        </div>
        <ul className="teams-container">
          {teamsList.map(eachItem => (
            <TeamCard key={eachItem.id} itemDetails={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
