import { useNavigate } from 'react-router-dom'
import { useAppData } from '../context/AppDataContext.jsx'
import './LoginView.css'

export default function LoginView() {
  const { athletes, loginAsAthlete, loginAsCoach } = useAppData()
  const navigate = useNavigate()

  function handleAthleteLogin(athleteId) {
    loginAsAthlete(athleteId)
    navigate('/athlete')
  }

  function handleCoachLogin() {
    loginAsCoach()
    navigate('/coach')
  }

  return (
    <div className="login-view">
      <h1>
        Rx<span>Box</span>
      </h1>
      <p className="login-subtitle">Simulated login — pick who you're signing in as.</p>

      <section className="login-section">
        <h2>I'm an athlete</h2>
        <div className="login-athlete-grid">
          {athletes.map((athlete) => (
            <button
              key={athlete.id}
              type="button"
              className="login-athlete-card"
              onClick={() => handleAthleteLogin(athlete.id)}
            >
              <span className="login-athlete-avatar">{athlete.name.charAt(0)}</span>
              {athlete.name}
            </button>
          ))}
        </div>
      </section>

      <section className="login-section">
        <h2>I'm a coach</h2>
        <button type="button" className="btn btn-accent login-coach-btn" onClick={handleCoachLogin}>
          Log in as Coach
        </button>
      </section>
    </div>
  )
}
