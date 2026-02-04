import type {RentVsDepositInput, RentVsDepositResult} from "./types";

export function formatRentVsDepositResult(input: RentVsDepositInput, result: RentVsDepositResult): string {
  const deposit = input.deposit.toLocaleString();
  const rent = input.monthlyRent.toLocaleString();
  const rate = input.interestRate;
  const depositCost = result.annualDepositCost.toLocaleString();
  const rentCost = result.annualRentCost.toLocaleString();
  const diffAbs = Math.abs(result.diff).toLocaleString();

  if (result.diff < 0) {
    return `전세금 ${deposit}원(이자율 ${rate}%), 월세 ${rent}원 기준 → 전세가 유리합니다. (전세 연 ${depositCost}원 vs 월세 연 ${rentCost}원 · 연 ${diffAbs}원 절감)`;
  }

  if (result.diff > 0) {
    return `전세금 ${deposit}원(이자율 ${rate}%), 월세 ${rent}원 기준 → 월세가 유리합니다. (전세 연 ${depositCost}원 vs 월세 연 ${rentCost}원 · 연 ${diffAbs}원 절감)`;
  }

  return `전세금 ${deposit}원(이자율 ${rate}%), 월세 ${rent}원 기준 → 전세와 월세 비용이 동일합니다. (연 ${depositCost}원)`;
}
