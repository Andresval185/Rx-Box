// Flags the pattern coaches care about: consistent training +
// no strength progression + low nutrition compliance = likely under-fueling.
export function analyzeAthlete(trainingWeeks, nutritionWeeks) {
  const avgSessions =
    trainingWeeks.reduce((sum, w) => sum + w.sessionsAttended, 0) / trainingWeeks.length
  const isConsistent = avgSessions >= 4

  const liftDelta = trainingWeeks[trainingWeeks.length - 1].backSquat - trainingWeeks[0].backSquat
  const isProgressing = liftDelta >= 10

  const avgCompliance = Math.round(
    nutritionWeeks.reduce((sum, w) => sum + w.proteinCompliance, 0) / nutritionWeeks.length,
  )
  const isUnderFueling = avgCompliance < 60

  return {
    avgSessions,
    isConsistent,
    liftDelta,
    isProgressing,
    avgCompliance,
    isUnderFueling,
    showInsight: isConsistent && !isProgressing && isUnderFueling,
  }
}
