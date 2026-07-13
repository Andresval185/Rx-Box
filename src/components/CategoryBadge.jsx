import './CategoryBadge.css'

const categoryColors = {
  Strength: '#f5c14b',
  WOD: '#ff4d2e',
  Skills: '#3ecf6e',
  Endurance: '#4fa3ff',
  'Olympic Lifting': '#c084fc',
  Gymnastics: '#ff8a4d',
  Conditioning: '#9a9ca6',
}

export default function CategoryBadge({ category }) {
  const color = categoryColors[category] ?? '#9a9ca6'
  return (
    <span className="category-badge" style={{ color, borderColor: color }}>
      {category}
    </span>
  )
}
