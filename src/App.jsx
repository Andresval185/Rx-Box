import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import AthleteView from './pages/AthleteView.jsx'
import CoachView from './pages/CoachView.jsx'

function App() {
  return (
    <HashRouter>
      <div className="app-shell">
        <NavBar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Navigate to="/athlete" replace />} />
            <Route path="/athlete" element={<AthleteView />} />
            <Route path="/coach" element={<CoachView />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  )
}

export default App
