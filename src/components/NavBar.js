import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'

const linkStyles = {
  display: "inline-block",
  width: "auto",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
}

function NavBar({ token, logout }) {
  return (
    <div>
      {!token ? null : <Button onClick={() => logout()} variant="danger">Logout</Button>}
      <NavLink exact="true" to="/playlists" style={linkStyles}>Playlists</NavLink>
      {/* <NavLink
        to="/songs"
        exact
        style={linkStyles}
        activeStyle={{ background: "darkblue"}}>
        Songs
      </NavLink>
      <NavLink
        to="/lyrics"
        exact
        style={linkStyles}
        activeStyle={{ background: "darkblue"}}>
        Lyrics
      </NavLink> */}
      <NavLink exact="true" to="/saved-lyrics" style={linkStyles}>Saved Lyrics</NavLink>
    </div>
  )
}

export default NavBar