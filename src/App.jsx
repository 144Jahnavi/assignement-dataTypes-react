import react, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  const isEven = count % 2 == 0 ? "Even" : "Odd";
  return (
    <div style={{ textAlign: "center", padding: "30px", fontFamily: "Arial" }}>
      <h2>⚙️ Counter with Even/Odd Check</h2>
      <h3>
        Counter: {count} → <span>{isEven}</span>
      </h3>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={increment}
          style={{
            margin: "5px",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Increment
        </button>

        <button
          onClick={decrement}
          style={{
            margin: "5px",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Decrement
        </button>

        <button
          onClick={reset}
          style={{
            margin: "5px",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;

