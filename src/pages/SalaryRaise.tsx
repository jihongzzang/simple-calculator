import {useState} from "react";
import {calculateSalaryRaise} from "../calculators/salaryRaise/calculate";
import {formatSalaryRaiseResult} from "../calculators/salaryRaise/formatResult";

function SalaryRaise() {
  const [currentSalary, setCurrentSalary] = useState<string>("");
  const [offeredSalary, setOfferedSalary] = useState<string>("");
  const [resultText, setResultText] = useState<string>("");

  const handleCalculate = () => {
    const current = Number(currentSalary);
    const offered = Number(offeredSalary);

    if (!current || !offered || current <= 0 || offered <= 0) {
      setResultText("");
      return;
    }

    const result = calculateSalaryRaise({
      currentSalary: current,
      offeredSalary: offered,
    });

    const text = formatSalaryRaiseResult({currentSalary: current, offeredSalary: offered}, result);
    setResultText(text);
  };

  return (
    <>
      <title>이직 연봉 인상률 계산기 | simple-calculator</title>
      <meta name="description" content="현재 연봉과 제안 연봉을 비교해 연봉 인상률과 월 증가 금액을 계산합니다." />
      <header className="header">
        <h1>이직 연봉 인상률 계산기</h1>
        <p className="subtitle">현재 연봉과 제안 연봉을 비교해 인상률을 계산합니다.</p>
      </header>
      <main className="main">
        <section className="calculator-card">
          <input
            type="text"
            inputMode="numeric"
            placeholder="현재 연봉 (원)"
            value={currentSalary}
            onChange={(e) => {
              const value = e.target.value.replace(/[^0-9]/g, "");
              setCurrentSalary(value);
            }}
          />
          <input
            type="text"
            inputMode="numeric"
            placeholder="제안 연봉 (원)"
            value={offeredSalary}
            onChange={(e) => {
              const value = e.target.value.replace(/[^0-9]/g, "");
              setOfferedSalary(value);
            }}
          />

          <button onClick={handleCalculate}>계산하기</button>
        </section>

        {resultText && (
          <section className="result-card">
            <strong>{resultText}</strong>
          </section>
        )}
      </main>
    </>
  );
}

export default SalaryRaise;
