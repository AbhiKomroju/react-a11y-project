import { useState } from "react";
import { add } from "./stringCalculator";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string>("");

  const handleCalculate = () => {
    try {
      setError("");
      const result = add(input);
      setResult(result);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Unknown error occured"
      );
      setResult(null);
    }
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#fff", color: "#333" }}>
      <img
        src="https://images.unsplash.com/photo-1594352161389-11756265d1b5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="A piece of string on a surface, representing the string calculator concept"
        width={600}
        height={400}
      />

      <h1>String Calculator</h1>

      <label htmlFor="number-input">
        <h2>Enter numbers</h2>
      </label>
      <textarea
        id="number-input"
        style={{ margin: "10px 0", color: "#333" }}
        placeholder="Enter numbers"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        type="button"
        onClick={handleCalculate}
        style={{
          padding: "10px",
          backgroundColor: "#008cba",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Calculate
      </button>

      {result !== null && <p style={{ color: "green" }}>Result: {result}</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <div role="alert">
        <p>Make sure you enter numbers correctly!</p>
      </div>
    </div>
  );
};

export default App;
