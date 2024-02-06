import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {itemDetails} = props
  const {id, name, teamImageUrl} = itemDetails
  console.log(id)

  return (
    <Link className="link-card" to={`/ipl/${id}`}>
      <li className="team-card">
        <img alt={name} src={teamImageUrl} className="team-card-img" />
        <h1 className="team-name">{name}</h1>
      </li>
    </Link>
  )
}

export default TeamCard
