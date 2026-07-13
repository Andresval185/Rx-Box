export const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

// targetZones: body zones this WOD's movements load the most heavily.
// Used to cross-check against athlete pain check-ins for injury alerts.
export const classSchedule = [
  { id: 'c1', day: 'Mon', time: '6:00 AM', wodName: 'Fran', coach: 'Coach Alex', capacity: 12, targetZones: ['shoulders', 'wrists_elbows', 'knees'] },
  { id: 'c2', day: 'Mon', time: '12:00 PM', wodName: 'Deadlift Strength + Metcon', coach: 'Coach Rae', capacity: 14, targetZones: ['lower_back', 'hips', 'wrists_elbows'] },
  { id: 'c3', day: 'Mon', time: '5:30 PM', wodName: 'Helen', coach: 'Coach Alex', capacity: 15, targetZones: ['shoulders', 'lower_back', 'knees'] },
  { id: 'c4', day: 'Tue', time: '6:00 AM', wodName: 'Back Squat 5x5', coach: 'Coach Rae', capacity: 12, targetZones: ['knees', 'hips', 'lower_back'] },
  { id: 'c5', day: 'Tue', time: '5:30 PM', wodName: 'Grace', coach: 'Coach Mo', capacity: 15, targetZones: ['shoulders', 'lower_back', 'wrists_elbows', 'knees'] },
  { id: 'c6', day: 'Wed', time: '6:00 AM', wodName: 'Row/Row/Row AMRAP', coach: 'Coach Alex', capacity: 12, targetZones: ['lower_back', 'shoulders'] },
  { id: 'c7', day: 'Wed', time: '12:00 PM', wodName: 'Overhead Press + Core', coach: 'Coach Rae', capacity: 14, targetZones: ['shoulders', 'lower_back'] },
  { id: 'c8', day: 'Wed', time: '5:30 PM', wodName: 'Cindy', coach: 'Coach Mo', capacity: 15, targetZones: ['shoulders', 'wrists_elbows', 'knees'] },
  { id: 'c9', day: 'Thu', time: '6:00 AM', wodName: 'Front Squat 5x3', coach: 'Coach Alex', capacity: 12, targetZones: ['knees', 'hips', 'lower_back'] },
  { id: 'c10', day: 'Thu', time: '5:30 PM', wodName: 'DT', coach: 'Coach Mo', capacity: 15, targetZones: ['lower_back', 'shoulders', 'wrists_elbows'] },
  { id: 'c11', day: 'Fri', time: '6:00 AM', wodName: 'Murph (Partner)', coach: 'Coach Rae', capacity: 12, targetZones: ['shoulders', 'knees', 'ankles'] },
  { id: 'c12', day: 'Fri', time: '12:00 PM', wodName: 'Barbell Complex + EMOM', coach: 'Coach Alex', capacity: 14, targetZones: ['lower_back', 'shoulders', 'wrists_elbows'] },
  { id: 'c13', day: 'Fri', time: '5:30 PM', wodName: 'Karen', coach: 'Coach Mo', capacity: 15, targetZones: ['shoulders', 'knees', 'lower_back'] },
  { id: 'c14', day: 'Sat', time: '9:00 AM', wodName: 'Team WOD', coach: 'Coach Rae', capacity: 20, targetZones: ['shoulders', 'knees'] },
]
