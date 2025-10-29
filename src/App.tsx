import { useState } from "react";
import { add } from "./stringCalculator";
import "./App.css";

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
    <main style={{ padding: "20px", backgroundColor: "#fff", color: "#333" }}>
      <img
        src="https://images.unsplash.com/photo-1594352161389-11756265d1b5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="A piece of string on a surface, representing the string calculator concept"
        width={600}
        height={400}
      />

      <h1>String Calculator</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCalculate();
        }}
      >
        <label htmlFor="number-input">
          <h2>Enter numbers</h2>
        </label>
        <textarea
          id="number-input"
          style={{
            margin: "10px 0",
            color: "#333",
            padding: "8px",
            border: "2px solid #ccc",
            borderRadius: "4px",
            width: "100%",
            minHeight: "80px",
            fontSize: "16px",
          }}
          placeholder="Enter numbers (comma or newline separated) "
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#008cba",
            color: "#fff",
            border: "2px solid #008cba",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Calculate
        </button>
      </form>

      {result !== null && <p style={{ color: "green" }}>Result: {result}</p>}
      {error && (
        <p role="alert" style={{ color: "red" }}>
          Error: {error}
        </p>
      )}
    </main>
  );
};

export default App;
