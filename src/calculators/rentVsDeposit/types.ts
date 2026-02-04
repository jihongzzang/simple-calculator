export interface RentVsDepositInput {
  deposit: number; // 전세금
  monthlyRent: number; // 월세
  interestRate: number; // 연 이자율 (%)
}

export interface RentVsDepositResult {
  annualDepositCost: number; // 전세 연간 기회비용
  annualRentCost: number; // 월세 연간 비용
  diff: number; // 전세 - 월세 (음수면 전세 유리)
}
