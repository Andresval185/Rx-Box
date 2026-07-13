import { useState } from 'react'
import BodyMap from './BodyMap.jsx'
import { feelingOptions, sorenessLevels } from '../data/checkInOptions.js'
import './CheckInForm.css'

const initialState = {
  feeling: 'good',
  sleepHours: 7,
  soreness: 2,
  painZones: [],
  symptomNote: '',
}

export default function CheckInForm({ onSubmit, onCancel }) {
  const [form, setForm] = useState(initialState)
  const [submitted, setSubmitted] = useState(false)

  function toggleZone(zoneId) {
    setForm((prev) => ({
      ...prev,
      painZones: prev.painZones.includes(zoneId)
        ? prev.painZones.filter((z) => z !== zoneId)
        : [...prev.painZones, zoneId],
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(form)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="check-in-success">
        <h3>Check-in saved ✅</h3>
        <p>Your coach will see this before class starts.</p>
      </div>
    )
  }

  return (
    <form className="check-in-form" onSubmit={handleSubmit}>
      <div className="form-section">
        <label className="form-label">How do you feel today?</label>
        <div className="feeling-options">
          {feelingOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              className={`feeling-option${form.feeling === opt.value ? ' selected' : ''}`}
              onClick={() => setForm((prev) => ({ ...prev, feeling: opt.value }))}
            >
              <span className="feeling-emoji">{opt.emoji}</span>
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="form-section">
        <label className="form-label" htmlFor="sleepHours">
          Hours of sleep: <strong>{form.sleepHours}</strong>
        </label>
        <input
          id="sleepHours"
          type="range"
          min="0"
          max="10"
          step="0.5"
          value={form.sleepHours}
          onChange={(e) => setForm((prev) => ({ ...prev, sleepHours: Number(e.target.value) }))}
        />
      </div>

      <div className="form-section">
        <label className="form-label">Soreness level</label>
        <div className="soreness-scale">
          {sorenessLevels.map((level) => (
            <button
              key={level}
              type="button"
              className={`soreness-option${form.soreness === level ? ' selected' : ''}`}
              onClick={() => setForm((prev) => ({ ...prev, soreness: level }))}
            >
              {level}
            </button>
          ))}
        </div>
        <div className="soreness-labels">
          <span>None</span>
          <span>Very sore</span>
        </div>
      </div>

      <div className="form-section">
        <label className="form-label">Pain location (tap any that apply)</label>
        <BodyMap selectedZones={form.painZones} onToggle={toggleZone} />
      </div>

      {form.painZones.length > 0 && (
        <div className="form-section">
          <label className="form-label" htmlFor="symptomNote">
            Describe the symptom
          </label>
          <textarea
            id="symptomNote"
            rows={2}
            placeholder="e.g. sharp pain when squatting below parallel"
            value={form.symptomNote}
            onChange={(e) => setForm((prev) => ({ ...prev, symptomNote: e.target.value }))}
          />
        </div>
      )}

      <div className="form-actions">
        <button type="button" className="btn btn-outline" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="btn btn-accent">
          Save Check-In
        </button>
      </div>
    </form>
  )
}
