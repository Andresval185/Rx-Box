import { useState } from 'react'
import { useAppData } from '../context/AppDataContext.jsx'
import { days } from '../data/classes.js'
import ClassCard from '../components/ClassCard.jsx'
import './AthleteView.css'

export default function AthleteView() {
  const [activeDay, setActiveDay] = useState(days[0])
  const { classes, reservations, reserveClass, cancelReservation, currentAthlete } = useAppData()

  const classesForDay = classes.filter((c) => c.day === activeDay)

  return (
    <div>
      <h1>Class Schedule</h1>
      <p className="athlete-view-subtitle">
        Booking as <strong>{currentAthlete.name}</strong>
      </p>

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

      <div className="class-list">
        {classesForDay.map((classInfo) => {
          const spotsTaken = reservations.filter((r) => r.classId === classInfo.id).length
          const isReserved = reservations.some(
            (r) => r.classId === classInfo.id && r.athleteId === currentAthlete.id,
          )
          return (
            <ClassCard
              key={classInfo.id}
              classInfo={classInfo}
              spotsTaken={spotsTaken}
              isReserved={isReserved}
              onReserve={() => reserveClass(classInfo.id)}
              onCancel={() => cancelReservation(classInfo.id)}
            />
          )
        })}
      </div>
    </div>
  )
}
