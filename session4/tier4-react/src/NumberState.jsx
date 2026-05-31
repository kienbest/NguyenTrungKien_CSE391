import { useState } from "react";

function NumberState() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "20px" }}>
      <h2
        style={{
          color:
            count > 0
              ? "green"
              : count < 0
              ? "red"
              : "black",
        }}
      >
        Bộ đếm: {count}
      </h2>

      <p>
        {count > 0
          ? "Số dương"
          : count < 0
          ? "Số âm"
          : "Bằng 0"}
      </p>

      <button onClick={() => setCount(count + 1)}>
        +1
      </button>

      <button onClick={() => setCount(count - 1)}>
        -1
      </button>

      <button onClick={() => setCount(count + 5)}>
        +5
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default NumberState;