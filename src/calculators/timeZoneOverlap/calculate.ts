import type {TimeZoneOverlapInput, TimeZoneOverlapResult} from "./types";

/**
 * 단순 오버랩 계산
 * - 기준 지역(A)의 근무시간을
 * - 지역 B 시간대로 변환
 * - 0~24 범위로 정규화
 */
export function calculateTimeZoneOverlap(input: TimeZoneOverlapInput): TimeZoneOverlapResult {
  const {offsetA, offsetB, startHour, endHour} = input;

  const diff = offsetB - offsetA;

  let startInB = startHour + diff;
  let endInB = endHour + diff;

  // 0~24로 정규화
  startInB = ((startInB % 24) + 24) % 24;
  endInB = ((endInB % 24) + 24) % 24;

  let overlapHours = endHour - startHour;
  if (overlapHours < 0) overlapHours += 24;

  return {
    overlapHours,
    startInB,
    endInB,
  };
}
