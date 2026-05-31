import { useState } from "react";

function KeyboardEvents() {
  const [value, setValue] = useState("");
  const [lastKey, setLastKey] = useState("");

  function handleKeyDown(event) {
    setLastKey(event.key);

    if (event.key === "Enter") {
      alert("Bạn nhập: " + value);
    }

    if (event.key === "Escape") {
      setValue("");
    }
  }

  return (
    <div>
      <h2>Keyboard Events</h2>

      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <p>Phím cuối: {lastKey}</p>
    </div>
  );
}

export default KeyboardEvents;