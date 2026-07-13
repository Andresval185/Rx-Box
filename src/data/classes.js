export const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

// category: the type of session (shown as a badge on the class card).
// targetZones: body zones this WOD's movements load the most heavily,
// used to cross-check against athlete pain check-ins for injury alerts.
export const classSchedule = [
  // Monday
  { id: 'mon-1', day: 'Mon', time: '5:00 AM', category: 'Strength', wodName: 'Back Squat 5x5', coach: 'Coach Rae', capacity: 12, targetZones: ['knees', 'hips', 'lower_back'] },
  { id: 'mon-2', day: 'Mon', time: '6:00 AM', category: 'WOD', wodName: 'Fran', coach: 'Coach Alex', capacity: 14, targetZones: ['shoulders', 'wrists_elbows', 'knees'] },
  { id: 'mon-3', day: 'Mon', time: '7:00 AM', category: 'Skills', wodName: 'Double-Under Practice', coach: 'Coach Mo', capacity: 12, targetZones: ['ankles', 'knees'] },
  { id: 'mon-4', day: 'Mon', time: '9:00 AM', category: 'Endurance', wodName: '5K Row', coach: 'Coach Rae', capacity: 10, targetZones: ['lower_back', 'knees'] },
  { id: 'mon-5', day: 'Mon', time: '12:00 PM', category: 'Strength', wodName: 'Deadlift Strength + Metcon', coach: 'Coach Alex', capacity: 14, targetZones: ['lower_back', 'hips', 'wrists_elbows'] },
  { id: 'mon-6', day: 'Mon', time: '4:30 PM', category: 'Gymnastics', wodName: 'Pull-Up Progressions', coach: 'Coach Mo', capacity: 10, targetZones: ['shoulders', 'wrists_elbows'] },
  { id: 'mon-7', day: 'Mon', time: '5:30 PM', category: 'WOD', wodName: 'Helen', coach: 'Coach Alex', capacity: 16, targetZones: ['shoulders', 'lower_back', 'knees'] },
  { id: 'mon-8', day: 'Mon', time: '6:30 PM', category: 'Conditioning', wodName: 'Assault Bike Intervals', coach: 'Coach Rae', capacity: 14, targetZones: ['knees', 'hips'] },

  // Tuesday
  { id: 'tue-1', day: 'Tue', time: '5:00 AM', category: 'Strength', wodName: 'Deadlift 5x3', coach: 'Coach Alex', capacity: 12, targetZones: ['lower_back', 'hips', 'wrists_elbows'] },
  { id: 'tue-2', day: 'Tue', time: '6:00 AM', category: 'WOD', wodName: 'Grace', coach: 'Coach Mo', capacity: 16, targetZones: ['shoulders', 'lower_back', 'wrists_elbows', 'knees'] },
  { id: 'tue-3', day: 'Tue', time: '7:00 AM', category: 'Skills', wodName: 'Handstand Walk Practice', coach: 'Coach Rae', capacity: 10, targetZones: ['shoulders', 'wrists_elbows'] },
  { id: 'tue-4', day: 'Tue', time: '9:00 AM', category: 'Endurance', wodName: 'Run Intervals', coach: 'Coach Alex', capacity: 12, targetZones: ['knees', 'ankles'] },
  { id: 'tue-5', day: 'Tue', time: '12:00 PM', category: 'Olympic Lifting', wodName: 'Clean & Jerk Technique', coach: 'Coach Mo', capacity: 10, targetZones: ['shoulders', 'wrists_elbows', 'lower_back', 'knees'] },
  { id: 'tue-6', day: 'Tue', time: '4:30 PM', category: 'Gymnastics', wodName: 'Muscle-Up Progressions', coach: 'Coach Rae', capacity: 10, targetZones: ['shoulders', 'wrists_elbows'] },
  { id: 'tue-7', day: 'Tue', time: '5:30 PM', category: 'WOD', wodName: 'Diane', coach: 'Coach Alex', capacity: 14, targetZones: ['lower_back', 'shoulders', 'wrists_elbows'] },
  { id: 'tue-8', day: 'Tue', time: '6:30 PM', category: 'Conditioning', wodName: 'Ski Erg + Core', coach: 'Coach Mo', capacity: 12, targetZones: ['lower_back', 'shoulders'] },

  // Wednesday
  { id: 'wed-1', day: 'Wed', time: '5:00 AM', category: 'Strength', wodName: 'Front Squat 5x3', coach: 'Coach Rae', capacity: 12, targetZones: ['knees', 'hips', 'lower_back'] },
  { id: 'wed-2', day: 'Wed', time: '6:00 AM', category: 'WOD', wodName: 'Cindy', coach: 'Coach Alex', capacity: 16, targetZones: ['shoulders', 'wrists_elbows', 'knees'] },
  { id: 'wed-3', day: 'Wed', time: '7:00 AM', category: 'Skills', wodName: 'Kipping Pull-Up Clinic', coach: 'Coach Mo', capacity: 10, targetZones: ['shoulders', 'wrists_elbows'] },
  { id: 'wed-4', day: 'Wed', time: '9:00 AM', category: 'Endurance', wodName: '2K Row Time Trial', coach: 'Coach Rae', capacity: 10, targetZones: ['lower_back', 'knees'] },
  { id: 'wed-5', day: 'Wed', time: '12:00 PM', category: 'Olympic Lifting', wodName: 'Power Clean EMOM', coach: 'Coach Alex', capacity: 12, targetZones: ['shoulders', 'lower_back', 'wrists_elbows'] },
  { id: 'wed-6', day: 'Wed', time: '4:30 PM', category: 'Gymnastics', wodName: 'Toes-to-Bar Progressions', coach: 'Coach Mo', capacity: 10, targetZones: ['shoulders', 'wrists_elbows'] },
  { id: 'wed-7', day: 'Wed', time: '5:30 PM', category: 'WOD', wodName: 'Annie', coach: 'Coach Alex', capacity: 14, targetZones: ['knees', 'ankles'] },
  { id: 'wed-8', day: 'Wed', time: '6:30 PM', category: 'Conditioning', wodName: 'Bike + Burpee Intervals', coach: 'Coach Rae', capacity: 14, targetZones: ['knees', 'shoulders'] },

  // Thursday
  { id: 'thu-1', day: 'Thu', time: '5:00 AM', category: 'Strength', wodName: 'Overhead Press 5x5', coach: 'Coach Alex', capacity: 12, targetZones: ['shoulders', 'wrists_elbows'] },
  { id: 'thu-2', day: 'Thu', time: '6:00 AM', category: 'WOD', wodName: 'DT', coach: 'Coach Mo', capacity: 16, targetZones: ['lower_back', 'shoulders', 'wrists_elbows'] },
  { id: 'thu-3', day: 'Thu', time: '7:00 AM', category: 'Skills', wodName: 'Ring Dip Progressions', coach: 'Coach Rae', capacity: 10, targetZones: ['shoulders', 'wrists_elbows'] },
  { id: 'thu-4', day: 'Thu', time: '9:00 AM', category: 'Endurance', wodName: 'Trail Run', coach: 'Coach Alex', capacity: 12, targetZones: ['knees', 'ankles', 'lower_back'] },
  { id: 'thu-5', day: 'Thu', time: '12:00 PM', category: 'Olympic Lifting', wodName: 'Snatch Balance', coach: 'Coach Mo', capacity: 10, targetZones: ['shoulders', 'wrists_elbows', 'lower_back'] },
  { id: 'thu-6', day: 'Thu', time: '4:30 PM', category: 'Gymnastics', wodName: 'Handstand Push-Up Practice', coach: 'Coach Rae', capacity: 10, targetZones: ['shoulders', 'wrists_elbows'] },
  { id: 'thu-7', day: 'Thu', time: '5:30 PM', category: 'WOD', wodName: 'Karen', coach: 'Coach Alex', capacity: 16, targetZones: ['shoulders', 'knees', 'lower_back'] },
  { id: 'thu-8', day: 'Thu', time: '6:30 PM', category: 'Conditioning', wodName: 'Row/Bike Chipper', coach: 'Coach Mo', capacity: 14, targetZones: ['knees', 'lower_back'] },

  // Friday
  { id: 'fri-1', day: 'Fri', time: '5:00 AM', category: 'Strength', wodName: 'Deadlift Max Effort', coach: 'Coach Rae', capacity: 12, targetZones: ['lower_back', 'hips', 'wrists_elbows'] },
  { id: 'fri-2', day: 'Fri', time: '6:00 AM', category: 'WOD', wodName: 'Murph (Partner)', coach: 'Coach Rae', capacity: 14, targetZones: ['shoulders', 'knees', 'ankles'] },
  { id: 'fri-3', day: 'Fri', time: '7:00 AM', category: 'Skills', wodName: 'Barbell Cycling Clinic', coach: 'Coach Alex', capacity: 10, targetZones: ['lower_back', 'wrists_elbows'] },
  { id: 'fri-4', day: 'Fri', time: '9:00 AM', category: 'Endurance', wodName: 'Row/Run Ladder', coach: 'Coach Mo', capacity: 12, targetZones: ['knees', 'ankles', 'lower_back'] },
  { id: 'fri-5', day: 'Fri', time: '12:00 PM', category: 'Olympic Lifting', wodName: 'Barbell Complex + EMOM', coach: 'Coach Alex', capacity: 12, targetZones: ['lower_back', 'shoulders', 'wrists_elbows'] },
  { id: 'fri-6', day: 'Fri', time: '4:30 PM', category: 'Gymnastics', wodName: 'Bar Muscle-Up Skill', coach: 'Coach Rae', capacity: 10, targetZones: ['shoulders', 'wrists_elbows'] },
  { id: 'fri-7', day: 'Fri', time: '5:30 PM', category: 'WOD', wodName: 'Isabel', coach: 'Coach Mo', capacity: 16, targetZones: ['shoulders', 'wrists_elbows'] },
  { id: 'fri-8', day: 'Fri', time: '6:30 PM', category: 'Conditioning', wodName: 'Sled Push + Core', coach: 'Coach Alex', capacity: 14, targetZones: ['lower_back', 'knees'] },

  // Saturday
  { id: 'sat-1', day: 'Sat', time: '7:00 AM', category: 'Strength', wodName: 'Squat Clinic', coach: 'Coach Rae', capacity: 12, targetZones: ['knees', 'hips', 'lower_back'] },
  { id: 'sat-2', day: 'Sat', time: '8:00 AM', category: 'WOD', wodName: 'Team WOD', coach: 'Coach Rae', capacity: 20, targetZones: ['shoulders', 'knees'] },
  { id: 'sat-3', day: 'Sat', time: '9:00 AM', category: 'Skills', wodName: 'Open Gym Skills', coach: 'Coach Mo', capacity: 12, targetZones: ['shoulders', 'wrists_elbows'] },
  { id: 'sat-4', day: 'Sat', time: '10:00 AM', category: 'Endurance', wodName: 'Community Row', coach: 'Coach Alex', capacity: 14, targetZones: ['lower_back', 'knees'] },
  { id: 'sat-5', day: 'Sat', time: '11:00 AM', category: 'Olympic Lifting', wodName: 'Oly Lifting Open Session', coach: 'Coach Mo', capacity: 10, targetZones: ['shoulders', 'wrists_elbows', 'lower_back'] },
  { id: 'sat-6', day: 'Sat', time: '12:00 PM', category: 'Gymnastics', wodName: 'Gymnastics Open Session', coach: 'Coach Rae', capacity: 10, targetZones: ['shoulders', 'wrists_elbows'] },
  { id: 'sat-7', day: 'Sat', time: '1:00 PM', category: 'WOD', wodName: 'Saturday Partner WOD', coach: 'Coach Alex', capacity: 20, targetZones: ['knees', 'shoulders', 'lower_back'] },
  { id: 'sat-8', day: 'Sat', time: '2:00 PM', category: 'Conditioning', wodName: 'Finisher Circuit', coach: 'Coach Mo', capacity: 14, targetZones: ['knees', 'shoulders'] },
]
