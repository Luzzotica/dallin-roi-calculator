// Data sources:
// - $12,506/employee/year - Grammarly + Harris Poll
// - 7.47 hours/week wasted - Vantage Partners
// - $1.2 trillion annual US cost - Grammarly reporting
// - Conflict/Burnout turnover costs: $4,000-$21,000/year

import type { ChallengeType, LocationType } from './store';

export const COST_PER_EMPLOYEE_PER_YEAR = 12506;
export const HOURS_WASTED_PER_WEEK = 7.47;
export const WEEKS_PER_YEAR = 52;

// Turnover-related challenge costs (conflict, burnout)
export const TURNOVER_COST_MIN = 4000;
export const TURNOVER_COST_MAX = 21000;
export const TURNOVER_COST_AVG = (TURNOVER_COST_MIN + TURNOVER_COST_MAX) / 2; // $12,500

// Pricing constants
export const BASE_HOURLY_RATE = 2000;
export const MULTI_DAY_BONUS = 1500;

// Location multipliers for pricing
export const LOCATION_MULTIPLIERS: Record<LocationType, number> = {
  'us-canada': 1.0,
  'europe': 1.3,
  'asia-australia': 1.4,
  'africa': 1.5,
  'south-america': 1.3,
};

// Challenge cost models
export type ChallengeCostModel = 'productivity' | 'turnover';

export const CHALLENGE_COST_MODELS: Record<ChallengeType, ChallengeCostModel> = {
  'miscommunication': 'productivity',
  'low-trust': 'productivity',
  'conflict': 'turnover',
  'burnout': 'turnover',
};

export type ServiceType = "keynote" | "workshop" | "training";

export interface ServiceInfo {
  name: string;
  description: string;
  improvementRate: number; // Conservative improvement percentage
  duration: string;
}

export const SERVICE_INFO: Record<ServiceType, ServiceInfo> = {
  keynote: {
    name: "Keynote",
    description: "1-2 hour inspiring presentation for large audiences",
    improvementRate: 0.10, // 10% improvement
    duration: "1-2 hours",
  },
  workshop: {
    name: "Workshop",
    description: "Half or full-day interactive session with hands-on exercises",
    improvementRate: 0.12, // 12% improvement
    duration: "Half/Full day",
  },
  training: {
    name: "Staff Training",
    description: "Multi-session program for deep implementation and culture shift",
    improvementRate: 0.15, // 15% improvement
    duration: "Multi-session",
  },
};

export interface ROICalculation {
  annualCostOfPoorCommunication: number;
  potentialAnnualSavings: number;
  hoursRecoveredPerWeek: number;
  hoursRecoveredPerYear: number;
  monthlyBreakdown: MonthlyDataPoint[];
}

export interface MonthlyDataPoint {
  month: string;
  cumulativeSavings: number;
}

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export function calculateROI(
  teamSize: number,
  serviceType: ServiceType
): ROICalculation {
  const service = SERVICE_INFO[serviceType];
  
  // Total annual cost of poor communication for this team
  const annualCostOfPoorCommunication = teamSize * COST_PER_EMPLOYEE_PER_YEAR;
  
  // Potential savings based on improvement rate
  const potentialAnnualSavings = annualCostOfPoorCommunication * service.improvementRate;
  
  // Hours calculations
  const totalHoursWastedPerWeek = teamSize * HOURS_WASTED_PER_WEEK;
  const hoursRecoveredPerWeek = totalHoursWastedPerWeek * service.improvementRate;
  const hoursRecoveredPerYear = hoursRecoveredPerWeek * WEEKS_PER_YEAR;
  
  // Monthly breakdown for chart (cumulative savings over the year)
  const monthlySavings = potentialAnnualSavings / 12;
  const monthlyBreakdown: MonthlyDataPoint[] = MONTHS.map((month, index) => ({
    month,
    cumulativeSavings: Math.round(monthlySavings * (index + 1)),
  }));
  
  return {
    annualCostOfPoorCommunication: Math.round(annualCostOfPoorCommunication),
    potentialAnnualSavings: Math.round(potentialAnnualSavings),
    hoursRecoveredPerWeek: Math.round(hoursRecoveredPerWeek * 10) / 10,
    hoursRecoveredPerYear: Math.round(hoursRecoveredPerYear),
    monthlyBreakdown,
  };
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US").format(value);
}

// ==========================================
// NEW BOOKING WIZARD CALCULATIONS
// ==========================================

/**
 * Get improvement rate based on challenge severity rating (1-10)
 * Lower ratings (worse problems) = higher potential improvement
 */
export function getImprovementRate(rating: number): number {
  if (rating >= 1 && rating <= 3) return 0.10; // 10% - It's horrible
  if (rating >= 4 && rating <= 6) return 0.07; // 7% - It's alright
  if (rating >= 7 && rating <= 9) return 0.03; // 3% - We are great!
  return 0.01; // 1% - Almost perfect (rating = 10)
}

/**
 * Get the severity label for a given rating (positive framing: 10 = best, 1 = worst)
 */
