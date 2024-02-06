import './index.css'

const MatchCard = props => {
  const {itemDetails} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = itemDetails

  return (
    <li className="match-card">
      <img
        alt={competingTeam}
        src={competingTeamLogo}
        className="match-card-img"
      />
      <h1 className="competing-team">{competingTeam}</h1>
      <p className="result">{result}</p>
      <p className="status">{matchStatus}</p>
    </li>
  )
}

export default MatchCard
