import { createContext, useContext, useState } from 'react'
import { athletes, currentAthleteId } from '../data/athletes.js'
import { classSchedule } from '../data/classes.js'

const AppDataContext = createContext(null)

export function AppDataProvider({ children }) {
  const [reservations, setReservations] = useState([])

  const currentAthlete = athletes.find((a) => a.id === currentAthleteId)

  function reserveClass(classId) {
    setReservations((prev) => {
      if (prev.some((r) => r.classId === classId && r.athleteId === currentAthleteId)) {
        return prev
      }
      return [...prev, { id: `${classId}-${currentAthleteId}`, classId, athleteId: currentAthleteId, checkIn: null }]
    })
  }

  function cancelReservation(classId) {
    setReservations((prev) =>
      prev.filter((r) => !(r.classId === classId && r.athleteId === currentAthleteId)),
    )
  }

  function submitCheckIn(classId, checkInData) {
    setReservations((prev) =>
      prev.map((r) =>
        r.classId === classId && r.athleteId === currentAthleteId
          ? { ...r, checkIn: { ...checkInData, submittedAt: new Date().toISOString() } }
          : r,
      ),
    )
  }

  const value = {
    athletes,
    currentAthlete,
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
