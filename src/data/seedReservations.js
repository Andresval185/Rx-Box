// Mock check-ins for athletes other than the current logged-in athlete,
// so the coach dashboard has realistic data to display without requiring
// every athlete to check in manually through the UI.
export const seedReservations = [
  {
    id: 'c1-a2',
    classId: 'c1',
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
    id: 'c1-a3',
    classId: 'c1',
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
    id: 'c2-a4',
    classId: 'c2',
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
    id: 'c5-a2',
    classId: 'c5',
    athleteId: 'a2',
    checkIn: null,
  },
]
