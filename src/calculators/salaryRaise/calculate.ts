import type {SalaryRaiseInput, SalaryRaiseResult} from "./types";

/**
 * 이직 연봉 인상률 계산
 * - 단순 수학 계산
 * - 세금 고려 ❌ (의사결정용)
 */
export function calculateSalaryRaise(input: SalaryRaiseInput): SalaryRaiseResult {
  const {currentSalary, offeredSalary} = input;

  if (currentSalary <= 0 || offeredSalary <= 0) {
    return {
      raiseRate: 0,
      annualDiff: 0,
      monthlyDiff: 0,
    };
  }

  const annualDiff = offeredSalary - currentSalary;
  const raiseRate = (annualDiff / currentSalary) * 100;
  const monthlyDiff = annualDiff / 12;

  return {
    raiseRate: Math.round(raiseRate * 10) / 10, // 소수 1자리
    annualDiff: Math.floor(annualDiff),
    monthlyDiff: Math.floor(monthlyDiff),
  };
}
