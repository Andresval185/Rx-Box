import { createContext, useContext, useState } from 'react'
import { athletes } from '../data/athletes.js'
import { classSchedule } from '../data/classes.js'
import { seedReservations } from '../data/seedReservations.js'

const AppDataContext = createContext(null)

export function AppDataProvider({ children }) {
  const [reservations, setReservations] = useState(seedReservations)
  // session: null (logged out) | { role: 'athlete', athleteId } | { role: 'coach' }
  const [session, setSession] = useState(null)

  const currentAthlete =
    session?.role === 'athlete' ? athletes.find((a) => a.id === session.athleteId) : null

  function loginAsAthlete(athleteId) {
    setSession({ role: 'athlete', athleteId })
  }

  function loginAsCoach() {
    setSession({ role: 'coach' })
  }

  function logout() {
    setSession(null)
  }

  function reserveClass(classId) {
    const athleteId = session?.athleteId
    if (!athleteId) return
    setReservations((prev) => {
      if (prev.some((r) => r.classId === classId && r.athleteId === athleteId)) {
        return prev
      }
      return [...prev, { id: `${classId}-${athleteId}`, classId, athleteId, checkIn: null }]
    })
  }

  function cancelReservation(classId) {
    const athleteId = session?.athleteId
    if (!athleteId) return
    setReservations((prev) => prev.filter((r) => !(r.classId === classId && r.athleteId === athleteId)))
  }

  function submitCheckIn(classId, checkInData) {
    const athleteId = session?.athleteId
    if (!athleteId) return
    setReservations((prev) =>
      prev.map((r) =>
        r.classId === classId && r.athleteId === athleteId
          ? { ...r, checkIn: { ...checkInData, submittedAt: new Date().toISOString() } }
          : r,
      ),
    )
  }

  const value = {
    athletes,
    session,
    currentAthlete,
    loginAsAthlete,
    loginAsCoach,
    logout,
    classes: classSchedule,
    reservations,
    reserveClass,
    cancelReservation,
    submitCheckIn,
  }

  return <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>
}

export function useAppData() {
  const ctx = useContext(AppDataContext)
  if (!ctx) throw new Error('useAppData must be used within AppDataProvider')
  return ctx
}
