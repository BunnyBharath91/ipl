import './index.css'

const LatestMatch = props => {
  const {itemDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = itemDetails

  return (
    <div className="latest-match-card">
      <div className="card left">
        <p className="card-text">{competingTeam}</p>
        <p className="card-text">{date}</p>
        <p className="card-text">{venue}</p>
        <p className="card-text">{result}</p>
      </div>
      <img
        alt={competingTeam}
        src={competingTeamLogo}
        className="latest-match-team-logo"
      />
      <div className="card right">
        <p className="card-text">First Innings</p>
        <p className="card-text">{firstInnings}</p>
        <p className="card-text">Second Innings</p>
        <p className="card-text">{secondInnings}</p>
        <p className="card-text">Man Of The Match</p>
        <p className="card-text">{manOfTheMatch}</p>
        <p className="card-text">Umpiers</p>
        <p className="card-text">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
