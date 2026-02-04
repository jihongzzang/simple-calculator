export interface SalaryRaiseInput {
  currentSalary: number; // 현재 연봉
  offeredSalary: number; // 제안 연봉
}

export interface SalaryRaiseResult {
  raiseRate: number; // 인상률 (%)
  annualDiff: number; // 연봉 차이
  monthlyDiff: number; // 월 차이
}
