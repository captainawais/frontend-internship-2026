import React, { useState } from "react";
import Counter from "./Counter";

function App() {

  const [count, setCount] = useState(0);

  // Increment
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement
  const decrement = () => {
    setCount(count - 1);
  };

  // Reset
  const reset = () => {
    setCount(0);
  };

  // Dynamic Status
  const getMessage = () => {

  if (count < 0) {
    return (
  <>
    Negative values detected ⚠️
    <br />
    Try making positive progress
  </>
);
  }

  else if (count === 0) {
    return "Start Your Journey 🚀";
  }

  else if (count < 5) {
    return "Great Progress 🔥";
  }

  else if (count < 10) {
    return "You're Improving Fast ⚡";
  }

  else {
    return "React Master Level 💎";
  }

};
  return (
    <div style={styles.container}>

      {/* CARD */}
      <div style={styles.card}>

        <h1 style={styles.heading}>
          React Smart Counter
        </h1>

        <p style={styles.subHeading}>
          Props & State Management Demo
        </p>

        {/* Counter */}
        <Counter value={count} />

        {/* Status */}
        <div style={styles.messageBox}>
          {getMessage()}
        </div>

        {/* Buttons */}
        <div style={styles.buttonContainer}>

          <button onClick={increment} style={styles.incrementBtn}>
            +
          </button>

          <button onClick={reset} style={styles.resetBtn}>
            Reset
          </button>

          <button onClick={decrement} style={styles.decrementBtn}>
            -
          </button>

        </div>

      </div>

    </div>
  );
}

const styles = {

  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
    fontFamily: "Arial",
  },

  card: {
    width: "400px",
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    padding: "40px",
    textAlign: "center",
    boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
  },

  heading: {
    marginBottom: "10px",
    color: "#111",
    fontSize: "38px",
  },

  subHeading: {
    color: "#666",
    marginBottom: "30px",
    fontSize: "16px",
  },

  messageBox: {
    marginTop: "20px",
    backgroundColor: "#f1f5f9",
    padding: "15px",
    borderRadius: "12px",
    fontWeight: "bold",
    color: "#0f172a",
    fontSize: "18px",
  },

  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginTop: "30px",
  },

  incrementBtn: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    border: "none",
    backgroundColor: "#22c55e",
    color: "white",
    fontSize: "30px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  decrementBtn: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    border: "none",
    backgroundColor: "#ef4444",
    color: "white",
    fontSize: "30px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  resetBtn: {
    padding: "15px 25px",
    borderRadius: "12px",
    border: "none",
    backgroundColor: "#3b82f6",
    color: "white",
    fontSize: "18px",
    cursor: "pointer",
    fontWeight: "bold",
  },

};

export default App;