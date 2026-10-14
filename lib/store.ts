import { create } from 'zustand';

export type EventType = 'conference' | 'private';
export type ChallengeType = 'miscommunication' | 'conflict' | 'low-trust' | 'burnout';
export type LocationType = 'us-canada' | 'europe' | 'asia-australia' | 'africa' | 'south-america';

export interface BookingState {
  // Step data
  eventType: EventType | null;
  sessions: number;
  duration: number; // in minutes
  days: number;
  location: LocationType | null;
  eventDate: string | null; // ISO string for serialization
  dateConfidence: number;
  challenge: ChallengeType | null;
  challengeRating: number;
  audienceSize: number;
  // Contact info
  name: string;
  email: string;
  phone: string;
  // Navigation
  currentStep: number;
}

export interface BookingActions {
  setEventType: (type: EventType) => void;
  setSessions: (sessions: number) => void;
  setDuration: (duration: number) => void;
  setDays: (days: number) => void;
  setLocation: (location: LocationType) => void;
  setEventDate: (date: string | null) => void;
  setDateConfidence: (confidence: number) => void;
  setChallenge: (challenge: ChallengeType) => void;
  setChallengeRating: (rating: number) => void;
  setAudienceSize: (size: number) => void;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPhone: (phone: string) => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  reset: () => void;
}

const initialState: BookingState = {
  eventType: null,
  sessions: 1,
  duration: 60, // default 60 minutes
  days: 1,
  location: null,
  eventDate: null,
  dateConfidence: 5,
  challenge: null,
  challengeRating: 5,
  audienceSize: 50,
  name: '',
  email: '',
  phone: '',
  currentStep: 0,
};

export const TOTAL_STEPS = 10;

export const useBookingStore = create<BookingState & BookingActions>((set) => ({
  ...initialState,

  setEventType: (type) => set({ eventType: type }),
  setSessions: (sessions) => set({ sessions }),
  setDuration: (duration) => set({ duration }),
  setDays: (days) => set({ days }),
  setLocation: (location) => set({ location }),
  setEventDate: (date) => set({ eventDate: date }),
  setDateConfidence: (confidence) => set({ dateConfidence: confidence }),
  setChallenge: (challenge) => set({ challenge }),
  setChallengeRating: (rating) => set({ challengeRating: rating }),
  setAudienceSize: (size) => set({ audienceSize: size }),
  setName: (name) => set({ name }),
  setEmail: (email) => set({ email }),
  setPhone: (phone) => set({ phone }),

  nextStep: () => set((state) => ({ 
    currentStep: Math.min(state.currentStep + 1, TOTAL_STEPS - 1) 
  })),
  prevStep: () => set((state) => ({ 
    currentStep: Math.max(state.currentStep - 1, 0) 
  })),
  goToStep: (step) => set({ currentStep: Math.max(0, Math.min(step, TOTAL_STEPS - 1)) }),
  reset: () => set(initialState),
}));

// Challenge display names
export const CHALLENGE_LABELS: Record<ChallengeType, string> = {
  'miscommunication': 'Miscommunication',
  'conflict': 'Conflict',
  'low-trust': 'Low Trust',
  'burnout': 'Burnout',
};

// Positive rating questions for each challenge (10 = good, 1 = bad)
export const CHALLENGE_RATING_QUESTIONS: Record<ChallengeType, string> = {
  'miscommunication': 'How well does your team communicate?',
  'conflict': 'How well does your team resolve conflict?',
  'low-trust': 'How strong is trust within your team?',
  'burnout': 'How energized and engaged is your team?',
};

// Location display names
export const LOCATION_LABELS: Record<LocationType, string> = {
  'us-canada': 'US / Canada',
  'europe': 'Europe',
  'asia-australia': 'Asia / Australia',
  'africa': 'Africa',
  'south-america': 'South America / Latin America',
};

// Duration options
export const DURATION_OPTIONS = [
  { value: 45, label: '45 minutes' },
  { value: 60, label: '60 minutes' },
  { value: 90, label: '90 minutes' },
  { value: 120, label: '2 hours' },
  { value: 180, label: '3 hours' },
  { value: 240, label: '4 hours' },
  { value: 480, label: '8 hours (Full day)' },
];

// Days options
export const DAYS_OPTIONS = [
  { value: 1, label: 'One day' },
  { value: 2, label: '2 days' },
  { value: 3, label: '3 days' },
  { value: 4, label: '4 days' },
];

