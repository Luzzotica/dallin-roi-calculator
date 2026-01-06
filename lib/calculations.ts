// Data sources:
// - $12,506/employee/year - Grammarly + Harris Poll
// - 7.47 hours/week wasted - Vantage Partners
// - $1.2 trillion annual US cost - Grammarly reporting

export const COST_PER_EMPLOYEE_PER_YEAR = 12506;
export const HOURS_WASTED_PER_WEEK = 7.47;
export const WEEKS_PER_YEAR = 52;

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

