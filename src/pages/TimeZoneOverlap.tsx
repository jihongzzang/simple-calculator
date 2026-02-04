import {useEffect, useState} from "react";
import {calculateTimeZoneOverlap} from "../calculators/timeZoneOverlap/calculate";
import {formatTimeZoneOverlapResult} from "../calculators/timeZoneOverlap/formatResult";
import Footer from "../components/Footer";

function TimeZoneOverlap() {
  const [offsetA, setOffsetA] = useState<string>("");
  const [offsetB, setOffsetB] = useState<string>("");
  const [startHour, setStartHour] = useState<string>("");
  const [endHour, setEndHour] = useState<string>("");
  const [resultText, setResultText] = useState<string>("");

  const handleCalculate = () => {
    const a = Number(offsetA);
    const b = Number(offsetB);
    const s = Number(startHour);
    const e = Number(endHour);

    if (isNaN(a) || isNaN(b) || isNaN(s) || isNaN(e) || s < 0 || s > 23 || e < 0 || e > 23) {
      setResultText("");
      return;
    }

    const result = calculateTimeZoneOverlap({
      offsetA: a,
      offsetB: b,
      startHour: s,
      endHour: e,
    });

    setResultText(formatTimeZoneOverlapResult({offsetA: a, offsetB: b, startHour: s, endHour: e}, result));
  };

  useEffect(() => {
    document.title = "Time Zone Overlap Calculator | Working Hours Converter";
  }, []);

  return (
    <>
      <header className="header">
        <h1>Time Zone Overlap Calculator</h1>
        <p className="subtitle">Convert working hours across two regions using UTC offsets.</p>
      </header>

      <main className="main">
        <section className="calculator-card">
          <input
            type="text"
            inputMode="numeric"
            placeholder="Region A UTC offset (e.g. 9)"
            value={offsetA}
            onChange={(e) => setOffsetA(e.target.value.replace(/[^0-9-]/g, ""))}
          />

          <input
            type="text"
            inputMode="numeric"
            placeholder="Region B UTC offset (e.g. -5)"
            value={offsetB}
            onChange={(e) => setOffsetB(e.target.value.replace(/[^0-9-]/g, ""))}
          />

          <input
            type="text"
            inputMode="numeric"
            placeholder="Work start hour (0–23)"
            value={startHour}
            onChange={(e) => setStartHour(e.target.value.replace(/[^0-9]/g, ""))}
          />

          <input
            type="text"
            inputMode="numeric"
            placeholder="Work end hour (0–23)"
            value={endHour}
            onChange={(e) => setEndHour(e.target.value.replace(/[^0-9]/g, ""))}
          />

          <button onClick={handleCalculate}>Calculate</button>
        </section>

        {resultText && (
          <section className="result-card">
            <strong>{resultText}</strong>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}

export default TimeZoneOverlap;
