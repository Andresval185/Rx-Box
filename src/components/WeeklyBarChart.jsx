import './WeeklyBarChart.css'

export default function WeeklyBarChart({ data, valueKey, labelKey, formatValue, color }) {
  const max = Math.max(...data.map((d) => d[valueKey]))

  return (
    <div className="weekly-chart">
      {data.map((point) => (
        <div key={point[labelKey]} className="weekly-chart-col">
          <span className="weekly-chart-value">{formatValue(point[valueKey])}</span>
          <div className="weekly-chart-track">
            <div
              className="weekly-chart-bar"
              style={{ height: `${(point[valueKey] / max) * 100}%`, background: color }}
            />
          </div>
          <span className="weekly-chart-label">{point[labelKey]}</span>
        </div>
      ))}
    </div>
  )
}
