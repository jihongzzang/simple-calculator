import {useState} from "react";
import {calculateSalary} from "../calculators/salaryAfterTax/calculate";
import {formatResult} from "../calculators/salaryAfterTax/formatResult";

function SalaryAfterTax() {
  const [annualSalary, setAnnualSalary] = useState<string>("");
  const [resultText, setResultText] = useState<string>("");

  const handleCalculate = () => {
    const salary = Number(annualSalary);

    if (!salary || salary <= 0) {
      setResultText("");
      return;
    }

    const result = calculateSalary({annualSalary: salary});
    const text = formatResult({annualSalary: salary}, result);
    setResultText(text);
  };

  return (
    <>
      <title>연봉 실수령액 계산기 | simple-calculator</title>
      <meta name="description" content="연봉을 입력하면 세후 월 실수령액을 바로 계산합니다. 평균 세율 기준의 참고용 계산기입니다." />
      <header className="header">
        <h1>연봉 실수령액 계산기</h1>
        <p className="subtitle">연봉을 입력하면 세후 월 실수령액을 계산합니다.</p>
      </header>
      <main className="main">
        <section className="calculator-card">
          <input
            type="text"
            inputMode="numeric"
            placeholder="연봉 (원)"
            value={annualSalary}
            onChange={(e) => setAnnualSalary(e.target.value.replace(/[^0-9]/g, ""))}
          />

          <button onClick={handleCalculate}>계산하기</button>
        </section>

        {resultText && (
          <section className="result-card">
            <strong>{resultText}</strong>
            <p
              style={{
                marginTop: 8,
                fontSize: 14,
                color: "#9ca3af",
              }}
            >
              ※ 본 결과는 평균 세율을 적용한 참고용 계산입니다.
            </p>
          </section>
        )}
      </main>
    </>
  );
}

export default SalaryAfterTax;
