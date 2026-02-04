export interface SalaryInput {
  annualSalary: number; // 연봉 (원)
}

export interface SalaryResult {
  annualAfterTax: number; // 세후 연봉
  monthlyTakeHome: number; // 월 실수령액
  deductions: {
    incomeTax: number;
    localTax: number;
    pension: number;
    health: number;
    employment: number;
  };
}
