# AGENT.md — Cross-check instructions (Claude)

## Context

We are building a multi-calculator template (React + TypeScript, Vite).
Goal: ship 4 small calculator sites (later split into 4 separate deploy projects).
Current calculators:

1. Salary After Tax
2. Salary Raise %
3. Rent vs Deposit (Jeonse vs Wolse)
4. Time Zone Overlap

We keep the code minimal and copy-friendly.

## Non-negotiable rules

- Do NOT refactor architecture or introduce new libraries (Tailwind/MUI/shadcn/etc). Keep it plain CSS.
- Do NOT add routing, state managers, form libs, validation libs.
- Do NOT add dark-mode toggles or prefers-color-scheme. The UI is a fixed dark theme (dark-toned).
- Preserve the established pattern:
  - calculators/<name>/{types.ts, calculate.ts, formatResult.ts}
  - pages/<Calculator>.tsx (header/main/footer layout)
- Inputs MUST be:
  - `type="text"` (not number)
  - `inputMode="numeric"` (or decimal when needed)
  - sanitize input with regex in onChange
  - parse/validate in handler and early-return on invalid input
- All `useState` initial values MUST be empty string `""` (no default values), for global neutrality.
  - Example values should be in placeholders only.
- `format*Result(input, result)` MUST use BOTH `input` and `result`.
  - No unused variables; no unused params.
- Output must be 1 concise conclusion line (optionally with a short parenthetical containing key numbers).
- Language policy:
  - For global tool (TimeZoneOverlap) ALL UI copy must be English and must NOT mention any country (including Korea) in text or comments.
  - For KR-focused tools (salary/rent), Korean UI copy is acceptable.

## What you must review (cross-check list)

### A) Input/Validation correctness

- Ensure every calculator uses text inputs, sanitization, and proper numeric parsing.
- Ensure no NaN leaks into calculations.
- Ensure negative/zero values are handled (early return or meaningful message).

### B) Result formatting consistency

- `formatResult` uses the computed numbers AND includes key input numbers when meaningful.
- For Rent vs Deposit: the result should include both annual deposit cost and annual rent cost, not just the diff.
- For Salary Raise: include current/offered salary numbers in the sentence (uses `input`).
- For TimeZoneOverlap: result should be English and neutral: "Region A/Region B".

### C) TimeZoneOverlap logic sanity

- Uses UTC offsets (numbers, including negatives).
- Converts Region A working hours to Region B correctly via diff (offsetB - offsetA).
- Handles wrap-around 0–23 via modulo normalization.
- Working hours duration should be correct even if end < start (overnight shift).

### D) CSS / structure

- App/page layout must be semantic and consistent:
  - <header className="header">, <main className="main">, <footer className="footer">
  - cards: "calculator-card", "result-card"
- Base CSS must be deduplicated (no duplicate body/button/input blocks).
- UI should look like a dark-themed service (not a toy), but minimal (no extra design work).

## Deliverables expected from you (Claude)

1. List any violations of the rules above.
2. For each violation: propose the smallest patch (exact code edits).
3. If everything passes: reply "PASS" and mention any minor optional improvements (only if they are truly optional and small).

## Project notes

- We will split into 4 separate deployable projects later by copying this template; keep everything copy-friendly.
- Avoid over-engineering and keep code readable.
