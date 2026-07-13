// Mock check-ins for athletes other than the current logged-in athlete,
// so the coach dashboard has realistic data to display without requiring
// every athlete to check in manually through the UI.
export const seedReservations = [
  {
    id: 'mon-2-a2',
    classId: 'mon-2',
    athleteId: 'a2',
    checkIn: {
      feeling: 'good',
      sleepHours: 7.5,
      soreness: 2,
      painZones: [],
      symptomNote: '',
      submittedAt: '2026-07-13T10:00:00.000Z',
    },
  },
  {
    id: 'mon-2-a3',
    classId: 'mon-2',
    athleteId: 'a3',
    checkIn: {
      feeling: 'tired',
      sleepHours: 5.5,
      soreness: 3,
      painZones: [],
      symptomNote: '',
      submittedAt: '2026-07-13T10:02:00.000Z',
    },
  },
  {
    id: 'mon-5-a4',
    classId: 'mon-5',
    athleteId: 'a4',
    checkIn: {
      feeling: 'rough',
      sleepHours: 4.5,
      soreness: 4,
      painZones: ['lower_back'],
      symptomNote: 'Sharp pain in lower back during deadlifts yesterday.',
      submittedAt: '2026-07-13T10:05:00.000Z',
    },
  },
  {
    id: 'tue-2-a2',
    classId: 'tue-2',
    athleteId: 'a2',
    checkIn: null,
  },
]
