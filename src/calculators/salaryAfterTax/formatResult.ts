import type {SalaryInput, SalaryResult} from "./types";

export function formatResult(input: SalaryInput, result: SalaryResult): string {
  const salary = input.annualSalary.toLocaleString();
  const monthly = result.monthlyTakeHome.toLocaleString();

  return `연봉 ${salary}원 기준, 월 실수령액은 약 ${monthly}원입니다.`;
}
