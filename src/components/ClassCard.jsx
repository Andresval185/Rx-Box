import './ClassCard.css'

export default function ClassCard({
  classInfo,
  spotsTaken,
  isReserved,
  hasCheckedIn,
  onReserve,
  onCancel,
  onCheckIn,
}) {
  const spotsLeft = classInfo.capacity - spotsTaken
  const isFull = spotsLeft <= 0 && !isReserved

  return (
    <div className={`class-card${isReserved ? ' reserved' : ''}`}>
      <div className="class-card-time">{classInfo.time}</div>
      <div className="class-card-body">
        <h3>{classInfo.wodName}</h3>
        <p className="class-card-coach">{classInfo.coach}</p>
      </div>
      <div className="class-card-side">
        <span className={`class-card-spots${isFull ? ' full' : ''}`}>
          {spotsLeft} / {classInfo.capacity} spots
        </span>
        {isReserved ? (
          <>
            {hasCheckedIn ? (
              <span className="checked-in-badge">Checked In ✓</span>
            ) : (
              <button type="button" className="btn btn-accent" onClick={onCheckIn}>
                Check In
              </button>
            )}
            <button type="button" className="btn btn-outline" onClick={onCancel}>
              Cancel
            </button>
          </>
        ) : (
          <button type="button" className="btn btn-accent" disabled={isFull} onClick={onReserve}>
            {isFull ? 'Full' : 'Reserve'}
          </button>
        )}
      </div>
    </div>
  )
}
