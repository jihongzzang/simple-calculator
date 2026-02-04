import {useEffect, useState} from "react";
import {calculateRentVsDeposit} from "../calculators/rentVsDeposit/calculate";
import {formatRentVsDepositResult} from "../calculators/rentVsDeposit/formatResult";
import Footer from "../components/Footer";

function RentVsDeposit() {
  const [deposit, setDeposit] = useState<string>("");
  const [monthlyRent, setMonthlyRent] = useState<string>("");
  const [interestRate, setInterestRate] = useState<string>("");
  const [resultText, setResultText] = useState<string>("");

  const handleCalculate = () => {
    const d = Number(deposit);
    const r = Number(monthlyRent);
    const rate = Number(interestRate);

    if (!d || !r || !rate || d <= 0 || r <= 0 || rate <= 0) {
      setResultText("");
      return;
    }

    const result = calculateRentVsDeposit({
      deposit: d,
      monthlyRent: r,
      interestRate: rate,
    });

    setResultText(formatRentVsDepositResult({deposit: d, monthlyRent: r, interestRate: rate}, result));
  };

  useEffect(() => {
    document.title = "Rent vs Deposit Calculator | Annual Cost Comparison";
  }, []);

  return (
    <>
      <header className="header">
        <h1>전세 vs 월세 비교 계산기</h1>
        <p className="subtitle">전세금 이자와 월세 비용을 비교해 더 유리한 선택을 계산합니다.</p>
      </header>

      <main className="main">
        <section className="calculator-card">
          <input
            type="text"
            inputMode="numeric"
            placeholder="전세금 (원)"
            value={deposit}
            onChange={(e) => setDeposit(e.target.value.replace(/[^0-9]/g, ""))}
          />

          <input
            type="text"
            inputMode="numeric"
            placeholder="월세 (원)"
            value={monthlyRent}
            onChange={(e) => setMonthlyRent(e.target.value.replace(/[^0-9]/g, ""))}
          />

          <input
            type="text"
            inputMode="decimal"
            placeholder="연 이자율 (%)"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value.replace(/[^0-9.]/g, ""))}
          />

          <button onClick={handleCalculate}>계산하기</button>
        </section>

        {resultText && (
          <section className="result-card">
            <strong>{resultText}</strong>
            <p style={{marginTop: 8, fontSize: 14, color: "#9ca3af"}}>※ 전세금의 기회비용은 단순 이자 기준으로 계산됩니다.</p>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

export default RentVsDeposit;
