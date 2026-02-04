import type {TimeZoneOverlapInput, TimeZoneOverlapResult} from "./types";

export function formatTimeZoneOverlapResult(input: TimeZoneOverlapInput, result: TimeZoneOverlapResult): string {
  const {startHour, endHour} = input;

  return `Working hours ${startHour}:00–${endHour}:00 in Region A correspond to ${result.startInB}:00–${result.endInB}:00 in Region B (${result.overlapHours} hours).`;
}
