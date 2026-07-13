import { NavLink } from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar-brand">
        Rx<span>Box</span>
      </div>
      <nav className="navbar-links">
        <NavLink
          to="/athlete"
          className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`}
        >
          Athlete
        </NavLink>
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
      </nav>
    </header>
  )
}
