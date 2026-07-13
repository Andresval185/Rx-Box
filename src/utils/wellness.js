// Traffic-light rule: pain reported or clearly rough state -> red,
// mild fatigue/soreness -> yellow, otherwise green.
export function getWellnessStatus(checkIn) {
  if (!checkIn) return 'pending'

  const { feeling, sleepHours, soreness, painZones } = checkIn

  if (painZones.length > 0 || feeling === 'rough' || soreness >= 4 || sleepHours < 5) {
    return 'red'
  }
  if (feeling === 'tired' || soreness === 3 || sleepHours < 6.5) {
    return 'yellow'
  }
  return 'green'
}

export const wellnessStatusLabel = {
  green: 'Ready',
  yellow: 'Monitor',
  red: 'Needs attention',
  pending: 'Not checked in',
}
