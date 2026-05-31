import { useState } from "react";

function ClickEvents() {
  const [message, setMessage] = useState("Chưa click");
  const [count, setCount] = useState(0);

  function handleClick() {
    setMessage("Đã click!");
    setCount(count + 1);
  }

  function handleReset() {
    setMessage("Đã reset!");
    setCount(0);
  }

  return (
    <div>
      <h2>Click Events</h2>

      <p>{message}</p>
      <p>Số lần click: {count}</p>

      <button onClick={handleClick}>
        Click me
      </button>

      <button onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default ClickEvents;