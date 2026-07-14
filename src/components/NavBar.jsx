import { NavLink, useNavigate } from 'react-router-dom'
import { useAppData } from '../context/AppDataContext.jsx'
import './NavBar.css'

export default function NavBar() {
  const { session, currentAthlete, logout } = useAppData()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/')
  }

  return (
    <header className="navbar">
      <div className="navbar-brand">
        Rx<span>Box</span>
      </div>
      {session && (
        <>
          <nav className="navbar-links">
            {session.role === 'athlete' && (
              <NavLink
                to="/athlete"
                className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`}
              >
                Athlete
              </NavLink>
            )}
            {session.role === 'coach' && (
              <>
                <NavLink
                  to="/coach"
                  className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`}
                >
                  Coach
                </NavLink>
                <NavLink
                  to="/nutrition"
                  className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`}
                >
                  Nutrition
                </NavLink>
              </>
            )}
          </nav>
          <div className="navbar-session">
            <span className="navbar-session-name">
              {session.role === 'athlete' ? currentAthlete?.name : 'Coach'}
            </span>
            <button type="button" className="navbar-logout" onClick={handleLogout}>
              Log out
            </button>
          </div>
        </>
      )}
    </header>
  )
}
