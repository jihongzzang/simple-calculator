import type {SalaryRaiseInput, SalaryRaiseResult} from "./types";

export function formatSalaryRaiseResult(input: SalaryRaiseInput, result: SalaryRaiseResult): string {
  const {currentSalary, offeredSalary} = input;

  const rate = result.raiseRate.toLocaleString();
  const monthly = Math.abs(result.monthlyDiff).toLocaleString();
  const current = currentSalary.toLocaleString();
  const offered = offeredSalary.toLocaleString();

  if (result.annualDiff === 0) {
    return `현재 연봉 ${current}원과 동일한 조건입니다.`;
  }

  if (result.annualDiff > 0) {
    return `현재 연봉 ${current}원에서 ${offered}원으로 ${rate}% 인상되며, 월 기준 약 ${monthly}원 증가합니다.`;
  }

  return `현재 연봉 ${current}원에서 ${offered}원으로 ${rate}% 감소하며, 월 기준 약 ${monthly}원 감소합니다.`;
}
