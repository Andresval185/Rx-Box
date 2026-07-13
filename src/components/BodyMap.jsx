import { bodyZones } from '../data/bodyZones.js'
import './BodyMap.css'

const shapeZoneMap = {
  neck: ['neck'],
  shoulders: ['shoulders'],
  'arm-l': ['wrists_elbows'],
  'arm-r': ['wrists_elbows'],
  upper_back: ['upper_back'],
  lower_back: ['lower_back'],
  hips: ['hips'],
  'leg-l': ['knees'],
  'leg-r': ['knees'],
  'foot-l': ['ankles'],
  'foot-r': ['ankles'],
}

export default function BodyMap({ selectedZones, onToggle }) {
  const isSelected = (zoneId) => selectedZones.includes(zoneId)
  const fillFor = (shapeId) => {
    const zoneId = shapeZoneMap[shapeId][0]
    return isSelected(zoneId) ? 'var(--accent)' : 'var(--bg-elevated)'
  }

  return (
    <div className="body-map">
      <svg viewBox="0 0 200 330" className="body-map-svg" role="presentation">
        <circle cx="100" cy="25" r="18" fill="var(--bg-elevated)" stroke="var(--border)" />
        <rect x="88" y="43" width="24" height="12" rx="4" fill={fillFor('neck')} stroke="var(--border)" />
        <rect x="50" y="58" width="100" height="16" rx="6" fill={fillFor('shoulders')} stroke="var(--border)" />
        <rect x="30" y="75" width="16" height="90" rx="6" fill={fillFor('arm-l')} stroke="var(--border)" />
        <rect x="154" y="75" width="16" height="90" rx="6" fill={fillFor('arm-r')} stroke="var(--border)" />
        <rect x="65" y="75" width="70" height="55" rx="8" fill={fillFor('upper_back')} stroke="var(--border)" />
        <rect x="65" y="133" width="70" height="40" rx="8" fill={fillFor('lower_back')} stroke="var(--border)" />
        <rect x="60" y="176" width="80" height="28" rx="8" fill={fillFor('hips')} stroke="var(--border)" />
        <rect x="65" y="207" width="28" height="70" rx="8" fill={fillFor('leg-l')} stroke="var(--border)" />
        <rect x="107" y="207" width="28" height="70" rx="8" fill={fillFor('leg-r')} stroke="var(--border)" />
        <rect x="65" y="280" width="28" height="30" rx="6" fill={fillFor('foot-l')} stroke="var(--border)" />
        <rect x="107" y="280" width="28" height="30" rx="6" fill={fillFor('foot-r')} stroke="var(--border)" />
      </svg>

      <div className="body-map-zones">
        {bodyZones.map((zone) => (
          <button
            key={zone.id}
            type="button"
            className={`zone-chip${isSelected(zone.id) ? ' selected' : ''}`}
            onClick={() => onToggle(zone.id)}
          >
            {zone.label}
          </button>
        ))}
      </div>
    </div>
  )
}
