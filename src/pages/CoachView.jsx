import { useState, useMemo } from 'react'
import { useAppData } from '../context/AppDataContext.jsx'
import { days } from '../data/classes.js'
import { getWellnessStatus } from '../utils/wellness.js'
import AthleteWellnessCard from '../components/AthleteWellnessCard.jsx'
import './CoachView.css'

export default function CoachView() {
  const [activeDay, setActiveDay] = useState(days[0])
  const { classes, reservations, athletes } = useAppData()

  const classesForDay = classes.filter((c) => c.day === activeDay)

  const dayStatusCounts = useMemo(() => {
    const classIds = new Set(classesForDay.map((c) => c.id))
    const counts = { green: 0, yellow: 0, red: 0, pending: 0 }
    reservations
      .filter((r) => classIds.has(r.classId))
      .forEach((r) => {
        counts[getWellnessStatus(r.checkIn)] += 1
      })
    return counts
  }, [classesForDay, reservations])

  return (
    <div>
      <h1>Coach Dashboard</h1>
      <p className="coach-view-subtitle">Wellness check-ins for every reserved class.</p>

      <div className="day-tabs">
        {days.map((day) => (
          <button
            key={day}
            type="button"
            className={`day-tab${day === activeDay ? ' active' : ''}`}
            onClick={() => setActiveDay(day)}
          >
            {day}
          </button>
        ))}
      </div>

      <div className="summary-bar">
        <span className="summary-chip summary-chip-red">{dayStatusCounts.red} needs attention</span>
        <span className="summary-chip summary-chip-yellow">{dayStatusCounts.yellow} monitor</span>
        <span className="summary-chip summary-chip-green">{dayStatusCounts.green} ready</span>
        <span className="summary-chip summary-chip-pending">{dayStatusCounts.pending} pending</span>
      </div>

      <div className="coach-class-list">
        {classesForDay.map((classInfo) => {
          const roster = reservations.filter((r) => r.classId === classInfo.id)
          return (
            <section key={classInfo.id} className="coach-class-block">
              <div className="coach-class-heading">
                <h2>
                  {classInfo.time} · {classInfo.wodName}
                </h2>
                <span className="coach-class-coach">{classInfo.coach}</span>
              </div>

              {roster.length === 0 ? (
                <p className="coach-empty-roster">No reservations yet.</p>
              ) : (
                <div className="wellness-card-grid">
                  {roster.map((r) => {
                    const athlete = athletes.find((a) => a.id === r.athleteId)
                    return (
                      <AthleteWellnessCard
                        key={r.id}
                        athleteName={athlete?.name ?? 'Unknown athlete'}
                        checkIn={r.checkIn}
                      />
                    )
                  })}
                </div>
              )}
            </section>
          )
        })}
      </div>
    </div>
  )
}
