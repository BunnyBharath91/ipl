import {Component} from 'react'
import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  constructor() {
    super()
    this.state = {
      teamDetails: {},
    }
  }

  componentDidMount() {
    this.fetchTeamDetails()
  }

  fetchTeamDetails = async () => {
    try {
      const {match} = this.props
      const {params} = match
      const {id} = params

      const fetchedData = await fetch(`https://apis.ccbp.in/ipl/${id}`)
      const data = await fetchedData.json()

      const updatedLatestMatchDetails = {
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        date: data.latest_match_details.date,
        firstInnings: data.latest_match_details.first_innings,
        id: data.latest_match_details.id,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        matchStatus: data.latest_match_details.match_status,
        result: data.latest_match_details.result,
        secondInnings: data.latest_match_details.second_innings,
        umpires: data.latest_match_details.umpires,
        venue: data.latest_match_details.venue,
      }

      const updatedRecentMatches = data.recent_matches.map(eachItem => ({
        competingTeam: eachItem.competing_team,
        competingTeamLogo: eachItem.competing_team_logo,
        result: eachItem.result,
        matchStatus: eachItem.match_status,
      }))

      const updatedTeamBannerUrl = data.team_banner_url

      const updatedData = {
        latestMatchDetails: updatedLatestMatchDetails,
        recentMatches: updatedRecentMatches,
        teamBannerUrl: updatedTeamBannerUrl,
      }

      this.setState({
        teamDetails: updatedData,
      })
    } catch (error) {
      console.error('Error fetching team details:', error)
    }
  }

  render() {
    const {teamDetails} = this.state
    const {latestMatchDetails, recentMatches, teamBannerUrl} = teamDetails

    return (
      <div className="team-matches-container">
        <img alt="team banner" src={teamBannerUrl} className="team-banner" />
        <h1 className="latest-matches-text">Latest Matches</h1>
        <LatestMatch itemDetails={latestMatchDetails} />
        <ul className="match-cards-container">
          {recentMatches.map(eachItem => (
            <MatchCard key={eachItem.id} itemDetails={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default TeamMatches