export function getSeverityLabel(rating: number): string {
  if (rating >= 1 && rating <= 3) return "Needs Improvement";
  if (rating >= 4 && rating <= 6) return "Room to Grow";
  if (rating >= 7 && rating <= 9) return "Doing Well";
  return "Excellent";
}

/**
 * Calculate the annual cost per employee based on challenge type
 */
export function getChallengeCostPerEmployee(challenge: ChallengeType): number {
  const costModel = CHALLENGE_COST_MODELS[challenge];
  
  if (costModel === 'productivity') {
    // Miscommunication, Low Trust - use Grammarly study data
    return COST_PER_EMPLOYEE_PER_YEAR;
  } else {
    // Conflict, Burnout - use turnover cost average
    return TURNOVER_COST_AVG;
  }
}

/**
 * Calculate ROI based on challenge type, severity rating, and audience size
 */
export interface ChallengeROICalculation {
  annualCostOfChallenge: number;
  potentialAnnualSavings: number;
  improvementRate: number;
  costPerEmployee: number;
  hoursRecoveredPerWeek: number;
  hoursRecoveredPerYear: number;
  monthlyBreakdown: MonthlyDataPoint[];
}

export function calculateChallengeROI(
  challenge: ChallengeType,
  rating: number,
  audienceSize: number
): ChallengeROICalculation {
  const improvementRate = getImprovementRate(rating);
  const costPerEmployee = getChallengeCostPerEmployee(challenge);
  
  // Total annual cost
  const annualCostOfChallenge = audienceSize * costPerEmployee;
  
  // Potential savings
  const potentialAnnualSavings = annualCostOfChallenge * improvementRate;
  
  // Hours calculations (use productivity model for hours)
  const totalHoursWastedPerWeek = audienceSize * HOURS_WASTED_PER_WEEK;
  const hoursRecoveredPerWeek = totalHoursWastedPerWeek * improvementRate;
  const hoursRecoveredPerYear = hoursRecoveredPerWeek * WEEKS_PER_YEAR;
  
  // Monthly breakdown
  const monthlySavings = potentialAnnualSavings / 12;
  const monthlyBreakdown: MonthlyDataPoint[] = MONTHS.map((month, index) => ({
    month,
    cumulativeSavings: Math.round(monthlySavings * (index + 1)),
  }));
  
  return {
    annualCostOfChallenge: Math.round(annualCostOfChallenge),
    potentialAnnualSavings: Math.round(potentialAnnualSavings),
    improvementRate,
    costPerEmployee,
    hoursRecoveredPerWeek: Math.round(hoursRecoveredPerWeek * 10) / 10,
    hoursRecoveredPerYear: Math.round(hoursRecoveredPerYear),
    monthlyBreakdown,
  };
}

/**
 * Calculate event price based on duration, location, sessions, and days
 */
export interface EventPriceCalculation {
  basePrice: number;
  locationMultiplier: number;
  multiDayBonus: number;
  totalPrice: number;
  priceRange: { min: number; max: number };
  priceTier: 'discounted' | 'standard' | 'premium';
}

export function calculateEventPrice(
  durationMinutes: number,
  location: LocationType,
  sessions: number,
  days: number
): EventPriceCalculation {
  const hours = durationMinutes / 60;
  const locationMultiplier = LOCATION_MULTIPLIERS[location];
  
  // Base price: hours × sessions × base rate
  const basePrice = hours * sessions * BASE_HOURLY_RATE;
  
  // Apply location multiplier
  const priceWithLocation = basePrice * locationMultiplier;
  
  // Add multi-day bonus (per additional day)
  const additionalDays = Math.max(0, days - 1);
  const multiDayBonus = additionalDays * MULTI_DAY_BONUS;
  
  const totalPrice = priceWithLocation + multiDayBonus;
  
  // Determine price tier and range
  let priceTier: 'discounted' | 'standard' | 'premium';
  let priceRange: { min: number; max: number };
  
  if (totalPrice < 7000) {
    priceTier = 'discounted';
    priceRange = { min: 4000, max: 7000 };
  } else if (totalPrice <= 10000) {
    priceTier = 'standard';
    priceRange = { min: 7000, max: 10000 };
  } else {
    priceTier = 'premium';
    priceRange = { min: 10000, max: 20000 };
  }
  
  return {
    basePrice: Math.round(basePrice),
    locationMultiplier,
    multiDayBonus,
    totalPrice: Math.round(totalPrice),
    priceRange,
    priceTier,
  };
}

/**
 * Get price tier description
 */
export function getPriceTierDescription(tier: 'discounted' | 'standard' | 'premium'): string {
  switch (tier) {
    case 'discounted':
      return 'Discounted pricing is selectively available to organizations or causes Dallin believes in and wants to support.';
    case 'standard':
      return 'Standard rate for conference keynotes, staff trainings, or corporate/leadership gatherings.';
    case 'premium':
      return 'Premium pricing for deeply customized content, multi-day programs, major conferences, and international engagements.';
  }
}

