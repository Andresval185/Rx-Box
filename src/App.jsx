import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AppDataProvider } from './context/AppDataContext.jsx'
import NavBar from './components/NavBar.jsx'
import AthleteView from './pages/AthleteView.jsx'
import CoachView from './pages/CoachView.jsx'
import NutritionView from './pages/NutritionView.jsx'

function App() {
  return (
    <AppDataProvider>
      <HashRouter>
        <div className="app-shell">
          <NavBar />
          <main className="app-main">
            <Routes>
              <Route path="/" element={<Navigate to="/athlete" replace />} />
              <Route path="/athlete" element={<AthleteView />} />
              <Route path="/coach" element={<CoachView />} />
              <Route path="/nutrition" element={<NutritionView />} />
            </Routes>
          </main>
        </div>
      </HashRouter>
    </AppDataProvider>
  )
}

export default App
