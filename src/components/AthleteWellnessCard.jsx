import { feelingOptions } from '../data/checkInOptions.js'
import { bodyZones } from '../data/bodyZones.js'
import { getWellnessStatus, wellnessStatusLabel, getInjuryAlertZones } from '../utils/wellness.js'
import './AthleteWellnessCard.css'

function zoneLabel(zoneId) {
  return bodyZones.find((z) => z.id === zoneId)?.label ?? zoneId
}

export default function AthleteWellnessCard({ athleteName, checkIn, classInfo }) {
  const status = getWellnessStatus(checkIn)
  const feeling = checkIn && feelingOptions.find((f) => f.value === checkIn.feeling)
  const injuryZones = getInjuryAlertZones(checkIn, classInfo)

  return (
    <div className={`wellness-card status-${status}${injuryZones.length ? ' has-injury-alert' : ''}`}>
      <span className={`status-dot status-dot-${status}`} aria-hidden="true" />
      <div className="wellness-card-main">
        <div className="wellness-card-header">
          <h4>{athleteName}</h4>
          <span className={`status-label status-label-${status}`}>{wellnessStatusLabel[status]}</span>
        </div>

        {injuryZones.length > 0 && (
          <div className="injury-alert">
            ⚠️ Injury risk: today's WOD loads {injuryZones.map(zoneLabel).join(', ')} — flagged pain there
          </div>
        )}

        {checkIn ? (
          <div className="wellness-card-details">
            <span className="wellness-stat">
              {feeling?.emoji} {feeling?.label}
            </span>
            <span className="wellness-stat">😴 {checkIn.sleepHours}h sleep</span>
            <span className="wellness-stat">Soreness {checkIn.soreness}/5</span>
            {checkIn.painZones.length > 0 ? (
              <span className="wellness-pain-zones">
                {checkIn.painZones.map((z) => (
                  <span key={z} className="pain-zone-chip">
                    {zoneLabel(z)}
                  </span>
                ))}
              </span>
            ) : (
              <span className="wellness-stat">No pain reported</span>
            )}
            {checkIn.symptomNote && <p className="wellness-note">"{checkIn.symptomNote}"</p>}
          </div>
        ) : (
          <p className="wellness-pending">Reserved — hasn't checked in yet.</p>
        )}
      </div>
    </div>
  )
}
