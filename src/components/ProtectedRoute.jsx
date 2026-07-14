import { Navigate } from 'react-router-dom'
import { useAppData } from '../context/AppDataContext.jsx'

export default function ProtectedRoute({ role, children }) {
  const { session } = useAppData()

  if (!session || session.role !== role) {
    return <Navigate to="/" replace />
  }

  return children
}
