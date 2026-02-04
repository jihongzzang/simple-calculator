import type {SalaryInput, SalaryResult} from "./types";

/**
 * ⚠️ 대략 계산용
 * - 정확한 세법 구현 아님
 * - SEO/판단용 MVP 모델
 */
export function calculateSalary(input: SalaryInput): SalaryResult {
  const annual = input.annualSalary;

  // 대략 비율 (2024 기준 평균치)
  const incomeTaxRate = 0.06; // 소득세
  const localTaxRate = 0.006; // 지방소득세
  const pensionRate = 0.045; // 국민연금
  const healthRate = 0.035; // 건강보험
  const employmentRate = 0.009; // 고용보험

  const incomeTax = annual * incomeTaxRate;
  const localTax = annual * localTaxRate;
  const pension = annual * pensionRate;
  const health = annual * healthRate;
  const employment = annual * employmentRate;

  const totalDeduction = incomeTax + localTax + pension + health + employment;

  const annualAfterTax = Math.max(annual - totalDeduction, 0);
  const monthlyTakeHome = Math.floor(annualAfterTax / 12);

  return {
    annualAfterTax: Math.floor(annualAfterTax),
    monthlyTakeHome,
    deductions: {
      incomeTax: Math.floor(incomeTax),
      localTax: Math.floor(localTax),
      pension: Math.floor(pension),
      health: Math.floor(health),
      employment: Math.floor(employment),
    },
  };
}
