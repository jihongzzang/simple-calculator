import type {RentVsDepositInput, RentVsDepositResult} from "./types";

/**
 * 단순 비교 모델
 * - 전세 비용 = 전세금 × 이자율
 * - 월세 비용 = 월세 × 12
 */
export function calculateRentVsDeposit(input: RentVsDepositInput): RentVsDepositResult {
  const {deposit, monthlyRent, interestRate} = input;

  const annualDepositCost = deposit * (interestRate / 100);
  const annualRentCost = monthlyRent * 12;

  const diff = annualDepositCost - annualRentCost;

  return {
    annualDepositCost: Math.floor(annualDepositCost),
    annualRentCost: Math.floor(annualRentCost),
    diff: Math.floor(diff),
  };
}
