export interface TimeZoneOverlapInput {
  offsetA: number; // Region A UTC offset (e.g. +9)
  offsetB: number; // Region B UTC offset (e.g. -5)
  startHour: number; // Work start hour (0–23, in Region A)
  endHour: number; // Work end hour (0–23, in Region A)
}

export interface TimeZoneOverlapResult {
  overlapHours: number; // Duration in hours
  startInB: number; // Start hour in Region B
  endInB: number; // End hour in Region B
}
