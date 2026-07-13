import { useState } from 'react'
import { useAppData } from '../context/AppDataContext.jsx'
import { trainingHistory } from '../data/trainingHistory.js'
import { nutritionLog } from '../data/nutritionLog.js'
import { analyzeAthlete } from '../utils/nutritionInsight.js'
import WeeklyBarChart from '../components/WeeklyBarChart.jsx'
import './NutritionView.css'

export default function NutritionView() {
  const { athletes } = useAppData()
  const [athleteId, setAthleteId] = useState(athletes[0].id)

  const athlete = athletes.find((a) => a.id === athleteId)
  const trainingWeeks = trainingHistory[athleteId]
  const nutritionWeeks = nutritionLog[athleteId]
  const insight = analyzeAthlete(trainingWeeks, nutritionWeeks)

  return (
    <div>
      <h1>Nutrition &amp; Performance</h1>
      <p className="nutrition-view-subtitle">
        Compare training consistency against nutrition compliance to spot under-fueling.
      </p>

      <div className="athlete-tabs">
        {athletes.map((a) => (
          <button
            key={a.id}
            type="button"
            className={`day-tab${a.id === athleteId ? ' active' : ''}`}
            onClick={() => setAthleteId(a.id)}
          >
            {a.name}
          </button>
        ))}
      </div>

      {insight.showInsight && (
        <div className="insight-banner">
          ⚠️ Pattern detected: {athlete.name} has trained consistently (avg{' '}
          {insight.avgSessions.toFixed(1)} sessions/week) but Back Squat hasn't progressed (
          {trainingWeeks[0].backSquat} → {trainingWeeks[trainingWeeks.length - 1].backSquat} lb)
          while protein compliance averages only {insight.avgCompliance}% — likely under-fueling
          recovery.
        </div>
      )}

      <div className="nutrition-grid">
        <div className="nutrition-panel">
          <h3>Training History</h3>
          <p className="panel-subtitle">Sessions attended per week</p>
          <WeeklyBarChart
            data={trainingWeeks}
            valueKey="sessionsAttended"
            labelKey="week"
            formatValue={(v) => v}
            color="var(--accent)"
          />

          <p className="panel-subtitle" style={{ marginTop: 20 }}>
            Back Squat working weight (lb)
          </p>
          <WeeklyBarChart
            data={trainingWeeks}
            valueKey="backSquat"
            labelKey="week"
            formatValue={(v) => `${v}lb`}
            color="var(--text-muted)"
          />
        </div>

        <div className="nutrition-panel">
          <h3>Nutrition Compliance</h3>
          <p className="panel-subtitle">% of days protein target was hit</p>
          <WeeklyBarChart
            data={nutritionWeeks}
            valueKey="proteinCompliance"
            labelKey="week"
            formatValue={(v) => `${v}%`}
            color={insight.isUnderFueling ? 'var(--red)' : 'var(--green)'}
          />
        </div>
      </div>
    </div>
  )
}
