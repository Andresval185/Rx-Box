import { HashRouter, Routes, Route } from 'react-router-dom'
import { AppDataProvider } from './context/AppDataContext.jsx'
import NavBar from './components/NavBar.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import LoginView from './pages/LoginView.jsx'
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
              <Route path="/" element={<LoginView />} />
              <Route
                path="/athlete"
                element={
                  <ProtectedRoute role="athlete">
                    <AthleteView />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/coach"
                element={
                  <ProtectedRoute role="coach">
                    <CoachView />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/nutrition"
                element={
                  <ProtectedRoute role="coach">
                    <NutritionView />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
        </div>
      </HashRouter>
    </AppDataProvider>
  )
}

export default App
